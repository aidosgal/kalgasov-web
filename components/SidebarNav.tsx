"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineShoppingBag,
  HiOutlineStar,
  HiOutlineChatBubbleOvalLeft,
} from 'react-icons/hi2';
import { BsShop } from "react-icons/bs";

const SidebarNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: HiOutlineHome, label: 'Лента' },
    { href: '/subscriptions', icon: HiOutlineUserGroup, label: 'Подписки' },
    { href: '/chat', icon: HiOutlineChatBubbleOvalLeft, label: 'Сообщения' },
    { href: '/stores', icon: BsShop, label: 'Магазины' },
    { href: '/products', icon: HiOutlineShoppingBag, label: 'Товары' },
    { href: '/fav', icon: HiOutlineStar, label: 'Избранные' },
  ];

  return (
    <div className="col-span-3 sticky top-[80px] space-y-2 px-5 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
      {navItems.map(({ href, icon: Icon, label }) => (
        <Link
          key={href}
          href={href}
          className={`flex items-center gap-x-3 px-4 py-2 rounded-lg transition-colors
            ${pathname === href 
              ? 'bg-white text-black' 
              : 'text-gray-600 hover:text-black'
            }`}
        >
          <Icon className="text-2xl" />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarNav;
