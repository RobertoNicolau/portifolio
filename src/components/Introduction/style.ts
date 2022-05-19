import styled from "styled-components";

export const Container = styled.header`
  main {
    background: black;
    max-width: 80rem;
    margin: 0 auto;
    width: 100vw;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    section {
      max-width: 40rem;

      &:first-child {
        line-height: 3.5rem;
        font-weight: 700;
      }

      span {
        color: var(--text-color);
      }
      p {
        font-size: 1.2rem;
        margin-top: 2rem;
        color: var(--text-color);
        line-height: 1.8rem;

        span {
          color: #29ce8d;
        }
      }
    }
  }

  h1 {
    font-size: 3rem;
  }

  img {
    height: 30rem;
    width: 30rem;
  }
`;
