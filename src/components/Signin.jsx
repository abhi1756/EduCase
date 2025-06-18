import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/Context';

const Signin = () => {
  const navigate = useNavigate();
  const { setuser } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser(formData)
    navigate('/dashboard')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
      <div className="w-[360px] min-h-[600px] bg-[rgb(238,239,241)] border border-gray-200 rounded-md p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Signin to your <br />PopX account</h2>
        <p className="text-sm text-gray-500 mb-6 leading-tight">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#6C25FF] block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#6C25FF] block mb-1">Password</label>
            <input
              type="password"
              name="password"
              minLength={6}
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
              required
            />
          </div>

          <button
            type="submit"
            className={"w-full py-3 mt-2 text-white font-medium bg-[#6C25FF] rounded-md hover:bg-[#5a1ed9] transition"}
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
