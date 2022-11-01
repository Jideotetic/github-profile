import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Repositories() {
    const [profile, setProfile] =useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
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
                setError(null);
                console.log(result);            }
            catch(err) {
                setError(err.message);
                setProfile(null);
                console.log(err.message)
                
            }
           
            return setLoading(false);
            
        }

        getProfile();

    }, [])

    

    return(
        <>
            <Helmet>
                <meta name="description" content="List of my repositories fetched from github" />
            </Helmet>
            <h1>List of Repositories</h1>
            <p>
                {loading && <span>Loading...</span>}
                {error && <span>{`There is a problem fetching the repositories - ${error}`}</span>}
            </p>
            <ul >
                {
                    profile && profile.map((repo) => {
                        return (<li style={{
                            marginBottom: "20px"
                        }} key={repo.id}><Link  to={`/repositories/${repo.name}`}>{repo.name}</Link></li>)
                    })
                }
            </ul>

            {/* <Outlet /> */}
        
        </>
    );
}