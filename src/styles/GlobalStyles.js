import { createGlobalStyle } from 'styled-components'

//criação dos estilos globais

const GlobalStyle = createGlobalStyle`
    :root {
    font-size: 60%;

    --color-white: #FFFFFF;
    --color-dark-white: #FCFCFD;
    --color-darker-white: #F5F4F6;
    --color-darkest-white: #EBEAED;
    --color-most-darkest-white: #DEDCE1;
    --color-ink: #170C3A;
    --color-light-ink: #8F8A9B;
    --color-lighter-ink: #B1ADB9;
    --color-lightest-ink: #C7C4CD;
    --color-darker-green: #0E995D;
    --color-dark-green: #10B26C;
    --color-green: #12DB89;
    --color-light-green: #88EDC4;
    --color-lighter-green: #B7F7D8;
    --color-lightest-green: #CFF9E6;
    --color-most-lightest-green: #E7FBF3;
    --color-darker-red: #A53F3F;
    --color-dark-red: #CC4C4C;
    --color-red: #F95E5A;
    --color-light-red: #FCAEAC;
    --color-lighter-red: #FCC6C5;
    --color-lightest-red: #FCD7D6;
    --color-most-lightest-red: #FEEFEE;
    --color-box-shadow: #0000000D;

    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100vh;
}

body {
    background-color: var(--color-dark-white);
}

#root {
    display: flex;
    align-items: center;
    justify-content: center;
}

body,
input,
button,
textarea {
    font: 500 1.6rem sans-serif;
    color: var(--color-ink);
}

h1 {
    color: var(--color-ink);
    line-height: 36px;
    font-size: 30px;
}

h2 {
    color: var(--color-ink);
    line-height: 32px;
    font-size: 26px;
}

.container {
    width: 90vw;
    max-width: 700px;
}

@media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}

`

export default GlobalStyle