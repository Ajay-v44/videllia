import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import './SearchBar.css'; // Import the custom CSS file

const SearchBar = () => {
  return (
    <Paper
      component="form"
      className="search-bar-container" // Add the custom CSS class
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input className='search-bar' placeholder='Search...' value="" onChange={() => {}} />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
