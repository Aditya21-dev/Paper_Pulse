import heroImage from "../../assets/home_images/hero-book.jpg"

function Hero() {
  return (
    <section className="bg-yellow-100 px-8 py-16">

      <div className="flex items-center justify-between max-w-6xl mx-auto">

        <div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Your Next Favorite Book
          </h1>

          <p className="text-gray-600 mb-6">
            Explore thousands of books from different authors and categories.
          </p>

          <button className="bg-amber-500 text-white px-6 py-3 rounded hover:bg-amber-300">
            Browse Books
          </button>

        </div>

        <div>

          <img src={heroImage} alt="books"className="w-80"/>

        </div>

      </div>

    </section>
  )
}

export default Hero