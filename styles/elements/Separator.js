import styled from 'styled-components';

const Separator = styled.p`
    position: relative;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #666372;
        position: relative;
        z-index: 1;
        background-color: #fff;
        padding: 0 7px;
    }
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        height: 1px;
        width: 100%;
        background: #e8e7ef;
    }
`;

export default Separator;
