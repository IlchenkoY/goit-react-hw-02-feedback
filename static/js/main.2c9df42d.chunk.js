(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),o=n(3),i=n.n(o),s=(n(17),n(18),n(4)),d=n(5),u=n(6),b=n(11),l=n(10),j=n(7),h=n(9).a.button(c||(c=Object(j.a)(["\n  background-color: tomato;\n  border: 2px solid black;\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n  &:not(:last-child) {\n    margin-right: 5px;\n  }\n"])),(function(e){switch(e.option){case"good":return"green";case"neutral":return"yellow";case"bad":return"red";default:return"#000"}})),O=n(0),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(O.jsx)(O.Fragment,{children:t.map((function(e){return Object(O.jsx)(h,{type:"button",onClick:function(){return n(e)},option:e,children:e},e)}))})},f=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:["Good: ",t]}),Object(O.jsxs)("p",{children:["Neutral: ",n]}),Object(O.jsxs)("p",{children:["Bad: ",c]}),Object(O.jsxs)("p",{children:["Total: ",r]}),Object(O.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})},g=function(e){var t=e.title,n=e.children;return Object(O.jsxs)("section",{children:[t&&Object(O.jsx)("h2",{children:t}),n]})},k=function(e){var t=e.message;return Object(O.jsx)("p",{children:t})},v=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())||0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{title:"Please leave feedback",children:Object(O.jsx)(p,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(O.jsx)(g,{title:"Statistics",children:this.countTotalFeedback()?Object(O.jsx)(f,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(O.jsx)(k,{message:"There is no feedback"})})]})}}]),n}(r.Component);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2c9df42d.chunk.js.map