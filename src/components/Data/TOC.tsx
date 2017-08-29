import * as React from 'react';

import { AgentTypeProfile } from 'src/structures/exportFormat';

export interface ITableOfContentsProps {
    data: AgentTypeProfile[];
    onAgentTypeChanged?: (type: string) => any;
}

interface ITableOfContentsState {
    data: AgentTypeProfile[];
    onAgentTypeChanged: (type: string) => any;
}

export default class TableOfContents extends React.Component<ITableOfContentsProps, ITableOfContentsState> {
    constructor(props: ITableOfContentsProps) {
        super(props);

        this.state = {
            data: props.data,
            onAgentTypeChanged: props.onAgentTypeChanged
        }
    }

    private onAgentTypeSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
                    <h2 className='title is-2' id='toc'>
                        Table of contents
                    </h2>
                    <ul>
                        {this.state.data.map(atp => (
                            <li key={atp.Name}>
                                <a href={`#${atp.Name}`}>{atp.Name}</a>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className='select'>
                        <select onChange={this.onAgentTypeSelectChanged}>
                            <option value='*'>Display all</option>
                            <optgroup label='Data'>
                                {this.state.data.map(atp => (
                                    <option key={atp.Name} value={atp.Name}>{atp.Name}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                </div>
            </section>
        )
    }
}
