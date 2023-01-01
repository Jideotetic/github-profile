import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";

export default function Repos({linkColor}) {
  const [page, setPage] = useState(1);

  const [repos, error] = useFetch(
    "https://api.github.com/users/Jideotetic/repos"
  );

  const PER_PAGE = 5;
  const pages = 4;
  const skip = page * PER_PAGE - PER_PAGE;

  return (
    <>

      { error && <div>{`Unable to fetch ${error}`}</div>}

      {repos && (
        <div>
          <h2>List of Repos</h2>
          <ul>
            {repos.slice(skip, skip + PER_PAGE).map((repo) => {
              return (
                <li key={repo.id}>
                  <Link className={linkColor}  to={`/repos/${repo.name}`}>{repo.name}</Link>
                </li>
              );
            })}
          </ul>

          <p>
            Pages: {page} of {pages}
          </p>

          {
            <button
              disabled={page <= 1}
              aria-disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              prev
            </button>
          }

          {repos &&
            Array.from({ length: pages }, (value, index) => index + 1).map(
              (repo) => (
                <button key={repo} onClick={() => setPage(repo)}>
                  {repo}
                </button>
              )
            )}

          {
            <button
              disabled={page >= 4}
              aria-disabled={page >= 4}
              onClick={() => setPage((prev) => prev + 1)}
            >
              next
            </button>
          }

        </div>
      )}

      <Outlet />
    </>
  );
}
