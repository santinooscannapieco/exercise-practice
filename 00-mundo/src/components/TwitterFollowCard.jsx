import { useState } from "react"


export const TwitterFollowCard = ({ userName = 'no encontrado', name, avatar, initialIsFollowing }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const [hovered, setHovered] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const classNameFollow = isFollowing 
        ? 'hover:bg-red-500 bg-transparent border hover:border-red-900 text-stone-50  w-[110px] w-[140px]'
        : 'hover:bg-cyan-400 border'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    const handleMouseEnter = () => {
        setHovered(true)
    }
      
    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <article className='flex items-center gap-4 justify-between'>
            <header className='flex gap-2'>
                <img 
                    className='w-[50px] h-[50px] rounded-full'
                    src={avatar} 
                    alt="foto-perfil" 
                />
                <div className='flex flex-col text-stone-50'>
                    <strong>{name}</strong>
                    <span className='text-stone-400'>@{userName}</span>
                </div>
            </header>
            <aside className='align-center'>
                <button 
                    onClick={handleClick} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    className={`bg-stone-50 px-3 rounded-full cursor-pointer ${classNameFollow}`}
                >
                    {text == 'Siguiendo' 
                        ? hovered 
                            ? <span className="text-red-900">Dejar de seguir</span>
                            : <span>{text}</span>
                        : <span>{text}</span>
                    }
                </button>
            </aside>
        </article>
    )
}