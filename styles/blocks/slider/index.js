import styled from 'styled-components';

import Close from './close';
import Content from './content';
import Header from './header';
import Pagination from './pagination';
import PagItem from './pag_item';
import Text from './text';
import Title from './title';

const Slider = styled.aside`
    width: ${({ width }) => width};
    height: 100%;
    background-color: #0047ff;
    padding: 50px 65px 0 80px;
    background-image: url(circle_bg.svg);
    background-repeat: no-repeat;
    background-position: 50% 400px;
    display: flex;
    justify-content: center;
`;

Slider.Close = Close;
Slider.Content = Content;
Slider.Header = Header;
Slider.Pagination = Pagination;
Slider.PagItem = PagItem;
Slider.Text = Text;
Slider.Title = Title;

export default Slider;
