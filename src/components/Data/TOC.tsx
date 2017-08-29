import * as React from 'react';

import { AgentTypeProfile } from 'src/structures/exportFormat';

export interface ITableOfContentsProps {
    data: AgentTypeProfile[];
}

interface ITableOfContentsState {
    data: AgentTypeProfile[];
}

export default class TableOfContents extends React.Component<ITableOfContentsProps, ITableOfContentsState> {
    constructor(props: ITableOfContentsProps) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    componentWillReceiveProps(nextProps: ITableOfContentsProps) {
        if (this.state.data !== nextProps.data) {
            this.setState({ data: nextProps.data });
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
                            <li>
                                <a href={`#${atp.Name}`}>{atp.Name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        )
    }
}
