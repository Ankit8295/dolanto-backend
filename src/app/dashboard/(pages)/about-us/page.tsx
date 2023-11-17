export default function Page() {
  return (
    <div className="w-1/3 bg-red-50 h-full flex items-center p-5">
      <form className="border border-[#001942]  w-full text-black flex flex-col gap-2 p-10 rounded-3xl">
        <input type="text" placeholder="title" />
        <button type="submit" className="text-white p-2 bg-[#001942]">
          Save
        </button>
      </form>
    </div>
  );
}
