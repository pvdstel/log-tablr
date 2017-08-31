import * as React from 'react';

import { SELECT_EMPTY_VALUE } from 'src/constants';
import { AgentTypeProfile as AgentTypeProfileDataType } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';
import AgentProfile from './AgentProfile';
import CycleProfile from './CycleProfile';
import QueryProfiles from './QueryProfiles';

export interface IAgentTypeProfileProps {
    profile: AgentTypeProfileDataType;
    agentTypeInstanceFilter?: string;
}

interface IAgentTypeProfileState {
    profile: AgentTypeProfileDataType;
    showModuleProfiles: boolean;
    showCycleProfile: boolean;
    agentTypeInstanceFilter: string;
}

export default class AgentTypeProfile extends React.Component<IAgentTypeProfileProps, IAgentTypeProfileState> {
    constructor(props: IAgentTypeProfileProps) {
        super(props);

        this.state = {
            profile: props.profile,
            showModuleProfiles: true,
            showCycleProfile: true,
            agentTypeInstanceFilter: props.agentTypeInstanceFilter || SELECT_EMPTY_VALUE
        }
    }

    private onToggleModuleProfilesClicked = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.setState({ showModuleProfiles: !this.state.showModuleProfiles });
    }

    private onToggleCycleProfileClicked = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.setState({ showCycleProfile: !this.state.showCycleProfile });
    }

    componentWillReceiveProps(nextProps: IAgentTypeProfileProps) {
        if (this.state.profile !== nextProps.profile) {
            this.setState({ profile: nextProps.profile });
        }
        if (this.state.agentTypeInstanceFilter !== nextProps.agentTypeInstanceFilter) {
            this.setState({ agentTypeInstanceFilter: nextProps.agentTypeInstanceFilter });
        }
    }

    render() {
        let agentTypeInstanceSelected = this.state.agentTypeInstanceFilter !== SELECT_EMPTY_VALUE;
        if (!agentTypeInstanceSelected) {
            return (
                <div>
                    <hr />
                    <section className='section is-condensed'>
                        <div className='container'>
                            <h2 className='title is-4' id={this.state.profile.Name}>{this.state.profile.Name}</h2>

                            <h3 className='title is-5'>Module profiles</h3>
                            <p className='bottom-p-spacing'>
                                <a onClick={this.onToggleModuleProfilesClicked}
                                    href='#'>
                                    Show/hide module profiles
                             </a>
                            </p>
                            {this.state.showModuleProfiles &&
                                <ModuleProfiles moduleProfiles={this.state.profile.ModuleProfiles} />
                            }

                            <h3 className='title is-5'>Cycle profile</h3>
                            <p className='bottom-p-spacing'>
                                <a onClick={this.onToggleCycleProfileClicked}
                                    href='#'>
                                    Show/hide cycle profile
                             </a>
                            </p>
                            {this.state.showCycleProfile &&
                                <CycleProfile cycleProfile={this.state.profile.CycleProfile} />
                            }

                            <h3 className='title is-5'>Query profiles</h3>
                            <QueryProfiles queryProfiles={this.state.profile.QueryProfiles} />
                        </div>
                    </section>
                </div>
            )
        }
        else {
            return (
                <div>
                    <hr />
                    <section className='section is-condensed'>
                        <div className='container'>
                            <AgentProfile agentProfile={this.state.profile.AgentProfiles.find(ap => ap.Name === this.state.agentTypeInstanceFilter)}
                                showCycleProfile={true} />
                        </div>
                    </section>
                </div>
            )
        }
    }
}
