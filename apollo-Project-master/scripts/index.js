// header part starts here

import { navbar } from "../components/navbar.js";
document.getElementById("fixedHeader").innerHTML = navbar();

// header part end here
// header part starts here
import { footer } from "../components/footer.js";

document.getElementById("footerRoot").innerHTML = footer();

//Footer part content collapse
let footerCollapse = document.getElementsByClassName("footerLinks-PanelHeader");
// console.log(footerCollapse);

var i;

for (i = 0; i < footerCollapse.length; i++) {
  // console.log("hii");
  footerCollapse[i].onclick = function () {
    // console.log("hii");
    var footerContent = this.nextElementSibling;
    // console.log(footerContent);

    if (footerContent.style.display == "block") {
      footerContent.style.display = "none";
    } else {
      footerContent.style.display = "block";
    }
  };
}

// // Page Content expand buttom for mobile device

let expandData = () => {
  console.log("hello there....");
  document.getElementById("secContent").style.maxHeight = "none";
  document.getElementById("expandBtn").style.display = "none";
};
document.getElementById("expandBtn").addEventListener("click", expandData);

// navbar hovering effect
let navtabs = document.getElementsByClassName("mobNavigationBtn");
let navlable = document.getElementsByClassName("mobNavigationLable");

// console.log(navtabs);
navtabs[0].style.color = "white";
navlable[0].style.color = "white";
navtabs[0].style.backgroundColor = "#02475b";
localStorage.setItem("navtab", 0);

// for(let i=0; i<navtabs.length; i++){
//     navtabs[i].addEventListener("click", function(){
//         localStorage.setItem("navtab",i);
//         // navtabs[i].style.color = "white";
//         // navlable[i].style.color = "white";
//         // navtabs[i].style.backgroundColor = "teal";
//         let navtabIndex = localStorage.getItem("navtab");
//         // console.log(navtabIndex);
//         for(let j=0; j<navtabs.length; j++){
//             if(navtabIndex == j){
//                 navtabs[j].style.color = "white";
//                 navlable[j].style.color = "white";
//                 navtabs[j].style.backgroundColor = "#02475b";
//             }else{
//                 navtabs[j].style.color = "#02475b";
//                 navlable[j].style.color = "#67919d";
//                 navtabs[j].style.backgroundColor = "white";
//             }
//         }

//     });

// }

// let navtabIndex = localStorage.getItem("navtab");
// console.log(navtabIndex);

//carousal

let carousalPic = [
  {
    index: "1",
    img: "https://newassets.apollo247.com/images/banners/First3.jpg",
  },
  {
    index: "2",
    img: "https://newassets.apollo247.com/images/banners/Super_30.jpg",
  },
  {
    index: "3",
    img: "https://newassets.apollo247.com/images/banners/Sebamed05.jpg",
  },
  {
    index: "4",
    img: "https://newassets.apollo247.com/images/banners/Whey-Proteins_May5th.jpg",
  },
  {
    index: "5",
    img: "https://newassets.apollo247.com/images/banners/Web_Circle.jpg",
  },
  {
    index: "6",
    img: "https://newassets.apollo247.com/images/banners/CircleMembership.jpg",
  },
  {
    index: "7",
    img: "https://newassets.apollo247.com/images/banners/internationalConsult.png",
  },
  {
    index: "8",
    img: "https://newassets.apollo247.com/images/banners/ApolloHomeCare.jpg",
  },
  {
    index: "9",
    img: "https://newassets.apollo247.com/images/banners/vaccination.jpg",
  },
  {
    index: "10",
    img: "https://newassets.apollo247.com/images/banners/HealthQueries.png",
  },
  {
    index: "11",
    img: "https://newassets.apollo247.com/images/banners/post-covid.jpg",
  },
  {
    index: "12",
    img: "https://newassets.apollo247.com/images/banners/pharma_2Feb.png",
  },
  {
    index: "13",
    img: "https://newassets.apollo247.com/images/banners/pharma_2Feb.png",
  },
  {
    index: "14",
    img: "https://newassets.apollo247.com/images/banners/consult_2Feb.png",
  },
  {
    index: "15",
    img: "https://newassets.apollo247.com/images/circle/banners/consult.png",
  },
];

// let leftClick = document.getElementById("leftSlideArrow");
// leftClick.onclick = function(){
//     console.log('leftClick:');
//     carousalPic.push(carousalPic.shift());
//     displayCarousal(carousalPic)
// }

// let rightClick = document.getElementById("rightSlideArrow");
// rightClick.onclick = function(){
//     console.log('rightClick:');
//     carousalPic.unshift(carousalPic.pop());
//     displayCarousal(carousalPic)

// }

function displayCarousal(carousalPic) {
  let sliderPics = document.getElementById("slideDiv");
  carousalPic.forEach(({ index, img }) => {
    let picDiv = document.createElement("div");
    picDiv.setAttribute("class", "slideDivPic");

    // picDiv.i = index;

    let pic = document.createElement("img");
    pic.src = img;
    // pic.height = "100%"
    // pic.width = "100%"
    // pic.style.height = "100%";
    // pic.style.width = "100%";

    picDiv.append(pic);

    sliderPics.append(picDiv);
  });
}
// displayCarousal(carousalPic);
// console.log(window.innerWidth);
let sliderPics = document.getElementById("sliderImageHome");
let a = 0;

let TimerSlide = setInterval(function () {
  // document.getElementById("slideDiv") = null;
  // console.log(sliderPics.src);

  if (a == carousalPic.length) {
    a = 0;
  }
  sliderPics.src = carousalPic[a].img;
  // console.log(carousalPic[a].img);
  a++;
}, 2000);

// // ###################################Login Part Starts Here##################################################//
// let html = `
//         <div id="back"></div>
//             <div id="login">
//                 <div style="display: flex; justify-content: space-between; height: 45px;">
//                     <h1 style="font-size: 40; font-weight: bold;">Hi</h1>
//                     <img src="https://cdn-icons-png.flaticon.com/512/748/748122.png" class="log1" id="closs">
//                 </div>
//                 <p>Please enter your mobile number to login</p>
//                 <div style="display: flex;">
//                     <div class="one">
//                         <div class="under">
//                             <label>+91</label><input type="number" id="number" class="textarea">
//                         </div>
//                         <p>OTP will be sent to this number by SMS and whatsapp</p>
//                         <input type="checkbox" id="logincheck"><label>By signing up, I agree to the</label>
//                         <p>
//                             <a href="/" style="color: orange;">Privacy Policy, Terms and Conditions</a> of Apollo247
//                         </p>
//                     </div>
//                     <div id="two">
//                         <div id="img">
//                         <span id="qwerty">&#8594;</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         <div id="snigup1">
//             <div id="snigup">
//                 <h1>Welcome to apollo 24|7</h1>
//                 <p style="color: blue;">
//                     Enter your details. Let us quickly get to know you so that we can get you the best help :)
//                 </p>
//                 <p>Full Name</p>
//                 <div class="under">
//                     <input type="text" id="fname" placeholder="First Name" class="textarea">
//                 </div>
//                 <div class="under">
//                     <input type="text" id="sname" placeholder="Last Name" class="textarea">
//                 </div>
//                 <p>Date Of Birth</p>
//                 <div class="under">
//                     <input type="data" id="dob" placeholder="dd/mm/yy" class="textarea">
//                 </div>
//                 <p>Gender</p>
//                 <div id="genter">
//                     <div id="male">Male</div>
//                     <div id="female">Female</div>
//                 </div>
//                 <p>Email Address(Optional)</p>
//                 <div class="under">
//                     <input type="email" placeholder="name@email.com" id="email" class="textarea" > <br>
//                 </div>
//                 <input type="checkbox" id="whatsapp" class="textarea" >
//                 <label style="font-size: 12px;">send me personalised health tips & offers to
//                     <span><img src="https://img.icons8.com/color/344/whatsapp--v1.png" id="log"></span>
//                 </label>
//                 <div id="code">
//                     <div id="code1">
//                     <img src="https://cdn-icons-png.flaticon.com/512/3349/3349225.png" id="log">
//                     </div>
//                     <div id="code2">
//                         <label style="font-size: 12px;">Do you Have A Referral code? (Optional)</label><br>
//                         <div class="under">
//                             <input type="text" placeholder="Enter Referal Code" id="referralcode" class="textarea" >
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <button id="submit">submit</button>
//         </div>

//         <div id="otp">
//             <div id="otp1">
//                 <img src="https://image.shutterstock.com/image-vector/left-arrow-vector-icon-600w-576086476.jpg" id="log">
//                 <img src="https://cdn-icons-png.flaticon.com/512/748/748122.png" class="log1" id="closs1">
//             </div>
//             <div>
//                 <h1>great</h1>
//                 <p>Now type in the OTP sent to you for authentication</p>
//                 <div style="display: flex;">
//                     <div class="one">
//                     <div class="under">
//                         <input type="number" id="otpnumber" class="textarea">
//                     </div>
//                     </div>
//                     <div id="otpclick" >
//                         <div id="img">
//                             <img id="log" src="https://img.icons8.com/dotty/344/right.png">
//                         </div>
//                     </div>
//                 </div>
//                 <p id="resent">RESEND OTP</p>
//                 <p>or</p>
//                 <button id="call">GET OTP ON CALL</button>
//             </div>
//         </div>

//         <div id="profile">
//         <div id="info">
//             <div id="info1" class="infounder"></div>
//             <div id="info2" class="infounder">
//                 UHID : APJ1.0016547829
//             </div>
//             <div id="info3" class="infounder">
//                 <div id="progenter"></div>
//                 <div id="pronumber"></div>
//             </div>
//         </div>
//         <div id="other">
//             <a href="#"><div>
//                 <div>
//                     <img id="otherimg" src="https://newassets.apollo247.com/images/ic_manageprofile.svg">
//                     <label>Manage Profiles</label>
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//            <a href="#"><div>
//                 <div>

//                     <label>Address Book</label>
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//             <a href="#"><div>
//                 <div>
//                     <img id="otherimg" src="https://newassets.apollo247.com/images/my_membership.svg">
//                     <label>My Memberships</label>
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//             <a href="#"><div>
//                 <div>
//                     <img id="otherimg" src="https://newassets.apollo247.com/images/ic_invoice.svg">
//                     <label>My Orders</label>
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//             <a href="#"><div>
//                 <div>
//                     <img id="otherimg" src="https://newassets.apollo247.com/images/ic_fees.svg">
//                     <label>My Payments</label>
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//             <a href="#"><div>
//                 <div>
//                     <img id="otherimg" src="https://newassets.apollo247.com/images/one-apollo.svg">
//                     <label>One Apollo Membership</label>
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//             <a href="#"><div>
//                 <div>
//                     <img id="otherimg" src="https://newassets.apollo247.com/images/ic_round_live_help.svg">
//                     <label>Need Help</label>
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//             <a href="#"><div id="logout">
//                 <div>
//                     <img id="otherimg" src="https://newassets.apollo247.com/images/ic_logout.svg">
//                     <label>Logout
//                 </div>
//                 <div><img id="otherimg" src="https://newassets.apollo247.com/images/ic_arrow_right.svg"></div>
//             </div></a>
//         </div>
//         <div id="app">
//             <img src="https://newassets.apollo247.com/images/apollo247.png">
//             <button>DOWNLOAD APP</button>
//         </div>
//     </div>
//     `;

// // address icon
// // <img id="otherimg" src="https://cdn-icons.flaticon.com/png/512/3082/premium/3082383.png?token=exp=1651735062~hmac=28e41b3c5f0f886905e8c17d46d112f6"></img>

// let count = 0;
// let login = JSON.parse(localStorage.getItem("login")) || false;
// let loginid = JSON.parse(localStorage.getItem("loginid"));
// if (login == false) {
//     document.getElementById("loginPopup").onclick = function show() {
//         document.getElementById("bar").innerHTML = html
//         document.getElementById("back").style.display = "block"
//         document.getElementById("login").style.display = "block"
//         document.getElementById("back").addEventListener("click", black)
//         document.getElementById("closs").onclick = function closs() {
//             document.getElementById("login").style.display = "none"
//             document.getElementById("back").style.display = "none"
//         }
//         let input = document.querySelector("#number").value;
//         if (input.length == 10)
//             document.getElementById("two").style.backgroundColor = "orangr"
//         document.querySelector("#two").addEventListener("click", snigup);
//         function snigup() {
//             let input = document.querySelector("#number").value;
//             let c = 0
//             if (input != "" && input.length == 10) {
//                 c++
//                 let number = JSON.parse(localStorage.getItem("snigup")) || [];
//                 number.forEach(el => {
//                     if (input == el.number) {
//                         localStorage.setItem("loginid", JSON.stringify(el))
//                         c++;
//                         document.getElementById("otp").style.display = "block"
//                         document.getElementById("login").style.display = "none"
//                         document.getElementById("back").addEventListener("click", black)
//                         let OTP;
//                         setTimeout(() => {
//                             OTP = Math.floor(1000 + Math.random() * 9000);
//                             alert(`Your one time OTP is ${OTP}`)
//                         }, "2000")
//                         document.getElementById("closs1").onclick = function closs1() {
//                             document.getElementById("otp").style.display = "none"
//                             document.getElementById("back").style.display = "none"
//                         }
//                         document.getElementById("otpclick").onclick = function otp() {
//                             let otp = document.getElementById("otpnumber").value;
//                             if (otp == OTP) {
//                                 localStorage.setItem("login", true)
//                                 window.location.href = "index.html"
//                             }
//                             else {
//                                 alert("wrong otp")
//                             }
//                         }

//                     }
//                 });
//                 if (c == 1) {
//                     document.getElementById("otp").style.display = "block"
//                     document.getElementById("login").style.display = "none"
//                     document.getElementById("back").addEventListener("click", black)
//                     let OTP;
//                     setTimeout(() => {
//                         OTP = Math.floor(1000 + Math.random() * 9000);
//                         alert(`Your one time OTP is ${OTP}`)
//                     }, "2000")
//                     document.getElementById("closs1").onclick = function closs2() {
//                         document.getElementById("otp").style.display = "none"
//                         document.getElementById("back").style.display = "none"
//                     }
//                     document.getElementById("otpclick").onclick = function otp() {
//                         let otp = document.getElementById("otpnumber").value;
//                         if (otp == OTP) {
//                             document.getElementById("snigup1").style.display = "block"
//                             document.getElementById("otp").style.display = "none"
//                             document.getElementById("back").addEventListener("click", black)
//                             let m = document.getElementById("male")
//                             let f = document.getElementById("female")
//                             let gender;
//                             m.onclick = function male() {
//                                 m.style.backgroundColor = "green"
//                                 f.style.backgroundColor = "white"
//                                 m.style.color = "white"
//                                 f.style.color = "green"
//                                 gender = "MALE"

//                             }
//                             f.onclick = function male() {
//                                 f.style.backgroundColor = "green"
//                                 m.style.backgroundColor = "white"
//                                 f.style.color = "white"
//                                 m.style.color = "green"
//                                 gender = "FEMALE"
//                             }
//                             document.getElementById("submit").onclick = function add() {
//                                 let a = document.getElementById("fname").value;
//                                 let b = document.getElementById("sname").value;
//                                 let c = document.getElementById("dob").value;
//                                 if (a != "" && b != "" && c != "" && gender != null) {
//                                     let obj = {
//                                         number: input,
//                                         First_name: a,
//                                         Last_name: b,
//                                         DOB: c,
//                                         Gender: gender,
//                                         email: document.getElementById("email").value,
//                                         code1: document.getElementById("referralcode").value
//                                     };
//                                     let x = JSON.parse(localStorage.getItem("snigup")) || [];
//                                     x.push(obj);
//                                     localStorage.setItem("snigup", JSON.stringify(x))
//                                     localStorage.setItem("loginid", JSON.stringify(obj))
//                                     document.getElementById("snigup1").style.display = "none"
//                                     document.getElementById("back").style.display = "none"
//                                     localStorage.setItem("login", true)
//                                     window.location.href = "index.html"
//                                 }

//                             }
//                         }
//                         else {
//                             alert("wrong otp")
//                         }
//                     }

//                 }
//             }

//         }
//     }
// }
// else {
//     document.getElementById("loginPopup").onclick = function profile() {
//         document.getElementById("bar").innerHTML = html
//         if (count == 0) {
//             count++
//             document.getElementById("profile").style.display = "block"
//             document.querySelector("#info1").innerText = loginid.First_name;
//             let x = loginid.DOB.trim().split("/");
//             let a = x[0];
//             x[0] = x[1];
//             x[1] = a;
//             x = x.join("/");
//             let dob = new Date(x);
//             let month_diff = Date.now() - dob.getTime();
//             let age_dt = new Date(month_diff);
//             let year = age_dt.getUTCFullYear();
//             let age = Math.abs(year - 1970);
//             document.querySelector("#progenter").innerText = `${loginid.Gender} | ${age}`;
//             document.querySelector("#pronumber").innerText = `+91${loginid.number}`;
//             let asd = document.getElementById("logout").innerText
//             document.getElementById("logout").onclick = function logout() {
//                 localStorage.setItem("login", false);
//                 localStorage.removeItem('loginid');
//                 window.location.reload()
//             }
//         }
//         else {
//             count--
//             document.getElementById("profile").style.display = "none"
//         }
//     }
// }
// let black = () => {
//     document.getElementById("snigup1").style.display = "none"
//     document.getElementById("back").style.display = "none"
//     document.getElementById("otp").style.display = "none"
//     document.getElementById("login").style.display = "none"
// }

//Some login related events

// window.addEventListener("click",function(event){
//     console.log(event.target);

// })

let HelloThere = JSON.parse(localStorage.getItem("loginid"));
// console.log("HelloThere:", HelloThere);
if (HelloThere?.First_name) {
  document.getElementById("helloTitle").innerText = `Hello ${HelloThere}`;
}
