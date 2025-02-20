
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
    {/* Sol Bölüm: Ajans Açıklaması */}
    <div className="flex flex-row container mx-auto px-4 gap-230 ">
    <div>
          <h3 className=" text-xl font-semibold mb-2">Consulting Agency For Your Business</h3>
          <p className="text-sm text-white-400 mb-4">the quick fox jumps over the lazy dog</p>
           </div>
           <button className="bg-[#23A6F0] text-white px-6 py-3 rounded hover:bg-blue-500 hover:cursor-pointer w-[170px] h-[50px]">
  Contact Us
</button>
        </div>
        <div className="pt-10 container mx-auto px-4 flex flex-row gap-40">
  {/* Şirket Bilgileri */}
  <div>
    <h4 className="font-semibold mb-2">Company Info</h4>
    <ul className="space-y-1 text-sm text-gray-400">
      <li>About Us</li>
      <li>Carrier</li>
      <li>We are hiring</li>
      <li>Blog</li>
    </ul>
  </div>
  {/* Legal */}
  <div>
    <h4 className="font-semibold mb-2">Legal</h4>
    <ul className="space-y-1 text-sm text-gray-400">
      <li>About Us</li>
      <li>Carrier</li>
      <li>We are hiring</li>
      <li>Blog</li>
    </ul>
  </div>
  {/* Features */}
  <div>
    <h4 className="font-semibold mb-2">Features</h4>
    <ul className="space-y-1 text-sm text-gray-400">
      <li>Business Marketing</li>
      <li>User Analytic</li>
      <li>Live Chat</li>
      <li>Unlimited Support</li>
    </ul>
  </div>
  {/* Resources */}
  <div>
    <h4 className="font-semibold mb-2">Resources</h4>
    <ul className="space-y-1 text-sm text-gray-400">
      <li>IOS & Android</li>
      <li>Watch a Demo</li>
      <li>Customers</li>
      <li>API</li>
    </ul>
  </div>
  {/* İletişim Bilgileri */}
  <div>
    <h4 className="font-semibold mb-2">Get In Touch</h4>
    <ul className="space-y-1 text-sm text-gray-400">
      <li className="flex items-center gap-2">* (480) 555-0103</li>
      <li className="flex items-center gap-2">* 4517 Washington Ave.</li>
      <li className="flex items-center gap-2">* debra.holt@example.com</li>
    </ul>
  </div>
</div>
{/* Alt Bilgi ve Sosyal Medya */}
<div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">Made With Love By Finland All Right Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
            *
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
            *
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
            *
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;