app.controller('loginCtrl', function ($scope, $location, $window) {
  console.log("Inside login controller")
  $scope.title = ""
  //initialize firebase
  var config = {
    apiKey: "AIzaSyCJ8wbiLlh8vIV6YSNfsqb1KptLTjLmLEM",
    authDomain: "bu-form-gen.firebaseapp.com",
    databaseURL: "https://bu-form-gen.firebaseio.com",
    projectId: "bu-form-gen",
    storageBucket: "bu-form-gen.appspot.com",
    messagingSenderId: "764337737261"
  };
  firebase.initializeApp(config);

  //login
  var provider = new firebase.auth.GoogleAuthProvider();
  $scope.googleSignin = function() {
     firebase.auth()

     .signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
        if(user.email.split('@')[1] == "binghamton.edu"){
            console.log("Login Succesfull")
            $scope.title = "Welcome " + user.displayName.split(' ')[0]
            $window.location = "http://" + $window.location.host + "/#!/manage"

        }
        else{
          console.log("Please sign in with Binghamton University email")
        }

     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code)
        console.log(error.message)
     });
  }

  $scope.googleSignout = function() {
     firebase.auth().signOut()

     .then(function() {
        console.log('Signout Succesfull')
        $scope.title = ""
        $window.location = "http://" + $window.location.host + "/#!/"
     }, function(error) {
        console.log('Signout Failed')
     });
  }
})
