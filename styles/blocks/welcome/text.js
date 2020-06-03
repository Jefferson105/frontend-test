import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        color: #666372;
    }
    30% {
        color: #fff;
    }
    85% {
        opacity: 0;
    }
    100% {
        color: #666372;
        opacity: 1;
    }
`;

const Title = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    animation: ${animation} 4s ease 0s 1;
`;

export default Title;
