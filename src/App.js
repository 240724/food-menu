import Header from "./pages/Header";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Logout from "./pages/Logout";
import Search from "./pages/Search";
import PrivateRouter from "./pages/PrivateRouter";
import { useState } from "react";
import UserInformation from "./pages/UserInformation";
import FoodDetail from "./pages/FoodDetail";
function App() {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [reviewedFoods, setReviewedFoods] = useState([]);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/search/:id"
          element={
            <FoodDetail
              setReviewedFoods={setReviewedFoods}
              reviewedFoods={reviewedFoods}
            />
          }
        />
        <Route index path="/" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Navigate to={"/login"} />} />
        <Route path="/user" element={<PrivateRouter user={user} />}>
          <Route
            path=""
            element={
              <UserInformation
                userName={userName}
                reviewedFoods={reviewedFoods}
              />
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Login
              setUser={setUser}
              setUserName={setUserName}
              setUserPassword={setUserPassword}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
