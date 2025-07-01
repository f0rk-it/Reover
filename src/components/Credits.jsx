import '../styles/credits.css'
import Card from './Card.jsx'

export default function CreditSection () {
    return (
        <>
            <div className='credits-header'>
                <h1>Credits</h1>
                <p>Special thanks to the following contributors:</p>
            </div>

            <div className="credits-grid">
                <div className="card1">
                    <Card 
                        profileImg='https://pbs.twimg.com/profile_images/1927345329055072256/IEljEN2-_400x400.jpg'
                        name='Jitasha Jain'
                        description='UX Designer | @framer Template Creator'
                        xUsername='jainjitasha'
                    />
                </div>

                <div className="card2">
                    <Card
                        profileImg='https://pbs.twimg.com/profile_images/1936498158718062592/lVpRyDJr_400x400.jpg'
                        name='Fork It🌵'
                        description='Full Stack Developer | React x FastAPI'
                        xUsername='f0rk_it'
                    />
                </div>
            </div>
        </>
    )
}