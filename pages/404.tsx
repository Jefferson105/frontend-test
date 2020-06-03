import Link from 'next/link';

const Page404 = () => {
    return (
        <p>
            Página não encontrada.{' '}
            <Link href="/">
                <a>Voltar para página inicial.</a>
            </Link>
        </p>
    );
};

export default Page404;
