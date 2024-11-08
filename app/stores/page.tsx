// @ts-ignore
import { Metadata } from 'next';
import Image from "next/image";
import { HiOutlineHeart, HiOutlineChatAlt2, HiOutlineSearch} from "react-icons/hi";
import { HiStar } from "react-icons/hi2";
import { BiShare } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: "Сообщения",
  description: "Profile page for individual users",
};

const StoresPage = () => {

  return (
    <div className='grid grid-cols-7 gap-x-3'>
        <div className='col-span-5'>
            <div className='bg-white py-10 px-10 rounded-lg border border-gray-200'>
                <div className='text-2xl font-semibold'>Ваша идеальная реклама</div>
                <div className='text-gray-500'>Здесь можно разместить рекламнный баннер</div>
                <div className='flex gap-x-3 mt-5'>
                    <div className='bg-black text-white rounded-lg px-10 py-2 text-sm font-semibold'>Перейти</div>
                </div>
            </div>
            <div className="w-full mt-2 relative rounded-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500"><HiOutlineSearch /></span>
                </div>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Поиск..."
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='grid grid-cols-2 gap-3 mt-3'>
                <div className='bg-white border border-gray-200 rounded-lg'>
                    <div className='relative'>
                        <div className='absolute top-3 right-3'>
                            <HiOutlineHeart className='text-2xl text-white' />
                        </div>
                        <img
                            src='/shop.jpg'
                            className='w-full h-[150px] object-cover rounded-lg'
                        />
                    </div>
                    <div className='px-3 mt-1 pb-3'>
                        <div className='font-semibold text-lg'>Aina</div>
                        <div className='text-gray-700 text-sm'>Магазин онлайн продуктов</div>
                        <div className='mt-2 flex gap-x-2 items-center'>
                            <HiStar className='text-xl text-yellow-500'/>
                            <div className='text-sm font-semibold'>4.85</div>
                            <div className='text-sm text-gray-500'>(16 отзывов)</div>
                        </div>
                        <div className='text-center bg-blue-500 mt-2 text-white rounded-lg py-2 text-sm font-semibold'>Перейти</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-2'>
            <div className='bg-white p-5 rounded-lg border border-gray-200'>
                <div className='font-semibold'>Фильтры</div>
            </div>
        </div>
    </div>
  );
};

export default StoresPage;
