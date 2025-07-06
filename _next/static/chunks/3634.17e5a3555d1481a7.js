"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3634],{14707:(t,e,s)=>{s.d(e,{P:()=>r});var i=s(44656),r=(0,i.K2)((t,e,s,r)=>{t.attr("class",s);let{width:o,height:l,x:c,y:h}=n(t,e);(0,i.a$)(t,l,o,r);let d=a(c,h,o,l,e);t.attr("viewBox",d),i.Rm.debug(`viewBox configured: ${d} with padding: ${e}`)},"setupViewPortForSVG"),n=(0,i.K2)((t,e)=>{let s=t.node()?.getBBox()||{width:0,height:0,x:0,y:0};return{width:s.width+2*e,height:s.height+2*e,x:s.x,y:s.y}},"calculateDimensionsWithPadding"),a=(0,i.K2)((t,e,s,i,r)=>`${t-r} ${e-r} ${s} ${i}`,"createViewBox")},35690:(t,e,s)=>{s.d(e,{A:()=>n});var i=s(44656),r=s(25625),n=(0,i.K2)((t,e)=>{let s;return"sandbox"===e&&(s=(0,r.Ltv)("#i"+t)),("sandbox"===e?(0,r.Ltv)(s.nodes()[0].contentDocument.body):(0,r.Ltv)("body")).select(`[id="${t}"]`)},"getDiagramElement")},53634:(t,e,s)=>{s.d(e,{Zk:()=>c,q7:()=>B,tM:()=>Q,u4:()=>Z});var i=s(35690),r=s(14707),n=s(41362),a=s(87554),o=s(44656),l=function(){var t=(0,o.K2)(function(t,e,s,i){for(s=s||{},i=t.length;i--;s[t[i]]=e);return s},"o"),e=[1,2],s=[1,3],i=[1,4],r=[2,4],n=[1,9],a=[1,11],l=[1,16],c=[1,17],h=[1,18],d=[1,19],u=[1,33],p=[1,20],y=[1,21],g=[1,22],m=[1,23],S=[1,24],f=[1,26],_=[1,27],T=[1,28],E=[1,29],b=[1,30],k=[1,31],D=[1,32],C=[1,35],x=[1,36],$=[1,37],L=[1,38],A=[1,34],I=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],v=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],R=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],w={trace:(0,o.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"--\x3e":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"--\x3e",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,o.K2)(function(t,e,s,i,r,n,a){var o=n.length-1;switch(r){case 3:return i.setRootDoc(n[o]),n[o];case 4:this.$=[];break;case 5:"nl"!=n[o]&&(n[o-1].push(n[o]),this.$=n[o-1]);break;case 6:case 7:case 12:this.$=n[o];break;case 8:this.$="nl";break;case 13:let l=n[o-1];l.description=i.trimColon(n[o]),this.$=l;break;case 14:this.$={stmt:"relation",state1:n[o-2],state2:n[o]};break;case 15:let c=i.trimColon(n[o]);this.$={stmt:"relation",state1:n[o-3],state2:n[o-1],description:c};break;case 19:this.$={stmt:"state",id:n[o-3],type:"default",description:"",doc:n[o-1]};break;case 20:var h=n[o],d=n[o-2].trim();if(n[o].match(":")){var u=n[o].split(":");h=u[0],d=[d,u[1]]}this.$={stmt:"state",id:h,type:"default",description:d};break;case 21:this.$={stmt:"state",id:n[o-3],type:"default",description:n[o-5],doc:n[o-1]};break;case 22:this.$={stmt:"state",id:n[o],type:"fork"};break;case 23:this.$={stmt:"state",id:n[o],type:"join"};break;case 24:this.$={stmt:"state",id:n[o],type:"choice"};break;case 25:this.$={stmt:"state",id:i.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:n[o-1].trim(),note:{position:n[o-2].trim(),text:n[o].trim()}};break;case 29:this.$=n[o].trim(),i.setAccTitle(this.$);break;case 30:case 31:this.$=n[o].trim(),i.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:n[o-3],url:n[o-2],tooltip:n[o-1]};break;case 33:this.$={stmt:"click",id:n[o-3],url:n[o-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:n[o-1].trim(),classes:n[o].trim()};break;case 36:this.$={stmt:"style",id:n[o-1].trim(),styleClass:n[o].trim()};break;case 37:this.$={stmt:"applyClass",id:n[o-1].trim(),styleClass:n[o].trim()};break;case 38:i.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:i.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:i.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:i.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:n[o].trim(),type:"default",description:""};break;case 46:case 47:this.$={stmt:"state",id:n[o-2].trim(),classes:[n[o].trim()],type:"default",description:""}}},"anonymous"),table:[{3:1,4:e,5:s,6:i},{1:[3]},{3:5,4:e,5:s,6:i},{3:6,4:e,5:s,6:i},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],r,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:n,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:m,29:S,32:25,33:f,35:_,37:T,38:E,41:b,45:k,48:D,51:C,52:x,53:$,54:L,57:A},t(I,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:m,29:S,32:25,33:f,35:_,37:T,38:E,41:b,45:k,48:D,51:C,52:x,53:$,54:L,57:A},t(I,[2,7]),t(I,[2,8]),t(I,[2,9]),t(I,[2,10]),t(I,[2,11]),t(I,[2,12],{14:[1,40],15:[1,41]}),t(I,[2,16]),{18:[1,42]},t(I,[2,18],{20:[1,43]}),{23:[1,44]},t(I,[2,22]),t(I,[2,23]),t(I,[2,24]),t(I,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(I,[2,28]),{34:[1,49]},{36:[1,50]},t(I,[2,31]),{13:51,24:u,57:A},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(v,[2,44],{58:[1,56]}),t(v,[2,45],{58:[1,57]}),t(I,[2,38]),t(I,[2,39]),t(I,[2,40]),t(I,[2,41]),t(I,[2,6]),t(I,[2,13]),{13:58,24:u,57:A},t(I,[2,17]),t(R,r,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(I,[2,29]),t(I,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(I,[2,14],{14:[1,71]}),{4:n,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,72],22:d,24:u,25:p,26:y,27:g,28:m,29:S,32:25,33:f,35:_,37:T,38:E,41:b,45:k,48:D,51:C,52:x,53:$,54:L,57:A},t(I,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(I,[2,34]),t(I,[2,35]),t(I,[2,36]),t(I,[2,37]),t(v,[2,46]),t(v,[2,47]),t(I,[2,15]),t(I,[2,19]),t(R,r,{7:78}),t(I,[2,26]),t(I,[2,27]),{5:[1,79]},{5:[1,80]},{4:n,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,81],22:d,24:u,25:p,26:y,27:g,28:m,29:S,32:25,33:f,35:_,37:T,38:E,41:b,45:k,48:D,51:C,52:x,53:$,54:L,57:A},t(I,[2,32]),t(I,[2,33]),t(I,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:(0,o.K2)(function(t,e){if(e.recoverable)this.trace(t);else{var s=Error(t);throw s.hash=e,s}},"parseError"),parse:(0,o.K2)(function(t){var e=this,s=[0],i=[],r=[null],n=[],a=this.table,l="",c=0,h=0,d=0,u=n.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var m=p.yylloc;n.push(m);var S=p.options&&p.options.ranges;function f(){var t;return"number"!=typeof(t=i.pop()||p.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.K2)(function(t){s.length=s.length-2*t,r.length=r.length-t,n.length=n.length-t},"popStack"),(0,o.K2)(f,"lex");for(var _,T,E,b,k,D,C,x,$,L={};;){if(E=s[s.length-1],this.defaultActions[E]?b=this.defaultActions[E]:(null==_&&(_=f()),b=a[E]&&a[E][_]),void 0===b||!b.length||!b[0]){var A="";for(D in $=[],a[E])this.terminals_[D]&&D>2&&$.push("'"+this.terminals_[D]+"'");A=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(A,{text:p.match,token:this.terminals_[_]||_,line:p.yylineno,loc:m,expected:$})}if(b[0]instanceof Array&&b.length>1)throw Error("Parse Error: multiple actions possible at state: "+E+", token: "+_);switch(b[0]){case 1:s.push(_),r.push(p.yytext),n.push(p.yylloc),s.push(b[1]),_=null,T?(_=T,T=null):(h=p.yyleng,l=p.yytext,c=p.yylineno,m=p.yylloc,d>0&&d--);break;case 2:if(C=this.productions_[b[1]][1],L.$=r[r.length-C],L._$={first_line:n[n.length-(C||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(C||1)].first_column,last_column:n[n.length-1].last_column},S&&(L._$.range=[n[n.length-(C||1)].range[0],n[n.length-1].range[1]]),void 0!==(k=this.performAction.apply(L,[l,h,c,y.yy,b[1],r,n].concat(u))))return k;C&&(s=s.slice(0,-1*C*2),r=r.slice(0,-1*C),n=n.slice(0,-1*C)),s.push(this.productions_[b[1]][0]),r.push(L.$),n.push(L._$),x=a[s[s.length-2]][s[s.length-1]],s.push(x);break;case 3:return!0}}return!0},"parse")};function N(){this.yy={}}return w.lexer={EOF:1,parseError:(0,o.K2)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,o.K2)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,o.K2)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,o.K2)(function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,o.K2)(function(){return this._more=!0,this},"more"),reject:(0,o.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,o.K2)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,o.K2)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,o.K2)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,o.K2)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,o.K2)(function(t,e){var s,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},"test_match"),next:(0,o.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,s,i,r=this._currentRules(),n=0;n<r.length;n++)if((s=this._input.match(this.rules[r[n]]))&&(!e||s[0].length>e[0].length)){if(e=s,i=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(s,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,o.K2)(function(){var t=this.next();return t||this.lex()},"lex"),begin:(0,o.K2)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,o.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,o.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,o.K2)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,o.K2)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,o.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.K2)(function(t,e,s,i){switch(s){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:case 45:return 51;case 5:case 46:return 52;case 6:case 47:return 53;case 7:case 48:return 54;case 8:case 9:case 11:case 12:case 13:case 14:case 57:case 59:case 65:break;case 10:case 80:return 5;case 15:case 35:return this.pushState("SCALE"),17;case 16:case 36:return 18;case 17:case 23:case 37:case 52:case 55:this.popState();break;case 18:return this.begin("acc_title"),33;case 19:return this.popState(),"acc_title_value";case 20:return this.begin("acc_descr"),35;case 21:return this.popState(),"acc_descr_value";case 22:this.begin("acc_descr_multiline");break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 27:return this.popState(),this.pushState("CLASSDEFID"),42;case 28:return this.popState(),43;case 29:return this.pushState("CLASS"),48;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;case 31:return this.popState(),50;case 32:return this.pushState("STYLE"),45;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 34:return this.popState(),47;case 38:this.pushState("STATE");break;case 39:case 42:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 40:case 43:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 41:case 44:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";case 51:case 67:return this.popState(),"ID";case 53:return"STATE_DESCR";case 54:return 19;case 56:return this.popState(),this.pushState("struct"),20;case 58:return this.popState(),21;case 60:return this.begin("NOTE"),29;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:return this.popState(),this.pushState("NOTE_ID"),60;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 66:return"NOTE_TEXT";case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;case 69:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 70:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 71:case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return e.yytext=e.yytext.trim(),14;case 77:return 15;case 78:return 28;case 79:return 58;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}},(0,o.K2)(N,"Parser"),N.prototype=w,w.Parser=N,new N}();l.parser=l;var c=l,h="TB",d="state",u="root",p="relation",y="default",g="divider",m="fill:none",S="fill: #333",f="text",_="normal",T="rect",E="rectWithTitle",b="divider",k="roundedWithTitle",D="statediagram",C=`${D}-state`,x="transition",$=`${x} note-edge`,L=`${D}-note`,A=`${D}-cluster`,I=`${D}-cluster-alt`,v="parent",R="note",w="----",N=`${w}${R}`,O=`${w}${v}`,K=(0,o.K2)((t,e=h)=>{if(!t.doc)return e;let s=e;for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s},"getDir"),B={getClasses:(0,o.K2)(function(t,e){return e.db.getClasses()},"getClasses"),draw:(0,o.K2)(async function(t,e,s,l){o.Rm.info("REF0:"),o.Rm.info("Drawing state diagram (v2)",e);let{securityLevel:c,state:h,layout:d}=(0,o.D7)();l.db.extract(l.db.getRootDocV2());let u=l.db.getData(),p=(0,i.A)(e,c);u.type=l.type,u.layoutAlgorithm=d,u.nodeSpacing=h?.nodeSpacing||50,u.rankSpacing=h?.rankSpacing||50,u.markers=["barb"],u.diagramId=e,await (0,n.XX)(u,p);try{("function"==typeof l.db.getLinks?l.db.getLinks():new Map).forEach((t,e)=>{let s,i="string"==typeof e?e:"string"==typeof e?.id?e.id:"";if(!i)return void o.Rm.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(e));let r=p.node()?.querySelectorAll("g");if(r?.forEach(t=>{t.textContent?.trim()===i&&(s=t)}),!s)return void o.Rm.warn("⚠️ Could not find node matching text:",i);let n=s.parentNode;if(!n)return void o.Rm.warn("⚠️ Node has no parent, cannot wrap:",i);let a=document.createElementNS("http://www.w3.org/2000/svg","a"),l=t.url.replace(/^"+|"+$/g,"");if(a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l),a.setAttribute("target","_blank"),t.tooltip){let e=t.tooltip.replace(/^"+|"+$/g,"");a.setAttribute("title",e)}n.replaceChild(a,s),a.appendChild(s),o.Rm.info("\uD83D\uDD17 Wrapped node in <a> tag for:",i,t.url)})}catch(t){o.Rm.error("❌ Error injecting clickable links:",t)}a._K.insertTitle(p,"statediagramTitleText",h?.titleTopMargin??25,l.db.getDiagramTitle()),(0,r.P)(p,8,D,h?.useMaxWidth??!0)},"draw"),getDir:K},Y=new Map,F=0;function P(t="",e=0,s="",i=w){let r=null!==s&&s.length>0?`${i}${s}`:"";return`state-${t}${r}-${e}`}(0,o.K2)(P,"stateDomId");var G=(0,o.K2)((t,e,s,i,r,n,a,l)=>{o.Rm.trace("items",e),e.forEach(e=>{switch(e.stmt){case d:case y:U(t,e,s,i,r,n,a,l);break;case p:{U(t,e.state1,s,i,r,n,a,l),U(t,e.state2,s,i,r,n,a,l);let c={id:"edge"+F,start:e.state1.id,end:e.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:m,labelStyle:"",label:o.Y2.sanitizeText(e.description??"",(0,o.D7)()),arrowheadStyle:S,labelpos:"c",labelType:f,thickness:_,classes:x,look:a};r.push(c),F++}}})},"setupDoc"),j=(0,o.K2)((t,e=h)=>{let s=e;if(t.doc)for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s},"getDir");function W(t,e,s){if(!e.id||"</join></fork>"===e.id||"</choice>"===e.id)return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(t=>{let i=s.get(t);i&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...i.styles])}));let i=t.find(t=>t.id===e.id);i?Object.assign(i,e):t.push(e)}function z(t){return t?.classes?.join(" ")??""}function M(t){return t?.styles??[]}(0,o.K2)(W,"insertOrUpdateNode"),(0,o.K2)(z,"getClassesFromDbInfo"),(0,o.K2)(M,"getStylesFromDbInfo");var U=(0,o.K2)((t,e,s,i,r,n,a,l)=>{let c=e.id,h=s.get(c),d=z(h),u=M(h),p=(0,o.D7)();if(o.Rm.info("dataFetcher parsedItem",e,h,u),"root"!==c){let s=T;!0===e.start?s="stateStart":!1===e.start&&(s="stateEnd"),e.type!==y&&(s=e.type),Y.get(c)||Y.set(c,{id:c,shape:s,description:o.Y2.sanitizeText(c,p),cssClasses:`${d} ${C}`,cssStyles:u});let h=Y.get(c);e.description&&(Array.isArray(h.description)?(h.shape=E,h.description.push(e.description)):h.description?.length&&h.description.length>0?(h.shape=E,h.description===c?h.description=[e.description]:h.description=[h.description,e.description]):(h.shape=T,h.description=e.description),h.description=o.Y2.sanitizeTextOrArray(h.description,p)),h.description?.length===1&&h.shape===E&&("group"===h.type?h.shape=k:h.shape=T),!h.type&&e.doc&&(o.Rm.info("Setting cluster for XCX",c,j(e)),h.type="group",h.isGroup=!0,h.dir=j(e),h.shape=e.type===g?b:k,h.cssClasses=`${h.cssClasses} ${A} ${n?I:""}`);let D={labelStyle:"",shape:h.shape,label:h.description,cssClasses:h.cssClasses,cssCompiledStyles:[],cssStyles:h.cssStyles,id:c,dir:h.dir,domId:P(c,F),type:h.type,isGroup:"group"===h.type,padding:8,rx:10,ry:10,look:a};if(D.shape===b&&(D.label=""),t&&"root"!==t.id&&(o.Rm.trace("Setting node ",c," to be child of its parent ",t.id),D.parentId=t.id),D.centerLabel=!0,e.note){let t={labelStyle:"",shape:"note",label:e.note.text,cssClasses:L,cssStyles:[],cssCompiledStyles:[],id:c+N+"-"+F,domId:P(c,F,R),type:h.type,isGroup:"group"===h.type,padding:p.flowchart?.padding,look:a,position:e.note.position},s=c+O,n={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:h.cssClasses,cssStyles:[],id:c+O,domId:P(c,F,v),type:"group",isGroup:!0,padding:16,look:a,position:e.note.position};F++,n.id=s,t.parentId=s,W(i,n,l),W(i,t,l),W(i,D,l);let o=c,d=t.id;"left of"===e.note.position&&(o=t.id,d=c),r.push({id:o+"-"+d,start:o,end:d,arrowhead:"none",arrowTypeEnd:"",style:m,labelStyle:"",classes:$,arrowheadStyle:S,labelpos:"c",labelType:f,thickness:_,look:a})}else W(i,D,l)}e.doc&&(o.Rm.trace("Adding nodes children "),G(e,e.doc,s,i,r,!n,a,l))},"dataFetcher"),V=(0,o.K2)(()=>{Y.clear(),F=0},"reset"),X={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},H=(0,o.K2)(()=>new Map,"newClassesList"),J=(0,o.K2)(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),q=(0,o.K2)(t=>JSON.parse(JSON.stringify(t)),"clone"),Z=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=H(),this.documents={root:J()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=o.iN,this.setAccTitle=o.SV,this.getAccDescription=o.m7,this.setAccDescription=o.EI,this.setDiagramTitle=o.ke,this.getDiagramTitle=o.ab,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}static{(0,o.K2)(this,"StateDB")}static{this.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3}}extract(t){for(let e of(this.clear(!0),Array.isArray(t)?t:t.doc))switch(e.stmt){case d:this.addState(e.id.trim(),e.type,e.doc,e.description,e.note);break;case p:this.addRelation(e.state1,e.state2,e.description);break;case"classDef":this.addStyleClass(e.id.trim(),e.classes);break;case"style":this.handleStyleDef(e);break;case"applyClass":this.setCssClass(e.id.trim(),e.styleClass);break;case"click":this.addLink(e.id,e.url,e.tooltip)}let e=this.getStates(),s=(0,o.D7)();for(let t of(V(),U(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,s.look,this.classes),this.nodes))if(Array.isArray(t.label)){if(t.description=t.label.slice(1),t.isGroup&&t.description.length>0)throw Error(`Group nodes can only have label. Remove the additional description for node [${t.id}]`);t.label=t.label[0]}}handleStyleDef(t){let e=t.id.trim().split(","),s=t.styleClass.split(",");for(let t of e){let e=this.getState(t);if(!e){let s=t.trim();this.addState(s),e=this.getState(s)}e&&(e.styles=s.map(t=>t.replace(/;/g,"")?.trim()))}}setRootDoc(t){o.Rm.info("Setting root doc",t),this.rootDoc=t,1===this.version?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,s){if(e.stmt===p){this.docTranslator(t,e.state1,!0),this.docTranslator(t,e.state2,!1);return}if(e.stmt===d&&(e.id===X.START_NODE?(e.id=t.id+(s?"_start":"_end"),e.start=s):e.id=e.id.trim()),e.stmt!==u&&e.stmt!==d||!e.doc)return;let i=[],r=[];for(let t of e.doc)if(t.type===g){let e=q(t);e.doc=q(r),i.push(e),r=[]}else r.push(t);if(i.length>0&&r.length>0){let t={stmt:d,id:(0,a.$C)(),type:"divider",doc:q(r)};i.push(q(t)),e.doc=i}e.doc.forEach(t=>this.docTranslator(e,t,!0))}getRootDocV2(){return this.docTranslator({id:u,stmt:u},{id:u,stmt:u,doc:this.rootDoc},!0),{id:u,doc:this.rootDoc}}addState(t,e=y,s,i,r,n,a,l){let c=t?.trim();if(this.currentDocument.states.has(c)){let t=this.currentDocument.states.get(c);if(!t)throw Error(`State not found: ${c}`);t.doc||(t.doc=s),t.type||(t.type=e)}else o.Rm.info("Adding state ",c,i),this.currentDocument.states.set(c,{stmt:d,id:c,descriptions:[],type:e,doc:s,note:r,classes:[],styles:[],textStyles:[]});if(i&&(o.Rm.info("Setting state description",c,i),(Array.isArray(i)?i:[i]).forEach(t=>this.addDescription(c,t.trim()))),r){let t=this.currentDocument.states.get(c);if(!t)throw Error(`State not found: ${c}`);t.note=r,t.note.text=o.Y2.sanitizeText(t.note.text,(0,o.D7)())}n&&(o.Rm.info("Setting state classes",c,n),(Array.isArray(n)?n:[n]).forEach(t=>this.setCssClass(c,t.trim()))),a&&(o.Rm.info("Setting state styles",c,a),(Array.isArray(a)?a:[a]).forEach(t=>this.setStyle(c,t.trim()))),l&&(o.Rm.info("Setting state styles",c,a),(Array.isArray(l)?l:[l]).forEach(t=>this.setTextStyle(c,t.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:J()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=H(),t||(this.links=new Map,(0,o.IU)())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){o.Rm.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,s){this.links.set(t,{url:e,tooltip:s}),o.Rm.warn("Adding link",t,e,s)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===X.START_NODE?(this.startEndCount++,`${X.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=y){return t===X.START_NODE?X.START_TYPE:e}endIdIfNeeded(t=""){return t===X.END_NODE?(this.startEndCount++,`${X.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=y){return t===X.END_NODE?X.END_TYPE:e}addRelationObjs(t,e,s=""){let i=this.startIdIfNeeded(t.id.trim()),r=this.startTypeIfNeeded(t.id.trim(),t.type),n=this.startIdIfNeeded(e.id.trim()),a=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(i,r,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(n,a,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:i,id2:n,relationTitle:o.Y2.sanitizeText(s,(0,o.D7)())})}addRelation(t,e,s){if("object"==typeof t&&"object"==typeof e)this.addRelationObjs(t,e,s);else if("string"==typeof t&&"string"==typeof e){let i=this.startIdIfNeeded(t.trim()),r=this.startTypeIfNeeded(t),n=this.endIdIfNeeded(e.trim()),a=this.endTypeIfNeeded(e);this.addState(i,r),this.addState(n,a),this.currentDocument.relations.push({id1:i,id2:n,relationTitle:s?o.Y2.sanitizeText(s,(0,o.D7)()):void 0})}}addDescription(t,e){let s=this.currentDocument.states.get(t),i=e.startsWith(":")?e.replace(":","").trim():e;s?.descriptions?.push(o.Y2.sanitizeText(i,(0,o.D7)()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});let s=this.classes.get(t);e&&s&&e.split(X.STYLECLASS_SEP).forEach(t=>{let e=t.replace(/([^;]*);/,"$1").trim();if(RegExp(X.COLOR_KEYWORD).exec(t)){let t=e.replace(X.FILL_KEYWORD,X.BG_FILL).replace(X.COLOR_KEYWORD,X.FILL_KEYWORD);s.textStyles.push(t)}s.styles.push(e)})}getClasses(){return this.classes}setCssClass(t,e){t.split(",").forEach(t=>{let s=this.getState(t);if(!s){let e=t.trim();this.addState(e),s=this.getState(e)}s?.classes?.push(e)})}setStyle(t,e){this.getState(t)?.styles?.push(e)}setTextStyle(t,e){this.getState(t)?.textStyles?.push(e)}getDirectionStatement(){return this.rootDoc.find(t=>"dir"===t.stmt)}getDirection(){return this.getDirectionStatement()?.value??"TB"}setDirection(t){let e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:"dir",value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){let t=(0,o.D7)();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:K(this.getRootDocV2())}}getConfig(){return(0,o.D7)().state}},Q=(0,o.K2)(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles")}}]);