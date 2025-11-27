import React from "react";

const ImageSlider = () => {
  const logos = [
    "/6a7a3f5c45daecfa575a203714e92d34.jpg",
    "/download.webp",
    "NIKE-INC.jpg",
    "/OIP (1).webp",
    "/OIP (2).webp",
    "/OIP (3).webp",
    "/Puma-Logo-1978-1980.png",
  ];

  return (
    <div className="w-full overflow-hidden py-6 bg-white">
      <div className="flex items-center gap-10 animate-scroll">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all"
            alt="brand"
          />
        ))}

        {/* Duplicate logos for smooth infinite scroll */}
        {logos.map((logo, index) => (
          <img
            key={`dup-${index}`}
            src={logo}
            className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all"
            alt="brand"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
