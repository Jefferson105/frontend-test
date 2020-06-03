import { useState, useEffect, useRef } from 'react';

import Style from '../styles/blocks/input';

const Input = ({
    label,
    placeholder,
    defaultValue,
    type,
    onChangeText,
    getRef
}) => {
    const inputRef = useRef(null);

    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);

    const isPassword = type == 'password';

    useEffect(() => {
        onChangeText(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useEffect(() => {
        getRef(inputRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Style>
            <Style.Label>
                {label} {isPassword && <button>Recuperar senha</button>}
            </Style.Label>
            <Style.Input
                required
                ref={inputRef}
                value={defaultValue}
                onChange={(e) => setValue(e.target.value)}
                type={show ? 'text' : type}
                placeholder={placeholder}
            />
            {isPassword && (
                <Style.Show onClick={() => setShow(!show)}>
                    <img src={value.length ? '/view_blue.svg' : '/view.svg'} />
                    {show ? 'Esconder' : 'Mostrar'}
                </Style.Show>
            )}
        </Style>
    );
};

export default Input;
