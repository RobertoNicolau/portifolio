import { FaGithub } from "react-icons/fa";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <header>
        <h1>Roberto Nicolau | Web Developer Student 🧑‍💻</h1>
        <a href="https://github.com/RobertoNicolau" target="_blank">
          <button type="button">
            <FaGithub color="#00BFA6" />
            My Github
          </button>
        </a>
      </header>
    </Container>
  );
}
