import * as React from 'react';

import { SELECT_EMPTY_VALUE } from 'src/constants';
import { AgentTypeProfile as AgentTypeProfileDataType } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';
import AgentProfile from './AgentProfile';
import CycleProfile from './CycleProfile';

export interface IAgentTypeProfileProps {
    profile: AgentTypeProfileDataType;
    agentTypeInstanceFilter?: string;
}

interface IAgentTypeProfileState {
    profile: AgentTypeProfileDataType;
    showModuleProfiles: boolean;
    agentName: string;
    showAgentProfiles: boolean;
    showCycleProfile: boolean;
    agentTypeInstanceFilter: string;
}

export default class AgentTypeProfile extends React.Component<IAgentTypeProfileProps, IAgentTypeProfileState> {
    constructor(props: IAgentTypeProfileProps) {
        super(props);

        this.state = {
            profile: props.profile,
            agentName: SELECT_EMPTY_VALUE,
            showModuleProfiles: false,
            showAgentProfiles: false,
            showCycleProfile: false,
            agentTypeInstanceFilter: SELECT_EMPTY_VALUE
        }
    }

    private onToggleModuleProfilesClicked = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        this.setState({ showModuleProfiles: !this.state.showModuleProfiles });
    }

    private onAgentNameSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ agentName: e.target.value });
    }

    private agentNameFilterPredicate = (atp: AgentTypeProfileDataType) => {
        return this.state.agentName === SELECT_EMPTY_VALUE || this.state.agentName === atp.Name;
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
                    <section className='section'>
                        <div className='container'>
                            <h2 className='title is-2' id={this.state.profile.Name}>{this.state.profile.Name}</h2>

                            <h3 className='title is-3 has-text-grey'>Module profiles</h3>
                            <p className='bottom-p-spacing'>
                                <a onClick={this.onToggleModuleProfilesClicked}
                                    href='#'>
                                    Show/hide module profiles
                             </a>
                            </p>
                            {this.state.showModuleProfiles &&
                                <ModuleProfiles moduleProfiles={this.state.profile.ModuleProfiles} />
                            }

                            <h3 className='title is-3 has-text-grey'>Agent profiles</h3>
                            <p className='bottom-p-spacing'>
                                <a onClick={this.onToggleAgentProfilesClicked}
                                    href='#'>
                                    Show/hide agent profiles
                             </a>
                            </p>
                            {this.state.showAgentProfiles &&
                                <div className='select bottom-p-spacing'>
                                    <select value={this.state.agentName} onChange={this.onAgentNameSelectChanged}>
                                        <option value={SELECT_EMPTY_VALUE}>Display all</option>
                                        <optgroup label='Data'>
                                            {this.state.profile.AgentProfiles.map(atp => (
                                                <option key={atp.Name} value={atp.Name}>{atp.Name}</option>
                                            ))}
                                        </optgroup>
                                    </select>
                                </div>
                            }
                            {this.state.showAgentProfiles &&
                                this.state.profile.AgentProfiles.filter(this.agentNameFilterPredicate).map(ap => <AgentProfile key={ap.Name} agentProfile={ap} />)
                            }

                            <h3 className='title is-3 has-text-grey'>Cycle profile</h3>
                            <p className='bottom-p-spacing'>
                                <a onClick={this.onToggleCycleProfileClicked}
                                    href='#'>
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
