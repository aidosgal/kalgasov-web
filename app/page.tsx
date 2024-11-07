import Image from "next/image";
import { HiOutlineHeart, HiOutlineChatAlt2} from "react-icons/hi";
import { HiStar } from "react-icons/hi2";
import { BiShare } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";

export default function Home() {
  return (
    <div className="grid grid-cols-10 gap-x-3">
      <div className="col-span-7">
        <div className='flex items-center gap-x-4 bg-white border border-gray-200 px-5 py-2 rounded-lg'>
           <div className="flex-shrink-0">
            <img
              src="/default.png"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
            <div>
                <input
                    type='text'
                    placeholder='Что у вас нового?'
                />
            </div>
        </div>
        <div className="w-full cursor-pointer mt-3 gap-x-3 py-5 rounded-lg bg-white border border-gray-200">
          <div className='flex px-5 gap-x-3'>
              <div className="flex-shrink-0">
                <img
                  src="/default.png"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-x-2">
                  <div className="font-semibold">Айдос Галимжан</div>
                  <div className="text-gray-500 text-sm">@aidosgal</div>
                  <div className="text-gray-500 text-sm">Окт 3</div>
                </div>
                <div>
                  <div>Innovate with our real-time and historical data on the X API!</div>
                  <div className="mt-2">
                    <Image
                      src="/nature.jpg"
                      alt="Nature Image"
                      width={640}
                      height={360}
                      className="w-full object-contain rounded-lg"
                    />
                  </div>
                  <div className='flex items-center mt-2 gap-x-2'>
                    <div className='flex items-center gap-x-1 py-1 px-4 rounded-full bg-red-100 text-red-600'>
                        <HiOutlineHeart className='text-xl'/> 
                        <div className='text-sm'>153</div>
                    </div>
                    <div className='flex items-center gap-x-1 py-1 px-4 rounded-full bg-gray-100 text-gray-600'>
                        <HiOutlineChatAlt2 className='text-xl'/> 
                        <div className='text-sm'>4</div>
                    </div>
                    <div className='flex items-center gap-x-1 py-1 px-4 rounded-full bg-gray-100 text-gray-600'>
                        <BiShare className='text-xl'/> 
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className='border-t-[1px] px-10 border-gray-200 mt-3'>
            <div className='flex gap-x-3 mt-4'>
                <div className="flex-shrink-0">
                    <img
                      src="/default.png"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                </div>
                <div className='text-sm'>
                    <div className='font-semibold'>Айдос Галимжан</div>
                    <div>Шикарный вид</div>
                    <div className='flex gap-x-2 text-gray-500 items-center'>
                        <div>Вчера в 19:30</div>
                        <div className='text-red-500'>Ответить</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-3 mt-4'>
                <div className="flex-shrink-0">
                    <img
                      src="/default.png"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                </div>
                <div className='flex w-full gap-x-3'>
                    <input
                        type='text'
                        className='border text-sm px-3 w-full rounded-lg border-gray-200'
                        placeholder='Написать коментарий'
                    />
                    <div>
                    <div
                        className='rounded-full flex text-white bg-black w-[35px] h-[35px]'
                    >
                        <IoMdArrowUp className='text-xl mx-auto my-auto'/>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-x-3 mt-3'>
           <div className='bg-white p-3 border border-gray-200 rounded-lg'>
                <div className='relative'>
                    <div className='absolute top-0 right-0'>
                        <HiOutlineHeart className='text-2xl text-gray-400' />
                    </div>
                    <img
                        src='/product.jpg'
                        className='w-full h-[200px] object-cover rounded-lg'
                    />
                </div>
                <div className='text-gray-700 text-sm mt-2'>Coca-Cola 0.35л</div>
                <div className='mt-2 flex gap-x-2 items-center'>
                    <HiStar className='text-xl text-yellow-500'/>
                    <div className='text-sm font-semibold'>4.85</div>
                    <div className='text-sm text-gray-500'>(16 отзывов)</div>
                </div>
                <div className='font-semibold mt-2 text-lg'>4 000₽</div>
                <div className='text-center bg-blue-500 mt-2 text-white rounded-lg py-2 text-sm font-semibold'>Написать</div>
            </div>
            <div className='bg-white p-3 border border-gray-200 rounded-lg'>
                <div className='relative'>
                    <div className='absolute top-0 right-0'>
                        <HiOutlineHeart className='text-2xl text-gray-400' />
                    </div>
                    <img
                        src='/product.jpg'
                        className='w-full h-[200px] object-cover rounded-lg'
                    />
                </div>
                <div className='text-gray-700 text-sm mt-2'>Coca-Cola 0.35л</div>
                <div className='mt-2 flex gap-x-2 items-center'>
                    <HiStar className='text-xl text-yellow-500'/>
                    <div className='text-sm font-semibold'>4.85</div>
                    <div className='text-sm text-gray-500'>(16 отзывов)</div>
                </div>
                <div className='font-semibold mt-2 text-lg'>4 000₽</div>
                <div className='text-center bg-blue-500 mt-2 text-white rounded-lg py-2 text-sm font-semibold'>Написать</div>
            </div>
            <div className='bg-white p-3 border border-gray-200 rounded-lg'>
                <div className='relative'>
                    <div className='absolute top-0 right-0'>
                        <HiOutlineHeart className='text-2xl text-gray-400' />
                    </div>
                    <img
                        src='/product.jpg'
                        className='w-full h-[200px] object-cover rounded-lg'
                    />
                </div>
                <div className='text-gray-700 text-sm mt-2'>Coca-Cola 0.35л</div>
                <div className='mt-2 flex gap-x-2 items-center'>
                    <HiStar className='text-xl text-yellow-500'/>
                    <div className='text-sm font-semibold'>4.85</div>
                    <div className='text-sm text-gray-500'>(16 отзывов)</div>
                </div>
                <div className='font-semibold mt-2 text-lg'>4 000₽</div>
                <div className='text-center bg-blue-500 mt-2 text-white rounded-lg py-2 text-sm font-semibold'>Написать</div>
            </div>
        </div>
        <div className="w-full cursor-pointer mt-3 gap-x-3 py-5 rounded-lg bg-white border border-gray-200">
          <div className='flex px-5 gap-x-3'>
              <div className="flex-shrink-0">
                <img
                  src="/default.png"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-x-2">
                  <div className="font-semibold">Айдос Галимжан</div>
                  <div className="text-gray-500 text-sm">@aidosgal</div>
                  <div className="text-gray-500 text-sm">Окт 3</div>
                </div>
                <div>
                  <div>Innovate with our real-time and historical data on the X API!</div>
                  <div className="mt-2">
                    <Image
                      src="/nature.jpg"
                      alt="Nature Image"
                      width={640}
                      height={360}
                      className="w-full object-contain rounded-lg"
                    />
                  </div>
                  <div className='flex items-center mt-2 gap-x-2'>
                    <div className='flex items-center gap-x-1 py-1 px-4 rounded-full bg-red-100 text-red-600'>
                        <HiOutlineHeart className='text-xl'/> 
                        <div className='text-sm'>153</div>
                    </div>
                    <div className='flex items-center gap-x-1 py-1 px-4 rounded-full bg-gray-100 text-gray-600'>
                        <HiOutlineChatAlt2 className='text-xl'/> 
                        <div className='text-sm'>4</div>
                    </div>
                    <div className='flex items-center gap-x-1 py-1 px-4 rounded-full bg-gray-100 text-gray-600'>
                        <BiShare className='text-xl'/> 
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className='border-t-[1px] px-10 border-gray-200 mt-3'>
            <div className='flex gap-x-3 mt-4'>
                <div className="flex-shrink-0">
                    <img
                      src="/default.png"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                </div>
                <div className='text-sm'>
                    <div className='font-semibold'>Айдос Галимжан</div>
                    <div>Шикарный вид</div>
                    <div className='flex gap-x-2 text-gray-500 items-center'>
                        <div>Вчера в 19:30</div>
                        <div className='text-red-500'>Ответить</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-3 mt-4'>
                <div className="flex-shrink-0">
                    <img
                      src="/default.png"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                </div>
                <div className='flex w-full gap-x-3'>
                    <input
                        type='text'
                        className='border text-sm px-3 w-full rounded-lg border-gray-200'
                        placeholder='Написать коментарий'
                    />
                    <div>
                    <div
                        className='rounded-full flex text-white bg-black w-[35px] h-[35px]'
                    >
                        <IoMdArrowUp className='text-xl mx-auto my-auto'/>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <div className='bg-white border border-gray-200 rounded-lg p-5'>
        </div>
      </div>
    </div>
  );
}
