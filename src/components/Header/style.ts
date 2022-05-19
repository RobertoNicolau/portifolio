import styled from "styled-components";

export const Container = styled.header`
  header {
    margin: 0 auto;

    height: 5rem;
    width: 100vw;
    max-width: 80rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;

    h1 {
      color: var(--text-color);
      font-weight: 300;
      font-size: 1.2rem;
    }
    a {
      text-decoration: none;
    }
    button {
      font-size: 1rem;
      width: 9rem;
      height: 2.5rem;
      background: var(--secondary);
      border: 0.5px solid rgba(46, 229, 157, 0.4);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
      font-weight: bold;

      transition: all 0.3s ease 0s;
      &:hover {
        filter: brightness(1.1);
        box-shadow: 1px 5.3px 21.8px rgba(46, 229, 157, 0.4);
        transform: translateY(-5px);
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;

        margin-right: 1rem;
      }
    }
  }
`;
