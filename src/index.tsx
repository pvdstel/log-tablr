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

interface IAppState {
    data: AgentTypeProfile[];
    agentType: string;
}

export default class App extends React.Component<undefined, IAppState> {
    constructor() {
        super();

        this.state = {
            data: [],
            agentType: '*'
        }
    }

    componentDidMount() {
        let dataContainer = document.getElementById('data-container');
        if (dataContainer) {
            this.setState({ data: JSON.parse(dataContainer.innerHTML) })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <TOC data={this.state.data} onAgentTypeChanged={t => this.setState({ agentType: t })} />
                <DataRenderer data={this.state.data} agentTypeFilter={this.state.agentType} />
            </div>
        );
    }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
