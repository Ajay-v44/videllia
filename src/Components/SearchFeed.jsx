import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/FetchFromAPI';
import Video from './Video';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: '100px' }}>
        Search Results for <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
