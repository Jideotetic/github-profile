import useFetch from "../custom-hooks/useFetch";
import useReadmeFetch from "../custom-hooks/useReadmeFetch";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
  const [profile, error] = useFetch(
    "https://api.github.com/users/jideotetic"
  );

  const [readme] = useReadmeFetch("Jideotetic", "Jideotetic");

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta
            name="description"
            content="React app created to fetch Abdulbasit Yusuf profile from github showing the list of repositories have and links to each repository"
          />
        </Helmet>
        {error && <h3>{`Unable to fetch ${error}`}</h3>}
        {profile && readme && (
          <>
            <h2>{profile.name}</h2>
              <img src={profile.avatar_url} className="img" alt="" />
            <p>
              {readme.slice(1, 32)}.... {profile.bio}
            </p>
          </>
        )}
      </HelmetProvider>
    </>
  );
}
