import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddPainting = () => {
  const { user } = useContext(AuthContext);

  const handleAddPaint = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPainting = {
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
    fetch("https://assignment-10-server-tan-eight.vercel.app/painting", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPainting),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Painting added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto  min-h-screen flex items-center justify-center loginBg my-5">
      <Helmet>
        <title>Paint+ | Add Painting</title>
      </Helmet>
      <div className="bg-white/20 backdrop-blur-3xl shadow-2xl p-4 rounded-xl min-w-[360px] md:w-[600px] border border-black animate__animated animate__slideInUp">
        <form onSubmit={handleAddPaint} className="grid grid-cols-2 gap-3">
          <h1 className="text-center text-2xl font-medium text-black col-span-2">
            Add Your Painting
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
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="category" className="block text-black font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            >
              <option value="Paper-Paint">Paper Paint</option>
              <option value="Digital-Paint">Digital Paint</option>
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
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="customize" className="block text-black font-medium">
              Customizable
            </label>
            <select
              id="customize"
              name="customize"
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
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
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="stock" className="block text-black font-medium">
              Stock Status
            </label>
            <select
              id="stock"
              name="stock"
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            >
              <option value="Stock-In">Stock In</option>
              <option value="Stock-Out">Stock Out</option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="email" className="block text-black font-medium">
              User Email
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              defaultValue={user.email}
              type="email"
              name="email"
              id="email"
              disabled
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="userName" className="block text-black font-medium">
              User Name
            </label>
            <input
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
              defaultValue={user.displayName}
              type="text"
              name="userName"
              id="userName"
              disabled
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block text-black font-medium"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="2"
              className="w-full py-2 px-3 text-black bg-transparent border rounded-lg border-stone-900 outline-none font-medium placeholder:text-stone-900 placeholder:font-medium"
            ></textarea>
          </div>
          <div className="col-span-2">
            <input
              className=" text-black w-full btn text-base rounded-lg bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
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
