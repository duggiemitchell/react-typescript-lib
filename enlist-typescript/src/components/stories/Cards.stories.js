import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { CandidateCard } from '../CandidateCard.tsx'

const data = {
    theme: {
        candidate: '#0088ce',
        jobPosting: '#61c3d7',
        warning: '#d3232a',
        none: null
    },
    steps: [
        { step: 'Go to the gym', completed: false },
        { step: 'Do yoga', completed: false },
        { step: 'Buy groceries', completed: true },
        { step: 'Get tire fixed', completed: true }
    ],
    users: ['BP', 'EM']
}
storiesOf('Cards', module)
    .add('Candiate Card', () => (
        <CandidateCard
            statusColor={data.theme.candidate}
            type={`candidate`}
            title="Kenneth Pendley"
            subtitle="App Dev, DEV"
            cardStatus="Charlotte"
            level="severe"
            users={data.users}
            steps={data.steps}
        />
    ))
    .add('with some emoji', () => (
        <button onClick={action('clicked')}>😀 😎 👍 💯</button>
    ))
