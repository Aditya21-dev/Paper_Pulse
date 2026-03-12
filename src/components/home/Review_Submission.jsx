import { useState } from "react"

function Review_Submission() {

  const [review, setReview] = useState({
    name: "", rating: "", message: ""
  })

  function handleInput(e) {
    const { name, value } = e.target

    setReview({ ...review, [name]: value })
  }

  function submitReview(e) {
    e.preventDefault()
    console.log(review)
    alert("Thank you for your review 📚")
    setReview({name: "",rating: "",message: ""})
  }

  return (
    <section className="bg-[#F5E7A3] py-20">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Share Your Reading Experience
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-md">

          <form onSubmit={submitReview} className="flex flex-col gap-5">

            <input type="text" name="name" placeholder="Your Name" value={review.name} onChange={handleInput} className="border p-3 rounded" required/>

            <select name="rating" value={review.rating} onChange={handleInput} className="border p-3 rounded" required >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Average</option>
              <option value="1">⭐ Poor</option>
            </select>

            <textarea name="message" placeholder="Write your review about our bookstore..." value={review.message} onChange={handleInput} rows="4" className="border p-3 rounded resize-none" required />

            <button type="submit" className="bg-black text-white py-3 rounded hover:bg-gray-800 transition" >
              Submit Review
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Review_Submission