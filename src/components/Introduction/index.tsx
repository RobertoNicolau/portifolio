import programmingImg from "../../assets/programming.svg";
import { Container } from "./style";

export function Introduction() {
  return (
    <Container>
      <main>
        <section>
          <span>Hey, welcome!</span>
          <h1>Let me introduce myself</h1>
          <p>
            I am 22 years old and a student at the Faculty of Technology of Rio
            Preto (FATECRP). I started to study programming through RocketSeat
            and also through the Curso em Vídeo channel. I am currently studying
            the main front-end technologies on the market to
            <span> become a professional programmer </span> in a few years.
          </p>
        </section>
        <img src={programmingImg} alt="Man programming" />
      </main>
    </Container>
  );
}
