import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

export default function App() {
  const user = {
    name: 'Mitchelle',
    email: 'mitchelle@example.com',
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <Profile name={user.name} email={user.email} />
        <Counter />
      </div>
    </div>
  );
}