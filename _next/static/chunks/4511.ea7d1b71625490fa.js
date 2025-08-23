"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4511],{6540:(t,e,a)=>{function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>r}),(0,a(74504).K2)(r,"populateCommonDb")},54511:(t,e,a)=>{a.d(e,{diagram:()=>g});var r=a(6540),i=a(75868),l=a(10314),o=a(74504),s=a(34290),c=o.UI.packet,n=class{constructor(){this.packet=[],this.setAccTitle=o.SV,this.getAccTitle=o.iN,this.setDiagramTitle=o.ke,this.getDiagramTitle=o.ab,this.getAccDescription=o.m7,this.setAccDescription=o.EI}static{(0,o.K2)(this,"PacketDB")}getConfig(){let t=(0,i.$t)({...c,...(0,o.zj)().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){(0,o.IU)(),this.packet=[]}},d=(0,o.K2)((t,e)=>{(0,r.S)(t,e);let a=-1,i=[],l=1,{bitsPerRow:s}=e.getConfig();for(let{start:r,end:c,bits:n,label:d}of t.blocks){if(void 0!==r&&void 0!==c&&c<r)throw Error(`Packet block ${r} - ${c} is invalid. End must be greater than start.`);if((r??=a+1)!==a+1)throw Error(`Packet block ${r} - ${c??r} is not contiguous. It should start from ${a+1}.`);if(0===n)throw Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);for(c??=r+(n??1)-1,n??=c-r+1,a=c,o.Rm.debug(`Packet block ${r} - ${a} with label ${d}`);i.length<=s+1&&e.getPacket().length<1e4;){let[t,a]=k({start:r,end:c,bits:n,label:d},l,s);if(i.push(t),t.end+1===l*s&&(e.pushWord(i),i=[],l++),!a)break;({start:r,end:c,bits:n,label:d}=a)}}e.pushWord(i)},"populate"),k=(0,o.K2)((t,e,a)=>{if(void 0===t.start)throw Error("start should have been set during first phase");if(void 0===t.end)throw Error("end should have been set during first phase");if(t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];let r=e*a-1,i=e*a;return[{start:t.start,end:r,label:t.label,bits:r-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),p={parser:{yy:void 0},parse:(0,o.K2)(async t=>{let e=await (0,s.qg)("packet",t),a=p.parser?.yy;if(!(a instanceof n))throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");o.Rm.debug(e),d(e,a)},"parse")},h=(0,o.K2)((t,e,a,r)=>{let i=r.db,s=i.getConfig(),{rowHeight:c,paddingY:n,bitWidth:d,bitsPerRow:k}=s,p=i.getPacket(),h=i.getDiagramTitle(),f=c+n,g=f*(p.length+1)-(h?0:c),u=d*k+2,m=(0,l.D)(e);for(let[t,e]of(m.attr("viewbox",`0 0 ${u} ${g}`),(0,o.a$)(m,g,u,s.useMaxWidth),p.entries()))b(m,e,t,s);m.append("text").text(h).attr("x",u/2).attr("y",g-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),b=(0,o.K2)((t,e,a,{rowHeight:r,paddingX:i,paddingY:l,bitWidth:o,bitsPerRow:s,showBits:c})=>{let n=t.append("g"),d=a*(r+l)+l;for(let t of e){let e=t.start%s*o+1,a=(t.end-t.start+1)*o-i;if(n.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),n.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!c)continue;let l=t.end===t.start,k=d-2;n.append("text").attr("x",e+(l?a/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",l?"middle":"start").text(t.start),l||n.append("text").attr("x",e+a).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),f={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},g={parser:p,get db(){return new n},renderer:{draw:h},styles:(0,o.K2)(({packet:t}={})=>{let e=(0,i.$t)(f,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}}]);