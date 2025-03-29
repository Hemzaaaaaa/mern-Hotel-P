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
          <h1 className="text-3xl md:text-4xl font-medium mb-4">
            Welcome to Hotel P
          </h1>
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

      {/* Additional content would go here */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-medium text-center mb-8">Our Services</h2>
        {/* Services content would go here */}
      </div>
    </div>
  );
}
