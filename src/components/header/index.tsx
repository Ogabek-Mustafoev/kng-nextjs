import {FC} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/routing';
import {headerLinks} from '@/constants/data';
import logoImg from '@/assets/images/logo.png';

const Header: FC = () => {
  const t = useTranslations('header');

  return (
    <header className="flex items-center justify-between gap-10 px-10 py-5">
      <div className="flex items-center gap-2">
        <Image src={logoImg} alt="logo" className="h-14 w-max" />
      </div>
      <div className="flex items-center gap-5 font-medium">
        {headerLinks.map(({text, href}) => (
          <Link key={href} href={href}>
            {t(text)}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
