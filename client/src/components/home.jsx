import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Select a Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/category/memory-management"
          className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-center"
        >
          Memory Management
        </Link>
        <Link
          to="/category/process-scheduling"
          className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-center"
        >
          Process Scheduling
        </Link>
        <Link
          to="/category/file-systems"
          className="bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-center"
        >
          File Systems
        </Link>
      </div>
    </div>
  );
}

export default Home;