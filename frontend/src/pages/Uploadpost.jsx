import axios from "axios";
const Uploadpost = () => {
  const submitEvent = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios
      .post(`${import.meta.env.VITE_API_URL}/create-post`, formData)
      .then((res) => {
        alert("The picture is uploaded.");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Error uploading picture.");
      });
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      {/* Decorative blur elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-white tracking-tight mb-2">
            Create Post
          </h1>
          <p className="text-sm text-gray-400 font-light">
            Share your moment with the world
          </p>
        </div>

        <form
          onSubmit={submitEvent}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/8 transition-all duration-300"
        >
          {/* File Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide">
              Select Media
            </label>
            <div className="relative group">
              <input
                type="file"
                name="image"
                accept="image/*"
                className="absolute  w-full h-full opacity-100 cursor-pointer px-2 py-3"
              />
              <div className="flex items-center justify-center w-full px-6 py-10 border border-dashed border-gray-500 rounded-2xl hover:border-gray-300 transition-colors duration-200 group-hover:bg-white/5">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20a4 4 0 004 4h24a4 4 0 004-4V20"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="34"
                      cy="14"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 32l8-8 8 8m-8-8l8-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-sm text-gray-400 font-light">
                    Drop or click to upload
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Caption Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide">
              Caption
            </label>
            <textarea
              name="caption"
              placeholder="Write something inspiring..."
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400/50 transition-all duration-200 resize-none font-light"
              rows="4"
            />
          </div>

          {/* Upload Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-white text-black font-medium rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl tracking-wide"
          >
            Upload Post
          </button>
        </form>

        {/* Footer text */}
        <p className="text-xs text-gray-500 text-center mt-8 font-light">
          Your posts are private by default
        </p>
      </div>
    </div>
  );
};

export default Uploadpost;
