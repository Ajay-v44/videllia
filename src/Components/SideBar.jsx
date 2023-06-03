import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/Constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const buttonStyle = {
    background: "transparent",
    color: "white",
    borderRadius: "20px",
    padding: "8px 15px",
    margin: "5px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease",
    "&:hover": {
      background: "red",
    },
  };

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            ...buttonStyle,
            background: category.name === selectedCategory ? "black" : "transparent",
            "&:hover": {
              background: category.name === selectedCategory ? "black" : "red",
            },
          }}
          key={category.name}
        >
          <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
