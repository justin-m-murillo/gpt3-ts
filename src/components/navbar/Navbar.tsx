import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { IconType } from 'react-icons/lib'
import './navbar.css'
import logo from '../../assets/logo.svg'

type TMenuBtn = {
  Icon: IconType;
  color: string;
  size: number;
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const MenuBtn = ({ Icon, color, size, onClick }: TMenuBtn) => (
  <div onClick={onClick}><Icon color={color} size={size} /></div>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu 
          ? <MenuBtn Icon={RiCloseLine} color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <MenuBtn Icon={RiMenu3Line} color='#fff' size={27} onClick={() => setToggleMenu(true) } /> 
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3_navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar