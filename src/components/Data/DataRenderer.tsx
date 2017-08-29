import * as React from 'react';

import { AgentTypeProfile } from 'src/structures/exportFormat';
import AgentTypeProfileComponent from './AgentTypeProfile';

export interface IDataRendererProps {
    data: AgentTypeProfile[];
    agentTypeFilter?: string;
}

interface IDataRendererState {
    data: AgentTypeProfile[];
    agentTypeFilter: string;
}

export default class DataRenderer extends React.Component<IDataRendererProps, IDataRendererState> {
    constructor(props: IDataRendererProps) {
        super(props);

        this.state = {
            data: props.data,
            agentTypeFilter: props.agentTypeFilter || '*'
        }
    }

    private agentTypeFilterPredicate = (atp: AgentTypeProfile) => {
        console.log(this.state.agentTypeFilter);
        return this.state.agentTypeFilter === '*' || this.state.agentTypeFilter === atp.Name;
    } 

    componentWillReceiveProps(nextProps: IDataRendererProps) {
        if (this.state.data !== nextProps.data) {
            this.setState({ data: nextProps.data });
        }
        if (this.state.agentTypeFilter !== nextProps.agentTypeFilter) {
            this.setState({ agentTypeFilter: nextProps.agentTypeFilter || '*' });
        }
    }

    render() {
        return (<div>
            {this.state.data.filter(this.agentTypeFilterPredicate).map(atp => <AgentTypeProfileComponent key={atp.Name} profile={atp} />)}
        </div>
        )
    }
}
