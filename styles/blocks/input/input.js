import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    border: 1px solid #d9d7e1;
    border-radius: 8px;
    height: 56px;
    padding: 18px 20px;
    margin-top: 10px;
    &:focus {
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04),
            0px 0px 12px rgba(0, 71, 255, 0.08);
        border: 1px solid #0047ff;
    }
`;

export default Input;
