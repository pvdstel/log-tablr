import * as React from 'react';

import { SELECT_EMPTY_VALUE, SELECT_ALL_VALUE } from 'src/constants';
import { AgentTypeProfile } from 'src/structures/exportFormat';

export interface ITableOfContentsProps {
    data: AgentTypeProfile[];
    onAgentTypeChanged?: (type: string) => any;
    onAgentTypeInstanceChanged?: (name: string) => any;
}

interface ITableOfContentsState {
    data: AgentTypeProfile[];
    agentType: string;
    onAgentTypeChanged: (type: string) => any;
    agentTypeInstance: string;
    onAgentTypeInstanceChanged: (name: string) => any;
}

export default class TableOfContents extends React.Component<ITableOfContentsProps, ITableOfContentsState> {
    constructor(props: ITableOfContentsProps) {
        super(props);

        this.state = {
            data: props.data,
            agentType: SELECT_EMPTY_VALUE,
            onAgentTypeChanged: props.onAgentTypeChanged,
            agentTypeInstance: SELECT_EMPTY_VALUE,
            onAgentTypeInstanceChanged: props.onAgentTypeInstanceChanged
        }
    }

    private onAgentTypeSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // Set the new agent type
        this.setState({ agentType: e.target.value });
        if (this.state.onAgentTypeChanged) {
            this.state.onAgentTypeChanged(e.target.value);
        }

        // Set the new agent type instance
        this.setState({ agentTypeInstance: SELECT_EMPTY_VALUE });
        if (this.state.onAgentTypeInstanceChanged) {
            this.state.onAgentTypeInstanceChanged(SELECT_EMPTY_VALUE);
        }
    }

    private onAgentTypeInstanceSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ agentTypeInstance: e.target.value });
        if (this.state.onAgentTypeInstanceChanged) {
            this.state.onAgentTypeInstanceChanged(e.target.value);
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
        let agentTypeSelected = this.state.agentType !== SELECT_EMPTY_VALUE && this.state.agentType !== SELECT_ALL_VALUE;
        let showAgentTypeToc = this.state.agentType === SELECT_ALL_VALUE;
        let showAgentTypeInstanceToc = this.state.agentTypeInstance === SELECT_ALL_VALUE;
        let showToc = showAgentTypeToc || showAgentTypeInstanceToc;

        return (
            <section className='section is-condensed'>
                <div className='container'>
                    <div className='toolbar'>
                        {/* Agent type selector */}
                        <div className='select'>
                            <select value={this.state.agentType} onChange={this.onAgentTypeSelectChanged}>
                                <option value={SELECT_EMPTY_VALUE}>Agent type</option>
                                <option value={SELECT_ALL_VALUE}>Display all</option>
                                <optgroup label='Data'>
                                    {this.state.data.map(atp => (
                                        <option key={atp.Name} value={atp.Name}>{atp.Name}</option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>

                        {agentTypeSelected &&
                            <div className='select'>
                                <select value={this.state.agentTypeInstance} onChange={this.onAgentTypeInstanceSelectChanged}>
                                    <option value={SELECT_EMPTY_VALUE}>Agent type instance</option>
                                    <option value={SELECT_ALL_VALUE}>Display all</option>
                                    <optgroup label='Data'>
                                        {this.state.data.find(atp => atp.Name === this.state.agentType).AgentProfiles.map(ap => (
                                            <option key={ap.Name} value={ap.Name}>{ap.Name}</option>
                                        ))}
                                    </optgroup>
                                </select>
                            </div>
                        }
                    </div>

                    {/* TOC components */}
                    {showToc && <hr />}
                    {showToc &&
                        <h2 className='title is-2' id='toc'>
                            Table of contents
                        </h2>
                    }
                    {showAgentTypeToc &&
                        <ul>
                            {this.state.data.map(atp => (
                                <li key={atp.Name}>
                                    <a href={`#type-${atp.Name}`}>{atp.Name}</a>
                                </li>
                            ))}
                        </ul>
                    }
                    {showAgentTypeInstanceToc &&
                        <ul>
                            {this.state.data.find(atp => atp.Name === this.state.agentType).AgentProfiles.map(ap => (
                                <li key={ap.Name}>
                                    <a href={`#instance-${ap.Name}`}>{ap.Name}</a>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        )
    }
}
