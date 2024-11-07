import { Metadata } from 'next';
import Image from "next/image";
import { HiOutlineHeart, HiOutlineChatAlt2, HiOutlineSearch} from "react-icons/hi";
import { BsPersonAdd } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiStar } from "react-icons/hi2";
import { BiShare } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: "Сообщения",
  description: "Profile page for individual users",
};

const SubPage: React.FC<UserPageProps> = ({ params }) => {

  return (
    <div className='grid grid-cols-3 gap-x-3'>
        <div className='col-span-2'>
            <div className="w-full relative rounded-md">
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
            <div className='bg-white mt-4 border rounded-lg border-gray-200 p-5 h-[300px] flex'>
                <div className='mx-auto my-auto text-center'>
                    <div className='flex'> 
                        <IoPersonAddOutline className='mx-auto text-gray-400 text-7xl'/>
                    </div>
                    <div className='text-xl mt-2 font-semibold'>Находите друзей</div>
                    <div className='text-sm text-gray-500 mt-1'>Здесь будут отображаться люди, которых вы добавите в друзья</div>
                    <div className='px-10 py-2 rounded-lg text-sm mt-5 font-semibold bg-blue-500 text-white inline-block'>Найти друзей</div>
                </div>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='bg-white px-5 py-3 rounded-lg border border-gray-200'>
                <div className='font-semibold'>Возможно вы знакомы</div>
                <div className='flex gap-x-3 mt-4 items-center'>
                    <img 
                        src='/default.png'
                        className='w-10 h-10 rounded-full object-cover'
                    />
                    <div>
                        <div className='font-semibold'>Айдос Галимжан</div>
                        <div className='text-sm text-gray-500'>@aidosgal</div>
                    </div>
                    <div className='ml-auto'>
                        <BsPersonAdd className='text-2xl text-blue-500'/>
                    </div>
                </div>
                <div className='flex gap-x-3 mt-4 items-center'>
                    <img 
                        src='/default.png'
                        className='w-10 h-10 rounded-full object-cover'
                    />
                    <div>
                        <div className='font-semibold'>Айдос Галимжан</div>
                        <div className='text-sm text-gray-500'>@aidosgal</div>
                    </div>
                    <div className='ml-auto'>
                        <BsPersonAdd className='text-2xl text-blue-500'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SubPage;

