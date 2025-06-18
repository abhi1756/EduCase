import { useContext } from 'react';
import { UserContext } from '../context/Context';

const Dashboard = () => {

  const { user } = useContext(UserContext);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-[320px] min-h-[600px] bg-[rgb(244,243,243)] border border-gray-300 rounded-md">

        <div className="border-b px-6 py-4 bg-[rgb(248,248,248)]">
          <h2 className="text-sm font-medium text-gray-800 ">Account Settings</h2>
        </div>

        <div className="px-6 py-4">

          <div className="flex gap-4 items-start">
            <div className="relative w-16 h-16">
              <img
                src="https://i.pravatar.cc/200"
                alt="User"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#6C25FF] w-5 h-5 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">📷</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">{user?.fullName ?? "Marry Doe"}</p>
              <p className="text-sm text-gray-500 mb-2">{user?.email ?? "Marry@Gmail.com"}</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-600 leading-snug">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        <div className="border-t border-dashed border-gray-300 h-80"></div>
       <div className="border-t border-dashed border-gray-300"></div>
      </div>

    </div>
  );
};

export default Dashboard;
