import heroImage from "../../assets/home_images/hero-book.jpg"

function Books_Categories() {
  return (
    <section className="w-full bg-[#F3E7B3] py-16">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Browse By Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <img src={heroImage} className="rounded-md mb-3"/>
            <h3 className="text-lg font-semibold text-center"> Fiction </h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <img src={heroImage} className="rounded-md mb-3"/>
            <h3 className="text-lg font-semibold text-center"> Horror </h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <img src={heroImage} className="rounded-md mb-3"/>
            <h3 className="text-lg font-semibold text-center"> SYfi </h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <img src={heroImage} className="rounded-md mb-3"/>
            <h3 className="text-lg font-semibold text-center"> Science </h3>
          </div>
          
        </div>

      </div>

    </section>
  )
}

export default Books_Categories




// import heroImage from "../../assets/home_images/hero-book.jpg"

