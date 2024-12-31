import { FaArrowRight } from 'react-icons/fa6';
import AllBlogs from '../../../public/blogs.json';
const Blogs = () => {
  return (
    <div className=" bg-black h-[80vh]">
      <h2 className="text-3xl font-semibold text-start">Latest Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-7xl">
        {AllBlogs.slice(0, 3).map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        <button>See All</button>
        <FaArrowRight />
      </div>
    </div>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <div className="card w-80 bg-[#2d2e32]">
      <img
        className="w-full h-64 object-cover"
        src="https://example.com/image.jpg"
        alt="Blog Post"
      />
      <div className="card-body p-4">
        <h3 className="font-bold">{blog?.title}</h3>
        <p className="text-sm">Posted by Author Name on January 1, 2022</p>
        <p>{blog.description}</p>
        <button className="">Read More</button>
      </div>
    </div>
  );
};

export default Blogs;
