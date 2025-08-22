import React from 'react';
import { Box } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DefaultLatout (){
    return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1}>
        <Header />
        <Box p={2}>
          <Outlet /> {/* 라우팅 된 페이지가 여기 들어감 */}
        </Box>
      </Box>
    </Box>
    );
};
