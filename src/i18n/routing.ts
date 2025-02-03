import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

import {locales} from '@/constants';

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localeDetection: false,
  localePrefix: 'as-needed'
});

export const {Link, usePathname, useRouter} = createNavigation(routing);
