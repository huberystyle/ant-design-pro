(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"8gNO":function(e,a,t){"use strict";t.r(a);t("7Kak");var s=t("9yH6"),l=(t("IzEo"),t("bx4M")),n=t("Y2fQ"),r=t("q1tI"),o=t.n(r),d=t("ucLW"),i=t("B6XH"),c=t("WD6q"),u=t.n(c);a.default=function(e){var a=e.dropdownGroup,t=e.salesType,r=e.loading,c=e.salesPieData,m=e.handleChangeSalesType;return o.a.createElement(l.a,{loading:r,className:u.a.salesCard,bordered:!1,title:o.a.createElement(n.FormattedMessage,{id:"dashboard-analysis.analysis.the-proportion-of-sales",defaultMessage:"The Proportion of Sales"}),style:{height:"100%"},extra:o.a.createElement("div",{className:u.a.salesCardExtra},a,o.a.createElement("div",{className:u.a.salesTypeRadio},o.a.createElement(s.a.Group,{value:t,onChange:m},o.a.createElement(s.a.Button,{value:"all"},o.a.createElement(n.FormattedMessage,{id:"dashboard-analysis.channel.all",defaultMessage:"ALL"})),o.a.createElement(s.a.Button,{value:"online"},o.a.createElement(n.FormattedMessage,{id:"dashboard-analysis.channel.online",defaultMessage:"Online"})),o.a.createElement(s.a.Button,{value:"stores"},o.a.createElement(n.FormattedMessage,{id:"dashboard-analysis.channel.stores",defaultMessage:"Stores"})))))},o.a.createElement("div",null,o.a.createElement("h4",{style:{marginTop:8,marginBottom:32}},o.a.createElement(n.FormattedMessage,{id:"dashboard-analysis.analysis.sales",defaultMessage:"Sales"})),o.a.createElement(d.g,{hasLegend:!0,subTitle:o.a.createElement(n.FormattedMessage,{id:"dashboard-analysis.analysis.sales",defaultMessage:"Sales"}),total:function(){return o.a.createElement(i.a,null,c.reduce(function(e,a){return a.y+e},0))},data:c,valueFormat:function(e){return o.a.createElement(i.a,null,e)},height:248,lineWidth:4})))}}}]);