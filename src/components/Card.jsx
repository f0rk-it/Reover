import '../styles/card.css'
import placeholderImg from '../assets/profile-pic.jpg'

export default function Card ({
    profileImg = placeholderImg,
    name = "John Doe",
    description = "Full Stack Developer & UI/UX Designer",
    xUsername = "johndoe"
}) {
    const handleXClick = () => {
        window.open(`https://x.com/${xUsername}`, '_blank');
    };

    return (
        <>
            <div className='card'>
                <div className='profile-header'>
                    <img className='profile-img' src={profileImg} alt="" />
                    <h2 className='profile-name'>{name}</h2>
                </div>
                <p className='profile-subtitle'>{description}</p>

                <div className='button' onClick={handleXClick}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Follow on X
                </div>
            </div>

            <div className='accents'>
                <div className='acc-card'></div>
                <div className='acc-card'></div>
                <div className="acc-card"></div>

                <div className='light'></div>
                <div className='light sm'></div>

                <div className="top-light"></div>
            </div>
        </>
    )
}