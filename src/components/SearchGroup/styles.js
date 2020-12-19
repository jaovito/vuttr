import styled from 'styled-components';

export const SearchContainer = styled.form`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-input {
        width: 40%;
        height: 3rem;

        padding: 1rem;

        margin-right: 1rem;

        background: var(--color-darker-white) 0% 0% no-repeat padding-box;
        border: 1px solid var(--color-darkest-white);
        border-radius: 5px;
        opacity: 1;

        outline: 0;

        &::placeholder {
           color: var(--color-lighter-ink); 
        }
    }

    .checkbox {
        margin-right: 0.5rem
    }

    button {
        width: 20%;
        max-width: 100px;

        background: #365DF0;

        border: 0;
        outline: 0;
        border-radius: 5px;

        opacity: 1;

        text-align: center;
        letter-spacing: 0.36px;
        color: var(--color-white);
        opacity: 1;

        padding: 0.5rem 2rem;
        cursor: pointer;

        &:hover {
            background: #2F55CC;
        }
    }
`