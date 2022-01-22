import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD7Aa31ztfPnuQuQt_gx8fjuDp-hOybA0s",
    authDomain: "private-twitter-6a243.firebaseapp.com",
    databaseURL: "https://private-twitter-6a243-default-rtdb.firebaseio.com",
    projectId: "private-twitter-6a243",
    storageBucket: "private-twitter-6a243.appspot.com",
    messagingSenderId: "875220177223",
    appId: "1:875220177223:web:f65a4d3bc6301b9c7e7c62",
    measurementId: "G-82S40FJN0M"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "Private_room.html";
}

function addroom() {
    room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "Private.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
       console.log("room_name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

 //Start code
 function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "Private_messagepage.html";
   }
   function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
   }
   function send() {
     msg = document.getElementById("msg").value;
     console.log("Message "+msg);
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0,
           dislike:0
           function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;      
 //End code
       } });  }); }
 getData();