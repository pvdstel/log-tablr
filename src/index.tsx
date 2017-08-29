import * as React from 'react';
import * as ReactDOM from 'react-dom';

document.body.dataset.appLoaded = '';

function App() {
    console.log('test');
    return (
        <p>Test</p>
    );
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
