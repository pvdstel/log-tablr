import * as React from 'react';

import { ExportFormat } from 'src/structures/exportFormat';
import ModuleProfiles from './ModuleProfiles';

export interface IDataRendererProps {
    data: ExportFormat;
}

interface IDataRendererState {
    data: ExportFormat;
}

export default class DataRenderer extends React.Component<IDataRendererProps, IDataRendererState> {
    constructor(props: IDataRendererProps) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    componentWillReceiveProps(nextProps: IDataRendererProps) {
        if (this.state.data !== nextProps.data) {
            this.setState({ data: nextProps.data });
        }
    }

    render() {
        return (
            <div>
                <ModuleProfiles moduleProfiles={this.state.data.ModuleProfiles} />
            </div>
        )
    }
}
