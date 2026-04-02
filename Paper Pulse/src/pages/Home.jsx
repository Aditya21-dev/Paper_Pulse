import Header_section from "../components/layout/Header_section"
import Footer_section from "../components/layout/Footer_section"
import Hero_section from "../components/home/Hero"
import Books_Categories from "../components/home/Books_Categories"
import Best_Sellers from "../components/home/Best_Seller"
import Professional_Authors from "../components/home/Professional_Authors"



function HomePage() {
  return (
    <>
      <Header_section />
      <Hero_section />
      <Books_Categories />
      <Best_Sellers />
      <Professional_Authors />
      <Footer_section/>

    </>
  )
}

export default HomePage