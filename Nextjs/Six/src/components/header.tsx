import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className='p-4 w-full bg-black text-white'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>{t('home')}</Link>
        <LocalSwitcher />
      </nav>
    </header>
  );
}
