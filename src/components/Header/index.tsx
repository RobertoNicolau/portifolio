import { FaGithub } from "react-icons/fa";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <header>
        <h1>Roberto Nicolau | Web Developer Student 🧑‍💻</h1>
        <button type="button">
          <a href="" target="_blank">
            <FaGithub color="#00BFA6" />
            My Github
          </a>
        </button>
      </header>
    </Container>
  );
}
