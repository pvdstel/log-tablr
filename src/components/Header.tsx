import * as React from 'react';

import { REPO } from 'src/constants';

export default function Header() {
    return (
        <header className='section'>
            <div className='container'>
                <h1 className='title is-1 has-text-primary'>
                    Log Tablr
                </h1>
                <p className='subtitle'>
                    GOAL log viewer <span className='repo-text'>by <a href={REPO}>@pvdstel</a></span>
                </p>
            </div>
        </header>
    )
}