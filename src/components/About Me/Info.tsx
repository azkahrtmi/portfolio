export default function Info() {
  return (
    <div className="flex sm:flex-row flex-wrap gap-16 justify-center items-center">
      <div className="group flex items-center gap-2 cursor-pointer text-gray-400">
        <div className="bg-black rounded-sm p-1 w-6 h-6 flex items-center justify-center transition-colors group-hover:bg-white">
          🌏
        </div>
        <span className="transition-colors group-hover:text-white">
          Riau, Indonesia
        </span>
      </div>
      <div className="group flex items-center gap-2 cursor-pointer text-gray-400">
        <div className="bg-black rounded-sm p-1 w-6 h-6 flex items-center justify-center transition-colors group-hover:bg-white">
          💬
        </div>
        <span className="transition-colors group-hover:text-white">
          Bahasa, English
        </span>
      </div>
      <div className="group flex items-center gap-2 cursor-pointer text-gray-400">
        <div className="bg-black rounded-sm p-1 w-6 h-6 flex items-center justify-center transition-colors group-hover:bg-white">
          💻
        </div>
        <span className="transition-colors group-hover:text-white">
          Software Engineer
        </span>
      </div>
    </div>
  );
}
