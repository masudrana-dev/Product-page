import { useState } from 'react';
import Slider from 'react-slick';
import Container from '../Layout/Container';
import { IoCartOutline } from "react-icons/io5";
import { asset, cardData, images } from '../assets/assets';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import LightGallery from 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
    const [toggle, setToggle] = useState(1);
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    function updateToggle(id) {
        setToggle(id);
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='md:pt-[150px] lg:px-28'>
            <Container>
                <div className='md:flex'>
                    <div className='md:w-[50%] lg:w-[55%]'>
                        {/* Slider  start */}
                        <div className="block md:hidden">
                            <Slider {...sliderSettings}>
                                <div>
                                    <img src={asset.img1} alt="" className='md:w-72 md:h-72 xl:w-96 xl:h-96 lg:w-80 lg:h-80 rounded-xl' />
                                </div>
                                <div>
                                    <img src={asset.img2} alt="" className='md:w-72 md:h-72 xl:w-96 xl:h-96 lg:w-80 lg:h-80 rounded-xl' />
                                </div>
                                <div>
                                    <img src={asset.img3} alt="" className='md:w-72 md:h-72 xl:w-96 xl:h-96 lg:w-80 lg:h-80 rounded-xl' />
                                </div>
                                <div>
                                    <img src={asset.img4} alt="" className='md:w-72 md:h-72 xl:w-96 xl:h-96 lg:w-80 lg:h-80 rounded-xl' />
                                </div>
                            </Slider>
                        </div>
                        {/* Slider  end */}

                        {/* toggle image section start */}
                        <div className="hidden md:block">
                            <LightGallery
                                speed={500}
                                plugin={lgThumbnail, lgZoom}
                            >
                                <img
                                    src={images[toggle].img}
                                    alt={`Product Image ${toggle + 1}`}
                                    className='md:w-72 md:h-72 xl:w-96 xl:h-96 lg:w-80 lg:h-80 rounded-xl cursor-pointer'
                                />

                                {/* Thumbnails for larger screens */}
                                <div className='flex pt-5 md:gap-x-8 lg:gap-x-8 xl:gap-x-5 cursor-pointer'>
                                    {images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img.img}
                                            alt={`Thumbnail Image ${index + 1}`}
                                            className={`md:w-12 md:h-12 xl:w-20 xl:h-20 lg:w-14 lg:h-16 rounded-xl ${toggle === index ? 'border-2 border-orange-500' : ''}`}
                                            onClick={() => updateToggle(index)}
                                        />
                                    ))}
                                </div>
                            </LightGallery>
                        </div>
                    </div>
                    {/* toggle image section end */}

                    {/* Product info section start */}
                    <div className='md:w-[50%] lg:w-[45%]'>

                        {cardData.map((item) => (
                            <div className='text-left xl:pt-6 lg:pt-2' key={item.id}>
                                <h6 className='font-poppins text-gray-500 text-[12px] pt-[20px]'>{item.name}</h6>
                                <h1 className='font-poppins font-bold text-black xsm:text-[28px] sm:text-[35px] md:text-[22px]  lg:text-[26px] xl:text-[32px] pt-4'>{item.heading}</h1>
                                <p className='text-gray-400 font-poppins text-[14px] xsm:pt-[10px] sm:pt-[15px] md:pt-[20px] lg:pt-[26px] xl:pt-[35px]'>{item.description}</p>

                                <div className=' sm:flex  justify-between md:flex-col sm:pt-[10px]'>
                                    <p className='flex items-center font-poppins font-bold text-[30px] py-2'>
                                        {item.price}
                                        <span className='flex items-center justify-center w-[45px] h-[25px] ml-5 p-1 rounded-md bg-black text-white text-[12px]'>50%</span>
                                    </p>
                                    <p><del className='font-poppins text-gray-400'>$250.00</del></p>
                                </div>
                            </div>
                        ))}

                        <div className='md:flex items-center justify-between xsm:pt-2 md:pt-6'>
                            {/* increment decrement button start */}
                            <div className='sm:bg-gray-200 sm:p-1 md:bg-white md:p-0 rounded-md'>
                                <button onClick={decrement} className='text-orange-500 tetx-2xl focus:outline-none hover:text-orange-600  font-bold '>-</button>
                                <span className="xsm:mx-20 sm:mx-24 md:mx-10 text-lg font-bold text-gray-800">{count}</span>
                                <button onClick={increment} className='text-orange-500 tetx-2xl focus:outline-none hover:text-orange-600  font-bold '>+</button>
                            </div>
                            {/* increment decrement button end */}

                            {/* Add to cart button start  */}
                            <div className='xsm:pt-2 sm:pt-5 md:pt-0'>
                                <button className=' flex items-center justify-center border border-2 border-orange-600 bg-orange-600 hover:bg-white hover:text-orange-600 transition font-medium font-poppins xsm:px-28 sm:px-48 md:px-10 py-2 rounded-md '>
                                    <IoCartOutline className='mr-3' />
                                    Add to cart
                                </button>
                            </div>
                            {/* Add to cart button end  */}
                        </div>
                    </div>
                    {/* Product info section start */}
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;
