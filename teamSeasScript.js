// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU21edukO9sxUR13wYy6yYW9ZYK5ax4tM",
    authDomain: "team-seas-demo.firebaseapp.com",
    databaseURL: "https://team-seas-demo-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "team-seas-demo",
    storageBucket: "team-seas-demo.appspot.com",
    messagingSenderId: "864989587728",
    appId: "1:864989587728:web:7eda88906cd9a7fe659d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"

var db = getDatabase();

var totalTrash = 0;

var name = document.getElementById("cleanUpName");
var location = document.getElementById("cleanUpLocation");
var date = document.getElementById("cleanUpDate");
var time = document.getElementById("cleanUpTime");

var submit = document.getElementById("submitBtn");


var trashCleaned = document.getElementById("cleanUpAmount");
var tallyCleaned = document.getElementById("cleanUpTally");

var trashSubmit = document.getElementById("submitAmount");


function addTrash(){
    totalTrash ++;
    console.log(trashCleaned);
};


function updateTrashAmount(){
    totalTrash += parseInt(trashCleaned.value);
    trashCleaned = 0
};


function insertGroupData(){
    set(ref(db, "Groups/" + name.value),{
    GroupName: name.value, 
    GroupLocation: location.value, 
    GroupDate: date.value,
    GroupTime: time.value,
    TrashCollected: totalTrash
    })
    .then(()=>{
    alert("Data stored");
    })
    .catch((error)=>{
    alert("ERROR", error);
    });
};


submit.addEventListener("click", insertGroupData);
tallyCleaned.addEventListener("click", addTrash);
trashSubmit.addEventListener("click", updateTrashAmount);