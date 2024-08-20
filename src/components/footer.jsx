import './footer.css'

function Footer () {
    return (
        <div className='footer'>
            <div className='contacts'>
                <p className='contact'>Business: <a className='email' href='mailto:maxwellzhudev@gmail.com'>maxwellzhudev@gmail.com</a> </p>
                <p className='contact'>Personal: <a className='email' href='mailto:maxwellzhu123@gmail.com'>maxwellzhu123@gmail.com</a> </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/maxwell-zhu-1a292b142/" target="_blank" class="social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/m00zy" target="_blank" class="social-link">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;