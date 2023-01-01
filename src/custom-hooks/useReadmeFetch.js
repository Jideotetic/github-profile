import { useEffect, useState } from "react";
import { fetchReadme } from "@varandas/fetch-readme";

export default function useReadmeFetch(username, url) {
  const [loading, setLoading] = useState(true);
  const [readme, setReadme] = useState("");

  useEffect(() => {
    async function fetchMyReadme() {
      let res = await fetchReadme({
        username: username,
        repository: url,
      });

      setReadme(res);

      return setLoading(false);
    }

    fetchMyReadme();
  }, [username, url]);

  return [readme, loading];
}

