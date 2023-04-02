import React from 'react'

export default function Nav() {
  return (
    <div className='relative w-[237px] h-screen bg-[#eaebee] '>

      <p className=' absolute ml-[56.5px] mt-[47.07px] w-[114px] h-[20px] text-[#090F31] not-italic font-semibold text-[13px] leading-5 font-poppins'>
        <span className='text-[#F7542E]'>Dev</span>challenges.io</p>

      <div className='absolute ml-[56.5px] top-[190px]'>
        <ul className=''>
          <li className='mt-[30px] font-noto text-[#9E9E9E] font-medium text-[14px] leading-5'>Colors</li>
          <li className='mt-[30px] font-noto text-[#9E9E9E] font-medium text-[14px] leading-5'>Typography</li>
          <li className='mt-[30px] font-noto text-[#9E9E9E] font-medium text-[14px] leading-5'>Spaces</li>
          <li className='mt-[30px] font-noto text-[#9E9E9E] font-medium text-[14px] leading-5'>Buttons</li>
          <li className='mt-[30px] font-noto text-[#090F31] font-medium text-[14px] leading-5'>Inputs</li>
          <li className='mt-[30px] font-noto text-[#9E9E9E] font-medium text-[14px] leading-5'>Grid</li>
        </ul>
      </div>
      
    </div>
  )
}
