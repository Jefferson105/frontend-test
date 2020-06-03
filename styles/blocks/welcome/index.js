import styled, { keyframes } from 'styled-components';

import Logo from './logo';
import Text from './text';
import Title from './title';

const animation = keyframes`
    0% {
        background-color: #fff;
    }
    30% {
        background-color: #0047FF;
    }
    100% {
        background-color: #fff;
    }
`;

const Welcome = styled.div`
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    padding-top: 254px;
    padding-left: 176px;
    animation: ${animation} 3s ease 0s 1;
`;

Welcome.Logo = Logo;
Welcome.Text = Text;
Welcome.Title = Title;

export default Welcome;
