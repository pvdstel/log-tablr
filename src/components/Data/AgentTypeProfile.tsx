import * as React from 'react';

import { SELECT_EMPTY_VALUE, SELECT_ALL_VALUE } from 'src/constants';
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
    agentTypeInstanceFilter: string;
}

export default class AgentTypeProfile extends React.Component<IAgentTypeProfileProps, IAgentTypeProfileState> {
    constructor(props: IAgentTypeProfileProps) {
        super(props);

        this.state = {
            profile: props.profile,
            agentTypeInstanceFilter: props.agentTypeInstanceFilter || SELECT_EMPTY_VALUE
        }
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
        if (this.state.agentTypeInstanceFilter === SELECT_EMPTY_VALUE) {
            return (
                <div>
                    <hr />
                    <section className='section is-condensed'>
                        <div className='container'>
                            <h2 className='title is-4' id={`type-${this.state.profile.Name}`}>
                                {this.state.profile.Name}
                                {' '}
                                <small className='has-text-grey-light'>(type; cumulative values)</small>
                            </h2>

                            <h3 className='title is-5'>Module profiles</h3>
                            <ModuleProfiles moduleProfiles={this.state.profile.ModuleProfiles} />

                            <h3 className='title is-5'>Cycle profile</h3>
                            <CycleProfile cycleProfile={this.state.profile.CycleProfile} />

                            <h3 className='title is-5'>Query profiles</h3>
                            <QueryProfiles queryProfiles={this.state.profile.QueryProfiles} />
                        </div>
                    </section>
                </div>
            )
        }
        else if (this.state.agentTypeInstanceFilter === SELECT_ALL_VALUE) {
            return (
                <div>
                    <hr />
                    <section className='section is-condensed'>
                        <div className='container'>
                            {this.state.profile.AgentProfiles.map(ap => <AgentProfile key={ap.Name} agentProfile={ap} />)}
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
                            <AgentProfile agentProfile={this.state.profile.AgentProfiles.find(ap => ap.Name === this.state.agentTypeInstanceFilter)} />
                        </div>
                    </section>
                </div>
            )
        }
    }
}
