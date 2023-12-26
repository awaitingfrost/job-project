import Layout from "./Layout";
import '../index.css'
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Layout >
      <Routes>
        <Route path="/" element={<p className="text-2xl font-bold">hello</p>}>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App