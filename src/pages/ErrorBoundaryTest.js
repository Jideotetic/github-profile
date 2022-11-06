import { redirect } from "react-router-dom";


export default function ErrorBoundaryTest() {
    return (
        <>
            {redirect("/home")}
        </>
    )
}