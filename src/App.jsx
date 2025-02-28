
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; 
// import './App.css';
// import COVER_IMAGE from './Image/1.jpg';
// import EyeTracking from './EyeTracking';
// import TrendifySection from './TrendifyPart/TrendifySection';
// import Women from './TrendifyPart/Women';
// import Men from './TrendifyPart/MenPart';
// import SHOPPINGCART from './TrendifyPart/shoppingCart';
// import Sing from './singing';
// import Admin from './admin';
// import AdminPage from './adminPage';
// import AdminPageShirts from './AdminPageShirts';
// import AdminPageShoes from './AdminPageShoes';



// const App = () => {
//   const [people, setPeople] = useState([]);
//   const [loadingPeople, setLoadingPeople] = useState(true);
//   const [errorPeople, setErrorPeople] = useState(null);

//   useEffect(() => {
//     const fetchPeople = async () => {
//       try {
//         const url = 'http://localhost:3000/people';
//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log('People Data:', data);
//         setPeople(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setErrorPeople(error.message);
//       } finally {
//         setLoadingPeople(false);
//       }
//     };

//     fetchPeople();
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/TrendifyPart/TrendifySection" element={<TrendifySection people={people} />} />
//         <Route path="/TrendifyPart/Women" element={<Women />} /> 
//         <Route path="/TrendifyPart/MenPart" element={<Men />} /> 
//         <Route path="/TrendifyPart/shoppingCart" element={<SHOPPINGCART />} /> 
//         <Route path="/singing" element={<Sing />} /> 
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/adminPage" element={<AdminPage />} />  
//         <Route path="/AdminPageShirts" element={<AdminPageShirts />} />  
//         <Route path="/AdminPageShoes" element={<AdminPageShoes />} />  
//       </Routes>
//     </Router>
//   );
// };

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/login', {  
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: username, password }), 
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         console.log('Login failed:', data.message);
//         alert(data.message);
//         return;
//       }
  
//       console.log('User ID:', data.userId);
  
//       localStorage.setItem('userId', data.userId);
  
//       navigate('/TrendifyPart/TrendifySection');
  
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('There was an error logging in. Please try again.');
//     }
//   };

//   const handlSing = () => {
//     navigate('/singing');
//   };

//   return (
//     <div className="bg-gray-200">
//       <div className="relative">
//         <img src={COVER_IMAGE} className="w-full h-[750px]" alt="Login Cover" />
//         <EyeTracking />

//         <div className="absolute top-0 left-0 w-1/2 flex flex-col p-10">
//           <h1 className="text-5xl font-serif text-[#060606] font-semibold">Interactive Brand</h1>

//           <div className="w-full flex flex-col">
//             <h3 className="text-2xl font-semibold mb-4">Login</h3>
//             <p className="text-sm mb-2">Welcome back! Please enter your details.</p>
//           </div>

//           <div className="w-full flex flex-col items-center">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)} 
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//             <button
//               className="w-1/2 text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
//               onClick={handleLogin} 
//             >
//               Log in
//             </button>

//             <button
//               className="w-1/2 text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
//               onClick={handlSing} 
//             >
//               Singing
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; 
import './App.css';
import COVER_IMAGE from './Image/1.jpg';
import EyeTracking from './EyeTracking';
import TrendifySection from './TrendifyPart/TrendifySection';
import Women from './TrendifyPart/Women';
import Men from './TrendifyPart/MenPart';
import SHOPPINGCART from './TrendifyPart/shoppingCart';
import DELETEPAGE from './deleteOption';
import Sing from './singing';
import Admin from './admin';
import AdminPage from './adminPage';
import AdminPageShirts from './AdminPageShirts';
import AdminPageShoes from './AdminPageShoes';

const App = () => {
  const [people, setPeople] = useState([]);
  const [loadingPeople, setLoadingPeople] = useState(true);
  const [errorPeople, setErrorPeople] = useState(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const url = 'https://backend-final-pro.onrender.com/people';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('People Data:', data);
        setPeople(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorPeople(error.message);
      } finally {
        setLoadingPeople(false);
      }
    };

    fetchPeople();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/TrendifyPart/TrendifySection" element={<TrendifySection people={people} />} />
        <Route path="/TrendifyPart/Women" element={<Women />} /> 
        <Route path="/TrendifyPart/MenPart" element={<Men />} /> 
        <Route path="/TrendifyPart/shoppingCart" element={<SHOPPINGCART />} /> 
        <Route path="/singing" element={<Sing />} /> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminPage" element={<AdminPage />} />  
        <Route path="/AdminPageShirts" element={<AdminPageShirts />} />  
        <Route path="/AdminPageShoes" element={<AdminPageShoes />} />  
        <Route path="/deleteOption" element={<DELETEPAGE />} />  
      </Routes>
    </Router>
  );
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  // const handleLogin = async () => {
  //   if (username === "admin") {
  //     navigate('/admin');  
  //     return;  
  //   }

  //   try {
  //     const response = await fetch('https://backend-final-pro.onrender.com/login', {  
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email: username, password }), 
  //     });
  
  //     const data = await response.json();
  
  //     if (!response.ok) {
  //       console.log('Login failed:', data.message);
  //       alert(data.message);
  //       return;
  //     }
  
  //     console.log('User ID:', data.userId);
  
  //     localStorage.setItem('userId', data.userId);
  
  //     navigate('/TrendifyPart/TrendifySection');
  
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     alert('There was an error logging in. Please try again.');
  //   }
  // };

  // const handleSing = () => {
  //   navigate('/singing');
  // };

  const handleLogin = async () => {
    if (username === "admin") {
      navigate('/admin');
      return;
    }
  
    try {
      const response = await fetch('https://backend-final-pro.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        console.log('Login failed:', data.message);
        alert(data.message);
        return;
      }
  
      const data = await response.json();
  
      if (data.userId) {
        console.log('User ID:', data.userId);
        localStorage.setItem('userId', data.userId);
        navigate('/TrendifyPart/TrendifySection');
      } else {
        alert('User ID not found in the response.');
      }
  
    } catch (error) {
      console.error('Error during login:', error);
      alert('There was an error logging in. Please try again.');
    }
  };
  
  const handleSing = () => {
    navigate('/singing');
  };
  


  return (
    <div className="bg-gray-200">
      <div className="relative">
        <img src={COVER_IMAGE} className="w-full h-[750px]" alt="Login Cover" />
        <EyeTracking />

        <div className="absolute top-0 left-0 w-1/2 flex flex-col p-10">
          <h1 className="text-5xl font-serif text-[#060606] font-semibold">Interactive Brand</h1>

          <div className="w-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Login</h3>
            <p className="text-sm mb-2">Welcome back! Please enter your details.</p>
          </div>

          <div className="w-full flex flex-col items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input
              type="password"
              placeholder="Password"
              className="w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button
              className="w-1/2 text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
              onClick={handleLogin} 
            >
              Log in
            </button>

            <button
              className="w-1/2 text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
              onClick={handleSing} 
            >
              Singing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;










































































































































