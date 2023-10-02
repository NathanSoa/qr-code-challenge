import styled from "styled-components";

export const QrCodeContainer = styled.div`
    margin: 0 auto;
    margin-top: 10%;
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 2rem;

    background-color: ${({ theme }) => theme["white"]};
    border-radius: 16px;
    text-align: center;
    font-size: 0.925rem;
    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);

    padding: 2rem;

    span {
        color: ${({ theme }) => theme["grayish-blue"]};
        font-size: 1.125rem;
    }

    img {
        width: 350px;
        border-radius: 16px;
    }
`
