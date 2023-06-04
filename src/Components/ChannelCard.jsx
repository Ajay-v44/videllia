import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px solid #e3e3e3',
            margin: '0 auto',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'rotate(5deg)',
            },
          }}
        />
        <Typography variant="h6" sx={{ lineHeight: '1.2', marginBottom: '4px' }}>
          {channelDetail?.snippet?.title} <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray', opacity: 0.8 }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
