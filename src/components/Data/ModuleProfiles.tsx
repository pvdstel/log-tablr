import * as React from 'react';

import { ModuleProfile } from 'src/structures/exportFormat';
import { BuildSorter } from 'src/sorting';

const sorter = BuildSorter<ModuleProfile>()

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
                <div className='table-responsive'>
                    <table className='table is-striped is-fullwidth'>
                        <thead>
                            <tr>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('Name', this.state.moduleProfiles) })}> Name</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('Executions', this.state.moduleProfiles) })}>Executions</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('TotalExecutionTime', this.state.moduleProfiles) })}>Total execution time</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('ShortestExecutionTime', this.state.moduleProfiles) })}>Shortest execution time</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('LongestExecutionTime', this.state.moduleProfiles) })}>Longest execution time</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('AverageExecutionTime', this.state.moduleProfiles) })}>Average execution time</th>
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
                        <tfoot>
                            <tr>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('Name', this.state.moduleProfiles) })}> Name</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('Executions', this.state.moduleProfiles) })}>Executions</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('TotalExecutionTime', this.state.moduleProfiles) })}>Total execution time</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('ShortestExecutionTime', this.state.moduleProfiles) })}>Shortest execution time</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('LongestExecutionTime', this.state.moduleProfiles) })}>Longest execution time</th>
                                <th className='sortable' onClick={() => this.setState({ moduleProfiles: sorter('AverageExecutionTime', this.state.moduleProfiles) })}>Average execution time</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        );
    }
}
