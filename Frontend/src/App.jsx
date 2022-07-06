import React from "react";
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { PostJob } from "./components/PostJob";
import { JobList } from "./pages/JobList";


function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/jobs" element={ <JobList /> } />
        <Route path="/post/job" element={ <PostJob /> } />
      </Routes>

    </React.Fragment>
  );
}

export default App;
