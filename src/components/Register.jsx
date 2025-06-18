import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/Context';

const Register = () => {
  const navigate = useNavigate();

  const { setuser } = useContext(UserContext)

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
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
    setuser(formData);
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-[#eeeff1] border border-gray-200 p-8 rounded-md w-[400px] sm:w-[400px]">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your PopX account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium">Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-[#6C25FF]"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium">Phone number*</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-[#6C25FF]"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium">Email address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-[#6C25FF]"
              placeholder="Enter email address"
              required
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium">Password *</label>
            <input
              type="password"
              name="password"
              minLength={6}
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-[#6C25FF]"
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium">Company name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-[#6C25FF]"
              placeholder="Enter company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Are you an Agency?*</label>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="text-[#6C25FF] focus:ring-[#6C25FF]"
                  required
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="text-[#6C25FF] focus:ring-[#6C25FF]"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white font-medium rounded-md transition bg-[#6C25FF] hover:bg-[#5a1ed9]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
