import React from "react";

const PostMethod = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event?.target?.name?.value;
    const father = event?.target?.father?.value;
    const mother = event?.target?.mother?.value;
    const user = {
      name,
      father,
      mother,
    };
    event.target.reset();

    const confirmInsert = window.confirm("Do you want to insert your data !");
    if (confirmInsert) {
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
    }
  };
  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center flex-wrap h-full text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg border border-indigo-500">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0 mx-auto">
                    <div className="md:p-12 md:mx-6">
                      <form onSubmit={handleFormSubmit}>
                        <p className="mb-4 text-center pt-5 font-extrabold">Submit Information</p>
                        <div className="mb-4">
                          <h1>Your name</h1>
                          <input
                            type="text"
                            name="name"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <h1>Father name</h1>
                          <input
                            type="text"
                            name="father"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Father name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <h1>Mother name</h1>
                          <input
                            type="text"
                            name="mother"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="mother name"
                            required
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1 text-white">
                          <button className="w-full p-1 rounded-sm text-white bg-slate-600">Insert Info</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostMethod;
