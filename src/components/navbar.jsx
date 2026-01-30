import {NavLink} from 'react-router';
improt {Button} from "@components/navbar";

const Navbar = () => {
  return (
    <nav className='flex h-14 shadow-sm items-center justify-between px-10'>
        <div>
            <h1 className='text-4xl font-semibold tracking-tighter'>Imagine</h1>
        </div>
        <div className='flex gap-4'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div className='flex gap-4'>

            <button>
            <NavLink to="/auth/login">Login</NavLink>
            </button>
            <button>
            <NavLink to="/auth/register">Register</NavLink>
            </button>
        </div>
    </nav>
  )
}

export default Navbar