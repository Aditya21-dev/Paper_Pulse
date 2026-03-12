import Header_section from "../components/layout/Header_section"
import Hero_section from "../components/home/Hero"
import Books_Categories from "../components/home/Books_Categories"
import Footer_section from "../components/layout/Footer_section"

function HomePage() {
  return (
    <>
      <Header_section />
      <Hero_section />
      <Books_Categories />
      <Footer_section/>
    </>
  )
}

export default HomePage