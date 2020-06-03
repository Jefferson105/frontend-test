import styled from 'styled-components';

import Footer from './footer';
import Icon from './icon';
import Interrogation from './interrogation';
import Number from './number';
import Percent from './percent';
import Title from './title';

const TagCard = styled.div`
    background-color: #fff;
    width: 256px;
    height: 128px;
    border-radius: 16px;
    display: flex;
    padding: 24px;

    > div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;
    }

    &:first-of-type {
        margin-top: 72px;
    }
    &:last-of-type {
        margin-left: auto;
        margin-top: 16px;
    }
`;

TagCard.Footer = Footer;
TagCard.Icon = Icon;
TagCard.Interrogation = Interrogation;
TagCard.Number = Number;
TagCard.Percent = Percent;
TagCard.Title = Title;

export default TagCard;
