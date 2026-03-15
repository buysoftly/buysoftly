export default function Navbar() {
  return (
    <nav className="bg-(--color-bg) border-b border-(--color-primary) sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">LapShift</h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">
            Shop
          </a>
          <a href="#" className="hover:text-blue-600">
            Bundles
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
          Get a Quote
        </button>
      </div>
    </nav>
  );
}
