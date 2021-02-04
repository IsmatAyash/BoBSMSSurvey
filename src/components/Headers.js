import React from "react";
import { Header, Image } from "semantic-ui-react";

const Headers = ({ first }) => {
  return (
    <>
      {first ? (
        <Header as="h2" icon textAlign="center">
          <Image centered size="massive" src="/logot.png" />
          <Header.Content>SME Business Survey</Header.Content>
        </Header>
      ) : (
        <Header as="h2" icon textAlign="center">
          <Image centered size="massive" src="/logot.png" />
          <Header.Content>SME Business Survey</Header.Content>
          <Header.Subheader style={{ color: "blue", fontSize: 20 }}>
            Welcome! Thank you for your time
          </Header.Subheader>
        </Header>
      )}
    </>
  );
};

export default Headers;
