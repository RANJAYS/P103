
const firebaseConfig = {
    apiKey: "AIzaSyCieCtfQP9-GDaY-uPkT9sDfHex6N-W3SA",
    authDomain: "let-chat-525a7.firebaseapp.com",
    databaseURL: "https://let-chat-525a7-default-rtdb.firebaseio.com",
    projectId: "let-chat-525a7",
    storageBucket: "let-chat-525a7.appspot.com",
    messagingSenderId: "152823664994",
    appId: "1:152823664994:web:0adc23385a116101341c3b",
    measurementId: "G-K6DHT8D02H"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "chat_room.html";
}



