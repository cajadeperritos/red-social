var firebaseConfig = {
   apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
    authDomain: "testkwitter.firebaseapp.com",
     databaseURL:"https://testkwitter.firebaseio.com",
  projectId: "testkwitter",
   storageBucket: "testkwitter.appspot.com",
    messagingSenderId: "624653701634",
     appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" };

     firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "agregando el nombre de la sala"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Nombre de la sala: " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }