import { FaArrowRight } from 'react-icons/fa6';
import AllBlogs from '../../../public/blogs.json';
import { Link } from 'react-router-dom';
const Blogs = () => {
  return (
    <div className=" bg-black h-[60vh]">
      <h2 className="text-3xl font-semibold text-center py-5">Latest Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mx-auto max-w-7xl ">
        {AllBlogs.slice(0, 3).map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <Link className="flex gap-2" to="/blogs">
          <button>See All</button>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <div className="card w-80 bg-[#2d2e32]">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={blog.image}
        alt="Blog Post"
      />
      <div className="card-body p-4">
        <h3 className="font-bold">{blog?.title}</h3>
        <p className="text-sm">
          Posted by <span className="font-bold">{blog.author}</span> on January
          1, 2022
        </p>

        <a href="https://www.linkedin.com/in/mojammel-molla">
          <button className="text-blue-500">Read More</button>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
