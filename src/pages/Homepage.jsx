const HomePage = () => {
  return (
    <>
      {/* Sale Banner */}
      <div className="relative bg-gradient-to-r from-red-400 to-indigo-900 text-white py-10 mt-10">
        <h2 className="text-4xl font-bold m-5">
          Flash Sale! Up to Flat 50% Off
        </h2>
        <p className="mt-2 text-lg m-5">Limited time offer on top products!</p>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-10">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm">
            &copy; 2024 Store Clone. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
