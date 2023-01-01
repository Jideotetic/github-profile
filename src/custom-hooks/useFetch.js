import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile(url) {
      try {
        let res = await fetch(url);
        if (!res.ok) {
          throw new Error(`This is an HTTP error the status is ${res.status}`);
        }
        res = await res.json();
        setProfile(res);
        setRepos(res);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProfile(null);
        setRepos(null);
      }

      return setLoading(false);
    }

    fetchProfile(url);
  }, [url]);

  return [profile, error, loading, repos];
}

