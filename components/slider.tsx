import CardTag from './card_tag';

import Style from '../styles/blocks/slider';
import { FC } from 'react';

interface Props {
    onClose: Function;
    width: string;
}

const Slider: FC<Props> = ({ onClose, width }) => {
    return (
        <Style width={width}>
            <Style.Content>
                <Style.Header>
                    <Style.Pagination>
                        <Style.PagItem selected={true} />
                        <Style.PagItem />
                        <Style.PagItem />
                    </Style.Pagination>
                    <Style.Close onClick={onClose}>
                        <img src="/close.svg" />
                    </Style.Close>
                </Style.Header>
                <Style.Title>
                    Confira seus relatórios de venda e resgate suas comissões
                </Style.Title>
                <Style.Text>
                    Confira a evolução das suas vendas, veja sua comissão
                    aumentar e encontre novos caminhos para vender mais.
                </Style.Text>
                <CardTag
                    title="Pedidos"
                    icon="/tag.svg"
                    number="238"
                    percent={23}
                />
                <CardTag
                    title="Comissão"
                    icon="/price.svg"
                    number="R$ 10.389"
                    percent={31}
                />
            </Style.Content>
        </Style>
    );
};

export default Slider;
