import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './components/header';

document.body.dataset.appLoaded = '';

require('bulma/bulma.sass');

function App() {
    return (
        <div>
            <Header />
            <hr />
            <section className='section'>
                <div className='container'>
                    <p>Test</p>
                </div>
            </section>
        </div>
    );
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
