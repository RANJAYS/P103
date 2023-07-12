
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

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    