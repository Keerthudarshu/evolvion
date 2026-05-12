import React from 'react'
import Classes from '../Hero.module.css'

const AVATARS = [
    { src: '/images/jake.webp', alt: 'Jake' },
    { src: '/images/parker.jpg', alt: 'Parker' },
    { src: '/images/ari.png', alt: 'Ari' },
    { src: '/images/dimitris.webp', alt: 'Dimitris' },
    { src: '/images/mcclain.webp', alt: 'McClain' },
]

export default function AvatarsGroup() {
    return (
        <div className={Classes.avatarGroup}>
            <div className={Classes.avatarRow}>
                {AVATARS.map((avatar, index) => (
                    <div
                        key={avatar.src}
                        className={Classes.avatarItem}
                        style={{ '--i': index }}
                    >
                        <img
                            src={avatar.src}
                            className={Classes.avatarImg}
                            draggable={false}
                            alt={avatar.alt}
                        />
                    </div>
                ))}
            </div>
            <p className={Classes.avatarText}>Trusted by 100+ businesses worldwide</p>
        </div>
    )
}
