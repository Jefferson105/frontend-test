import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import MainForm from '../components/signin_form';
import Slider from '../components/slider';

import { Container } from '../styles/elements';

const Index = () => {
    const { push } = useRouter();

    const [showSlider, setSlider] = useState(true);

    useEffect(() => {
        let user = sessionStorage.getItem('user');

        if (user) push('/welcome');
    }, []);

    return (
        <Container>
            <MainForm width={showSlider ? '53.3%' : '100%'} />
            {!!showSlider && (
                <Slider
                    width={showSlider ? '47.3%' : '0%'}
                    onClose={() => setSlider(false)}
                />
            )}
        </Container>
    );
};

export default Index;
