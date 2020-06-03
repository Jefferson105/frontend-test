import { useState, FC } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import Input from './input';

import Style from '../styles/blocks/mainform';
import { Button, Error, Separator } from '../styles/elements';

interface Props {
    width: string;
}

const SIGNIN = gql`
    mutation signIn($email: String!, $password: String!) {
        signIn(input: { email: $email, password: $password }) {
            token
            user {
                id
                username
                email
            }
        }
    }
`;

const MainForm: FC<Props> = ({ width }) => {
    const { push } = useRouter();

    const [signIn, { loading, error }] = useMutation(SIGNIN);

    const [emailRef, setEmailRef] = useState(null);
    const [passwordRef, setPasswordRef] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState(null);

    const submitLogin = async (e) => {
        e.preventDefault();

        if (!emailRef.checkValidity()) {
            setErro('Email inválido');
            return;
        }

        if (!passwordRef.checkValidity()) {
            setErro('Senha requerida');
            return;
        }

        try {
            let { data } = await signIn({
                variables: { email, password }
            });
            setEmail('');
            setPassword('');
            sessionStorage.setItem('user', JSON.stringify(data.signIn));
            push('/welcome');
        } catch (err) {
            //console.error('Error', typeof error);
        }
    };

    return (
        <Style width={width}>
            <Style.Content>
                <Style.Logo src="/logo.svg" />
                <Style.Title>Olá! Que bom ter você de volta.</Style.Title>
                <Style.Form onSubmit={(e) => e.preventDefault()}>
                    <Input
                        getRef={(ref) => setEmailRef(ref)}
                        label="E-mail"
                        defaultValue={email}
                        placeholder="exemplo@email.com"
                        type="email"
                        onChangeText={(v) => setEmail(v)}
                    />
                    <Input
                        getRef={(ref) => setPasswordRef(ref)}
                        defaultValue={password}
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                        onChangeText={(v) => setPassword(v)}
                    />
                    {loading ? (
                        <Button>Logando</Button>
                    ) : (
                        <Button disabled={loading} onClick={submitLogin}>
                            Entrar
                        </Button>
                    )}
                    {!!(error || erro) && (
                        <Error>{error ? 'Login inválido' : erro}</Error>
                    )}
                    <Separator>
                        <span>ou</span>
                    </Separator>
                    <Button type="google">
                        <img src="/google.svg" /> Entrar com Google
                    </Button>
                </Style.Form>
                <Style.Text>
                    Ainda não possui uma conta? <a href="#">Crie agora</a>
                </Style.Text>
            </Style.Content>
        </Style>
    );
};

export default MainForm;
