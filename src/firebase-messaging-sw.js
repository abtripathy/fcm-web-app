importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');
firebase.initializeApp({
    // apiKey: "AIzaSyC-YdjvaLBo4OnRLB4lwMcWnfbrnVkgeCY",
    // authDomain: "teksystemspoc-fcm.firebaseapp.com",
    // projectId: "teksystemspoc-fcm",
    // storageBucket: "teksystemspoc-fcm.appspot.com",
    // messagingSenderId: "572894731618",
    // appId: "1:572894731618:web:8645ecd7d35ca1a552a03b",
    // measurementId: "G-5C1ML732V3"
    apiKey: "AIzaSyC5dq6RBLohZgrZXp_rqLFxWgYSd_TDq7g",
    authDomain: "messaging-poc-project.firebaseapp.com",
    projectId: "messaging-poc-project",
    storageBucket: "messaging-poc-project.appspot.com",
    messagingSenderId: "965576122974",
    appId: "1:965576122974:web:f495844e6d7a6b09470acf",
    measurementId: "G-Z49ZT4BS22"
});
const messaging = firebase.messaging();