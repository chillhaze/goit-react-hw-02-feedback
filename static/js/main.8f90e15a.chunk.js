(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={notification:"Notification_notification__1ICS1"}},18:function(e,t,n){},2:function(e,t,n){e.exports={container:"Statistics_container__1rDys",title:"Statistics_title__3P75A",wrapper:"Statistics_wrapper__29gRx",percentage:"Statistics_percentage__r52S4"}},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),r=(n(18),n(7)),o=n(8),l=n(9),d=n(13),b=n(11),j=n(12),u=n(4),p=n.n(u),_=n(0),h=function(e){var t=e.title,n=e.children;return Object(_.jsxs)("section",{className:p.a.Section,children:[t&&Object(_.jsxs)("h2",{className:p.a.title,children:[t,Object(_.jsx)(j.a,{className:p.a.logo})]}),n]})},O=n(2),f=n.n(O),v=function(e){var t=e.title,n=e.good,a=e.neutral,c=e.bad,i=e.total,s=e.positivePercentage;return Object(_.jsxs)("div",{className:f.a.container,children:[Object(_.jsx)("h2",{className:f.a.title,children:t}),Object(_.jsxs)("div",{className:f.a.wrapper,children:[Object(_.jsxs)("p",{children:["Good: ",n]}),Object(_.jsxs)("p",{children:["Neutral: ",a]}),Object(_.jsxs)("p",{children:["Bad: ",c]}),Object(_.jsxs)("p",{children:["Total: ",i]}),Object(_.jsxs)("p",{children:["Positive feedback:"," ",Object(_.jsxs)("span",{className:f.a.percentage,style:s<=49?{color:"rgb(244, 67, 54)"}:{color:"rgb(33 217 95)"},children:[s,"%"]})]})]})]})},x=n(3),g=n.n(x),k=function(e){var t=e.title,n=e.options,a=e.onLeaveFeedback;return Object(_.jsxs)("div",{className:g.a.container,children:[Object(_.jsx)("h2",{className:g.a.title,children:t}),Object(_.jsx)("div",{className:g.a.btn__wrapper,children:n.map((function(e){return Object(_.jsx)("button",{className:g.a.btn,onClick:function(){return a(e)},children:(t=e,t.charAt(0).toUpperCase()+t.slice(1))},e);var t}))})]})},N=n(10),m=n.n(N),S=function(){return Object(_.jsx)("div",{className:m.a.notification,children:"No feedback given"})},w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(n){return Object(r.a)({},t,e.state[t]+1)}))},e.totalFeedbacks=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,a=t.neutral,c=t.bad,i=n+a+c;return Math.round((i-(a+c))/i*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=this.totalFeedbacks(),n=this.countPositiveFeedbackPercentage();return Object(_.jsx)("div",{children:Object(_.jsxs)(h,{title:"Expresso caf\xe9",children:[Object(_.jsx)(k,{title:"Please leave feedback",options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback}),t?Object(_.jsx)(v,{title:"Statistics",good:e.good,neutral:e.neutral,bad:e.bad,total:t,positivePercentage:0===t?0:n}):Object(_.jsx)(S,{message:"No feedback given"})]})})}}]),n}(a.Component);s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(w,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"FeedbackOptions_container__1uslJ",title:"FeedbackOptions_title__wo7XN",btn__wrapper:"FeedbackOptions_btn__wrapper__2eNNY",btn:"FeedbackOptions_btn__3ZQI4"}},4:function(e,t,n){e.exports={Section:"Section_Section__3-if4",title:"Section_title__2J9mY",logo:"Section_logo__3-MI3"}}},[[20,1,2]]]);
//# sourceMappingURL=main.8f90e15a.chunk.js.map