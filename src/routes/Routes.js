import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home.js"))
const Repositories = lazy(() => import("../pages/Repositories.js"))
const Repository = lazy(() => import("../pages/Repository"))
const ErrorBoundaryTest = lazy(() => import("../pages/ErrorBoundaryTest"))



export default function Router() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/errorboundarytest" element={<ErrorBoundaryTest />} />
                <Route path="repositories" >
                    <Route index element={<Repositories />} />
                    <Route path=":repoName" element={<Repository />} />
                </Route>
                <Route path="*" element={<div>Error 404 <br />Page not found</div>} />
            </Routes>
        </>
    )
}