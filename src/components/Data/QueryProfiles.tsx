import * as React from 'react';

import { QueryProfile } from 'src/structures/exportFormat';

export interface IQueryProfilesProps {
    queryProfiles: QueryProfile[];
}

interface IQueryProfilesState {
    queryProfiles: QueryProfile[];
}

export default class QueryProfiles extends React.Component<IQueryProfilesProps, IQueryProfilesState> {
    constructor(props: IQueryProfilesProps) {
        super(props);

        this.state = {
            queryProfiles: props.queryProfiles || []
        };
    }

    componentWillReceiveProps(nextProps: IQueryProfilesProps) {
        if (this.state.queryProfiles !== nextProps.queryProfiles) {
            this.setState({ queryProfiles: nextProps.queryProfiles || [] });
        }
    }

    render() {
        return (
            <section>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th className='sortable' onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Query.localeCompare(b.Query)) })}>Query</th>
                            <th className='sortable' onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Hits - b.Hits) })}>Hits</th>
                            <th className='sortable' onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Misses - b.Misses) })}>Misses</th>
                            <th className='sortable' onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Times - b.Times) })}>Times</th>
                            <th className='sortable' onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.TotalTime - b.TotalTime) })}>Total time</th>
                            <th className='sortable' onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.AverageTime - b.AverageTime) })}>Average time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.queryProfiles.map((q, i) => (
                            <tr key={i}>
                                <td><code>{q.Query}</code></td>
                                <td>{q.Hits}</td>
                                <td>{q.Misses}</td>
                                <td>{q.Times}</td>
                                <td>{q.TotalTime}</td>
                                <td>{q.AverageTime}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className='sortable' onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Query.localeCompare(b.Query)) })}>Query</th>
                            <th onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Hits - b.Hits) })}>Hits</th>
                            <th onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Misses - b.Misses) })}>Misses</th>
                            <th onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.Times - b.Times) })}>Times</th>
                            <th onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.TotalTime - b.TotalTime) })}>Total time</th>
                            <th onClick={() => this.setState({ queryProfiles: this.state.queryProfiles.slice().sort((a, b) => a.AverageTime - b.AverageTime) })}>Average time</th>
                        </tr>
                    </tfoot>
                </table>
            </section>
        );
    }
}
