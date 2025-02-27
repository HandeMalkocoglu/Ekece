import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white pl-26 pr-26">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 mb-8 pl-26 pr-26 ">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-4 text-lg font-medium ${
            activeTab === "description" ? "text-[#252b42] border-b-2 border-[#252b42]" : "text-[#737373]"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("additional")}
          className={`px-6 py-4 text-lg font-medium ${
            activeTab === "additional" ? "text-[#252b42] border-b-2 border-[#252b42]" : "text-[#737373]"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-6 py-4 text-lg font-medium ${
            activeTab === "reviews" ? "text-[#252b42] border-b-2 border-[#252b42]" : "text-[#737373]"
          }`}
        >
          Reviews (0)
        </button>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-26 pr-26">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="/product-tab.png"
            alt="Pink chair with table and framed picture"
            className="w-80 h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-8 flex flex-row">
          {/* First Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#252b42] mb-4">the quick fox jumps over</h2>
            <p className="text-[#737373] mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
              RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
              RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-[#737373] leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
              RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>

          {/* Second Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#252b42] mb-4">the quick fox jumps over</h2>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-[#737373]">
                  <ChevronRight className="w-5 h-5 text-[#737373]" />
                  <span>the quick fox jumps over the lazy dog</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#252b42] mb-4">the quick fox jumps over</h2>
            <ul className="space-y-3">
              {[1, 2, 3].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-[#737373]">
                  <ChevronRight className="w-5 h-5 text-[#737373]" />
                  <span>the quick fox jumps over the lazy dog</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}