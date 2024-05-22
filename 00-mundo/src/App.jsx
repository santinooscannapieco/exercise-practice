import './App.css'
import img from './assets/foto-perfil.jpeg'
import img2 from './assets/react.svg'
import img3 from '../public/vite.svg'
import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
    {
        id: 1,
        userName: 'tinoscanna4',
        name: 'Tino🤍🖤',
        isFollowing: false,
        avatar: img
    },
    {
        id: 2,
        userName: 'tinoscanna4',
        name: 'Tino🤍🖤',
        isFollowing: true,
        avatar: img2
    },
    {
        id: 3,
        userName: 'tinoscanna4',
        name: 'Tino🤍🖤',
        isFollowing: false,
        avatar: img3
    }
]

export function App () {

    return(
        <>
        {
            users.map(({ id, userName, name, avatar, isFollowing }) => (
                <TwitterFollowCard 
                    key={id}
                    userName={userName}
                    name={name}
                    avatar={avatar}
                    initialIsFollowing={isFollowing}
                />
            ))
        }
        </>
    )
}