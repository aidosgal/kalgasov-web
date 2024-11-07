import { Metadata } from 'next';
import Image from "next/image";
import { HiOutlineHeart, HiOutlineChatAlt2} from "react-icons/hi";
import { BiShare } from "react-icons/bi";
import { IoMdArrowUp } from "react-icons/io";
import { useRouter } from 'next/navigation';

interface UserPageProps {
  params: {
    user_name: string;
  };
}

export const metadata: Metadata = {
  title: "Aidos Galimzhan",
  description: "Profile page for individual users",
};

const UserPage: React.FC<UserPageProps> = ({ params }) => {
  const { user_name } = params;

  return (
    <div>
        <div className='bg-white rounded-lg border border-gray-200'>
            <div className='bg-gray-100 w-full h-[200px] rounded-lg'></div>
            <div className='flex bg-white py-5 px-10'>
                <img
                    src='/default.png'
                    className='w-[140px] h-[140px] rounded-full object-cover -mt-20'
                />
                <div className='ml-5'>
                    <div className='text-2xl font-semibold'>Айдос Галимжан</div>
                    <div className='text-sm text-blue-500 mt-2'>Укажите информацию о себе</div>
                </div>
                <div className='ml-auto'>
                    <div className='px-6 py-2 text-sm bg-black text-white font-semibold rounded-lg'>Редактировать профиль</div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-10 gap-x-3 mt-3'>
            <div className="col-span-6">
                <div className="w-full cursor-pointer gap-x-3 py-5 rounded-lg bg-white border border-gray-200">
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
            <div className="col-span-4">
                <div className='p-5 bg-white rounded-lg border border-gray-200'>
                    <div className='font-semibold'>Магазины</div> 
                    <div className='mt-5'>
                        <div className='text-center text-gray-500'>У вас нет магазинов</div>
                        <div className='flex'>
                        <div className='font-semibold mx-auto mt-2 text-center text-sm px-7 py-2 rounded-lg text-white bg-black inline-block'>Создать</div>
                        </div>
                    </div>
                </div>
                <div className='p-5 mt-2 bg-white rounded-lg border border-gray-200'>
                    <div className='font-semibold'>Подписки</div> 
                    <div className='mt-5'>
                        <div className='text-center text-gray-500'>У вас нет подписок</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default UserPage;