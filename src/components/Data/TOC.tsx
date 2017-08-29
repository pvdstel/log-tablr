import * as React from 'react';

import { AgentTypeProfile } from 'src/structures/exportFormat';

export interface ITableOfContentsProps {
    data: AgentTypeProfile[];
    onAgentTypeChanged?: (type: string) => any;
}

interface ITableOfContentsState {
    data: AgentTypeProfile[];
    agentType: string;
    onAgentTypeChanged: (type: string) => any;
}

export default class TableOfContents extends React.Component<ITableOfContentsProps, ITableOfContentsState> {
    constructor(props: ITableOfContentsProps) {
        super(props);

        this.state = {
            data: props.data,
            agentType: '*',
            onAgentTypeChanged: props.onAgentTypeChanged
        }
    }

    private onAgentTypeSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ agentType: e.target.value });
        if (this.state.onAgentTypeChanged) {
            this.state.onAgentTypeChanged(e.target.value);
        }
    }

    componentWillReceiveProps(nextProps: ITableOfContentsProps) {
        if (this.state.data !== nextProps.data) {
            this.setState({ data: nextProps.data });
        }
        if (this.state.onAgentTypeChanged !== nextProps.onAgentTypeChanged) {
            this.setState({ onAgentTypeChanged: nextProps.onAgentTypeChanged });
        }
    }

    render() {
        return (
            <section className='section'>
                <div className='container'>
                    <div className='select'>
                        <select value={this.state.agentType} onChange={this.onAgentTypeSelectChanged}>
                            <option value='*'>Display all</option>
                            <optgroup label='Data'>
                                {this.state.data.map(atp => (
                                    <option key={atp.Name} value={atp.Name}>{atp.Name}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                    {this.state.agentType === '*' && <hr />}
                    {this.state.agentType === '*' &&
                        <h2 className='title is-2' id='toc'>
                            Table of contents
                        </h2>
                    }
                    {this.state.agentType === '*' &&
                        <ul>
                            {this.state.data.map(atp => (
                                <li key={atp.Name}>
                                    <a href={`#${atp.Name}`}>{atp.Name}</a>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        )
    }
}
