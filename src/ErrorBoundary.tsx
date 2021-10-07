import React, { Component, ErrorInfo } from "react";

interface ErrorState {
  error: Error;
}

export class ErrorBoundary extends Component<any, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { error: { name: "", message: "" } };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error: error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.errorInfo) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
