import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { SELECT_EMPTY_VALUE } from 'src/constants';
import { AgentTypeProfile } from './structures/exportFormat';
import Header from './components/Header';
import TOC from './components/TOC';
import DataRenderer from './components/DataRenderer';

document.body.dataset.appLoaded = '';

// Require the css files
require('bulma/bulma.sass');
require('./styles/style.scss');

interface IAppState {
    data: AgentTypeProfile[];
    agentType: string;
    agentTypeInstance: string;
}

export default class App extends React.Component<undefined, IAppState> {
    constructor() {
        super(undefined);

        this.state = {
            data: [],
            agentType: SELECT_EMPTY_VALUE,
            agentTypeInstance: SELECT_EMPTY_VALUE
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
                <TOC data={this.state.data}
                    onAgentTypeChanged={t => this.setState({ agentType: t })}
                    onAgentTypeInstanceChanged={t => this.setState({ agentTypeInstance: t })} />
                <DataRenderer data={this.state.data}
                    agentTypeFilter={this.state.agentType}
                    agentTypeInstanceFilter={this.state.agentTypeInstance} />
            </div>
        );
    }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
