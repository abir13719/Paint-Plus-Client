import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePaint = () => {
  const loadedPaint = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedPainting = {
      photoURL: form.photoURL.value,
      paintName: form.paintName.value,
      category: form.category.value,
      rating: form.rating.value,
      price: form.price.value,
      customization: form.customize.value,
      process: form.pTime.value,
      stockStatus: form.stock.value,
      email: form.email.value,
      userName: form.userName.value,
      description: form.description.value,
    };

    fetch(`https://paint-plus-server.vercel.app/painting/${loadedPaint._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedPainting),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Painting updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="container mx-auto  min-h-screen flex items-center justify-center loginBg my-5">
      <Helmet>
        <title>Paint+ | Update Painting</title>
      </Helmet>
      <div className="bg-white/20 backdrop-blur-3xl shadow-2xl p-4 rounded-xl min-w-[360px] md:w-[600px] border border-black animate__animated animate__slideInUp">
        <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-3">
          <h1 className="text-center text-2xl font-medium text-black col-span-2">
            Update Your Painting
          </h1>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="photoURL" className="block text-black font-medium">
              Photo URL
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              type="text"
              name="photoURL"
              id="photoURL"
              defaultValue={loadedPaint?.photoURL}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="paintName" className="block text-black font-medium">
              Painting Name
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              type="text"
              name="paintName"
              id="paintName"
              defaultValue={loadedPaint?.paintName}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="category" className="block text-black font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={loadedPaint?.category}
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            >
              <option value="paper-paint">Paper Paint</option>
              <option value="digital-paint">Digital Paint</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rating" className="block text-black font-medium">
              Rating
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              type="number"
              name="rating"
              id="rating"
              defaultValue={loadedPaint?.rating}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="price" className="block text-black font-medium">
              Price
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              type="number"
              name="price"
              id="price"
              defaultValue={loadedPaint?.price}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="customize" className="block text-black font-medium">
              Customizable
            </label>
            <select
              id="customize"
              name="customize"
              defaultValue={loadedPaint?.customization}
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            >
              <option value="yes">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="pTime" className="block text-black font-medium">
              Process Time (in minutes)
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              type="number"
              name="pTime"
              id="pTime"
              defaultValue={loadedPaint?.process}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="stock" className="block text-black font-medium">
              Stock Status
            </label>
            <select
              id="stock"
              name="stock"
              defaultValue={loadedPaint?.stockStatus}
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            >
              <option value="stock-in">Stock In</option>
              <option value="stock-out">Stock Out</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="email" className="block text-black font-medium">
              User Email
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              type="email"
              name="email"
              id="email"
              defaultValue={loadedPaint?.email}
              disabled
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="userName" className="block text-black font-medium">
              User Name
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              type="text"
              name="userName"
              id="userName"
              defaultValue={loadedPaint?.userName}
              disabled
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block text-black font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              defaultValue={loadedPaint?.description}
              rows="2"
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            ></textarea>
          </div>
          <div className="col-span-2">
            <input
              className=" text-black w-full btn text-base rounded-lg bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
              type="submit"
              value="Update Paint"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePaint;
