import firebase from 'firebase/app'
import 'firebase/storage'


//import 'firebase/auth'
//

//console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  const config = {
    apiKey: "AIzaSyAMCoDFYVt8ndsyn_-zFL5lfJBwCqPMIZM",
    authDomain: "tat-calendar-caf53.firebaseapp.com",
    databaseURL: "https://tat-calendar-caf53-default-rtdb.firebaseio.com",
    projectId: "tat-calendar-caf53",
    storageBucket: "tat-calendar-caf53.appspot.com",
    messagingSenderId: "323542131543",
    appId: "1:323542131543:web:e352530b605fc32d07d412",
    measurementId: "G-F4NDRHVX5H"

 //   apiKey: process.env.FIREBASE_API_KEY ,
 //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
 //   databaseURL: process.env.FIREBASE_DATABASE_URL,
 //   projectId: process.env.FIREBASE_PROJ_ID,
 //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
 //   appId: process.env.FIREBASE_APP_ID,
 //   measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  const fire = firebase.initializeApp(config)
  export const storage = firebase.storage()
  export function authListener(){
    let userdata;
    fire.auth().onAuthStateChanged(user => {
      if(user){
        console.log(user);
        userdata = user
      } else {
        console.log('No User Signed In');
      }
      
    })
    //return userInfo
   // function fetchSignedInUserInfo (username) {
   //
   //  fetch(`http://localhost:3000/user/${username}`)
   //   .then(resp => return resp.json())
   //   
   //}
   return userdata
  }


 
  export default fire;

//onst app = firebase.initializeApp = ({
//   apiKey: process.env.FIREBASE_API_KEY ,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJ_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// });
//  // Initialize Firebase

//export const auth = app.auth()



// const firebaseLogin = (email, password) => {
//  debugger
//  const config = {
//  apiKey: "AIzaSyAMCoDFYVt8ndsyn_-zFL5lfJBwCqPMIZM",
//  authDomain: "tat-calendar-caf53.firebaseapp.com",
//  databaseURL: "https://tat-calendar-caf53-default-rtdb.firebaseio.com",
//  projectId: "tat-calendar-caf53",
//  storageBucket: "tat-calendar-caf53.appspot.com",
//  messagingSenderId: "323542131543",
//  appId: "1:323542131543:web:e352530b605fc32d07d412",
//  measurementId: "G-F4NDRHVX5H"
//  };
//
//  firebase.initializeApp(config)
//  const auth = firebase.auth()
//  let promise = auth.createUserWithEmailAndPassword(email, password)
//  //auth.signInWithEmailAndPassword(email, password)
//  //todo check and validate email
//  promise.catch(e => console.log(e.message));
//  auth.onAuthStateChanged(user => {
//    if (user) {
//      console.log(user);
//    } else {
//      console.log("Not logged in");
//    }
//  })
//
//  console.log(promise);
//}

  //export default firebaseLogin;