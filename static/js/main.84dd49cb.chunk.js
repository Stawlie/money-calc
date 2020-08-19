(this.webpackJsonpworkshop=this.webpackJsonpworkshop||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),s=a.n(r),c=a(5),l=a(3),i=a(4),m=a(7),u=a(6);var d=function(e){var t=e.resultIncome,a=e.resultExpenses,n=e.totalBalance;return o.a.createElement("section",{className:"total"},o.a.createElement("header",{className:"total__header"},o.a.createElement("h3",null,"\u0411\u0430\u043b\u0430\u043d\u0441"),o.a.createElement("p",{className:"total__balance"},n," \u20bd")),o.a.createElement("div",{className:"total__main"},o.a.createElement("div",{className:"total__main-item total__income"},o.a.createElement("h4",null,"\u0414\u043e\u0445\u043e\u0434\u044b"),o.a.createElement("p",{className:"total__money total__money-income"},t," \u20bd")),o.a.createElement("div",{className:"total__main-item total__expenses"},o.a.createElement("h4",null,"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),o.a.createElement("p",{className:"total__money total__money-expenses"},a," \u20bd"))))},p=function(e){var t=e.transaction,a=e.delTransaction;return o.a.createElement("li",{className:"history__item ".concat(t.add?"history__item-plus":"history__item-minus")},t.description,o.a.createElement("span",{className:"history__money"},t.amount," \u20bd"),o.a.createElement("button",{className:"history__delete",onClick:function(){return a(t.id)}},"x"))};var _=function(e){var t=e.transactions,a=e.delTransaction;return o.a.createElement("section",{className:"history"},o.a.createElement("h3",null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"),o.a.createElement("ul",{className:"history__list"},t.map((function(e){return o.a.createElement(p,{key:e.id,transaction:e,delTransaction:a})}))))};var E=function(e){var t=e.addTransaction,a=e.addDescription,n=e.addAmount,r=e.description,s=e.amount,c=function(e){if(""!==r&&""!==s)return function(){return t(e)}};return o.a.createElement("section",{className:"operation"},o.a.createElement("h3",null,"\u041d\u043e\u0432\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("form",{id:"form"},o.a.createElement("label",null,o.a.createElement("input",{type:"text",className:"operation__fields operation__name",placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",onChange:a,value:r})),o.a.createElement("label",null,o.a.createElement("input",{type:"number",className:"operation__fields operation__amount",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onChange:n,value:s})),o.a.createElement("div",{className:"operation__btns"},o.a.createElement("button",{onClick:c(!1),type:"button",className:"operation__btn operation__btn-subtract"},"\u0420\u0410\u0421\u0425\u041e\u0414"),o.a.createElement("button",{onClick:c(!0),type:"button",className:"operation__btn operation__btn-add"},"\u0414\u041e\u0425\u041e\u0414"))))},h=(a(13),a(14),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={transactions:JSON.parse(localStorage.getItem("calcMoney"))||[],description:"",amount:"",resultIncome:0,resultExpenses:0,totalBalance:0},e.addTransaction=function(t){var a=Object(c.a)(e.state.transactions);a.push({id:"cmr".concat((+new Date).toString(16)),description:e.state.description,amount:e.state.amount,add:t}),e.setState({transactions:a,description:"",amount:""},e.getTotalBalance)},e.addAmount=function(t){e.setState({amount:t.target.value})},e.addDescription=function(t){e.setState({description:t.target.value})},e.getIncomes=function(){return e.state.transactions.reduce((function(e,t){return t.add?+t.amount+ +e:+e}),0)},e.getExpenses=function(){return e.state.transactions.reduce((function(e,t){return t.add?+e:+t.amount+ +e}),0)},e.addStorage=function(){localStorage.setItem("calcMoney",JSON.stringify(e.state.transactions))},e.delTransaction=function(t){var a=e.state.transactions.filter((function(e){return e.id!==t}));e.setState({transactions:a},e.getTotalBalance)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getTotalBalance()}},{key:"componentDidUpdate",value:function(){this.addStorage()}},{key:"getTotalBalance",value:function(){var e=this.getIncomes(),t=this.getExpenses(),a=e-t;this.setState({resultIncome:e,resultExpenses:t,totalBalance:a})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"\u041a\u043e\u0448\u0435\u043b\u0435\u043a"),o.a.createElement("h2",null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432")),o.a.createElement("main",null,o.a.createElement("div",{className:"container"},o.a.createElement(d,{resultIncome:this.state.resultIncome,resultExpenses:this.state.resultExpenses,totalBalance:this.state.totalBalance}),o.a.createElement(_,{transactions:this.state.transactions,delTransaction:this.delTransaction}),o.a.createElement(E,{addAmount:this.addAmount,addDescription:this.addDescription,addTransaction:this.addTransaction,description:this.state.description,amount:this.state.amount}))))}}]),a}(o.a.Component));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.84dd49cb.chunk.js.map