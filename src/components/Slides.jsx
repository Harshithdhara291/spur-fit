import { FcAndroidOs } from "react-icons/fc";
import styled from "styled-components";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    faceEmoji: "😊",
    heading: "Happy",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus mauris id est fermentum, id rhoncus nunc sagittis.",
  },
  {
    id: 2,
    faceEmoji: "😎",
    heading: "Cool",
    paragraph:
      "Nulla aliquet quam id ultricies dictum. Phasellus in nisi sed ligula dictum fermentum. Quisque id odio sed urna fringilla blandit.",
  },
  {
    id: 3,
    faceEmoji: "😋",
    heading: "Yummy",
    paragraph:
      "Nam at convallis odio, in pulvinar lorem. Fusce pellentesque nunc ac justo laoreet, in convallis sem vehicula. Vestibulum eu tortor lectus.",
  },
  {
    id: 4,
    faceEmoji: "😍",
    heading: "Lovely",
    paragraph:
      "Etiam rutrum odio eget lorem lobortis, non malesuada justo vehicula. In hac habitasse platea dictumst. Duis eget tortor sed felis tempor ultrices.",
  },
  {
    id: 5,
    faceEmoji: "😂",
    heading: "Funny",
    paragraph:
      "Proin vestibulum lorem non finibus bibendum. Curabitur luctus ligula id mauris lobortis, in suscipit ex lobortis. Nullam at odio in turpis maximus ultricies.",
  },
  {
    id: 6,
    faceEmoji: "😴",
    heading: "Sleepy",
    paragraph:
      "Vivamus a tellus auctor, dictum justo a, aliquet ligula. Nullam ultricies eros id justo egestas, eu varius velit commodo. Suspendisse potenti.",
  },
];

const colors = [
  "#ECEFF1",
  "#E0F7FA",
  "#F1F8E9",
  "#FCE4EC",
  "#FFF9C4",
  "#F3E5F5",
  "#FFFDE7",
  "#E0F2F1",
  "#FFF3E0",
  "#F1F1F1",
  "#EDE7F6",
  "#E8F5E9",
];

const getrandomcolor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default function Slides() {
  return (
    <Container>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <h1>
          Does this sound familiar...
          <FcAndroidOsIcon />
        </h1>
      </motion.div>

      <motion.ul
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        {data.map((obj) => {
          return (
            <ListItem key={obj.id} getrandomcolor={getrandomcolor}>
              <h1>{obj.faceEmoji}</h1>
              <h2>You are {obj.heading}</h2>
              <p>{obj.paragraph}</p>
            </ListItem>
          );
        })}
      </motion.ul>
    </Container>
  );
}

const Container = styled.div`
  min-height: 120vh;
  background-color: #fff;
  padding: 2rem;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    padding-left: 0px;
    padding: 2rem 0;
    gap: 2rem;
    scrollbar-width: none;
  }
  h1 {
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;
  }
`;

const ListItem = styled.li`
  padding: 1rem 3rem;
  width: 30rem !important;
  height: 18rem;
  /* border: 1px solid red; */
  margin: 1rem;
  border-radius: 1rem;
  background-color: aliceblue;
  cursor: pointer;
  transition: transform 0.3s ease, font-size 0.3s ease;
  background-color: ${(props) => props.getrandomcolor()};
  &:hover {
    transform: scale(1.05) rotate(-3deg);
    background-color: #2e5efc;
    color: #fff;
  }
  p {
    text-wrap: wrap;
  }
`;

const FcAndroidOsIcon = styled(FcAndroidOs)`
  font-size: 4rem;
  margin-left: 2rem;
  border: 4px solid #7cb342a9;
  border-radius: 2.5rem;
  transform: rotate(-30deg);
`;
