import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[360px] min-h-[600px] bg-[rgb(244,243,243)] border-gray-200 rounded-md p-6 flex flex-col justify-end shadow-sm">
        <div className="mt-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h2>
          <p className="text-sm text-gray-500 mb-6 leading-tight">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>

          <button
            onClick={() => navigate('/register')}
            className="w-full py-3 mb-3 text-white font-medium bg-[#6C25FF] rounded-md hover:bg-[#5a1ed9] transition"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate('/signin')}
            className="w-full py-3 text-[#6C25FF] font-semibold bg-[#EEE5FF] rounded-md hover:bg-[#e0d4ff] transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
