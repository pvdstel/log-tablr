import * as React from 'react';

import { AgentTypeProfile as AgentTypeProfileDataType } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';
import AgentProfile from './AgentProfile';
import CycleProfile from './CycleProfile';

export interface IAgentTypeProfileProps {
    profile: AgentTypeProfileDataType;
}

interface IAgentTypeProfileState {
    profile: AgentTypeProfileDataType;
    showModuleProfiles: boolean;
    showAgentProfiles: boolean;
    showCycleProfile: boolean;
}

export default class AgentTypeProfile extends React.Component<IAgentTypeProfileProps, IAgentTypeProfileState> {
    constructor(props: IAgentTypeProfileProps) {
        super(props);

        this.state = {
            profile: props.profile,
            showModuleProfiles: true,
            showAgentProfiles: false,
            showCycleProfile: false
        }
    }

    private onToggleModuleProfilesClicked = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.setState({ showModuleProfiles: !this.state.showModuleProfiles });
    }

    private onToggleAgentProfilesClicked = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.setState({ showAgentProfiles: !this.state.showAgentProfiles });
    }

    private onToggleCycleProfileClicked = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.setState({ showCycleProfile: !this.state.showCycleProfile });
    }

    componentWillReceiveProps(nextProps: IAgentTypeProfileProps) {
        if (this.state.profile !== nextProps.profile) {
            this.setState({ profile: nextProps.profile });
        }
    }

    render() {
        return (
            <div>
                <hr />
                <section className='section'>
                    <div className='container'>
                        <h2 className='title is-2' id={this.state.profile.Name}>{this.state.profile.Name}</h2>

                        <h3 className='title is-3 has-text-grey'>Module profiles</h3>
                        <p className='bottom-p-spacing'>
                            <a onClick={this.onToggleModuleProfilesClicked}
                                href='#'
                                className='button is-primary'>
                                Show/hide module profiles
                             </a>
                        </p>
                        {this.state.showModuleProfiles &&
                            <ModuleProfiles moduleProfiles={this.state.profile.ModuleProfiles} />
                        }

                        <h3 className='title is-3 has-text-grey'>Agent profiles</h3>
                        <p className='bottom-p-spacing'>
                            <a onClick={this.onToggleAgentProfilesClicked}
                                href='#'
                                className='button is-primary'>
                                Show/hide agent profiles
                             </a>
                        </p>
                        {this.state.showAgentProfiles &&
                            this.state.profile.AgentProfiles.map(ap => <AgentProfile key={ap.Name} agentProfile={ap} />)
                        }

                        <h3 className='title is-3 has-text-grey'>Cycle profile</h3>
                        <p className='bottom-p-spacing'>
                            <a onClick={this.onToggleCycleProfileClicked}
                                href='#'
                                className='button is-primary'>
                                Show/hide cycle profile
                             </a>
                        </p>
                        {this.state.showCycleProfile &&
                            <CycleProfile cycleProfile={this.state.profile.CycleProfile} />
                        }
                    </div>
                </section>
            </div>
        )
    }
}
