import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { FetchAPI } from "../utils/FetchAPI";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    FetchAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );
    FetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  return (
    <Box minHeight={"92vh"}>
      <Box sx={{}}>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(94,94,160,1) 35%, rgba(80,196,220,1) 100%)",
            height: "300px",
            zIndex: "10",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-105px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
