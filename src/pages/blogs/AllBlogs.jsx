import Blogs from '../../../public/blogs.json';
const AllBlogs = () => {
  return (
    <div className=" bg-black min-h-screen-">
      <h2 className="text-3xl font-semibold text-start">All Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-7xl">
        {Blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
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
export default AllBlogs;
