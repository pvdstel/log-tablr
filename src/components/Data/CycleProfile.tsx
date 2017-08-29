import * as React from 'react';

import { CycleProfile } from 'src/structures/exportFormat';

export interface IModuleProfilesProps {
    cycleProfile: CycleProfile;
}

interface IModuleProfilesState {
    cycleProfile: CycleProfile;
}

export default class ModuleProfiles extends React.Component<IModuleProfilesProps, IModuleProfilesState> {
    constructor(props: IModuleProfilesProps) {
        super(props);

        this.state = {
            cycleProfile: props.cycleProfile
        };
    }

    componentWillReceiveProps(nextProps: IModuleProfilesProps) {
        if (this.state.cycleProfile !== nextProps.cycleProfile) {
            this.setState({ cycleProfile: nextProps.cycleProfile });
        }
    }

    render() {
        return (
            <section>
                <table className='table is-striped'>
                    <tbody>
                        {
                            Object.getOwnPropertyNames(this.state.cycleProfile).map(property => (
                                <tr key={property}>
                                    <th>{property}</th>
                                    <td>{this.state.cycleProfile[property]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        );
    }
}
