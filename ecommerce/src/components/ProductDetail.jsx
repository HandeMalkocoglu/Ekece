import { useState } from "react"
import { Heart, ShoppingCart, Eye, Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState("blue")

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-[#ffffff]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-26 pr-26">
        {/* Product Images Section */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-md mb-4">
            <img
              src="single-product-1-cover-2.jpg"
              alt="Yellow sofa with blue pillow"
              className="w-full h-auto object-cover"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#ffffff] rounded-full shadow-md">
              <ChevronLeft className="w-6 h-6 text-[#252b42]" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#ffffff] rounded-full shadow-md">
              <ChevronRight className="w-6 h-6 text-[#252b42]" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4">
            <img
              src="/single-product-1-thumb-1.jpg"
              alt="Thumbnail 1"
              className="w-20 h-20 object-cover rounded-md cursor-pointer border-2 border-[#23a6f0]"
            />
            <img
              src="/single-product-1-thumb-2.jpg"
              alt="Thumbnail 2"
              className="w-20 h-20 object-cover rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#252b42]">Floating Phone</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-[#f3cd03] text-[#f3cd03]" />
              ))}
              <Star className="w-5 h-5 text-[#f3cd03]" />
            </div>
            <span className="text-[#737373]">10 Reviews</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-[#252b42]">$1,139.33</div>

          {/* Availability */}
          <div className="flex items-center gap-2">
            <span className="text-[#737373]">Availability :</span>
            <span className="text-[#23a6f0] font-medium">In Stock</span>
          </div>

          {/* Description */}
          <p className="text-[#737373] leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>

          <hr className="border-t border-[#e8e8e8]" />

          {/* Color Options */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedColor("blue")}
              className={`w-8 h-8 rounded-full bg-[#23a6f0] ${selectedColor === "blue" ? "ring-2 ring-offset-2 ring-[#23a6f0]" : ""}`}
            />
            <button
              onClick={() => setSelectedColor("green")}
              className={`w-8 h-8 rounded-full bg-[#2dc071] ${selectedColor === "green" ? "ring-2 ring-offset-2 ring-[#2dc071]" : ""}`}
            />
            <button
              onClick={() => setSelectedColor("orange")}
              className={`w-8 h-8 rounded-full bg-[#e77c40] ${selectedColor === "orange" ? "ring-2 ring-offset-2 ring-[#e77c40]" : ""}`}
            />
            <button
              onClick={() => setSelectedColor("navy")}
              className={`w-8 h-8 rounded-full bg-[#252b42] ${selectedColor === "navy" ? "ring-2 ring-offset-2 ring-[#252b42]" : ""}`}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="px-6 py-3 bg-[#23a6f0] text-white font-bold rounded-md hover:bg-[#1a91d6] transition-colors">
              Select Options
            </button>
            <button className="p-3 border border-[#e8e8e8] rounded-md hover:bg-[#fafafa] transition-colors">
              <Heart className="w-5 h-5 text-[#252b42]" />
            </button>
            <button className="p-3 border border-[#e8e8e8] rounded-md hover:bg-[#fafafa] transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#252b42]" />
            </button>
            <button className="p-3 border border-[#e8e8e8] rounded-md hover:bg-[#fafafa] transition-colors">
              <Eye className="w-5 h-5 text-[#252b42]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

