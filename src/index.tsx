import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ExportFormat } from './structures/exportFormat';
import Header from './components/header';

document.body.dataset.appLoaded = '';

require('bulma/bulma.sass');

function App() {
    let data: ExportFormat, dataContainer = document.getElementById('data-container');
    if (dataContainer) {
        data = JSON.parse(dataContainer.innerHTML);
    }

    return (
        <div>
            <Header />
            <hr />
            <section className='section'>
                <div className='container'>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </section>
        </div>
    );
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
