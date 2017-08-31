import * as React from 'react';

import { QueryProfile as QueryProfileDataType } from 'src/structures/exportFormat';

export interface IQueryProfileProps {
    queryProfile: QueryProfileDataType;
}

interface IQueryProfileState {
    queryProfile: QueryProfileDataType;
}

export default class QueryProfile extends React.Component<IQueryProfileProps, IQueryProfileState> {
    constructor(props: IQueryProfileProps) {
        super(props);

        this.state = {
            queryProfile: props.queryProfile
        };
    }

    componentWillReceiveProps(nextProps: IQueryProfileProps) {
        if (this.state.queryProfile !== nextProps.queryProfile) {
            this.setState({ queryProfile: nextProps.queryProfile });
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
