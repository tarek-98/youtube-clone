import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannalDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Box sx={{ backgroundColor: `#000` }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channal/:id" element={<ChannalDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
