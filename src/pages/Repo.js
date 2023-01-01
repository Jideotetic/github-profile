import { useParams } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";

export default function Repo() {
  const { repoName } = useParams();
  const [repos, error] = useFetch(
    "https://api.github.com/users/Jideotetic/repos"
  );

  const info = repos.filter((repo) => repo.name === repoName)[0];
  if (!info) {
    return <>No such repo</>;
  }

  return (
    <>

      {error && <div>{`Unable to fetch ${error}`}</div>}

      {info && (
        <>
          <h2>{info.name}</h2>
          <p>
            Check out the repo on github{" "}
            <a href={`https://www.github.com/Jideotetic/${repoName}`}>here</a>
          </p>
        </>
      )}
    </>
  );
}
