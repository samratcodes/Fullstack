import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('title')}</h1>
        <p className="text-lg text-gray-800 text-center">{t('description')}</p>
      </div>
    </div>
  );
}
