export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Welcome to Hotel P</h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
            Experience comfort and convenience in the heart of the city
          </p>
          <a
            href="/booking"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors inline-block"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer
              sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's
              seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or
              read on for the authoritative history of lorem ipsum.
            </p>
            <a
              href="/about"
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-colors inline-block font-medium"
            >
              Read More
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Luxury hotel pool and lounge area"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Rooms Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">OUR ROOM</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Lorem ipsum available, but the majority have suffered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Room 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Twin Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bed Room</h3>
                <p className="text-gray-600 mb-4">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
                <a
                  href="/rooms/twin-bed-room"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  View More Images
                </a>
              </div>
            </div>

            {/* Room 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bed Room</h3>
                <p className="text-gray-600 mb-4">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
                <a
                  href="/rooms/luxury-bed-room"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  View More Images
                </a>
              </div>
            </div>

            {/* Room 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Deluxe Bed Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bed Room</h3>
                <p className="text-gray-600 mb-4">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
                <a
                  href="/rooms/deluxe-bed-room"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  View More Images
                </a>
              </div>
            </div>

            {/* Room 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Suite Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bed Room</h3>
                <p className="text-gray-600 mb-4">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
                <a
                  href="/rooms/suite-room"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  View More Images
                </a>
              </div>
            </div>

            {/* Room 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Executive Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bed Room</h3>
                <p className="text-gray-600 mb-4">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
                <a
                  href="/rooms/executive-room"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  View More Images
                </a>
              </div>
            </div>

            {/* Room 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bed Room</h3>
                <p className="text-gray-600 mb-4">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there
                </p>
                <a
                  href="/rooms/modern-room"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  View More Images
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-medium text-center mb-8">Our Services</h2>
        {/* Services content would go here */}
      </div>

      {/* Contact Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">CONTACT US</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form action="/api/contact" method="POST" className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>

            {/* Google Map */}
            <div className="h-[400px] rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647893200662!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

