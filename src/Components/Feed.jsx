import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import { fetchFromAPI } from '../utils/FetchFromAPI.js';
import Video from './Video';

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setselectedCategory} />

        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Ajay@2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'scroll', height: '90vh', flex: 2, '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,.5)' } }}>
        <Typography variant="h4" fontweight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
