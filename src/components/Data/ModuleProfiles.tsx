import * as React from 'react';

import { ModuleProfile } from 'src/structures/exportFormat';

export interface IModuleProfilesProps {
    moduleProfiles: ModuleProfile[];
}

interface IModuleProfilesState {
    moduleProfiles: ModuleProfile[];
}

export default class ModuleProfiles extends React.Component<IModuleProfilesProps, IModuleProfilesState> {
    constructor(props: IModuleProfilesProps) {
        super(props);

        this.state = {
            moduleProfiles: props.moduleProfiles || []
        };
    }

    componentWillReceiveProps(nextProps: IModuleProfilesProps) {
        if (this.state.moduleProfiles !== nextProps.moduleProfiles) {
            this.setState({ moduleProfiles: nextProps.moduleProfiles || [] });
        }
    }

    render() {
        return (
            <section>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Executions</th>
                            <th>Total execution time</th>
                            <th>Shortest execution time</th>
                            <th>Longest execution time</th>
                            <th>Average execution time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.moduleProfiles.map((mp, i) => (
                            <tr key={i}>
                                <td>{mp.Name}</td>
                                <td>{mp.Executions}</td>
                                <td>{mp.TotalExecutionTime}</td>
                                <td>{mp.ShortestExecutionTime}</td>
                                <td>{mp.LongestExecutionTime}</td>
                                <td>{mp.AverageExecutionTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}
