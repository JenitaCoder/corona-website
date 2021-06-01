var firebaseConfig = {
  apiKey: "AIzaSyDvm4c0VMMM7skn1x2xHC5uovvLvrFm7OY",
  authDomain: "corona-website-9bd75.firebaseapp.com",
  databaseURL: "https://corona-website-9bd75.firebaseio.com",
  projectId: "corona-website-9bd75",
  storageBucket: "corona-website-9bd75.appspot.com",
  messagingSenderId: "975171442583",
  appId: "1:975171442583:web:4cdccd0708f6eb08b916d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var UserInputsRef=firebase.database().ref('UserInputs')
document.getElementById('coronaForm').addEventListener('submit',submitForm);
function submitForm(e)
{
  e.preventDefault();
  var fname=document.getElementById('firstname').value;
  var lname=document.getElementById('lastname').value;
  var mobile=document.getElementById('mobile').value;
  var state=document.getElementById('state').value;
  var email=document.getElementById('email').value;
  var profession=document.getElementById('profession').value;
  var dob=document.getElementById('dateofbirth').value;


  var fullName=fname+" "+lname;
  var saver=UserInputsRef.push();
  saver.set({
    name:fullName,
    mobile:mobile,
    EmailId:email,
    state:state,
    profession:profession,
    dateofbirth:dob
  })
  alert("Your details are saved successfully");
}

