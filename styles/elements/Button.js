import styled, { css } from 'styled-components';

const getStyle = (type) => {
    switch (type) {
        case 'google':
            return css`
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02),
                    0px 8px 16px rgba(0, 0, 0, 0.02), inset 0px 2px 0px #ffffff;
                border-radius: 4px;
                color: #1c1637;
                border: 1px solid #e8e7ef;
                img {
                    width: 24px;
                    height: 24px;
                    margin-right: 16px;
                }
            `;
        default:
            return css`
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                border-radius: 6px;
                background: #0047ff;
                color: #fff;
                margin-top: 12px;
            `;
    }
};

const Button = styled.button`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ type }) => getStyle(type)}
`;

export default Button;
