import { Route, Routes, Link, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Repos from "../pages/Repos";
import Repo from "../pages/Repo";

export default function Router({ linkColor }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="repos">
          <Route index element={<Repos linkColor={linkColor} />} />
          <Route path=":repoName" element={<Repo />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              Error 404 <br />
              Page not found
              <p>
                Go back{" "}
                <Link to="/" onClick={redirect("/home")}>
                  Home
                </Link>
              </p>
            </div>
          }
        />
      </Routes>
    </>
  );
}
