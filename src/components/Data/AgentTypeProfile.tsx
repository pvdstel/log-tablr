import * as React from 'react';

import { AgentTypeProfile as AgentTypeProfileDataType } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';

export interface IAgentTypeProfileProps {
    profile: AgentTypeProfileDataType;
}

interface IAgentTypeProfileState {
    profile: AgentTypeProfileDataType;
}

export default class AgentTypeProfile extends React.Component<IAgentTypeProfileProps, IAgentTypeProfileState> {
    constructor(props: IAgentTypeProfileProps) {
        super(props);

        this.state = {
            profile: props.profile
        }
    }

    componentWillReceiveProps(nextProps: IAgentTypeProfileProps) {
        if (this.state.profile !== nextProps.profile) {
            this.setState({ profile: nextProps.profile });
        }
    }

    render() {
        return (
            <div>
                <h2 className='title is-2' id={this.state.profile.Name}>{this.state.profile.Name}</h2>
                <ModuleProfiles moduleProfiles={this.state.profile.ModuleProfiles} />
            </div>
        )
    }
}
