import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"


function HomePage() {
  return (
    <>
      <Header_section />

      <section className="bg-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About Paper Pulse
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Paper Pulse is more than an online bookstore. It is a quiet corner
            for readers who believe every book holds a world waiting to be
            discovered. From timeless classics to modern masterpieces, the
            mission is simple: connect readers with stories that spark
            imagination and encourage lifelong learning.
          </p>

          {/* Quote */}
          <p className="italic text-lg text-gray-600">
            “A reader lives a thousand lives before he dies.”
          </p>

        </div>
      </section>


      <section className="bg-[#F5E7A3] py-16">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="books library"
            className="rounded-lg shadow-md"
          />


          <div>

            <h2 className="text-3xl font-bold mb-4">
              Our Story
            </h2>

            <p className="text-gray-700 mb-4">
              Paper Pulse was created with a simple idea — to build a peaceful
              digital space for readers who love books and meaningful stories.
              In a world full of noise, we wanted to create a place where the
              joy of reading still feels timeless.
            </p>

            <p className="text-gray-700">
              From classic literature to modern bestsellers, Paper Pulse helps
              readers discover books that inspire imagination, creativity,
              and knowledge.
            </p>

          </div>

        </div>

      </section>


      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700 mb-4">
              At Paper Pulse, our mission is simple — to make reading
              accessible, enjoyable, and meaningful for everyone.
              We believe books are not just pages filled with words,
              but gateways to imagination, wisdom, and new perspectives.
            </p>

            <p className="text-gray-700">
              Whether you are searching for timeless classics,
              modern bestsellers, or hidden literary gems,
              Paper Pulse helps readers discover stories that
              inspire curiosity and lifelong learning.
            </p>

          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
            alt="reading books"
            className="rounded-lg shadow-md"
          />

        </div>

      </section>


      <section className="bg-[#F5E7A3] py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Curated Book Collection
              </h3>
              <p className="text-sm text-gray-600">
                Discover handpicked books across genres, from timeless
                classics to modern bestsellers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Bestseller Picks
              </h3>
              <p className="text-sm text-gray-600">
                Explore books that readers around the world are loving
                and recommending.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Favourite Authors
              </h3>
              <p className="text-sm text-gray-600">
                Get inspired by legendary authors and discover their
                most influential works.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">
                Reader Community
              </h3>
              <p className="text-sm text-gray-600">
                Connect with passionate readers and share reviews,
                thoughts, and book recommendations.
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="bg-white py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            A Community of Readers
          </h2>

          <p className="text-gray-700 mb-6">
            Paper Pulse is more than just an online bookstore.
            It is a growing community of curious minds,
            passionate readers, and storytellers who believe
            that every book has the power to inspire change.
          </p>

          <p className="text-gray-700 mb-10">
            Here, readers discover new worlds, share their
            thoughts, and connect through stories that stay
            with them long after the last page.
          </p>

          <div className="italic text-gray-600">
            “A reader lives a thousand lives before he dies.”
          </div>

        </div>

      </section>


      <Footer_section />
    </>
  )
}

export default HomePage