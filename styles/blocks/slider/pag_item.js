import styled, { css } from 'styled-components';

const PagItem = styled.li`
    margin-right: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    cursor: pointer;
    ${({ selected }) =>
        css`
            background-color: ${selected ? '#fff' : 'rgba(255,255,255,.16)'};
        `}
`;

export default PagItem;
