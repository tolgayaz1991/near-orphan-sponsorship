(this["webpackJsonporphan-sponsorship-frend"]=this["webpackJsonporphan-sponsorship-frend"]||[]).push([[0],{185:function(e,t){},195:function(e,t){},213:function(e,t){},280:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(167),c=n.n(a),s=n(13),o=n(31),i=n(6),l=n(295),u=n(299),d=Object({NODE_ENV:"production",PUBLIC_URL:"/near-orphan-sponsorship",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"orphan-sponsorship.help-needy.testnet";var b=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:d,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:d,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},j=n(104),h=n(111),p=b("testnet");function x(){return(x=Object(o.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.connect)(Object.assign({deps:{keyStore:new j.keyStores.BrowserLocalStorageKeyStore}},p));case 2:t=e.sent,window.walletConnection=new j.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new j.Contract(window.walletConnection.account(),p.contractName,{viewMethods:["list_orphans","orphans_length","orphan_details"],changeMethods:["add_orphan","unregister_orphan","sponsor_by_id","unregister_all_orphans"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.walletConnection.getAccountId());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){window.walletConnection.requestSignIn(p.contractName)}function v(){window.walletConnection.signOut(),window.location.reload()}var y=n(297),N=n(293),k=n(300),S=n(1),C=function(e){var t=e.address,n=e.amount,r=e.symbol,a=e.logout;return t?Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(y.a,{children:[Object(S.jsx)(y.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(S.jsxs)(S.Fragment,{children:[n," ",Object(S.jsxs)("span",{className:"ms-1",children:[" ",r]})]}):Object(S.jsx)(N.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(S.jsxs)(y.a.Menu,{className:"shadow-lg border-0",children:[Object(S.jsx)(y.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(S.jsxs)(k.a,{direction:"horizontal",gap:2,children:[Object(S.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(S.jsx)("span",{className:"font-monospace",children:t})]})}),Object(S.jsx)(y.a.Divider,{}),Object(S.jsxs)(y.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(S.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},_=n(50),F=(n(243),function(){return Object(S.jsx)(_.a,{position:"bottom-center",autoClose:2500,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),A=function(e){var t=e.text;return Object(S.jsxs)("div",{children:[Object(S.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(S.jsx)("span",{className:"text-secondary mx-1",children:t})]})},I=function(e){var t=e.text;return Object(S.jsxs)("div",{children:[Object(S.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(S.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T={text:""};A.defaultProps=T,I.defaultProps=T;var E=n(169),U=n.n(E),W=n(294),B=n(170),L=function(){return Object(S.jsx)("div",{className:"d-flex justify-content-center",children:Object(S.jsx)(N.a,{animation:"border",role:"status",className:"opacity-25",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},D=1e14;function Y(){return window.contract.list_orphans()}function P(e){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(Object(s.a)().mark((function e(t){var n,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.near_amount,e.next=3,window.contract.sponsor_by_id({orphan_id:n},D,r);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){var t=e.name,n=e.birthYeaR,r=e.genderr,a=e.countrY;return window.contract.add_orphan({full_name:t,birthYear:n,gendeR:r,country:a},D,void 0)}function z(e){var t=e.id;return window.contract.unregister_orphan({orphan_id:t})}var H=n(298),M=n(168),K=function(e){var t=e.submit_form,n=Object(r.useState)("0"),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),l=Object(i.a)(o,2),u=l[0],d=l[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W.a,{className:"mb-2 justify-content-md-center",children:Object(S.jsx)(B.a,{className:"col-md-auto",children:Object(S.jsx)("h1",{style:{textAlign:"center"},className:"justify-content-center",children:"Sponsorship Form"})})}),Object(S.jsxs)(H.a,{children:[Object(S.jsxs)(W.a,{className:"mb-3 justify-content-md-center",children:[Object(S.jsxs)(H.a.Group,{md:4,children:[Object(S.jsx)(H.a.Label,{className:"row justify-content-center",style:{textAlign:"center"},children:Object(S.jsxs)("span",{style:{fontWeight:500,fontSize:17},children:["Enter An Orphan Id To Sponsor",Object(S.jsx)("br",{}),"(Observe The Orphan Table Below, Enter 0 for General Support)",Object(S.jsx)("br",{}),"(If there happens a problem in reaching an orphan, the support is used for other orphans.)"]})}),Object(S.jsx)(H.a.Control,{required:!0,autoFocus:!0,type:"text",placeholder:"Orphan Id",onChange:function(e){s(e.target.value)},defaultValue:"0"}),Object(S.jsx)(H.a.Control.Feedback,{children:"Looks good!"})]}),Object(S.jsxs)(H.a.Group,{md:4,children:[Object(S.jsx)(H.a.Label,{className:"row justify-content-center mt-3",style:{textAlign:"center"},children:Object(S.jsxs)("span",{style:{fontWeight:500,fontSize:17},children:["Enter Days To Sponsor ",Object(S.jsx)("br",{})," (0.2 Near is Taken per Day)"]})}),Object(S.jsx)(H.a.Control,{required:!0,type:"text",placeholder:"Day(s) To Sponsor",onChange:function(e){d(e.target.value)}}),Object(S.jsx)(H.a.Control.Feedback,{children:"Looks good!"})]})]}),Object(S.jsx)(W.a,{className:"justify-content-center",xs:3,md:2,children:Object(S.jsx)(M.a,{className:"btn btn-lg",size:"lg",onClick:function(){return t({orphanId:c,daysToSponsor:u})},children:"Submit The Form"})}),Object(S.jsx)("p",{className:"row justify-content-center mt-1",style:{textAlign:"center"},children:Object(S.jsx)("span",{style:{fontWeight:500,fontSize:17},children:"To get to the approval page"})})]})]})},q=(n(280),n(172)),J=n.n(q),V=n(296),Q=n(171),X=function(e){var t=e.add,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],l=a[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],j=d[1],h=Object(r.useState)(""),p=Object(i.a)(h,2),x=p[0],O=p[1],f=Object(r.useState)(""),g=Object(i.a)(f,2),w=g[0],v=g[1],y=Object(r.useState)(!1),N=Object(i.a)(y,2),k=N[0],C=N[1],F=function(){return C(!1)},A=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().then((function(e){return e}));case 3:if(e.t0=e.sent,"orphan-sponsorship.help-needy.testnet"===e.t0){e.next=6;break}throw new Error("Only allowed accounts can register an orphan.");case 6:C(!0),e.next=13;break;case 9:e.prev=9,e.t1=e.catch(0),Object(_.b)(Object(S.jsx)(I,{text:e.t1.toString()})),console.log({error:e.t1});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W.a,{className:"justify-content-center mb-2",xs:3,md:2,children:Object(S.jsx)(M.a,{onClick:A,className:"btn btn-lg",children:"Add An Orphan"})}),Object(S.jsxs)(V.a,{show:k,onHide:F,centered:!0,children:[Object(S.jsx)(V.a.Header,{closeButton:!0,children:Object(S.jsx)(V.a.Title,{children:"Orphan Info"})}),Object(S.jsx)(H.a,{children:Object(S.jsxs)(V.a.Body,{children:[Object(S.jsx)(Q.a,{controlId:"inputName",label:"Orphan Full Name",className:"mb-3",children:Object(S.jsx)(H.a.Control,{type:"text",autoComplete:"off",onChange:function(e){l(e.target.value)},placeholder:"Full Name"})}),Object(S.jsx)(Q.a,{controlId:"inputBirthYear",label:"Birth Year",className:"mb-3",children:Object(S.jsx)(H.a.Control,{type:"text",autoComplete:"off",onChange:function(e){j(e.target.value)},placeholder:"Birth Year"})}),Object(S.jsx)(Q.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(S.jsx)(H.a.Control,{type:"text",autoComplete:"off",placeholder:"Country",onChange:function(e){O(e.target.value)}})}),Object(S.jsx)(Q.a,{controlId:"inputGender",label:"Gender",className:"mb-3",children:Object(S.jsx)(H.a.Control,{type:"text",placeholder:"Gender",autoComplete:"off",onChange:function(e){v(e.target.value)}})})]})}),Object(S.jsxs)(V.a.Footer,{children:[Object(S.jsx)(M.a,{variant:"outline-secondary",onClick:F,children:"Close"}),Object(S.jsx)(M.a,{variant:"dark",disabled:!(c&&b&&x&&w),onClick:function(){t({name:c,birthYear:b,gender:w,country:x}),F()},children:"Add the Orphan"})]})]})]})},Z="orphan-sponsorship.help-needy.testnet",$=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),l=Object(i.a)(c,2),u=l[0],d=l[1],b=[],j=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=a,e.next=5,Y();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){var r,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.orphanId,c=t.daysToSponsor,e.prev=1,d(!0),!(isNaN(+r)||+r<0)&&Number.isInteger(+r)){e.next=7;break}throw new Error("Unsuccessful Transaction: Orphan Id should be zero or positive integer.");case 7:if(!(isNaN(+c)||+c<=0)&&Number.isInteger(+c)){e.next=9;break}throw new Error("Unsuccessful Transaction: Days to Sponsor should be positive integer.");case 9:return e.next=11,n.map((function(e){return b.push(e.orphan_id)}));case 11:if(b.includes(r)){e.next=13;break}throw new Error("Unsuccessful Transaction: Entered Orphan Id does not exist. Look at the table and enter an available Id.");case 13:return e.next=15,P({id:r,near_amount:J()(c).times(.2).times(Math.pow(10,24)).toFixed()});case 15:Object(_.b)(Object(S.jsx)(A,{text:"Transaction was successful."})),console.log("Transaction was successful."),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),Object(_.b)(Object(S.jsx)(I,{text:e.t0.toString()})),console.log({error:e.t0});case 23:return e.prev=23,e.t1=a,e.next=27,Y();case 27:return e.t2=e.sent,(0,e.t1)(e.t2),d(!1),e.finish(23);case 31:case"end":return e.stop()}}),e,null,[[1,19,23,31]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){var n,r,c,o,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.birthYear,c=t.gender,o=t.country,e.prev=1,i=c.toLowerCase(),d(!0),e.next=6,m().then((function(e){return e}));case 6:if(e.t0=e.sent,e.t1=Z,e.t0===e.t1){e.next=12;break}throw new Error("Only allowed accounts can add an orphan.");case 12:if(!(isNaN(+r)||+r<2001||+r>4e3)&&Number.isInteger(+r)){e.next=16;break}throw new Error("Unsuccessful Transaction: Birth Year entered is problematic.");case 16:if("male"===i||"female"===i){e.next=18;break}throw new Error("Unsuccessful Transaction: Gender entered is problematic.");case 18:return e.next=20,G({name:n,birthYeaR:r,genderr:i,countrY:o});case 20:return e.t2=a,e.next=23,Y();case 23:e.t3=e.sent,(0,e.t2)(e.t3),Object(_.b)(Object(S.jsx)(A,{text:"Orphan was registered successfully."})),e.next=32;break;case 28:e.prev=28,e.t4=e.catch(1),Object(_.b)(Object(S.jsx)(I,{text:e.t4.toString()})),console.log({error:e.t4});case 32:return e.prev=32,d(!1),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[1,28,32,35]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,m().then((function(e){return e}));case 4:if(e.t0=e.sent,e.t1=Z,e.t0===e.t1){e.next=10;break}throw new Error("Only allowed accounts can unregister an orphan.");case 10:if("0"!==t){e.next=12;break}throw new Error("The member with id 0 cannot be unregistered.");case 12:return e.next=14,z({id:t});case 14:return e.t2=a,e.next=17,Y();case 17:e.t3=e.sent,(0,e.t2)(e.t3),Object(_.b)(Object(S.jsx)(A,{text:"Orphan with id "+t+" was unregistered successfully."})),e.next=26;break;case 22:e.prev=22,e.t4=e.catch(0),Object(_.b)(Object(S.jsx)(I,{text:e.t4.toString()})),console.log({error:e.t4});case 26:return e.prev=26,d(!1),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[0,22,26,29]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){j()}),[]);var O=[{dataField:"orphan_id",text:"Orphan ID",headerStyle:{width:"80px",textAlign:"center",verticalAlign:"middle",overflowWrap:"break-word"},sort:!0,sortFunc:function(e,t,n){return"asc"===n?t-e:e-t}},{dataField:"full_name",text:"Full Name",headerStyle:{width:"120px",textAlign:"center",verticalAlign:"middle",overflowWrap:"break-word"}},{dataField:"birth_year",text:"Birth Year",headerStyle:{width:"100px",textAlign:"center",verticalAlign:"middle",overflowWrap:"break-word"},formatter:function(e,t){return Object(S.jsxs)(S.Fragment,{children:[0===t.birth_year&&Object(S.jsx)("span",{children:"secret"}),0!==t.birth_year&&t.birth_year]})}},{dataField:"gender",text:"Gender",headerStyle:{width:"100px",textAlign:"center",verticalAlign:"middle",overflowWrap:"break-word"},formatter:function(e,t){return Object(S.jsxs)(S.Fragment,{children:[0===t.birth_year&&Object(S.jsx)("span",{children:"secret"}),!1===t.gender&&0!==t.birth_year&&"Male",!0===t.gender&&0!==t.birth_year&&"Female"]})}},{dataField:"sponsored_for",text:"Sponsored Days So Far",headerStyle:{width:"100px",textAlign:"center",verticalAlign:"middle",overflowWrap:"break-word"},sort:!0,sortFunc:function(e,t,n){return"asc"===n?t-e:e-t}},{dataField:"",text:"Unregister Orphan (only for Allowed Accounts)",headerStyle:{width:"100px",textAlign:"center",verticalAlign:"middle",overflowWrap:"break-word"},editable:!1,formatter:function(e,t){return Object(S.jsx)("button",{className:"btn btn-danger btn-xs",onClick:function(){return x(t.orphan_id)},children:"Unreg"})}}];return Object(S.jsx)(S.Fragment,{children:u?Object(S.jsx)(L,{}):Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(K,{submit_form:h}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(W.a,{className:"mb-2 justify-content-md-center mt-1",children:Object(S.jsx)(B.a,{className:"col-md-auto",children:Object(S.jsx)("h1",{style:{textAlign:"center"},className:"justify-content-center",children:"Table of Orphans To Be Sponsored"})})}),Object(S.jsx)(X,{add:p}),Object(S.jsx)("div",{class:"table-responsive-md",children:Object(S.jsx)(U.a,{keyField:"orphan_id",classes:"mt-3",data:n,columns:O,defaultSorted:[{dataField:"orphan_id",order:"desc"}],rowStyle:{textAlign:"center",verticalAlign:"middle",fontWeight:"500",overflowWrap:"break-word"},striped:!0,hover:!0,condensed:!0})})]})})})},ee=function(e){var t=e.name,n=e.login,r=e.coverImg;return r?Object(S.jsx)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:Object(S.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(S.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"400px"},children:Object(S.jsx)("img",{src:r,alt:""})}),Object(S.jsx)("h1",{children:t}),Object(S.jsx)("h6",{children:"Please connect your Near wallet to continue to the Dapp."}),Object(S.jsx)(M.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-2",children:"Connect Wallet"})]})}):null};ee.defaultProps={name:""};var te=ee,ne=n.p+"static/media/cover.63510826.jpg",re=(n(281),function(){var e=window.walletConnection.account(),t=Object(r.useState)("0"),n=Object(i.a)(t,2),a=n[0],c=n[1],d=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=c,t.next=4,O();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[d]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(F,{}),e.accountId?Object(S.jsxs)(l.a,{fluid:"md",children:[Object(S.jsx)(u.a,{className:"justify-content-end pt-3 pb-5",children:Object(S.jsx)(u.a.Item,{children:Object(S.jsx)(C,{address:e.accountId,amount:a,symbol:"NEAR",logout:v})})}),Object(S.jsxs)("main",{children:[" ",Object(S.jsx)($,{})," "]})]}):Object(S.jsx)(te,{name:"Orphan Sponsorship",login:w,coverImg:ne})]})}),ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,301)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},ce=(n(287),n(284),n(285),c.a.createRoot(document.getElementById("root")));window.nearInitPromise=function(){return x.apply(this,arguments)}().then((function(){ce.render(Object(S.jsx)(re,{}))})).catch(console.error),ae()}},[[286,1,2]]]);
//# sourceMappingURL=main.1efe5e0b.chunk.js.map