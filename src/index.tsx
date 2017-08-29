import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AgentTypeProfile } from './structures/exportFormat';
import Header from './components/header';
import TOC from './components/Data/TOC';
import DataRenderer from './components/Data/DataRenderer';

document.body.dataset.appLoaded = '';

// Require the css files
require('bulma/bulma.sass');
require('./styles/style.scss');

function App() {
    let data: AgentTypeProfile[], dataContainer = document.getElementById('data-container');
    if (dataContainer) {
        data = JSON.parse(dataContainer.innerHTML);
    }

    return (
        <div>
            <Header />
            <hr />
            <TOC data={data} />
            <DataRenderer data={data} />
        </div>
    );
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
