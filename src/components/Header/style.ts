import styled from "styled-components";

export const Container = styled.header`

    header{

        margin: 0 auto;

        height: 14rem;
        width: 100vw;
        max-width: 80rem;
        background: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;

        h1{
            color: var(--text-color);
            font-weight: 300;
        }
        button{
            width: 8rem;
            height: 3rem;
            color: var(--text-color);
            font-weight: 400;
            background: var(--background-color);
            border: 1rem transparent;
            border-radius: 0.50rem;

            img{
                width: 1rem;
                height: 1rem;
            }
        }
    }
`