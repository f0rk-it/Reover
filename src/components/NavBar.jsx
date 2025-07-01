import '../styles/navbar.css'

export default function NavBar () {
    return (
        <nav id="navbar">
            <div className='navbar_left'>
                <a href="/">
                    <span className='navbar_logo'>$</span>
                    <span className='navbar_brand'>Reover</span>
                </a>
            </div>

            <div className='navbar_center dont-show-on-mobile'>
                <a href="#" className='navbar_link'>Product</a>
                <a href="#" className='navbar_link'>Reviews</a>
                <a href="#" className='navbar_link'>Benefits</a>
                <a href="#" className='navbar_link'>Pricing</a>
                <a href="#" className='navbar_link'>Changelog</a>
            </div>

            <div className='navbar_right'>
                <button className='black-btn'>Get Reover</button>
            </div>
        </nav>
    )
}