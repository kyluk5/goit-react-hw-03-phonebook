(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),o=n(5),u=n(3),m=n(4),i=n(7),s=n(6),b=n(15),f=function(t){var e=t.submitForm,n=t.name,a=t.contactName,c=t.number,l=t.contactNumber;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("form",{onSubmit:e},r.a.createElement("span",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:n,onChange:a}),r.a.createElement("br",null),r.a.createElement("span",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"number",value:c,onChange:l}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add contact")))},d=function(t){var e=t.filtered,n=t.filterValue,a=t.deleteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Contacts"),r.a.createElement("span",null,"Find contacts by name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:n}),r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id},t.name," : ",t.number,r.a.createElement("button",{type:"button",id:t.id,onClick:a},"Delete"))}))))},p=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",name:"",number:""},t.contactName=function(e){t.setState({name:e.target.value})},t.contactNumber=function(e){t.setState({number:e.target.value})},t.filterValue=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.submitForm=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;if(n.contacts.find((function(e){return e.name===t.state.name})))alert("".concat(a," alredy exist"));else{var c={name:a,number:r,id:Object(b.a)()};t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[c]),filter:"",name:"",number:""}}))}},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getFilteredContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{submitForm:this.submitForm,name:this.state.name,contactName:this.contactName,number:this.state.number,contactNumber:this.contactNumber}),r.a.createElement(d,{filtered:t,filterValue:this.filterValue,deleteContact:this.deleteContact}))}}]),n}(a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.7382fe27.chunk.js.map