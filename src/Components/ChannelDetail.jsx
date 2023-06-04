import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import ChannelCard from "./ChannelCard";
import Videos from "./Video";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(videosData?.items);
      } catch (error) {
        console.error("Error fetching channel details and videos:", error);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        {channelDetail && (
          <div
            style={{
              height: '300px',
              background: `url(${channelDetail.snippet.thumbnails.high.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 10,
            }}
          />
        )}
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {videos ? (
          <Videos videos={videos} />
        ) : (
          <p>Loading videos...</p>
        )}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
