export default function Profile({ name, email }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Profile</h2>
        <p className="text-gray-700">Name: {name}</p>
        <p className="text-gray-700">Email: {email}</p>
      </div>
    );
  }