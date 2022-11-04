import { redirect } from "react-router-dom";


export default function ErrorBoundaryTest() {
    return (
        <>
            <h1>Jide</h1>

            {redirect("/home")}
            
        </>
    )
}