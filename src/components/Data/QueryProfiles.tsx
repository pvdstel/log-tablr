import * as React from 'react';

import { QueryProfile } from 'src/structures/exportFormat';
import { BuildSorter } from 'src/sorting';

const sorter = BuildSorter<QueryProfile>()

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
                <div className='table-responsive'>
                    <table className='table is-striped is-fullwidth'>
                        <thead>
                            <tr>
                                <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Query', this.state.queryProfiles) })}>Query</th>
                                <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Hits', this.state.queryProfiles) })}>Hits</th>
                                <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Misses', this.state.queryProfiles) })}>Misses</th>
                                <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Times', this.state.queryProfiles) })}>Times</th>
                                <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('TotalTime', this.state.queryProfiles) })}>Total time</th>
                                <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('AverageTime', this.state.queryProfiles) })}>Average time</th>
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
                        <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Query', this.state.queryProfiles) })}>Query</th>
                        <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Hits', this.state.queryProfiles) })}>Hits</th>
                        <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Misses', this.state.queryProfiles) })}>Misses</th>
                        <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('Times', this.state.queryProfiles) })}>Times</th>
                        <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('TotalTime', this.state.queryProfiles) })}>Total time</th>
                        <th className='sortable' onClick={() => this.setState({ queryProfiles: sorter('AverageTime', this.state.queryProfiles) })}>Average time</th>
                    </tr>
                </tfoot>
                    </table>
                </div>
            </section>
        );
    }
}
