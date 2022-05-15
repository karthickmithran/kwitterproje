//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyBFcf8Yz4wwql6hLXoRyfERbbBM5uEvhi8",
    authDomain: "kwitterproject-f0061.firebaseapp.com",
    databaseURL: "https://kwitterproject-f0061-default-rtdb.firebaseio.com/",
    projectId: "kwitterproject-f0061",
    storageBucket: "kwitterproject-f0061.appspot.com",
    messagingSenderId: "923150440859",
    appId: "1:923150440859:web:94d9ba52dad8fa0cc1693e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }