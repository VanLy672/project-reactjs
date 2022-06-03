import {Routes, Route, BrowserRouter,} from "react-router-dom"
import "./Asset/CSS/reset.css"
import MainLayout from "./Layout/mainLayout";
import HomePage from "./Page/HomePage";
import CompanyReview from "./Page/CompanyReview";
import ErrorPage from "./Page/ErrorPage";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage/>} />
            <Route path="companyreview" element={<CompanyReview />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
