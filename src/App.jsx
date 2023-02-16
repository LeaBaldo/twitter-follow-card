import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'GoRollerblade',
        name: 'Rollerblade',
        isFollowing: false
    },
    {
        userName: 'YouTube',
        name: 'YouTube',
        isFollowing: true
    },
    {
        userName: 'Github',
        name: 'GitHub',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                        ))
                )   
            }
        </section>
    )
}
