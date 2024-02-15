 import {Home} from './_root/pages';
 import SigninForm from './_auth/forms/SigninForm';
 import SignupForm from './_auth/forms/SignupForm';
  import AuthLayout from './_auth/AuthLayout';
  import RootLayout from './_root/RootLayout';
 import './globals.css';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
<Route element={<AuthLayout/>}> 
      
      <Route path="/sign-in" element={SigninForm/>}/>
      <Route path="/sign-up" element={SignupForm/>}/>
      <Route index element={<Home/>}/>
      </Routes> 
    </main>
  )
}

export default App