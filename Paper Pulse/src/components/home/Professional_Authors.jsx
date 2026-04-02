function Professional_Authors() {
    return (
        <section className="bg-[#F5E7A3] py-16">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Best Professional & Favourite Authors
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    {/* Author 1 */}
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg"
                            alt="JK Rowling"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="font-semibold">J.K. Rowling</h3>
                        <p className="text-sm text-gray-700">
                            Creator of magical worlds
                        </p>
                    </div>

                    {/* Author 2 */}
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/George_R._R._Martin_by_Gage_Skidmore_2.jpg"
                            alt="George R R Martin"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="font-semibold">George R.R. Martin</h3>
                        <p className="text-sm text-gray-700">
                            Master of epic fantasy
                        </p>
                    </div>

                    {/* Author 3 */}
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Agatha_Christie.png"
                            alt="Agatha Christie"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="font-semibold">Agatha Christie</h3>
                        <p className="text-sm text-gray-700">
                            Queen of mystery
                        </p>
                    </div>

                    {/* Author 4 */}
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
                            alt="Stephen King"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="font-semibold">Stephen King</h3>
                        <p className="text-sm text-gray-700">
                            Legend of horror fiction
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Professional_Authors