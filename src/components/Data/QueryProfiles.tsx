import * as React from 'react';

import { QueryProfile } from 'src/structures/exportFormat';

export interface IQueryProfilesProps {
    queryProfiles: QueryProfile[];
}

interface IQueryProfilesState {
    queryProfiles: QueryProfile[];
}

export default class QueryProfiles extends React.Component<IQueryProfilesProps, IQueryProfilesState> {
    constructor(props: IQueryProfilesProps) {
        super(props);

        this.state = {
            queryProfiles: props.queryProfiles
        };
    }

    componentWillReceiveProps(nextProps: IQueryProfilesProps) {
        if (this.state.queryProfiles !== nextProps.queryProfiles) {
            this.setState({ queryProfiles: nextProps.queryProfiles });
        }
    }

    render() {
        return (
            <section>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th/>
                            <th>Total</th>
                            <th>Average</th>
                            <th>Lowest</th>
                            <th>Highest</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </section>
        );
    }
}
