import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProfile() {
      try {
        let response = await fetch("https://api.github.com/users/jideotetic");
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let result = await response.json();
        setProfile(result);
        setError(null);
        console.log(result);
      } catch (err) {
        setError(err.message);
        setProfile(null);
      }

      return setLoading(false);
    }

    getProfile();
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="React app created to fetch Abdulbasit Yusuf profile from github showing the list of repositories have and links to each repository"
        />
      </Helmet>
      <p style={{ fontSize: "1.5rem" }}>Hi, I'm</p>
      <h1 style={{ fontSize: "2rem" }}>Abdulbasit Yusuf</h1>
      <p>
        {loading && <span>Loading image...</span>}
        {error && (
          <span>
            {`There is a problem fetching the picture - ${error}`}
            <img
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "block",
                margin: "0 auto",
              }}
              src="ope"
              alt="Abdulbasit posing for the camera"
            />
          </span>
        )}
      </p>
      <>
        {profile && (
          <>
            <img
              src={profile.avatar_url}
              alt=""
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </>
        )}
      </>

      <p style={{ textAlign: "left" }}>
        Frontend Engineer in training. Currently learning Frontend Engineering
        in Altschool Africa as one of the pioneer student. The program
        kickstarted in April 2022, and the first semester lasted for 3 months
        where i was able to learn HTML, CSS and JavaScript. Second semester
        began in October and i was able to learn the concept of Git and Github,
        Open Source Contribution, Technical Writing and React. I am building
        this react project as part of the requirement to scale through to third
        semester as this will be testing my knowledge of every concept I've
        learnt do far.
      </p>
    </>
  );
}
