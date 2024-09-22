import React from 'react';

export default function StatusMessage({ status }) {
    if (status === 'success') {
        return <p>Operation was successful</p>;
    } else if (status === 'error') {
        return <p>There was an error</p>;
    } else {
        return <p>Status unknown</p>;
    }
}
