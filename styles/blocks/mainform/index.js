import styled from 'styled-components';

import Content from './content';
import Form from './form';
import Logo from './logo';
import Text from './text';
import Title from './title';

//width: 53.3%;

const MainForm = styled.div`
    width: ${({ width }) => width};
    display: flex;
    justify-content: center;
    padding-top: 50px;
    transition: all 0.3s ease;
`;

MainForm.Content = Content;
MainForm.Form = Form;
MainForm.Logo = Logo;
MainForm.Text = Text;
MainForm.Title = Title;

export default MainForm;
