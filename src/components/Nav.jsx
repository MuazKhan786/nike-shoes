import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container ">
                <a>
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">

                    {navLinks.map((item) => (

                        <li key={item.label} className="hover:text-coral-red">
                           
                            <Link to={item.href} smooth={true}
                             className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red">
                                 {item.label} </Link>
                        </li>

                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav