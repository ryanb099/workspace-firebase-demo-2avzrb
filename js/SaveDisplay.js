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
  //console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }
  //console.log(inputJson);
});

firebase
  .firestore()
  .collection("surveyData")
  .onSnapshot(function(querySnapshot) {
    //console.log(querySnapshot);
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      $(function() {
        $("input[name=choice]:radio").click(function() {
          if ($("input[name=choice]:checked").val() == "A") {
            $("#ans1").text("1");
          } else if ($("input[name=choice]:checked").val() == "B") {
            $("#ans2").text("1");
          } else if ($("input[name=choice]:checked").val() == "C") {
            $("#ans3").text("1");
          } else if ($("input[name=choice]:checked").val() == "D") {
            $("#ans4").text("1");
          } else if ($("input[name=choice]:checked").val() == "E") {
            $("#ans5").text("1");
          }
        });
      });
    });
  });

// update the result in table
