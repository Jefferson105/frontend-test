import styled from 'styled-components';

import Input from './input';
import Label from './label';
import Show from './show';

const MainInput = styled.div`
    width: 100%;
    margin-bottom: 20px;
    position: relative;
`;

MainInput.Input = Input;
MainInput.Label = Label;
MainInput.Show = Show;

export default MainInput;
