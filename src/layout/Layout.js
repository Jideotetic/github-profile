import React from "react";
import { NavLink } from "react-router-dom";

function CustomNavLink({to, ...prop}) {
    let activeStyle = {
        color: "green"
    }
    return (
            <NavLink style={({isActive}) => 
                    isActive ? activeStyle : {textDecoration: "none"}
                }
                to={to}
                end
                {...prop}
            
            />
    )
}

export default function Layout() {

    return(
        <nav style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/repositories">Repositories</CustomNavLink>
            <CustomNavLink to="errorboundarytest">ErrorBoundaryTest</CustomNavLink>
        </nav>
    )
}