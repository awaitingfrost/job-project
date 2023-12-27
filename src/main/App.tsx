import Layout from "./Layout";
import '../index.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import AllJobs from "../components/AllJobs";

const App = () => {
  return (
    <Layout >
      <Routes>
        <Route path="/all_jobs" element={<AllJobs />}>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App