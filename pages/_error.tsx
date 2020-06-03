import { number } from 'prop-types';
import { FunctionComponent } from 'react';

interface Props {
    statusCode: number;
}

const Error: FunctionComponent<Props> = ({ statusCode }) => {
    return (
        <p>
            {statusCode
                ? `Um erro ${statusCode} ocorreu no servidor`
                : 'Um erro ocorreu no cliente'}
        </p>
    );
};

export default Error;
