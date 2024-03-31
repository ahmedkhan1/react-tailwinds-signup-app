import React from 'react'
import banner from '../../../assests/images/banner-image.png';

export default function Banner() {
  return (
    <div className="banner-color relative hidden text-white w-2/4 lg:flex flex-col items-center justify-center mr-[-28px]">
        <div className="text-center mr-3">
            <h1 className="w-[366px] text-4xl mb-10 m-auto">Sign up <br /> and come on in</h1>
            <div>
                <img className="w-[366px] m-auto" src={banner} alt="" />
            </div>
        </div>
        <div className="footer absolute bottom-[24px] mb-5 text-sm mr-3">
            <p>© Typeform</p>
        </div>
    </div>
  )
}
