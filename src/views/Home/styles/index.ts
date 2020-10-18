import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-items: center;

  header {
    h1 {
      color: var(--colors-white);
      font-size: var(--spacing-md);
      font-weight: var(--fontWeights-bold);
      padding: var(--spacing-md);
    }
  }
`;
