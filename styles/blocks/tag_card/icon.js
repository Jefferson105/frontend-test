import styled from 'styled-components';

const Icon = styled.figure`
    width: 64px;
    height: 64px;
    background: linear-gradient(180deg, #f4f7fe 0%, #fbfcff 100%);
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 24px;
        height: 24px;
    }
`;

export default Icon;
