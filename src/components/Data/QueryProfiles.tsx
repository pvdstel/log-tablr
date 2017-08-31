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
            queryProfiles: props.queryProfiles
        };
    }

    componentWillReceiveProps(nextProps: IQueryProfilesProps) {
        if (this.state.queryProfiles !== nextProps.queryProfiles) {
            this.setState({ queryProfiles: nextProps.queryProfiles });
        }
    }

    render() {
        return (
            <section>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Query</th>
                            <th>Hits</th>
                            <th>Misses</th>
                            <th>Times</th>
                            <th>Total time</th>
                            <th>Average time</th>
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
                </table>
            </section>
        );
    }
}
