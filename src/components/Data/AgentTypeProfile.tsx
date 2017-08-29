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
    agentName: string;
    showAgentProfiles: boolean;
    showCycleProfile: boolean;
}

export default class AgentTypeProfile extends React.Component<IAgentTypeProfileProps, IAgentTypeProfileState> {
    constructor(props: IAgentTypeProfileProps) {
        super(props);

        this.state = {
            profile: props.profile,
            agentName: '*',
            showModuleProfiles: false,
            showAgentProfiles: false,
            showCycleProfile: false
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
        return this.state.agentName === '*' || this.state.agentName === atp.Name;
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
                                className='button is-primary is-outlined'>
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
                                className='button is-primary is-outlined'>
                                Show/hide agent profiles
                             </a>
                        </p>
                        {this.state.showAgentProfiles &&
                            <div className='select bottom-p-spacing'>
                                <select value={this.state.agentName} onChange={this.onAgentNameSelectChanged}>
                                    <option value='*'>Display all</option>
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
                                href='#'
                                className='button is-primary is-outlined'>
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
