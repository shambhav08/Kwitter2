
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyABvOM6x5f2EODsEI72-DYmtEdHm9qjj-c",
      authDomain: "kwitter-69b62.firebaseapp.com",
      databaseURL: "https://kwitter-69b62-default-rtdb.firebaseio.com",
      projectId: "kwitter-69b62",
      storageBucket: "kwitter-69b62.appspot.com",
      messagingSenderId: "586819359341",
      appId: "1:586819359341:web:08e2a7652c96631962a564"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addroom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML = row;

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function log_out()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}