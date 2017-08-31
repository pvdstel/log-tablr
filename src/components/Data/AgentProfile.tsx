import * as React from 'react';

import { AgentProfile as AgentProfileDataType } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';
import CycleProfile from './CycleProfile';
import QueryProfiles from './QueryProfiles';

export interface IModuleProfilesProps {
    agentProfile: AgentProfileDataType;
    showCycleProfile?: boolean;
}

interface IModuleProfilesState {
    agentProfile: AgentProfileDataType;
    showCycleProfile: boolean;
}

export default class AgentProfile extends React.Component<IModuleProfilesProps, IModuleProfilesState> {
    constructor(props: IModuleProfilesProps) {
        super(props);

        this.state = {
            agentProfile: props.agentProfile,
            showCycleProfile: props.showCycleProfile || false
        };
    }

    private onToggleCycleProfileClicked = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.setState({ showCycleProfile: !this.state.showCycleProfile });
    }

    componentWillReceiveProps(nextProps: IModuleProfilesProps) {
        if (this.state.agentProfile !== nextProps.agentProfile) {
            this.setState({ agentProfile: nextProps.agentProfile });
        }
        if (this.state.showCycleProfile !== nextProps.showCycleProfile) {
            this.setState({ showCycleProfile: nextProps.showCycleProfile });
        }
    }

    render() {
        return (
            <div>
                <h2 className='title is-4'>{this.state.agentProfile.Name}</h2>

                <h3 className='title is-5'>Module profiles</h3>
                <ModuleProfiles moduleProfiles={this.state.agentProfile.ModuleProfiles} />

                <h3 className='title is-5'>Cycle profile</h3>
                <p className='bottom-p-spacing'>
                    <a onClick={this.onToggleCycleProfileClicked}
                        href='#'>
                        Show/hide cycle profile
                    </a>
                </p>
                {this.state.showCycleProfile &&
                    <CycleProfile cycleProfile={this.state.agentProfile.CycleProfile} />
                }

                <h3 className='title is-5'>Query profiles</h3>
                <QueryProfiles queryProfiles={this.state.agentProfile.QueryProfiles} />
            </div>
        );
    }
}
