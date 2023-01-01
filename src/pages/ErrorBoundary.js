import React from "react";
import { Link, redirect } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <main>
            <h1>Something went wrong.</h1>
            <p>Go back{" "}<Link to="/" onClick={redirect("/home")}>Home</Link></p>
          </main>
          
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
