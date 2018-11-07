  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBvN0SphkggCX0MigNBqPqTpv8n9F14CRc",
      authDomain: "personal-site-jmartinez.firebaseapp.com",
      databaseURL: "https://personal-site-jmartinez.firebaseio.com",
      projectId: "personal-site-jmartinez",
      storageBucket: "personal-site-jmartinez.appspot.com",
      messagingSenderId: "1090925385275"
  };
  firebase.initializeApp(config);

  new WOW().init();