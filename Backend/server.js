require("dotenv").config();
const User = require('./User');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Cart = require('./Cart');


const app = express();
app.use(express.json());
app.use(cors({
  origin: [ 'http://localhost:5174', "http://localhost:5173"],
  credentials: true,
}));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));



const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // typically "Bearer token"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' });
    console.log('Decoded JWT payload:', user); 
    req.user = user; // user info from token
    next();
  });

};

app.get("/products", async (req, res) => {
  const search = req.query.search || "";

  const products = await Product.find({
    name: { $regex: search, $options: "i" }
  });

  res.json(products);
});

// Create POST route to add items to the cart
app.post("/cart",authenticateToken, async (req, res) => {
  try {
     const userId = req.user.userId; 

      if (!userId) {
      return res.status(401).json({ message: "Unauthorized, userId missing" });
    }
    const { productId, name, price, image } = req.body;
     console.log(userId);
     console.log(req.body);

     
    if (!productId || !name || !price) {
      return res.status(400).json({ message: "Missing product details" });
    }

    // check if already in cart
    const existingItem = await Cart.findOne({ userId, productId });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json({ message: "Quantity updated", item: existingItem });
    }

    const newItem = new Cart({
      userId,
      productId,
      name,
      price,
      image,
      quantity: 1
    });
     
    await newItem.save();

    res.json({ message: "Added to cart", item: newItem });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT route for increasing quantity

app.put("/cart/increase/:id", authenticateToken, async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
     if (!item) return res.status(404).json({ error: "Item not found" });
    item.quantity += 1;
    await item.save();
    res.json(item);
  } catch (err) {
    console.error("Increase error:", err);
    res.status(500).json({ error: err.message });
  }
});

// PUT route for decrease quantity

app.put("/cart/decrease/:id", authenticateToken, async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (item.quantity > 1) {
      item.quantity -= 1;
      await item.save();
    } else {
      await Cart.findByIdAndDelete(req.params.id); // remove if 0
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// DELETE route 
app.delete("/cart/:id", authenticateToken, async (req, res) => {
  try {
    const deletedItem = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Optional: GET route to view all cart items
app.get("/cart",authenticateToken, async (req, res) => {
  const items = await Cart.find({ userId: req.user.id });
  res.json(items);
});

//user profile routes   

// Register user (hash password and save)
app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    user = new User({ email, password: hashedPassword, name });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login user (verify password and return JWT)
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Create JWT payload
    const payload = {
      userId: user._id,
      email: user.email,
    };

    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Generated JWT:", token);
res.json({ token, message: 'Login successful' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//GET route to fetch user profile data
  app.get('/userprofile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
