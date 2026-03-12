function Footer_section() {
    return (

        <footer className="bg-[#E7D48A] mt-20 py-12">

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">


                <div>
                    <h2 className="text-2xl font-bold mb-3">Paper Pulse</h2>
                    <p className="text-sm leading-relaxed">
                        Paper Pulse is a peaceful corner for book lovers.
                        Discover timeless stories, explore new authors,
                        and build your personal book shelf with ease.
                        Reading has always been a beautiful habit, and
                        Paper Pulse keeps that tradition alive in the
                        digital world.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Home</li>
                        <li>Book Shelf</li>
                        <li>Authors</li>
                        <li>Reviews</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                    <p className="text-sm leading-relaxed">
                        Our mission is simple — help readers find their
                        next favorite book. From fiction and fantasy to
                        mystery and science fiction, Paper Pulse connects
                        readers with stories that inspire imagination,
                        creativity, and knowledge.
                    </p>
                </div>

            </div>

            <div className="text-center text-sm mt-10 border-t border-black/20 pt-4">
                © 2026 Paper Pulse • Built for readers who believe every book holds a universe.
            </div>

        </footer>


    )
}

export default Footer_section