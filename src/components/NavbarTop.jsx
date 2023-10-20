export const NavbarTop = () => {
  return (
   <nav className='container mx-auto flex justify-between pt-[32px]'>
   <p>Welcome there!</p>
  <div className='flex'>
     <ul className='flex' >
    <li className=' px-[12px]'>
        <img src="images/Facebook.png" alt="" />
    </li>
    <li  className=' px-[12px]'>
         <img src="images/Group 2.png" alt="" />
    </li>
     <li className=' px-[12px]'>
         <img src="images/Facebook.png" alt="" />
     </li>
      <li className=' px-[12px]'>
         <img src="images/Facebook.png" alt="" />
      </li>
     <li className=' px-[12px]'>
         <img src="images/Facebook.png" alt="" />
     </li>
   </ul>
    <button className='ms-[45px] bg-[#1D1A1A] text-[#f5f5f5] py-[8px] px-[20px] rounded-full'>Subscribe</button>
  </div>
   </nav>
  )
}
