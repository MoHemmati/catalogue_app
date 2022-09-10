import React from 'react';
import image1 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\image 5.png';
import image2 from 'D:\\Projects\\React\\catalogue-app\\src\\stuff\\image 6.png';

const AboutUs = () => {
    return (
        <div className='About-us'>
            <div className='About-us-contents'>
                <p className='About-us-header'>کاتالوگ ساز</p>
                <p className='About-us-details'>یکی از مشکلات و چالش‌های کسب و کارها، عدم توجه کافی به معرفی محصولات و
                    خدمات آن‌ها به صورت به روز و شفاف است که باعث هدر رفتن منابع می‌شود. کسب و کارها از روش‌هایی نظیر
                    وب‌سایت شخصی، کاتالوگ، تبلیغات و شرکت در نمایشگاه‌ها برای معرفی خود و محصولاتشان می‌کنند. شرکت‌ها و
                    افرادی که به دنبال محصولات و خدمات مورد نیازشان هستند، برخی اوقات به سختی می‌توانند کالاهای
                    دل‌خواهشان را از میان حجم انبوه و اغلب غیر سازمان یافته‌ی این کسب و کارها بیابند و به آن دسترسی
                    داشته باشند. از سوی دیگر در شرایط اقتصادی امروز، فرآیند فروش و تامین بودجه‌ی کافی جهت بازاریابی و
                    تبلیغات ممکن است مشکلات متعددی را برای صاحبان کسب و کارها ایجاد کند. بنابراین در اختیار داشتن یک
                    کاتالوگ مفید و موثر، بسیار کمک کننده خواهد بود؛ چرا که یک کاتالوگ تعاملی می‌تواند نام تجاری شما را
                    به شکل مناسبی به مخاطبین مورد نظرتان معرفی کند.</p>
                <p className='About-us-header p5'>همکاران ما</p>
                <div className='About-us-details-pics'>
                    <img src={image1} alt='About-us-details-pics' className='About-us-details-pics-style s1'/>
                    <img src={image2} alt='About-us-details-pics' className='About-us-details-pics-style s2'/>
                </div>
                <p className='About-us-header p5'>راه‌های ارتباطی</p>
                <p className='About-us-details'>نشانی دانشگاه: تهران، اوین، میدان شهریاری<br/>کد پستی:۱۹۸۳۹۶۹۴۱۱ <br/>تلفن
                    تماس روابط عمومی: ۲۲۴۳۱۹۱۹ <br/>ایمیل: pr-office@sbu.ac.ir</p>
            </div>
        </div>
    );
};

export default AboutUs;