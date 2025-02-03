import {getRequestConfig} from 'next-intl/server';

import {TLocale} from '@/types';
import {routing} from '@/i18n/routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as TLocale)) {
    locale = routing.defaultLocale;
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    locale,
    timeZone,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});
