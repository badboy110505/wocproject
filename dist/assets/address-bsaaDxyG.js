import{i as n}from"./index.esm-Gw7Hybki.js";/* empty css              *//* empty css              */import{g as i,c as m,a as p}from"./index.esm2017-t27tPH5n.js";const l={apiKey:"AIzaSyCwgFPjW__-4tDWvSmdBVoB3FG7FjC7pEY",authDomain:"trackingit-4ba6c.firebaseapp.com",projectId:"trackingit-4ba6c",storageBucket:"trackingit-4ba6c.appspot.com",messagingSenderId:"501811970037",appId:"1:501811970037:web:65405dde5ae6b578692abc",measurementId:"G-3QW8TG8MQH"},u=n(l),g=i(u),t=document.getElementById("addressForm");t.addEventListener("submit",async function(o){o.preventDefault();const a=document.getElementById("productId").value,s=document.getElementById("street").value,r=document.getElementById("city").value,c=document.getElementById("state").value,d=document.getElementById("zipCode").value;try{const e=m(g,"products",a,"addresses");await p(e,{street:s,city:r,state:c,zipCode:d}),t.reset(),alert("Order Placed Successfully")}catch(e){console.error("Error adding address to Firestore:",e)}});