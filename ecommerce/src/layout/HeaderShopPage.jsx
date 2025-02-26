import {
    Phone,
    Mail,
    Instagram,
    Youtube,
    Facebook,
    Twitter,
  } from "lucide-react"
  const HeaderShopPage = () => {
    return (
      <header className="w-full">
        {/* Üst çubuk */}
        <div className=" pl-64 pr-64 bg-[#23856D] text-white py-3">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">(225) 555-0118</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">michelle.rivera@example.com</span>
              </div>
            </div>
            <div className="hidden md:block text-sm">Follow Us and get a chance to win 80% off</div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow Us :</span>
              <div className="flex space-x-3">
                <a href="#" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="#" aria-label="Youtube">
                  <Youtube size={16} />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  export default HeaderShopPage;