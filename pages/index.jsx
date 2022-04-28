import styled from "styled-components";
import Button from '@mui/material/Button';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const TitleRed = styled(Button)`
  color: red;
  background: blue;
`;

// Use Title and Wrapper like any other React component – except they're styled!
export default function App() {
  return (
    <div>
      <Title>Hello World!</Title>
      <TitleRed>Hello World!</TitleRed>z
      <Button>666</Button>
    </div>
  );
}
