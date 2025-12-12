
import img from "../../public/logoo.png"
export default function Footer() {
  return (
    <footer className="bg-black text-white py-16" dir="rtl">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* --- Logo + Text --- */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-right">
          <img 
            src={img.src}
            alt="logo" 
            className="w-33 mb-4"
          />
          <p className="leading-8 text-gray-300 text-sm">
           🔰 Bronze Cover | برونز كوفر
🛡️ حماية سيارات فاخرة بتقنيات عالمية.
          </p>
        </div>

        {/* --- Working Hours --- */}
        <div>
          <h3 className="text-xl font-bold text-[#B08B4F] mb-4">ساعات العمل</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
           <li>الخميس
١:٠٠–١٠:٠٠م</li>
           <li>الجمعة
مغلق</li>
           <li>السبت
١:٠٠–١٠:٠٠م</li>
           <li>الأحد     
١:٠٠–١٠:٠٠م</li>
           <li>الاثنين
١:٠٠–١٠:٠٠م</li>
<li>الثلاثاء
١:٠٠–١٠:٠٠م</li>
<li>الأربعاء
١:٠٠–١٠:٠٠م</li>

          </ul>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-bold text-[#B08B4F] mb-4">روابط سريعة</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="" className="text-[#B08B4F] hover:underline">الصفحة الرئيسية</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">حماية السيارة PPF</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">تظليل العازل الحراري</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">النانو سيراميك للسيارات</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">أرضيات جلد للسيارات</a></li>
            <li><a href="#" className="text-[#B08B4F] hover:underline">تلميع السيارات</a></li>
          </ul>
        </div>

        {/* --- Contact --- */}
        <div>
          <h3 className="text-xl font-bold text-[#B08B4F] mb-4">المواقع</h3>
          <p className="text-gray-300 text-sm mb-4 leading-7">
           الرياض – طريق خريص، بجوار وكالة رنج روفر.</p>
          <h3 className="text-xl font-bold text-[#B08B4F] mt-6 mb-3">اتصل بنا</h3>
          <p className="text-gray-300"> +966532164658</p>
          
        </div>

      </div>

      {/* --- Lower Bar --- */}
      <div className="text-center text-gray-400 text-sm border-t border-white/10 mt-10 pt-6">
        جميع الحقوق محفوظة © شركة BRONZE COVER
      </div>
    </footer>
  );
}
