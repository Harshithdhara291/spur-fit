import styled from "styled-components";

export default function EQbeatsIQ() {
  return (
    <Container>
      <h2>EQ beats IQ</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
        mauris id est fermentum, id rhoncus nunc sagittis.{" "}
      </p>
      <p>
        {" "}
        Nulla aliquet quam id ultricies dictum. Phasellus in nisi sed ligula
        dictum fermentum. Quisque id odio sed urna fringilla blandit. Nam at
      </p>
    </Container>
  );
}

const Container = styled.div`
  height: 60vh;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 3rem 2rem;
  padding-top: 8rem;
  /* border: 1px solid red; */
  p{
    width: 30%;
    font-size: 1.3rem;
    color: #686868;
  }
`;
