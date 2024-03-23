import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4d62fc;
    --secondary-color: #a433fc;
    --tertiary-color: #0d0d0d;
    --quaternary-color: #171717;
    --quintennial-color: #212121;
    --sextenary-color: #d2d2d2;
    --septenary-color: #fefefe;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--quintennial-color);
  }

  a,
  button {
    transition: 0.4s ease;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .logo {
    font-family: 'Lilita One', sans-serif;
  }
`;

export const Wrapper = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 0.5rem;
`;

export default GlobalStyles;
