(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],p=0,m=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"050d":function(e,t,a){"use strict";var n=a("ec2c"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("MapAPI"),a("TripInfo"),a("Bookings")],1)},i=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("@googlemaps/js-api-loader")]),n("img",{attrs:{alt:"Vue logo",src:a("c4fc")}}),n("div",{attrs:{id:"map"}})])}],l={data:function(){return{markers:[{position:{lat:29.99509712,lng:31.4459768},iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",content:"<h1>Mostafa Test Map</h1>",type:"parking"},{position:{lat:30.01288023,lng:31.43102269}},{position:{lat:30.01642345,lng:31.43356512}},{position:{lat:30.01637555,lng:31.39839364}},{position:{lat:30.0409879,lng:31.34613896}},{position:{lat:30.04505095,lng:31.34143553}},{position:{lat:30.05408947,lng:31.3421715}},{position:{lat:30.06198228,lng:31.34523262}},{position:{lat:30.07322503,lng:31.34378507}},{position:{lat:30.08201257,lng:31.34388217},type:"parking"}]}},methods:{initMap:function(){n=new google.maps.Map(document.getElementById("map"),{center:{lat:30.01288023,lng:31.43102269},zoom:11});for(var e=0;e<this.markers.length;e++)new google.maps.Marker({position:this.markers[e].position,map:n})}},beforeMount:function(){console.log("component beforeMount")},mounted:function(){this.initMap()}},u=l,p=(a("5ee1"),a("2877")),m=Object(p["a"])(u,o,c,!1,null,"5dbcfdcb",null),d=m.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("div",[a("UserDriver",{attrs:{userName:"Ashraf nazeeh",userRate:"4.5",carModel:"Toyota",carImg:"bus.jpeg",carId:"GA-2770"}}),e._m(1),e._m(2)],1)])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[e._v(" Trip Information "),a("span",{staticClass:"date"},[e._v("15/5/2018, 8:07 AM")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rode"},[a("p",{staticClass:"from"},[e._v("6th of October")]),a("p",{staticClass:"to"},[e._v("Mohandessin")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fee"},[a("p",{staticClass:"dist"},[e._v("Trip Distance: "),a("span",[e._v("4.7 KM")])]),a("p",{staticClass:"fare"},[e._v("Trip Base Fare: "),a("span",[e._v("45 EGP")])])])}],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"userDriver"},[n("div",{staticClass:"img"},[e.userImg?n("img",{attrs:{alt:"",src:e.userImg}}):n("img",{attrs:{alt:"",src:a("6442")}})]),e.carImg?n("div",{staticClass:"img imgBus"},[n("img",{attrs:{alt:"",src:a("7503")}})]):e._e(),n("div",{staticClass:"userInfo"},[n("div",{staticClass:"user"},[n("span",{staticClass:"user-name"},[e._v(e._s(e.userName))]),n("span",{staticClass:"user-rate"},[e._v(e._s(e.userRate))])]),n("div",{staticClass:"car"},[n("span",{},[e._v(e._s(e.carModel))]),e._v(" - "),n("span",{},[e._v(e._s(e.carId))])])])])},v=[],b={props:{userImg:String,userName:String,userRate:String,carModel:String,carImg:String,carId:String}},y=b,_=(a("be87"),Object(p["a"])(y,h,v,!1,null,"4597acfe",null)),S=_.exports,C={name:"TripInfo",components:{UserDriver:S}},w=C,k=(a("5a40"),Object(p["a"])(w,g,f,!1,null,"c76d6f4c",null)),I=k.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h3",[e._v("Bookings")]),a("div",{staticClass:"users"},e._m(0),1)])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return e._l(e.users,(function(e){return a("UserName",{key:e.id,attrs:{userName:e.username,userImg:"",userStatus:"Missied",userID:e.id}})}))}],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user",attrs:{id:e.userID}},[n("div",{staticClass:"img"},[e.userImg?n("img",{attrs:{alt:"",src:e.userImg}}):n("img",{attrs:{alt:"",src:a("6442")}})]),n("div",{staticClass:"userInfo"},[n("span",[e._v(e._s(e.userName))]),n("div",[n("span",{staticClass:"userID"},[e._v(e._s(e.userID))]),n("span",{staticClass:"userStatus"},[e._v(e._s(e.userStatus))])])])])},j=[],z={props:{userID:null,userImg:String,userName:String,userStatus:String}},O=z,D=(a("e7f0"),Object(p["a"])(O,P,j,!1,null,"775d685a",null)),E=D.exports,T={data:function(){return{users:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]}},components:{UserName:E}},A=T,N=(a("050d"),Object(p["a"])(A,M,x,!1,null,"86f91cdc",null)),$=N.exports,L={name:"App",components:{MapAPI:d,TripInfo:I,Bookings:$}},R=L,B=(a("5c0b"),Object(p["a"])(R,r,i,!1,null,null,null)),K=B.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(K)}}).$mount("#app")},"5a40":function(e,t,a){"use strict";var n=a("dcce"),s=a.n(n);s.a},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"5ee1":function(e,t,a){"use strict";var n=a("6c5a"),s=a.n(n);s.a},6442:function(e,t,a){e.exports=a.p+"img/swvl_icon.e1a20613.png"},"6c5a":function(e,t,a){},7503:function(e,t,a){e.exports=a.p+"img/bus.8d022a14.jpeg"},"908b":function(e,t,a){},"9c0c":function(e,t,a){},be87:function(e,t,a){"use strict";var n=a("908b"),s=a.n(n);s.a},c4fc:function(e,t,a){e.exports=a.p+"img/Swvl_logo.f4b3a6d6.png"},dab2:function(e,t,a){},dcce:function(e,t,a){},e7f0:function(e,t,a){"use strict";var n=a("dab2"),s=a.n(n);s.a},ec2c:function(e,t,a){}});
//# sourceMappingURL=app.e08dd46b.js.map