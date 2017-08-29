import * as React from 'react';

import { AgentProfile as AgentProfileDataType } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';
import CycleProfile from './CycleProfile';

export interface IModuleProfilesProps {
    agentProfile: AgentProfileDataType;
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
            showCycleProfile: false
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
    }

    render() {
        return (
            <section>
                <h4 className='title is-4 has-text-grey'>{this.state.agentProfile.Name}</h4>

                <h5 className='title is-5 has-text-grey-light'>Module profiles</h5>
                <ModuleProfiles moduleProfiles={this.state.agentProfile.ModuleProfiles} />

                <h5 className='title is-5 has-text-grey-light'>Cycle profile</h5>
                <p className='bottom-p-spacing'>
                    <a onClick={this.onToggleCycleProfileClicked}
                        href='#'>
                        Show/hide cycle profile
                    </a>
                </p>
                {this.state.showCycleProfile &&
                    <CycleProfile cycleProfile={this.state.agentProfile.CycleProfile} />
                }
            </section>
        );
    }
}
