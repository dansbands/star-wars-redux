(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"characters":[{"name":"Luke Skywalker","url":"https://swapi.dev/api/people/1/"},{"name":"Darth Vader","url":"https://swapi.dev/api/people/4/"},{"name":"Obi-wan Kenobi","url":"https://swapi.dev/api/people/unknown/"},{"name":"R2-D2","url":"https://swapi.dev/api/people/3/"}]}')},32:function(e,t,a){e.exports=a.p+"static/media/bb8.9a88c58c.gif"},33:function(e,t,a){e.exports=a.p+"static/media/logo2.12ba8707.jpg"},35:function(e,t,a){e.exports=a(50)},40:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(8),l=a.n(s),o=(a(40),a(9)),c=a(10),i=a(11),p=a(12),u=a(17),m=a(7);function d(e){return{type:"GET_PERSON_START",data:e}}function h(e){return e.films,{type:"GET_PERSON_SUCCESS",payload:e}}a(47);var f=a(22),g=a(6),E=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={characters:[],selectedCharacter:"",dropdownOpen:!1},e.toggle=function(){e.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))},e.renderDropdownItems=function(){return e.state.characters.map((function(e){return r.a.createElement("option",{key:e.url,value:e.name},e.name)}))},e.handleChange=function(t){var a=f.characters.find((function(e){return e.name===t.target.value}));e.setState({selectedCharacter:a}),e.props.handleChange(a)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({characters:f.characters})}},{key:"render",value:function(){return r.a.createElement(g.c,null,r.a.createElement(g.d,{type:"select",name:"select",onChange:this.handleChange,defaultValue:"Choose a character"},r.a.createElement("option",{value:"Choose a character",disabled:!0},"Choose a Character..."),this.renderDropdownItems()))}}]),a}(r.a.Component),v=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).formatDate=function(t){var a=e.getDayOfWeek(t),n=(t=t.split("-")).shift();return t.push(n),t[0]={"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"November",12:"December"}[t[0]],t=t.join(" "),t="".concat(a,", ").concat(t)},e.getDayOfWeek=function(e){var t=new Date(e).getDay();return isNaN(t)?null:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.row?"movie-row":"movie-card",t=this.props.row?"image-row":"image-card",a=["I","II","III","IV","V","VI","VII"][this.props.film.episode_id-1],n="https://dansbands.github.io/star-wars/img/posters/".concat(this.props.film.episode_id,".jpg");return r.a.createElement("div",{key:this.props.film.title,className:e,onClick:this.props.onClick},this.props.row?r.a.createElement(g.i,{className:"movie-row-content align-middle"},r.a.createElement(g.b,{md:2},r.a.createElement("img",{src:n,alt:"poster",className:t})),r.a.createElement(g.b,{md:5,className:"text-left align-middle"},r.a.createElement("h3",null,"Episode ",a,": ",this.props.film.title)),r.a.createElement(g.b,{md:5,className:"text-left align-middle"},r.a.createElement("h3",null,"Release Date: ",this.formatDate(this.props.film.release_date)))):r.a.createElement("div",null,r.a.createElement("img",{src:n,alt:"poster",className:t}),r.a.createElement("div",{className:"movie-caption"},r.a.createElement("h6",null,"Episode ",a,": "),r.a.createElement("h4",null,this.props.film.title),r.a.createElement("h6",null,"Release Date: ",this.formatDate(this.props.film.release_date)))))}}]),a}(r.a.Component),b=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).formatDate=function(t){var a=e.getDayOfWeek(t),n=(t=t.split("-")).shift();return t.push(n),t[0]={"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"November",12:"December"}[t[0]],t=t.join(" "),t="".concat(a,", ").concat(t)},e.getDayOfWeek=function(e){var t=new Date(e).getDay();return isNaN(t)?null:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=["I","II","III","IV","V","VI","VII"][e.episode_id-1],a="https://dansbands.github.io/star-wars/img/posters/".concat(e.episode_id,".jpg");return r.a.createElement("div",null,r.a.createElement(g.e,{isOpen:this.props.modal,toggle:this.props.toggleModal,className:"film-modal modal-lg"},r.a.createElement(g.h,{toggle:this.props.toggleModal},e&&e.release_date&&r.a.createElement("div",null,r.a.createElement("h3",null,"Episode ",t,": ",e.title),r.a.createElement("h5",null,"Release Date: ",this.formatDate(e.release_date)))),r.a.createElement(g.f,null,r.a.createElement(g.i,null,r.a.createElement(g.b,{md:4},r.a.createElement("img",{src:a,alt:"poster",className:"image-card"})),r.a.createElement(g.b,{md:8},r.a.createElement("h6",null,"Director: ",e.director),r.a.createElement("h6",null,"Producer: ",e.producer),r.a.createElement("div",{className:"crawl"},e.opening_crawl)))),r.a.createElement(g.g,null,r.a.createElement(g.a,{color:"primary",onClick:this.props.toggleModal},"Close")," ")))}}]),a}(r.a.Component),y=a(30),w=a.n(y),O=a(31),S=a.n(O),j=a(32),N=a.n(j),_=a(33),C=a.n(_),k=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={person:"",currentFilm:{},loading:!1,row:!1,modal:!1},e.handleChange=function(t){e.setState({person:t.name}),e.props.getPerson(t),e.showLoader()},e.sortFilms=function(e){return e=e.sort((function(e,t){return e.release_date<t.release_date?-1:e.release_date>t.release_date?1:0}))},e.renderFilms=function(t){return t.length?e.sortFilms(t).map((function(t){return r.a.createElement(v,{onClick:function(){return e.pickFilm(t)},film:t,row:e.state.row,key:t.episode_id})})):r.a.createElement("span",{style:{margin:"20px auto"}},"No films listed")},e.showLoader=function(){e.setState({loading:!0}),setTimeout((function(){return e.setState({loading:!1})}),1e3)},e.toggleRow=function(){e.setState({row:!e.state.row})},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.pickFilm=function(t){e.setState({currentFilm:t}),e.toggleModal()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.row?"active":"inactive",t=this.state.row?"inactive":"active";return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:C.a,alt:"Movie Poster",width:"150px"}),r.a.createElement("div",{className:"App-header-center"},r.a.createElement(E,{handleChange:this.handleChange})),r.a.createElement("div",{className:"App-header-right"},r.a.createElement(w.a,{onClick:this.toggleRow,className:t}),r.a.createElement(S.a,{onClick:this.toggleRow,className:e}))),this.props.loading||this.state.loading?r.a.createElement("div",{className:"movies"},r.a.createElement("img",{src:N.a,width:"200px",alt:"loading",className:"loader"})):null,this.state.person&&!this.state.loading&&r.a.createElement("h3",{className:"subheader-caption"},"Films that ",this.state.person," appears in:"),!1===this.props.loading&&this.props.films&&!!this.props.films.length&&r.a.createElement("div",{className:"movies"},this.renderFilms(this.props.films)),!1===this.props.loading&&!1===this.state.loading&&this.props.films&&0===this.props.films.length&&"No films available",!this.props.person&&r.a.createElement("div",{className:"welcome"},r.a.createElement("div",{className:"welcome-inner"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("h2",null,"Choose a Character"),r.a.createElement("h2",null,"Using the Menu Above"))),r.a.createElement(b,{modal:this.state.modal,toggleModal:this.toggleModal,data:this.state.currentFilm}))}}]),a}(r.a.Component),I=Object(u.b)((function(e){return{loading:e.personReducer.loading,person:e.personReducer.person,films:e.personReducer.films}}),(function(e){return Object(m.b)({getPerson:d},e)}))(k),T=(a(48),a(18)),D=Object(m.c)({personReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,person:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PERSON_START":return Object(T.a)({},e,{loading:!0});case"GET_PERSON_SUCCESS":return Object(T.a)({},e,{person:t.payload});case"GET_FILMS_SUCCESS":return Object(T.a)({},e,{loading:!1,films:t.payload});default:return e}}}),R=a(34),x=a(13),F=a.n(x),M=a(14),A=F.a.mark(P),G=F.a.mark(V),L=F.a.mark(J);function P(e){var t;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e.data.url).then((function(e){return e.json()}));case 3:return t=a.sent,a.next=6,V({type:"GET_FILMS_START",payload:t});case 6:return a.next=8,Object(M.a)(h(t));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(M.a)({type:"GET_PERSON_FAILURE",payload:a.t0});case 14:case"end":return a.stop()}}),A,null,[[0,10]])}function V(e){var t;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=[],e.payload.films&&e.payload.films.map((function(e){return fetch(e).then((function(e){return e.json().then((function(e){return t.push(e)}))}))})),a.next=5,Object(M.a)({type:"GET_FILMS_SUCCESS",payload:t});case 5:a.next=11;break;case 7:return a.prev=7,a.t0=a.catch(0),a.next=11,Object(M.a)({type:"GET_FILMS_FAILURE",payload:a.t0});case 11:case"end":return a.stop()}}),G,null,[[0,7]])}function J(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.b)("GET_PERSON_START",P);case 2:return e.next=4,Object(M.b)("GET_FILMS_START",V);case 4:case"end":return e.stop()}}),L)}var U=Object(R.a)(),W=Object(m.e)(D,Object(m.a)(U));U.run(J),l.a.render(r.a.createElement(u.a,{store:W},r.a.createElement(I,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7311d96f.chunk.js.map