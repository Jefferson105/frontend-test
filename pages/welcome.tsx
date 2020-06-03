import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Style from '../styles/blocks/welcome';

const Welcome = () => {
    const { push } = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let user = sessionStorage.getItem('user');

        if (!user) push('/');
        else setUser(JSON.parse(user));

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (!user) return null;

    return (
        <>
            <Head>
                <title>Bem-Vindo</title>
            </Head>
            <Style>
                <Style.Logo width={110} height={96} />
                {loading ? (
                    <>
                        <Style.Title>
                            Bem vindo, <span>{user.user.username}</span>
                        </Style.Title>
                        <Style.Text>
                            Estamos carregando suas informações.
                        </Style.Text>
                    </>
                ) : (
                    <>
                        <Style.Title>Estamos prontos.</Style.Title>
                        <Style.Text>Boas vendas!</Style.Text>
                    </>
                )}
            </Style>
        </>
    );
};

export default Welcome;
