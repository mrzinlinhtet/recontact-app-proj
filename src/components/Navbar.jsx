import {AiFillContacts} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-blue-50 px-10 shadow-sm my-2'> 
      <h1 className='flex items-center gap-3'><AiFillContacts className='text-2xl text-yellow-500' /><span className='font-bold text-blue-800'>ReContact</span></h1>
      <div className="flex items-center gap-5">
        <div>
            <p>Zin Lin</p>
            <small>gamani@gmail.com</small>
        </div>
        <button className='bg-gray-400 px-3 py-1 rounded text-white cursor-pointer'>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
