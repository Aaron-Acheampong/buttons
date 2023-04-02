import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

export default function Main() {
  return (
    <div className='relative h-screen w-full'>

      <div className='absolute h-[87%]'>
        <p className='relative w-[93px] h-[36px] left-[83px] top-[40px] font-poppins font-medium text-[24px] leading-9 text-[#4F4F4F]'>Buttons</p>

        <ul className='ml-[83px] mt-[50px]'>
          {/**  Default */}
          <li className='mt-[15px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button />`}</p>
              <button className='w-[81px] h-[36px] mr-[155px] bg-[#E0E0E0] shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3F3F3F]'><span className='w-[49px] h-[20px]'>Default</span></button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>&:hover, &:focus</p>
              <button className='w-[81px] h-[36px] bg-[#AEAEAE] shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3F3F3F]'><span className='w-[49px] h-[20px]'>Default</span></button>
            </div>
          </li>

          {/**  Outline */}
          <li className='mt-[35px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button variant=outline />`}</p>
              <button className='w-[88px] h-[36px] mr-[148px] border-[1px] border-solid border-[#3D5AFE]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3D5AFE]'><span className='w-[49px] h-[20px]'>Default</span></button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>&:hover, &:focus</p>
              <button className='w-[88px] h-[36px] bg-b1 border-[1px] border-solid border-[#3D5AFE] shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3D5AFE]'><span className='w-[49px] h-[20px]'>Default</span></button>
            </div>
          </li>

          {/**  text */}
          <li className='mt-[37px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button variant=text />`}</p>
              <button className='w-[80px] h-[30px] mr-[155px]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3D5AFE]'><span className='w-[49px] h-[20px]'>Default</span></button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>&:hover, &:focus</p>
              <button className='w-[88px] h-[36px] bg-b1  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3D5AFE]'><span className='w-[49px] h-[20px]'>Default</span><span className='w-[49px] h-[20px]'></span></button>
            </div>
          </li>

          {/**  disable shadow */}
          <li className='mt-[35px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button disableShadow />`}</p>
              <button className='w-[81px] h-[36px] bg-[#3D5AFE]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'><span className='w-[49px] h-[20px]'>Default</span></button>
            </div>
          </li>

          {/**  disabled */}
          <li className='mt-[35px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button disabled />`}</p>
              <button className='w-[88px] h-[36px] bg-[#E0E0E0] mr-[148px] shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#9E9E9E]'><span className='w-[62px] h-[20px]'>Disabled</span></button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button variant="text" disabled />`}</p>
              <button className='w-[88px] h-[36px]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#9E9E9E]'><span className='w-[62px] h-[20px]'>Disabled</span></button>
            </div>
          </li>

          {/**  local grocery store */}
          <li className='mt-[35px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button startIcon="local_grocery_store" />`}</p>
              <button className='flex items-center justify-center w-[105px] h-[36px] mr-[243px] bg-[#2962FF]  shadow-[2xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFFFFF]'><MdAddShoppingCart /><span className='ml-[5px]'>Default</span></button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button endIcon="local_grocery_store" />`}</p>
              <button className='flex items-center justify-center w-[105px] h-[36px] bg-[#2962FF] shadow-[2xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFFFFF]'><span className='mr-[5px]'>Default</span><MdAddShoppingCart /></button>
            </div>
          </li>

          {/**  size */}
          <li className='mt-[35px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button size="sm" />`}</p>
              <button className='w-[73px] h-[32px] mr-[131px] bg-[#2962FF]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Default</button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button size="md" />`}</p>
              <button className='w-[81px] h-[36px] mr-[127px] bg-[#2962FF]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Default</button>
            </div>
          
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button size-"lg" />`}</p>
              <button className='w-[93px] h-[42px] bg-[#2962FF]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Default</button>
            </div>
          </li>

          {/**  color */}
          <li className='mt-[40px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button color="default" />`}</p>
              <button className='w-[81px] h-[36px] mr-[139px] bg-[#E0E0E0]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3F3F3F]'>Default</button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button color="primary" />`}</p>
              <button className='w-[81px] h-[36px] mr-[127px] bg-[#2962FF]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Default</button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button color="secondary" />`}</p>
              <button className='w-[104px] h-[36px] mr-[136px] bg-[#455A64]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Secondary</button>
            </div>
          
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`<Button color="Danger" />`}</p>
              <button className='w-[81px] h-[36px] bg-[#D32F2F]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Danger</button>
            </div>
          </li>

          {/**  focus */}
          <li className='mt-[35px] flex'>
            <div className=''>
              <p className='mb-[2px] text-[11px]'>{`&:hover, &:focus`}</p>
              <button className='w-[81px] h-[36px] mr-[139px] bg-[#AEAEAE]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#3F3F3F]'>Default</button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>.</p>
              <button className='w-[81px] h-[36px] mr-[127px] bg-[#0039CB]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Default</button>
            </div>

            <div className=''>
              <p className='mb-[2px] text-[11px]'>.</p>
              <button className='w-[104px] h-[36px] mr-[136px] bg-[#1C313A]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Secondary</button>
            </div>
          
            <div className=''>
              <p className='mb-[2px] text-[11px]'>.</p>
              <button className='w-[81px] h-[36px] bg-[#9A0007]  shadow-[3xl] rounded-md font-noto font-medium text-[14px] leading-5 text-center text-[#FFF]'>Danger</button>
            </div>
          </li>



        </ul>
      </div>

      <p className='absolute leading-[12px] font-normal text-[#828282] font-mono bottom-[75px] left-[91.5px]'>Icons: https://material.io/resources/icons/?style=round</p>

      <footer className="absolute bottom-[24px] left-[93.5px]">
          <p className="text-[#A9A9A9] font-montserrat font-medium text-[14px] leading-[17px] ">created by <b className="">
            <a href="https://github.com/Aaron-Acheampong" target='_blank'>aaronacheampong</a></b> - <a href="https://devchallenges.io/" target='_blank'>devChallenges.io</a>
          </p>
      </footer>
    </div>
  )
}
