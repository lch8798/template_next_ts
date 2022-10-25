import { Layout } from "@components/index";

import styled from "styled-components";

export default function Custom404(): JSX.Element {
  return (
    <Layout>
      <Wrap>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Page Not Found</ErrorMessage>
      </Wrap>
    </Layout>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const ErrorCode = styled.h2`
  font-size: 30px;
`;

const ErrorMessage = styled.p`
  font-size: 22px;
`;
