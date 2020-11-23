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

$("#signup-form").submit(function(e) {
  e.preventDefault();
  console.log("click the submit");

  // use the provided sign in
  var email = "ryekicks@gmail.com";
  var psw = "1234";
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, psw)
    .then(user => {
      console.log("success");
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
});
