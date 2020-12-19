import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: rgba(0,0,0,0.8);

    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;

`

export const Content = styled.section`
    background-color: var(--color-white);
    border: 1px solid black;
    border-radius: 8px;

    width: 80%;
    max-width: 570px;


    padding: 5rem;

    h1 {
        align-self: flex-start;
        margin-bottom: 4rem;
        letter-spacing: 0.52px;
        color: #170C3A;
        opacity: 1;
    }

    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        button {
            border: 0;
            outline: 0;
            cursor: pointer;

            padding: 1rem;

            background: transparent;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;


    fieldset {
        border: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 5%;

        label {
            color: var(--color-ink);
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 1rem;
        }

        input {
            height: 4rem;
        }
    }

    fieldset input, fieldset textarea {
        width: 90%;
        background: #F5F4F6 0% 0% no-repeat padding-box;
        border: 1px solid #EBEAED;
        border-radius: 5px;
        opacity: 1;

        resize: none;
        outline: 0;
    }

    button {
        align-self: flex-end;
        width: 60%;
        max-width: 150px;

        background: #365DF0;

        border: 0;
        outline: 0;
        border-radius: 5px;

        opacity: 1;

        text-align: center;
        letter-spacing: 0.36px;
        color: var(--color-white);
        opacity: 1;

        padding: 1rem 1rem;
        cursor: pointer;

        &:hover {
            background: #2F55CC;
        }
    }
`