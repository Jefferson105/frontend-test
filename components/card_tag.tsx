import { FunctionComponent } from 'react';

import Style from '../styles/blocks/tag_card';

interface Props {
    title: string;
    number: string;
    icon: string;
    percent: number;
}

const CardTag: FunctionComponent<Props> = ({
    title,
    number,
    icon,
    percent
}) => {
    return (
        <Style>
            <div style={{ width: '64px' }}>
                <Style.Icon>
                    <img src={icon} />
                </Style.Icon>
            </div>
            <div style={{ paddingLeft: '20px', flex: 1 }}>
                <Style.Title>{title}</Style.Title>
                <Style.Number>{number}</Style.Number>
                <Style.Footer>
                    <Style.Percent>
                        <img src="/arrow_up.svg" /> +{percent}%
                    </Style.Percent>
                    <Style.Interrogation src="/interrogation.svg" />
                </Style.Footer>
            </div>
        </Style>
    );
};

export default CardTag;
