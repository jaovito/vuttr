import styled, {css} from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;

    ${({visibleModal}) => visibleModal === false ? css`
        overflow: none;
    ` : css`
        overflow: auto;
    `}
`


export const Header = styled.header`
    margin-top: 10%;
    align-self: flex-start;
    margin-left: 10vw;
`

export const Content = styled.main`
    width: 80vw;

    margin-top: 6vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const Card = styled.div`
    margin-top: 3%;
    padding: 1.6rem;

    border: 1px solid var(--color-darkest-white);
    border-radius: 5px;
    opacity: 1;

    box-shadow: 0px 10px 10px var(--color-box-shadow);
    
    width: 90%;

    h1, p {
        margin-bottom: 5%;
    }

    .card-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        button {
            border: 0;
            background: transparent;
            cursor: pointer;
            outline: 0;

            &:hover {
                opacity: 0.8;
            }
        }
    }

`
