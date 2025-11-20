
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
            className="w-65 mb-4"
          />
          <p className="leading-8 text-gray-300 text-sm">
            في برو رايز، نحن شغوفون بمساعدتك في الحفاظ على سيارتك في حالة ممتازة، يقع مقرنا في المدينة المنورة، 
            ونقدم خدمات متخصصة مثل حماية السيارات، وتظليل عازل حراري، وحماية نانو سيراميك.
          </p>
        </div>

        {/* --- Working Hours --- */}
        <div>
          <h3 className="text-xl font-bold text-[#B08B4F] mb-4">ساعات العمل</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>الأحد: 9 صباحاً - 12:30 ظهراً، 4 مساءً - 10 مساءً</li>
            <li>الاثنين: 9 صباحاً - 12:30 ظهراً، 4 مساءً - 10 مساءً</li>
            <li>الثلاثاء: 9 صباحاً - 12:30 ظهراً، 4 مساءً - 10 مساءً</li>
            <li>الأربعاء: 9 صباحاً - 12:30 ظهراً، 4 مساءً - 10 مساءً</li>
            <li>الخميس: 9 صباحاً - 12:30 ظهراً، 4 مساءً - 10 مساءً</li>
            <li>الجمعة: مغلق</li>
            <li>السبت: 9 صباحاً - 12:30 ظهراً، 4 مساءً - 10 مساءً</li>
          </ul>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-bold text-[#B08B4F] mb-4">روابط سريعة</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-[#B08B4F] hover:underline">الصفحة الرئيسية</a></li>
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
            حي طيبة، طريق السلام، المدينة المنورة 42353<br />
            طريق الأمير محمد بن عبد العزيز، مقابل أمانة أحد، المدينة المنورة
          </p>

          <h3 className="text-xl font-bold text-[#B08B4F] mt-6 mb-3">اتصل بنا</h3>
          <p className="text-gray-300">00966506498191</p>
          <p className="text-gray-300">00966544339334</p>
        </div>

      </div>

      {/* --- Lower Bar --- */}
      <div className="text-center text-gray-400 text-sm border-t border-white/10 mt-10 pt-6">
        جميع الحقوق محفوظة © شركة برو رايز
      </div>
    </footer>
  );
}
