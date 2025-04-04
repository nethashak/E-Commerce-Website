import React, { useState } from "react";
import "../component/ProductOptions.css"; // Add this for styling

const ProductOptions = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("white");

  const sizes = ["XL", "L", "M", "S", "XS"];
  const colors = ["black", "#0f8777", "#d41e2a", "#dbc81f", "white", "#bd5a09"];

  return (
    <div className="options-container">
      {/* Size Selection */}
      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? "selected" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Color Selection */}
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-button ${selectedColor === color ? "selected" : ""}`}
            style={{
              backgroundColor: color,
              border: selectedColor === color ? "2px solid black" : "1px solid #ccc",
            }}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductOptions;
