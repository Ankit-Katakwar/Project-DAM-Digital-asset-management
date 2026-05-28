import { useEffect, useState } from "react";
import PostCards from "./PostCards";
import axios from "axios";

const ViewPost = () => {
  const [posts, setPosts] = useState([
    
  ]);

 

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/view-post`).then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-light text-white tracking-tight">Your Posts</h1>
          <p className="mt-2 text-sm text-gray-400 font-light">Browse your uploaded content</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => {
              return (
                <article
                  key={post._id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-800">
                    <img
                      src={post.image}
                      alt="post"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-6 text-gray-300">{post.caption}</p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl h-64">
            <p className="text-gray-400 font-light">No posts available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPost;
