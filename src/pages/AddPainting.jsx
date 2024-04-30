const AddPainting = () => {
  const handleAddPaint = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto  min-h-screen flex items-center justify-center loginBg my-5">
      <div className="bg-white/20 backdrop-blur-3xl shadow-2xl p-4 rounded-xl min-w-[360px] md:w-[600px] border border-black animate__animated animate__slideInUp">
        <form onSubmit={handleAddPaint} className="grid grid-cols-2 gap-3">
          <h1 className="text-center text-2xl font-medium text-black col-span-2">
            Add Your Painting
          </h1>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="photo"
              placeholder="Photo URL"
            />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="paintName"
              placeholder="Painting Title"
              required
            />
          </div>

          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="category"
              placeholder="Category"
              required
            />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="number"
              name="rating"
              placeholder="Rating"
              required
            />
          </div>

          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="number"
              name="price"
              placeholder="Price"
              required
            />
          </div>

          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="customization"
              placeholder="Customization"
              required
            />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="pTime"
              placeholder="Processing Time"
              required
            />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="stockStatus"
              placeholder="Stock Status"
              required
            />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="email"
              name="email"
              placeholder="User Email"
              required
            />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2 md:col-span-1">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="userName"
              placeholder="User Name"
              required
            />
          </div>
          <div className="flex items-center justify-between border border-black rounded-full py-2 px-4 col-span-2">
            <input
              className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
              type="text"
              name="description"
              placeholder="Description"
              required
            />
          </div>
          <div className="col-span-2">
            <input
              className=" text-black w-full btn text-base rounded-full bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
              type="submit"
              value="Add Paint"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPainting;
