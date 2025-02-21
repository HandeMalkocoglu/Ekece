import data from "../data/data.json";
import { Calendar, MessageSquare } from "lucide-react";

const FeaturedPosts = () => {
  const { sectionTitle, sectionSubtitle, posts } = data.featuredPosts;

  return (
    <section className="py-12 pl-64 pr-64 container mx-auto">
      <div className="container mx-auto text-center mb-8 py-12">
        <p className="py-4 text-blue-500 font-medium">{sectionSubtitle}</p>
        <h2 className="text-3xl font-bold text-gray-800">{sectionTitle}</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
            </div>
            <div className="p-4 text-left">
              <div className="flex gap-2 text-sm text-gray-500 mb-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="hover:text-blue-500 cursor-pointer">{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} /> {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={16} /> {post.comments} comments
                </div>
              </div>
              <a href="#" className="block text-gray-500 font-semibold mt-4 hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
