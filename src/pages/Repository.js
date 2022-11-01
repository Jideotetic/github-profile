import React, {useEffect, useState} from "react";
// import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";

export default function Repository() {
    const [profile, setProfile] =useState([]);
    const {repoName} = useParams()
    useEffect(() => {
        async function getProfile() {
            try {
                let response = await fetch("https://api.github.com/users/Jideotetic/repos"
                )
                if(!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    )
                }
                let result = await response.json()
                setProfile(result);
                           }
            catch(err) {
               
                setProfile([]);
               
                
            }
            
        }

        getProfile();

    }, [])

    console.log(repoName);

    const info = profile.filter((repo) => repo.name === repoName)[0];
    console.log(info);
    if (!info) {
        return <>No Such Repository</>
    }
    return (
        <>
            {/* <Helmet>
                <meta name="description" content="Repository detail and link to the github repository" />
            </Helmet> */}
            <p>Check out the repo on github <a href={`https://www.github.com/Jideotetic/${repoName}`}>here</a></p>
        </>
    )
}