import {FC} from 'react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/routing';
import {headerLinks} from '@/constants/data';

const Header: FC = () => {
  const t = useTranslations('header');

  return (
    <header className="flex items-center justify-between gap-10 px-10 py-10">
      <div className="flex items-center gap-2">
        <p className="text-3xl font-bold">LOGO</p>
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
