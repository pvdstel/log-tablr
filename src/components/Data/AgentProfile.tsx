import * as React from 'react';

import { AgentProfile as AgentProfileDataType } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';
import CycleProfile from './CycleProfile';
import QueryProfiles from './QueryProfiles';

export interface IModuleProfilesProps {
    agentProfile: AgentProfileDataType;
}

interface IModuleProfilesState {
    agentProfile: AgentProfileDataType;
}

export default class AgentProfile extends React.Component<IModuleProfilesProps, IModuleProfilesState> {
    constructor(props: IModuleProfilesProps) {
        super(props);

        this.state = {
            agentProfile: props.agentProfile
        };
    }

    componentWillReceiveProps(nextProps: IModuleProfilesProps) {
        if (this.state.agentProfile !== nextProps.agentProfile) {
            this.setState({ agentProfile: nextProps.agentProfile });
        }
    }

    render() {
        return (
            <div>
                <h2 className='title is-4' id={`instance-${this.state.agentProfile.Name}`}>
                    {this.state.agentProfile.Name}
                    {' '}
                    <small className='has-text-grey-light'>(instance; single values)</small>
                </h2>

                <h3 className='title is-5'>Module profiles</h3>
                <ModuleProfiles moduleProfiles={this.state.agentProfile.ModuleProfiles} />

                <h3 className='title is-5'>Cycle profile</h3>
                <CycleProfile cycleProfile={this.state.agentProfile.CycleProfile} />

                <h3 className='title is-5'>Query profiles</h3>
                <QueryProfiles queryProfiles={this.state.agentProfile.QueryProfiles} />
            </div>
        );
    }
}
