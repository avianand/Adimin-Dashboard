import { Button, Typography } from "@material-ui/core";
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      // setTimeout(() => {
      //   history.push('/');
      // }, 4000);

      return (
        <>
          <div className="container text-center">
            <div className="column ">
              <div className="row-sm-12 my-2 text-center">
                <Typography variant="h5">Some error occured</Typography>
              </div>
              <div className="row-sm-12  my-2 text-center">
                <Typography variant="h6">Please wait !</Typography>
              </div>
              <div className="row-sm-12  my-2 text-center">
                <Typography variant="h7">
                  Redirecting you to homepage....
                </Typography>
              </div>
              <br />
              <div className="row-sm-12">
                {/* <Buttons size="large" handleRoute={() => browserRedirect("/")}>
                  <b>Go to home</b>
                </Buttons> */}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
