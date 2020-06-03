import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        color: #1c1637;
    }
    30% {
        color: #fff;
    }
    85% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        color: #1c1637;
    }
`;

const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    margin-top: 32px;
    margin-bottom: 12px;
    animation: ${animation} 4s ease 0s 1;
    span {
        text-transform: capitalize;
    }
`;

export default Title;
