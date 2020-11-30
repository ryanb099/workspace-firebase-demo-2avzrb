var firebaseConfig = {
  apiKey: "AIzaSyC8YxgOtzn_OanAlh7Q-LpjMN1PFA2_TCM",
  authDomain: "grocerylist-238b9.firebaseapp.com",
  databaseURL: "https://grocerylist-238b9.firebaseio.com",
  projectId: "grocerylist-238b9",
  storageBucket: "grocerylist-238b9.appspot.com",
  messagingSenderId: "206619415585",
  appId: "1:206619415585:web:e839424c83a5c5b780ff60",
  measurementId: "G-NBECYCE2YS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#Login").submit(function(e) {
  e.preventDefault();
  // get the user name and password from form
  var email = document.getElementById("login").value;
  var password = document.getElementById("pwd").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
      // ...
      console.log("login in");
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
