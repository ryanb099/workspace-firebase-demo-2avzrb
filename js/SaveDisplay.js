// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }
  console.log(inputJson);

  firebase;
  firestore()
    .collection("surveyData")
    .add(inoutJson);
  $("form")[0].reset();
});

// update the result in table
