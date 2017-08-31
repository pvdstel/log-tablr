import * as React from 'react';

import { CycleProfile as CycleProfileDataType } from 'src/structures/exportFormat';

export interface ICycleProfileProps {
    cycleProfile: CycleProfileDataType;
}

interface ICycleProfileState {
    cycleProfile: CycleProfileDataType;
}

export default class CycleProfile extends React.Component<ICycleProfileProps, ICycleProfileState> {
    constructor(props: ICycleProfileProps) {
        super(props);

        this.state = {
            cycleProfile: props.cycleProfile
        };
    }

    componentWillReceiveProps(nextProps: ICycleProfileProps) {
        if (this.state.cycleProfile !== nextProps.cycleProfile) {
            this.setState({ cycleProfile: nextProps.cycleProfile });
        }
    }

    render() {
        return (
            <section>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th />
                            <th>Total</th>
                            <th>Average</th>
                            <th>Lowest</th>
                            <th>Highest</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Count</th>
                            <td colSpan={4}>{this.state.cycleProfile.Count}</td>
                        </tr>
                        <tr>
                            <th>Time</th>
                            <td>{this.state.cycleProfile.TotalTime}</td>
                            <td>{this.state.cycleProfile.AverageTime}</td>
                            <td>{this.state.cycleProfile.LowestTime}</td>
                            <td>{this.state.cycleProfile.HighestTime}</td>
                        </tr>
                        <tr>
                            <th>Actions</th>
                            <td>{this.state.cycleProfile.TotalActions}</td>
                            <td>{this.state.cycleProfile.AverageActions}</td>
                            <td>{this.state.cycleProfile.LowestActions}</td>
                            <td>{this.state.cycleProfile.HighestActions}</td>
                        </tr>
                        <tr>
                            <th>Beliefs</th>
                            <td>{this.state.cycleProfile.TotalBeliefs}</td>
                            <td>{this.state.cycleProfile.AverageBeliefs}</td>
                            <td>{this.state.cycleProfile.LowestBeliefs}</td>
                            <td>{this.state.cycleProfile.HighestBeliefs}</td>
                        </tr>
                        <tr>
                            <th>Queries</th>
                            <td>{this.state.cycleProfile.TotalQueries}</td>
                            <td>{this.state.cycleProfile.AverageQueries}</td>
                            <td>{this.state.cycleProfile.LowestQueries}</td>
                            <td>{this.state.cycleProfile.HighestQueries}</td>
                        </tr>
                        <tr>
                            <th>Percepts</th>
                            <td>{this.state.cycleProfile.TotalPercepts}</td>
                            <td>{this.state.cycleProfile.AveragePercepts}</td>
                            <td>{this.state.cycleProfile.LowestPercepts}</td>
                            <td>{this.state.cycleProfile.HighestPercepts}</td>
                        </tr>
                        <tr>
                            <th>Goals</th>
                            <td>{this.state.cycleProfile.TotalGoals}</td>
                            <td>{this.state.cycleProfile.AverageGoals}</td>
                            <td>{this.state.cycleProfile.LowestGoals}</td>
                            <td>{this.state.cycleProfile.HighestGoals}</td>
                        </tr>
                        <tr>
                            <th>Messages received</th>
                            <td>{this.state.cycleProfile.TotalMessagesReceived}</td>
                            <td>{this.state.cycleProfile.AverageMessagesReceived}</td>
                            <td>{this.state.cycleProfile.LowestMessagesReceived}</td>
                            <td>{this.state.cycleProfile.HighestMessagesReceived}</td>
                        </tr>
                        <tr>
                            <th>Messages sent</th>
                            <td>{this.state.cycleProfile.TotalMessagesSent}</td>
                            <td>{this.state.cycleProfile.AverageMessagesSent}</td>
                            <td>{this.state.cycleProfile.LowestMessagesSent}</td>
                            <td>{this.state.cycleProfile.HighestMessagesSent}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
