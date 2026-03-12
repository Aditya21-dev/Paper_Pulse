function Best_Sellers() {

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc"
    },
    {
      title: "Ikigai",
      author: "Héctor García",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    }
  ]

  return (
    <section className="py-20 bg-[#F5E7A3]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Best Selling Books
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">

          {books.map((book, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-white rounded-lg shadow hover:shadow-xl transition p-4"
            >

              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover rounded"
              />

              <h3 className="mt-4 font-semibold text-lg">
                {book.title}
              </h3>

              <p className="text-sm text-gray-600">
                {book.author}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Best_Sellers