const AddCoffee = () => {
    const handleAddCoffee = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee={name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);
    }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="supplier"
                placeholder="supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form  category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="category"
                placeholder="Category Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form  Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] text-[#331A15] hover:text-white" />
      </form>
    </div>
  );
};

export default AddCoffee;
