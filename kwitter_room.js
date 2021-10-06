const firebaseConfig = {
      apiKey: "AIzaSyDEe1_FRBE0EnDIATlRMVp23rCEfpt94eQ",
      authDomain: "social-websites.firebaseapp.com",
      databaseURL: "https://social-websites-default-rtdb.firebaseio.com",
      projectId: "social-websites",
      storageBucket: "social-websites.appspot.com",
      messagingSenderId: "982896597509",
      appId: "1:982896597509:web:596e4818510cdf1e209a6c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
