// import './footer.css'

function Footer () {
    return (
        <div className='h-1/6'>
            <div className='my-18 mx-20 font-mono tracking-tighter'>
                <p>Business: <a className='hover:underline' href='mailto:maxwellzhudev@gmail.com'>maxwellzhudev@gmail.com</a> </p>
                <p className='contact'>Personal: <a className='hover:underline' href='mailto:maxwellzhu123@gmail.com'>maxwellzhu123@gmail.com</a> </p>
                <div className="text-2xl my-2">
                    <a href="https://www.linkedin.com/in/maxwell-zhu-1a292b142/" target="_blank" className="hover:text-blue-900">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/m00zy" target="_blank" className="mx-3">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;