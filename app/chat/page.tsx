// @ts-ignore
import { Metadata } from 'next';
import Image from "next/image";
import { HiOutlineHeart, HiOutlineChatAlt2, HiOutlineSearch} from "react-icons/hi";
import { BiShare } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: "Сообщения",
  description: "Profile page for individual users",
};

const ChatPage = () => {

  return (
    <div className='grid grid-cols-3 bg-white border border-gray-200 rounded-lg'>
        <div className='border-r border-gray-200 py-5 px-5'>
            <div className='font-semibold'>Чаты</div>
            <div className="relative rounded-md shadow-sm mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500"><HiOutlineSearch /></span>
                </div>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Поиск"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='h-[750px] py-4 oferflow-x-auto'>
                <div className='flex mt-2 gap-x-2'>
                    <img 
                        src='/default.png'
                        className='w-[50px] h-[50px] rounded-full object-cover'
                    />
                    <div className=''>
                        <div className='font-semibold'>Айдос Галимжан</div> 
                        <div className='flex gap-x-2 mt-1 text-sm text-gray-500'>
                            <div>Вы: Привет</div>
                            <div className='text-gray-400'>3 д</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex col-span-2 py-5'>
            <div className='text-gray-500 mx-auto my-auto'>
                <div>Выберите чат</div>
            </div>
        </div>
    </div>
  );
};

export default ChatPage;
