"use client"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const t = useTranslations('HomePage');
    const route = useRouter();

    const handleChange = (event: any) => {
        const locale = event.target.value;
        console.log(locale);

        if (locale) {
            route.push(`/${locale}`);
        }
    };

    return (
        <div>
            <select id="languages" onChange={handleChange} defaultValue="">
                <option value="" disabled>{t('selectLanguage')}</option>
                <option value="vi">Vietnamese</option>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
            </select>
            <h1>{t('title')}</h1>
            <h1>{t('description')}</h1>
        </div>
    );
}
