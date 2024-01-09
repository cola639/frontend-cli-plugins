// routing
import Routes from 'routes'

// project imports
// import NavigationScroll from 'layout/NavigationScroll'
// import RTLLayout from 'ui-component/RTLLayout';

// auth provider
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext'
// import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';
import useTitle from 'hooks/useTitle'

// ==============================|| APP ||============================== //

const App = () => {
  useTitle()

  return (
    <>
      <Routes />
    </>
  )

  //     <ThemeCustomization>
  //         {/* RTL layout */}
  //         {/* <RTLLayout> */}
  //         <Locales>
  //             <NavigationScroll>
  //                 <AuthProvider>
  //                     <>
  //                         <Routes />
  //                         <Snackbar />
  //                     </>
  //                 </AuthProvider>
  //             </NavigationScroll>
  //         </Locales>
  //         {/* </RTLLayout> */}
  //  </ThemeCustomization>
}

export default App
