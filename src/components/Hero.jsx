import '../styles/hero.css'
import { RxQuestionMarkCircled } from 'react-icons/rx'
import { GoArrowUpRight } from 'react-icons/go'
import { FaSackDollar } from 'react-icons/fa6'
import { TbCoinFilled } from 'react-icons/tb'

export default function HeroSection() {
    return (
        <>
            <div className="pill">
                55,000+ trusted Businesses
            </div>

            <p className='intro'>
                Unlock savings with Reover  the AI-powered card designed to optimize your <br /> business expenses with every swipe.
                No complexity, just better returns.
            </p>

            <h1 className="title">
                Smart Spending for <br /> Smarter Businesses
            </h1>

            <div className='buttons'>
                <button className='light-btn'><RxQuestionMarkCircled /> More info</button>
                <button className='dark-btn'><GoArrowUpRight /> Get Started</button>
            </div>

            <p className='subtitle'>
                No long-term commitment, cancel anytime. <br />
                Read-time insights. Monthly updates. Zero hassle.
            </p>

            <div className='floating-icons'>
                <span className='coin top-left left-one'><TbCoinFilled /></span>
                <span className='coin top-left left-two'><TbCoinFilled /></span>
                <span className='coin top-left left-three'><TbCoinFilled /></span>

                <span className='coin top-right right-one'><TbCoinFilled /></span>
                <span className='coin top-right right-two'><TbCoinFilled /></span>
                <span className='coin top-right right-three'><TbCoinFilled /></span>

                <span className='bag bottom-left'><FaSackDollar /></span>
            </div>
        </>
    )
}