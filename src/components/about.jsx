import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation();
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div id='about' className="p-6 bg-white shadow rounded-2xl m-auto container mt-[100px]">
            <div className={`text-gray-800 md:text-[18px] font-serif leading-relaxed ${isExpanded ? '' : 'line-clamp-6'}`}>
            {t("abouttext")}
                <br />
                <strong className='text-center text-[28px]'>Наши достижения</strong>
                <br /><br />
                <ul className="list-disc pl-5">
                    <li>{t('aboutItem1')}</li>
                    <li>{t('aboutItem2')}</li>
                    <li>{t('aboutItem3')}</li>
                    <li>{t('aboutItem4')}</li>
                </ul>
            </div>
            <button 
                onClick={toggleExpand} 
                className="mt-4 text-blue-600 hover:underline focus:outline-none">
                {isExpanded ? 'Скрыть текст...' : 'Показать полный текст...'}
            </button>
        </div>
    );
};

export default About;
