import { useEffect, useState } from "react";
import PostCards from "./PostCards";
import axios from "axios";

const ViewPost = () => {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      image:
        "data:image/jpeg;base64,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",
      caption: "This is a text caption.",
    },
  ]);

 

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/view-post`).then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
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
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
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
