(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={title:"PhoneForm_title__1uKxR",form:"PhoneForm_form__BYYHu",input_name:"PhoneForm_input_name__2aqXv",input_number:"PhoneForm_input_number__2IKGA",submit_btn:"PhoneForm_submit_btn__xbsQS"}},10:function(t,e,n){t.exports=n(15)},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),l=n(7),m=n(5),u=n(6),i=n(9),s=n(8),b=n(17),_=n(1),f=n.n(_),p=function(t){var e=t.submitForm,n=t.name,a=t.contactName,r=t.number,o=t.contactNumber;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:f.a.title},"Phonebook"),c.a.createElement("form",{className:f.a.form,onSubmit:e},c.a.createElement("span",null,"Name"),c.a.createElement("br",null),c.a.createElement("input",{className:f.a.input_name,type:"text",name:"name",value:n,onChange:a}),c.a.createElement("br",null),c.a.createElement("span",null,"Number"),c.a.createElement("br",null),c.a.createElement("input",{className:f.a.input_number,type:"text",name:"number",value:r,onChange:o}),c.a.createElement("br",null),c.a.createElement("button",{className:f.a.submit_btn,type:"submit"},"Add contact")))},d=n(2),h=n.n(d),E=function(t){var e=t.filtered,n=t.filterValue,a=t.deleteContact;return c.a.createElement("div",{className:h.a.search_info},c.a.createElement("h3",null,"Contacts"),c.a.createElement("span",null,"Find contacts by name"),c.a.createElement("br",null),c.a.createElement("input",{type:"text",onChange:n}),c.a.createElement("ul",{className:h.a.contact_list},e.map((function(t){return c.a.createElement("li",{className:h.a.contact_item,key:t.id},t.name," : ",t.number,c.a.createElement("button",{className:h.a.delete_btn,type:"button",id:t.id,onClick:a},"Delete"))}))))},v=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",name:"",number:""},t.contactName=function(e){t.setState({name:e.target.value})},t.contactNumber=function(e){t.setState({number:e.target.value})},t.filterValue=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.submitForm=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;if(n.contacts.find((function(e){return e.name===t.state.name})))alert("".concat(a," alredy exist"));else{var r={name:a,number:c,id:Object(b.a)()};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r]),filter:"",name:"",number:""}}))}},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getFilteredContacts();return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{submitForm:this.submitForm,name:this.state.name,contactName:this.contactName,number:this.state.number,contactNumber:this.contactNumber}),c.a.createElement(E,{filtered:t,filterValue:this.filterValue,deleteContact:this.deleteContact}))}}]),n}(a.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))},2:function(t,e,n){t.exports={search_info:"FindContact_search_info__2ZeQz",contact_list:"FindContact_contact_list__31KT3",contact_item:"FindContact_contact_item__2XukI",delete_btn:"FindContact_delete_btn__2pHSs"}}},[[10,1,2]]]);
//# sourceMappingURL=main.8e256891.chunk.js.map