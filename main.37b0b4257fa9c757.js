"use strict";(self.webpackChunkpwa_media_player=self.webpackChunkpwa_media_player||[]).push([[179],{5917:(ct,pe,M)=>{M.d(pe,{v:()=>be});var _=M(6763),y=M(7401),ne=M(7464),j=M(9080),U=M(9797);function Z(Te,Ve,ie){return isNaN(Te)||Te<=0?Ve:Te>=1?ie:new j.h((0,_.t7)(Te,Ve.r,ie.r),(0,_.t7)(Te,Ve.g,ie.g),(0,_.t7)(Te,Ve.b,ie.b),(0,_.t7)(Te,Ve.a,ie.a))}var ee=M(1134);function de(Te,Ve,ie=0,he=Te.length-1){if(he===ie)return Te[ie];const xe=Math.floor((he-ie)/2)+ie;return Ve(Te[xe])?de(Te,Ve,ie,xe):de(Te,Ve,xe+1,he)}var $e=M(8029),we=M(2643);const ve={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},be=Object.freeze({create:function qe(Te,Ve,ie){return be.from("number"==typeof Te?ee.w.create(Te,Ve,ie):Te)},from:function Re(Te,Ve){return(0,ee.m)(Te)?Fe.from(Te,Ve):Fe.from(ee.w.create(Te.r,Te.g,Te.b),Ve)}});class Fe{constructor(Ve,ie){this.closestIndexCache=new Map,this.source=Ve,this.swatches=ie,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(Ve,ie,he,xe){void 0===he&&(he=this.closestIndexOf(Ve));let ze=this.swatches;const le=this.lastIndex;let ue=he;return void 0===xe&&(xe=(0,$e.a)(Ve)),-1===xe&&(ze=this.reversedSwatches,ue=le-ue),de(ze,ce=>(0,we.$)(Ve,ce)>=ie,ue,le)}get(Ve){return this.swatches[Ve]||this.swatches[(0,_.uZ)(Ve,0,this.lastIndex)]}closestIndexOf(Ve){if(this.closestIndexCache.has(Ve.relativeLuminance))return this.closestIndexCache.get(Ve.relativeLuminance);let ie=this.swatches.indexOf(Ve);if(-1!==ie)return this.closestIndexCache.set(Ve.relativeLuminance,ie),ie;const he=this.swatches.reduce((xe,ze)=>Math.abs(ze.relativeLuminance-Ve.relativeLuminance)<Math.abs(xe.relativeLuminance-Ve.relativeLuminance)?ze:xe);return ie=this.swatches.indexOf(he),this.closestIndexCache.set(Ve.relativeLuminance,ie),ie}static saturationBump(Ve,ie){const xe=(0,y.lw)(Ve).s,ze=(0,y.lw)(ie);if(ze.s<xe){const le=new ne.H(ze.h,xe,ze.l);return(0,y.hP)(le)}return ie}static ramp(Ve){const ie=Ve/100;return ie>.5?(ie-.5)/.5:2*ie}static createHighResolutionPalette(Ve){const ie=[],he=(0,y.v1)(j.h.fromObject(Ve).roundToPrecision(4)),xe=(0,y.DR)(new U.R(0,he.a,he.b)).clamp().roundToPrecision(4),ze=(0,y.DR)(new U.R(50,he.a,he.b)).clamp().roundToPrecision(4),le=(0,y.DR)(new U.R(100,he.a,he.b)).clamp().roundToPrecision(4),ue=new j.h(0,0,0),W=new j.h(1,1,1),ce=le.equalValue(W)?0:14,je=xe.equalValue(ue)?0:14;for(let et=100+ce;et>=0-je;et-=.5){let Dt;Dt=et<0?Z(et/je+1,ue,xe):et<=50?Z(Fe.ramp(et),xe,ze):et<=100?Z(Fe.ramp(et),ze,le):Z((et-100)/ce,le,W),Dt=Fe.saturationBump(ze,Dt).roundToPrecision(4),ie.push(ee.w.from(Dt))}return new Fe(Ve,ie)}static adjustEnd(Ve,ie,he,xe){const ze=-1===xe?ie.swatches:ie.reversedSwatches,le=ce=>{const je=ie.closestIndexOf(ce);return 1===xe?ie.lastIndex-je:je};1===xe&&he.reverse();const ue=Ve(he[he.length-2]);if((0,_.fZ)((0,we.$)(he[he.length-1],he[he.length-2]),2)<ue){he.pop();const je=le(ie.colorContrast(ze[ie.lastIndex],ue,void 0,xe)),et=le(he[he.length-2]);let Oe=1;for(let Ee=he.length-(je-et)-1;Ee<he.length;Ee++){const Ye=le(he[Ee]);he[Ee]=ze[Ee===he.length-1?ie.lastIndex:Ye+Oe],Oe++}}1===xe&&he.reverse()}static createColorPaletteByContrast(Ve,ie){const he=Fe.createHighResolutionPalette(Ve),xe=ue=>(0,_.fZ)(ie.stepContrast+ie.stepContrast*(1-ue.relativeLuminance)*ie.stepContrastRamp,2),ze=[];let le=ie.preserveSource?Ve:he.swatches[0];ze.push(le);do{const ue=xe(le);le=he.colorContrast(le,ue,void 0,1),ze.push(le)}while(le.relativeLuminance>0);if(ie.preserveSource){le=Ve;do{const ue=xe(le);le=he.colorContrast(le,ue,void 0,-1),ze.unshift(le)}while(le.relativeLuminance<1)}return this.adjustEnd(xe,he,ze,-1),ie.preserveSource&&this.adjustEnd(xe,he,ze,1),ze}static from(Ve,ie){const he=void 0===ie?ve:Object.assign(Object.assign({},ve),ie);return new Fe(Ve,Object.freeze(Fe.createColorPaletteByContrast(Ve,he)))}}},1134:(ct,pe,M)=>{M.d(pe,{m:()=>U,w:()=>j});var _=M(9080),y=M(7401),ne=M(2643);const j=Object.freeze({create:(re,fe,q)=>new Z(re,fe,q),from:re=>new Z(re.r,re.g,re.b)});function U(re){const fe={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const q in fe)if(typeof fe[q]!=typeof re[q])return!1;return!0}class Z extends _.h{constructor(fe,q,oe){super(fe,q,oe,1),this.toColorString=this.toStringHexRGB,this.contrast=ne.$.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,y.hM)(this)}static fromObject(fe){return new Z(fe.r,fe.g,fe.b)}}},8720:(ct,pe,M)=>{M.d(pe,{C:()=>y,h:()=>ne});var _=M(1134);function y(j){return _.w.create(j,j,j)}var ne=function(j){return j[j.LightMode=.98]="LightMode",j[j.DarkMode=.15]="DarkMode",j}(ne||{})},8029:(ct,pe,M)=>{M.d(pe,{a:()=>y});var _=M(5809);function y(ne){return(0,_._)(ne)?-1:1}},5809:(ct,pe,M)=>{M.d(pe,{_:()=>y});const _=(-.1+Math.sqrt(.21))/2;function y(ne){return ne.relativeLuminance<=_}},2643:(ct,pe,M)=>{function _(y,ne){return((y.relativeLuminance>ne.relativeLuminance?y:ne).relativeLuminance+.05)/((y.relativeLuminance>ne.relativeLuminance?ne:y).relativeLuminance+.05)}M.d(pe,{$:()=>_})},277:(ct,pe,M)=>{M.d(pe,{R6v:()=>Mi,UEO:()=>yo,Woc:()=>li,v$0:()=>Ut,OCG:()=>Lo,B23:()=>uo,Avx:()=>lr,N7s:()=>Mo,VNr:()=>Ms,kb6:()=>Ii,ndN:()=>os,D9J:()=>us,L8d:()=>Uo,goi:()=>Ts,kpA:()=>ho,oi3:()=>Hs,fbQ:()=>ia,z0S:()=>ol,nfe:()=>Sr,LQ3:()=>bn,q2d:()=>To,SVJ:()=>ts,UWU:()=>Vs,hVk:()=>lo,_5n:()=>Pn,o7V:()=>Io,VFZ:()=>Zt,IfY:()=>zn,a2F:()=>an,yGg:()=>vn,vxp:()=>Br,PpH:()=>Qi,lJV:()=>to,w41:()=>Is,rSr:()=>Sn,aIT:()=>Yo,Gy2:()=>kr,hDF:()=>Di,VQw:()=>rr,XiB:()=>$o,jWw:()=>ss,q_p:()=>or,bWE:()=>ci,W3V:()=>no,vFq:()=>Mn,pB6:()=>ks,rFm:()=>Gr,Zbo:()=>po,Tm7:()=>fi,EL3:()=>fo,smF:()=>yr,_Bj:()=>pn,efx:()=>Hr,Y5u:()=>$i,abR:()=>No,RJY:()=>Yn,YL4:()=>Xt,wFS:()=>ba,MYN:()=>Fn,_ii:()=>Nn,KTo:()=>Ni,d$x:()=>qo,TuC:()=>Si,_jX:()=>br,sG3:()=>Qo,gs2:()=>$n,s0z:()=>hs,IU$:()=>Ir,QpD:()=>qn,fqe:()=>on,DFW:()=>Bi,jql:()=>$t,qDs:()=>zr,hP0:()=>A,Vt5:()=>Ss,UCF:()=>mo,Dgm:()=>I,sc1:()=>gr,P0N:()=>g,Ttg:()=>me,Q5n:()=>He,axZ:()=>Ne,QPb:()=>De,CHi:()=>te,s55:()=>ta,yvm:()=>sn,c1L:()=>it,IMz:()=>as,_ro:()=>Ft,xBI:()=>ft,U_Q:()=>Xe,dtw:()=>yt,hD7:()=>xs,Bxy:()=>Ao,QPc:()=>ut,rnN:()=>Wo,zt3:()=>ei,iAs:()=>xt,Ja_:()=>x,akT:()=>nt,fd1:()=>sr,ekh:()=>Vn,gKw:()=>Lt,rU8:()=>ot,Han:()=>zt,cSu:()=>St,Ww_:()=>Fi,RUt:()=>_i,sNp:()=>mn,FMB:()=>Xr,vgC:()=>Vr,G8g:()=>Ot,Tp7:()=>tt,MwG:()=>jr,PwC:()=>Ce,GQL:()=>Ae,b3W:()=>K,mWK:()=>rt,YQw:()=>Ht,I7_:()=>Mt,ipv:()=>Tn,pqD:()=>Cn,yGZ:()=>en,IWd:()=>pr,SZp:()=>ns,iL4:()=>ir,CXZ:()=>Ci,NIE:()=>Es,n5T:()=>is,Zaf:()=>rs,dm2:()=>Li,yDy:()=>ii});var _=M(1365),y=M(1544),ne=M(5917),j=M(6909),U=M(1134);const Z=U.w.create(1,1,1),re=U.w.create(0,0,0),fe=U.w.create(.5,.5,.5),q=(0,j.in)("#0078D4"),oe=U.w.create(q.r,q.g,q.b);function P(S,Le,Me,Tt,Qn){const bi=Zi=>Zi.contrast(Z)>=Qn?Z:re,Kt=bi(S),In=bi(Le);return{rest:Kt,hover:In,active:Kt.relativeLuminance===In.relativeLuminance?Kt:bi(Me),focus:bi(Tt)}}var Q=M(9080),ee=M(7401),Ee=M(8029),Ye=M(2643);class Ke{constructor(Le,Me,Tt,Qn){this.toColorString=()=>this.cssGradient,this.contrast=Ye.$.bind(null,this),this.createCSS=this.toColorString,this.color=new Q.h(Le,Me,Tt),this.cssGradient=Qn,this.relativeLuminance=(0,ee.hM)(this.color),this.r=Le,this.g=Me,this.b=Tt}static fromObject(Le,Me){return new Ke(Le.r,Le.g,Le.b,Me)}}const ht=new Q.h(0,0,0),dt=new Q.h(1,1,1);function Qt(S,Le,Me,Tt,Qn,bi,Kt,In,gi=10,wi=!1){const Zi=S.closestIndexOf(Le);function cr(Xi){if(wi){const Gs=S.closestIndexOf(Le),aa=S.get(Gs),dl=Xi.relativeLuminance<Le.relativeLuminance?ht:dt,hl=(0,ee.PJ)((0,j.in)(Xi.toColorString()),(0,j.in)(aa.toColorString()),dl).roundToPrecision(2),Ua=function Oe(S,Le){return Le.a>=1?Le:Le.a<=0?new Q.h(S.r,S.g,S.b,1):new Q.h(Le.a*Le.r+(1-Le.a)*S.r,Le.a*Le.g+(1-Le.a)*S.g,Le.a*Le.b+(1-Le.a)*S.b,1)}((0,j.in)(Le.toColorString()),hl);return U.w.from(Ua)}return Xi}void 0===In&&(In=(0,Ee.a)(Le));const Ar=Zi+In*Me,ja=Ar+In*(Tt-Me),Ha=Ar+In*(Qn-Me),Oi=Ar+In*(bi-Me),Eo=-1===In?0:100-gi,ul=-1===In?gi:100;function wr(Xi,Gs){const aa=S.get(Xi);if(Gs){const dl=S.get(Xi+In*Kt),hl=-1===In?dl:aa,Ua=-1===In?aa:dl,rc=`linear-gradient(${cr(hl).toColorString()} ${Eo}%, ${cr(Ua).toColorString()} ${ul}%)`;return Ke.fromObject(hl,rc)}return cr(aa)}return{rest:wr(Ar,!0),hover:wr(ja,!0),active:wr(Ha,!1),focus:wr(Oi,!0)}}var Pt=M(5809);function dn(S,Le,Me,Tt,Qn,bi,Kt,In){null==In&&(In=(0,Ee.a)(Le));const gi=S.closestIndexOf(S.colorContrast(Le,Me));return{rest:S.get(gi+In*Tt),hover:S.get(gi+In*Qn),active:S.get(gi+In*bi),focus:S.get(gi+In*Kt)}}function Gn(S,Le,Me,Tt,Qn,bi,Kt){const In=S.closestIndexOf(Le);return null==Kt&&(Kt=(0,Ee.a)(Le)),{rest:S.get(In+Kt*Me),hover:S.get(In+Kt*Tt),active:S.get(In+Kt*Qn),focus:S.get(In+Kt*bi)}}function vi(S,Le,Me,Tt,Qn,bi,Kt=void 0,In,gi,wi,Zi,cr=void 0){return(0,Pt._)(Le)?Gn(S,Le,In,gi,wi,Zi,cr):Gn(S,Le,Me,Tt,Qn,bi,Kt)}var nr=M(8720);function Er(S,Le){return S.closestIndexOf((0,nr.C)(Le))}function Nr(S,Le,Me){return S.get(Er(S,Le)+-1*Me)}const{create:Be}=_.DesignToken;function wt(S){return _.DesignToken.create({name:S,cssCustomPropertyName:null})}const Io=Be("direction").withDefault(y.N.ltr),Zt=Be("disabled-opacity").withDefault(.3),Sr=Be("base-height-multiplier").withDefault(8),bn=Be("base-horizontal-spacing-multiplier").withDefault(3),lo=Be("density").withDefault(0),Pn=Be("design-unit").withDefault(4),Vs=Be("control-corner-radius").withDefault(4),Sn=Be("layer-corner-radius").withDefault(8),zt=Be("stroke-width").withDefault(1),Br=Be("focus-stroke-width").withDefault(2),ts=Be("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),co=Be("font-weight").withDefault(400);function Wi(S){return Le=>{const Me=S.getValueFor(Le),Tt=co.getValueFor(Le);if(Me.endsWith("px")){const Qn=Number.parseFloat(Me.replace("px",""));if(Qn<=12)return`"wght" ${Tt}, "opsz" 8`;if(Qn>24)return`"wght" ${Tt}, "opsz" 36`}return`"wght" ${Tt}, "opsz" 10.5`}}const St=Be("type-ramp-base-font-size").withDefault("14px"),_i=Be("type-ramp-base-line-height").withDefault("20px"),Fi=Be("type-ramp-base-font-variations").withDefault(Wi(St)),mn=Be("type-ramp-minus-1-font-size").withDefault("12px"),Vr=Be("type-ramp-minus-1-line-height").withDefault("16px"),Xr=Be("type-ramp-minus-1-font-variations").withDefault(Wi(mn)),Ot=Be("type-ramp-minus-2-font-size").withDefault("10px"),jr=Be("type-ramp-minus-2-line-height").withDefault("14px"),tt=Be("type-ramp-minus-2-font-variations").withDefault(Wi(Ot)),Ce=Be("type-ramp-plus-1-font-size").withDefault("16px"),K=Be("type-ramp-plus-1-line-height").withDefault("22px"),Ae=Be("type-ramp-plus-1-font-variations").withDefault(Wi(Ce)),rt=Be("type-ramp-plus-2-font-size").withDefault("20px"),Mt=Be("type-ramp-plus-2-line-height").withDefault("26px"),Ht=Be("type-ramp-plus-2-font-variations").withDefault(Wi(rt)),Tn=Be("type-ramp-plus-3-font-size").withDefault("24px"),en=Be("type-ramp-plus-3-line-height").withDefault("32px"),Cn=Be("type-ramp-plus-3-font-variations").withDefault(Wi(Tn)),pr=Be("type-ramp-plus-4-font-size").withDefault("28px"),ir=Be("type-ramp-plus-4-line-height").withDefault("36px"),ns=Be("type-ramp-plus-4-font-variations").withDefault(Wi(pr)),Ci=Be("type-ramp-plus-5-font-size").withDefault("32px"),is=Be("type-ramp-plus-5-line-height").withDefault("40px"),Es=Be("type-ramp-plus-5-font-variations").withDefault(Wi(Ci)),rs=Be("type-ramp-plus-6-font-size").withDefault("40px"),ii=Be("type-ramp-plus-6-line-height").withDefault("52px"),Li=Be("type-ramp-plus-6-font-variations").withDefault(Wi(rs)),To=Be("base-layer-luminance").withDefault(nr.h.LightMode),Mo=wt("accent-fill-rest-delta").withDefault(0),uo=wt("accent-fill-hover-delta").withDefault(-2),li=wt("accent-fill-active-delta").withDefault(-5),Ut=wt("accent-fill-focus-delta").withDefault(0),ho=wt("accent-foreground-rest-delta").withDefault(0),Uo=wt("accent-foreground-hover-delta").withDefault(3),Ii=wt("accent-foreground-active-delta").withDefault(-8),os=wt("accent-foreground-focus-delta").withDefault(0),Fn=wt("neutral-fill-rest-delta").withDefault(-1),ss=wt("neutral-fill-hover-delta").withDefault(1),Di=wt("neutral-fill-active-delta").withDefault(0),rr=wt("neutral-fill-focus-delta").withDefault(0),Hr=wt("neutral-fill-input-rest-delta").withDefault(-1),fo=wt("neutral-fill-input-hover-delta").withDefault(1),or=wt("neutral-fill-input-active-delta").withDefault(0),po=wt("neutral-fill-input-focus-delta").withDefault(-2),Ki=wt("neutral-fill-input-alt-rest-delta").withDefault(2),zo=wt("neutral-fill-input-alt-hover-delta").withDefault(4),Zn=wt("neutral-fill-input-alt-active-delta").withDefault(6),ko=wt("neutral-fill-input-alt-focus-delta").withDefault(2),Xt=wt("neutral-fill-layer-rest-delta").withDefault(-2),qi=wt("neutral-fill-layer-hover-delta").withDefault(-3),xr=wt("neutral-fill-layer-active-delta").withDefault(-3),wn=wt("neutral-fill-layer-alt-rest-delta").withDefault(-1),go=wt("neutral-fill-secondary-rest-delta").withDefault(3),Ur=wt("neutral-fill-secondary-hover-delta").withDefault(2),Jn=wt("neutral-fill-secondary-active-delta").withDefault(1),Oo=wt("neutral-fill-secondary-focus-delta").withDefault(3),zr=wt("neutral-fill-stealth-rest-delta").withDefault(0),on=wt("neutral-fill-stealth-hover-delta").withDefault(3),$n=wt("neutral-fill-stealth-active-delta").withDefault(2),Ir=wt("neutral-fill-stealth-focus-delta").withDefault(0),Tr=wt("neutral-fill-strong-rest-delta").withDefault(0),gr=wt("neutral-fill-strong-hover-delta").withDefault(8),Ss=wt("neutral-fill-strong-active-delta").withDefault(-5),mo=wt("neutral-fill-strong-focus-delta").withDefault(0),sr=wt("neutral-stroke-rest-delta").withDefault(8),Wo=wt("neutral-stroke-hover-delta").withDefault(12),as=wt("neutral-stroke-active-delta").withDefault(6),Ao=wt("neutral-stroke-focus-delta").withDefault(8),Js=wt("neutral-stroke-control-rest-delta").withDefault(3),Ro=wt("neutral-stroke-control-hover-delta").withDefault(5),Go=wt("neutral-stroke-control-active-delta").withDefault(5),ls=wt("neutral-stroke-control-focus-delta").withDefault(5),xs=wt("neutral-stroke-divider-rest-delta").withDefault(4),js=wt("neutral-stroke-layer-rest-delta").withDefault(3),yi=wt("neutral-stroke-layer-hover-delta").withDefault(3),cs=wt("neutral-stroke-layer-active-delta").withDefault(3),Zo=wt("neutral-stroke-strong-hover-delta").withDefault(0),ea=wt("neutral-stroke-strong-active-delta").withDefault(0),Ti=wt("neutral-stroke-strong-focus-delta").withDefault(0),Yo=Be("neutral-base-color").withDefault(fe),sn=wt("neutral-palette").withDefault(S=>ne.v.from(Yo.getValueFor(S))),Mi=Be("accent-base-color").withDefault(oe),qt=wt("accent-palette").withDefault(S=>ne.v.from(Mi.getValueFor(S))),ar=wt("neutral-layer-card-container-recipe").withDefault({evaluate:S=>Nr(sn.getValueFor(S),To.getValueFor(S),Xt.getValueFor(S))}),mr=(Be("neutral-layer-card-container").withDefault(S=>ar.getValueFor(S).evaluate(S)),wt("neutral-layer-floating-recipe").withDefault({evaluate:S=>function fr(S,Le,Me){return S.get(Er(S,Le)+Me)}(sn.getValueFor(S),To.getValueFor(S),Xt.getValueFor(S))})),ta=Be("neutral-layer-floating").withDefault(S=>mr.getValueFor(S).evaluate(S)),Jr=wt("neutral-layer-1-recipe").withDefault({evaluate:S=>function On(S,Le){return S.get(Er(S,Le))}(sn.getValueFor(S),To.getValueFor(S))}),vr=Be("neutral-layer-1").withDefault(S=>Jr.getValueFor(S).evaluate(S)),Gi=wt("neutral-layer-2-recipe").withDefault({evaluate:S=>Nr(sn.getValueFor(S),To.getValueFor(S),Xt.getValueFor(S))}),ri=(Be("neutral-layer-2").withDefault(S=>Gi.getValueFor(S).evaluate(S)),wt("neutral-layer-3-recipe").withDefault({evaluate:S=>function Vt(S,Le,Me){return S.get(Er(S,Le)+-1*Me*2)}(sn.getValueFor(S),To.getValueFor(S),Xt.getValueFor(S))})),_n=(Be("neutral-layer-3").withDefault(S=>ri.getValueFor(S).evaluate(S)),wt("neutral-layer-4-recipe").withDefault({evaluate:S=>function zi(S,Le,Me){return S.get(Er(S,Le)+-1*Me*3)}(sn.getValueFor(S),To.getValueFor(S),Xt.getValueFor(S))})),zn=(Be("neutral-layer-4").withDefault(S=>_n.getValueFor(S).evaluate(S)),Be("fill-color").withDefault(S=>vr.getValueFor(S)));var Fo=function(S){return S[S.normal=4.5]="normal",S[S.large=3]="large",S}(Fo||{});const eo=wt("accent-fill-recipe").withDefault({evaluate:(S,Le)=>function Hn(S,Le,Me,Tt,Qn,bi,Kt,In,gi,wi,Zi,cr,Ar,ja){return(0,Pt._)(Le)?dn(S,Le,gi,wi,Zi,cr,Ar,ja):dn(S,Le,Me,Tt,Qn,bi,Kt,In)}(qt.getValueFor(S),Le||zn.getValueFor(S),5,Mo.getValueFor(S),uo.getValueFor(S),li.getValueFor(S),Ut.getValueFor(S),void 0,8,Mo.getValueFor(S),uo.getValueFor(S),li.getValueFor(S),Ut.getValueFor(S),void 0)}),lr=Be("accent-fill-rest").withDefault(S=>eo.getValueFor(S).evaluate(S).rest),Lo=Be("accent-fill-hover").withDefault(S=>eo.getValueFor(S).evaluate(S).hover),yo=Be("accent-fill-active").withDefault(S=>eo.getValueFor(S).evaluate(S).active),Mr=Be("accent-fill-focus").withDefault(S=>eo.getValueFor(S).evaluate(S).focus),Wr=wt("foreground-on-accent-recipe").withDefault({evaluate:S=>P(lr.getValueFor(S),Lo.getValueFor(S),yo.getValueFor(S),Mr.getValueFor(S),Fo.normal)}),Is=Be("foreground-on-accent-rest").withDefault(S=>Wr.getValueFor(S).evaluate(S).rest),to=Be("foreground-on-accent-hover").withDefault(S=>Wr.getValueFor(S).evaluate(S).hover),Qi=Be("foreground-on-accent-active").withDefault(S=>Wr.getValueFor(S).evaluate(S).active),bo=(Be("foreground-on-accent-focus").withDefault(S=>Wr.getValueFor(S).evaluate(S).focus),wt("accent-foreground-recipe").withDefault({evaluate:(S,Le)=>dn(qt.getValueFor(S),Le||zn.getValueFor(S),9.5,ho.getValueFor(S),Uo.getValueFor(S),Ii.getValueFor(S),os.getValueFor(S))})),Ts=Be("accent-foreground-rest").withDefault(S=>bo.getValueFor(S).evaluate(S).rest),us=Be("accent-foreground-hover").withDefault(S=>bo.getValueFor(S).evaluate(S).hover),Ms=Be("accent-foreground-active").withDefault(S=>bo.getValueFor(S).evaluate(S).active),ds=(Be("accent-foreground-focus").withDefault(S=>bo.getValueFor(S).evaluate(S).focus),wt("accent-stroke-control-recipe").withDefault({evaluate:(S,Le)=>Qt(sn.getValueFor(S),Le||zn.getValueFor(S),-3,-3,-3,-3,10,1,void 0,!0)})),ol=Be("accent-stroke-control-rest").withDefault(S=>ds.getValueFor(S).evaluate(S,lr.getValueFor(S)).rest),ia=Be("accent-stroke-control-hover").withDefault(S=>ds.getValueFor(S).evaluate(S,Lo.getValueFor(S)).hover),Hs=Be("accent-stroke-control-active").withDefault(S=>ds.getValueFor(S).evaluate(S,yo.getValueFor(S)).active),Us=(Be("accent-stroke-control-focus").withDefault(S=>ds.getValueFor(S).evaluate(S,Mr.getValueFor(S)).focus),wt("neutral-fill-recipe").withDefault({evaluate:(S,Le)=>vi(sn.getValueFor(S),Le||zn.getValueFor(S),Fn.getValueFor(S),ss.getValueFor(S),Di.getValueFor(S),rr.getValueFor(S),void 0,2,3,1,2,void 0)})),ba=Be("neutral-fill-rest").withDefault(S=>Us.getValueFor(S).evaluate(S).rest),$o=Be("neutral-fill-hover").withDefault(S=>Us.getValueFor(S).evaluate(S).hover),kr=Be("neutral-fill-active").withDefault(S=>Us.getValueFor(S).evaluate(S).active),yr=(Be("neutral-fill-focus").withDefault(S=>Us.getValueFor(S).evaluate(S).focus),wt("neutral-fill-input-recipe").withDefault({evaluate:(S,Le)=>vi(sn.getValueFor(S),Le||zn.getValueFor(S),Hr.getValueFor(S),fo.getValueFor(S),or.getValueFor(S),po.getValueFor(S),void 0,2,3,1,0,void 0)})),pn=Be("neutral-fill-input-rest").withDefault(S=>yr.getValueFor(S).evaluate(S).rest),fi=Be("neutral-fill-input-hover").withDefault(S=>yr.getValueFor(S).evaluate(S).hover),Gr=(Be("neutral-fill-input-active").withDefault(S=>yr.getValueFor(S).evaluate(S).active),Be("neutral-fill-input-focus").withDefault(S=>yr.getValueFor(S).evaluate(S).focus)),pi=wt("neutral-fill-input-alt-recipe").withDefault({evaluate:(S,Le)=>vi(sn.getValueFor(S),Le||zn.getValueFor(S),Ki.getValueFor(S),zo.getValueFor(S),Zn.getValueFor(S),ko.getValueFor(S),1,Ki.getValueFor(S),Ki.getValueFor(S)-zo.getValueFor(S),Ki.getValueFor(S)-Zn.getValueFor(S),ko.getValueFor(S),1)}),ks=Be("neutral-fill-input-alt-rest").withDefault(S=>pi.getValueFor(S).evaluate(S).rest),Mn=Be("neutral-fill-input-alt-hover").withDefault(S=>pi.getValueFor(S).evaluate(S).hover),ci=Be("neutral-fill-input-alt-active").withDefault(S=>pi.getValueFor(S).evaluate(S).active),no=Be("neutral-fill-input-alt-focus").withDefault(S=>pi.getValueFor(S).evaluate(S).focus),No=wt("neutral-fill-layer-recipe").withDefault({evaluate:(S,Le)=>Gn(sn.getValueFor(S),Le||zn.getValueFor(S),Xt.getValueFor(S),qi.getValueFor(S),xr.getValueFor(S),Xt.getValueFor(S),1)}),Yn=Be("neutral-fill-layer-rest").withDefault(S=>No.getValueFor(S).evaluate(S).rest),Kn=(Be("neutral-fill-layer-hover").withDefault(S=>No.getValueFor(S).evaluate(S).hover),Be("neutral-fill-layer-active").withDefault(S=>No.getValueFor(S).evaluate(S).active),wt("neutral-fill-layer-alt-recipe").withDefault({evaluate:(S,Le)=>Gn(sn.getValueFor(S),Le||zn.getValueFor(S),wn.getValueFor(S),wn.getValueFor(S),wn.getValueFor(S),wn.getValueFor(S))})),$i=Be("neutral-fill-layer-alt-rest").withDefault(S=>Kn.getValueFor(S).evaluate(S).rest),Si=wt("neutral-fill-secondary-recipe").withDefault({evaluate:(S,Le)=>Gn(sn.getValueFor(S),Le||zn.getValueFor(S),go.getValueFor(S),Ur.getValueFor(S),Jn.getValueFor(S),Oo.getValueFor(S))}),br=Be("neutral-fill-secondary-rest").withDefault(S=>Si.getValueFor(S).evaluate(S).rest),qo=Be("neutral-fill-secondary-hover").withDefault(S=>Si.getValueFor(S).evaluate(S).hover),Nn=Be("neutral-fill-secondary-active").withDefault(S=>Si.getValueFor(S).evaluate(S).active),Ni=Be("neutral-fill-secondary-focus").withDefault(S=>Si.getValueFor(S).evaluate(S).focus),Bi=wt("neutral-fill-stealth-recipe").withDefault({evaluate:(S,Le)=>Gn(sn.getValueFor(S),Le||zn.getValueFor(S),zr.getValueFor(S),on.getValueFor(S),$n.getValueFor(S),Ir.getValueFor(S))}),$t=Be("neutral-fill-stealth-rest").withDefault(S=>Bi.getValueFor(S).evaluate(S).rest),qn=Be("neutral-fill-stealth-hover").withDefault(S=>Bi.getValueFor(S).evaluate(S).hover),Qo=Be("neutral-fill-stealth-active").withDefault(S=>Bi.getValueFor(S).evaluate(S).active),hs=Be("neutral-fill-stealth-focus").withDefault(S=>Bi.getValueFor(S).evaluate(S).focus),b=wt("neutral-fill-strong-recipe").withDefault({evaluate:(S,Le)=>dn(sn.getValueFor(S),Le||zn.getValueFor(S),4.5,Tr.getValueFor(S),gr.getValueFor(S),Ss.getValueFor(S),mo.getValueFor(S))}),g=Be("neutral-fill-strong-rest").withDefault(S=>b.getValueFor(S).evaluate(S).rest),I=Be("neutral-fill-strong-hover").withDefault(S=>b.getValueFor(S).evaluate(S).hover),A=Be("neutral-fill-strong-active").withDefault(S=>b.getValueFor(S).evaluate(S).active),X=(Be("neutral-fill-strong-focus").withDefault(S=>b.getValueFor(S).evaluate(S).focus),wt("neutral-foreground-recipe").withDefault({evaluate:(S,Le)=>dn(sn.getValueFor(S),Le||zn.getValueFor(S),16,0,-19,-30,0)})),te=Be("neutral-foreground-rest").withDefault(S=>X.getValueFor(S).evaluate(S).rest),De=Be("neutral-foreground-hover").withDefault(S=>X.getValueFor(S).evaluate(S).hover),me=Be("neutral-foreground-active").withDefault(S=>X.getValueFor(S).evaluate(S).active),Ne=(Be("neutral-foreground-focus").withDefault(S=>X.getValueFor(S).evaluate(S).focus),wt("neutral-foreground-hint-recipe").withDefault({evaluate:(S,Le)=>function hi(S,Le,Me){return S.colorContrast(Le,Me)}(sn.getValueFor(S),Le||zn.getValueFor(S),4.5)})),He=Be("neutral-foreground-hint").withDefault(S=>Ne.getValueFor(S).evaluate(S)),Pe=wt("neutral-stroke-recipe").withDefault({evaluate:(S,Le)=>Gn(sn.getValueFor(S),Le||zn.getValueFor(S),sr.getValueFor(S),Wo.getValueFor(S),as.getValueFor(S),Ao.getValueFor(S))}),nt=Be("neutral-stroke-rest").withDefault(S=>Pe.getValueFor(S).evaluate(S).rest),ut=Be("neutral-stroke-hover").withDefault(S=>Pe.getValueFor(S).evaluate(S).hover),it=Be("neutral-stroke-active").withDefault(S=>Pe.getValueFor(S).evaluate(S).active),Qe=(Be("neutral-stroke-focus").withDefault(S=>Pe.getValueFor(S).evaluate(S).focus),wt("neutral-stroke-control-recipe").withDefault({evaluate:(S,Le)=>Qt(sn.getValueFor(S),Le||zn.getValueFor(S),Js.getValueFor(S),Ro.getValueFor(S),Go.getValueFor(S),ls.getValueFor(S),5)})),Xe=Be("neutral-stroke-control-rest").withDefault(S=>Qe.getValueFor(S).evaluate(S).rest),ft=Be("neutral-stroke-control-hover").withDefault(S=>Qe.getValueFor(S).evaluate(S).hover),Ft=Be("neutral-stroke-control-active").withDefault(S=>Qe.getValueFor(S).evaluate(S).active),It=(Be("neutral-stroke-control-focus").withDefault(S=>Qe.getValueFor(S).evaluate(S).focus),wt("neutral-stroke-divider-recipe").withDefault({evaluate:(S,Le)=>function Rn(S,Le,Me){return S.get(S.closestIndexOf(Le)+(0,Ee.a)(Le)*Me)}(sn.getValueFor(S),Le||zn.getValueFor(S),xs.getValueFor(S))})),yt=Be("neutral-stroke-divider-rest").withDefault(S=>It.getValueFor(S).evaluate(S)),cn=wt("neutral-stroke-input-recipe").withDefault({evaluate:(S,Le)=>function fn(S,Le,Me,Tt,Qn,bi,Kt,In){const gi=S.closestIndexOf(Le),wi=(0,Ee.a)(Le),Zi=gi+wi*Me,cr=Zi+wi*(Tt-Me),Ar=Zi+wi*(Qn-Me),ja=Zi+wi*(bi-Me),Ha=`calc(100% - ${In})`;function Oi(Eo,ul){const wr=S.get(Eo);if(ul){const Xi=S.get(Eo+wi*Kt),Gs=`linear-gradient(${wr.toColorString()} ${Ha}, ${Xi.toColorString()} ${Ha}, ${Xi.toColorString()})`;return Ke.fromObject(wr,Gs)}return wr}return{rest:Oi(Zi,!0),hover:Oi(cr,!0),active:Oi(Ar,!1),focus:Oi(ja,!0)}}(sn.getValueFor(S),Le||zn.getValueFor(S),Js.getValueFor(S),Ro.getValueFor(S),Go.getValueFor(S),ls.getValueFor(S),20,zt.getValueFor(S)+"px")}),xt=Be("neutral-stroke-input-rest").withDefault(S=>cn.getValueFor(S).evaluate(S).rest),ei=Be("neutral-stroke-input-hover").withDefault(S=>cn.getValueFor(S).evaluate(S).hover),B=(Be("neutral-stroke-input-active").withDefault(S=>cn.getValueFor(S).evaluate(S).active),Be("neutral-stroke-input-focus").withDefault(S=>cn.getValueFor(S).evaluate(S).focus),wt("neutral-stroke-layer-recipe").withDefault({evaluate:(S,Le)=>Gn(sn.getValueFor(S),Le||zn.getValueFor(S),js.getValueFor(S),yi.getValueFor(S),cs.getValueFor(S),js.getValueFor(S))})),x=Be("neutral-stroke-layer-rest").withDefault(S=>B.getValueFor(S).evaluate(S).rest),Ue=(Be("neutral-stroke-layer-hover").withDefault(S=>B.getValueFor(S).evaluate(S).hover),Be("neutral-stroke-layer-active").withDefault(S=>B.getValueFor(S).evaluate(S).active),wt("neutral-stroke-strong-recipe").withDefault({evaluate:(S,Le)=>dn(sn.getValueFor(S),Le||zn.getValueFor(S),5.5,0,Zo.getValueFor(S),ea.getValueFor(S),Ti.getValueFor(S))})),ot=Be("neutral-stroke-strong-rest").withDefault(S=>Ue.getValueFor(S).evaluate(S).rest),Lt=Be("neutral-stroke-strong-hover").withDefault(S=>Ue.getValueFor(S).evaluate(S).hover),Vn=Be("neutral-stroke-strong-active").withDefault(S=>Ue.getValueFor(S).evaluate(S).active),Un=(Be("neutral-stroke-strong-focus").withDefault(S=>Ue.getValueFor(S).evaluate(S).focus),wt("focus-stroke-outer-recipe").withDefault({evaluate:S=>function ni(S,Le){return(0,Pt._)(Le)?Z:re}(sn.getValueFor(S),zn.getValueFor(S))})),vn=Be("focus-stroke-outer").withDefault(S=>Un.getValueFor(S).evaluate(S)),xi=wt("focus-stroke-inner-recipe").withDefault({evaluate:S=>function Bt(S,Le,Me){return(0,Pt._)(Le)?re:Z}(qt.getValueFor(S),zn.getValueFor(S),vn.getValueFor(S))}),an=Be("focus-stroke-inner").withDefault(S=>xi.getValueFor(S).evaluate(S)),ki=wt("foreground-on-accent-large-recipe").withDefault({evaluate:S=>P(lr.getValueFor(S),Lo.getValueFor(S),yo.getValueFor(S),Mr.getValueFor(S),Fo.large)}),ps=(Be("foreground-on-accent-rest-large").withDefault(S=>ki.getValueFor(S).evaluate(S).rest),Be("foreground-on-accent-hover-large").withDefault(S=>ki.getValueFor(S).evaluate(S,Lo.getValueFor(S)).hover),Be("foreground-on-accent-active-large").withDefault(S=>ki.getValueFor(S).evaluate(S,yo.getValueFor(S)).active),Be("foreground-on-accent-focus-large").withDefault(S=>ki.getValueFor(S).evaluate(S,Mr.getValueFor(S)).focus),Be("neutral-fill-inverse-rest-delta").withDefault(0)),io=Be("neutral-fill-inverse-hover-delta").withDefault(-3),oi=Be("neutral-fill-inverse-active-delta").withDefault(7),sl=Be("neutral-fill-inverse-focus-delta").withDefault(0),wa=wt("neutral-fill-inverse-recipe").withDefault({evaluate:(S,Le)=>function al(S,Le,Me,Tt,Qn,bi){const Kt=(0,Ee.a)(Le),In=S.closestIndexOf(S.colorContrast(Le,14)),gi=In+Kt*Math.abs(Me-Tt);let Zi,cr;return(1===Kt?Me<Tt:Kt*Me>Kt*Tt)?(Zi=In,cr=gi):(Zi=gi,cr=In),{rest:S.get(Zi),hover:S.get(cr),active:S.get(Zi+Kt*Qn),focus:S.get(Zi+Kt*bi)}}(sn.getValueFor(S),Le||zn.getValueFor(S),ps.getValueFor(S),io.getValueFor(S),oi.getValueFor(S),sl.getValueFor(S))});Be("neutral-fill-inverse-rest").withDefault(S=>wa.getValueFor(S).evaluate(S).rest),Be("neutral-fill-inverse-hover").withDefault(S=>wa.getValueFor(S).evaluate(S).hover),Be("neutral-fill-inverse-active").withDefault(S=>wa.getValueFor(S).evaluate(S).active),Be("neutral-fill-inverse-focus").withDefault(S=>wa.getValueFor(S).evaluate(S).focus)},4913:(ct,pe,M)=>{M.d(pe,{$d:()=>ne,GY:()=>j,gT:()=>_,lf:()=>Z,pB:()=>U,xD:()=>y});const _="Unknown Title",y="Unknown Artist",ne="Unknown Album",j="Unknown Genre",U="Unknown Folder",Z=""},7437:(ct,pe,M)=>{M.d(pe,{db:()=>hs});const _=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,y=Object.keys,ne=Array.isArray;function j(b,g){return"object"!=typeof g||y(g).forEach(function(I){b[I]=g[I]}),b}typeof Promise>"u"||_.Promise||(_.Promise=Promise);const U=Object.getPrototypeOf,Z={}.hasOwnProperty;function re(b,g){return Z.call(b,g)}function fe(b,g){"function"==typeof g&&(g=g(U(b))),(typeof Reflect>"u"?y:Reflect.ownKeys)(g).forEach(I=>{oe(b,I,g[I])})}const q=Object.defineProperty;function oe(b,g,I,A){q(b,g,j(I&&re(I,"get")&&"function"==typeof I.get?{get:I.get,set:I.set,configurable:!0}:{value:I,configurable:!0,writable:!0},A))}function V(b){return{from:function(g){return b.prototype=Object.create(g.prototype),oe(b.prototype,"constructor",b),{extend:fe.bind(null,b.prototype)}}}}const P=Object.getOwnPropertyDescriptor;function Q(b,g){let I;return P(b,g)||(I=U(b))&&Q(I,g)}const ee=[].slice;function de(b,g,I){return ee.call(b,g,I)}function $e(b,g){return g(b)}function we(b){if(!b)throw new Error("Assertion Failed")}function ve(b){_.setImmediate?setImmediate(b):setTimeout(b,0)}function qe(b,g){return b.reduce((I,A,N)=>{var X=g(A,N);return X&&(I[X[0]]=X[1]),I},{})}function Re(b,g){if(re(b,g))return b[g];if(!g)return b;if("string"!=typeof g){for(var I=[],A=0,N=g.length;A<N;++A){var X=Re(b,g[A]);I.push(X)}return I}var te=g.indexOf(".");if(-1!==te){var De=b[g.substr(0,te)];return void 0===De?void 0:Re(De,g.substr(te+1))}}function be(b,g,I){if(b&&void 0!==g&&(!("isFrozen"in Object)||!Object.isFrozen(b)))if("string"!=typeof g&&"length"in g){we("string"!=typeof I&&"length"in I);for(var A=0,N=g.length;A<N;++A)be(b,g[A],I[A])}else{var X=g.indexOf(".");if(-1!==X){var te=g.substr(0,X),De=g.substr(X+1);if(""===De)void 0===I?ne(b)&&!isNaN(parseInt(te))?b.splice(te,1):delete b[te]:b[te]=I;else{var me=b[te];me&&re(b,te)||(me=b[te]={}),be(me,De,I)}}else void 0===I?ne(b)&&!isNaN(parseInt(g))?b.splice(g,1):delete b[g]:b[g]=I}}function Fe(b){var g={};for(var I in b)re(b,I)&&(g[I]=b[I]);return g}const Te=[].concat;function Ve(b){return Te.apply([],b)}const ie="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ve([8,16,32,64].map(b=>["Int","Uint","Float"].map(g=>g+b+"Array")))).filter(b=>_[b]),he=ie.map(b=>_[b]);qe(ie,b=>[b,!0]);let xe=null;function ze(b){xe=typeof WeakMap<"u"&&new WeakMap;const g=le(b);return xe=null,g}function le(b){if(!b||"object"!=typeof b)return b;let g=xe&&xe.get(b);if(g)return g;if(ne(b)){g=[],xe&&xe.set(b,g);for(var I=0,A=b.length;I<A;++I)g.push(le(b[I]))}else if(he.indexOf(b.constructor)>=0)g=b;else{const X=U(b);for(var N in g=X===Object.prototype?{}:Object.create(X),xe&&xe.set(b,g),b)re(b,N)&&(g[N]=le(b[N]))}return g}const{toString:ue}={};function W(b){return ue.call(b).slice(8,-1)}const ce=typeof Symbol<"u"?Symbol.iterator:"@@iterator",je="symbol"==typeof ce?function(b){var g;return null!=b&&(g=b[ce])&&g.apply(b)}:function(){return null},et={};function Dt(b){var g,I,A,N;if(1===arguments.length){if(ne(b))return b.slice();if(this===et&&"string"==typeof b)return[b];if(N=je(b)){for(I=[];!(A=N.next()).done;)I.push(A.value);return I}if(null==b)return[b];if("number"==typeof(g=b.length)){for(I=new Array(g);g--;)I[g]=b[g];return I}return[b]}for(g=arguments.length,I=new Array(g);g--;)I[g]=arguments[g];return I}const Oe=typeof Symbol<"u"?b=>"AsyncFunction"===b[Symbol.toStringTag]:()=>!1;var Ee=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ye(b,g){Ee=b,Ke=g}var Ke=()=>!0;const ht=!new Error("").stack;function dt(){if(ht)try{throw new Error}catch(b){return b}return new Error}function Qt(b,g){var I=b.stack;return I?(g=g||0,0===I.indexOf(b.name)&&(g+=(b.name+b.message).split("\n").length),I.split("\n").slice(g).filter(Ke).map(A=>"\n"+A).join("")):""}var fn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],hi=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(fn),Pt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function dn(b,g){this._e=dt(),this.name=b,this.message=g}function Hn(b,g){return b+". Errors: "+Object.keys(g).map(I=>g[I].toString()).filter((I,A,N)=>N.indexOf(I)===A).join("\n")}function Rn(b,g,I,A){this._e=dt(),this.failures=g,this.failedKeys=A,this.successCount=I,this.message=Hn(b,g)}function Gn(b,g){this._e=dt(),this.name="BulkError",this.failures=Object.keys(g).map(I=>g[I]),this.failuresByPos=g,this.message=Hn(b,g)}V(dn).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Qt(this._e,2))}},toString:function(){return this.name+": "+this.message}}),V(Rn).from(dn),V(Gn).from(dn);var vi=hi.reduce((b,g)=>(b[g]=g+"Error",b),{});const ni=dn;var Bt=hi.reduce((b,g)=>{var I=g+"Error";function A(N,X){this._e=dt(),this.name=I,N?"string"==typeof N?(this.message=`${N}${X?"\n "+X:""}`,this.inner=X||null):"object"==typeof N&&(this.message=`${N.name} ${N.message}`,this.inner=N):(this.message=Pt[g]||I,this.inner=null)}return V(A).from(ni),b[g]=A,b},{});Bt.Syntax=SyntaxError,Bt.Type=TypeError,Bt.Range=RangeError;var nr=fn.reduce((b,g)=>(b[g+"Error"]=Bt[g],b),{}),Er=hi.reduce((b,g)=>(-1===["Syntax","Type","Range"].indexOf(g)&&(b[g+"Error"]=Bt[g]),b),{});function On(){}function fr(b){return b}function Nr(b,g){return null==b||b===fr?g:function(I){return g(b(I))}}function Vt(b,g){return function(){b.apply(this,arguments),g.apply(this,arguments)}}function zi(b,g){return b===On?g:function(){var I=b.apply(this,arguments);void 0!==I&&(arguments[0]=I);var A=this.onsuccess,N=this.onerror;this.onsuccess=null,this.onerror=null;var X=g.apply(this,arguments);return A&&(this.onsuccess=this.onsuccess?Vt(A,this.onsuccess):A),N&&(this.onerror=this.onerror?Vt(N,this.onerror):N),void 0!==X?X:I}}function En(b,g){return b===On?g:function(){b.apply(this,arguments);var I=this.onsuccess,A=this.onerror;this.onsuccess=this.onerror=null,g.apply(this,arguments),I&&(this.onsuccess=this.onsuccess?Vt(I,this.onsuccess):I),A&&(this.onerror=this.onerror?Vt(A,this.onerror):A)}}function Be(b,g){return b===On?g:function(I){var A=b.apply(this,arguments);j(I,A);var N=this.onsuccess,X=this.onerror;this.onsuccess=null,this.onerror=null;var te=g.apply(this,arguments);return N&&(this.onsuccess=this.onsuccess?Vt(N,this.onsuccess):N),X&&(this.onerror=this.onerror?Vt(X,this.onerror):X),void 0===A?void 0===te?void 0:te:j(A,te)}}function wt(b,g){return b===On?g:function(){return!1!==g.apply(this,arguments)&&b.apply(this,arguments)}}function Io(b,g){return b===On?g:function(){var I=b.apply(this,arguments);if(I&&"function"==typeof I.then){for(var A=this,N=arguments.length,X=new Array(N);N--;)X[N]=arguments[N];return I.then(function(){return g.apply(A,X)})}return g.apply(this,arguments)}}Er.ModifyError=Rn,Er.DexieError=dn,Er.BulkError=Gn;var Zt={};const Sr=100,[bn,lo,Pn]=typeof Promise>"u"?[]:(()=>{let b=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[b,U(b),b];const g=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[g,U(g),b]})(),Vs=lo&&lo.then,Sn=bn&&bn.constructor,zt=!!Pn;var Br=!1,ts=Pn?()=>{Pn.then(ns)}:_.setImmediate?setImmediate.bind(null,ns):_.MutationObserver?()=>{var b=document.createElement("div");new MutationObserver(()=>{ns(),b=null}).observe(b,{attributes:!0}),b.setAttribute("i","1")}:()=>{setTimeout(ns,0)},co=function(b,g){jr.push([b,g]),St&&(ts(),St=!1)},Wi=!0,St=!0,_i=[],Fi=[],mn=null,Vr=fr,Xr={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:zo,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(b=>{try{zo(b[0],b[1])}catch{}})}},Ot=Xr,jr=[],tt=0,Ce=[];function K(b){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=On,this._lib=!1;var g=this._PSD=Ot;if(Ee&&(this._stackHolder=dt(),this._prev=null,this._numPrev=0),"function"!=typeof b){if(b!==Zt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(!1===this._state&&Ht(this,this._value))}this._state=null,this._value=null,++g.ref,Mt(this,b)}const Ae={get:function(){var b=Ot,g=li;function I(A,N){var X=!b.global&&(b!==Ot||g!==li);const te=X&&!Ii();var De=new K((me,Ie)=>{en(this,new rt(or(A,b,X,te),or(N,b,X,te),me,Ie,b))});return Ee&&ir(De,this),De}return I.prototype=Zt,I},set:function(b){oe(this,"then",b&&b.prototype===Zt?Ae:{get:function(){return b},set:Ae.set})}};function rt(b,g,I,A,N){this.onFulfilled="function"==typeof b?b:null,this.onRejected="function"==typeof g?g:null,this.resolve=I,this.reject=A,this.psd=N}function Mt(b,g){try{g(I=>{if(null===b._state){if(I===b)throw new TypeError("A promise cannot be resolved with itself.");var A=b._lib&&Ci();I&&"function"==typeof I.then?Mt(b,(N,X)=>{I instanceof K?I._then(N,X):I.then(N,X)}):(b._state=!0,b._value=I,Tn(b)),A&&is()}},Ht.bind(null,b))}catch(I){Ht(b,I)}}function Ht(b,g){if(Fi.push(g),null===b._state){var I=b._lib&&Ci();g=Vr(g),b._state=!1,b._value=g,Ee&&null!==g&&"object"==typeof g&&!g._promise&&function(A,N,X){try{(()=>{var A=Q(g,"stack");g._promise=b,oe(g,"stack",{get:()=>Br?A&&(A.get?A.get.apply(g):A.value):b.stack})}).apply(null,void 0)}catch(te){}}(),A=b,_i.some(N=>N._value===A._value)||_i.push(A),Tn(b),I&&is()}var A}function Tn(b){var g=b._listeners;b._listeners=[];for(var I=0,A=g.length;I<A;++I)en(b,g[I]);var N=b._PSD;--N.ref||N.finalize(),0===tt&&(++tt,co(()=>{0==--tt&&Es()},[]))}function en(b,g){if(null!==b._state){var I=b._state?g.onFulfilled:g.onRejected;if(null===I)return(b._state?g.resolve:g.reject)(b._value);++g.psd.ref,++tt,co(Cn,[I,b,g])}else b._listeners.push(g)}function Cn(b,g,I){try{mn=g;var A,N=g._value;g._state?A=b(N):(Fi.length&&(Fi=[]),A=b(N),-1===Fi.indexOf(N)&&function(X){for(var te=_i.length;te;)if(_i[--te]._value===X._value)return void _i.splice(te,1)}(g)),I.resolve(A)}catch(X){I.reject(X)}finally{mn=null,0==--tt&&Es(),--I.psd.ref||I.psd.finalize()}}function pr(b,g,I){if(g.length===I)return g;var A="";if(!1===b._state){var N,X,te=b._value;null!=te?(N=te.name||"Error",X=te.message||te,A=Qt(te,0)):(N=te,X=""),g.push(N+(X?": "+X:"")+A)}return Ee&&((A=Qt(b._stackHolder,2))&&-1===g.indexOf(A)&&g.push(A),b._prev&&pr(b._prev,g,I)),g}function ir(b,g){var I=g?g._numPrev+1:0;I<100&&(b._prev=g,b._numPrev=I)}function ns(){Ci()&&is()}function Ci(){var b=Wi;return Wi=!1,St=!1,b}function is(){var b,g,I;do{for(;jr.length>0;)for(b=jr,jr=[],I=b.length,g=0;g<I;++g){var A=b[g];A[0].apply(null,A[1])}}while(jr.length>0);Wi=!0,St=!0}function Es(){var b=_i;_i=[],b.forEach(A=>{A._PSD.onunhandled.call(null,A._value,A)});for(var g=Ce.slice(0),I=g.length;I;)g[--I]()}function rs(b){return new K(Zt,!1,b)}function ii(b,g){var I=Ot;return function(){var A=Ci(),N=Ot;try{return Di(I,!0),b.apply(this,arguments)}catch(X){g&&g(X)}finally{Di(N,!1),A&&is()}}}fe(K.prototype,{then:Ae,_then:function(b,g){en(this,new rt(null,null,b,g,Ot))},catch:function(b){if(1===arguments.length)return this.then(null,b);var g=arguments[0],I=arguments[1];return this.then(null,"function"==typeof g?A=>A instanceof g?I(A):rs(A):A=>A&&A.name===g?I(A):rs(A))},finally:function(b){return this.then(g=>(b(),g),g=>(b(),rs(g)))},stack:{get:function(){if(this._stack)return this._stack;try{Br=!0;var b=pr(this,[],20).join("\nFrom previous: ");return null!==this._state&&(this._stack=b),b}finally{Br=!1}}},timeout:function(b,g){return b<1/0?new K((I,A)=>{var N=setTimeout(()=>A(new Bt.Timeout(g)),b);this.then(I,A).finally(clearTimeout.bind(null,N))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&oe(K.prototype,Symbol.toStringTag,"Dexie.Promise"),Xr.env=rr(),fe(K,{all:function(){var b=Dt.apply(null,arguments).map(os);return new K(function(g,I){0===b.length&&g([]);var A=b.length;b.forEach((N,X)=>K.resolve(N).then(te=>{b[X]=te,--A||g(b)},I))})},resolve:b=>{if(b instanceof K)return b;if(b&&"function"==typeof b.then)return new K((I,A)=>{b.then(I,A)});var g=new K(Zt,!0,b);return ir(g,mn),g},reject:rs,race:function(){var b=Dt.apply(null,arguments).map(os);return new K((g,I)=>{b.map(A=>K.resolve(A).then(g,I))})},PSD:{get:()=>Ot,set:b=>Ot=b},totalEchoes:{get:()=>li},newPSD:ho,usePSD:Hr,scheduler:{get:()=>co,set:b=>{co=b}},rejectionMapper:{get:()=>Vr,set:b=>{Vr=b}},follow:(b,g)=>new K((I,A)=>ho((N,X)=>{var te=Ot;te.unhandleds=[],te.onunhandled=X,te.finalize=Vt(function(){var De;De=()=>{0===this.unhandleds.length?N():X(this.unhandleds[0])},Ce.push(function me(){De(),Ce.splice(Ce.indexOf(me),1)}),++tt,co(()=>{0==--tt&&Es()},[])},te.finalize),b()},g,I,A))}),Sn&&(Sn.allSettled&&oe(K,"allSettled",function(){const b=Dt.apply(null,arguments).map(os);return new K(g=>{0===b.length&&g([]);let I=b.length;const A=new Array(I);b.forEach((N,X)=>K.resolve(N).then(te=>A[X]={status:"fulfilled",value:te},te=>A[X]={status:"rejected",reason:te}).then(()=>--I||g(A)))})}),Sn.any&&typeof AggregateError<"u"&&oe(K,"any",function(){const b=Dt.apply(null,arguments).map(os);return new K((g,I)=>{0===b.length&&I(new AggregateError([]));let A=b.length;const N=new Array(A);b.forEach((X,te)=>K.resolve(X).then(De=>g(De),De=>{N[te]=De,--A||I(new AggregateError(N))}))})}));const Li={awaits:0,echoes:0,id:0};var To=0,Mo=[],uo=0,li=0,Ut=0;function ho(b,g,I,A){var N=Ot,X=Object.create(N);X.parent=N,X.ref=0,X.global=!1,X.id=++Ut;var te=Xr.env;X.env=zt?{Promise:K,PromiseProp:{value:K,configurable:!0,writable:!0},all:K.all,race:K.race,allSettled:K.allSettled,any:K.any,resolve:K.resolve,reject:K.reject,nthen:po(te.nthen,X),gthen:po(te.gthen,X)}:{},g&&j(X,g),++N.ref,X.finalize=function(){--this.parent.ref||this.parent.finalize()};var De=Hr(X,b,I,A);return 0===X.ref&&X.finalize(),De}function Uo(){return Li.id||(Li.id=++To),++Li.awaits,Li.echoes+=Sr,Li.id}function Ii(){return!!Li.awaits&&(0==--Li.awaits&&(Li.id=0),Li.echoes=Li.awaits*Sr,!0)}function os(b){return Li.echoes&&b&&b.constructor===Sn?(Uo(),b.then(g=>(Ii(),g),g=>(Ii(),Zn(g)))):b}function Fn(b){++li,Li.echoes&&0!=--Li.echoes||(Li.echoes=Li.id=0),Mo.push(Ot),Di(b,!0)}function ss(){var b=Mo[Mo.length-1];Mo.pop(),Di(b,!1)}function Di(b,g){var I=Ot;if((g?!Li.echoes||uo++&&b===Ot:!uo||--uo&&b===Ot)||fo(g?Fn.bind(null,b):ss),b!==Ot&&(Ot=b,I===Xr&&(Xr.env=rr()),zt)){var A=Xr.env.Promise,N=b.env;lo.then=N.nthen,A.prototype.then=N.gthen,(I.global||b.global)&&(Object.defineProperty(_,"Promise",N.PromiseProp),A.all=N.all,A.race=N.race,A.resolve=N.resolve,A.reject=N.reject,N.allSettled&&(A.allSettled=N.allSettled),N.any&&(A.any=N.any))}}function rr(){var b=_.Promise;return zt?{Promise:b,PromiseProp:Object.getOwnPropertyDescriptor(_,"Promise"),all:b.all,race:b.race,allSettled:b.allSettled,any:b.any,resolve:b.resolve,reject:b.reject,nthen:lo.then,gthen:b.prototype.then}:{}}function Hr(b,g,I,A,N){var X=Ot;try{return Di(b,!0),g(I,A,N)}finally{Di(X,!1)}}function fo(b){Vs.call(bn,b)}function or(b,g,I,A){return"function"!=typeof b?b:function(){var N=Ot;I&&Uo(),Di(g,!0);try{return b.apply(this,arguments)}finally{Di(N,!1),A&&fo(Ii)}}}function po(b,g){return function(I,A){return b.call(this,or(I,g),or(A,g))}}-1===(""+Vs).indexOf("[native code]")&&(Uo=Ii=On);const Ki="unhandledrejection";function zo(b,g){var I;try{I=g.onuncatched(b)}catch{}if(!1!==I)try{var A,N={promise:g,reason:b};if(_.document&&document.createEvent?((A=document.createEvent("Event")).initEvent(Ki,!0,!0),j(A,N)):_.CustomEvent&&j(A=new CustomEvent(Ki,{detail:N}),N),A&&_.dispatchEvent&&(dispatchEvent(A),!_.PromiseRejectionEvent&&_.onunhandledrejection))try{_.onunhandledrejection(A)}catch{}Ee&&A&&!A.defaultPrevented&&console.warn(`Unhandled rejection: ${b.stack||b}`)}catch{}}var Zn=K.reject;function ko(b,g,I,A){if(b.idbdb&&(b._state.openComplete||Ot.letThrough||b._vip)){var N=b._createTransaction(g,I,b._dbSchema);try{N.create(),b._state.PR1398_maxLoop=3}catch(X){return X.name===vi.InvalidState&&b.isOpen()&&--b._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),b._close(),b.open().then(()=>ko(b,g,I,A))):Zn(X)}return N._promise(g,(X,te)=>ho(()=>(Ot.trans=N,A(X,te,N)))).then(X=>N._completion.then(()=>X))}if(b._state.openComplete)return Zn(new Bt.DatabaseClosed(b._state.dbOpenError));if(!b._state.isBeingOpened){if(!b._options.autoOpen)return Zn(new Bt.DatabaseClosed);b.open().catch(On)}return b._state.dbReadyPromise.then(()=>ko(b,g,I,A))}const qi=String.fromCharCode(65535),xr=-1/0,wn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",go="String expected.",Ur=[],Jn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),Oo=Jn,zr=Jn,on=b=>!/(dexie\.js|dexie\.min\.js)/.test(b),$n="__dbnames",Ir="readonly",Tr="readwrite";function gr(b,g){return b?g?function(){return b.apply(this,arguments)&&g.apply(this,arguments)}:b:g}const Ss={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function mo(b){return"string"!=typeof b||/\./.test(b)?g=>g:g=>(void 0===g[b]&&b in g&&delete(g=ze(g))[b],g)}class sr{_trans(g,I,A){const N=this._tx||Ot.trans,X=this.name;function te(me,Ie,Ne){if(!Ne.schema[X])throw new Bt.NotFound("Table "+X+" not part of transaction");return I(Ne.idbtrans,Ne)}const De=Ci();try{return N&&N.db===this.db?N===Ot.trans?N._promise(g,te,A):ho(()=>N._promise(g,te,A),{trans:N,transless:Ot.transless||Ot}):ko(this.db,g,[this.name],te)}finally{De&&is()}}get(g,I){return g&&g.constructor===Object?this.where(g).first(I):this._trans("readonly",A=>this.core.get({trans:A,key:g}).then(N=>this.hook.reading.fire(N))).then(I)}where(g){if("string"==typeof g)return new this.db.WhereClause(this,g);if(ne(g))return new this.db.WhereClause(this,`[${g.join("+")}]`);const I=y(g);if(1===I.length)return this.where(I[0]).equals(g[I[0]]);const A=this.schema.indexes.concat(this.schema.primKey).filter(Ie=>Ie.compound&&I.every(Ne=>Ie.keyPath.indexOf(Ne)>=0)&&Ie.keyPath.every(Ne=>I.indexOf(Ne)>=0))[0];if(A&&this.db._maxKey!==qi)return this.where(A.name).equals(A.keyPath.map(Ie=>g[Ie]));!A&&Ee&&console.warn(`The query ${JSON.stringify(g)} on ${this.name} would benefit of a compound index [${I.join("+")}]`);const{idxByName:N}=this.schema,X=this.db._deps.indexedDB;function te(Ie,Ne){try{return 0===X.cmp(Ie,Ne)}catch{return!1}}const[De,me]=I.reduce(([Ie,Ne],He)=>{const Pe=N[He],nt=g[He];return[Ie||Pe,Ie||!Pe?gr(Ne,Pe&&Pe.multi?ut=>{const it=Re(ut,He);return ne(it)&&it.some(vt=>te(nt,vt))}:ut=>te(nt,Re(ut,He))):Ne]},[null,null]);return De?this.where(De.name).equals(g[De.keyPath]).filter(me):A?this.filter(me):this.where(I).equals("")}filter(g){return this.toCollection().and(g)}count(g){return this.toCollection().count(g)}offset(g){return this.toCollection().offset(g)}limit(g){return this.toCollection().limit(g)}each(g){return this.toCollection().each(g)}toArray(g){return this.toCollection().toArray(g)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(g){return new this.db.Collection(new this.db.WhereClause(this,ne(g)?`[${g.join("+")}]`:g))}reverse(){return this.toCollection().reverse()}mapToClass(g){this.schema.mappedClass=g;const I=A=>{if(!A)return A;const N=Object.create(g.prototype);for(var X in A)if(re(A,X))try{N[X]=A[X]}catch{}return N};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=I,this.hook("reading",I),g}defineClass(){return this.mapToClass(function(g){j(this,g)})}add(g,I){const{auto:A,keyPath:N}=this.schema.primKey;let X=g;return N&&A&&(X=mo(N)(g)),this._trans("readwrite",te=>this.core.mutate({trans:te,type:"add",keys:null!=I?[I]:null,values:[X]})).then(te=>te.numFailures?K.reject(te.failures[0]):te.lastResult).then(te=>{if(N)try{be(g,N,te)}catch{}return te})}update(g,I){if("object"!=typeof g||ne(g))return this.where(":id").equals(g).modify(I);{const A=Re(g,this.schema.primKey.keyPath);if(void 0===A)return Zn(new Bt.InvalidArgument("Given object does not contain its primary key"));try{"function"!=typeof I?y(I).forEach(N=>{be(g,N,I[N])}):I(g,{value:g,primKey:A})}catch{}return this.where(":id").equals(A).modify(I)}}put(g,I){const{auto:A,keyPath:N}=this.schema.primKey;let X=g;return N&&A&&(X=mo(N)(g)),this._trans("readwrite",te=>this.core.mutate({trans:te,type:"put",values:[X],keys:null!=I?[I]:null})).then(te=>te.numFailures?K.reject(te.failures[0]):te.lastResult).then(te=>{if(N)try{be(g,N,te)}catch{}return te})}delete(g){return this._trans("readwrite",I=>this.core.mutate({trans:I,type:"delete",keys:[g]})).then(I=>I.numFailures?K.reject(I.failures[0]):void 0)}clear(){return this._trans("readwrite",g=>this.core.mutate({trans:g,type:"deleteRange",range:Ss})).then(g=>g.numFailures?K.reject(g.failures[0]):void 0)}bulkGet(g){return this._trans("readonly",I=>this.core.getMany({keys:g,trans:I}).then(A=>A.map(N=>this.hook.reading.fire(N))))}bulkAdd(g,I,A){const N=Array.isArray(I)?I:void 0,X=(A=A||(N?void 0:I))?A.allKeys:void 0;return this._trans("readwrite",te=>{const{auto:De,keyPath:me}=this.schema.primKey;if(me&&N)throw new Bt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(N&&N.length!==g.length)throw new Bt.InvalidArgument("Arguments objects and keys must have the same length");const Ie=g.length;let Ne=me&&De?g.map(mo(me)):g;return this.core.mutate({trans:te,type:"add",keys:N,values:Ne,wantResults:X}).then(({numFailures:He,results:Pe,lastResult:nt,failures:ut})=>{if(0===He)return X?Pe:nt;throw new Gn(`${this.name}.bulkAdd(): ${He} of ${Ie} operations failed`,ut)})})}bulkPut(g,I,A){const N=Array.isArray(I)?I:void 0,X=(A=A||(N?void 0:I))?A.allKeys:void 0;return this._trans("readwrite",te=>{const{auto:De,keyPath:me}=this.schema.primKey;if(me&&N)throw new Bt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(N&&N.length!==g.length)throw new Bt.InvalidArgument("Arguments objects and keys must have the same length");const Ie=g.length;let Ne=me&&De?g.map(mo(me)):g;return this.core.mutate({trans:te,type:"put",keys:N,values:Ne,wantResults:X}).then(({numFailures:He,results:Pe,lastResult:nt,failures:ut})=>{if(0===He)return X?Pe:nt;throw new Gn(`${this.name}.bulkPut(): ${He} of ${Ie} operations failed`,ut)})})}bulkDelete(g){const I=g.length;return this._trans("readwrite",A=>this.core.mutate({trans:A,type:"delete",keys:g})).then(({numFailures:A,lastResult:N,failures:X})=>{if(0===A)return N;throw new Gn(`${this.name}.bulkDelete(): ${A} of ${I} operations failed`,X)})}}function Wo(b){var g={},I=function(te,De){if(De){for(var me=arguments.length,Ie=new Array(me-1);--me;)Ie[me-1]=arguments[me];return g[te].subscribe.apply(null,Ie),b}if("string"==typeof te)return g[te]};I.addEventType=X;for(var A=1,N=arguments.length;A<N;++A)X(arguments[A]);return I;function X(te,De,me){if("object"!=typeof te){var Ie;De||(De=wt),me||(me=On);var Ne={subscribers:[],fire:me,subscribe:function(He){-1===Ne.subscribers.indexOf(He)&&(Ne.subscribers.push(He),Ne.fire=De(Ne.fire,He))},unsubscribe:function(He){Ne.subscribers=Ne.subscribers.filter(function(Pe){return Pe!==He}),Ne.fire=Ne.subscribers.reduce(De,me)}};return g[te]=I[te]=Ne,Ne}y(Ie=te).forEach(function(He){var Pe=Ie[He];if(ne(Pe))X(He,Ie[He][0],Ie[He][1]);else{if("asap"!==Pe)throw new Bt.InvalidArgument("Invalid event config");var nt=X(He,fr,function(){for(var ut=arguments.length,it=new Array(ut);ut--;)it[ut]=arguments[ut];nt.subscribers.forEach(function(vt){ve(function(){vt.apply(null,it)})})})}})}}function as(b,g){return V(g).from({prototype:b}),g}function Ao(b,g){return!(b.filter||b.algorithm||b.or)&&(g?b.justLimit:!b.replayFilter)}function Js(b,g){b.filter=gr(b.filter,g)}function Ro(b,g,I){var A=b.replayFilter;b.replayFilter=A?()=>gr(A(),g()):g,b.justLimit=I&&!A}function Go(b,g){if(b.isPrimKey)return g.primaryKey;const I=g.getIndexByKeyPath(b.index);if(!I)throw new Bt.Schema("KeyPath "+b.index+" on object store "+g.name+" is not indexed");return I}function ls(b,g,I){const A=Go(b,g.schema);return g.openCursor({trans:I,values:!b.keysOnly,reverse:"prev"===b.dir,unique:!!b.unique,query:{index:A,range:b.range}})}function xs(b,g,I,A){const N=b.replayFilter?gr(b.filter,b.replayFilter()):b.filter;if(b.or){const X={},te=(De,me,Ie)=>{if(!N||N(me,Ie,Pe=>me.stop(Pe),Pe=>me.fail(Pe))){var Ne=me.primaryKey,He=""+Ne;"[object ArrayBuffer]"===He&&(He=""+new Uint8Array(Ne)),re(X,He)||(X[He]=!0,g(De,me,Ie))}};return Promise.all([b.or._iterate(te,I),js(ls(b,A,I),b.algorithm,te,!b.keysOnly&&b.valueMapper)])}return js(ls(b,A,I),gr(b.algorithm,N),g,!b.keysOnly&&b.valueMapper)}function js(b,g,I,A){var N=ii(A?(X,te,De)=>I(A(X),te,De):I);return b.then(X=>{if(X)return X.start(()=>{var te=()=>X.continue();g&&!g(X,De=>te=De,De=>{X.stop(De),te=On},De=>{X.fail(De),te=On})||N(X.value,X,De=>te=De),te()})})}function yi(b,g){try{const I=cs(b),A=cs(g);if(I!==A)return"Array"===I?1:"Array"===A?-1:"binary"===I?1:"binary"===A?-1:"string"===I?1:"string"===A?-1:"Date"===I?1:"Date"!==A?NaN:-1;switch(I){case"number":case"Date":case"string":return b>g?1:b<g?-1:0;case"binary":return function(N,X){const te=N.length,De=X.length,me=te<De?te:De;for(let Ie=0;Ie<me;++Ie)if(N[Ie]!==X[Ie])return N[Ie]<X[Ie]?-1:1;return te===De?0:te<De?-1:1}(Zo(b),Zo(g));case"Array":return function(N,X){const te=N.length,De=X.length,me=te<De?te:De;for(let Ie=0;Ie<me;++Ie){const Ne=yi(N[Ie],X[Ie]);if(0!==Ne)return Ne}return te===De?0:te<De?-1:1}(b,g)}}catch{}return NaN}function cs(b){const g=typeof b;if("object"!==g)return g;if(ArrayBuffer.isView(b))return"binary";const I=W(b);return"ArrayBuffer"===I?"binary":I}function Zo(b){return b instanceof Uint8Array?b:ArrayBuffer.isView(b)?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(b)}class ea{_read(g,I){var A=this._ctx;return A.error?A.table._trans(null,Zn.bind(null,A.error)):A.table._trans("readonly",g).then(I)}_write(g){var I=this._ctx;return I.error?I.table._trans(null,Zn.bind(null,I.error)):I.table._trans("readwrite",g,"locked")}_addAlgorithm(g){var I=this._ctx;I.algorithm=gr(I.algorithm,g)}_iterate(g,I){return xs(this._ctx,g,I,this._ctx.table.core)}clone(g){var I=Object.create(this.constructor.prototype),A=Object.create(this._ctx);return g&&j(A,g),I._ctx=A,I}raw(){return this._ctx.valueMapper=null,this}each(g){var I=this._ctx;return this._read(A=>xs(I,g,A,I.table.core))}count(g){return this._read(I=>{const A=this._ctx,N=A.table.core;if(Ao(A,!0))return N.count({trans:I,query:{index:Go(A,N.schema),range:A.range}}).then(te=>Math.min(te,A.limit));var X=0;return xs(A,()=>(++X,!1),I,N).then(()=>X)}).then(g)}sortBy(g,I){const A=g.split(".").reverse(),N=A[0],X=A.length-1;function te(Ie,Ne){return Ne?te(Ie[A[Ne]],Ne-1):Ie[N]}var De="next"===this._ctx.dir?1:-1;function me(Ie,Ne){var He=te(Ie,X),Pe=te(Ne,X);return He<Pe?-De:He>Pe?De:0}return this.toArray(function(Ie){return Ie.sort(me)}).then(I)}toArray(g){return this._read(I=>{var A=this._ctx;if("next"===A.dir&&Ao(A,!0)&&A.limit>0){const{valueMapper:N}=A,X=Go(A,A.table.core.schema);return A.table.core.query({trans:I,limit:A.limit,values:!0,query:{index:X,range:A.range}}).then(({result:te})=>N?te.map(N):te)}{const N=[];return xs(A,X=>N.push(X),I,A.table.core).then(()=>N)}},g)}offset(g){var I=this._ctx;return g<=0||(I.offset+=g,Ao(I)?Ro(I,()=>{var A=g;return(N,X)=>0===A||(1===A?(--A,!1):(X(()=>{N.advance(A),A=0}),!1))}):Ro(I,()=>{var A=g;return()=>--A<0})),this}limit(g){return this._ctx.limit=Math.min(this._ctx.limit,g),Ro(this._ctx,()=>{var I=g;return function(A,N,X){return--I<=0&&N(X),I>=0}},!0),this}until(g,I){return Js(this._ctx,function(A,N,X){return!g(A.value)||(N(X),I)}),this}first(g){return this.limit(1).toArray(function(I){return I[0]}).then(g)}last(g){return this.reverse().first(g)}filter(g){var I;return Js(this._ctx,function(N){return g(N.value)}),(I=this._ctx).isMatch=gr(I.isMatch,g),this}and(g){return this.filter(g)}or(g){return new this.db.WhereClause(this._ctx.table,g,this)}reverse(){return this._ctx.dir="prev"===this._ctx.dir?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(g){var I=this._ctx;return I.keysOnly=!I.isMatch,this.each(function(A,N){g(N.key,N)})}eachUniqueKey(g){return this._ctx.unique="unique",this.eachKey(g)}eachPrimaryKey(g){var I=this._ctx;return I.keysOnly=!I.isMatch,this.each(function(A,N){g(N.primaryKey,N)})}keys(g){var I=this._ctx;I.keysOnly=!I.isMatch;var A=[];return this.each(function(N,X){A.push(X.key)}).then(function(){return A}).then(g)}primaryKeys(g){var I=this._ctx;if("next"===I.dir&&Ao(I,!0)&&I.limit>0)return this._read(N=>{var X=Go(I,I.table.core.schema);return I.table.core.query({trans:N,values:!1,limit:I.limit,query:{index:X,range:I.range}})}).then(({result:N})=>N).then(g);I.keysOnly=!I.isMatch;var A=[];return this.each(function(N,X){A.push(X.primaryKey)}).then(function(){return A}).then(g)}uniqueKeys(g){return this._ctx.unique="unique",this.keys(g)}firstKey(g){return this.limit(1).keys(function(I){return I[0]}).then(g)}lastKey(g){return this.reverse().firstKey(g)}distinct(){var g=this._ctx,I=g.index&&g.table.schema.idxByName[g.index];if(!I||!I.multi)return this;var A={};return Js(this._ctx,function(N){var X=N.primaryKey.toString(),te=re(A,X);return A[X]=!0,!te}),this}modify(g){var I=this._ctx;return this._write(A=>{var N;if("function"==typeof g)N=g;else{var X=y(g),te=X.length;N=function(it){for(var vt=!1,Qe=0;Qe<te;++Qe){var Xe=X[Qe],ft=g[Xe];Re(it,Xe)!==ft&&(be(it,Xe,ft),vt=!0)}return vt}}const De=I.table.core,{outbound:me,extractKey:Ie}=De.schema.primaryKey,Ne=this.db._options.modifyChunkSize||200,He=[];let Pe=0;const nt=[],ut=(it,vt)=>{const{failures:Qe,numFailures:Xe}=vt;Pe+=it-Xe;for(let ft of y(Qe))He.push(Qe[ft])};return this.clone().primaryKeys().then(it=>{const vt=Qe=>{const Xe=Math.min(Ne,it.length-Qe);return De.getMany({trans:A,keys:it.slice(Qe,Qe+Xe),cache:"immutable"}).then(ft=>{const Ft=[],kt=[],It=me?[]:null,yt=[];for(let xt=0;xt<Xe;++xt){const ei=ft[xt],Bn={value:ze(ei),primKey:it[Qe+xt]};!1!==N.call(Bn,Bn.value,Bn)&&(null==Bn.value?yt.push(it[Qe+xt]):me||0===yi(Ie(ei),Ie(Bn.value))?(kt.push(Bn.value),me&&It.push(it[Qe+xt])):(yt.push(it[Qe+xt]),Ft.push(Bn.value)))}const cn=Ao(I)&&I.limit===1/0&&("function"!=typeof g||g===Ti)&&{index:I.index,range:I.range};return Promise.resolve(Ft.length>0&&De.mutate({trans:A,type:"add",values:Ft}).then(xt=>{for(let ei in xt.failures)yt.splice(parseInt(ei),1);ut(Ft.length,xt)})).then(()=>(kt.length>0||cn&&"object"==typeof g)&&De.mutate({trans:A,type:"put",keys:It,values:kt,criteria:cn,changeSpec:"function"!=typeof g&&g}).then(xt=>ut(kt.length,xt))).then(()=>(yt.length>0||cn&&g===Ti)&&De.mutate({trans:A,type:"delete",keys:yt,criteria:cn}).then(xt=>ut(yt.length,xt))).then(()=>it.length>Qe+Xe&&vt(Qe+Ne))})};return vt(0).then(()=>{if(He.length>0)throw new Rn("Error modifying one or more objects",He,Pe,nt);return it.length})})})}delete(){var g=this._ctx,I=g.range;return Ao(g)&&(g.isPrimKey&&!zr||3===I.type)?this._write(A=>{const{primaryKey:N}=g.table.core.schema,X=I;return g.table.core.count({trans:A,query:{index:N,range:X}}).then(te=>g.table.core.mutate({trans:A,type:"deleteRange",range:X}).then(({failures:De,numFailures:Ne})=>{if(Ne)throw new Rn("Could not delete some values",Object.keys(De).map(He=>De[He]),te-Ne);return te-Ne}))}):this.modify(Ti)}}const Ti=(b,g)=>g.value=null;function Yo(b,g){return b<g?-1:b===g?0:1}function sn(b,g){return b>g?-1:b===g?0:1}function Mi(b,g,I){var A=b instanceof Jr?new b.Collection(b):b;return A._ctx.error=I?new I(g):new TypeError(g),A}function qt(b){return new b.Collection(b,()=>ta("")).limit(0)}function ar(b,g,I,A,N,X){for(var te=Math.min(b.length,A.length),De=-1,me=0;me<te;++me){var Ie=g[me];if(Ie!==A[me])return N(b[me],I[me])<0?b.substr(0,me)+I[me]+I.substr(me+1):N(b[me],A[me])<0?b.substr(0,me)+A[me]+I.substr(me+1):De>=0?b.substr(0,De)+g[De]+I.substr(De+1):null;N(b[me],Ie)<0&&(De=me)}return te<A.length&&"next"===X?b+I.substr(b.length):te<b.length&&"prev"===X?b.substr(0,I.length):De<0?null:b.substr(0,De)+A[De]+I.substr(De+1)}function Ko(b,g,I,A){var N,X,te,De,me,Ie,Ne,He=I.length;if(!I.every(it=>"string"==typeof it))return Mi(b,go);function Pe(it){N="next"===it?Xe=>Xe.toUpperCase():Xe=>Xe.toLowerCase(),X="next"===it?Xe=>Xe.toLowerCase():Xe=>Xe.toUpperCase(),te="next"===it?Yo:sn;var vt=I.map(function(Qe){return{lower:X(Qe),upper:N(Qe)}}).sort(function(Qe,Xe){return te(Qe.lower,Xe.lower)});De=vt.map(function(Qe){return Qe.upper}),me=vt.map(function(Qe){return Qe.lower}),Ie=it,Ne="next"===it?"":A}Pe("next");var nt=new b.Collection(b,()=>mr(De[0],me[He-1]+A));nt._ondirectionchange=function(it){Pe(it)};var ut=0;return nt._addAlgorithm(function(it,vt,Qe){var Xe=it.key;if("string"!=typeof Xe)return!1;var ft=X(Xe);if(g(ft,me,ut))return!0;for(var Ft=null,kt=ut;kt<He;++kt){var It=ar(Xe,ft,De[kt],me[kt],te,Ie);null===It&&null===Ft?ut=kt+1:(null===Ft||te(Ft,It)>0)&&(Ft=It)}return vt(null!==Ft?function(){it.continue(Ft+Ne)}:Qe),!1}),nt}function mr(b,g,I,A){return{type:2,lower:b,upper:g,lowerOpen:I,upperOpen:A}}function ta(b){return{type:1,lower:b,upper:b}}class Jr{get Collection(){return this._ctx.table.db.Collection}between(g,I,A,N){A=!1!==A,N=!0===N;try{return this._cmp(g,I)>0||0===this._cmp(g,I)&&(A||N)&&(!A||!N)?qt(this):new this.Collection(this,()=>mr(g,I,!A,!N))}catch{return Mi(this,wn)}}equals(g){return null==g?Mi(this,wn):new this.Collection(this,()=>ta(g))}above(g){return null==g?Mi(this,wn):new this.Collection(this,()=>mr(g,void 0,!0))}aboveOrEqual(g){return null==g?Mi(this,wn):new this.Collection(this,()=>mr(g,void 0,!1))}below(g){return null==g?Mi(this,wn):new this.Collection(this,()=>mr(void 0,g,!1,!0))}belowOrEqual(g){return null==g?Mi(this,wn):new this.Collection(this,()=>mr(void 0,g))}startsWith(g){return"string"!=typeof g?Mi(this,go):this.between(g,g+qi,!0,!0)}startsWithIgnoreCase(g){return""===g?this.startsWith(g):Ko(this,(I,A)=>0===I.indexOf(A[0]),[g],qi)}equalsIgnoreCase(g){return Ko(this,(I,A)=>I===A[0],[g],"")}anyOfIgnoreCase(){var g=Dt.apply(et,arguments);return 0===g.length?qt(this):Ko(this,(I,A)=>-1!==A.indexOf(I),g,"")}startsWithAnyOfIgnoreCase(){var g=Dt.apply(et,arguments);return 0===g.length?qt(this):Ko(this,(I,A)=>A.some(N=>0===I.indexOf(N)),g,qi)}anyOf(){const g=Dt.apply(et,arguments);let I=this._cmp;try{g.sort(I)}catch{return Mi(this,wn)}if(0===g.length)return qt(this);const A=new this.Collection(this,()=>mr(g[0],g[g.length-1]));A._ondirectionchange=X=>{I="next"===X?this._ascending:this._descending,g.sort(I)};let N=0;return A._addAlgorithm((X,te,De)=>{const me=X.key;for(;I(me,g[N])>0;)if(++N,N===g.length)return te(De),!1;return 0===I(me,g[N])||(te(()=>{X.continue(g[N])}),!1)}),A}notEqual(g){return this.inAnyRange([[xr,g],[g,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const g=Dt.apply(et,arguments);if(0===g.length)return new this.Collection(this);try{g.sort(this._ascending)}catch{return Mi(this,wn)}const I=g.reduce((A,N)=>A?A.concat([[A[A.length-1][1],N]]):[[xr,N]],null);return I.push([g[g.length-1],this.db._maxKey]),this.inAnyRange(I,{includeLowers:!1,includeUppers:!1})}inAnyRange(g,I){const A=this._cmp,N=this._ascending,X=this._descending,te=this._min,De=this._max;if(0===g.length)return qt(this);if(!g.every(Xe=>void 0!==Xe[0]&&void 0!==Xe[1]&&N(Xe[0],Xe[1])<=0))return Mi(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Bt.InvalidArgument);const me=!I||!1!==I.includeLowers,Ie=I&&!0===I.includeUppers;let Ne,He=N;function Pe(Xe,ft){return He(Xe[0],ft[0])}try{Ne=g.reduce(function(Xe,ft){let Ft=0,kt=Xe.length;for(;Ft<kt;++Ft){const It=Xe[Ft];if(A(ft[0],It[1])<0&&A(ft[1],It[0])>0){It[0]=te(It[0],ft[0]),It[1]=De(It[1],ft[1]);break}}return Ft===kt&&Xe.push(ft),Xe},[]),Ne.sort(Pe)}catch{return Mi(this,wn)}let nt=0;const ut=Ie?Xe=>N(Xe,Ne[nt][1])>0:Xe=>N(Xe,Ne[nt][1])>=0,it=me?Xe=>X(Xe,Ne[nt][0])>0:Xe=>X(Xe,Ne[nt][0])>=0;let vt=ut;const Qe=new this.Collection(this,()=>mr(Ne[0][0],Ne[Ne.length-1][1],!me,!Ie));return Qe._ondirectionchange=Xe=>{"next"===Xe?(vt=ut,He=N):(vt=it,He=X),Ne.sort(Pe)},Qe._addAlgorithm((Xe,ft,Ft)=>{for(var kt=Xe.key;vt(kt);)if(++nt,nt===Ne.length)return ft(Ft),!1;return!((ut(It=kt)||it(It))&&(0===this._cmp(kt,Ne[nt][1])||0===this._cmp(kt,Ne[nt][0])||ft(()=>{Xe.continue(He===N?Ne[nt][0]:Ne[nt][1])}),1));var It}),Qe}startsWithAnyOf(){const g=Dt.apply(et,arguments);return g.every(I=>"string"==typeof I)?0===g.length?qt(this):this.inAnyRange(g.map(I=>[I,I+qi])):Mi(this,"startsWithAnyOf() only works with strings")}}function vr(b){return ii(function(g){return Gi(g),b(g.target.error),!1})}function Gi(b){b.stopPropagation&&b.stopPropagation(),b.preventDefault&&b.preventDefault()}const vo="storagemutated",ri="x-storagemutated-1",Ei=Wo(null,vo);class _n{_lock(){return we(!Ot.global),++this._reculock,1!==this._reculock||Ot.global||(Ot.lockOwnerFor=this),this}_unlock(){if(we(!Ot.global),0==--this._reculock)for(Ot.global||(Ot.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var g=this._blockedFuncs.shift();try{Hr(g[1],g[0])}catch{}}return this}_locked(){return this._reculock&&Ot.lockOwnerFor!==this}create(g){if(!this.mode)return this;const I=this.db.idbdb,A=this.db._state.dbOpenError;if(we(!this.idbtrans),!g&&!I)switch(A&&A.name){case"DatabaseClosedError":throw new Bt.DatabaseClosed(A);case"MissingAPIError":throw new Bt.MissingAPI(A.message,A);default:throw new Bt.OpenFailed(A)}if(!this.active)throw new Bt.TransactionInactive;return we(null===this._completion._state),(g=this.idbtrans=g||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):I.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=ii(N=>{Gi(N),this._reject(g.error)}),g.onabort=ii(N=>{Gi(N),this.active&&this._reject(new Bt.Abort(g.error)),this.active=!1,this.on("abort").fire(N)}),g.oncomplete=ii(()=>{this.active=!1,this._resolve(),"mutatedParts"in g&&Ei.storagemutated.fire(g.mutatedParts)}),this}_promise(g,I,A){if("readwrite"===g&&"readwrite"!==this.mode)return Zn(new Bt.ReadOnly("Transaction is readonly"));if(!this.active)return Zn(new Bt.TransactionInactive);if(this._locked())return new K((X,te)=>{this._blockedFuncs.push([()=>{this._promise(g,I,A).then(X,te)},Ot])});if(A)return ho(()=>{var X=new K((te,De)=>{this._lock();const me=I(te,De,this);me&&me.then&&me.then(te,De)});return X.finally(()=>this._unlock()),X._lib=!0,X});var N=new K((X,te)=>{var De=I(X,te,this);De&&De.then&&De.then(X,te)});return N._lib=!0,N}_root(){return this.parent?this.parent._root():this}waitFor(g){var I=this._root();const A=K.resolve(g);if(I._waitingFor)I._waitingFor=I._waitingFor.then(()=>A);else{I._waitingFor=A,I._waitingQueue=[];var N=I.idbtrans.objectStore(I.storeNames[0]);!function te(){for(++I._spinCount;I._waitingQueue.length;)I._waitingQueue.shift()();I._waitingFor&&(N.get(-1/0).onsuccess=te)}()}var X=I._waitingFor;return new K((te,De)=>{A.then(me=>I._waitingQueue.push(ii(te.bind(null,me))),me=>I._waitingQueue.push(ii(De.bind(null,me)))).finally(()=>{I._waitingFor===X&&(I._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Bt.Abort))}table(g){const I=this._memoizedTables||(this._memoizedTables={});if(re(I,g))return I[g];const A=this.schema[g];if(!A)throw new Bt.NotFound("Table "+g+" not part of transaction");const N=new this.db.Table(g,A,this);return N.core=this.db.core.table(g),I[g]=N,N}}function Po(b,g,I,A,N,X,te){return{name:b,keyPath:g,unique:I,multi:A,auto:N,compound:X,src:(I&&!te?"&":"")+(A?"*":"")+(N?"++":"")+zn(g)}}function zn(b){return"string"==typeof b?b:b?"["+[].join.call(b,"+")+"]":""}function Fo(b,g,I){return{name:b,primKey:g,indexes:I,mappedClass:null,idxByName:qe(I,A=>[A.name,A])}}let eo=b=>{try{return b.only([[]]),eo=()=>[[]],[[]]}catch{return eo=()=>qi,qi}};function lr(b){return null==b?()=>{}:"string"==typeof b?1===(g=b).split(".").length?A=>A[g]:A=>Re(A,g):g=>Re(g,b);var g}function Lo(b){return[].slice.call(b)}let yo=0;function Mr(b){return null==b?":id":"string"==typeof b?b:`[${b.join("+")}]`}function Wr(b,g,I){function A(me){if(3===me.type)return null;if(4===me.type)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:Ie,upper:Ne,lowerOpen:He,upperOpen:Pe}=me;return void 0===Ie?void 0===Ne?null:g.upperBound(Ne,!!Pe):void 0===Ne?g.lowerBound(Ie,!!He):g.bound(Ie,Ne,!!He,!!Pe)}const{schema:N,hasGetAll:X}=function(me,Ie){const Ne=Lo(me.objectStoreNames);return{schema:{name:me.name,tables:Ne.map(He=>Ie.objectStore(He)).map(He=>{const{keyPath:Pe,autoIncrement:nt}=He,ut=ne(Pe),vt={},Qe={name:He.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:null==Pe,compound:ut,keyPath:Pe,autoIncrement:nt,unique:!0,extractKey:lr(Pe)},indexes:Lo(He.indexNames).map(Xe=>He.index(Xe)).map(Xe=>{const{name:ft,unique:Ft,multiEntry:kt,keyPath:It}=Xe,yt={name:ft,compound:ne(It),keyPath:It,unique:Ft,multiEntry:kt,extractKey:lr(It)};return vt[Mr(It)]=yt,yt}),getIndexByKeyPath:Xe=>vt[Mr(Xe)]};return vt[":id"]=Qe.primaryKey,null!=Pe&&(vt[Mr(Pe)]=Qe.primaryKey),Qe})},hasGetAll:Ne.length>0&&"getAll"in Ie.objectStore(Ne[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(b,I),te=N.tables.map(me=>function(Ie){const Ne=Ie.name;return{name:Ne,schema:Ie,mutate:function({trans:He,type:Pe,keys:nt,values:ut,range:it}){return new Promise((vt,Qe)=>{vt=ii(vt);const Xe=He.objectStore(Ne),ft=null==Xe.keyPath,Ft="put"===Pe||"add"===Pe;if(!Ft&&"delete"!==Pe&&"deleteRange"!==Pe)throw new Error("Invalid operation type: "+Pe);const{length:kt}=nt||ut||{length:1};if(nt&&ut&&nt.length!==ut.length)throw new Error("Given keys array must have same length as given values array.");if(0===kt)return vt({numFailures:0,failures:{},results:[],lastResult:void 0});let It;const yt=[],cn=[];let xt=0;const ei=w=>{++xt,Gi(w)};if("deleteRange"===Pe){if(4===it.type)return vt({numFailures:xt,failures:cn,results:[],lastResult:void 0});yt.push(It=3===it.type?Xe.clear():Xe.delete(A(it)))}else{const[w,B]=Ft?ft?[ut,nt]:[ut,null]:[nt,null];if(Ft)for(let x=0;x<kt;++x)yt.push(It=B&&void 0!==B[x]?Xe[Pe](w[x],B[x]):Xe[Pe](w[x])),It.onerror=ei;else for(let x=0;x<kt;++x)yt.push(It=Xe[Pe](w[x])),It.onerror=ei}const Bn=w=>{const B=w.target.result;yt.forEach((x,F)=>null!=x.error&&(cn[F]=x.error)),vt({numFailures:xt,failures:cn,results:"delete"===Pe?nt:yt.map(x=>x.result),lastResult:B})};It.onerror=w=>{ei(w),Bn(w)},It.onsuccess=Bn})},getMany:({trans:He,keys:Pe})=>new Promise((nt,ut)=>{nt=ii(nt);const it=He.objectStore(Ne),vt=Pe.length,Qe=new Array(vt);let Xe,ft=0,Ft=0;const kt=yt=>{const cn=yt.target;Qe[cn._pos]=cn.result,++Ft===ft&&nt(Qe)},It=vr(ut);for(let yt=0;yt<vt;++yt)null!=Pe[yt]&&(Xe=it.get(Pe[yt]),Xe._pos=yt,Xe.onsuccess=kt,Xe.onerror=It,++ft);0===ft&&nt(Qe)}),get:({trans:He,key:Pe})=>new Promise((nt,ut)=>{nt=ii(nt);const it=He.objectStore(Ne).get(Pe);it.onsuccess=vt=>nt(vt.target.result),it.onerror=vr(ut)}),query:(He=X,Pe=>new Promise((nt,ut)=>{nt=ii(nt);const{trans:it,values:vt,limit:Qe,query:Xe}=Pe,ft=Qe===1/0?void 0:Qe,{index:Ft,range:kt}=Xe,It=it.objectStore(Ne),yt=Ft.isPrimaryKey?It:It.index(Ft.name),cn=A(kt);if(0===Qe)return nt({result:[]});if(He){const xt=vt?yt.getAll(cn,ft):yt.getAllKeys(cn,ft);xt.onsuccess=ei=>nt({result:ei.target.result}),xt.onerror=vr(ut)}else{let xt=0;const ei=vt||!("openKeyCursor"in yt)?yt.openCursor(cn):yt.openKeyCursor(cn),Bn=[];ei.onsuccess=w=>{const B=ei.result;return B?(Bn.push(vt?B.value:B.primaryKey),++xt===Qe?nt({result:Bn}):void B.continue()):nt({result:Bn})},ei.onerror=vr(ut)}})),openCursor:function({trans:He,values:Pe,query:nt,reverse:ut,unique:it}){return new Promise((vt,Qe)=>{vt=ii(vt);const{index:Xe,range:ft}=nt,Ft=He.objectStore(Ne),kt=Xe.isPrimaryKey?Ft:Ft.index(Xe.name),It=ut?it?"prevunique":"prev":it?"nextunique":"next",yt=Pe||!("openKeyCursor"in kt)?kt.openCursor(A(ft),It):kt.openKeyCursor(A(ft),It);yt.onerror=vr(Qe),yt.onsuccess=ii(cn=>{const xt=yt.result;if(!xt)return void vt(null);xt.___id=++yo,xt.done=!1;const ei=xt.continue.bind(xt);let Bn=xt.continuePrimaryKey;Bn&&(Bn=Bn.bind(xt));const w=xt.advance.bind(xt),B=()=>{throw new Error("Cursor not stopped")};xt.trans=He,xt.stop=xt.continue=xt.continuePrimaryKey=xt.advance=()=>{throw new Error("Cursor not started")},xt.fail=ii(Qe),xt.next=function(){let x=1;return this.start(()=>x--?this.continue():this.stop()).then(()=>this)},xt.start=x=>{const F=new Promise((Ue,ot)=>{Ue=ii(Ue),yt.onerror=vr(ot),xt.fail=ot,xt.stop=Lt=>{xt.stop=xt.continue=xt.continuePrimaryKey=xt.advance=B,Ue(Lt)}}),se=()=>{if(yt.result)try{x()}catch(Ue){xt.fail(Ue)}else xt.done=!0,xt.start=()=>{throw new Error("Cursor behind last entry")},xt.stop()};return yt.onsuccess=ii(Ue=>{yt.onsuccess=se,se()}),xt.continue=ei,xt.continuePrimaryKey=Bn,xt.advance=w,se(),F},vt(xt)},Qe)})},count({query:He,trans:Pe}){const{index:nt,range:ut}=He;return new Promise((it,vt)=>{const Qe=Pe.objectStore(Ne),Xe=nt.isPrimaryKey?Qe:Qe.index(nt.name),ft=A(ut),Ft=ft?Xe.count(ft):Xe.count();Ft.onsuccess=ii(kt=>it(kt.target.result)),Ft.onerror=vr(vt)})}};var He}(me)),De={};return te.forEach(me=>De[me.name]=me),{stack:"dbcore",transaction:b.transaction.bind(b),table(me){if(!De[me])throw new Error(`Table '${me}' not found`);return De[me]},MIN_KEY:-1/0,MAX_KEY:eo(g),schema:N}}function Is({_novip:b},g){const A=function(N,X,{IDBKeyRange:te},me){return{dbcore:(Ne=Wr(X,te,me),He=N.dbcore,He.reduce((Pe,{create:nt})=>({...Pe,...nt(Pe)}),Ne))};var Ne,He}(b._middlewares,g.db,b._deps,g);b.core=A.dbcore,b.tables.forEach(N=>{const X=N.name;b.core.schema.tables.some(te=>te.name===X)&&(N.core=b.core.table(X),b[X]instanceof b.Table&&(b[X].core=N.core))})}function to({_novip:b},g,I,A){I.forEach(N=>{const X=A[N];g.forEach(te=>{const De=Q(te,N);(!De||"value"in De&&void 0===De.value)&&(te===b.Transaction.prototype||te instanceof b.Transaction?oe(te,N,{get(){return this.table(N)},set(me){q(this,N,{value:me,writable:!0,configurable:!0,enumerable:!0})}}):te[N]=new b.Table(N,X))})})}function Qi({_novip:b},g){g.forEach(I=>{for(let A in I)I[A]instanceof b.Table&&delete I[A]})}function na(b,g){return b._cfg.version-g._cfg.version}function Ts(b,g){const I={del:[],add:[],change:[]};let A;for(A in b)g[A]||I.del.push(A);for(A in g){const N=b[A],X=g[A];if(N){const te={name:A,def:X,recreate:!1,del:[],add:[],change:[]};if(""+(N.primKey.keyPath||"")!=""+(X.primKey.keyPath||"")||N.primKey.auto!==X.primKey.auto&&!Jn)te.recreate=!0,I.change.push(te);else{const De=N.idxByName,me=X.idxByName;let Ie;for(Ie in De)me[Ie]||te.del.push(Ie);for(Ie in me){const Ne=De[Ie],He=me[Ie];Ne?Ne.src!==He.src&&te.change.push(He):te.add.push(He)}(te.del.length>0||te.add.length>0||te.change.length>0)&&I.change.push(te)}}else I.add.push([A,X])}return I}function us(b,g,I,A){const N=b.db.createObjectStore(g,I.keyPath?{keyPath:I.keyPath,autoIncrement:I.auto}:{autoIncrement:I.auto});return A.forEach(X=>Ms(N,X)),N}function Ms(b,g){b.createIndex(g.name,g.keyPath,{unique:g.unique,multiEntry:g.multi})}function $a(b,g,I){const A={};return de(g.objectStoreNames,0).forEach(N=>{const X=I.objectStore(N);let te=X.keyPath;const De=Po(zn(te),te||"",!1,!1,!!X.autoIncrement,te&&"string"!=typeof te,!0),me=[];for(let Ne=0;Ne<X.indexNames.length;++Ne){const He=X.index(X.indexNames[Ne]);te=He.keyPath;var Ie=Po(He.name,te,!!He.unique,!!He.multiEntry,!1,te&&"string"!=typeof te,!1);me.push(Ie)}A[N]=Fo(N,De,me)}),A}function ds({_novip:b},g,I){const A=I.db.objectStoreNames;for(let N=0;N<A.length;++N){const X=A[N],te=I.objectStore(X);b._hasGetAll="getAll"in te;for(let De=0;De<te.indexNames.length;++De){const me=te.indexNames[De],Ie=te.index(me).keyPath,Ne="string"==typeof Ie?Ie:"["+de(Ie).join("+")+"]";if(g[X]){const He=g[X].idxByName[Ne];He&&(He.name=me,delete g[X].idxByName[Ne],g[X].idxByName[me]=He)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&_.WorkerGlobalScope&&_ instanceof _.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(b._hasGetAll=!1)}class ol{_parseStoresSpec(g,I){y(g).forEach(A=>{if(null!==g[A]){var N=g[A].split(",").map((te,De)=>{const me=(te=te.trim()).replace(/([&*]|\+\+)/g,""),Ie=/^\[/.test(me)?me.match(/^\[(.*)\]$/)[1].split("+"):me;return Po(me,Ie||null,/\&/.test(te),/\*/.test(te),/\+\+/.test(te),ne(Ie),0===De)}),X=N.shift();if(X.multi)throw new Bt.Schema("Primary key cannot be multi-valued");N.forEach(te=>{if(te.auto)throw new Bt.Schema("Only primary key can be marked as autoIncrement (++)");if(!te.keyPath)throw new Bt.Schema("Index must have a name and cannot be an empty string")}),I[A]=Fo(A,X,N)}})}stores(g){const I=this.db;this._cfg.storesSource=this._cfg.storesSource?j(this._cfg.storesSource,g):g;const N={};let X={};return I._versions.forEach(te=>{j(N,te._cfg.storesSource),X=te._cfg.dbschema={},te._parseStoresSpec(N,X)}),I._dbSchema=X,Qi(I,[I._allTables,I,I.Transaction.prototype]),to(I,[I._allTables,I,I.Transaction.prototype,this._cfg.tables],y(X),X),I._storeNames=y(X),this}upgrade(g){return this._cfg.contentUpgrade=Io(this._cfg.contentUpgrade||On,g),this}}function ia(b,g){let I=b._dbNamesDB;return I||(I=b._dbNamesDB=new $i($n,{addons:[],indexedDB:b,IDBKeyRange:g}),I.version(1).stores({dbnames:"name"})),I.table("dbnames")}function Hs(b){return b&&"function"==typeof b.databases}function ra(b){return ho(function(){return Ot.letThrough=!0,b()})}function Us(){var b;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(g){var I=function(){return indexedDB.databases().finally(g)};b=setInterval(I,100),I()}).finally(function(){return clearInterval(b)}):Promise.resolve()}function $o(b){var g=X=>b.next(X),I=N(g),A=N(X=>b.throw(X));function N(X){return te=>{var De=X(te),me=De.value;return De.done?me:me&&"function"==typeof me.then?me.then(I,A):ne(me)?Promise.all(me).then(I,A):I(me)}}return N(g)()}function kr(b,g,I){var A=arguments.length;if(A<2)throw new Bt.InvalidArgument("Too few arguments");for(var N=new Array(A-1);--A;)N[A-1]=arguments[A];return I=N.pop(),[b,Ve(N),I]}function zs(b,g,I,A,N){return K.resolve().then(()=>{const X=Ot.transless||Ot,te=b._createTransaction(g,I,b._dbSchema,A),De={trans:te,transless:X};if(A)te.idbtrans=A.idbtrans;else try{te.create(),b._state.PR1398_maxLoop=3}catch(He){return He.name===vi.InvalidState&&b.isOpen()&&--b._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),b._close(),b.open().then(()=>zs(b,g,I,null,N))):Zn(He)}const me=Oe(N);let Ie;me&&Uo();const Ne=K.follow(()=>{if(Ie=N.call(te,te),Ie)if(me){var He=Ii.bind(null,null);Ie.then(He,He)}else"function"==typeof Ie.next&&"function"==typeof Ie.throw&&(Ie=$o(Ie))},De);return(Ie&&"function"==typeof Ie.then?K.resolve(Ie).then(He=>te.active?He:Zn(new Bt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):Ne.then(()=>Ie)).then(He=>(A&&te._resolve(),te._completion.then(()=>He))).catch(He=>(te._reject(He),Zn(He)))})}function yr(b,g,I){const A=ne(b)?b.slice():[b];for(let N=0;N<I;++N)A.push(g);return A}const pn={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(b){return{...b,table(g){const I=b.table(g),{schema:A}=I,N={},X=[];function te(Ne,He,Pe){const nt=Mr(Ne),ut=N[nt]=N[nt]||[],it=null==Ne?0:"string"==typeof Ne?1:Ne.length,vt=He>0,Qe={...Pe,isVirtual:vt,keyTail:He,keyLength:it,extractKey:lr(Ne),unique:!vt&&Pe.unique};return ut.push(Qe),Qe.isPrimaryKey||X.push(Qe),it>1&&te(2===it?Ne[0]:Ne.slice(0,it-1),He+1,Pe),ut.sort((Xe,ft)=>Xe.keyTail-ft.keyTail),Qe}const De=te(A.primaryKey.keyPath,0,A.primaryKey);N[":id"]=[De];for(const Ne of A.indexes)te(Ne.keyPath,0,Ne);function me(Ne){const He=Ne.query.index;return He.isVirtual?{...Ne,query:{index:He,range:(Pe=Ne.query.range,nt=He.keyTail,{type:1===Pe.type?2:Pe.type,lower:yr(Pe.lower,Pe.lowerOpen?b.MAX_KEY:b.MIN_KEY,nt),lowerOpen:!0,upper:yr(Pe.upper,Pe.upperOpen?b.MIN_KEY:b.MAX_KEY,nt),upperOpen:!0})}}:Ne;var Pe,nt}return{...I,schema:{...A,primaryKey:De,indexes:X,getIndexByKeyPath:function(Ne){const He=N[Mr(Ne)];return He&&He[0]}},count:Ne=>I.count(me(Ne)),query:Ne=>I.query(me(Ne)),openCursor(Ne){const{keyTail:He,isVirtual:Pe,keyLength:nt}=Ne.query.index;return Pe?I.openCursor(me(Ne)).then(ut=>{return ut&&(it=ut,Object.create(it,{continue:{value:function(Qe){null!=Qe?it.continue(yr(Qe,Ne.reverse?b.MAX_KEY:b.MIN_KEY,He)):Ne.unique?it.continue(it.key.slice(0,nt).concat(Ne.reverse?b.MIN_KEY:b.MAX_KEY,He)):it.continue()}},continuePrimaryKey:{value(Qe,Xe){it.continuePrimaryKey(yr(Qe,b.MAX_KEY,He),Xe)}},primaryKey:{get:()=>it.primaryKey},key:{get(){const Qe=it.key;return 1===nt?Qe[0]:Qe.slice(0,nt)}},value:{get:()=>it.value}}));var it}):I.openCursor(Ne)}}}}}};function fi(b,g,I,A){return I=I||{},A=A||"",y(b).forEach(N=>{if(re(g,N)){var X=b[N],te=g[N];if("object"==typeof X&&"object"==typeof te&&X&&te){const De=W(X);De!==W(te)?I[A+N]=g[N]:"Object"===De?fi(X,te,I,A+N+"."):X!==te&&(I[A+N]=g[N])}else X!==te&&(I[A+N]=g[N])}else I[A+N]=void 0}),y(g).forEach(N=>{re(b,N)||(I[A+N]=g[N])}),I}const Hi={stack:"dbcore",name:"HooksMiddleware",level:2,create:b=>({...b,table(g){const I=b.table(g),{primaryKey:A}=I.schema;return{...I,mutate(X){const te=Ot.trans,{deleting:De,creating:me,updating:Ie}=te.table(g).hook;switch(X.type){case"add":if(me.fire===On)break;return te._promise("readwrite",()=>Ne(X),!0);case"put":if(me.fire===On&&Ie.fire===On)break;return te._promise("readwrite",()=>Ne(X),!0);case"delete":if(De.fire===On)break;return te._promise("readwrite",()=>Ne(X),!0);case"deleteRange":if(De.fire===On)break;return te._promise("readwrite",()=>{return He((Pe=X).trans,Pe.range,1e4);var Pe},!0)}return I.mutate(X);function Ne(Pe){const nt=Ot.trans,ut=Pe.keys||("delete"===(vt=Pe).type?vt.keys:vt.keys||vt.values.map(A.extractKey));var vt;if(!ut)throw new Error("Keys missing");return"delete"!==(Pe="add"===Pe.type||"put"===Pe.type?{...Pe,keys:ut}:{...Pe}).type&&(Pe.values=[...Pe.values]),Pe.keys&&(Pe.keys=[...Pe.keys]),function(it,vt,Qe){return"add"===vt.type?Promise.resolve([]):it.getMany({trans:vt.trans,keys:Qe,cache:"immutable"})}(I,Pe,ut).then(it=>{const vt=ut.map((Qe,Xe)=>{const ft=it[Xe],Ft={onerror:null,onsuccess:null};if("delete"===Pe.type)De.fire.call(Ft,Qe,ft,nt);else if("add"===Pe.type||void 0===ft){const kt=me.fire.call(Ft,Qe,Pe.values[Xe],nt);null==Qe&&null!=kt&&(Pe.keys[Xe]=Qe=kt,A.outbound||be(Pe.values[Xe],A.keyPath,Qe))}else{const kt=fi(ft,Pe.values[Xe]),It=Ie.fire.call(Ft,kt,Qe,ft,nt);if(It){const yt=Pe.values[Xe];Object.keys(It).forEach(cn=>{re(yt,cn)?yt[cn]=It[cn]:be(yt,cn,It[cn])})}}return Ft});return I.mutate(Pe).then(({failures:Qe,results:Xe,numFailures:ft,lastResult:Ft})=>{for(let kt=0;kt<ut.length;++kt){const It=Xe?Xe[kt]:ut[kt],yt=vt[kt];null==It?yt.onerror&&yt.onerror(Qe[kt]):yt.onsuccess&&yt.onsuccess("put"===Pe.type&&it[kt]?Pe.values[kt]:It)}return{failures:Qe,results:Xe,numFailures:ft,lastResult:Ft}}).catch(Qe=>(vt.forEach(Xe=>Xe.onerror&&Xe.onerror(Qe)),Promise.reject(Qe)))})}function He(Pe,nt,ut){return I.query({trans:Pe,values:!1,query:{index:A,range:nt},limit:ut}).then(({result:it})=>Ne({type:"delete",keys:it,trans:Pe}).then(vt=>vt.numFailures>0?Promise.reject(vt.failures[0]):it.length<ut?{failures:[],numFailures:0,lastResult:void 0}:He(Pe,{...nt,lower:it[it.length-1],lowerOpen:!0},ut)))}}}}})};function Gr(b,g,I){try{if(!g||g.keys.length<b.length)return null;const A=[];for(let N=0,X=0;N<g.keys.length&&X<b.length;++N)0===yi(g.keys[N],b[X])&&(A.push(I?ze(g.values[N]):g.values[N]),++X);return A.length===b.length?A:null}catch{return null}}const pi={stack:"dbcore",level:-1,create:b=>({table:g=>{const I=b.table(g);return{...I,getMany:A=>{if(!A.cache)return I.getMany(A);const N=Gr(A.keys,A.trans._cache,"clone"===A.cache);return N?K.resolve(N):I.getMany(A).then(X=>(A.trans._cache={keys:A.keys,values:"clone"===A.cache?ze(X):X},X))},mutate:A=>("add"!==A.type&&(A.trans._cache=null),I.mutate(A))}}})};function ks(b){return!("from"in b)}const Mn=function(b,g){if(!this){const I=new Mn;return b&&"d"in b&&j(I,b),I}j(this,arguments.length?{d:1,from:b,to:arguments.length>1?g:b}:{d:0})};function ci(b,g,I){const A=yi(g,I);if(isNaN(A))return;if(A>0)throw RangeError();if(ks(b))return j(b,{from:g,to:I,d:1});const N=b.l,X=b.r;if(yi(I,b.from)<0)return N?ci(N,g,I):b.l={from:g,to:I,d:1,l:null,r:null},pt(b);if(yi(g,b.to)>0)return X?ci(X,g,I):b.r={from:g,to:I,d:1,l:null,r:null},pt(b);yi(g,b.from)<0&&(b.from=g,b.l=null,b.d=X?X.d+1:1),yi(I,b.to)>0&&(b.to=I,b.r=null,b.d=b.l?b.l.d+1:1);const te=!b.r;N&&!b.l&&no(b,N),X&&te&&no(b,X)}function no(b,g){ks(g)||function I(A,{from:N,to:X,l:te,r:De}){ci(A,N,X),te&&I(A,te),De&&I(A,De)}(b,g)}function Yn(b){let g=ks(b)?null:{s:0,n:b};return{next(I){const A=arguments.length>0;for(;g;)switch(g.s){case 0:if(g.s=1,A)for(;g.n.l&&yi(I,g.n.from)<0;)g={up:g,n:g.n.l,s:1};else for(;g.n.l;)g={up:g,n:g.n.l,s:1};case 1:if(g.s=2,!A||yi(I,g.n.to)<=0)return{value:g.n,done:!1};case 2:if(g.n.r){g.s=3,g={up:g,n:g.n.r,s:0};continue}case 3:g=g.up}return{done:!0}}}}function pt(b){var g,I;const A=((null===(g=b.r)||void 0===g?void 0:g.d)||0)-((null===(I=b.l)||void 0===I?void 0:I.d)||0),N=A>1?"r":A<-1?"l":"";if(N){const X="r"===N?"l":"r",te={...b},De=b[N];b.from=De.from,b.to=De.to,b[N]=De[N],te[N]=De[X],b[X]=te,te.d=Yt(te)}b.d=Yt(b)}function Yt({r:b,l:g}){return(b?g?Math.max(b.d,g.d):b.d:g?g.d:0)+1}fe(Mn.prototype,{add(b){return no(this,b),this},addKey(b){return ci(this,b,b),this},addKeys(b){return b.forEach(g=>ci(this,g,g)),this},[ce](){return Yn(this)}});const Kn={stack:"dbcore",level:0,create:b=>{const g=b.schema.name,I=new Mn(b.MIN_KEY,b.MAX_KEY);return{...b,table:A=>{const N=b.table(A),{schema:X}=N,{primaryKey:te}=X,{extractKey:De,outbound:me}=te,Ie={...N,mutate:Pe=>{const nt=Pe.trans,ut=nt.mutatedParts||(nt.mutatedParts={}),it=It=>{const yt=`idb://${g}/${A}/${It}`;return ut[yt]||(ut[yt]=new Mn)},vt=it(""),Qe=it(":dels"),{type:Xe}=Pe;let[ft,Ft]="deleteRange"===Pe.type?[Pe.range]:"delete"===Pe.type?[Pe.keys]:Pe.values.length<50?[[],Pe.values]:[];const kt=Pe.trans._cache;return N.mutate(Pe).then(It=>{if(ne(ft)){"delete"!==Xe&&(ft=It.results),vt.addKeys(ft);const yt=Gr(ft,kt);yt||"add"===Xe||Qe.addKeys(ft),(yt||Ft)&&(cn=it,ei=yt,Bn=Ft,X.indexes.forEach(function w(B){const x=cn(B.name||"");function F(Ue){return null!=Ue?B.extractKey(Ue):null}const se=Ue=>B.multiEntry&&ne(Ue)?Ue.forEach(ot=>x.addKey(ot)):x.addKey(Ue);(ei||Bn).forEach((Ue,ot)=>{const Lt=ei&&F(ei[ot]),Vn=Bn&&F(Bn[ot]);0!==yi(Lt,Vn)&&(null!=Lt&&se(Lt),null!=Vn&&se(Vn))})}))}else if(ft){const yt={from:ft.lower,to:ft.upper};Qe.add(yt),vt.add(yt)}else vt.add(I),Qe.add(I),X.indexes.forEach(yt=>it(yt.name).add(I));var cn,ei,Bn;return It})}},Ne=({query:{index:Pe,range:nt}})=>{var ut,it;return[Pe,new Mn(null!==(ut=nt.lower)&&void 0!==ut?ut:b.MIN_KEY,null!==(it=nt.upper)&&void 0!==it?it:b.MAX_KEY)]},He={get:Pe=>[te,new Mn(Pe.key)],getMany:Pe=>[te,(new Mn).addKeys(Pe.keys)],count:Ne,query:Ne,openCursor:Ne};return y(He).forEach(Pe=>{Ie[Pe]=function(nt){const{subscr:ut}=Ot;if(ut){const it=Ft=>{const kt=`idb://${g}/${A}/${Ft}`;return ut[kt]||(ut[kt]=new Mn)},vt=it(""),Qe=it(":dels"),[Xe,ft]=He[Pe](nt);if(it(Xe.name||"").add(ft),!Xe.isPrimaryKey){if("count"!==Pe){const Ft="query"===Pe&&me&&nt.values&&N.query({...nt,values:!1});return N[Pe].apply(this,arguments).then(kt=>{if("query"===Pe){if(me&&nt.values)return Ft.then(({result:yt})=>(vt.addKeys(yt),kt));const It=nt.values?kt.result.map(De):kt.result;nt.values?vt.addKeys(It):Qe.addKeys(It)}else if("openCursor"===Pe){const It=kt,yt=nt.values;return It&&Object.create(It,{key:{get:()=>(Qe.addKey(It.primaryKey),It.key)},primaryKey:{get(){const cn=It.primaryKey;return Qe.addKey(cn),cn}},value:{get:()=>(yt&&vt.addKey(It.primaryKey),It.value)}})}return kt})}Qe.add(I)}}return N[Pe].apply(this,arguments)}}),Ie}}}};class $i{constructor(g,I){this._middlewares={},this.verno=0;const A=$i.dependencies;this._options=I={addons:$i.addons,autoOpen:!0,indexedDB:A.indexedDB,IDBKeyRange:A.IDBKeyRange,...I},this._deps={indexedDB:I.indexedDB,IDBKeyRange:I.IDBKeyRange};const{addons:N}=I;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const X={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:On,dbReadyPromise:null,cancelOpen:On,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var te,De;X.dbReadyPromise=new K(De=>{X.dbReadyResolve=De}),X.openCanceller=new K((De,me)=>{X.cancelOpen=me}),this._state=X,this.name=g,this.on=Wo(this,"populate","blocked","versionchange","close",{ready:[Io,On]}),this.on.ready.subscribe=$e(this.on.ready.subscribe,De=>(me,Ie)=>{$i.vip(()=>{const Ne=this._state;if(Ne.openComplete)Ne.dbOpenError||K.resolve().then(me),Ie&&De(me);else if(Ne.onReadyBeingFired)Ne.onReadyBeingFired.push(me),Ie&&De(me);else{De(me);const He=this;Ie||De(function Pe(){He.on.ready.unsubscribe(me),He.on.ready.unsubscribe(Pe)})}})}),this.Collection=(te=this,as(ea.prototype,function(De,me){this.db=te;let Ie=Ss,Ne=null;if(me)try{Ie=me()}catch(ut){Ne=ut}const He=De._ctx,Pe=He.table,nt=Pe.hook.reading.fire;this._ctx={table:Pe,index:He.index,isPrimKey:!He.index||Pe.schema.primKey.keyPath&&He.index===Pe.schema.primKey.name,range:Ie,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:Ne,or:He.or,valueMapper:nt!==fr?nt:null}})),this.Table=(De=this,as(sr.prototype,function(me,Ie,Ne){this.db=De,this._tx=Ne,this.name=me,this.schema=Ie,this.hook=De._allTables[me]?De._allTables[me].hook:Wo(null,{creating:[zi,On],reading:[Nr,fr],updating:[Be,On],deleting:[En,On]})})),this.Transaction=function(De){return as(_n.prototype,function(me,Ie,Ne,He,Pe){this.db=De,this.mode=me,this.storeNames=Ie,this.schema=Ne,this.chromeTransactionDurability=He,this.idbtrans=null,this.on=Wo(this,"complete","error","abort"),this.parent=Pe||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new K((nt,ut)=>{this._resolve=nt,this._reject=ut}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},nt=>{var ut=this.active;return this.active=!1,this.on.error.fire(nt),this.parent?this.parent._reject(nt):ut&&this.idbtrans&&this.idbtrans.abort(),Zn(nt)})})}(this),this.Version=function(De){return as(ol.prototype,function(me){this.db=De,this._cfg={version:me,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(De){return as(Jr.prototype,function(me,Ie,Ne){this.db=De,this._ctx={table:me,index:":id"===Ie?null:Ie,or:Ne};const He=De._deps.indexedDB;if(!He)throw new Bt.MissingAPI;this._cmp=this._ascending=He.cmp.bind(He),this._descending=(Pe,nt)=>He.cmp(nt,Pe),this._max=(Pe,nt)=>He.cmp(Pe,nt)>0?Pe:nt,this._min=(Pe,nt)=>He.cmp(Pe,nt)<0?Pe:nt,this._IDBKeyRange=De._deps.IDBKeyRange})}(this),this.on("versionchange",De=>{De.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",De=>{!De.newVersion||De.newVersion<De.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${De.oldVersion/10}`)}),this._maxKey=eo(I.IDBKeyRange),this._createTransaction=(De,me,Ie,Ne)=>new this.Transaction(De,me,Ie,this._options.chromeTransactionDurability,Ne),this._fireOnBlocked=De=>{this.on("blocked").fire(De),Ur.filter(me=>me.name===this.name&&me!==this&&!me._state.vcFired).map(me=>me.on("versionchange").fire(De))},this.use(pn),this.use(Hi),this.use(Kn),this.use(pi),this.vip=Object.create(this,{_vip:{value:!0}}),N.forEach(De=>De(this))}version(g){if(isNaN(g)||g<.1)throw new Bt.Type("Given version is not a positive number");if(g=Math.round(10*g)/10,this.idbdb||this._state.isBeingOpened)throw new Bt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,g);const I=this._versions;var A=I.filter(N=>N._cfg.version===g)[0];return A||(A=new this.Version(g),I.push(A),I.sort(na),A.stores({}),this._state.autoSchema=!1,A)}_whenReady(g){return this.idbdb&&(this._state.openComplete||Ot.letThrough||this._vip)?g():new K((I,A)=>{if(this._state.openComplete)return A(new Bt.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void A(new Bt.DatabaseClosed);this.open().catch(On)}this._state.dbReadyPromise.then(I,A)}).then(g)}use({stack:g,create:I,level:A,name:N}){N&&this.unuse({stack:g,name:N});const X=this._middlewares[g]||(this._middlewares[g]=[]);return X.push({stack:g,create:I,level:A??10,name:N}),X.sort((te,De)=>te.level-De.level),this}unuse({stack:g,name:I,create:A}){return g&&this._middlewares[g]&&(this._middlewares[g]=this._middlewares[g].filter(N=>A?N.create!==A:!!I&&N.name!==I)),this}open(){return function ba(b){const g=b._state,{indexedDB:I}=b._deps;if(g.isBeingOpened||b.idbdb)return g.dbReadyPromise.then(()=>g.dbOpenError?Zn(g.dbOpenError):b);Ee&&(g.openCanceller._stackHolder=dt()),g.isBeingOpened=!0,g.dbOpenError=null,g.openComplete=!1;const A=g.openCanceller;function N(){if(g.openCanceller!==A)throw new Bt.DatabaseClosed("db.open() was cancelled")}let X=g.dbReadyResolve,te=null,De=!1;return K.race([A,(typeof navigator>"u"?K.resolve():Us()).then(()=>new K((me,Ie)=>{if(N(),!I)throw new Bt.MissingAPI;const Ne=b.name,He=g.autoSchema?I.open(Ne):I.open(Ne,Math.round(10*b.verno));if(!He)throw new Bt.MissingAPI;He.onerror=vr(Ie),He.onblocked=ii(b._fireOnBlocked),He.onupgradeneeded=ii(Pe=>{if(te=He.transaction,g.autoSchema&&!b._options.allowEmptyDB){He.onerror=Gi,te.abort(),He.result.close();const ut=I.deleteDatabase(Ne);ut.onsuccess=ut.onerror=ii(()=>{Ie(new Bt.NoSuchDatabase(`Database ${Ne} doesnt exist`))})}else{te.onerror=vr(Ie);var nt=Pe.oldVersion>Math.pow(2,62)?0:Pe.oldVersion;De=nt<1,b._novip.idbdb=He.result,function bo(b,g,I,A){const N=b._dbSchema,X=b._createTransaction("readwrite",b._storeNames,N);X.create(I),X._completion.catch(A);const te=X._reject.bind(X),De=Ot.transless||Ot;ho(()=>{Ot.trans=X,Ot.transless=De,0===g?(y(N).forEach(me=>{us(I,me,N[me].primKey,N[me].indexes)}),Is(b,I),K.follow(()=>b.on.populate.fire(X)).catch(te)):function({_novip:me},Ie,Ne,He){const Pe=[],nt=me._versions;let ut=me._dbSchema=$a(0,me.idbdb,He),it=!1;return nt.filter(Xe=>Xe._cfg.version>=Ie).forEach(Xe=>{Pe.push(()=>{const ft=ut,Ft=Xe._cfg.dbschema;ds(me,ft,He),ds(me,Ft,He),ut=me._dbSchema=Ft;const kt=Ts(ft,Ft);kt.add.forEach(yt=>{us(He,yt[0],yt[1].primKey,yt[1].indexes)}),kt.change.forEach(yt=>{if(yt.recreate)throw new Bt.Upgrade("Not yet support for changing primary key");{const cn=He.objectStore(yt.name);yt.add.forEach(xt=>Ms(cn,xt)),yt.change.forEach(xt=>{cn.deleteIndex(xt.name),Ms(cn,xt)}),yt.del.forEach(xt=>cn.deleteIndex(xt))}});const It=Xe._cfg.contentUpgrade;if(It&&Xe._cfg.version>Ie){Is(me,He),Ne._memoizedTables={},it=!0;let yt=Fe(Ft);kt.del.forEach(Bn=>{yt[Bn]=ft[Bn]}),Qi(me,[me.Transaction.prototype]),to(me,[me.Transaction.prototype],y(yt),yt),Ne.schema=yt;const cn=Oe(It);let xt;cn&&Uo();const ei=K.follow(()=>{if(xt=It(Ne),xt&&cn){var Bn=Ii.bind(null,null);xt.then(Bn,Bn)}});return xt&&"function"==typeof xt.then?K.resolve(xt):ei.then(()=>xt)}}),Pe.push(ft=>{var Ft,kt;(!it||!Oo)&&(Ft=Xe._cfg.dbschema,[].slice.call((kt=ft).db.objectStoreNames).forEach(It=>null==Ft[It]&&kt.db.deleteObjectStore(It))),Qi(me,[me.Transaction.prototype]),to(me,[me.Transaction.prototype],me._storeNames,me._dbSchema),Ne.schema=me._dbSchema})}),function Qe(){return Pe.length?K.resolve(Pe.shift()(Ne.idbtrans)).then(Qe):K.resolve()}().then(()=>{var Xe,ft;ft=He,y(Xe=ut).forEach(Ft=>{ft.db.objectStoreNames.contains(Ft)||us(ft,Ft,Xe[Ft].primKey,Xe[Ft].indexes)})})}(b,g,X,I).catch(te)})}(b,nt/10,te,Ie)}},Ie),He.onsuccess=ii(()=>{te=null;const Pe=b._novip.idbdb=He.result,nt=de(Pe.objectStoreNames);if(nt.length>0)try{const it=Pe.transaction(1===(ut=nt).length?ut[0]:ut,"readonly");g.autoSchema?function({_novip:vt},Qe,Xe){vt.verno=Qe.version/10;const ft=vt._dbSchema=$a(0,Qe,Xe);vt._storeNames=de(Qe.objectStoreNames,0),to(vt,[vt._allTables],y(ft),ft)}(b,Pe,it):(ds(b,b._dbSchema,it),function(vt,Qe){const Xe=Ts($a(0,vt.idbdb,Qe),vt._dbSchema);return!(Xe.add.length||Xe.change.some(ft=>ft.add.length||ft.change.length))}(b,it)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Is(b,it)}catch{}var ut;Ur.push(b),Pe.onversionchange=ii(it=>{g.vcFired=!0,b.on("versionchange").fire(it)}),Pe.onclose=ii(it=>{b.on("close").fire(it)}),De&&function({indexedDB:it,IDBKeyRange:vt},Qe){!Hs(it)&&Qe!==$n&&ia(it,vt).put({name:Qe}).catch(On)}(b._deps,Ne),me()},Ie)}))]).then(()=>(N(),g.onReadyBeingFired=[],K.resolve(ra(()=>b.on.ready.fire(b.vip))).then(function me(){if(g.onReadyBeingFired.length>0){let Ie=g.onReadyBeingFired.reduce(Io,On);return g.onReadyBeingFired=[],K.resolve(ra(()=>Ie(b.vip))).then(me)}}))).finally(()=>{g.onReadyBeingFired=null,g.isBeingOpened=!1}).then(()=>b).catch(me=>{g.dbOpenError=me;try{te&&te.abort()}catch{}return A===g.openCanceller&&b._close(),Zn(me)}).finally(()=>{g.openComplete=!0,X()})}(this)}_close(){const g=this._state,I=Ur.indexOf(this);if(I>=0&&Ur.splice(I,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}g.dbReadyPromise=new K(A=>{g.dbReadyResolve=A}),g.openCanceller=new K((A,N)=>{g.cancelOpen=N})}close(){this._close();const g=this._state;this._options.autoOpen=!1,g.dbOpenError=new Bt.DatabaseClosed,g.isBeingOpened&&g.cancelOpen(g.dbOpenError)}delete(){const g=arguments.length>0,I=this._state;return new K((A,N)=>{const X=()=>{this.close();var te=this._deps.indexedDB.deleteDatabase(this.name);te.onsuccess=ii(()=>{(function({indexedDB:De,IDBKeyRange:me},Ie){!Hs(De)&&Ie!==$n&&ia(De,me).delete(Ie).catch(On)})(this._deps,this.name),A()}),te.onerror=vr(N),te.onblocked=this._fireOnBlocked};if(g)throw new Bt.InvalidArgument("Arguments not allowed in db.delete()");I.isBeingOpened?I.dbReadyPromise.then(X):X()})}backendDB(){return this.idbdb}isOpen(){return null!==this.idbdb}hasBeenClosed(){const g=this._state.dbOpenError;return g&&"DatabaseClosed"===g.name}hasFailed(){return null!==this._state.dbOpenError}dynamicallyOpened(){return this._state.autoSchema}get tables(){return y(this._allTables).map(g=>this._allTables[g])}transaction(){const g=kr.apply(this,arguments);return this._transaction.apply(this,g)}_transaction(g,I,A){let N=Ot.trans;N&&N.db===this&&-1===g.indexOf("!")||(N=null);const X=-1!==g.indexOf("?");let te,De;g=g.replace("!","").replace("?","");try{if(De=I.map(Ie=>{var Ne=Ie instanceof this.Table?Ie.name:Ie;if("string"!=typeof Ne)throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return Ne}),"r"==g||g===Ir)te=Ir;else{if("rw"!=g&&g!=Tr)throw new Bt.InvalidArgument("Invalid transaction mode: "+g);te=Tr}if(N){if(N.mode===Ir&&te===Tr){if(!X)throw new Bt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");N=null}N&&De.forEach(Ie=>{if(N&&-1===N.storeNames.indexOf(Ie)){if(!X)throw new Bt.SubTransaction("Table "+Ie+" not included in parent transaction.");N=null}}),X&&N&&!N.active&&(N=null)}}catch(Ie){return N?N._promise(null,(Ne,He)=>{He(Ie)}):Zn(Ie)}const me=zs.bind(null,this,te,De,N,A);return N?N._promise(te,me,"lock"):Ot.trans?Hr(Ot.transless,()=>this._whenReady(me)):this._whenReady(me)}table(g){if(!re(this._allTables,g))throw new Bt.InvalidTable(`Table ${g} does not exist`);return this._allTables[g]}}const Si=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class br{constructor(g){this._subscribe=g}subscribe(g,I,A){return this._subscribe(g&&"function"!=typeof g?g:{next:g,error:I,complete:A})}[Si](){return this}}function qo(b,g){return y(g).forEach(I=>{no(b[I]||(b[I]=new Mn),g[I])}),b}let Ni;try{Ni={indexedDB:_.indexedDB||_.mozIndexedDB||_.webkitIndexedDB||_.msIndexedDB,IDBKeyRange:_.IDBKeyRange||_.webkitIDBKeyRange}}catch{Ni={indexedDB:null,IDBKeyRange:null}}const Bi=$i;function $t(b){let g=qn;try{qn=!0,Ei.storagemutated.fire(b)}finally{qn=g}}fe(Bi,{...Er,delete:b=>new Bi(b,{addons:[]}).delete(),exists:b=>new Bi(b,{addons:[]}).open().then(g=>(g.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(b){try{return function({indexedDB:g,IDBKeyRange:I}){return Hs(g)?Promise.resolve(g.databases()).then(A=>A.map(N=>N.name).filter(N=>N!==$n)):ia(g,I).toCollection().primaryKeys()}(Bi.dependencies).then(b)}catch{return Zn(new Bt.MissingAPI)}},defineClass:()=>function(b){j(this,b)},ignoreTransaction:b=>Ot.trans?Hr(Ot.transless,b):b(),vip:ra,async:function(b){return function(){try{var g=$o(b.apply(this,arguments));return g&&"function"==typeof g.then?g:K.resolve(g)}catch(I){return Zn(I)}}},spawn:function(b,g,I){try{var A=$o(b.apply(I,g||[]));return A&&"function"==typeof A.then?A:K.resolve(A)}catch(N){return Zn(N)}},currentTransaction:{get:()=>Ot.trans||null},waitFor:function(b,g){const I=K.resolve("function"==typeof b?Bi.ignoreTransaction(b):b).timeout(g||6e4);return Ot.trans?Ot.trans.waitFor(I):I},Promise:K,debug:{get:()=>Ee,set:b=>{Ye(b,"dexie"===b?()=>!0:on)}},derive:V,extend:j,props:fe,override:$e,Events:Wo,on:Ei,liveQuery:function Nn(b){let g,I=!1;const A=new br(N=>{const X=Oe(b);let te=!1,De={},me={};const Ie={get closed(){return te},unsubscribe:()=>{te=!0,Ei.storagemutated.unsubscribe(nt)}};N.start&&N.start(Ie);let Ne=!1,He=!1;function Pe(){return y(me).some(it=>De[it]&&function No(b,g){const I=Yn(g);let A=I.next();if(A.done)return!1;let N=A.value;const X=Yn(b);let te=X.next(N.from),De=te.value;for(;!A.done&&!te.done;){if(yi(De.from,N.to)<=0&&yi(De.to,N.from)>=0)return!0;yi(N.from,De.from)<0?N=(A=I.next(De.from)).value:De=(te=X.next(N.from)).value}return!1}(De[it],me[it]))}const nt=it=>{qo(De,it),Pe()&&ut()},ut=()=>{if(Ne||te)return;De={};const it={},vt=function(Qe){X&&Uo();const Xe=()=>ho(b,{subscr:Qe,trans:null}),ft=Ot.trans?Hr(Ot.transless,Xe):Xe();return X&&ft.then(Ii,Ii),ft}(it);He||(Ei(vo,nt),He=!0),Ne=!0,Promise.resolve(vt).then(Qe=>{I=!0,g=Qe,Ne=!1,te||(Pe()?ut():(De={},me=it,N.next&&N.next(Qe)))},Qe=>{Ne=!1,I=!1,N.error&&N.error(Qe),Ie.unsubscribe()})};return ut(),Ie});return A.hasValue=()=>I,A.getValue=()=>g,A},extendObservabilitySet:qo,getByKeyPath:Re,setByKeyPath:be,delByKeyPath:function(b,g){"string"==typeof g?be(b,g,void 0):"length"in g&&[].map.call(g,function(I){be(b,I,void 0)})},shallowClone:Fe,deepClone:ze,getObjectDiff:fi,cmp:yi,asap:ve,minKey:xr,addons:[],connections:Ur,errnames:vi,dependencies:Ni,semVer:"3.2.4",version:"3.2.4".split(".").map(b=>parseInt(b)).reduce((b,g,I)=>b+g/Math.pow(10,2*I))}),Bi.maxKey=eo(Bi.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ei(vo,b=>{if(!qn){let g;Jn?(g=document.createEvent("CustomEvent"),g.initCustomEvent(ri,!0,!0,b)):g=new CustomEvent(ri,{detail:b}),qn=!0,dispatchEvent(g),qn=!1}}),addEventListener(ri,({detail:b})=>{qn||$t(b)}));let qn=!1;if(typeof BroadcastChannel<"u"){const b=new BroadcastChannel(ri);"function"==typeof b.unref&&b.unref(),Ei(vo,g=>{qn||b.postMessage(g)}),b.onmessage=g=>{g.data&&$t(g.data)}}else if(typeof self<"u"&&typeof navigator<"u"){Ei(vo,g=>{try{qn||(typeof localStorage<"u"&&localStorage.setItem(ri,JSON.stringify({trig:Math.random(),changedParts:g})),"object"==typeof self.clients&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(I=>I.postMessage({type:ri,changedParts:g})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",g=>{if(g.key===ri){const I=JSON.parse(g.newValue);I&&$t(I.changedParts)}});const b=self.document&&navigator.serviceWorker;b&&b.addEventListener("message",function({data:g}){g&&g.type===ri&&$t(g.changedParts)})}K.rejectionMapper=function(b,g){if(!b||b instanceof dn||b instanceof TypeError||b instanceof SyntaxError||!b.name||!nr[b.name])return b;var I=new nr[b.name](g||b.message,b);return"stack"in b&&oe(I,"stack",{get:function(){return this.inner.stack}}),I},Ye(Ee,on);const hs=new class Qo extends $i{constructor(){super("AppDb"),this.version(7).stores({FoldersTable:"uuid,name,mediaType",RecentMediaFilesTable:"uuid",MediaFilesTable:"uuid,dirHandlerId,artist,album,mediaType",SettingsTable:"key"})}}},8407:(ct,pe,M)=>{M.d(pe,{g:()=>_});class _{constructor(ne,j,U,Z){this.message=ne,this.object=j,this.fileName=U,this.showToUser=Z}}},5487:(ct,pe,M)=>{M.d(pe,{c:()=>re});var _=M(5861),y=M(8645),ne=M(6973);function j(fe,q){const oe="object"==typeof q;return new Promise((V,P)=>{let ee,Q=!1;fe.subscribe({next:de=>{ee=de,Q=!0},error:P,complete:()=>{Q?V(ee):oe?V(q.defaultValue):P(new ne.K)}})})}var U=M(8180),Z=M(9467);let re=(()=>{class fe{constructor(){this.alert$=new y.x,this.alertResult$=new y.x,this.confirm$=new y.x,this.confirmResult$=new y.x}showAlert(oe){var V=this;return(0,_.Z)(function*(){return V.alert$.next(oe),yield j(V.alertResult$.asObservable().pipe((0,U.q)(1)))})()}showConfirm(oe){var V=this;return(0,_.Z)(function*(){return V.confirm$.next(oe),yield j(V.confirmResult$.asObservable().pipe((0,U.q)(1)))})()}static#e=this.\u0275fac=function(V){return new(V||fe)};static#t=this.\u0275prov=Z.Yz7({token:fe,factory:fe.\u0275fac,providedIn:"root"})}return fe})()},5563:(ct,pe,M)=>{M.d(pe,{M:()=>Q});var _=M(5861),y=M(6296),ne=M(7437),j=M(8407),U=M(4913),Z=M(2507),re=M(745),fe=M.n(re),q=M(4004),P=M(9467);let Q=(()=>{class ee{addRecentMediaFile($e){var we=this;return(0,_.Z)(function*(){yield ne.db.RecentMediaFilesTable.add({uuid:$e},$e);const ve=yield ne.db.RecentMediaFilesTable.toArray();ve.length>20&&we.removeRecentMediaFile(ve[0].uuid)})()}removeRecentMediaFile($e){return(0,_.Z)(function*(){Array.isArray($e)?yield ne.db.RecentMediaFilesTable.bulkDelete($e):yield ne.db.RecentMediaFilesTable.delete($e)})()}getRecentMediaFiles(){return(0,_.Z)(function*(){const we=(yield ne.db.RecentMediaFilesTable.toCollection().toArray()).map(qe=>qe.uuid);return yield ne.db.MediaFilesTable.bulkGet(we)})()}getMedia($e,we=!1){return(0,_.Z)(function*(){const ve=yield ne.db.MediaFilesTable.get($e);if(!ve)return;if(!we)return ve;let qe=yield ve.handler.queryPermission({mode:"read"});if("granted"==qe||(qe=yield ve.handler.requestPermission({mode:"read"}),"granted"==qe))return ve;throw new j.g("Permission not granted",null,"db.service.ts",!0)})()}saveMediaFilesInDb($e,we){return(0,_.Z)(function*(){let ve,qe;const Re=Array.isArray($e);Re?(ve=$e,qe=U.pB):(qe=$e.handler.name,ve=$e.handler.entries());const be=[],Fe=document.createElement("video");var ie,Te=!1,Ve=!1;try{for(var xe,he=(0,y.Z)(ve);Te=!(xe=yield he.next()).done;Te=!1){let ze=xe.value;if("file"===ze[1].kind){const le=ze[1],ue=yield le.getFile(),W=Fe.canPlayType(ue.type);if("maybe"!==W&&"probably"!==W)continue;let ce;const je=(0,q.Z)(),et=ue.name;if("audio"===we){const Oe=yield(0,Z.Cj)(ue);let Ee=fe()(Oe),Ye=null;Ee&&Ee.image?.data&&(Ye=new Blob([Ee.image.data],{type:Ee.image.mime})),ce={title:Ee?Ee.title??U.gT:U.gT,album:Ee?Ee.album??U.$d:U.$d,genre:Ee?Ee.genre??U.GY:U.GY,year:Ee?Ee.year??U.lf:U.lf,albumArt:Ye,artist:Ee?Ee.artist??U.xD:U.xD}}else ce={title:ue.name.split(".").at(-2),album:U.$d,artist:U.xD,genre:U.GY,year:U.lf,albumArt:null};const Dt={uuid:je,name:et,mediaType:we,fileName:et,dirHandlerId:Re?null:$e.uuid,folderName:qe,handler:le,playing:!1,...ce};be.push(Dt)}}}catch(ze){Ve=!0,ie=ze}finally{try{Te&&null!=he.return&&(yield he.return())}finally{if(Ve)throw ie}}if(be.length&&(yield ne.db.MediaFilesTable.bulkAdd(be)),!Re)return be})()}getMediaFiles($e,we="all",ve=0){return(0,_.Z)(function*(){return"all"===we?function V(ee){return ee.map((de,$e,we)=>(de.nextSongId=we[$e+1]?.uuid,de.prevSongId=we[$e-1]?.uuid,de))}(yield ne.db.MediaFilesTable.where({mediaType:$e}).offset(ve).toArray()):yield ne.db.MediaFilesTable.where({mediaType:$e}).offset(ve).limit(we).toArray()})()}getSetting($e,we){return(0,_.Z)(function*(){return(yield ne.db.SettingsTable.get($e))?.value??we})()}setSetting($e){return(0,_.Z)(function*(){return yield ne.db.SettingsTable.put($e,$e.key)})()}static#e=this.\u0275fac=function(we){return new(we||ee)};static#t=this.\u0275prov=P.Yz7({token:ee,factory:ee.\u0275fac,providedIn:"root"})}return ee})()},5502:(ct,pe,M)=>{M.d(pe,{y:()=>fe});var _=M(5861),y=M(6296),ne=M(9467),j=M(7437),U=M(4004),Z=M(8407),re=M(5487);let fe=(()=>{class q{#e=(0,ne.f3M)(re.c);#t=new Map;constructor(){}pickNewDirectory(V){var P=this;return(0,_.Z)(function*(){if(!window.showDirectoryPicker)throw new Z.g("Folder picker is not supported in you browser",null,"file-system.service",!0);const Q=yield showDirectoryPicker(),de=yield Q.entries().next();if(de.done||!de.value)throw new Z.g("Empty folder",null,"file-system.service",!0);const $e=yield P.#n(Q);return $e.push(Q),(yield P.#i(V,$e,"dir")).map(ve=>{const qe=ve.name,Re=(0,U.Z)(),be={handler:ve,name:qe,uuid:Re,mediaType:V};return j.db.FoldersTable.add(be,Re),be})})()}pickNewFiles(V){var P=this;return(0,_.Z)(function*(){if(!window.showOpenFilePicker)throw new Z.g("File picker is not supported in you browser",null,"file-system.service",!0);const Q={["audio"===V?"audio/*":"video/*"]:["audio"==V?".mp3":".mp4"]},ee=yield showOpenFilePicker({multiple:!0,excludeAcceptAllOption:!0,types:[{description:`Pick ${V} files`,accept:Q}]});return yield P.#i(V,ee,"file")})()}#n(V){var P=this;return(0,_.Z)(function*(){const Q=V.entries(),ee=[];var we,de=!1,$e=!1;try{for(var qe,ve=(0,y.Z)(Q);de=!(qe=yield ve.next()).done;de=!1){let Re=qe.value;if("directory"===Re[1].kind){ee.push(Re[1]);const be=yield P.#n(Re[1]);be.length>0&&ee.push(...be)}}}catch(Re){$e=!0,we=Re}finally{try{de&&null!=ve.return&&(yield ve.return())}finally{if($e)throw we}}return ee.length>0?ee:[]})()}#i(V,P,Q){var ee=this;return(0,_.Z)(function*(){const de="dir"===Q?yield ee.getAllDirHandlers(V):yield ee.getAllFileHandlers();return 0==de.length?P:(yield Promise.all(P.map(function(){var ve=(0,_.Z)(function*(qe){const be=(yield Promise.all(de.map(Fe=>Fe.handler.isSameEntry(qe)))).some(Fe=>Fe);return{handler:qe,isFound:be}});return function(qe){return ve.apply(this,arguments)}}()))).filter(ve=>!ve.isFound).map(ve=>ve.handler)})()}getFileFromDirHandler(V,P){var Q=this;return(0,_.Z)(function*(){yield Q.#r(V);const ee=yield V.handler.getFileHandle(P,{create:!1});if(ee)return yield ee.getFile();throw new Z.g("File not found please update library",null,"filesystem.service",!0)})()}getDirHandler(V){var P=this;return(0,_.Z)(function*(){if(P.#t.has(V))return P.#t.get(V);const Q=yield j.db.FoldersTable.get(V);return Q?(P.#t.set(V,Q),Q):void 0})()}getSavedFolders(V){var P=this;return(0,_.Z)(function*(){return(yield P.getAllDirHandlers(V)).map(de=>({name:de.handler.name,id:de.uuid}))})()}getAllDirHandlers(V,P){var Q=this;return(0,_.Z)(function*(){const ee=yield j.db.FoldersTable.where({mediaType:V}).toArray();if(ee.length>0){var we,de=!1,$e=!1;try{for(var qe,ve=(0,y.Z)(ee);de=!(qe=yield ve.next()).done;de=!1){let Re=qe.value;Q.#t.has(Re.uuid)||Q.#t.set(Re.uuid,Re),P&&(yield Q.#r(Re))}}catch(Re){$e=!0,we=Re}finally{try{de&&null!=ve.return&&(yield ve.return())}finally{if($e)throw we}}return ee}return[]})()}getAllFileHandlers(){return(0,_.Z)(function*(){return yield j.db.MediaFilesTable.toArray()})()}hasDirectoryHandles(){return(0,_.Z)(function*(){return(yield j.db.FoldersTable.count())>0})()}hasMusicFiles(){return(0,_.Z)(function*(){return(yield j.db.MediaFilesTable.count())>0})()}#r(V){var P=this;return(0,_.Z)(function*(){try{if("granted"==(yield V.handler.queryPermission({mode:"read"})))return;if("granted"!==(yield V.handler.requestPermission({mode:"read"})))throw new Z.g("Permission not granted",null,"filesystem.service",!0)}catch(Q){if(18===Q.code&&"ok"===(yield P.#e.showConfirm({message:"Please grant permission to access media file"}))&&"granted"!==(yield V.handler.requestPermission({mode:"read"})))throw new Z.g("Permission not granted",null,"filesystem.service",!0)}})()}removeDirHandler(V,P=!0){return(0,_.Z)(function*(){if(!0===P){const Q=yield j.db.MediaFilesTable.where({dirHandlerId:V}).delete();console.log(`${Q} files removed`)}return yield j.db.FoldersTable.delete(V)})()}static#o=this.\u0275fac=function(P){return new(P||q)};static#s=this.\u0275prov=ne.Yz7({token:q,factory:q.\u0275fac,providedIn:"root"})}return q})()},9191:(ct,pe,M)=>{M.d(pe,{J:()=>ee});var _=M(5861),y=M(6296),ne=M(9467),j=M(5502),U=M(5563),Z=M(7437),re=M(2507),fe=M(745),q=M.n(fe),oe=M(4004),V=M(4913),P=M(2758),Q=M(5522);let ee=(()=>{class de{#e;#t;#n;constructor(){this.songs=(0,ne.tdS)(new Map),this.activeSong=null,this.#e=(0,ne.f3M)(j.y),this.#t=(0,ne.f3M)(U.M),this.#n=(0,ne.f3M)(P.R),(0,Q.Dx)(this.#n.paused_).subscribe(we=>{this.upDatePlayingState(we?"pause":"play",void 0,!1)}),this.#n.next$.subscribe(()=>{if("audio"!==this.#n.activeMediaType||!this.activeSong)return;const we=this.songs().get(this.activeSong.uuid)?.nextSongId;we&&this.play(we)}),this.#n.prev$.subscribe(()=>{if("audio"!==this.#n.activeMediaType||!this.activeSong)return;const we=this.songs().get(this.activeSong.uuid)?.prevSongId;we&&this.play(we)})}addNewFolder(){var we=this;return(0,_.Z)(function*(){const ve=yield we.#e.pickNewDirectory("audio");var be,qe=!1,Re=!1;try{for(var Te,Fe=(0,y.Z)(ve);qe=!(Te=yield Fe.next()).done;qe=!1){let Ve=Te.value;yield we.#t.saveMediaFilesInDb(Ve,"audio")}}catch(Ve){Re=!0,be=Ve}finally{try{qe&&null!=Fe.return&&(yield Fe.return())}finally{if(Re)throw be}}})()}addNewFiles(we){var ve=this;return(0,_.Z)(function*(){const qe=yield ve.#e.pickNewFiles(we);qe.length>0&&(yield ve.#i(qe))})()}#i(we){return(0,_.Z)(function*(){const ve=[],qe=document.createElement("audio");var Fe,Re=!1,be=!1;try{for(var Ve,Te=(0,y.Z)(we);Re=!(Ve=yield Te.next()).done;Re=!1){let ie=Ve.value;if("file"===ie.kind){const he=yield ie.getFile(),xe=qe.canPlayType(he.type);if("maybe"!==xe&&"probably"!==xe)continue;const ze=yield(0,re.Cj)(he);let le=q()(ze);const ue=(0,oe.Z)(),W=he.name;ve.push({uuid:ue,mediaType:"audio",name:W,fileName:W,handler:ie,dirHandlerId:null,folderName:null,playing:!1,title:le?le.title??V.gT:V.gT,album:le?le.album??V.$d:V.$d,albumArt:null,artist:le?le.artist??V.xD:V.xD,genre:le?le.genre??V.GY:V.GY,year:le?le.year??V.lf:V.lf})}}}catch(ie){be=!0,Fe=ie}finally{try{Re&&null!=Te.return&&(yield Te.return())}finally{if(be)throw Fe}}return ve.length&&Z.db.MediaFilesTable.bulkAdd(ve),ve})()}updateLibs(we){var ve=this;return(0,_.Z)(function*(){const qe=yield ve.#e.getAllDirHandlers("audio",!0);if(qe.length>0){yield Z.db.MediaFilesTable.clear();for(const Re of qe)"granted"!==(yield Re.handler.queryPermission({mode:"read"}))&&"granted"!==(yield Re.handler.requestPermission({mode:"read"}))||(yield ve.#t.saveMediaFilesInDb(Re,"audio"));we?ve.setSongsList(we):ve.setSongsList()}})()}setSongsList(we){var ve=this;return(0,_.Z)(function*(){const qe=Re=>Re.map((be,Fe,Te)=>(be.nextSongId=Te[Fe+1]?.uuid,be.prevSongId=Te[Fe-1]?.uuid,ve.activeSong&&!ve.#n.paused_()&&(be.playing=be.uuid===ve.activeSong.uuid),[be.uuid,be]));if(we){if(we.filterType&&we.filterValue){const Re=yield Z.db.MediaFilesTable.where({mediaType:"audio",["folderName"===we.filterType?"dirHandlerId":we.filterType]:we.filterValue}).toArray();if(Re.length>0){const be=qe(Re);ve.songs.set(new Map(be))}}}else{const Re=yield Z.db.MediaFilesTable.where({mediaType:"audio"}).toArray();if(Re.length>0){const be=qe(Re);ve.songs.set(new Map(be))}}})()}play(we){var ve=this;return(0,_.Z)(function*(){ve.activeSong?.uuid!==we?(ve.#n.newPlay$.next(we),ve.upDatePlayingState("play",we),ve.activeSong=ve.songs().get(we)??null,ve.activeSong&&(ve.#t.addRecentMediaFile(we),ve.#n.activeMediaType="audio")):ve.upDatePlayingState(ve.#n.paused_()?"play":"pause")})()}upDatePlayingState(we,ve,qe){this.songs.update(Re=>{if(ve){if(this.activeSong){const Fe=Re.get(this.activeSong.uuid);Fe&&(Fe.playing=!1)}const be=Re.get(ve);be&&(be.playing=!0)}else if(this.activeSong){const be=Re.get(this.activeSong.uuid);be&&(be.playing="play"===we)}return Re}),!1!==qe&&this.#n.paused_.set("pause"===we)}getSavedFolders(){var we=this;return(0,_.Z)(function*(){return yield we.#e.getSavedFolders("audio")})()}getMetaData(we){var ve=this;return new Promise(function(){var qe=(0,_.Z)(function*(Re){if("folderName"===we){const Te=(yield ve.getSavedFolders()).map(Ve=>[Ve.name,{metaDataTitle:Ve.name,albumArt:"/assets/folder.svg",requestedKey:we,folderId:Ve.id}]);Re(new Map(Te))}const be=new Map;return yield Z.db.MediaFilesTable.each(Fe=>{if(be.has(Fe[we]))return;let Te="";if(Fe.albumArt)try{Te=URL.createObjectURL(Fe.albumArt)}catch{Te="/assets/"+("artist"===we?"artist.svg":"album"===we?"album.svg":"folder.svg")}else Te="/assets/"+("artist"===we?"artist.svg":"album"===we?"album.svg":"folder.svg");be.set(Fe[we],{folderId:"",albumArt:Te,metaDataTitle:Fe[we]||"Unknown "+we,requestedKey:we})}),Re(be),null});return function(Re){return qe.apply(this,arguments)}}())}getRecentMedia(){var we=this;return(0,_.Z)(function*(){const ve=yield we.#t.getRecentMediaFiles();return ve.reverse(),ve})()}hasDirectoryHandles(){var we=this;return(0,_.Z)(function*(){return yield we.#e.hasDirectoryHandles()})()}hasSongs(){var we=this;return(0,_.Z)(function*(){return yield we.#e.hasMusicFiles()})()}static#r=this.\u0275fac=function(ve){return new(ve||de)};static#o=this.\u0275prov=ne.Yz7({token:de,factory:de.\u0275fac,providedIn:"root"})}return de})()},2758:(ct,pe,M)=>{M.d(pe,{R:()=>ne});var _=M(9467),y=M(8645);let ne=(()=>{class j{constructor(){this.newPlay$=new y.x,this.ended$=new y.x,this.next$=new y.x,this.prev$=new y.x,this.seekTime$=new y.x,this.showPlayer_=(0,_.tdS)(!1),this.paused_=(0,_.tdS)(!0),this.mediaDuration_=(0,_.tdS)(0),this.timeElapsed_=(0,_.tdS)(0),this.title_=(0,_.tdS)(""),this.album_=(0,_.tdS)(""),this.albumArt_=(0,_.tdS)("assets/album.svg"),this.currentPlaylist=[],navigator.mediaSession&&(navigator.mediaSession.setActionHandler("nexttrack",Z=>{this.next$.next()}),navigator.mediaSession.setActionHandler("previoustrack",Z=>{this.prev$.next()}),navigator.mediaSession.setActionHandler("seekforward",Z=>{console.log(Z)}),navigator.mediaSession.setActionHandler("seekbackward",Z=>{console.log(Z)}),navigator.mediaSession.setActionHandler("play",Z=>{this.paused_.set(!1)}),navigator.mediaSession.setActionHandler("pause",Z=>{this.paused_.set(!0)}))}static#e=this.\u0275fac=function(re){return new(re||j)};static#t=this.\u0275prov=_.Yz7({token:j,factory:j.\u0275fac,providedIn:"root"})}return j})()},9752:(ct,pe,M)=>{M.d(pe,{g:()=>fe});var _=M(5861),y=M(9467),ne=M(5563),j=M(8720),U=M(277),Z=M(1134),re=M(5502);let fe=(()=>{class q{#e=(0,y.f3M)(ne.M);#t=(0,y.f3M)(re.y);#n=!1;#i;applyTheme(V){var P=this;return(0,_.Z)(function*(){let Q;Q=V||(yield P.getSelectedThemeMode());let ee=j.h.LightMode;"light"===Q?(ee=j.h.LightMode,P.#n&&P.#i&&(P.#i.onchange=null,P.#n=!1)):"dark"===Q?(ee=j.h.DarkMode,P.#n&&P.#i&&(P.#i.onchange=null,P.#n=!1)):"system"===Q&&(P.#i||(P.#i=window.matchMedia("(prefers-color-scheme: dark)")),ee=P.#i?.matches?j.h.DarkMode:j.h.LightMode,P.#n||(P.#i.onchange=de=>{de.matches?P.#r(j.h.DarkMode):P.#r(j.h.LightMode)},P.#n=!0)),P.#r(ee),P.#e.setSetting({key:"color-theme",value:Q})})()}getSelectedThemeMode(){var V=this;return(0,_.Z)(function*(){return(yield V.#e.getSetting("color-theme"))??"system"})()}#r(V){V===j.h.DarkMode?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),U.q2d.setValueFor(document.body,V)}getSavedFolders(V){var P=this;return(0,_.Z)(function*(){return yield P.#t.getSavedFolders(V)})()}removeFolder(V){var P=this;return(0,_.Z)(function*(){return yield P.#t.removeDirHandler(V,!0)})()}setAccentColor(V){const P=this.#o(V);U.R6v.setValueFor(document.body,Z.w.from(P))}#o(V){3===(V=V.replace(/^#/,"")).length&&(V=V.split("").map(function($e){return $e+$e}).join(""));var P=parseInt(V,16);return{r:P>>16&255,g:P>>8&255,b:255&P}}static#s=this.\u0275fac=function(P){return new(P||q)};static#a=this.\u0275prov=y.Yz7({token:q,factory:q.\u0275fac,providedIn:"root"})}return q})()},7018:(ct,pe,M)=>{M.d(pe,{d:()=>Z});var _=M(5861),y=M(9467),ne=M(6814);function j(re,fe){if(1&re){const q=y.EpF();y.TgZ(0,"fluent-button",6),y.NdJ("click",function(){y.CHM(q);const V=y.oxw();return y.KtG(V.onBtn2Click())}),y._uU(1),y.qZA()}if(2&re){const q=y.oxw();y.xp6(1),y.hij(" ",q.btn1Txt," ")}}function U(re,fe){if(1&re){const q=y.EpF();y.TgZ(0,"fluent-button",7),y.NdJ("click",function(){y.CHM(q);const V=y.oxw();return y.KtG(V.onAddFileClick())}),y._uU(1),y.qZA()}if(2&re){const q=y.oxw();y.xp6(1),y.hij(" ",q.btn2Txt," ")}}let Z=(()=>{class re{constructor(){this.title="We couldn't find any music",this.message="Your music library doesn't contain any music content",this.btn1Txt="",this.btn2Txt="",this.refreshList=new y.vpe}onAddFileClick(){return(0,_.Z)(function*(){})()}onBtn2Click(){return(0,_.Z)(function*(){})()}static#e=this.\u0275fac=function(oe){return new(oe||re)};static#t=this.\u0275cmp=y.Xpm({type:re,selectors:[["app-no-data"]],inputs:{title:"title",message:"message",btn1Txt:"btn1Txt",btn2Txt:"btn2Txt"},outputs:{refreshList:"refreshList"},standalone:!0,features:[y.jDz],decls:8,vars:4,consts:[[1,"no-data-wrap"],["src","assets/album.svg","alt","music icon",1,"img"],[1,"title"],[1,"sub-title"],["class","btn1","color","accent","type","button","title","Add Folder"],["class","btn2","color","accent","type","button","title","Add Files"],["color","accent","type","button","title","Add Folder",1,"btn1",3,"click"],["color","accent","type","button","title","Add Files",1,"btn2",3,"click"]],template:function(oe,V){1&oe&&(y.TgZ(0,"section",0),y._UZ(1,"img",1),y.TgZ(2,"h2",2),y._uU(3),y.qZA(),y.TgZ(4,"h4",3),y._uU(5),y.qZA(),y.YNc(6,j,2,1,"fluent-button",4)(7,U,2,1,"fluent-button",5),y.qZA()),2&oe&&(y.xp6(3),y.Oqu(V.title),y.xp6(2),y.Oqu(V.message),y.xp6(1),y.um2(6,V.btn1Txt?6:-1),y.xp6(1),y.um2(7,V.btn2Txt?7:-1))},dependencies:[ne.ez],styles:['section.no-data-wrap[_ngcontent-%COMP%]{height:100%;display:grid;grid-template:"img title title" auto "img sub-title sub-title" auto "img btn1 btn2" auto/auto auto auto;align-items:center;justify-content:center;gap:10px;align-content:center}@media screen and (max-width: 768px){section.no-data-wrap[_ngcontent-%COMP%]{grid-template:"img img" auto "title title" auto "sub-title sub-title" auto "btn1 btn2" auto/auto auto}}section.no-data-wrap[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{grid-area:img;height:150px}section.no-data-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-area:title;margin:0}section.no-data-wrap[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{grid-area:sub-title;margin:0}section.no-data-wrap[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%]{grid-area:btn1}section.no-data-wrap[_ngcontent-%COMP%]   .btn2[_ngcontent-%COMP%]{grid-area:btn2}']})}return re})()},2880:(ct,pe,M)=>{var _=M(6593),y=M(9467),ne=M(5861),j=M(2758),U=M(5563),Z=M(5522),re=M(9752),fe=M(5487),q=M(6814),oe=M(9500);let V=(()=>{class a{constructor(){this.toggleMenu=new y.vpe,this.#e=(0,y.f3M)(oe.F0)}#e;onItemClick(t){var s=this;return(0,ne.Z)(function*(){yield s.#e.navigateByUrl(t),s.onMenuClick()})()}onMenuClick(){this.toggleMenu.emit()}static#t=this.\u0275fac=function(s){return new(s||a)};static#n=this.\u0275cmp=y.Xpm({type:a,selectors:[["app-side-nav"]],outputs:{toggleMenu:"toggleMenu"},decls:23,vars:0,consts:[[1,"side-nav"],["appearance","stealth",1,"hidden-above-xl",3,"click"],["src","assets/icons/menu.svg",1,"menu-icon"],["autocomplete","none","appearance","outline","placeholder","Search"],["slot","end","src","assets/icons/search.svg"],[3,"click"],["slot","start","src","assets/icons/home.svg"],["slot","start","src","assets/icons/music.svg"],["slot","start","src","assets/icons/video.svg"],["slot","start","src","assets/icons/list.svg"],[1,"separator"],["slot","start","src","assets/icons/settings.svg"]],template:function(s,c){1&s&&(y.TgZ(0,"section",0)(1,"fluent-button",1),y.NdJ("click",function(){return c.onMenuClick()}),y._UZ(2,"img",2),y.qZA(),y.TgZ(3,"fluent-text-field",3),y._UZ(4,"img",4),y.qZA(),y.TgZ(5,"fluent-listbox")(6,"fluent-option",5),y.NdJ("click",function(){return c.onItemClick("home")}),y._UZ(7,"img",6),y._uU(8," Home "),y.qZA(),y.TgZ(9,"fluent-option",5),y.NdJ("click",function(){return c.onItemClick("music")}),y._UZ(10,"img",7),y._uU(11," Music Library "),y.qZA(),y.TgZ(12,"fluent-option",5),y.NdJ("click",function(){return c.onItemClick("video")}),y._UZ(13,"img",8),y._uU(14,"Video Library "),y.qZA(),y._UZ(15,"fluent-divider"),y.TgZ(16,"fluent-option"),y._UZ(17,"img",9),y._uU(18," Playlists "),y.qZA(),y._UZ(19,"span",10),y.TgZ(20,"fluent-option",5),y.NdJ("click",function(){return c.onItemClick("settings")}),y._UZ(21,"img",11),y._uU(22," Settings "),y.qZA()()())},styles:['section.side-nav[_ngcontent-%COMP%]{height:100%;display:grid;grid-template:"search-box" auto "list" 1fr/1fr;gap:10px;padding:10px;box-sizing:border-box;background-color:var(--neutral-fill-layer-rest)}@media all and (max-width: 1200px){section.side-nav[_ngcontent-%COMP%]{grid-template:"search-box menu-btn" auto "list list" 1fr/1fr auto}}section.side-nav[_ngcontent-%COMP%]   fluent-text-field[_ngcontent-%COMP%]{grid-area:search-box}section.side-nav[_ngcontent-%COMP%]   fluent-button[_ngcontent-%COMP%]{grid-area:menu-btn}section.side-nav[_ngcontent-%COMP%]   fluent-listbox[_ngcontent-%COMP%]{grid-area:list;border:0 none;outline:0 none}section.side-nav[_ngcontent-%COMP%]   fluent-listbox[_ngcontent-%COMP%]   fluent-option[_ngcontent-%COMP%]{background-color:transparent;margin:5px 0}']})}return a})();var P=M(8645),Q=M(9191);let ee=(()=>{class a{transform(t,s){var c=Math.floor(t/3600),h=Math.floor(t%3600/60),E=Math.floor(t%60);return("0"+c).slice(-2)+":"+("0"+h).slice(-2)+":"+("0"+E).slice(-2)}static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275pipe=y.Yjl({name:"timePipe",type:a,pure:!0})}return a})();const de=["audioElement"];let $e=(()=>{class a{constructor(){this.isOpen=!1,this.isOverlayVisible=(0,y.tdS)(!1),this.showOverlay=new y.vpe,this.ngUnsubscribe=new P.x,this.volume=(0,y.tdS)(100),this.albumArt=(0,y.tdS)("assets/album.svg"),this.songTitle=(0,y.tdS)(""),this.songAlbum=(0,y.tdS)(""),this.totalTime=(0,y.tdS)(0),this.currentTime=(0,y.tdS)(0),this.repeatBtnIcon=(0,y.tdS)("repeat"),this.shuffleBtnIcon=(0,y.tdS)("shuffle"),this.fScreenBtnIcon=(0,y.tdS)("max"),this.musicSvc=(0,y.f3M)(Q.J),this.playingNowBroadcastService=(0,y.f3M)(j.R),this.playBtnIcon=(0,y.Flj)(()=>this.playingNowBroadcastService.paused_()?"play":"pause")}ngOnInit(){}ngAfterViewInit(){}onPlayBtnClick(){this.playingNowBroadcastService.paused_.update(t=>!t)}onRepeatBtnCick(){this.repeatBtnIcon.update(t=>"repeat"===t?"repeat_one":"repeat_one"===t?"repeat_on":"repeat")}onShuffleBtnClick(){this.shuffleBtnIcon.update(t=>"shuffle"===t?"shuffle_on":"shuffle")}onNextBtnClick(){this.playingNowBroadcastService.next$.next()}onPrevBtnClick(){this.playingNowBroadcastService.prev$.next()}onSliderChange(t){this.playingNowBroadcastService.seekTime$.next(parseInt(t,10)),this.audioEle.nativeElement.currentTime=parseInt(t,10)}onFullScreenClick(){var t=this;return(0,ne.Z)(function*(){document.fullscreenEnabled&&(document.fullscreenElement?(yield document.exitFullscreen(),t.fScreenBtnIcon.set("max")):(yield document.body.requestFullscreen({navigationUI:"hide"}),t.fScreenBtnIcon.set("min")))})()}onAlbumArtClick(){this.playingNowBroadcastService.showPlayer_.update(t=>!t)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275cmp=y.Xpm({type:a,selectors:[["app-player"]],viewQuery:function(s,c){if(1&s&&y.Gf(de,5),2&s){let h;y.iGM(h=y.CRH())&&(c.audioEle=h.first)}},outputs:{showOverlay:"showOverlay"},decls:36,vars:15,consts:[[1,"player-wrapper"],[1,"trackbar-wrapper"],["min","0",3,"value","max","click"],[1,"media_controls_wrapper"],["matRipple","",1,"sec","img_sec",3,"click"],["alt","",3,"src"],[1,"title","hidden-under-xl"],[1,"album","hidden-under-xl"],[1,"sec","controls_sec"],["appearance","stealth","aria-label","shuffle button",1,"hidden-under-sm",3,"click"],[3,"src"],["appearance","stealth","aria-label","prev button",3,"click"],["src","assets/icons/prev.svg"],["appearance","stealth","aria-label","Play button",1,"play-btn",3,"click"],["appearance","stealth","aria-label","next button",3,"click"],["src","assets/icons/next.svg"],["appearance","stealth","aria-label","Repeat button",1,"hidden-under-sm",3,"click"],[1,"sec","other_control_sec"],["appearance","stealth","aria-label","Full screen toggle",1,"hidden-under-md",3,"click"],["aria-label","Cast screen","appearance","stealth",1,"hidden-under-md"],["src","assets/icons/cast.svg"],["aria-label","more options","appearance","stealth"],["src","assets/icons/more.svg"],[1,"hidden"],["audioElement",""]],template:function(s,c){1&s&&(y.TgZ(0,"div",0)(1,"div",1)(2,"span"),y._uU(3),y.ALo(4,"timePipe"),y.qZA(),y.TgZ(5,"fluent-slider",2),y.NdJ("click",function(E){return c.onSliderChange(E.target.value)}),y.qZA(),y.TgZ(6,"span"),y._uU(7),y.ALo(8,"timePipe"),y.qZA()(),y.TgZ(9,"section",3)(10,"div",4),y.NdJ("click",function(){return c.onAlbumArtClick()}),y._UZ(11,"img",5),y.TgZ(12,"span",6),y._uU(13),y.qZA(),y.TgZ(14,"span",7),y._uU(15),y.qZA()(),y.TgZ(16,"div",8)(17,"fluent-button",9),y.NdJ("click",function(){return c.onShuffleBtnClick()}),y._UZ(18,"img",10),y.qZA(),y.TgZ(19,"fluent-button",11),y.NdJ("click",function(){return c.onPrevBtnClick()}),y._UZ(20,"img",12),y.qZA(),y.TgZ(21,"fluent-button",13),y.NdJ("click",function(){return c.onPlayBtnClick()}),y._UZ(22,"img",10),y.qZA(),y.TgZ(23,"fluent-button",14),y.NdJ("click",function(){return c.onNextBtnClick()}),y._UZ(24,"img",15),y.qZA(),y.TgZ(25,"fluent-button",16),y.NdJ("click",function(){return c.onRepeatBtnCick()}),y._UZ(26,"img",10),y.qZA()(),y.TgZ(27,"div",17)(28,"fluent-button",18),y.NdJ("click",function(){return c.onFullScreenClick()}),y._UZ(29,"img",10),y.qZA(),y.TgZ(30,"fluent-button",19),y._UZ(31,"img",20),y.qZA(),y.TgZ(32,"fluent-button",21),y._UZ(33,"img",22),y.qZA()()()(),y._UZ(34,"video",23,24)),2&s&&(y.xp6(3),y.Oqu(y.lcZ(4,11,c.playingNowBroadcastService.timeElapsed_())),y.xp6(2),y.s9C("value",c.playingNowBroadcastService.timeElapsed_()),y.s9C("max",c.playingNowBroadcastService.mediaDuration_()),y.xp6(2),y.Oqu(y.lcZ(8,13,c.playingNowBroadcastService.mediaDuration_())),y.xp6(4),y.s9C("src",c.playingNowBroadcastService.albumArt_(),y.LSH),y.xp6(2),y.Oqu(c.playingNowBroadcastService.title_()),y.xp6(2),y.Oqu(c.playingNowBroadcastService.album_()),y.xp6(3),y.MGl("src","assets/icons/",c.shuffleBtnIcon(),".svg",y.LSH),y.xp6(4),y.MGl("src","assets/icons/",c.playBtnIcon(),".svg",y.LSH),y.xp6(4),y.MGl("src","assets/icons/",c.repeatBtnIcon(),".svg",y.LSH),y.xp6(3),y.MGl("src","assets/icons/",c.fScreenBtnIcon(),".svg",y.LSH))},dependencies:[ee],styles:[".player-wrapper[_ngcontent-%COMP%]{padding:10px;background-color:inherit;border-top:solid 1px var(--neutral-layer-floating)}.trackbar-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-between;gap:10px}.trackbar-wrapper[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%]{flex-basis:100%}.trackbar-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:translateY(-8px);color:var(--neutral-foreground-rest)}section.media_controls_wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center}section.media_controls_wrapper[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%]{display:flex}section.media_controls_wrapper[_ngcontent-%COMP%]   .sec.controls_sec[_ngcontent-%COMP%]{justify-content:center;align-items:center}section.media_controls_wrapper[_ngcontent-%COMP%]   .sec.other_control_sec[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}section.media_controls_wrapper[_ngcontent-%COMP%]   .sec.img_sec[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px auto;grid-template-rows:auto auto;cursor:pointer;-webkit-user-select:none;user-select:none}section.media_controls_wrapper[_ngcontent-%COMP%]   .sec.img_sec[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-column-start:2;grid-row-start:1;align-self:end;font-weight:500;font-size:large;color:var(--neutral-foreground-rest)}section.media_controls_wrapper[_ngcontent-%COMP%]   .sec.img_sec[_ngcontent-%COMP%]   .album[_ngcontent-%COMP%]{grid-column:2;grid-row-start:2;font-size:large;font-weight:500;color:var(--neutral-foreground-rest)}section.media_controls_wrapper[_ngcontent-%COMP%]   .sec.img_sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:100px;grid-row:1/span 2;object-fit:cover}@media screen and (max-width: 576px){section.media_controls_wrapper[_ngcontent-%COMP%]   .sec.img_sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:70px;width:70px}}.volume__slider-wrapper[_ngcontent-%COMP%]{padding:0 10px;background-color:#fff;box-shadow:#a9a5a5 0 0 4px 1px;border-radius:6px}"]})}return a})();const we=["videoRef"],ve=["alertDialog"];function qe(a,r){if(1&a&&(y._UZ(0,"img",20),y.TgZ(1,"p",16),y._uU(2),y.qZA(),y.TgZ(3,"p",21),y._uU(4),y.qZA()),2&a){const t=y.oxw();y.s9C("src",t.playingNowSvc.albumArt_(),y.LSH),y.xp6(2),y.Oqu(t.playingNowSvc.title_()),y.xp6(2),y.Oqu(t.playingNowSvc.album_())}}function Re(a,r){if(1&a){const t=y.EpF();y.TgZ(0,"fluent-button",22),y.NdJ("click",function(){y.CHM(t);const c=y.oxw();return y.KtG(c.cancelBtnClk("cancel"))}),y._uU(1,"Cancel"),y.qZA()}}const be=(a,r)=>({"bg-blur":a,"d-none":r}),Fe=a=>({backgroundImage:a});let Te=(()=>{class a{constructor(){this.playingNowSvc=(0,y.f3M)(j.R),this.alertSvc=(0,y.f3M)(fe.c),this.mediaType=(0,y.tdS)("audio"),this.containerBackground=(0,y.Flj)(()=>"audio"===this.mediaType()?"url("+this.playingNowSvc.albumArt_()+")":"#000"),this.#e=(0,y.f3M)(U.M),this.#t=(0,y.f3M)(re.g),this.#n=(0,Z.Dx)(this.playingNowSvc.paused_),this.alertTitle=(0,y.tdS)("Alert"),this.alertMsg=(0,y.tdS)(""),this.okBtnTxt=(0,y.tdS)("Ok"),this.cancelBtnTxt=(0,y.tdS)(""),this.alertType="alert"}#e;#t;#n;#i;ngOnInit(){var t=this;return(0,ne.Z)(function*(){t.#r(),t.#t.applyTheme(),t.alertSvc.alert$.subscribe(s=>{t.alertType="alert",t.alertTitle.set(s.title??"Alert"),t.alertMsg.set(s.message),t.okBtnTxt.set(s.okButtonText??"Ok"),t.alertDialog.nativeElement.hidden=!1}),t.alertSvc.confirm$.subscribe(s=>{t.alertType="confirm",t.alertTitle.set(s.title??"Please confirm."),t.alertMsg.set(s.message),t.okBtnTxt.set(s.okButtonText??"Ok"),t.cancelBtnTxt.set(s.okButtonText??"Cancel"),t.alertDialog.nativeElement.hidden=!1})})()}okBtnClk(t){this.alertDialog.nativeElement.hidden=!0,"alert"===this.alertType?this.alertSvc.alertResult$.next():this.alertSvc.confirmResult$.next(t)}cancelBtnClk(t){this.alertDialog.nativeElement.hidden=!0,this.alertSvc.confirmResult$.next(t),this.cancelBtnTxt.set("")}ngAfterViewInit(){const t=this.videoEleRef.nativeElement;t&&(t.addEventListener("loadedmetadata",()=>{this.playingNowSvc.mediaDuration_.set(t.duration)}),t.addEventListener("ended",()=>{this.playingNowSvc.ended$.next()}))}mediaTimer(t){this.timer&&clearInterval(this.timer);const s=this.videoEleRef.nativeElement;s&&t&&(this.timer=setInterval(()=>{this.playingNowSvc.timeElapsed_.set(s.currentTime)},1e3))}#r(){var s,t=this;this.#n.subscribe({next:s=>{const c=this.videoEleRef?.nativeElement;c&&s!==c.paused&&(s?(c.pause(),this.mediaTimer(!1)):(c.play(),this.mediaTimer(!0)))}}),this.playingNowSvc.newPlay$.subscribe({next:(s=(0,ne.Z)(function*(c){try{const h=t.videoEleRef?.nativeElement;if(!h)return;h.paused||h.pause();const E=yield t.#e.getMedia(c,!0);if(!E)return;const k=yield E.handler.getFile(),$=new Blob([k],{type:k.type}),Y=URL.createObjectURL($);h.src=Y,h.play();const ye=E.albumArt?URL.createObjectURL(E.albumArt):"assets/album.svg";t.#i=E,t.playingNowSvc.title_.set(E.title),t.playingNowSvc.albumArt_.set(ye),t.playingNowSvc.album_.set(E.album),t.mediaType.set(E.mediaType),"video"===E.mediaType&&t.playingNowSvc.showPlayer_.set(!0),"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:E.title,artist:E.artist??"Unknown Artist",album:E.album??"Unknown Album",artwork:[{src:ye}]})),t.mediaTimer(!0)}catch{t.#i=void 0}}),function(h){return s.apply(this,arguments)})}),this.playingNowSvc.ended$.subscribe(()=>{this.playingNowSvc.mediaDuration_.set(0),this.#i=void 0,this.mediaTimer(!1)}),this.playingNowSvc.seekTime$.subscribe(s=>{const c=this.videoEleRef?.nativeElement;c&&(c.currentTime=s)})}onToggleMenu(t,s,c){t?(s.style.left="0px",c.style.display="block"):(s.style.left="-330px",c.style.display="none")}static#o=this.\u0275fac=function(s){return new(s||a)};static#s=this.\u0275cmp=y.Xpm({type:a,selectors:[["app-root"]],viewQuery:function(s,c){if(1&s&&(y.Gf(we,5),y.Gf(ve,5)),2&s){let h;y.iGM(h=y.CRH())&&(c.videoEleRef=h.first),y.iGM(h=y.CRH())&&(c.alertDialog=h.first)}},decls:27,vars:12,consts:[[1,"main-body"],["appearance","stealth",1,"hidden-above-xl","menu-btn",3,"click"],["title","menu","src","assets/icons/menu.svg",1,"menu-icon"],[1,"side-nav__wrap"],["sec",""],[3,"toggleMenu"],[1,"main__content"],[1,"outlet_wrapper"],["id","backdrop",3,"click"],["backdrop",""],[1,"fs_overlay",3,"ngClass","ngStyle"],[1,"bg-blur","media-wrapper"],["videoRef",""],["id","alert-dialog","hidden","","trap-focus","","modal","",1,"fl-dialog"],["alertDialog",""],[1,"dialog-container"],[1,"title"],[1,"msg"],["appearance","accent","tabindex","0",1,"ok-btn",3,"click"],["class","cancel-btn","tabindex","0"],["title","media poster",3,"src"],[1,"album"],["tabindex","0",1,"cancel-btn",3,"click"]],template:function(s,c){if(1&s){const h=y.EpF();y.TgZ(0,"div",0)(1,"fluent-button",1),y.NdJ("click",function(){y.CHM(h);const k=y.MAs(4),$=y.MAs(11);return y.KtG(c.onToggleMenu(!0,k,$))}),y._UZ(2,"img",2),y.qZA(),y.TgZ(3,"section",3,4)(5,"app-side-nav",5),y.NdJ("toggleMenu",function(){y.CHM(h);const k=y.MAs(4),$=y.MAs(11);return y.KtG(c.onToggleMenu(!1,k,$))}),y.qZA()(),y.TgZ(6,"main",6)(7,"div",7),y._UZ(8,"router-outlet"),y.qZA()(),y._UZ(9,"app-player"),y.TgZ(10,"aside",8,9),y.NdJ("click",function(){y.CHM(h);const k=y.MAs(4),$=y.MAs(11);return y.KtG(c.onToggleMenu(!1,k,$))}),y.qZA(),y.TgZ(12,"section",10)(13,"div",11),y._UZ(14,"video",null,12),y.qZA(),y.YNc(16,qe,5,3),y.qZA()(),y.TgZ(17,"fluent-dialog",13,14)(19,"section",15)(20,"h2",16),y._uU(21),y.qZA(),y.TgZ(22,"p",17),y._uU(23),y.qZA(),y.TgZ(24,"fluent-button",18),y.NdJ("click",function(){return c.okBtnClk("ok")}),y._uU(25),y.qZA(),y.YNc(26,Re,2,0,"fluent-button",19),y.qZA()()}2&s&&(y.xp6(12),y.Q6J("ngClass",y.WLB(7,be,"audio"===c.mediaType(),!c.playingNowSvc.showPlayer_()))("ngStyle",y.VKq(10,Fe,c.containerBackground())),y.xp6(4),y.um2(16,"audio"===c.mediaType()?16:-1),y.xp6(5),y.Oqu(c.alertTitle()),y.xp6(2),y.Oqu(c.alertMsg()),y.xp6(2),y.Oqu(c.okBtnTxt()),y.xp6(1),y.um2(26,c.cancelBtnTxt()?26:-1))},dependencies:[q.mk,q.PC,oe.lC,V,$e],styles:['.main-body[_ngcontent-%COMP%]{height:100%;display:grid;grid-template:"menu content" 1fr "player player" auto/320px 1fr;overflow:auto;align-items:stretch}@media all and (max-width: 1200px){.main-body[_ngcontent-%COMP%]{grid-template:"menu-btn" auto "content" 1fr "player" auto/100%}}.main-body[_ngcontent-%COMP%]   main.main__content[_ngcontent-%COMP%]{padding:20px;box-sizing:border-box;overflow:auto;grid-area:content}.main-body[_ngcontent-%COMP%]   main.main__content[_ngcontent-%COMP%]   .outlet_wrapper[_ngcontent-%COMP%]{height:100%}.main-body[_ngcontent-%COMP%]   .side-nav__wrap[_ngcontent-%COMP%]{grid-area:menu}@media all and (max-width: 1200px){.main-body[_ngcontent-%COMP%]   .side-nav__wrap[_ngcontent-%COMP%]{grid-area:none;position:fixed;top:0;left:-300px;height:100%;z-index:10;width:auto;transition:left .25s}}.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]{grid-area:1/1/2/3;z-index:100;background-repeat:no-repeat;background-size:cover;background-position:center center;position:relative;display:grid;grid-template:". ." 1fr "img title" auto "img album" auto "img ." auto/auto 1fr;gap:10px;padding:10px}@media screen and (max-width: 768px){.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]{place-items:center;grid-template:"." 1fr "img" auto "title" auto "album" auto "." 1fr/1fr}}@media screen and (max-width: 1200px){.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]{grid-area:1/1/3/3}}.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]   div.media-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;box-sizing:border-box;position:absolute;left:0;top:0}.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]   div.media-wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]   div.media-wrapper.bg-blur[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:rgba(0,0,0,.65)}.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{grid-area:img;width:300px;height:300px;object-fit:cover;border-radius:6px;box-shadow:#000000b3 0 0 3px 1px;background-color:#797979;z-index:1}.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:xx-large;color:#fff;grid-area:title;z-index:1;margin:0}@media screen and (max-width: 768px){.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:x-large;margin:20px 0}}.main-body[_ngcontent-%COMP%]   .fs_overlay[_ngcontent-%COMP%]   .album[_ngcontent-%COMP%]{margin:0;font-size:large;color:#fff;grid-area:album;z-index:1}.main-body[_ngcontent-%COMP%]   app-player[_ngcontent-%COMP%]{grid-area:player}.main-body[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]{grid-area:menu-btn;width:20px;height:30px;margin:10px}#backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000047;display:none}fluent-dialog.fl-dialog[_ngcontent-%COMP%]{--dialog-height: auto;--dialog-width: auto}fluent-dialog.fl-dialog[_ngcontent-%COMP%]   section.dialog-container[_ngcontent-%COMP%]{max-width:400px;display:grid;grid-template:"title title" "msg msg" "ok-btn cancel-btn" 50px/1fr 1fr;gap:15px;padding:15px 15px 10px;color:var(--neutral-foreground-rest);font-family:var(--body-font);font-size:var(--type-ramp-base-font-size);position:relative}fluent-dialog.fl-dialog[_ngcontent-%COMP%]   section.dialog-container[_ngcontent-%COMP%]:after{content:"";position:absolute;background:var(--neutral-layer-2);z-index:-3;width:100%;height:65px;bottom:0;border-bottom-left-radius:7px;border-bottom-right-radius:7px}fluent-dialog.fl-dialog[_ngcontent-%COMP%]   section.dialog-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{grid-area:title;margin:0;font-family:var(--body-font);font-size:larger}fluent-dialog.fl-dialog[_ngcontent-%COMP%]   section.dialog-container[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]{grid-area:msg;margin:0}fluent-dialog.fl-dialog[_ngcontent-%COMP%]   section.dialog-container[_ngcontent-%COMP%]   .ok-btn[_ngcontent-%COMP%]{grid-area:ok-btn;align-self:center}fluent-dialog.fl-dialog[_ngcontent-%COMP%]   section.dialog-container[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{grid-area:cancel-btn;align-self:center}']})}return a})();const Ve="*";function le(a){return{type:6,styles:a,offset:null}}class dn{constructor(r=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=r+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(r=>r()),this._onDoneFns=[])}onStart(r){this._originalOnStartFns.push(r),this._onStartFns.push(r)}onDone(r){this._originalOnDoneFns.push(r),this._onDoneFns.push(r)}onDestroy(r){this._onDestroyFns.push(r)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(r=>r()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(r=>r()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(r){this._position=this.totalTime?r*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(r){const t="start"==r?this._onStartFns:this._onDoneFns;t.forEach(s=>s()),t.length=0}}class Hn{constructor(r){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=r;let t=0,s=0,c=0;const h=this.players.length;0==h?queueMicrotask(()=>this._onFinish()):this.players.forEach(E=>{E.onDone(()=>{++t==h&&this._onFinish()}),E.onDestroy(()=>{++s==h&&this._onDestroy()}),E.onStart(()=>{++c==h&&this._onStart()})}),this.totalTime=this.players.reduce((E,k)=>Math.max(E,k.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(r=>r()),this._onDoneFns=[])}init(){this.players.forEach(r=>r.init())}onStart(r){this._onStartFns.push(r)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(r=>r()),this._onStartFns=[])}onDone(r){this._onDoneFns.push(r)}onDestroy(r){this._onDestroyFns.push(r)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(r=>r.play())}pause(){this.players.forEach(r=>r.pause())}restart(){this.players.forEach(r=>r.restart())}finish(){this._onFinish(),this.players.forEach(r=>r.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(r=>r.destroy()),this._onDestroyFns.forEach(r=>r()),this._onDestroyFns=[])}reset(){this.players.forEach(r=>r.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(r){const t=r*this.totalTime;this.players.forEach(s=>{const c=s.totalTime?Math.min(1,t/s.totalTime):1;s.setPosition(c)})}getPosition(){const r=this.players.reduce((t,s)=>null===t||s.totalTime>t.totalTime?s:t,null);return null!=r?r.getPosition():0}beforeDestroy(){this.players.forEach(r=>{r.beforeDestroy&&r.beforeDestroy()})}triggerCallback(r){const t="start"==r?this._onStartFns:this._onDoneFns;t.forEach(s=>s()),t.length=0}}function vi(a){return new y.vHH(3e3,!1)}function Ae(a){switch(a.length){case 0:return new dn;case 1:return a[0];default:return new Hn(a)}}function rt(a,r,t=new Map,s=new Map){const c=[],h=[];let E=-1,k=null;if(r.forEach($=>{const Y=$.get("offset"),ye=Y==E,ke=ye&&k||new Map;$.forEach((lt,bt)=>{let _t=bt,Rt=lt;if("offset"!==bt)switch(_t=a.normalizePropertyName(_t,c),Rt){case"!":Rt=t.get(bt);break;case Ve:Rt=s.get(bt);break;default:Rt=a.normalizeStyleValue(bt,_t,Rt,c)}ke.set(_t,Rt)}),ye||h.push(ke),k=ke,E=Y}),c.length)throw function co(a){return new y.vHH(3502,!1)}();return h}function Mt(a,r,t,s){switch(r){case"start":a.onStart(()=>s(t&&Ht(t,"start",a)));break;case"done":a.onDone(()=>s(t&&Ht(t,"done",a)));break;case"destroy":a.onDestroy(()=>s(t&&Ht(t,"destroy",a)))}}function Ht(a,r,t){const h=Tn(a.element,a.triggerName,a.fromState,a.toState,r||a.phaseName,t.totalTime??a.totalTime,!!t.disabled),E=a._data;return null!=E&&(h._data=E),h}function Tn(a,r,t,s,c="",h=0,E){return{element:a,triggerName:r,fromState:t,toState:s,phaseName:c,totalTime:h,disabled:!!E}}function en(a,r,t){let s=a.get(r);return s||a.set(r,s=t),s}function Cn(a){const r=a.indexOf(":");return[a.substring(1,r),a.slice(r+1)]}const pr=(()=>typeof document>"u"?null:document.documentElement)();function ir(a){const r=a.parentNode||a.host||null;return r===pr?null:r}let Ci=null,is=!1;function Li(a,r){for(;r;){if(r===a)return!0;r=ir(r)}return!1}function To(a,r,t){if(t)return Array.from(a.querySelectorAll(r));const s=a.querySelector(r);return s?[s]:[]}let uo=(()=>{class a{validateStyleProperty(t){return function Es(a){Ci||(Ci=function ii(){return typeof document<"u"?document.body:null}()||{},is=!!Ci.style&&"WebkitAppearance"in Ci.style);let r=!0;return Ci.style&&!function ns(a){return"ebkit"==a.substring(1,6)}(a)&&(r=a in Ci.style,!r&&is&&(r="Webkit"+a.charAt(0).toUpperCase()+a.slice(1)in Ci.style)),r}(t)}matchesElement(t,s){return!1}containsElement(t,s){return Li(t,s)}getParentElement(t){return ir(t)}query(t,s,c){return To(t,s,c)}computeStyle(t,s,c){return c||""}animate(t,s,c,h,E,k=[],$){return new dn(c,h)}static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac})}return a})(),li=(()=>{class a{static#e=this.NOOP=new uo}return a})();class Ut{}const Uo=1e3,Fn="ng-enter",ss="ng-leave",Di="ng-trigger",rr=".ng-trigger",Hr="ng-animating",fo=".ng-animating";function or(a){if("number"==typeof a)return a;const r=a.match(/^(-?[\.\d]+)(m?s)/);return!r||r.length<2?0:po(parseFloat(r[1]),r[2])}function po(a,r){return"s"===r?a*Uo:a}function Ki(a,r,t){return a.hasOwnProperty("duration")?a:function zo(a,r,t){let c,h=0,E="";if("string"==typeof a){const k=a.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===k)return r.push(vi()),{duration:0,delay:0,easing:""};c=po(parseFloat(k[1]),k[2]);const $=k[3];null!=$&&(h=po(parseFloat($),k[4]));const Y=k[5];Y&&(E=Y)}else c=a;if(!t){let k=!1,$=r.length;c<0&&(r.push(function ni(){return new y.vHH(3100,!1)}()),k=!0),h<0&&(r.push(function Bt(){return new y.vHH(3101,!1)}()),k=!0),k&&r.splice($,0,vi())}return{duration:c,delay:h,easing:E}}(a,r,t)}function Zn(a,r={}){return Object.keys(a).forEach(t=>{r[t]=a[t]}),r}function ko(a){const r=new Map;return Object.keys(a).forEach(t=>{r.set(t,a[t])}),r}function xr(a,r=new Map,t){if(t)for(let[s,c]of t)r.set(s,c);for(let[s,c]of a)r.set(s,c);return r}function wn(a,r,t){r.forEach((s,c)=>{const h=Tr(c);t&&!t.has(c)&&t.set(c,a.style[h]),a.style[h]=s})}function go(a,r){r.forEach((t,s)=>{const c=Tr(s);a.style[c]=""})}function Ur(a){return Array.isArray(a)?1==a.length?a[0]:function ze(a,r=null){return{type:2,steps:a,options:r}}(a):a}const Oo=new RegExp("{{\\s*(.+?)\\s*}}","g");function zr(a){let r=[];if("string"==typeof a){let t;for(;t=Oo.exec(a);)r.push(t[1]);Oo.lastIndex=0}return r}function on(a,r,t){const s=a.toString(),c=s.replace(Oo,(h,E)=>{let k=r[E];return null==k&&(t.push(function Er(a){return new y.vHH(3003,!1)}()),k=""),k.toString()});return c==s?a:c}function $n(a){const r=[];let t=a.next();for(;!t.done;)r.push(t.value),t=a.next();return r}const Ir=/-+([a-z0-9])/g;function Tr(a){return a.replace(Ir,(...r)=>r[1].toUpperCase())}function sr(a,r,t){switch(r.type){case 7:return a.visitTrigger(r,t);case 0:return a.visitState(r,t);case 1:return a.visitTransition(r,t);case 2:return a.visitSequence(r,t);case 3:return a.visitGroup(r,t);case 4:return a.visitAnimate(r,t);case 5:return a.visitKeyframes(r,t);case 6:return a.visitStyle(r,t);case 8:return a.visitReference(r,t);case 9:return a.visitAnimateChild(r,t);case 10:return a.visitAnimateRef(r,t);case 11:return a.visitQuery(r,t);case 12:return a.visitStagger(r,t);default:throw function On(a){return new y.vHH(3004,!1)}()}}function Wo(a,r){return window.getComputedStyle(a)[r]}const as=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class Ao extends Ut{normalizePropertyName(r,t){return Tr(r)}normalizeStyleValue(r,t,s,c){let h="";const E=s.toString().trim();if(as.has(t)&&0!==s&&"0"!==s)if("number"==typeof s)h="px";else{const k=s.match(/^[+-]?[\d\.]+([a-z]*)$/);k&&0==k[1].length&&c.push(function fr(a,r){return new y.vHH(3005,!1)}())}return E+h}}const yi="*";function cs(a,r){const t=[];return"string"==typeof a?a.split(/\s*,\s*/).forEach(s=>function Zo(a,r,t){if(":"==a[0]){const $=function ea(a,r){switch(a){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,s)=>parseFloat(s)>parseFloat(t);case":decrement":return(t,s)=>parseFloat(s)<parseFloat(t);default:return r.push(function Sn(a){return new y.vHH(3016,!1)}()),"* => *"}}(a,t);if("function"==typeof $)return void r.push($);a=$}const s=a.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==s||s.length<4)return t.push(function Vs(a){return new y.vHH(3015,!1)}()),r;const c=s[1],h=s[2],E=s[3];r.push(sn(c,E));"<"==h[0]&&!(c==yi&&E==yi)&&r.push(sn(E,c))}(s,t,r)):t.push(a),t}const Ti=new Set(["true","1"]),Yo=new Set(["false","0"]);function sn(a,r){const t=Ti.has(a)||Yo.has(a),s=Ti.has(r)||Yo.has(r);return(c,h)=>{let E=a==yi||a==c,k=r==yi||r==h;return!E&&t&&"boolean"==typeof c&&(E=c?Ti.has(a):Yo.has(a)),!k&&s&&"boolean"==typeof h&&(k=h?Ti.has(r):Yo.has(r)),E&&k}}const qt=new RegExp("s*:selfs*,?","g");function ar(a,r,t,s){return new mr(a).build(r,t,s)}class mr{constructor(r){this._driver=r}build(r,t,s){const c=new vr(t);return this._resetContextStyleTimingState(c),sr(this,Ur(r),c)}_resetContextStyleTimingState(r){r.currentQuerySelector="",r.collectedStyles=new Map,r.collectedStyles.set("",new Map),r.currentTime=0}visitTrigger(r,t){let s=t.queryCount=0,c=t.depCount=0;const h=[],E=[];return"@"==r.name.charAt(0)&&t.errors.push(function Nr(){return new y.vHH(3006,!1)}()),r.definitions.forEach(k=>{if(this._resetContextStyleTimingState(t),0==k.type){const $=k,Y=$.name;Y.toString().split(/\s*,\s*/).forEach(ye=>{$.name=ye,h.push(this.visitState($,t))}),$.name=Y}else if(1==k.type){const $=this.visitTransition(k,t);s+=$.queryCount,c+=$.depCount,E.push($)}else t.errors.push(function Vt(){return new y.vHH(3007,!1)}())}),{type:7,name:r.name,states:h,transitions:E,queryCount:s,depCount:c,options:null}}visitState(r,t){const s=this.visitStyle(r.styles,t),c=r.options&&r.options.params||null;if(s.containsDynamicStyles){const h=new Set,E=c||{};s.styles.forEach(k=>{k instanceof Map&&k.forEach($=>{zr($).forEach(Y=>{E.hasOwnProperty(Y)||h.add(Y)})})}),h.size&&($n(h.values()),t.errors.push(function zi(a,r){return new y.vHH(3008,!1)}()))}return{type:0,name:r.name,style:s,options:c?{params:c}:null}}visitTransition(r,t){t.queryCount=0,t.depCount=0;const s=sr(this,Ur(r.animation),t);return{type:1,matchers:cs(r.expr,t.errors),animation:s,queryCount:t.queryCount,depCount:t.depCount,options:ri(r.options)}}visitSequence(r,t){return{type:2,steps:r.steps.map(s=>sr(this,s,t)),options:ri(r.options)}}visitGroup(r,t){const s=t.currentTime;let c=0;const h=r.steps.map(E=>{t.currentTime=s;const k=sr(this,E,t);return c=Math.max(c,t.currentTime),k});return t.currentTime=c,{type:3,steps:h,options:ri(r.options)}}visitAnimate(r,t){const s=function vo(a,r){if(a.hasOwnProperty("duration"))return a;if("number"==typeof a)return Ei(Ki(a,r).duration,0,"");const t=a;if(t.split(/\s+/).some(h=>"{"==h.charAt(0)&&"{"==h.charAt(1))){const h=Ei(0,0,"");return h.dynamic=!0,h.strValue=t,h}const c=Ki(t,r);return Ei(c.duration,c.delay,c.easing)}(r.timings,t.errors);t.currentAnimateTimings=s;let c,h=r.styles?r.styles:le({});if(5==h.type)c=this.visitKeyframes(h,t);else{let E=r.styles,k=!1;if(!E){k=!0;const Y={};s.easing&&(Y.easing=s.easing),E=le(Y)}t.currentTime+=s.duration+s.delay;const $=this.visitStyle(E,t);$.isEmptyStep=k,c=$}return t.currentAnimateTimings=null,{type:4,timings:s,style:c,options:null}}visitStyle(r,t){const s=this._makeStyleAst(r,t);return this._validateStyleAst(s,t),s}_makeStyleAst(r,t){const s=[],c=Array.isArray(r.styles)?r.styles:[r.styles];for(let k of c)"string"==typeof k?k===Ve?s.push(k):t.errors.push(new y.vHH(3002,!1)):s.push(ko(k));let h=!1,E=null;return s.forEach(k=>{if(k instanceof Map&&(k.has("easing")&&(E=k.get("easing"),k.delete("easing")),!h))for(let $ of k.values())if($.toString().indexOf("{{")>=0){h=!0;break}}),{type:6,styles:s,easing:E,offset:r.offset,containsDynamicStyles:h,options:null}}_validateStyleAst(r,t){const s=t.currentAnimateTimings;let c=t.currentTime,h=t.currentTime;s&&h>0&&(h-=s.duration+s.delay),r.styles.forEach(E=>{"string"!=typeof E&&E.forEach((k,$)=>{const Y=t.collectedStyles.get(t.currentQuerySelector),ye=Y.get($);let ke=!0;ye&&(h!=c&&h>=ye.startTime&&c<=ye.endTime&&(t.errors.push(function wt(a,r,t,s,c){return new y.vHH(3010,!1)}()),ke=!1),h=ye.startTime),ke&&Y.set($,{startTime:h,endTime:c}),t.options&&function Jn(a,r,t){const s=r.params||{},c=zr(a);c.length&&c.forEach(h=>{s.hasOwnProperty(h)||t.push(function nr(a){return new y.vHH(3001,!1)}())})}(k,t.options,t.errors)})})}visitKeyframes(r,t){const s={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(function Io(){return new y.vHH(3011,!1)}()),s;let h=0;const E=[];let k=!1,$=!1,Y=0;const ye=r.steps.map(Ln=>{const ai=this._makeStyleAst(Ln,t);let Qr=null!=ai.offset?ai.offset:function Gi(a){if("string"==typeof a)return null;let r=null;if(Array.isArray(a))a.forEach(t=>{if(t instanceof Map&&t.has("offset")){const s=t;r=parseFloat(s.get("offset")),s.delete("offset")}});else if(a instanceof Map&&a.has("offset")){const t=a;r=parseFloat(t.get("offset")),t.delete("offset")}return r}(ai.styles),dr=0;return null!=Qr&&(h++,dr=ai.offset=Qr),$=$||dr<0||dr>1,k=k||dr<Y,Y=dr,E.push(dr),ai});$&&t.errors.push(function Zt(){return new y.vHH(3012,!1)}()),k&&t.errors.push(function Sr(){return new y.vHH(3200,!1)}());const ke=r.steps.length;let lt=0;h>0&&h<ke?t.errors.push(function bn(){return new y.vHH(3202,!1)}()):0==h&&(lt=1/(ke-1));const bt=ke-1,_t=t.currentTime,Rt=t.currentAnimateTimings,yn=Rt.duration;return ye.forEach((Ln,ai)=>{const Qr=lt>0?ai==bt?1:lt*ai:E[ai],dr=Qr*yn;t.currentTime=_t+Rt.delay+dr,Rt.duration=dr,this._validateStyleAst(Ln,t),Ln.offset=Qr,s.styles.push(Ln)}),s}visitReference(r,t){return{type:8,animation:sr(this,Ur(r.animation),t),options:ri(r.options)}}visitAnimateChild(r,t){return t.depCount++,{type:9,options:ri(r.options)}}visitAnimateRef(r,t){return{type:10,animation:this.visitReference(r.animation,t),options:ri(r.options)}}visitQuery(r,t){const s=t.currentQuerySelector,c=r.options||{};t.queryCount++,t.currentQuery=r;const[h,E]=function ta(a){const r=!!a.split(/\s*,\s*/).find(t=>":self"==t);return r&&(a=a.replace(qt,"")),a=a.replace(/@\*/g,rr).replace(/@\w+/g,t=>rr+"-"+t.slice(1)).replace(/:animating/g,fo),[a,r]}(r.selector);t.currentQuerySelector=s.length?s+" "+h:h,en(t.collectedStyles,t.currentQuerySelector,new Map);const k=sr(this,Ur(r.animation),t);return t.currentQuery=null,t.currentQuerySelector=s,{type:11,selector:h,limit:c.limit||0,optional:!!c.optional,includeSelf:E,animation:k,originalSelector:r.selector,options:ri(r.options)}}visitStagger(r,t){t.currentQuery||t.errors.push(function lo(){return new y.vHH(3013,!1)}());const s="full"===r.timings?{duration:0,delay:0,easing:"full"}:Ki(r.timings,t.errors,!0);return{type:12,animation:sr(this,Ur(r.animation),t),timings:s,options:null}}}class vr{constructor(r){this.errors=r,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function ri(a){return a?(a=Zn(a)).params&&(a.params=function Jr(a){return a?Zn(a):null}(a.params)):a={},a}function Ei(a,r,t){return{duration:a,delay:r,easing:t}}function _n(a,r,t,s,c,h,E=null,k=!1){return{type:1,element:a,keyframes:r,preStyleProps:t,postStyleProps:s,duration:c,delay:h,totalTime:c+h,easing:E,subTimeline:k}}class Po{constructor(){this._map=new Map}get(r){return this._map.get(r)||[]}append(r,t){let s=this._map.get(r);s||this._map.set(r,s=[]),s.push(...t)}has(r){return this._map.has(r)}clear(){this._map.clear()}}const eo=new RegExp(":enter","g"),Lo=new RegExp(":leave","g");function yo(a,r,t,s,c,h=new Map,E=new Map,k,$,Y=[]){return(new Mr).buildKeyframes(a,r,t,s,c,h,E,k,$,Y)}class Mr{buildKeyframes(r,t,s,c,h,E,k,$,Y,ye=[]){Y=Y||new Po;const ke=new Is(r,t,Y,c,h,ye,[]);ke.options=$;const lt=$.delay?or($.delay):0;ke.currentTimeline.delayNextStep(lt),ke.currentTimeline.setStyles([E],null,ke.errors,$),sr(this,s,ke);const bt=ke.timelines.filter(_t=>_t.containsAnimation());if(bt.length&&k.size){let _t;for(let Rt=bt.length-1;Rt>=0;Rt--){const yn=bt[Rt];if(yn.element===t){_t=yn;break}}_t&&!_t.allowOnlyTimelineStyles()&&_t.setStyles([k],null,ke.errors,$)}return bt.length?bt.map(_t=>_t.buildKeyframes()):[_n(t,[],[],[],0,lt,"",!1)]}visitTrigger(r,t){}visitState(r,t){}visitTransition(r,t){}visitAnimateChild(r,t){const s=t.subInstructions.get(t.element);if(s){const c=t.createSubContext(r.options),h=t.currentTimeline.currentTime,E=this._visitSubInstructions(s,c,c.options);h!=E&&t.transformIntoNewTimeline(E)}t.previousNode=r}visitAnimateRef(r,t){const s=t.createSubContext(r.options);s.transformIntoNewTimeline(),this._applyAnimationRefDelays([r.options,r.animation.options],t,s),this.visitReference(r.animation,s),t.transformIntoNewTimeline(s.currentTimeline.currentTime),t.previousNode=r}_applyAnimationRefDelays(r,t,s){for(const c of r){const h=c?.delay;if(h){const E="number"==typeof h?h:or(on(h,c?.params??{},t.errors));s.delayNextStep(E)}}}_visitSubInstructions(r,t,s){let h=t.currentTimeline.currentTime;const E=null!=s.duration?or(s.duration):null,k=null!=s.delay?or(s.delay):null;return 0!==E&&r.forEach($=>{const Y=t.appendInstructionToTimeline($,E,k);h=Math.max(h,Y.duration+Y.delay)}),h}visitReference(r,t){t.updateOptions(r.options,!0),sr(this,r.animation,t),t.previousNode=r}visitSequence(r,t){const s=t.subContextCount;let c=t;const h=r.options;if(h&&(h.params||h.delay)&&(c=t.createSubContext(h),c.transformIntoNewTimeline(),null!=h.delay)){6==c.previousNode.type&&(c.currentTimeline.snapshotCurrentStyles(),c.previousNode=Wr);const E=or(h.delay);c.delayNextStep(E)}r.steps.length&&(r.steps.forEach(E=>sr(this,E,c)),c.currentTimeline.applyStylesToKeyframe(),c.subContextCount>s&&c.transformIntoNewTimeline()),t.previousNode=r}visitGroup(r,t){const s=[];let c=t.currentTimeline.currentTime;const h=r.options&&r.options.delay?or(r.options.delay):0;r.steps.forEach(E=>{const k=t.createSubContext(r.options);h&&k.delayNextStep(h),sr(this,E,k),c=Math.max(c,k.currentTimeline.currentTime),s.push(k.currentTimeline)}),s.forEach(E=>t.currentTimeline.mergeTimelineCollectedStyles(E)),t.transformIntoNewTimeline(c),t.previousNode=r}_visitTiming(r,t){if(r.dynamic){const s=r.strValue;return Ki(t.params?on(s,t.params,t.errors):s,t.errors)}return{duration:r.duration,delay:r.delay,easing:r.easing}}visitAnimate(r,t){const s=t.currentAnimateTimings=this._visitTiming(r.timings,t),c=t.currentTimeline;s.delay&&(t.incrementTime(s.delay),c.snapshotCurrentStyles());const h=r.style;5==h.type?this.visitKeyframes(h,t):(t.incrementTime(s.duration),this.visitStyle(h,t),c.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=r}visitStyle(r,t){const s=t.currentTimeline,c=t.currentAnimateTimings;!c&&s.hasCurrentStyleProperties()&&s.forwardFrame();const h=c&&c.easing||r.easing;r.isEmptyStep?s.applyEmptyStep(h):s.setStyles(r.styles,h,t.errors,t.options),t.previousNode=r}visitKeyframes(r,t){const s=t.currentAnimateTimings,c=t.currentTimeline.duration,h=s.duration,k=t.createSubContext().currentTimeline;k.easing=s.easing,r.styles.forEach($=>{k.forwardTime(($.offset||0)*h),k.setStyles($.styles,$.easing,t.errors,t.options),k.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(k),t.transformIntoNewTimeline(c+h),t.previousNode=r}visitQuery(r,t){const s=t.currentTimeline.currentTime,c=r.options||{},h=c.delay?or(c.delay):0;h&&(6===t.previousNode.type||0==s&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Wr);let E=s;const k=t.invokeQuery(r.selector,r.originalSelector,r.limit,r.includeSelf,!!c.optional,t.errors);t.currentQueryTotal=k.length;let $=null;k.forEach((Y,ye)=>{t.currentQueryIndex=ye;const ke=t.createSubContext(r.options,Y);h&&ke.delayNextStep(h),Y===t.element&&($=ke.currentTimeline),sr(this,r.animation,ke),ke.currentTimeline.applyStylesToKeyframe(),E=Math.max(E,ke.currentTimeline.currentTime)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(E),$&&(t.currentTimeline.mergeTimelineCollectedStyles($),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=r}visitStagger(r,t){const s=t.parentContext,c=t.currentTimeline,h=r.timings,E=Math.abs(h.duration),k=E*(t.currentQueryTotal-1);let $=E*t.currentQueryIndex;switch(h.duration<0?"reverse":h.easing){case"reverse":$=k-$;break;case"full":$=s.currentStaggerTime}const ye=t.currentTimeline;$&&ye.delayNextStep($);const ke=ye.currentTime;sr(this,r.animation,t),t.previousNode=r,s.currentStaggerTime=c.currentTime-ke+(c.startTime-s.currentTimeline.startTime)}}const Wr={};class Is{constructor(r,t,s,c,h,E,k,$){this._driver=r,this.element=t,this.subInstructions=s,this._enterClassName=c,this._leaveClassName=h,this.errors=E,this.timelines=k,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Wr,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=$||new to(this._driver,t,0),k.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(r,t){if(!r)return;const s=r;let c=this.options;null!=s.duration&&(c.duration=or(s.duration)),null!=s.delay&&(c.delay=or(s.delay));const h=s.params;if(h){let E=c.params;E||(E=this.options.params={}),Object.keys(h).forEach(k=>{(!t||!E.hasOwnProperty(k))&&(E[k]=on(h[k],E,this.errors))})}}_copyOptions(){const r={};if(this.options){const t=this.options.params;if(t){const s=r.params={};Object.keys(t).forEach(c=>{s[c]=t[c]})}}return r}createSubContext(r=null,t,s){const c=t||this.element,h=new Is(this._driver,c,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(c,s||0));return h.previousNode=this.previousNode,h.currentAnimateTimings=this.currentAnimateTimings,h.options=this._copyOptions(),h.updateOptions(r),h.currentQueryIndex=this.currentQueryIndex,h.currentQueryTotal=this.currentQueryTotal,h.parentContext=this,this.subContextCount++,h}transformIntoNewTimeline(r){return this.previousNode=Wr,this.currentTimeline=this.currentTimeline.fork(this.element,r),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(r,t,s){const c={duration:t??r.duration,delay:this.currentTimeline.currentTime+(s??0)+r.delay,easing:""},h=new Qi(this._driver,r.element,r.keyframes,r.preStyleProps,r.postStyleProps,c,r.stretchStartingKeyframe);return this.timelines.push(h),c}incrementTime(r){this.currentTimeline.forwardTime(this.currentTimeline.duration+r)}delayNextStep(r){r>0&&this.currentTimeline.delayNextStep(r)}invokeQuery(r,t,s,c,h,E){let k=[];if(c&&k.push(this.element),r.length>0){r=(r=r.replace(eo,"."+this._enterClassName)).replace(Lo,"."+this._leaveClassName);let Y=this._driver.query(this.element,r,1!=s);0!==s&&(Y=s<0?Y.slice(Y.length+s,Y.length):Y.slice(0,s)),k.push(...Y)}return!h&&0==k.length&&E.push(function Pn(a){return new y.vHH(3014,!1)}()),k}}class to{constructor(r,t,s,c){this._driver=r,this.element=t,this.startTime=s,this._elementTimelineStylesLookup=c,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(r){const t=1===this._keyframes.size&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+r),t&&this.snapshotCurrentStyles()):this.startTime+=r}fork(r,t){return this.applyStylesToKeyframe(),new to(this._driver,r,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(r){this.applyStylesToKeyframe(),this.duration=r,this._loadKeyframe()}_updateStyle(r,t){this._localTimelineStyles.set(r,t),this._globalTimelineStyles.set(r,t),this._styleSummary.set(r,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(r){r&&this._previousKeyframe.set("easing",r);for(let[t,s]of this._globalTimelineStyles)this._backFill.set(t,s||Ve),this._currentKeyframe.set(t,Ve);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(r,t,s,c){t&&this._previousKeyframe.set("easing",t);const h=c&&c.params||{},E=function bo(a,r){const t=new Map;let s;return a.forEach(c=>{if("*"===c){s=s||r.keys();for(let h of s)t.set(h,Ve)}else xr(c,t)}),t}(r,this._globalTimelineStyles);for(let[k,$]of E){const Y=on($,h,s);this._pendingStyles.set(k,Y),this._localTimelineStyles.has(k)||this._backFill.set(k,this._globalTimelineStyles.get(k)??Ve),this._updateStyle(k,Y)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((r,t)=>{this._currentKeyframe.set(t,r)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((r,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,r)}))}snapshotCurrentStyles(){for(let[r,t]of this._localTimelineStyles)this._pendingStyles.set(r,t),this._updateStyle(r,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const r=[];for(let t in this._currentKeyframe)r.push(t);return r}mergeTimelineCollectedStyles(r){r._styleSummary.forEach((t,s)=>{const c=this._styleSummary.get(s);(!c||t.time>c.time)&&this._updateStyle(s,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();const r=new Set,t=new Set,s=1===this._keyframes.size&&0===this.duration;let c=[];this._keyframes.forEach((k,$)=>{const Y=xr(k,new Map,this._backFill);Y.forEach((ye,ke)=>{"!"===ye?r.add(ke):ye===Ve&&t.add(ke)}),s||Y.set("offset",$/this.duration),c.push(Y)});const h=r.size?$n(r.values()):[],E=t.size?$n(t.values()):[];if(s){const k=c[0],$=new Map(k);k.set("offset",0),$.set("offset",1),c=[k,$]}return _n(this.element,c,h,E,this.duration,this.startTime,this.easing,!1)}}class Qi extends to{constructor(r,t,s,c,h,E,k=!1){super(r,t,E.delay),this.keyframes=s,this.preStyleProps=c,this.postStyleProps=h,this._stretchStartingKeyframe=k,this.timings={duration:E.duration,delay:E.delay,easing:E.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let r=this.keyframes,{delay:t,duration:s,easing:c}=this.timings;if(this._stretchStartingKeyframe&&t){const h=[],E=s+t,k=t/E,$=xr(r[0]);$.set("offset",0),h.push($);const Y=xr(r[0]);Y.set("offset",na(k)),h.push(Y);const ye=r.length-1;for(let ke=1;ke<=ye;ke++){let lt=xr(r[ke]);const bt=lt.get("offset");lt.set("offset",na((t+bt*s)/E)),h.push(lt)}s=E,t=0,c="",r=h}return _n(this.element,r,this.preStyleProps,this.postStyleProps,s,t,c,!0)}}function na(a,r=3){const t=Math.pow(10,r-1);return Math.round(a*t)/t}function Ts(a,r,t,s,c,h,E,k,$,Y,ye,ke,lt){return{type:0,element:a,triggerName:r,isRemovalTransition:c,fromState:t,fromStyles:h,toState:s,toStyles:E,timelines:k,queriedElements:$,preStyleProps:Y,postStyleProps:ye,totalTime:ke,errors:lt}}const us={};class Ms{constructor(r,t,s){this._triggerName=r,this.ast=t,this._stateStyles=s}match(r,t,s,c){return function ds(a,r,t,s,c){return a.some(h=>h(r,t,s,c))}(this.ast.matchers,r,t,s,c)}buildStyles(r,t,s){let c=this._stateStyles.get("*");return void 0!==r&&(c=this._stateStyles.get(r?.toString())||c),c?c.buildStyles(t,s):new Map}build(r,t,s,c,h,E,k,$,Y,ye){const ke=[],lt=this.ast.options&&this.ast.options.params||us,_t=this.buildStyles(s,k&&k.params||us,ke),Rt=$&&$.params||us,yn=this.buildStyles(c,Rt,ke),Ln=new Set,ai=new Map,Qr=new Map,dr="void"===c,il={params:ol(Rt,lt),delay:this.ast.options?.delay},hr=ye?[]:yo(r,t,this.ast.animation,h,E,_t,yn,il,Y,ke);let $r=0;if(hr.forEach(Pa=>{$r=Math.max(Pa.duration+Pa.delay,$r)}),ke.length)return Ts(t,this._triggerName,s,c,dr,_t,yn,[],[],ai,Qr,$r,ke);hr.forEach(Pa=>{const Fa=Pa.element,Op=en(ai,Fa,new Set);Pa.preStyleProps.forEach(rl=>Op.add(rl));const iu=en(Qr,Fa,new Set);Pa.postStyleProps.forEach(rl=>iu.add(rl)),Fa!==t&&Ln.add(Fa)});const Ra=$n(Ln.values());return Ts(t,this._triggerName,s,c,dr,_t,yn,hr,Ra,ai,Qr,$r)}}function ol(a,r){const t=Zn(r);for(const s in a)a.hasOwnProperty(s)&&null!=a[s]&&(t[s]=a[s]);return t}class ia{constructor(r,t,s){this.styles=r,this.defaultParams=t,this.normalizer=s}buildStyles(r,t){const s=new Map,c=Zn(this.defaultParams);return Object.keys(r).forEach(h=>{const E=r[h];null!==E&&(c[h]=E)}),this.styles.styles.forEach(h=>{"string"!=typeof h&&h.forEach((E,k)=>{E&&(E=on(E,c,t));const $=this.normalizer.normalizePropertyName(k,t);E=this.normalizer.normalizeStyleValue(k,$,E,t),s.set(k,E)})}),s}}class ra{constructor(r,t,s){this.name=r,this.ast=t,this._normalizer=s,this.transitionFactories=[],this.states=new Map,t.states.forEach(c=>{this.states.set(c.name,new ia(c.style,c.options&&c.options.params||{},s))}),ba(this.states,"true","1"),ba(this.states,"false","0"),t.transitions.forEach(c=>{this.transitionFactories.push(new Ms(r,c,this.states))}),this.fallbackTransition=function Us(a,r,t){return new Ms(a,{type:1,animation:{type:2,steps:[],options:null},matchers:[(E,k)=>!0],options:null,queryCount:0,depCount:0},r)}(r,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(r,t,s,c){return this.transitionFactories.find(E=>E.match(r,t,s,c))||null}matchStyles(r,t,s){return this.fallbackTransition.buildStyles(r,t,s)}}function ba(a,r,t){a.has(r)?a.has(t)||a.set(t,a.get(r)):a.has(t)&&a.set(r,a.get(t))}const $o=new Po;class kr{constructor(r,t,s){this.bodyNode=r,this._driver=t,this._normalizer=s,this._animations=new Map,this._playersById=new Map,this.players=[]}register(r,t){const s=[],h=ar(this._driver,t,s,[]);if(s.length)throw function Wi(a){return new y.vHH(3503,!1)}();this._animations.set(r,h)}_buildPlayer(r,t,s){const c=r.element,h=rt(this._normalizer,r.keyframes,t,s);return this._driver.animate(c,h,r.duration,r.delay,r.easing,[],!0)}create(r,t,s={}){const c=[],h=this._animations.get(r);let E;const k=new Map;if(h?(E=yo(this._driver,t,h,Fn,ss,new Map,new Map,s,$o,c),E.forEach(ye=>{const ke=en(k,ye.element,new Map);ye.postStyleProps.forEach(lt=>ke.set(lt,null))})):(c.push(function St(){return new y.vHH(3300,!1)}()),E=[]),c.length)throw function _i(a){return new y.vHH(3504,!1)}();k.forEach((ye,ke)=>{ye.forEach((lt,bt)=>{ye.set(bt,this._driver.computeStyle(ke,bt,Ve))})});const Y=Ae(E.map(ye=>{const ke=k.get(ye.element);return this._buildPlayer(ye,new Map,ke)}));return this._playersById.set(r,Y),Y.onDestroy(()=>this.destroy(r)),this.players.push(Y),Y}destroy(r){const t=this._getPlayer(r);t.destroy(),this._playersById.delete(r);const s=this.players.indexOf(t);s>=0&&this.players.splice(s,1)}_getPlayer(r){const t=this._playersById.get(r);if(!t)throw function Fi(a){return new y.vHH(3301,!1)}();return t}listen(r,t,s,c){const h=Tn(t,"","","");return Mt(this._getPlayer(r),s,h,c),()=>{}}command(r,t,s,c){if("register"==s)return void this.register(r,c[0]);if("create"==s)return void this.create(r,t,c[0]||{});const h=this._getPlayer(r);switch(s){case"play":h.play();break;case"pause":h.pause();break;case"reset":h.reset();break;case"restart":h.restart();break;case"finish":h.finish();break;case"init":h.init();break;case"setPosition":h.setPosition(parseFloat(c[0]));break;case"destroy":this.destroy(r)}}}const zs="ng-animate-queued",pn="ng-animate-disabled",pi=[],ks={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Mn={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},ci="__ng_removed";class no{get params(){return this.options.params}constructor(r,t=""){this.namespaceId=t;const s=r&&r.hasOwnProperty("value");if(this.value=function Si(a){return a??null}(s?r.value:r),s){const h=Zn(r);delete h.value,this.options=h}else this.options={};this.options.params||(this.options.params={})}absorbOptions(r){const t=r.params;if(t){const s=this.options.params;Object.keys(t).forEach(c=>{null==s[c]&&(s[c]=t[c])})}}}const No="void",Yn=new no(No);class pt{constructor(r,t,s){this.id=r,this.hostElement=t,this._engine=s,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+r,$t(t,this._hostClassName)}listen(r,t,s,c){if(!this._triggers.has(t))throw function mn(a,r){return new y.vHH(3302,!1)}();if(null==s||0==s.length)throw function Vr(a){return new y.vHH(3303,!1)}();if(!function qo(a){return"start"==a||"done"==a}(s))throw function Xr(a,r){return new y.vHH(3400,!1)}();const h=en(this._elementListeners,r,[]),E={name:t,phase:s,callback:c};h.push(E);const k=en(this._engine.statesByElement,r,new Map);return k.has(t)||($t(r,Di),$t(r,Di+"-"+t),k.set(t,Yn)),()=>{this._engine.afterFlush(()=>{const $=h.indexOf(E);$>=0&&h.splice($,1),this._triggers.has(t)||k.delete(t)})}}register(r,t){return!this._triggers.has(r)&&(this._triggers.set(r,t),!0)}_getTrigger(r){const t=this._triggers.get(r);if(!t)throw function Ot(a){return new y.vHH(3401,!1)}();return t}trigger(r,t,s,c=!0){const h=this._getTrigger(t),E=new Kn(this.id,t,r);let k=this._engine.statesByElement.get(r);k||($t(r,Di),$t(r,Di+"-"+t),this._engine.statesByElement.set(r,k=new Map));let $=k.get(t);const Y=new no(s,this.id);if(!(s&&s.hasOwnProperty("value"))&&$&&Y.absorbOptions($.options),k.set(t,Y),$||($=Yn),Y.value!==No&&$.value===Y.value){if(!function g(a,r){const t=Object.keys(a),s=Object.keys(r);if(t.length!=s.length)return!1;for(let c=0;c<t.length;c++){const h=t[c];if(!r.hasOwnProperty(h)||a[h]!==r[h])return!1}return!0}($.params,Y.params)){const Rt=[],yn=h.matchStyles($.value,$.params,Rt),Ln=h.matchStyles(Y.value,Y.params,Rt);Rt.length?this._engine.reportError(Rt):this._engine.afterFlush(()=>{go(r,yn),wn(r,Ln)})}return}const lt=en(this._engine.playersByElement,r,[]);lt.forEach(Rt=>{Rt.namespaceId==this.id&&Rt.triggerName==t&&Rt.queued&&Rt.destroy()});let bt=h.matchTransition($.value,Y.value,r,Y.params),_t=!1;if(!bt){if(!c)return;bt=h.fallbackTransition,_t=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:r,triggerName:t,transition:bt,fromState:$,toState:Y,player:E,isFallbackTransition:_t}),_t||($t(r,zs),E.onStart(()=>{qn(r,zs)})),E.onDone(()=>{let Rt=this.players.indexOf(E);Rt>=0&&this.players.splice(Rt,1);const yn=this._engine.playersByElement.get(r);if(yn){let Ln=yn.indexOf(E);Ln>=0&&yn.splice(Ln,1)}}),this.players.push(E),lt.push(E),E}deregister(r){this._triggers.delete(r),this._engine.statesByElement.forEach(t=>t.delete(r)),this._elementListeners.forEach((t,s)=>{this._elementListeners.set(s,t.filter(c=>c.name!=r))})}clearElementCache(r){this._engine.statesByElement.delete(r),this._elementListeners.delete(r);const t=this._engine.playersByElement.get(r);t&&(t.forEach(s=>s.destroy()),this._engine.playersByElement.delete(r))}_signalRemovalForInnerTriggers(r,t){const s=this._engine.driver.query(r,rr,!0);s.forEach(c=>{if(c[ci])return;const h=this._engine.fetchNamespacesByElement(c);h.size?h.forEach(E=>E.triggerLeaveAnimation(c,t,!1,!0)):this.clearElementCache(c)}),this._engine.afterFlushAnimationsDone(()=>s.forEach(c=>this.clearElementCache(c)))}triggerLeaveAnimation(r,t,s,c){const h=this._engine.statesByElement.get(r),E=new Map;if(h){const k=[];if(h.forEach(($,Y)=>{if(E.set(Y,$.value),this._triggers.has(Y)){const ye=this.trigger(r,Y,No,c);ye&&k.push(ye)}}),k.length)return this._engine.markElementAsRemoved(this.id,r,!0,t,E),s&&Ae(k).onDone(()=>this._engine.processLeaveNode(r)),!0}return!1}prepareLeaveAnimationListeners(r){const t=this._elementListeners.get(r),s=this._engine.statesByElement.get(r);if(t&&s){const c=new Set;t.forEach(h=>{const E=h.name;if(c.has(E))return;c.add(E);const $=this._triggers.get(E).fallbackTransition,Y=s.get(E)||Yn,ye=new no(No),ke=new Kn(this.id,E,r);this._engine.totalQueuedPlayers++,this._queue.push({element:r,triggerName:E,transition:$,fromState:Y,toState:ye,player:ke,isFallbackTransition:!0})})}}removeNode(r,t){const s=this._engine;if(r.childElementCount&&this._signalRemovalForInnerTriggers(r,t),this.triggerLeaveAnimation(r,t,!0))return;let c=!1;if(s.totalAnimations){const h=s.players.length?s.playersByQueriedElement.get(r):[];if(h&&h.length)c=!0;else{let E=r;for(;E=E.parentNode;)if(s.statesByElement.get(E)){c=!0;break}}}if(this.prepareLeaveAnimationListeners(r),c)s.markElementAsRemoved(this.id,r,!1,t);else{const h=r[ci];(!h||h===ks)&&(s.afterFlush(()=>this.clearElementCache(r)),s.destroyInnerAnimations(r),s._onRemovalComplete(r,t))}}insertNode(r,t){$t(r,this._hostClassName)}drainQueuedTransitions(r){const t=[];return this._queue.forEach(s=>{const c=s.player;if(c.destroyed)return;const h=s.element,E=this._elementListeners.get(h);E&&E.forEach(k=>{if(k.name==s.triggerName){const $=Tn(h,s.triggerName,s.fromState.value,s.toState.value);$._data=r,Mt(s.player,k.phase,$,k.callback)}}),c.markedForDestroy?this._engine.afterFlush(()=>{c.destroy()}):t.push(s)}),this._queue=[],t.sort((s,c)=>{const h=s.transition.ast.depCount,E=c.transition.ast.depCount;return 0==h||0==E?h-E:this._engine.driver.containsElement(s.element,c.element)?1:-1})}destroy(r){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,r)}}class Yt{_onRemovalComplete(r,t){this.onRemovalComplete(r,t)}constructor(r,t,s){this.bodyNode=r,this.driver=t,this._normalizer=s,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(c,h)=>{}}get queuedPlayers(){const r=[];return this._namespaceList.forEach(t=>{t.players.forEach(s=>{s.queued&&r.push(s)})}),r}createNamespace(r,t){const s=new pt(r,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(s,t):(this.newHostElements.set(t,s),this.collectEnterElement(t)),this._namespaceLookup[r]=s}_balanceNamespaceList(r,t){const s=this._namespaceList,c=this.namespacesByHostElement;if(s.length-1>=0){let E=!1,k=this.driver.getParentElement(t);for(;k;){const $=c.get(k);if($){const Y=s.indexOf($);s.splice(Y+1,0,r),E=!0;break}k=this.driver.getParentElement(k)}E||s.unshift(r)}else s.push(r);return c.set(t,r),r}register(r,t){let s=this._namespaceLookup[r];return s||(s=this.createNamespace(r,t)),s}registerTrigger(r,t,s){let c=this._namespaceLookup[r];c&&c.register(t,s)&&this.totalAnimations++}destroy(r,t){r&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{const s=this._fetchNamespace(r);this.namespacesByHostElement.delete(s.hostElement);const c=this._namespaceList.indexOf(s);c>=0&&this._namespaceList.splice(c,1),s.destroy(t),delete this._namespaceLookup[r]}))}_fetchNamespace(r){return this._namespaceLookup[r]}fetchNamespacesByElement(r){const t=new Set,s=this.statesByElement.get(r);if(s)for(let c of s.values())if(c.namespaceId){const h=this._fetchNamespace(c.namespaceId);h&&t.add(h)}return t}trigger(r,t,s,c){if(br(t)){const h=this._fetchNamespace(r);if(h)return h.trigger(t,s,c),!0}return!1}insertNode(r,t,s,c){if(!br(t))return;const h=t[ci];if(h&&h.setForRemoval){h.setForRemoval=!1,h.setForMove=!0;const E=this.collectedLeaveElements.indexOf(t);E>=0&&this.collectedLeaveElements.splice(E,1)}if(r){const E=this._fetchNamespace(r);E&&E.insertNode(t,s)}c&&this.collectEnterElement(t)}collectEnterElement(r){this.collectedEnterElements.push(r)}markElementAsDisabled(r,t){t?this.disabledNodes.has(r)||(this.disabledNodes.add(r),$t(r,pn)):this.disabledNodes.has(r)&&(this.disabledNodes.delete(r),qn(r,pn))}removeNode(r,t,s){if(br(t)){const c=r?this._fetchNamespace(r):null;c?c.removeNode(t,s):this.markElementAsRemoved(r,t,!1,s);const h=this.namespacesByHostElement.get(t);h&&h.id!==r&&h.removeNode(t,s)}else this._onRemovalComplete(t,s)}markElementAsRemoved(r,t,s,c,h){this.collectedLeaveElements.push(t),t[ci]={namespaceId:r,setForRemoval:c,hasAnimation:s,removedBeforeQueried:!1,previousTriggersValues:h}}listen(r,t,s,c,h){return br(t)?this._fetchNamespace(r).listen(t,s,c,h):()=>{}}_buildInstruction(r,t,s,c,h){return r.transition.build(this.driver,r.element,r.fromState.value,r.toState.value,s,c,r.fromState.options,r.toState.options,t,h)}destroyInnerAnimations(r){let t=this.driver.query(r,rr,!0);t.forEach(s=>this.destroyActiveAnimationsForElement(s)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(r,fo,!0),t.forEach(s=>this.finishActiveQueriedAnimationOnElement(s)))}destroyActiveAnimationsForElement(r){const t=this.playersByElement.get(r);t&&t.forEach(s=>{s.queued?s.markedForDestroy=!0:s.destroy()})}finishActiveQueriedAnimationOnElement(r){const t=this.playersByQueriedElement.get(r);t&&t.forEach(s=>s.finish())}whenRenderingDone(){return new Promise(r=>{if(this.players.length)return Ae(this.players).onDone(()=>r());r()})}processLeaveNode(r){const t=r[ci];if(t&&t.setForRemoval){if(r[ci]=ks,t.namespaceId){this.destroyInnerAnimations(r);const s=this._fetchNamespace(t.namespaceId);s&&s.clearElementCache(r)}this._onRemovalComplete(r,t.setForRemoval)}r.classList?.contains(pn)&&this.markElementAsDisabled(r,!1),this.driver.query(r,".ng-animate-disabled",!0).forEach(s=>{this.markElementAsDisabled(s,!1)})}flush(r=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((s,c)=>this._balanceNamespaceList(s,c)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let s=0;s<this.collectedEnterElements.length;s++)$t(this.collectedEnterElements[s],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const s=[];try{t=this._flushAnimations(s,r)}finally{for(let c=0;c<s.length;c++)s[c]()}}else for(let s=0;s<this.collectedLeaveElements.length;s++)this.processLeaveNode(this.collectedLeaveElements[s]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(s=>s()),this._flushFns=[],this._whenQuietFns.length){const s=this._whenQuietFns;this._whenQuietFns=[],t.length?Ae(t).onDone(()=>{s.forEach(c=>c())}):s.forEach(c=>c())}}reportError(r){throw function jr(a){return new y.vHH(3402,!1)}()}_flushAnimations(r,t){const s=new Po,c=[],h=new Map,E=[],k=new Map,$=new Map,Y=new Map,ye=new Set;this.disabledNodes.forEach(Wt=>{ye.add(Wt);const rn=this.driver.query(Wt,".ng-animate-queued",!0);for(let hn=0;hn<rn.length;hn++)ye.add(rn[hn])});const ke=this.bodyNode,lt=Array.from(this.statesByElement.keys()),bt=Bi(lt,this.collectedEnterElements),_t=new Map;let Rt=0;bt.forEach((Wt,rn)=>{const hn=Fn+Rt++;_t.set(rn,hn),Wt.forEach(ti=>$t(ti,hn))});const yn=[],Ln=new Set,ai=new Set;for(let Wt=0;Wt<this.collectedLeaveElements.length;Wt++){const rn=this.collectedLeaveElements[Wt],hn=rn[ci];hn&&hn.setForRemoval&&(yn.push(rn),Ln.add(rn),hn.hasAnimation?this.driver.query(rn,".ng-star-inserted",!0).forEach(ti=>Ln.add(ti)):ai.add(rn))}const Qr=new Map,dr=Bi(lt,Array.from(Ln));dr.forEach((Wt,rn)=>{const hn=ss+Rt++;Qr.set(rn,hn),Wt.forEach(ti=>$t(ti,hn))}),r.push(()=>{bt.forEach((Wt,rn)=>{const hn=_t.get(rn);Wt.forEach(ti=>qn(ti,hn))}),dr.forEach((Wt,rn)=>{const hn=Qr.get(rn);Wt.forEach(ti=>qn(ti,hn))}),yn.forEach(Wt=>{this.processLeaveNode(Wt)})});const il=[],hr=[];for(let Wt=this._namespaceList.length-1;Wt>=0;Wt--)this._namespaceList[Wt].drainQueuedTransitions(t).forEach(hn=>{const ti=hn.player,so=hn.element;if(il.push(ti),this.collectedEnterElements.length){const Dr=so[ci];if(Dr&&Dr.setForMove){if(Dr.previousTriggersValues&&Dr.previousTriggersValues.has(hn.triggerName)){const Gl=Dr.previousTriggersValues.get(hn.triggerName),Bs=this.statesByElement.get(hn.element);if(Bs&&Bs.has(hn.triggerName)){const Lh=Bs.get(hn.triggerName);Lh.value=Gl,Bs.set(hn.triggerName,Lh)}}return void ti.destroy()}}const La=!ke||!this.driver.containsElement(ke,so),es=Qr.get(so),Xs=_t.get(so),Yi=this._buildInstruction(hn,s,Xs,es,La);if(Yi.errors&&Yi.errors.length)return void hr.push(Yi);if(La)return ti.onStart(()=>go(so,Yi.fromStyles)),ti.onDestroy(()=>wn(so,Yi.toStyles)),void c.push(ti);if(hn.isFallbackTransition)return ti.onStart(()=>go(so,Yi.fromStyles)),ti.onDestroy(()=>wn(so,Yi.toStyles)),void c.push(ti);const Lv=[];Yi.timelines.forEach(Dr=>{Dr.stretchStartingKeyframe=!0,this.disabledNodes.has(Dr.element)||Lv.push(Dr)}),Yi.timelines=Lv,s.append(so,Yi.timelines),E.push({instruction:Yi,player:ti,element:so}),Yi.queriedElements.forEach(Dr=>en(k,Dr,[]).push(ti)),Yi.preStyleProps.forEach((Dr,Gl)=>{if(Dr.size){let Bs=$.get(Gl);Bs||$.set(Gl,Bs=new Set),Dr.forEach((Lh,Rp)=>Bs.add(Rp))}}),Yi.postStyleProps.forEach((Dr,Gl)=>{let Bs=Y.get(Gl);Bs||Y.set(Gl,Bs=new Set),Dr.forEach((Lh,Rp)=>Bs.add(Rp))})});if(hr.length){const Wt=[];hr.forEach(rn=>{Wt.push(function Ce(a,r){return new y.vHH(3505,!1)}())}),il.forEach(rn=>rn.destroy()),this.reportError(Wt)}const $r=new Map,Ra=new Map;E.forEach(Wt=>{const rn=Wt.element;s.has(rn)&&(Ra.set(rn,rn),this._beforeAnimationBuild(Wt.player.namespaceId,Wt.instruction,$r))}),c.forEach(Wt=>{const rn=Wt.element;this._getPreviousPlayers(rn,!1,Wt.namespaceId,Wt.triggerName,null).forEach(ti=>{en($r,rn,[]).push(ti),ti.destroy()})});const Pa=yn.filter(Wt=>I(Wt,$,Y)),Fa=new Map;Ni(Fa,this.driver,ai,Y,Ve).forEach(Wt=>{I(Wt,$,Y)&&Pa.push(Wt)});const iu=new Map;bt.forEach((Wt,rn)=>{Ni(iu,this.driver,new Set(Wt),$,"!")}),Pa.forEach(Wt=>{const rn=Fa.get(Wt),hn=iu.get(Wt);Fa.set(Wt,new Map([...rn?.entries()??[],...hn?.entries()??[]]))});const rl=[],Fv=[],Ap={};E.forEach(Wt=>{const{element:rn,player:hn,instruction:ti}=Wt;if(s.has(rn)){if(ye.has(rn))return hn.onDestroy(()=>wn(rn,ti.toStyles)),hn.disabled=!0,hn.overrideTotalTime(ti.totalTime),void c.push(hn);let so=Ap;if(Ra.size>1){let es=rn;const Xs=[];for(;es=es.parentNode;){const Yi=Ra.get(es);if(Yi){so=Yi;break}Xs.push(es)}Xs.forEach(Yi=>Ra.set(Yi,so))}const La=this._buildAnimation(hn.namespaceId,ti,$r,h,iu,Fa);if(hn.setRealPlayer(La),so===Ap)rl.push(hn);else{const es=this.playersByElement.get(so);es&&es.length&&(hn.parentPlayer=Ae(es)),c.push(hn)}}else go(rn,ti.fromStyles),hn.onDestroy(()=>wn(rn,ti.toStyles)),Fv.push(hn),ye.has(rn)&&c.push(hn)}),Fv.forEach(Wt=>{const rn=h.get(Wt.element);if(rn&&rn.length){const hn=Ae(rn);Wt.setRealPlayer(hn)}}),c.forEach(Wt=>{Wt.parentPlayer?Wt.syncPlayerEvents(Wt.parentPlayer):Wt.destroy()});for(let Wt=0;Wt<yn.length;Wt++){const rn=yn[Wt],hn=rn[ci];if(qn(rn,ss),hn&&hn.hasAnimation)continue;let ti=[];if(k.size){let La=k.get(rn);La&&La.length&&ti.push(...La);let es=this.driver.query(rn,fo,!0);for(let Xs=0;Xs<es.length;Xs++){let Yi=k.get(es[Xs]);Yi&&Yi.length&&ti.push(...Yi)}}const so=ti.filter(La=>!La.destroyed);so.length?Qo(this,rn,so):this.processLeaveNode(rn)}return yn.length=0,rl.forEach(Wt=>{this.players.push(Wt),Wt.onDone(()=>{Wt.destroy();const rn=this.players.indexOf(Wt);this.players.splice(rn,1)}),Wt.play()}),rl}afterFlush(r){this._flushFns.push(r)}afterFlushAnimationsDone(r){this._whenQuietFns.push(r)}_getPreviousPlayers(r,t,s,c,h){let E=[];if(t){const k=this.playersByQueriedElement.get(r);k&&(E=k)}else{const k=this.playersByElement.get(r);if(k){const $=!h||h==No;k.forEach(Y=>{Y.queued||!$&&Y.triggerName!=c||E.push(Y)})}}return(s||c)&&(E=E.filter(k=>!(s&&s!=k.namespaceId||c&&c!=k.triggerName))),E}_beforeAnimationBuild(r,t,s){const h=t.element,E=t.isRemovalTransition?void 0:r,k=t.isRemovalTransition?void 0:t.triggerName;for(const $ of t.timelines){const Y=$.element,ye=Y!==h,ke=en(s,Y,[]);this._getPreviousPlayers(Y,ye,E,k,t.toState).forEach(bt=>{const _t=bt.getRealPlayer();_t.beforeDestroy&&_t.beforeDestroy(),bt.destroy(),ke.push(bt)})}go(h,t.fromStyles)}_buildAnimation(r,t,s,c,h,E){const k=t.triggerName,$=t.element,Y=[],ye=new Set,ke=new Set,lt=t.timelines.map(_t=>{const Rt=_t.element;ye.add(Rt);const yn=Rt[ci];if(yn&&yn.removedBeforeQueried)return new dn(_t.duration,_t.delay);const Ln=Rt!==$,ai=function hs(a){const r=[];return b(a,r),r}((s.get(Rt)||pi).map($r=>$r.getRealPlayer())).filter($r=>!!$r.element&&$r.element===Rt),Qr=h.get(Rt),dr=E.get(Rt),il=rt(this._normalizer,_t.keyframes,Qr,dr),hr=this._buildPlayer(_t,il,ai);if(_t.subTimeline&&c&&ke.add(Rt),Ln){const $r=new Kn(r,k,Rt);$r.setRealPlayer(hr),Y.push($r)}return hr});Y.forEach(_t=>{en(this.playersByQueriedElement,_t.element,[]).push(_t),_t.onDone(()=>function $i(a,r,t){let s=a.get(r);if(s){if(s.length){const c=s.indexOf(t);s.splice(c,1)}0==s.length&&a.delete(r)}return s}(this.playersByQueriedElement,_t.element,_t))}),ye.forEach(_t=>$t(_t,Hr));const bt=Ae(lt);return bt.onDestroy(()=>{ye.forEach(_t=>qn(_t,Hr)),wn($,t.toStyles)}),ke.forEach(_t=>{en(c,_t,[]).push(bt)}),bt}_buildPlayer(r,t,s){return t.length>0?this.driver.animate(r.element,t,r.duration,r.delay,r.easing,s):new dn(r.duration,r.delay)}}class Kn{constructor(r,t,s){this.namespaceId=r,this.triggerName=t,this.element=s,this._player=new dn,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(r){this._containsRealPlayer||(this._player=r,this._queuedCallbacks.forEach((t,s)=>{t.forEach(c=>Mt(r,s,void 0,c))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(r.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(r){this.totalTime=r}syncPlayerEvents(r){const t=this._player;t.triggerCallback&&r.onStart(()=>t.triggerCallback("start")),r.onDone(()=>this.finish()),r.onDestroy(()=>this.destroy())}_queueEvent(r,t){en(this._queuedCallbacks,r,[]).push(t)}onDone(r){this.queued&&this._queueEvent("done",r),this._player.onDone(r)}onStart(r){this.queued&&this._queueEvent("start",r),this._player.onStart(r)}onDestroy(r){this.queued&&this._queueEvent("destroy",r),this._player.onDestroy(r)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(r){this.queued||this._player.setPosition(r)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(r){const t=this._player;t.triggerCallback&&t.triggerCallback(r)}}function br(a){return a&&1===a.nodeType}function Nn(a,r){const t=a.style.display;return a.style.display=r??"none",t}function Ni(a,r,t,s,c){const h=[];t.forEach($=>h.push(Nn($)));const E=[];s.forEach(($,Y)=>{const ye=new Map;$.forEach(ke=>{const lt=r.computeStyle(Y,ke,c);ye.set(ke,lt),(!lt||0==lt.length)&&(Y[ci]=Mn,E.push(Y))}),a.set(Y,ye)});let k=0;return t.forEach($=>Nn($,h[k++])),E}function Bi(a,r){const t=new Map;if(a.forEach(k=>t.set(k,[])),0==r.length)return t;const c=new Set(r),h=new Map;function E(k){if(!k)return 1;let $=h.get(k);if($)return $;const Y=k.parentNode;return $=t.has(Y)?Y:c.has(Y)?1:E(Y),h.set(k,$),$}return r.forEach(k=>{const $=E(k);1!==$&&t.get($).push(k)}),t}function $t(a,r){a.classList?.add(r)}function qn(a,r){a.classList?.remove(r)}function Qo(a,r,t){Ae(t).onDone(()=>a.processLeaveNode(r))}function b(a,r){for(let t=0;t<a.length;t++){const s=a[t];s instanceof Hn?b(s.players,r):r.push(s)}}function I(a,r,t){const s=t.get(a);if(!s)return!1;let c=r.get(a);return c?s.forEach(h=>c.add(h)):r.set(a,s),t.delete(a),!0}class A{constructor(r,t,s){this._driver=t,this._normalizer=s,this._triggerCache={},this.onRemovalComplete=(c,h)=>{},this._transitionEngine=new Yt(r.body,t,s),this._timelineEngine=new kr(r.body,t,s),this._transitionEngine.onRemovalComplete=(c,h)=>this.onRemovalComplete(c,h)}registerTrigger(r,t,s,c,h){const E=r+"-"+c;let k=this._triggerCache[E];if(!k){const $=[],ye=ar(this._driver,h,$,[]);if($.length)throw function ts(a,r){return new y.vHH(3404,!1)}();k=function Hs(a,r,t){return new ra(a,r,t)}(c,ye,this._normalizer),this._triggerCache[E]=k}this._transitionEngine.registerTrigger(t,c,k)}register(r,t){this._transitionEngine.register(r,t)}destroy(r,t){this._transitionEngine.destroy(r,t)}onInsert(r,t,s,c){this._transitionEngine.insertNode(r,t,s,c)}onRemove(r,t,s){this._transitionEngine.removeNode(r,t,s)}disableAnimations(r,t){this._transitionEngine.markElementAsDisabled(r,t)}process(r,t,s,c){if("@"==s.charAt(0)){const[h,E]=Cn(s);this._timelineEngine.command(h,t,E,c)}else this._transitionEngine.trigger(r,t,s,c)}listen(r,t,s,c,h){if("@"==s.charAt(0)){const[E,k]=Cn(s);return this._timelineEngine.listen(E,t,k,h)}return this._transitionEngine.listen(r,t,s,c,h)}flush(r=-1){this._transitionEngine.flush(r)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(r){this._transitionEngine.afterFlushAnimationsDone(r)}}let X=(()=>{class a{static#e=this.initialStylesByElement=new WeakMap;constructor(t,s,c){this._element=t,this._startStyles=s,this._endStyles=c,this._state=0;let h=a.initialStylesByElement.get(t);h||a.initialStylesByElement.set(t,h=new Map),this._initialStyles=h}start(){this._state<1&&(this._startStyles&&wn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(wn(this._element,this._initialStyles),this._endStyles&&(wn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(a.initialStylesByElement.delete(this._element),this._startStyles&&(go(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(go(this._element,this._endStyles),this._endStyles=null),wn(this._element,this._initialStyles),this._state=3)}}return a})();function te(a){let r=null;return a.forEach((t,s)=>{(function De(a){return"display"===a||"position"===a})(s)&&(r=r||new Map,r.set(s,t))}),r}class me{constructor(r,t,s,c){this.element=r,this.keyframes=t,this.options=s,this._specialStyles=c,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=s.duration,this._delay=s.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(r=>r()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const r=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,r,this.options),this._finalKeyframe=r.length?r[r.length-1]:new Map;const t=()=>this._onFinish();this.domPlayer.addEventListener("finish",t),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",t)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(r){const t=[];return r.forEach(s=>{t.push(Object.fromEntries(s))}),t}_triggerWebAnimation(r,t,s){return r.animate(this._convertKeyframesToObject(t),s)}onStart(r){this._originalOnStartFns.push(r),this._onStartFns.push(r)}onDone(r){this._originalOnDoneFns.push(r),this._onDoneFns.push(r)}onDestroy(r){this._onDestroyFns.push(r)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(r=>r()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(r=>r()),this._onDestroyFns=[])}setPosition(r){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=r*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const r=new Map;this.hasStarted()&&this._finalKeyframe.forEach((s,c)=>{"offset"!==c&&r.set(c,this._finished?s:Wo(this.element,c))}),this.currentSnapshot=r}triggerCallback(r){const t="start"===r?this._onStartFns:this._onDoneFns;t.forEach(s=>s()),t.length=0}}class Ie{validateStyleProperty(r){return!0}validateAnimatableStyleProperty(r){return!0}matchesElement(r,t){return!1}containsElement(r,t){return Li(r,t)}getParentElement(r){return ir(r)}query(r,t,s){return To(r,t,s)}computeStyle(r,t,s){return window.getComputedStyle(r)[t]}animate(r,t,s,c,h,E=[]){const $={duration:s,delay:c,fill:0==c?"both":"forwards"};h&&($.easing=h);const Y=new Map,ye=E.filter(bt=>bt instanceof me);(function Ss(a,r){return 0===a||0===r})(s,c)&&ye.forEach(bt=>{bt.currentSnapshot.forEach((_t,Rt)=>Y.set(Rt,_t))});let ke=function Xt(a){return a.length?a[0]instanceof Map?a:a.map(r=>ko(r)):[]}(t).map(bt=>xr(bt));ke=function mo(a,r,t){if(t.size&&r.length){let s=r[0],c=[];if(t.forEach((h,E)=>{s.has(E)||c.push(E),s.set(E,h)}),c.length)for(let h=1;h<r.length;h++){let E=r[h];c.forEach(k=>E.set(k,Wo(a,k)))}}return r}(r,ke,Y);const lt=function N(a,r){let t=null,s=null;return Array.isArray(r)&&r.length?(t=te(r[0]),r.length>1&&(s=te(r[r.length-1]))):r instanceof Map&&(t=te(r)),t||s?new X(a,t,s):null}(r,ke);return new me(r,ke,$,lt)}}const nt="@.disabled";class ut{constructor(r,t,s,c){this.namespaceId=r,this.delegate=t,this.engine=s,this._onDestroy=c,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(r){this.delegate.destroyNode?.(r)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(r,t){return this.delegate.createElement(r,t)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}appendChild(r,t){this.delegate.appendChild(r,t),this.engine.onInsert(this.namespaceId,t,r,!1)}insertBefore(r,t,s,c=!0){this.delegate.insertBefore(r,t,s),this.engine.onInsert(this.namespaceId,t,r,c)}removeChild(r,t,s){this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(r,t){return this.delegate.selectRootElement(r,t)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,t,s,c){this.delegate.setAttribute(r,t,s,c)}removeAttribute(r,t,s){this.delegate.removeAttribute(r,t,s)}addClass(r,t){this.delegate.addClass(r,t)}removeClass(r,t){this.delegate.removeClass(r,t)}setStyle(r,t,s,c){this.delegate.setStyle(r,t,s,c)}removeStyle(r,t,s){this.delegate.removeStyle(r,t,s)}setProperty(r,t,s){"@"==t.charAt(0)&&t==nt?this.disableAnimations(r,!!s):this.delegate.setProperty(r,t,s)}setValue(r,t){this.delegate.setValue(r,t)}listen(r,t,s){return this.delegate.listen(r,t,s)}disableAnimations(r,t){this.engine.disableAnimations(r,t)}}class it extends ut{constructor(r,t,s,c,h){super(t,s,c,h),this.factory=r,this.namespaceId=t}setProperty(r,t,s){"@"==t.charAt(0)?"."==t.charAt(1)&&t==nt?this.disableAnimations(r,s=void 0===s||!!s):this.engine.process(this.namespaceId,r,t.slice(1),s):this.delegate.setProperty(r,t,s)}listen(r,t,s){if("@"==t.charAt(0)){const c=function vt(a){switch(a){case"body":return document.body;case"document":return document;case"window":return window;default:return a}}(r);let h=t.slice(1),E="";return"@"!=h.charAt(0)&&([h,E]=function Qe(a){const r=a.indexOf(".");return[a.substring(0,r),a.slice(r+1)]}(h)),this.engine.listen(this.namespaceId,c,h,E,k=>{this.factory.scheduleListenerCallback(k._data||-1,s,k)})}return this.delegate.listen(r,t,s)}}class Xe{constructor(r,t,s){this.delegate=r,this.engine=t,this._zone=s,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,t.onRemovalComplete=(c,h)=>{const E=h?.parentNode(c);E&&h.removeChild(E,c)}}createRenderer(r,t){const c=this.delegate.createRenderer(r,t);if(!r||!t?.data?.animation){const Y=this._rendererCache;let ye=Y.get(c);return ye||(ye=new ut("",c,this.engine,()=>Y.delete(c)),Y.set(c,ye)),ye}const h=t.id,E=t.id+"-"+this._currentId;this._currentId++,this.engine.register(E,r);const k=Y=>{Array.isArray(Y)?Y.forEach(k):this.engine.registerTrigger(h,E,r,Y.name,Y)};return t.data.animation.forEach(k),new it(this,E,c,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(r,t,s){if(r>=0&&r<this._microtaskId)return void this._zone.run(()=>t(s));const c=this._animationCallbacksBuffer;0==c.length&&queueMicrotask(()=>{this._zone.run(()=>{c.forEach(h=>{const[E,k]=h;E(k)}),this._animationCallbacksBuffer=[]})}),c.push([t,s])}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}const It=[{provide:Ut,useFactory:function Ft(){return new Ao}},{provide:A,useClass:(()=>{class a extends A{constructor(t,s,c,h){super(t,s,c)}ngOnDestroy(){this.flush()}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(q.K0),y.LFG(li),y.LFG(Ut),y.LFG(y.z2F))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac})}return a})()},{provide:y.FYo,useFactory:function kt(a,r,t){return new Xe(a,r,t)},deps:[_.se,A,y.R0b]}],yt=[{provide:li,useFactory:()=>new Ie},{provide:y.QbO,useValue:"BrowserAnimations"},...It],cn=[{provide:li,useClass:uo},{provide:y.QbO,useValue:"NoopAnimations"},...It];let xt=(()=>{class a{static withConfig(t){return{ngModule:a,providers:t.disableAnimations?cn:yt}}static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({providers:yt,imports:[_.b2]})}return a})();var B=M(7018);function x(a,r){if(1&a&&(y.TgZ(0,"fluent-card")(1,"header",6),y._uU(2),y.qZA(),y._UZ(3,"button",7),y.qZA()),2&a){const t=y.oxw().$implicit;y.xp6(1),y.s9C("title",t.title),y.xp6(1),y.Oqu(t.title)}}function F(a,r){1&a&&y.YNc(0,x,4,2,"fluent-card"),2&a&&y.um2(0,r.$implicit?0:-1)}function se(a,r){1&a&&y._UZ(0,"app-no-data",8)}function Ue(a,r){1&a&&y.SjG(0,F,1,1,null,null,y.ikw,!1,se,1,0),2&a&&y.wJu(0,r)}const Lt=[{path:"music",loadChildren:()=>Promise.all([M.e(592),M.e(367)]).then(M.bind(M,6367)).then(a=>a.MusicModule)},{path:"video",loadChildren:()=>Promise.all([M.e(592),M.e(976)]).then(M.bind(M,4976)).then(a=>a.VideoModule)},{path:"settings",loadComponent:()=>M.e(200).then(M.bind(M,4200)).then(a=>a.SettingsPage)},{path:"home",component:(()=>{class a{constructor(){this.#e=(0,y.f3M)(Q.J),this.recentFiles$=this.#e.getRecentMedia()}#e;static#t=this.\u0275fac=function(s){return new(s||a)};static#n=this.\u0275cmp=y.Xpm({type:a,selectors:[["app-recent-files"]],decls:10,vars:3,consts:[[1,"main"],[1,"toolbar"],[1,"toolbar-title"],[1,"page-content"],[1,"sub-title"],[1,"folder-container"],[3,"title"],["matRipple","","type","button",1,"card-img__btn"],["title","No Recent Media","message","Play some music","btn1Txt","","btn2Txt",""]],template:function(s,c){if(1&s&&(y.TgZ(0,"main",0)(1,"section",1)(2,"span",2),y._uU(3,"Home"),y.qZA()(),y.TgZ(4,"section",3)(5,"h4",4),y._uU(6,"Recent Media"),y.qZA(),y.TgZ(7,"section",5),y.YNc(8,Ue,3,1),y.ALo(9,"async"),y.qZA()()()),2&s){let h;y.xp6(8),y.um2(8,(h=y.lcZ(9,1,c.recentFiles$))?8:-1,h)}},dependencies:[B.d,q.Ov],styles:["main.main[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;height:100%}main.main[_ngcontent-%COMP%]   section.page-content[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr}main.main[_ngcontent-%COMP%]   section.page-content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin:0}main.main[_ngcontent-%COMP%]   app-no-data[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:1/-1}.folder-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,200px);grid-template-rows:250px repeat(auto-fill,250px);height:100%;gap:15px}@media all and (max-width: 768px){.folder-container[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,50% 50%);box-sizing:border-box;padding:10px}}.folder-container[_ngcontent-%COMP%]   fluent-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{font-size:15px;padding:10px}.folder-container[_ngcontent-%COMP%]   fluent-card[_ngcontent-%COMP%]   button.card-img__btn[_ngcontent-%COMP%]{background:transparent;border:0 none;width:100%}.folder-container[_ngcontent-%COMP%]   fluent-card[_ngcontent-%COMP%]   button.card-img__btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.folder-container[_ngcontent-%COMP%]   fluent-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;column-gap:10px;padding:10px}"]})}return a})()},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",loadComponent:()=>M.e(592).then(M.bind(M,3391)).then(a=>a.NotFoundPage)}];let Vn=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({imports:[oe.Bz.forRoot(Lt),oe.Bz]})}return a})();function xi(a){return Array.isArray(a)?a:[a]}function an(a){return null==a?"":"string"==typeof a?a:`${a}px`}var Zr=M(2096),wo=M(5592),Or=M(4829),ps=M(1631),io=M(4266),oi=M(4674),sl=M(7400);const al=["addListener","removeListener"],wa=["addEventListener","removeEventListener"],ou=["on","off"];function oa(a,r,t,s){if((0,oi.m)(t)&&(s=t,t=void 0),s)return oa(a,r,t).pipe((0,sl.Z)(s));const[c,h]=function Kl(a){return(0,oi.m)(a.addEventListener)&&(0,oi.m)(a.removeEventListener)}(a)?wa.map(E=>k=>a[E](r,k,t)):function Yl(a){return(0,oi.m)(a.addListener)&&(0,oi.m)(a.removeListener)}(a)?al.map(Zl(a,r)):function su(a){return(0,oi.m)(a.on)&&(0,oi.m)(a.off)}(a)?ou.map(Zl(a,r)):[];if(!c&&(0,io.z)(a))return(0,ps.z)(E=>oa(E,r,t))((0,Or.Xf)(a));if(!c)throw new TypeError("Invalid event target");return new wo.y(E=>{const k=(...$)=>E.next(1<$.length?$:$[0]);return c(k),()=>h(k)})}function Zl(a,r){return t=>s=>a[t](r,s)}var ll=M(7394);class _o extends ll.w0{constructor(r,t){super()}schedule(r,t=0){return this}}const Na={setInterval(a,r,...t){const{delegate:s}=Na;return s?.setInterval?s.setInterval(a,r,...t):setInterval(a,r,...t)},clearInterval(a){const{delegate:r}=Na;return(r?.clearInterval||clearInterval)(a)},delegate:void 0};var au=M(9039);class si extends _o{constructor(r,t){super(r,t),this.scheduler=r,this.work=t,this.pending=!1}schedule(r,t=0){var s;if(this.closed)return this;this.state=r;const c=this.id,h=this.scheduler;return null!=c&&(this.id=this.recycleAsyncId(h,c,t)),this.pending=!0,this.delay=t,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(h,this.id,t),this}requestAsyncId(r,t,s=0){return Na.setInterval(r.flush.bind(r,this),s)}recycleAsyncId(r,t,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return t;null!=t&&Na.clearInterval(t)}execute(r,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(r,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(r,t){let c,s=!1;try{this.work(r)}catch(h){s=!0,c=h||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),c}unsubscribe(){if(!this.closed){const{id:r,scheduler:t}=this,{actions:s}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,au.P)(s,this),null!=r&&(this.id=this.recycleAsyncId(t,r,null)),this.delay=null,super.unsubscribe()}}}const sa={schedule(a){let r=requestAnimationFrame,t=cancelAnimationFrame;const{delegate:s}=sa;s&&(r=s.requestAnimationFrame,t=s.cancelAnimationFrame);const c=r(h=>{t=void 0,a(h)});return new ll.w0(()=>t?.(c))},requestAnimationFrame(...a){const{delegate:r}=sa;return(r?.requestAnimationFrame||requestAnimationFrame)(...a)},cancelAnimationFrame(...a){const{delegate:r}=sa;return(r?.cancelAnimationFrame||cancelAnimationFrame)(...a)},delegate:void 0};var Yr=M(4552);class Os{constructor(r,t=Os.now){this.schedulerActionCtor=r,this.now=t}schedule(r,t=0,s){return new this.schedulerActionCtor(this,r).schedule(s,t)}}Os.now=Yr.l.now;class Ws extends Os{constructor(r,t=Os.now){super(r,t),this.actions=[],this._active=!1}flush(r){const{actions:t}=this;if(this._active)return void t.push(r);let s;this._active=!0;do{if(s=r.execute(r.state,r.delay))break}while(r=t.shift());if(this._active=!1,s){for(;r=t.shift();)r.unsubscribe();throw s}}}new class Ca extends Ws{flush(r){this._active=!0;const t=this._scheduled;this._scheduled=void 0;const{actions:s}=this;let c;r=r||s.shift();do{if(c=r.execute(r.state,r.delay))break}while((r=s[0])&&r.id===t&&s.shift());if(this._active=!1,c){for(;(r=s[0])&&r.id===t&&s.shift();)r.unsubscribe();throw c}}}(class _a extends si{constructor(r,t){super(r,t),this.scheduler=r,this.work=t}requestAsyncId(r,t,s=0){return null!==s&&s>0?super.requestAsyncId(r,t,s):(r.actions.push(this),r._scheduled||(r._scheduled=sa.requestAnimationFrame(()=>r.flush(void 0))))}recycleAsyncId(r,t,s=0){var c;if(null!=s?s>0:this.delay>0)return super.recycleAsyncId(r,t,s);const{actions:h}=r;null!=t&&(null===(c=h[h.length-1])||void 0===c?void 0:c.id)!==t&&(sa.cancelAnimationFrame(t),r._scheduled=void 0)}});let ql,ro=1;const Do={};function Ba(a){return a in Do&&(delete Do[a],!0)}const gd={setImmediate(a){const r=ro++;return Do[r]=!0,ql||(ql=Promise.resolve()),ql.then(()=>Ba(r)&&a()),r},clearImmediate(a){Ba(a)}},{setImmediate:Ql,clearImmediate:Xl}=gd,Da={setImmediate(...a){const{delegate:r}=Da;return(r?.setImmediate||Ql)(...a)},clearImmediate(a){const{delegate:r}=Da;return(r?.clearImmediate||Xl)(a)},delegate:void 0},cl=(new class tn extends Ws{flush(r){this._active=!0;const t=this._scheduled;this._scheduled=void 0;const{actions:s}=this;let c;r=r||s.shift();do{if(c=r.execute(r.state,r.delay))break}while((r=s[0])&&r.id===t&&s.shift());if(this._active=!1,c){for(;(r=s[0])&&r.id===t&&s.shift();)r.unsubscribe();throw c}}}(class Jl extends si{constructor(r,t){super(r,t),this.scheduler=r,this.work=t}requestAsyncId(r,t,s=0){return null!==s&&s>0?super.requestAsyncId(r,t,s):(r.actions.push(this),r._scheduled||(r._scheduled=Da.setImmediate(r.flush.bind(r,void 0))))}recycleAsyncId(r,t,s=0){var c;if(null!=s?s>0:this.delay>0)return super.recycleAsyncId(r,t,s);const{actions:h}=r;null!=t&&(null===(c=h[h.length-1])||void 0===c?void 0:c.id)!==t&&(Da.clearImmediate(t),r._scheduled===t&&(r._scheduled=void 0))}}),new Ws(si)),gs=cl;var tc=M(9360),nc=M(8251),Hh=M(671);function ic(a=0,r,t=gs){let s=-1;return null!=r&&((0,Hh.K)(r)?t=r:s=r),new wo.y(c=>{let h=function lu(a){return a instanceof Date&&!isNaN(a)}(a)?+a-t.now():a;h<0&&(h=0);let E=0;return t.schedule(function(){c.closed||(c.next(E++),0<=s?this.schedule(void 0,s):c.complete())},h)})}function S(a,r=cl){return function Va(a){return(0,tc.e)((r,t)=>{let s=!1,c=null,h=null,E=!1;const k=()=>{if(h?.unsubscribe(),h=null,s){s=!1;const Y=c;c=null,t.next(Y)}E&&t.complete()},$=()=>{h=null,E&&t.complete()};r.subscribe((0,nc.x)(t,Y=>{s=!0,c=Y,h||(0,Or.Xf)(a(Y)).subscribe(h=(0,nc.x)(t,k,$))},()=>{E=!0,(!s||!h||h.closed)&&t.complete()}))})}(()=>ic(a,r))}var Le=M(2181);let Me;try{Me=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Me=!1}let Ar,Tt=(()=>{class a{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,q.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!Me)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(y.Lbi))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ja(){if(null==Ar){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return Ar=!1,Ar;if("scrollBehavior"in document.documentElement.style)Ar=!0;else{const a=Element.prototype.scrollTo;Ar=!!a&&!/\{\s*\[native code\]\s*\}/.test(a.toString())}}return Ar}function Xi(a){return a.composedPath?a.composedPath()[0]:a.target}function Gs(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}const aa=new y.OlP("cdk-dir-doc",{providedIn:"root",factory:function dl(){return(0,y.f3M)(q.K0)}}),hl=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let rc=(()=>{class a{constructor(t){this.value="ltr",this.change=new y.vpe,t&&(this.value=function Ua(a){const r=a?.toLowerCase()||"";return"auto"===r&&typeof navigator<"u"&&navigator?.language?hl.test(navigator.language)?"rtl":"ltr":"rtl"===r?"rtl":"ltr"}((t.body?t.body.dir:null)||(t.documentElement?t.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(aa,8))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),oc=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({})}return a})(),Ge=(()=>{class a{constructor(t,s,c){this._ngZone=t,this._platform=s,this._scrolled=new P.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=c}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){const s=this.scrollContainers.get(t);s&&(s.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=20){return this._platform.isBrowser?new wo.y(s=>{this._globalSubscription||this._addGlobalListener();const c=t>0?this._scrolled.pipe(S(t)).subscribe(s):this._scrolled.subscribe(s);return this._scrolledCount++,()=>{c.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,Zr.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,s)=>this.deregister(s)),this._scrolled.complete()}ancestorScrolled(t,s){const c=this.getAncestorScrollContainers(t);return this.scrolled(s).pipe((0,Le.h)(h=>!h||c.indexOf(h)>-1))}getAncestorScrollContainers(t){const s=[];return this.scrollContainers.forEach((c,h)=>{this._scrollableContainsElement(h,t)&&s.push(h)}),s}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(t,s){let c=function ki(a){return a instanceof y.SBq?a.nativeElement:a}(s),h=t.getElementRef().nativeElement;do{if(c==h)return!0}while(c=c.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>oa(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(y.R0b),y.LFG(Tt),y.LFG(q.K0,8))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Jt=(()=>{class a{constructor(t,s,c){this._platform=t,this._change=new P.x,this._changeListener=h=>{this._change.next(h)},this._document=c,s.runOutsideAngular(()=>{if(t.isBrowser){const h=this._getWindow();h.addEventListener("resize",this._changeListener),h.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const t=this._getWindow();t.removeEventListener("resize",this._changeListener),t.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){const t=this.getViewportScrollPosition(),{width:s,height:c}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+c,right:t.left+s,height:c,width:s}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const t=this._document,s=this._getWindow(),c=t.documentElement,h=c.getBoundingClientRect();return{top:-h.top||t.body.scrollTop||s.scrollY||c.scrollTop||0,left:-h.left||t.body.scrollLeft||s.scrollX||c.scrollLeft||0}}change(t=20){return t>0?this._change.pipe(S(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(Tt),y.LFG(y.R0b),y.LFG(q.K0,8))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Up=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({})}return a})(),uu=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({imports:[oc,Up,oc,Up]})}return a})();var As=M(8180),vd=M(9773);class zh{attach(r){return this._attachedHost=r,r.attach(this)}detach(){let r=this._attachedHost;null!=r&&(this._attachedHost=null,r.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(r){this._attachedHost=r}}class Wh extends zh{constructor(r,t,s,c,h){super(),this.component=r,this.viewContainerRef=t,this.injector=s,this.componentFactoryResolver=c,this.projectableNodes=h}}class iy extends zh{constructor(r,t,s,c){super(),this.templateRef=r,this.viewContainerRef=t,this.context=s,this.injector=c}get origin(){return this.templateRef.elementRef}attach(r,t=this.context){return this.context=t,super.attach(r)}detach(){return this.context=void 0,super.detach()}}class ry extends zh{constructor(r){super(),this.element=r instanceof y.SBq?r.nativeElement:r}}class oy{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(r){return r instanceof Wh?(this._attachedPortal=r,this.attachComponentPortal(r)):r instanceof iy?(this._attachedPortal=r,this.attachTemplatePortal(r)):this.attachDomPortal&&r instanceof ry?(this._attachedPortal=r,this.attachDomPortal(r)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(r){this._disposeFn=r}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class W_ extends oy{constructor(r,t,s,c,h){super(),this.outletElement=r,this._componentFactoryResolver=t,this._appRef=s,this._defaultInjector=c,this.attachDomPortal=E=>{const k=E.element,$=this._document.createComment("dom-portal");k.parentNode.insertBefore($,k),this.outletElement.appendChild(k),this._attachedPortal=E,super.setDisposeFn(()=>{$.parentNode&&$.parentNode.replaceChild(k,$)})},this._document=h}attachComponentPortal(r){const s=(r.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(r.component);let c;return r.viewContainerRef?(c=r.viewContainerRef.createComponent(s,r.viewContainerRef.length,r.injector||r.viewContainerRef.injector,r.projectableNodes||void 0),this.setDisposeFn(()=>c.destroy())):(c=s.create(r.injector||this._defaultInjector||y.zs3.NULL),this._appRef.attachView(c.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(c.hostView),c.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(c)),this._attachedPortal=r,c}attachTemplatePortal(r){let t=r.viewContainerRef,s=t.createEmbeddedView(r.templateRef,r.context,{injector:r.injector});return s.rootNodes.forEach(c=>this.outletElement.appendChild(c)),s.detectChanges(),this.setDisposeFn(()=>{let c=t.indexOf(s);-1!==c&&t.remove(c)}),this._attachedPortal=r,s}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(r){return r.hostView.rootNodes[0]}}let _d=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({})}return a})();var Cd=M(3019);const Gh=ja();class sy{constructor(r,t){this._viewportRuler=r,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=t}attach(){}enable(){if(this._canBeEnabled()){const r=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=r.style.left||"",this._previousHTMLStyles.top=r.style.top||"",r.style.left=an(-this._previousScrollPosition.left),r.style.top=an(-this._previousScrollPosition.top),r.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const r=this._document.documentElement,s=r.style,c=this._document.body.style,h=s.scrollBehavior||"",E=c.scrollBehavior||"";this._isEnabled=!1,s.left=this._previousHTMLStyles.left,s.top=this._previousHTMLStyles.top,r.classList.remove("cdk-global-scrollblock"),Gh&&(s.scrollBehavior=c.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Gh&&(s.scrollBehavior=h,c.scrollBehavior=E)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const t=this._document.body,s=this._viewportRuler.getViewportSize();return t.scrollHeight>s.height||t.scrollWidth>s.width}}class ay{constructor(r,t,s,c){this._scrollDispatcher=r,this._ngZone=t,this._viewportRuler=s,this._config=c,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(r){this._overlayRef=r}enable(){if(this._scrollSubscription)return;const r=this._scrollDispatcher.scrolled(0).pipe((0,Le.h)(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=r.subscribe(()=>{const t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=r.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}class hu{enable(){}disable(){}attach(){}}function fu(a,r){return r.some(t=>a.bottom<t.top||a.top>t.bottom||a.right<t.left||a.left>t.right)}function Zh(a,r){return r.some(t=>a.top<t.top||a.bottom>t.bottom||a.left<t.left||a.right>t.right)}class Dd{constructor(r,t,s,c){this._scrollDispatcher=r,this._viewportRuler=t,this._ngZone=s,this._config=c,this._scrollSubscription=null}attach(r){this._overlayRef=r}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:s,height:c}=this._viewportRuler.getViewportSize();fu(t,[{width:s,height:c,bottom:c,right:s,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}let Yh=(()=>{class a{constructor(t,s,c,h){this._scrollDispatcher=t,this._viewportRuler=s,this._ngZone=c,this.noop=()=>new hu,this.close=E=>new ay(this._scrollDispatcher,this._ngZone,this._viewportRuler,E),this.block=()=>new sy(this._viewportRuler,this._document),this.reposition=E=>new Dd(this._scrollDispatcher,this._viewportRuler,this._ngZone,E),this._document=h}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(Ge),y.LFG(Jt),y.LFG(y.R0b),y.LFG(q.K0))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();class ly{constructor(r){if(this.scrollStrategy=new hu,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,r){const t=Object.keys(r);for(const s of t)void 0!==r[s]&&(this[s]=r[s])}}}class Zp{constructor(r,t){this.connectionPair=r,this.scrollableViewProperties=t}}let pu=(()=>{class a{constructor(t){this._attachedOverlays=[],this._document=t}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){const s=this._attachedOverlays.indexOf(t);s>-1&&this._attachedOverlays.splice(s,1),0===this._attachedOverlays.length&&this.detach()}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(q.K0))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),pl=(()=>{class a extends pu{constructor(t,s){super(t),this._ngZone=s,this._keydownListener=c=>{const h=this._attachedOverlays;for(let E=h.length-1;E>-1;E--)if(h[E]._keydownEvents.observers.length>0){const k=h[E]._keydownEvents;this._ngZone?this._ngZone.run(()=>k.next(c)):k.next(c);break}}}add(t){super.add(t),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(q.K0),y.LFG(y.R0b,8))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),hy=(()=>{class a extends pu{constructor(t,s,c){super(t),this._platform=s,this._ngZone=c,this._cursorStyleIsSet=!1,this._pointerDownListener=h=>{this._pointerDownEventTarget=Xi(h)},this._clickListener=h=>{const E=Xi(h),k="click"===h.type&&this._pointerDownEventTarget?this._pointerDownEventTarget:E;this._pointerDownEventTarget=null;const $=this._attachedOverlays.slice();for(let Y=$.length-1;Y>-1;Y--){const ye=$[Y];if(ye._outsidePointerEvents.observers.length<1||!ye.hasAttached())continue;if(ye.overlayElement.contains(E)||ye.overlayElement.contains(k))break;const ke=ye._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>ke.next(h)):ke.next(h)}}}add(t){if(super.add(t),!this._isAttached){const s=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(s)):this._addEventListeners(s),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=s.style.cursor,s.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){const t=this._document.body;t.removeEventListener("pointerdown",this._pointerDownListener,!0),t.removeEventListener("click",this._clickListener,!0),t.removeEventListener("auxclick",this._clickListener,!0),t.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(t.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(t){t.addEventListener("pointerdown",this._pointerDownListener,!0),t.addEventListener("click",this._clickListener,!0),t.addEventListener("auxclick",this._clickListener,!0),t.addEventListener("contextmenu",this._clickListener,!0)}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(q.K0),y.LFG(Tt),y.LFG(y.R0b,8))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Kh=(()=>{class a{constructor(t,s){this._platform=s,this._document=t}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const t="cdk-overlay-container";if(this._platform.isBrowser||Gs()){const c=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let h=0;h<c.length;h++)c[h].remove()}const s=this._document.createElement("div");s.classList.add(t),Gs()?s.setAttribute("platform","test"):this._platform.isBrowser||s.setAttribute("platform","server"),this._document.body.appendChild(s),this._containerElement=s}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(q.K0),y.LFG(Tt))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();class Yp{constructor(r,t,s,c,h,E,k,$,Y,ye=!1){this._portalOutlet=r,this._host=t,this._pane=s,this._config=c,this._ngZone=h,this._keyboardDispatcher=E,this._document=k,this._location=$,this._outsideClickDispatcher=Y,this._animationsDisabled=ye,this._backdropElement=null,this._backdropClick=new P.x,this._attachments=new P.x,this._detachments=new P.x,this._locationChanges=ll.w0.EMPTY,this._backdropClickHandler=ke=>this._backdropClick.next(ke),this._backdropTransitionendHandler=ke=>{this._disposeBackdrop(ke.target)},this._keydownEvents=new P.x,this._outsidePointerEvents=new P.x,c.scrollStrategy&&(this._scrollStrategy=c.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=c.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(r){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);const t=this._portalOutlet.attach(r);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe((0,As.q)(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),"function"==typeof t?.onDestroy&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const r=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),r}dispose(){const r=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,r&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(r){r!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=r,this.hasAttached()&&(r.attach(this),this.updatePosition()))}updateSize(r){this._config={...this._config,...r},this._updateElementSize()}setDirection(r){this._config={...this._config,direction:r},this._updateElementDirection()}addPanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!0)}removePanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!1)}getDirection(){const r=this._config.direction;return r?"string"==typeof r?r:r.value:"ltr"}updateScrollStrategy(r){r!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=r,this.hasAttached()&&(r.attach(this),r.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const r=this._pane.style;r.width=an(this._config.width),r.height=an(this._config.height),r.minWidth=an(this._config.minWidth),r.minHeight=an(this._config.minHeight),r.maxWidth=an(this._config.maxWidth),r.maxHeight=an(this._config.maxHeight)}_togglePointerEvents(r){this._pane.style.pointerEvents=r?"":"none"}_attachBackdrop(){const r="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(r)})}):this._backdropElement.classList.add(r)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){const r=this._backdropElement;if(r){if(this._animationsDisabled)return void this._disposeBackdrop(r);r.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{r.addEventListener("transitionend",this._backdropTransitionendHandler)}),r.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(r)},500))}}_toggleClasses(r,t,s){const c=xi(t||[]).filter(h=>!!h);c.length&&(s?r.classList.add(...c):r.classList.remove(...c))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const r=this._ngZone.onStable.pipe((0,vd.R)((0,Cd.T)(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||0===this._pane.children.length)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),r.unsubscribe())})})}_disposeScrollStrategy(){const r=this._scrollStrategy;r&&(r.disable(),r.detach&&r.detach())}_disposeBackdrop(r){r&&(r.removeEventListener("click",this._backdropClickHandler),r.removeEventListener("transitionend",this._backdropTransitionendHandler),r.remove(),this._backdropElement===r&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}}const gl="cdk-overlay-connected-position-bounding-box",cc=/([A-Za-z%]+)$/;class Rr{get positions(){return this._preferredPositions}constructor(r,t,s,c,h){this._viewportRuler=t,this._document=s,this._platform=c,this._overlayContainer=h,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new P.x,this._resizeSubscription=ll.w0.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(r)}attach(r){this._validatePositions(),r.hostElement.classList.add(gl),this._overlayRef=r,this._boundingBox=r.hostElement,this._pane=r.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const r=this._originRect,t=this._overlayRect,s=this._viewportRect,c=this._containerRect,h=[];let E;for(let k of this._preferredPositions){let $=this._getOriginPoint(r,c,k),Y=this._getOverlayPoint($,t,k),ye=this._getOverlayFit(Y,t,s,k);if(ye.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(k,$);this._canFitWithFlexibleDimensions(ye,Y,s)?h.push({position:k,origin:$,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect($,k)}):(!E||E.overlayFit.visibleArea<ye.visibleArea)&&(E={overlayFit:ye,overlayPoint:Y,originPoint:$,position:k,overlayRect:t})}if(h.length){let k=null,$=-1;for(const Y of h){const ye=Y.boundingBoxRect.width*Y.boundingBoxRect.height*(Y.position.weight||1);ye>$&&($=ye,k=Y)}return this._isPushed=!1,void this._applyPosition(k.position,k.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(E.position,E.originPoint);this._applyPosition(E.position,E.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ml(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(gl),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;const r=this._lastPosition;if(r){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();const t=this._getOriginPoint(this._originRect,this._containerRect,r);this._applyPosition(r,t)}else this.apply()}withScrollableContainers(r){return this._scrollables=r,this}withPositions(r){return this._preferredPositions=r,-1===r.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(r){return this._viewportMargin=r,this}withFlexibleDimensions(r=!0){return this._hasFlexibleDimensions=r,this}withGrowAfterOpen(r=!0){return this._growAfterOpen=r,this}withPush(r=!0){return this._canPush=r,this}withLockedPosition(r=!0){return this._positionLocked=r,this}setOrigin(r){return this._origin=r,this}withDefaultOffsetX(r){return this._offsetX=r,this}withDefaultOffsetY(r){return this._offsetY=r,this}withTransformOriginOn(r){return this._transformOriginSelector=r,this}_getOriginPoint(r,t,s){let c,h;if("center"==s.originX)c=r.left+r.width/2;else{const E=this._isRtl()?r.right:r.left,k=this._isRtl()?r.left:r.right;c="start"==s.originX?E:k}return t.left<0&&(c-=t.left),h="center"==s.originY?r.top+r.height/2:"top"==s.originY?r.top:r.bottom,t.top<0&&(h-=t.top),{x:c,y:h}}_getOverlayPoint(r,t,s){let c,h;return c="center"==s.overlayX?-t.width/2:"start"===s.overlayX?this._isRtl()?-t.width:0:this._isRtl()?0:-t.width,h="center"==s.overlayY?-t.height/2:"top"==s.overlayY?0:-t.height,{x:r.x+c,y:r.y+h}}_getOverlayFit(r,t,s,c){const h=Ed(t);let{x:E,y:k}=r,$=this._getOffset(c,"x"),Y=this._getOffset(c,"y");$&&(E+=$),Y&&(k+=Y);let lt=0-k,bt=k+h.height-s.height,_t=this._subtractOverflows(h.width,0-E,E+h.width-s.width),Rt=this._subtractOverflows(h.height,lt,bt),yn=_t*Rt;return{visibleArea:yn,isCompletelyWithinViewport:h.width*h.height===yn,fitsInViewportVertically:Rt===h.height,fitsInViewportHorizontally:_t==h.width}}_canFitWithFlexibleDimensions(r,t,s){if(this._hasFlexibleDimensions){const c=s.bottom-t.y,h=s.right-t.x,E=qh(this._overlayRef.getConfig().minHeight),k=qh(this._overlayRef.getConfig().minWidth);return(r.fitsInViewportVertically||null!=E&&E<=c)&&(r.fitsInViewportHorizontally||null!=k&&k<=h)}return!1}_pushOverlayOnScreen(r,t,s){if(this._previousPushAmount&&this._positionLocked)return{x:r.x+this._previousPushAmount.x,y:r.y+this._previousPushAmount.y};const c=Ed(t),h=this._viewportRect,E=Math.max(r.x+c.width-h.width,0),k=Math.max(r.y+c.height-h.height,0),$=Math.max(h.top-s.top-r.y,0),Y=Math.max(h.left-s.left-r.x,0);let ye=0,ke=0;return ye=c.width<=h.width?Y||-E:r.x<this._viewportMargin?h.left-s.left-r.x:0,ke=c.height<=h.height?$||-k:r.y<this._viewportMargin?h.top-s.top-r.y:0,this._previousPushAmount={x:ye,y:ke},{x:r.x+ye,y:r.y+ke}}_applyPosition(r,t){if(this._setTransformOrigin(r),this._setOverlayElementStyles(t,r),this._setBoundingBoxStyles(t,r),r.panelClass&&this._addPanelClasses(r.panelClass),this._lastPosition=r,this._positionChanges.observers.length){const s=this._getScrollVisibility(),c=new Zp(r,s);this._positionChanges.next(c)}this._isInitialRender=!1}_setTransformOrigin(r){if(!this._transformOriginSelector)return;const t=this._boundingBox.querySelectorAll(this._transformOriginSelector);let s,c=r.overlayY;s="center"===r.overlayX?"center":this._isRtl()?"start"===r.overlayX?"right":"left":"start"===r.overlayX?"left":"right";for(let h=0;h<t.length;h++)t[h].style.transformOrigin=`${s} ${c}`}_calculateBoundingBoxRect(r,t){const s=this._viewportRect,c=this._isRtl();let h,E,k,ye,ke,lt;if("top"===t.overlayY)E=r.y,h=s.height-E+this._viewportMargin;else if("bottom"===t.overlayY)k=s.height-r.y+2*this._viewportMargin,h=s.height-k+this._viewportMargin;else{const bt=Math.min(s.bottom-r.y+s.top,r.y),_t=this._lastBoundingBoxSize.height;h=2*bt,E=r.y-bt,h>_t&&!this._isInitialRender&&!this._growAfterOpen&&(E=r.y-_t/2)}if("end"===t.overlayX&&!c||"start"===t.overlayX&&c)lt=s.width-r.x+this._viewportMargin,ye=r.x-this._viewportMargin;else if("start"===t.overlayX&&!c||"end"===t.overlayX&&c)ke=r.x,ye=s.right-r.x;else{const bt=Math.min(s.right-r.x+s.left,r.x),_t=this._lastBoundingBoxSize.width;ye=2*bt,ke=r.x-bt,ye>_t&&!this._isInitialRender&&!this._growAfterOpen&&(ke=r.x-_t/2)}return{top:E,left:ke,bottom:k,right:lt,width:ye,height:h}}_setBoundingBoxStyles(r,t){const s=this._calculateBoundingBoxRect(r,t);!this._isInitialRender&&!this._growAfterOpen&&(s.height=Math.min(s.height,this._lastBoundingBoxSize.height),s.width=Math.min(s.width,this._lastBoundingBoxSize.width));const c={};if(this._hasExactPosition())c.top=c.left="0",c.bottom=c.right=c.maxHeight=c.maxWidth="",c.width=c.height="100%";else{const h=this._overlayRef.getConfig().maxHeight,E=this._overlayRef.getConfig().maxWidth;c.height=an(s.height),c.top=an(s.top),c.bottom=an(s.bottom),c.width=an(s.width),c.left=an(s.left),c.right=an(s.right),c.alignItems="center"===t.overlayX?"center":"end"===t.overlayX?"flex-end":"flex-start",c.justifyContent="center"===t.overlayY?"center":"bottom"===t.overlayY?"flex-end":"flex-start",h&&(c.maxHeight=an(h)),E&&(c.maxWidth=an(E))}this._lastBoundingBoxSize=s,ml(this._boundingBox.style,c)}_resetBoundingBoxStyles(){ml(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ml(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(r,t){const s={},c=this._hasExactPosition(),h=this._hasFlexibleDimensions,E=this._overlayRef.getConfig();if(c){const ye=this._viewportRuler.getViewportScrollPosition();ml(s,this._getExactOverlayY(t,r,ye)),ml(s,this._getExactOverlayX(t,r,ye))}else s.position="static";let k="",$=this._getOffset(t,"x"),Y=this._getOffset(t,"y");$&&(k+=`translateX(${$}px) `),Y&&(k+=`translateY(${Y}px)`),s.transform=k.trim(),E.maxHeight&&(c?s.maxHeight=an(E.maxHeight):h&&(s.maxHeight="")),E.maxWidth&&(c?s.maxWidth=an(E.maxWidth):h&&(s.maxWidth="")),ml(this._pane.style,s)}_getExactOverlayY(r,t,s){let c={top:"",bottom:""},h=this._getOverlayPoint(t,this._overlayRect,r);return this._isPushed&&(h=this._pushOverlayOnScreen(h,this._overlayRect,s)),"bottom"===r.overlayY?c.bottom=this._document.documentElement.clientHeight-(h.y+this._overlayRect.height)+"px":c.top=an(h.y),c}_getExactOverlayX(r,t,s){let E,c={left:"",right:""},h=this._getOverlayPoint(t,this._overlayRect,r);return this._isPushed&&(h=this._pushOverlayOnScreen(h,this._overlayRect,s)),E=this._isRtl()?"end"===r.overlayX?"left":"right":"end"===r.overlayX?"right":"left","right"===E?c.right=this._document.documentElement.clientWidth-(h.x+this._overlayRect.width)+"px":c.left=an(h.x),c}_getScrollVisibility(){const r=this._getOriginRect(),t=this._pane.getBoundingClientRect(),s=this._scrollables.map(c=>c.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Zh(r,s),isOriginOutsideView:fu(r,s),isOverlayClipped:Zh(t,s),isOverlayOutsideView:fu(t,s)}}_subtractOverflows(r,...t){return t.reduce((s,c)=>s-Math.max(c,0),r)}_getNarrowedViewportRect(){const r=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,s=this._viewportRuler.getViewportScrollPosition();return{top:s.top+this._viewportMargin,left:s.left+this._viewportMargin,right:s.left+r-this._viewportMargin,bottom:s.top+t-this._viewportMargin,width:r-2*this._viewportMargin,height:t-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(r,t){return"x"===t?null==r.offsetX?this._offsetX:r.offsetX:null==r.offsetY?this._offsetY:r.offsetY}_validatePositions(){}_addPanelClasses(r){this._pane&&xi(r).forEach(t=>{""!==t&&-1===this._appliedPanelClasses.indexOf(t)&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(r=>{this._pane.classList.remove(r)}),this._appliedPanelClasses=[])}_getOriginRect(){const r=this._origin;if(r instanceof y.SBq)return r.nativeElement.getBoundingClientRect();if(r instanceof Element)return r.getBoundingClientRect();const t=r.width||0,s=r.height||0;return{top:r.y,bottom:r.y+s,left:r.x,right:r.x+t,height:s,width:t}}}function ml(a,r){for(let t in r)r.hasOwnProperty(t)&&(a[t]=r[t]);return a}function qh(a){if("number"!=typeof a&&null!=a){const[r,t]=a.split(cc);return t&&"px"!==t?null:parseFloat(r)}return a||null}function Ed(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}const Sd="cdk-global-overlay-wrapper";class uc{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(r){const t=r.getConfig();this._overlayRef=r,this._width&&!t.width&&r.updateSize({width:this._width}),this._height&&!t.height&&r.updateSize({height:this._height}),r.hostElement.classList.add(Sd),this._isDisposed=!1}top(r=""){return this._bottomOffset="",this._topOffset=r,this._alignItems="flex-start",this}left(r=""){return this._xOffset=r,this._xPosition="left",this}bottom(r=""){return this._topOffset="",this._bottomOffset=r,this._alignItems="flex-end",this}right(r=""){return this._xOffset=r,this._xPosition="right",this}start(r=""){return this._xOffset=r,this._xPosition="start",this}end(r=""){return this._xOffset=r,this._xPosition="end",this}width(r=""){return this._overlayRef?this._overlayRef.updateSize({width:r}):this._width=r,this}height(r=""){return this._overlayRef?this._overlayRef.updateSize({height:r}):this._height=r,this}centerHorizontally(r=""){return this.left(r),this._xPosition="center",this}centerVertically(r=""){return this.top(r),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const r=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,s=this._overlayRef.getConfig(),{width:c,height:h,maxWidth:E,maxHeight:k}=s,$=!("100%"!==c&&"100vw"!==c||E&&"100%"!==E&&"100vw"!==E),Y=!("100%"!==h&&"100vh"!==h||k&&"100%"!==k&&"100vh"!==k),ye=this._xPosition,ke=this._xOffset,lt="rtl"===this._overlayRef.getConfig().direction;let bt="",_t="",Rt="";$?Rt="flex-start":"center"===ye?(Rt="center",lt?_t=ke:bt=ke):lt?"left"===ye||"end"===ye?(Rt="flex-end",bt=ke):("right"===ye||"start"===ye)&&(Rt="flex-start",_t=ke):"left"===ye||"start"===ye?(Rt="flex-start",bt=ke):("right"===ye||"end"===ye)&&(Rt="flex-end",_t=ke),r.position=this._cssPosition,r.marginLeft=$?"0":bt,r.marginTop=Y?"0":this._topOffset,r.marginBottom=this._bottomOffset,r.marginRight=$?"0":_t,t.justifyContent=Rt,t.alignItems=Y?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const r=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,s=t.style;t.classList.remove(Sd),s.justifyContent=s.alignItems=r.marginTop=r.marginBottom=r.marginLeft=r.marginRight=r.position="",this._overlayRef=null,this._isDisposed=!0}}let dc=(()=>{class a{constructor(t,s,c,h){this._viewportRuler=t,this._document=s,this._platform=c,this._overlayContainer=h}global(){return new uc}flexibleConnectedTo(t){return new Rr(t,this._viewportRuler,this._document,this._platform,this._overlayContainer)}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(Jt),y.LFG(q.K0),y.LFG(Tt),y.LFG(Kh))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),hc=0,Qh=(()=>{class a{constructor(t,s,c,h,E,k,$,Y,ye,ke,lt,bt){this.scrollStrategies=t,this._overlayContainer=s,this._componentFactoryResolver=c,this._positionBuilder=h,this._keyboardDispatcher=E,this._injector=k,this._ngZone=$,this._document=Y,this._directionality=ye,this._location=ke,this._outsideClickDispatcher=lt,this._animationsModuleType=bt}create(t){const s=this._createHostElement(),c=this._createPaneElement(s),h=this._createPortalOutlet(c),E=new ly(t);return E.direction=E.direction||this._directionality.value,new Yp(h,s,c,E,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,"NoopAnimations"===this._animationsModuleType)}position(){return this._positionBuilder}_createPaneElement(t){const s=this._document.createElement("div");return s.id="cdk-overlay-"+hc++,s.classList.add("cdk-overlay-pane"),t.appendChild(s),s}_createHostElement(){const t=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(t),t}_createPortalOutlet(t){return this._appRef||(this._appRef=this._injector.get(y.z2F)),new W_(t,this._componentFactoryResolver,this._appRef,this._injector,this._document)}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(Yh),y.LFG(Kh),y.LFG(y._Vd),y.LFG(dc),y.LFG(pl),y.LFG(y.zs3),y.LFG(y.R0b),y.LFG(q.K0),y.LFG(rc),y.LFG(q.Ye),y.LFG(hy),y.LFG(y.QbO,8))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();const Q_={provide:new y.OlP("cdk-connected-overlay-scroll-strategy"),deps:[Qh],useFactory:function q_(a){return()=>a.scrollStrategies.reposition()}};let X_=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({providers:[Qh,Q_],imports:[oc,_d,uu,uu]})}return a})();var py=M(4911),J_=M(8504),vl=M(5211),qp=M(2420);const pc=new wo.y(qp.Z);var gc=M(5805),za=M(4664),gy=M(3168);const mc={connector:()=>new P.x};function Xh(a,r=mc){const{connector:t}=r;return(0,tc.e)((s,c)=>{const h=t();(0,Or.Xf)(a(function Xo(a){return new wo.y(r=>a.subscribe(r))}(h))).subscribe(c),c.add(s.subscribe(h))})}var Jh=M(9397),Qp=M(975);function my(a,r){return r?t=>(0,vl.z)(r.pipe((0,As.q)(1),function eC(){return(0,tc.e)((a,r)=>{a.subscribe((0,nc.x)(r,qp.Z))})}()),t.pipe(my(a))):(0,ps.z)((t,s)=>(0,Or.Xf)(a(t,s)).pipe((0,As.q)(1),(0,Qp.h)(t)))}const yl="Service workers are disabled or not supported by this browser";class ef{constructor(r){if(this.serviceWorker=r,r){const s=oa(r,"controllerchange").pipe((0,gc.U)(()=>r.controller)),c=(0,py.P)(()=>(0,Zr.of)(r.controller)),h=(0,vl.z)(c,s);this.worker=h.pipe((0,Le.h)(ye=>!!ye)),this.registration=this.worker.pipe((0,za.w)(()=>r.getRegistration()));const Y=oa(r,"message").pipe((0,gc.U)(ye=>ye.data)).pipe((0,Le.h)(ye=>ye&&ye.type)).pipe(function gu(a){return a?r=>Xh(a)(r):r=>function xd(a,r){const t=(0,oi.m)(a)?a:()=>a;return(0,oi.m)(r)?Xh(r,{connector:t}):s=>new gy.c(s,t)}(new P.x)(r)}());Y.connect(),this.events=Y}else this.worker=this.events=this.registration=function vc(a){return(0,py.P)(()=>(0,J_._)(new Error(a)))}(yl)}postMessage(r,t){return this.worker.pipe((0,As.q)(1),(0,Jh.b)(s=>{s.postMessage({action:r,...t})})).toPromise().then(()=>{})}postMessageWithOperation(r,t,s){const c=this.waitForOperationCompleted(s),h=this.postMessage(r,t);return Promise.all([h,c]).then(([,E])=>E)}generateNonce(){return Math.round(1e7*Math.random())}eventsOfType(r){let t;return t="string"==typeof r?s=>s.type===r:s=>r.includes(s.type),this.events.pipe((0,Le.h)(t))}nextEventOfType(r){return this.eventsOfType(r).pipe((0,As.q)(1))}waitForOperationCompleted(r){return this.eventsOfType("OPERATION_COMPLETED").pipe((0,Le.h)(t=>t.nonce===r),(0,As.q)(1),(0,gc.U)(t=>{if(void 0!==t.result)return t.result;throw new Error(t.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}}let tf=(()=>{class a{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,this.pushManager=null,this.subscriptionChanges=new P.x,!t.isEnabled)return this.messages=pc,this.notificationClicks=pc,void(this.subscription=pc);this.messages=this.sw.eventsOfType("PUSH").pipe((0,gc.U)(c=>c.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe((0,gc.U)(c=>c.data)),this.pushManager=this.sw.registration.pipe((0,gc.U)(c=>c.pushManager));const s=this.pushManager.pipe((0,za.w)(c=>c.getSubscription()));this.subscription=(0,Cd.T)(s,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||null===this.pushManager)return Promise.reject(new Error(yl));const s={userVisibleOnly:!0};let c=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),h=new Uint8Array(new ArrayBuffer(c.length));for(let E=0;E<c.length;E++)h[E]=c.charCodeAt(E);return s.applicationServerKey=h,this.pushManager.pipe((0,za.w)(E=>E.subscribe(s)),(0,As.q)(1)).toPromise().then(E=>(this.subscriptionChanges.next(E),E))}unsubscribe(){return this.sw.isEnabled?this.subscription.pipe((0,As.q)(1),(0,za.w)(s=>{if(null===s)throw new Error("Not subscribed to push notifications.");return s.unsubscribe().then(c=>{if(!c)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})})).toPromise():Promise.reject(new Error(yl))}decodeBase64(t){return atob(t)}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(ef))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac})}return a})(),Xp=(()=>{class a{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled)return this.versionUpdates=pc,void(this.unrecoverable=pc);this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(yl));const t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(yl));const t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static#e=this.\u0275fac=function(s){return new(s||a)(y.LFG(ef))};static#t=this.\u0275prov=y.Yz7({token:a,factory:a.\u0275fac})}return a})();const Jp=new y.OlP("NGSW_REGISTER_SCRIPT");function vy(a,r,t,s){return()=>{if(!(0,q.NF)(s)||!("serviceWorker"in navigator)||!1===t.enabled)return;let c;if(navigator.serviceWorker.addEventListener("controllerchange",()=>{null!==navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})}),"function"==typeof t.registrationStrategy)c=t.registrationStrategy();else{const[E,...k]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(E){case"registerImmediately":c=(0,Zr.of)(null);break;case"registerWithDelay":c=eg(+k[0]||0);break;case"registerWhenStable":c=k[0]?(0,Cd.T)(tg(a),eg(+k[0])):tg(a);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}a.get(y.R0b).runOutsideAngular(()=>c.pipe((0,As.q)(1)).subscribe(()=>navigator.serviceWorker.register(r,{scope:t.scope}).catch(E=>console.error("Service worker registration failed with:",E))))}}function eg(a){return(0,Zr.of)(null).pipe(function ms(a,r=cl){const t=ic(a,r);return my(()=>t)}(a))}function tg(a){return a.get(y.z2F).isStable.pipe((0,Le.h)(t=>t))}function yy(a,r){return new ef((0,q.NF)(r)&&!1!==a.enabled?navigator.serviceWorker:void 0)}class mu{}function Id(a,r={}){return(0,y.MR2)([tf,Xp,{provide:Jp,useValue:a},{provide:mu,useValue:r},{provide:ef,useFactory:yy,deps:[mu,y.Lbi]},{provide:y.ip1,useFactory:vy,deps:[y.zs3,Jp,mu,y.Lbi],multi:!0}])}let by=(()=>{class a{static register(t,s={}){return{ngModule:a,providers:[Id(t,s)]}}static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a});static#n=this.\u0275inj=y.cJS({providers:[tf,Xp]})}return a})(),Td=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=y.oAB({type:a,bootstrap:[Te]});static#n=this.\u0275inj=y.cJS({imports:[_.b2,X_,xt,Vn,B.d,by.register("ngsw-worker.js",{enabled:!(0,y.X6Q)(),registrationStrategy:"registerWhenStable:30000"})]})}return a})();var wy=M(2674),J=M(7815),ng=M(8987),Ze=M(7726),Wa=M(3502),Zs=M(1526);const Md=new Map;"metadata"in Reflect||(Reflect.metadata=function(a,r){return function(t){Reflect.defineMetadata(a,r,t)}},Reflect.defineMetadata=function(a,r,t){let s=Md.get(t);void 0===s&&Md.set(t,s=new Map),s.set(a,r)},Reflect.getOwnMetadata=function(a,r){const t=Md.get(r);if(void 0!==t)return t.get(a)});class _y{constructor(r,t){this.container=r,this.key=t}instance(r){return this.registerResolver(0,r)}singleton(r){return this.registerResolver(1,r)}transient(r){return this.registerResolver(2,r)}callback(r){return this.registerResolver(3,r)}cachedCallback(r){return this.registerResolver(3,df(r))}aliasTo(r){return this.registerResolver(5,r)}registerResolver(r,t){const{container:s,key:c}=this;return this.container=this.key=void 0,s.registerResolver(c,new Jo(c,r,t))}}function vu(a){const r=a.slice(),t=Object.keys(a),s=t.length;let c;for(let h=0;h<s;++h)c=t[h],hf(c)||(r[c]=a[c]);return r}const yc=Object.freeze({none(a){throw Error(`${a.toString()} not registered, did you forget to add @singleton()?`)},singleton:a=>new Jo(a,1,a),transient:a=>new Jo(a,2,a)}),bl=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:yc.singleton})}),ig=new Map;function Cy(a){return r=>Reflect.getOwnMetadata(a,r)}let nf=null;const di=Object.freeze({createContainer:a=>new bu(null,Object.assign({},bl.default,a)),findResponsibleContainer(a){const r=a.$$container$$;return r&&r.responsibleForOwnerRequests?r:di.findParentContainer(a)},findParentContainer(a){const r=new CustomEvent(Ga,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return a.dispatchEvent(r),r.detail.container||di.getOrCreateDOMContainer()},getOrCreateDOMContainer:(a,r)=>a?a.$$container$$||new bu(a,Object.assign({},bl.default,r,{parentLocator:di.findParentContainer})):nf||(nf=new bu(null,Object.assign({},bl.default,r,{parentLocator:()=>null}))),getDesignParamtypes:Cy("design:paramtypes"),getAnnotationParamtypes:Cy("di:paramtypes"),getOrCreateAnnotationParamTypes(a){let r=this.getAnnotationParamtypes(a);return void 0===r&&Reflect.defineMetadata("di:paramtypes",r=[],a),r},getDependencies(a){let r=ig.get(a);if(void 0===r){const t=a.inject;if(void 0===t){const s=di.getDesignParamtypes(a),c=di.getAnnotationParamtypes(a);if(void 0===s)if(void 0===c){const h=Object.getPrototypeOf(a);r="function"==typeof h&&h!==Function.prototype?vu(di.getDependencies(h)):[]}else r=vu(c);else if(void 0===c)r=vu(s);else{r=vu(s);let E,h=c.length;for(let Y=0;Y<h;++Y)E=c[Y],void 0!==E&&(r[Y]=E);const k=Object.keys(c);let $;h=k.length;for(let Y=0;Y<h;++Y)$=k[Y],hf($)||(r[$]=c[$])}}else r=vu(t);ig.set(a,r)}return r},defineProperty(a,r,t,s=!1){const c=`$di_${r}`;Reflect.defineProperty(a,r,{get:function(){let h=this[c];if(void 0===h&&(h=(this instanceof HTMLElement?di.findResponsibleContainer(this):di.getOrCreateDOMContainer()).get(t),this[c]=h,s&&this instanceof ng.H)){const k=this.$fastController,$=()=>{di.findResponsibleContainer(this).get(t)!==this[c]&&(this[c]=h,k.notify(r))};k.subscribe({handleChange:$},"isConnected")}return h}})},createInterface(a,r){const t="function"==typeof a?a:r,s="string"==typeof a?a:a&&"friendlyName"in a&&a.friendlyName||lg,c="string"!=typeof a&&(a&&"respectConnection"in a&&a.respectConnection||!1),h=function(E,k,$){if(null==E||void 0!==new.target)throw new Error(`No registration for interface: '${h.friendlyName}'`);k?di.defineProperty(E,k,h,c):di.getOrCreateAnnotationParamTypes(E)[$]=h};return h.$isInterface=!0,h.friendlyName=s??"(anonymous)",null!=t&&(h.register=function(E,k){return t(new _y(E,k??h))}),h.toString=function(){return`InterfaceSymbol<${h.friendlyName}>`},h},inject:(...a)=>function(r,t,s){if("number"==typeof s){const c=di.getOrCreateAnnotationParamTypes(r),h=a[0];void 0!==h&&(c[s]=h)}else if(t)di.defineProperty(r,t,a[0]);else{const c=di.getOrCreateAnnotationParamTypes(s?s.value:r);let h;for(let E=0;E<a.length;++E)h=a[E],void 0!==h&&(c[E]=h)}},transient:a=>(a.register=function(t){return ca.transient(a,a).register(t)},a.registerInRequestor=!1,a),singleton:(a,r=rf)=>(a.register=function(s){return ca.singleton(a,a).register(s)},a.registerInRequestor=r.scoped,a)}),tC=di.createInterface("Container");function kd(a){return function(r){const t=function(s,c,h){di.inject(t)(s,c,h)};return t.$isResolver=!0,t.resolve=function(s,c){return a(r,s,c)},t}}const rf={scoped:!1};function og(a,r,t){di.inject(og)(a,r,t)}function Od(a,r){return r.getFactory(a).construct(r)}kd((a,r,t)=>()=>t.get(a)),kd((a,r,t)=>{if(t.has(a,!0))return t.get(a)}),og.$isResolver=!0,og.resolve=()=>{},kd((a,r,t)=>{const s=Od(a,r),c=new Jo(a,0,s);return t.registerResolver(a,c),s}),kd((a,r,t)=>Od(a,r));class Jo{constructor(r,t,s){this.key=r,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(r){return r.registerResolver(this.key,this)}resolve(r,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=r.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const s=r.getFactory(this.state);if(null===s)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(r,t,this);case 4:return this.state[0].resolve(r,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(r){var t,s,c;switch(this.strategy){case 1:case 2:return r.getFactory(this.state);case 5:return null!==(c=null===(s=null===(t=r.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===s?void 0:s.call(t,r))&&void 0!==c?c:null;default:return null}}}function lf(a){return this.get(a)}function _l(a,r){return r(a)}class Iy{constructor(r,t){this.Type=r,this.dependencies=t,this.transformers=null}construct(r,t){let s;return s=void 0===t?new this.Type(...this.dependencies.map(lf,r)):new this.Type(...this.dependencies.map(lf,r),...t),null==this.transformers?s:this.transformers.reduce(_l,s)}registerTransformer(r){(this.transformers||(this.transformers=[])).push(r)}}const cf={$isResolver:!0,resolve:(a,r)=>r};function Cl(a){return"function"==typeof a.register}function Ad(a){return function Ty(a){return Cl(a)&&"boolean"==typeof a.registerInRequestor}(a)&&a.registerInRequestor}const la=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ga="__DI_LOCATE_PARENT__",yu=new Map;class bu{constructor(r,t){this.owner=r,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==r&&(r.$$container$$=this),this.resolvers=new Map,this.resolvers.set(tC,cf),r instanceof Node&&r.addEventListener(Ga,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(r,...t){return this.context=r,this.register(...t),this.context=null,this}register(...r){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,s,c,h,E;const k=this.context;for(let $=0,Y=r.length;$<Y;++$)if(t=r[$],Fd(t))if(Cl(t))t.register(this,k);else if(void 0!==t.prototype)ca.singleton(t,t).register(this);else for(s=Object.keys(t),h=0,E=s.length;h<E;++h)c=t[s[h]],Fd(c)&&(Cl(c)?c.register(this,k):this.register(c));return--this.registerDepth,this}registerResolver(r,t){Pd(r);const s=this.resolvers,c=s.get(r);return null==c?s.set(r,t):c instanceof Jo&&4===c.strategy?c.state.push(t):s.set(r,new Jo(r,4,[c,t])),t}registerTransformer(r,t){const s=this.getResolver(r);if(null==s)return!1;if(s.getFactory){const c=s.getFactory(this);return null!=c&&(c.registerTransformer(t),!0)}return!1}getResolver(r,t=!0){if(Pd(r),void 0!==r.resolve)return r;let c,s=this;for(;null!=s;){if(c=s.resolvers.get(r),null!=c)return c;if(null==s.parent){const h=Ad(r)?this:s;return t?this.jitRegister(r,h):null}s=s.parent}return null}has(r,t=!1){return!!this.resolvers.has(r)||!(!t||null==this.parent)&&this.parent.has(r,!0)}get(r){if(Pd(r),r.$isResolver)return r.resolve(this,this);let s,t=this;for(;null!=t;){if(s=t.resolvers.get(r),null!=s)return s.resolve(t,this);if(null==t.parent){const c=Ad(r)?this:t;return s=this.jitRegister(r,c),s.resolve(t,this)}t=t.parent}throw new Error(`Unable to resolve key: ${String(r)}`)}getAll(r,t=!1){Pd(r);const s=this;let h,c=s;if(t){let E=Zs.ow;for(;null!=c;)h=c.resolvers.get(r),null!=h&&(E=E.concat(ag(h,c,s))),c=c.parent;return E}for(;null!=c;){if(h=c.resolvers.get(r),null!=h)return ag(h,c,s);if(c=c.parent,null==c)return Zs.ow}return Zs.ow}getFactory(r){let t=yu.get(r);if(void 0===t){if(My(r))throw new Error(`${r.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);yu.set(r,t=new Iy(r,di.getDependencies(r)))}return t}registerFactory(r,t){yu.set(r,t)}createChild(r){return new bu(null,Object.assign({},this.config,r,{parentLocator:()=>this}))}jitRegister(r,t){if("function"!=typeof r)throw new Error(`Attempted to jitRegister something that is not a constructor: '${r}'. Did you forget to register this dependency?`);if(la.has(r.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${r.name}. Did you forget to add @inject(Key)`);if(Cl(r)){const s=r.register(t);if(!(s instanceof Object)||null==s.resolve){const c=t.resolvers.get(r);if(null!=c)return c;throw new Error("A valid resolver was not returned from the static register method")}return s}if(r.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${r.friendlyName}`);{const s=this.config.defaultResolver(r,t);return t.resolvers.set(r,s),s}}}const uf=new WeakMap;function df(a){return function(r,t,s){if(uf.has(s))return uf.get(s);const c=a(r,t,s);return uf.set(s,c),c}}const ca=Object.freeze({instance:(a,r)=>new Jo(a,0,r),singleton:(a,r)=>new Jo(a,1,r),transient:(a,r)=>new Jo(a,2,r),callback:(a,r)=>new Jo(a,3,r),cachedCallback:(a,r)=>new Jo(a,3,df(r)),aliasTo:(a,r)=>new Jo(r,5,a)});function Pd(a){if(null==a)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ag(a,r,t){if(a instanceof Jo&&4===a.strategy){const s=a.state;let c=s.length;const h=new Array(c);for(;c--;)h[c]=s[c].resolve(r,t);return h}return[a.resolve(r,t)]}const lg="(anonymous)";function Fd(a){return"object"==typeof a&&null!==a||"function"==typeof a}const My=function(){const a=new WeakMap;let r=!1,t="",s=0;return function(c){return r=a.get(c),void 0===r&&(t=c.toString(),s=t.length,r=s>=29&&s<=100&&125===t.charCodeAt(s-1)&&t.charCodeAt(s-2)<=32&&93===t.charCodeAt(s-3)&&101===t.charCodeAt(s-4)&&100===t.charCodeAt(s-5)&&111===t.charCodeAt(s-6)&&99===t.charCodeAt(s-7)&&32===t.charCodeAt(s-8)&&101===t.charCodeAt(s-9)&&118===t.charCodeAt(s-10)&&105===t.charCodeAt(s-11)&&116===t.charCodeAt(s-12)&&97===t.charCodeAt(s-13)&&110===t.charCodeAt(s-14)&&88===t.charCodeAt(s-15),a.set(c,r)),r}}(),Dl={};function hf(a){switch(typeof a){case"number":return a>=0&&(0|a)===a;case"string":{const r=Dl[a];if(void 0!==r)return r;const t=a.length;if(0===t)return Dl[a]=!1;let s=0;for(let c=0;c<t;++c)if(s=a.charCodeAt(c),0===c&&48===s&&t>1||s<48||s>57)return Dl[a]=!1;return Dl[a]=!0}default:return!1}}function cg(a){return`${a.toLowerCase()}:presentation`}const Ld=new Map,ff=Object.freeze({define(a,r,t){const s=cg(a);void 0===Ld.get(s)?Ld.set(s,r):Ld.set(s,!1),t.register(ca.instance(s,r))},forTag(a,r){const t=cg(a),s=Ld.get(t);return!1===s?di.findResponsibleContainer(r).get(t):s||null}});class ky{constructor(r,t){this.template=r||null,this.styles=void 0===t?null:Array.isArray(t)?Wa.XL.create(t):t instanceof Wa.XL?t:Wa.XL.create([t])}applyTo(r){const t=r.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}let Dn=(()=>{class a extends ng.H{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=ff.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(s={})=>new Oy(this===a?class extends a{}:this,t,s)}}return(0,J.gn)([Ze.LO],a.prototype,"template",void 0),(0,J.gn)([Ze.LO],a.prototype,"styles",void 0),a})();function wu(a,r,t){return"function"==typeof a?a(r,t):a}class Oy{constructor(r,t,s){this.type=r,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(r,t){const s=this.definition,c=this.overrideDefinition;t.tryDefineElement({name:`${s.prefix||t.elementPrefix}-${s.baseName}`,type:this.type,baseClass:this.elementDefinition.baseClass,callback:k=>{const $=new ky(wu(s.template,k,s),wu(s.styles,k,s));k.definePresentation($);let Y=wu(s.shadowOptions,k,s);k.shadowRootMode&&(Y?c.shadowOptions||(Y.mode=k.shadowRootMode):null!==Y&&(Y={mode:k.shadowRootMode})),k.defineElement({elementOptions:wu(s.elementOptions,k,s),shadowOptions:Y,attributes:wu(s.attributes,k,s)})}})}}var Ai=M(1365);const $d=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Nd=new Map,Bo=new Map;let Za=null;const Rs=di.createInterface(a=>a.cachedCallback(r=>(null===Za&&(Za=new bc(null,r)),Za))),_u=Object.freeze({tagFor:a=>Bo.get(a),responsibleFor:a=>a.$$designSystem$$||di.findResponsibleContainer(a).get(Rs),getOrCreate(a){if(!a)return null===Za&&(Za=di.getOrCreateDOMContainer().get(Rs)),Za;const r=a.$$designSystem$$;if(r)return r;const t=di.getOrCreateDOMContainer(a);if(t.has(Rs,!1))return t.get(Rs);{const s=new bc(a,t);return t.register(ca.instance(Rs,s)),s}}});class bc{constructor(r,t){this.owner=r,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>$d.definitionCallbackOnly,null!==r&&(r.$$designSystem$$=this)}withPrefix(r){return this.prefix=r,this}withShadowRootMode(r){return this.shadowRootMode=r,this}withElementDisambiguation(r){return this.disambiguate=r,this}withDesignTokenRoot(r){return this.designTokenRoot=r,this}register(...r){const t=this.container,s=[],c=this.disambiguate,h=this.shadowRootMode,E={elementPrefix:this.prefix,tryDefineElement(k,$,Y){const ye=function ug(a,r,t){return"string"==typeof a?{name:a,type:r,callback:t}:a}(k,$,Y),{name:ke,callback:lt,baseClass:bt}=ye;let{type:_t}=ye,Rt=ke,yn=Nd.get(Rt),Ln=!0;for(;yn;){const ai=c(Rt,_t,yn);switch(ai){case $d.ignoreDuplicate:return;case $d.definitionCallbackOnly:Ln=!1,yn=void 0;break;default:Rt=ai,yn=Nd.get(Rt)}}Ln&&((Bo.has(_t)||_t===Dn)&&(_t=class extends _t{}),Nd.set(Rt,_t),Bo.set(_t,Rt),bt&&Bo.set(bt,Rt)),s.push(new Ay(t,Rt,_t,h,lt,Ln))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Ai.DesignToken.registerRoot(this.designTokenRoot)),t.registerWithContext(E,...r);for(const k of s)k.callback(k),k.willDefine&&null!==k.definition&&k.definition.define();return this}}class Ay{constructor(r,t,s,c,h,E){this.container=r,this.name=t,this.type=s,this.shadowRootMode=c,this.callback=h,this.willDefine=E,this.definition=null}definePresentation(r){ff.define(this.name,r,this.container)}defineElement(r){this.definition=new wy.W(this.type,Object.assign(Object.assign({},r),{name:this.name}))}tagFor(r){return _u.tagFor(r)}}var z=M(7138);const ys="ArrowDown",xa="ArrowLeft",Ya="ArrowRight",bs="ArrowUp",Ia="Enter",Il="Escape",ua="Home",Ys="End",Hd="Tab",wc={ArrowDown:ys,ArrowLeft:xa,ArrowRight:Ya,ArrowUp:bs};function Du(a,r,t){return Math.min(Math.max(t,a),r)}function Eu(a,r,t=0){return[r,t]=[r,t].sort((s,c)=>s-c),r<=a&&a<t}var xn=M(3309);class Tl{constructor(){this.targetIndex=0}}class _f extends Tl{constructor(){super(...arguments),this.createPlaceholder=xn.SO.createInterpolationPlaceholder}}class Su extends Tl{constructor(r,t,s){super(),this.name=r,this.behavior=t,this.options=s}createPlaceholder(r){return xn.SO.createCustomAttributePlaceholder(this.name,r)}createBehavior(r){return new this.behavior(r,this.options)}}function zd(a,r){this.source=a,this.context=r,null===this.bindingObserver&&(this.bindingObserver=Ze.y$.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(a,r))}function Qy(a,r){this.source=a,this.context=r,this.target.addEventListener(this.targetName,this)}function Xy(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Jy(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const a=this.target.$fastView;void 0!==a&&a.isComposed&&(a.unbind(),a.needsBindOnly=!0)}function eb(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function tb(a){xn.SO.setAttribute(this.target,this.targetName,a)}function nb(a){xn.SO.setBooleanAttribute(this.target,this.targetName,a)}function wg(a){if(null==a&&(a=""),a.create){this.target.textContent="";let r=this.target.$fastView;void 0===r?r=a.create():this.target.$fastTemplate!==a&&(r.isComposed&&(r.remove(),r.unbind()),r=a.create()),r.isComposed?r.needsBindOnly&&(r.needsBindOnly=!1,r.bind(this.source,this.context)):(r.isComposed=!0,r.bind(this.source,this.context),r.insertBefore(this.target),this.target.$fastView=r,this.target.$fastTemplate=a)}else{const r=this.target.$fastView;void 0!==r&&r.isComposed&&(r.isComposed=!1,r.remove(),r.needsBindOnly?r.needsBindOnly=!1:r.unbind()),this.target.textContent=a}}function xu(a){this.target[this.targetName]=a}function Wd(a){const r=this.classVersions||Object.create(null),t=this.target;let s=this.version||0;if(null!=a&&a.length){const c=a.split(/\s+/);for(let h=0,E=c.length;h<E;++h){const k=c[h];""!==k&&(r[k]=s,t.classList.add(k))}}if(this.classVersions=r,this.version=s+1,0!==s){s-=1;for(const c in r)r[c]===s&&t.classList.remove(c)}}class Iu extends _f{constructor(r){super(),this.binding=r,this.bind=zd,this.unbind=Xy,this.updateTarget=tb,this.isBindingVolatile=Ze.y$.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(r){if(this.originalTargetName=r,void 0!==r)switch(r[0]){case":":if(this.cleanedTargetName=r.substr(1),this.updateTarget=xu,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(s,c)=>xn.SO.createHTML(t(s,c))}break;case"?":this.cleanedTargetName=r.substr(1),this.updateTarget=nb;break;case"@":this.cleanedTargetName=r.substr(1),this.bind=Qy,this.unbind=eb;break;default:this.cleanedTargetName=r,"class"===r&&(this.updateTarget=Wd)}}targetAtContent(){this.updateTarget=wg,this.unbind=Jy}createBehavior(r){return new ib(r,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ib{constructor(r,t,s,c,h,E,k){this.source=null,this.context=null,this.bindingObserver=null,this.target=r,this.binding=t,this.isBindingVolatile=s,this.bind=c,this.unbind=h,this.updateTarget=E,this.targetName=k}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(r){Ze.rd.setEvent(r);const t=this.binding(this.source,this.context);Ze.rd.setEvent(null),!0!==t&&r.preventDefault()}}let Cf=null;class Tu{addFactory(r){r.targetIndex=this.targetIndex,this.behaviorFactories.push(r)}captureContentBinding(r){r.targetAtContent(),this.addFactory(r)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Cf=this}static borrow(r){const t=Cf||new Tu;return t.directives=r,t.reset(),Cf=null,t}}function _g(a){if(1===a.length)return a[0];let r;const t=a.length,s=a.map(E=>"string"==typeof E?()=>E:(r=E.targetName||r,E.binding)),h=new Iu((E,k)=>{let $="";for(let Y=0;Y<t;++Y)$+=s[Y](E,k);return $});return h.targetName=r,h}const Ml=xn.Yl.length;function Df(a,r){const t=r.split(xn.pc);if(1===t.length)return null;const s=[];for(let c=0,h=t.length;c<h;++c){const E=t[c],k=E.indexOf(xn.Yl);let $;if(-1===k)$=E;else{const Y=parseInt(E.substring(0,k));s.push(a.directives[Y]),$=E.substring(k+Ml)}""!==$&&s.push($)}return s}function Ef(a,r,t=!1){const s=r.attributes;for(let c=0,h=s.length;c<h;++c){const E=s[c],k=E.value,$=Df(a,k);let Y=null;null===$?t&&(Y=new Iu(()=>k),Y.targetName=E.name):Y=_g($),null!==Y&&(r.removeAttributeNode(E),c--,h--,a.addFactory(Y))}}function rb(a,r,t){const s=Df(a,r.textContent);if(null!==s){let c=r;for(let h=0,E=s.length;h<E;++h){const k=s[h],$=0===h?r:c.parentNode.insertBefore(document.createTextNode(""),c.nextSibling);"string"==typeof k?$.textContent=k:($.textContent=" ",a.captureContentBinding(k)),c=$,a.targetIndex++,$!==r&&t.nextNode()}a.targetIndex--}}const _c=document.createRange();class Cg{constructor(r,t){this.fragment=r,this.behaviors=t,this.source=null,this.context=null,this.firstChild=r.firstChild,this.lastChild=r.lastChild}appendTo(r){r.appendChild(this.fragment)}insertBefore(r){if(this.fragment.hasChildNodes())r.parentNode.insertBefore(this.fragment,r);else{const t=this.lastChild;if(r.previousSibling===t)return;const s=r.parentNode;let h,c=this.firstChild;for(;c!==t;)h=c.nextSibling,s.insertBefore(c,r),c=h;s.insertBefore(t,r)}}remove(){const r=this.fragment,t=this.lastChild;let c,s=this.firstChild;for(;s!==t;)c=s.nextSibling,r.appendChild(s),s=c;r.appendChild(t)}dispose(){const r=this.firstChild.parentNode,t=this.lastChild;let c,s=this.firstChild;for(;s!==t;)c=s.nextSibling,r.removeChild(s),s=c;r.removeChild(t);const h=this.behaviors,E=this.source;for(let k=0,$=h.length;k<$;++k)h[k].unbind(E)}bind(r,t){const s=this.behaviors;if(this.source!==r)if(null!==this.source){const c=this.source;this.source=r,this.context=t;for(let h=0,E=s.length;h<E;++h){const k=s[h];k.unbind(c),k.bind(r,t)}}else{this.source=r,this.context=t;for(let c=0,h=s.length;c<h;++c)s[c].bind(r,t)}}unbind(){if(null===this.source)return;const r=this.behaviors,t=this.source;for(let s=0,c=r.length;s<c;++s)r[s].unbind(t);this.source=null}static disposeContiguousBatch(r){if(0!==r.length){_c.setStartBefore(r[0].firstChild),_c.setEndAfter(r[r.length-1].lastChild),_c.deleteContents();for(let t=0,s=r.length;t<s;++t){const c=r[t],h=c.behaviors,E=c.source;for(let k=0,$=h.length;k<$;++k)h[k].unbind(E)}}}}class Sf{constructor(r,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=r,this.directives=t}create(r){if(null===this.fragment){let Y;const ye=this.html;if("string"==typeof ye){Y=document.createElement("template"),Y.innerHTML=xn.SO.createHTML(ye);const lt=Y.content.firstElementChild;null!==lt&&"TEMPLATE"===lt.tagName&&(Y=lt)}else Y=ye;const ke=function xC(a,r){const t=a.content;document.adoptNode(t);const s=Tu.borrow(r);Ef(s,a,!0);const c=s.behaviorFactories;s.reset();const h=xn.SO.createTemplateWalker(t);let E;for(;E=h.nextNode();)switch(s.targetIndex++,E.nodeType){case 1:Ef(s,E);break;case 3:rb(s,E,h);break;case 8:xn.SO.isMarker(E)&&s.addFactory(r[xn.SO.extractDirectiveIndexFromMarker(E)])}let k=0;(xn.SO.isMarker(t.firstChild)||1===t.childNodes.length&&r.length)&&(t.insertBefore(document.createComment(""),t.firstChild),k=-1);const $=s.behaviorFactories;return s.release(),{fragment:t,viewBehaviorFactories:$,hostBehaviorFactories:c,targetOffset:k}}(Y,this.directives);this.fragment=ke.fragment,this.viewBehaviorFactories=ke.viewBehaviorFactories,this.hostBehaviorFactories=ke.hostBehaviorFactories,this.targetOffset=ke.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,c=new Array(this.behaviorCount),h=xn.SO.createTemplateWalker(t);let E=0,k=this.targetOffset,$=h.nextNode();for(let Y=s.length;E<Y;++E){const ye=s[E],ke=ye.targetIndex;for(;null!==$;){if(k===ke){c[E]=ye.createBehavior($);break}$=h.nextNode(),k++}}if(this.hasHostBehaviors){const Y=this.hostBehaviorFactories;for(let ye=0,ke=Y.length;ye<ke;++ye,++E)c[E]=Y[ye].createBehavior(r)}return new Cg(t,c)}render(r,t,s){"string"==typeof t&&(t=document.getElementById(t)),void 0===s&&(s=t);const c=this.create(s);return c.bind(r,Ze.Wp),c.appendTo(t),c}}const Dg=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ct(a,...r){const t=[];let s="";for(let c=0,h=a.length-1;c<h;++c){const E=a[c];let k=r[c];if(s+=E,k instanceof Sf){const $=k;k=()=>$}if("function"==typeof k&&(k=new Iu(k)),k instanceof _f){const $=Dg.exec(E);null!==$&&(k.targetName=$[2])}k instanceof Tl?(s+=k.createPlaceholder(t.length),t.push(k)):s+=k}return s+=a[a.length-1],new Sf(s,t)}class xf{constructor(r,t){this.target=r,this.propertyName=t}bind(r){r[this.propertyName]=this.target}unbind(){}}function Wn(a){return new Su("fast-ref",xf,a)}class oo{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Pr=(a,r)=>Ct`
    <span
        part="end"
        ${Wn("endContainer")}
        class=${t=>r.end?"end":void 0}
    >
        <slot name="end" ${Wn("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${r.end||""}
        </slot>
    </span>
`,So=(a,r)=>Ct`
    <span
        part="start"
        ${Wn("startContainer")}
        class="${t=>r.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Wn("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${r.start||""}
        </slot>
    </span>
`,If=Ct`
    <span part="end" ${Wn("endContainer")}>
        <slot
            name="end"
            ${Wn("end")}
            @slotchange="${a=>a.handleEndContentChange()}"
        ></slot>
    </span>
`,Gd=Ct`
    <span part="start" ${Wn("startContainer")}>
        <slot
            name="start"
            ${Wn("start")}
            @slotchange="${a=>a.handleStartContentChange()}"
        ></slot>
    </span>
`;function Ri(a,...r){const t=z.Ax.locate(a);r.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(h=>{"constructor"!==h&&Object.defineProperty(a.prototype,h,Object.getOwnPropertyDescriptor(s.prototype,h))}),z.Ax.locate(s).forEach(h=>t.push(h))})}let Cc=(()=>{class a extends Dn{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}return(0,J.gn)([(0,z.Lj)({attribute:"heading-level",mode:"fromView",converter:z.Id})],a.prototype,"headinglevel",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"expanded",void 0),(0,J.gn)([z.Lj],a.prototype,"id",void 0),a})();Ri(Cc,oo);let ob=(()=>{class a extends Dn{constructor(){super(...arguments),this.expandmode="multi",this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((s,c)=>{s instanceof Cc&&(s.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(s.expanded=this.activeItemIndex===c));const h=this.accordionIds[c];s.setAttribute("id","string"!=typeof h?`accordion-${c+1}`:h),this.activeid=this.accordionIds[this.activeItemIndex],s.addEventListener("keydown",this.handleItemKeyDown),s.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&(null!==(t=this.findExpandedItem())&&void 0!==t?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((s,c)=>{s.removeEventListener("change",this.activeItemChange),s.removeEventListener("keydown",this.handleItemKeyDown),s.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const s=t.target;this.activeid=s.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),s.expanded=!0,s.setAttribute("aria-disabled","true"),this.accordionItems.forEach(c=>{!c.hasAttribute("disabled")&&c.id!==this.activeid&&c.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(s),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case bs:t.preventDefault(),this.adjust(-1);break;case ys:t.preventDefault(),this.adjust(1);break;case ua:this.activeItemIndex=0,this.focusItem();break;case Ys:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const s=t.target,c=this.activeItemIndex=Array.from(this.accordionItems).indexOf(s);this.activeItemIndex!==c&&-1!==c&&(this.activeItemIndex=c,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,s){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if("true"===this.accordionItems[t].getAttribute("expanded"))return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,s)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return"single"===this.expandmode}adjust(t){this.activeItemIndex=function bg(a,r,t){return t<a?r:t>r?a:t}(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Cc&&t.expandbutton.focus()}}return(0,J.gn)([(0,z.Lj)({attribute:"expand-mode"})],a.prototype,"expandmode",void 0),(0,J.gn)([Ze.LO],a.prototype,"accordionItems",void 0),a})();function da(a){return a?function(r,t,s){return 1===r.nodeType&&r.matches(a)}:function(r,t,s){return 1===r.nodeType}}class Eg{constructor(r,t){this.target=r,this.options=t,this.source=null}bind(r){const t=this.options.property;this.shouldUpdate=Ze.y$.getAccessors(r).some(s=>s.name===t),this.source=r,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Zs.ow),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let r=this.getNodes();return void 0!==this.options.filter&&(r=r.filter(this.options.filter)),r}updateTarget(r){this.source[this.options.property]=r}}class sb extends Eg{constructor(r,t){super(r,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Vi(a){return"string"==typeof a&&(a={property:a}),new Su("fast-slotted",sb,a)}var Tf=M(2257);function Mu(a,r){const t=[];let s="";const c=[];for(let h=0,E=a.length-1;h<E;++h){s+=a[h];let k=r[h];if(k instanceof Tf.v){const $=k.createBehavior();k=k.createCSS(),$&&c.push($)}k instanceof Wa.XL||k instanceof CSSStyleSheet?(""!==s.trim()&&(t.push(s),s=""),t.push(k)):s+=k}return s+=a[a.length-1],""!==s.trim()&&t.push(s),{styles:t,behaviors:c}}function gt(a,...r){const{styles:t,behaviors:s}=Mu(a,r),c=Wa.XL.create(t);return s.length&&c.withBehaviors(...s),c}class Ec extends Tf.v{constructor(r,t){super(),this.behaviors=t,this.css="";const s=r.reduce((c,h)=>("string"==typeof h?this.css+=h:c.push(h),c),[]);s.length&&(this.styles=Wa.XL.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(r){this.styles&&r.$fastController.addStyles(this.styles),this.behaviors.length&&r.$fastController.addBehaviors(this.behaviors)}unbind(r){this.styles&&r.$fastController.removeStyles(this.styles),this.behaviors.length&&r.$fastController.removeBehaviors(this.behaviors)}}function ws(a,...r){const{styles:t,behaviors:s}=Mu(a,r);return new Ec(t,s)}function jn(a){return`:host([hidden]){display:none}:host{display:${a}}`}var T=M(277);const Pi=ws`
  font-family: ${T.SVJ};
  font-size: ${T.cSu};
  line-height: ${T.RUt};
  font-weight: initial;
  font-variation-settings: ${T.Ww_};
`,Zd=ws`
  font-family: ${T.SVJ};
  font-size: ${T.sNp};
  line-height: ${T.vgC};
  font-weight: initial;
  font-variation-settings: ${T.FMB};
`,fb=(ws`
  font-family: ${T.SVJ};
  font-size: ${T.G8g};
  line-height: ${T.MwG};
  font-weight: initial;
  font-variation-settings: ${T.Tp7};
`,ws`
  font-family: ${T.SVJ};
  font-size: ${T.PwC};
  line-height: ${T.b3W};
  font-weight: initial;
  font-variation-settings: ${T.GQL};
`,ws`
  font-family: ${T.SVJ};
  font-size: ${T.mWK};
  line-height: ${T.I7_};
  font-weight: initial;
  font-variation-settings: ${T.YQw};
`,ws`
  font-family: ${T.SVJ};
  font-size: ${T.ipv};
  line-height: ${T.yGZ};
  font-weight: initial;
  font-variation-settings: ${T.pqD};
`,ws`
  font-family: ${T.SVJ};
  font-size: ${T.IWd};
  line-height: ${T.iL4};
  font-weight: initial;
  font-variation-settings: ${T.SZp};
`,ws`
  font-family: ${T.SVJ};
  font-size: ${T.CXZ};
  line-height: ${T.n5T};
  font-weight: initial;
  font-variation-settings: ${T.NIE};
`,ws`
  font-family: ${T.SVJ};
  font-size: ${T.Zaf};
  line-height: ${T.yDy};
  font-weight: initial;
  font-variation-settings: ${T.dm2};
`,ob.compose({baseName:"accordion",template:(a,r)=>Ct`
    <template>
        <slot ${Vi({property:"accordionItems",filter:da()})}></slot>
        <slot name="item" part="item" ${Vi("accordionItems")}></slot>
    </template>
`,styles:(a,r)=>gt`
    ${jn("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Pi}
      color: ${T.CHi};
      gap: calc(${T._5n} * 1px);
    }
  `}));function Ou(...a){return a.every(r=>r instanceof HTMLElement)}let Ol;const nn=function xg(){if("boolean"==typeof Ol)return Ol;if(!function pb(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}())return Ol=!1,Ol;const a=document.createElement("style"),r=function OC(){const a=document.querySelector('meta[property="csp-nonce"]');return a?a.getAttribute("content"):null}();null!==r&&a.setAttribute("nonce",r),document.head.appendChild(a);try{a.sheet.insertRule("foo:focus-visible {color:inherit}",0),Ol=!0}catch{Ol=!1}finally{document.head.removeChild(a)}return Ol}()?"focus-visible":"focus";class Au{constructor(r){this.listenerCache=new WeakMap,this.query=r}bind(r){const{query:t}=this,s=this.constructListener(r);s.bind(t)(),t.addListener(s),this.listenerCache.set(r,s)}unbind(r){const t=this.listenerCache.get(r);t&&(this.query.removeListener(t),this.listenerCache.delete(r))}}class xc extends Au{constructor(r,t){super(r),this.styles=t}static with(r){return t=>new xc(r,t)}constructListener(r){let t=!1;const s=this.styles;return function(){const{matches:h}=this;h&&!t?(r.$fastController.addStyles(s),t=h):!h&&t&&(r.$fastController.removeStyles(s),t=h)}}unbind(r){super.unbind(r),r.$fastController.removeStyles(this.styles)}}const An=xc.with(window.matchMedia("(forced-colors)"));xc.with(window.matchMedia("(prefers-color-scheme: dark)")),xc.with(window.matchMedia("(prefers-color-scheme: light)"));var _e=function(a){return a.Canvas="Canvas",a.CanvasText="CanvasText",a.LinkText="LinkText",a.VisitedText="VisitedText",a.ActiveText="ActiveText",a.ButtonFace="ButtonFace",a.ButtonText="ButtonText",a.Field="Field",a.FieldText="FieldText",a.Highlight="Highlight",a.HighlightText="HighlightText",a.GrayText="GrayText",a}(_e||{});const Ks=ws`
  outline: calc(${T.vxp} * 1px) solid ${T.yGg};
  outline-offset: calc(${T.vxp} * -1px);
`,Al=ws`
  outline: calc(${T.vxp} * 1px) solid ${T.yGg};
  outline-offset: calc(${T.Han} * 1px);
`,kn=ws`(${T.nfe} + ${T.hVk}) * ${T._5n}`,FC=Ai.DesignToken.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(a=>{const r=T.abR.getValueFor(a);return T.DFW.getValueFor(a).evaluate(a,r.evaluate(a).rest).rest}),LC=Ai.DesignToken.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(a=>{const r=T.abR.getValueFor(a);return T.DFW.getValueFor(a).evaluate(a,r.evaluate(a).rest).hover}),Tg=Ai.DesignToken.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(a=>{const r=T.abR.getValueFor(a);return T.DFW.getValueFor(a).evaluate(a,r.evaluate(a).rest).active}),vb=Cc.compose({baseName:"accordion-item",template:(a,r)=>Ct`
    <template class="${t=>t.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${t=>t.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${Wn("expandbutton")}
                aria-expanded="${t=>t.expanded}"
                aria-controls="${t=>t.id}-panel"
                id="${t=>t.id}"
                @click="${(t,s)=>t.clickHandler(s.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${So(0,r)}
            ${Pr(0,r)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${r.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${r.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${t=>t.id}-panel"
            role="region"
            aria-labelledby="${t=>t.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:(a,r)=>gt`
    ${jn("flex")} :host {
      box-sizing: border-box;
      ${Pi};
      flex-direction: column;
      background: ${T.RJY};
      color: ${T.CHi};
      border: calc(${T.Han} * 1px) solid ${T.Ja_};
      border-radius: calc(${T.rSr} * 1px);
    }

    .region {
      display: none;
      padding: calc(${T._5n} * 2 * 1px);
      background: ${T.Y5u};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${T._5n} * 3 * 1px) 0;
      padding: 0 calc(${T._5n} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${T.Han} * -1px);
      left: calc(${T.Han} * -1px);
      right: calc(${T.Han} * -1px);
      bottom: calc(${T.Han} * -1px);
      cursor: pointer;
    }

    .button:${nn}::before {
      ${Ks}
      border-radius: calc(${T.rSr} * 1px);
    }

    :host(.expanded) .button:${nn}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${T.Han} * 1px) solid ${T.Ja_};
      border-bottom-left-radius: calc((${T.rSr} - ${T.Han}) * 1px);
      border-bottom-right-radius: calc((${T.rSr} - ${T.Han}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${FC};
      border-radius: calc(${T.UWU} * 1px);
      fill: currentcolor;
      width: calc(${kn} * 1px);
      height: calc(${kn} * 1px);
      margin: calc(${T._5n} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${LC};
    }

    .heading:active .icon {
      background: ${Tg};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${T._5n} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(An(gt`
        .button:${nn}::before {
          outline-color: ${_e.Highlight};
        }
        .icon {
          fill: ${_e.ButtonText};
        }
      `)),collapsedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',expandedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n  '});var At=M(7582);let Ka=(()=>{class a{}return(0,J.gn)([(0,z.Lj)({attribute:"aria-atomic"})],a.prototype,"ariaAtomic",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-busy"})],a.prototype,"ariaBusy",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-controls"})],a.prototype,"ariaControls",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-current"})],a.prototype,"ariaCurrent",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-describedby"})],a.prototype,"ariaDescribedby",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-details"})],a.prototype,"ariaDetails",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-disabled"})],a.prototype,"ariaDisabled",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-errormessage"})],a.prototype,"ariaErrormessage",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-flowto"})],a.prototype,"ariaFlowto",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-haspopup"})],a.prototype,"ariaHaspopup",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-hidden"})],a.prototype,"ariaHidden",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-invalid"})],a.prototype,"ariaInvalid",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-keyshortcuts"})],a.prototype,"ariaKeyshortcuts",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-label"})],a.prototype,"ariaLabel",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-labelledby"})],a.prototype,"ariaLabelledby",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-live"})],a.prototype,"ariaLive",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-owns"})],a.prototype,"ariaOwns",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-relevant"})],a.prototype,"ariaRelevant",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-roledescription"})],a.prototype,"ariaRoledescription",void 0),a})(),Rl=(()=>{class a extends Dn{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&null!==(t=this.$fastController.definition.shadowOptions)&&void 0!==t&&t.delegatesFocus&&(this.focus=()=>{var s;null===(s=this.control)||void 0===s||s.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}return(0,J.gn)([z.Lj],a.prototype,"download",void 0),(0,J.gn)([z.Lj],a.prototype,"href",void 0),(0,J.gn)([z.Lj],a.prototype,"hreflang",void 0),(0,J.gn)([z.Lj],a.prototype,"ping",void 0),(0,J.gn)([z.Lj],a.prototype,"referrerpolicy",void 0),(0,J.gn)([z.Lj],a.prototype,"rel",void 0),(0,J.gn)([z.Lj],a.prototype,"target",void 0),(0,J.gn)([z.Lj],a.prototype,"type",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedContent",void 0),a})(),Mf=(()=>{class a{}return(0,J.gn)([(0,z.Lj)({attribute:"aria-expanded"})],a.prototype,"ariaExpanded",void 0),a})();Ri(Mf,Ka),Ri(Rl,oo,Mf);const Yd=(a,r)=>Ct`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Wn("control")}
    >
        ${So(0,r)}
        <span class="content" part="content">
            <slot ${Vi("defaultSlottedContent")}></slot>
        </span>
        ${Pr(0,r)}
    </a>
`,Mg=(a,r,t,s="[disabled]")=>gt`
    ${jn("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Pi}
      height: calc(${kn} * 1px);
      min-width: calc(${kn} * 1px);
      color: ${T.CHi};
      border-radius: calc(${T.UWU} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${T.Han} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${T._5n} * 2 * ${T.hVk})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${nn} {
      ${Ks}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,qa=(a,r,t,s="[disabled]")=>gt`
    .control {
      background: padding-box linear-gradient(${T.wFS}, ${T.wFS}),
        border-box ${T.U_Q};
    }

    :host(${t}:hover) .control {
      background: padding-box linear-gradient(${T.XiB}, ${T.XiB}),
        border-box ${T.xBI};
    }

    :host(${t}:active) .control {
      background: padding-box linear-gradient(${T.Gy2}, ${T.Gy2}),
        border-box ${T._ro};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${T.wFS}, ${T.wFS}),
        border-box ${T.akT};
    }
  `.withBehaviors(An(gt`
        .control {
          background: ${_e.ButtonFace};
          border-color: ${_e.ButtonText};
          color: ${_e.ButtonText};
        }

        :host(${t}:hover) .control,
        :host(${t}:active) .control {
          forced-color-adjust: none;
          background: ${_e.HighlightText};
          border-color: ${_e.Highlight};
          color: ${_e.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${_e.GrayText};
          color: ${_e.GrayText};
        }

        .control:${nn} {
          outline-color: ${_e.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${_e.LinkText};
          color: ${_e.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${_e.CanvasText};
          color: ${_e.CanvasText};
        }
    `)),kg=(a,r,t,s="[disabled]")=>gt`
    .control {
      background: padding-box linear-gradient(${T.Avx}, ${T.Avx}),
        border-box ${T.z0S};
      color: ${T.w41};
    }

    :host(${t}:hover) .control {
      background: padding-box linear-gradient(${T.OCG}, ${T.OCG}),
        border-box ${T.fbQ};
      color: ${T.lJV};
    }

    :host(${t}:active) .control {
      background: padding-box linear-gradient(${T.UEO}, ${T.UEO}),
        border-box ${T.oi3};
      color: ${T.PpH};
    }

    :host(${s}) .control {
      background: ${T.Avx};
    }

    .control:${nn} {
      box-shadow: 0 0 0 calc(${T.vxp} * 1px) ${T.a2F} inset !important;
    }
  `.withBehaviors(An(gt`
        .control {
          forced-color-adjust: none;
          background: ${_e.Highlight};
          color: ${_e.HighlightText};
        }

        :host(${t}:hover) .control,
        :host(${t}:active) .control {
          background: ${_e.HighlightText};
          border-color: ${_e.Highlight};
          color: ${_e.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${_e.GrayText};
          color: ${_e.GrayText};
        }

        .control:${nn} {
          outline-color: ${_e.CanvasText};
          box-shadow: 0 0 0 calc(${T.vxp} * 1px) ${_e.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${_e.LinkText};
          color: ${_e.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${_e.ButtonFace};
          border-color: ${_e.LinkText};
          color: ${_e.LinkText};
        }
      `)),Kd=(a,r,t,s="[disabled]")=>gt`
    :host {
      color: ${T.goi};
    }

    .control {
      background: ${T.jql};
    }

    :host(${t}:hover) .control {
      background: ${T.QpD};
      color: ${T.D9J};
    }

    :host(${t}:active) .control {
      background: ${T.sG3};
      color: ${T.VNr};
    }

    :host(${s}) .control {
      background: ${T.jql};
    }
  `.withBehaviors(An(gt`
        :host {
          color: ${_e.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${t}:hover) .control,
        :host(${t}:active) .control {
          background: transparent;
          border-color: ${_e.ButtonText};
          color: ${_e.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${_e.GrayText};
        }

        .control:${nn} {
          outline-color: ${_e.CanvasText};
        }

        :host([href]) .control {
          color: ${_e.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${_e.LinkText};
          color: ${_e.LinkText};
        }
      `)),kf=(a,r,t,s="[disabled]")=>gt`
    .control {
      background: transparent !important;
      border-color: ${T.akT};
    }

    :host(${t}:hover) .control {
      border-color: ${T.QPc};
    }

    :host(${t}:active) .control {
      border-color: ${T.c1L};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${T.akT};
    }
  `.withBehaviors(An(gt`
        .control {
          border-color: ${_e.ButtonText};
          color: ${_e.ButtonText};
        }

        :host(${t}:hover) .control,
        :host(${t}:active) .control {
          background: ${_e.HighlightText};
          border-color: ${_e.Highlight};
          color: ${_e.Highlight};
        }

        :host(${s}) .control {
          border-color: ${_e.GrayText};
          color: ${_e.GrayText};
        }

        .control:${nn} {
          outline-color: ${_e.CanvasText};
        }

        :host([href]) .control {
          border-color: ${_e.LinkText};
          color: ${_e.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${_e.CanvasText};
          color: ${_e.CanvasText};
        }
      `)),Of=(a,r,t,s="[disabled]")=>gt`
    .control {
      background: ${T.jql};
    }

    :host(${t}:hover) .control {
      background: ${T.QpD};
    }

    :host(${t}:active) .control {
      background: ${T.sG3};
    }

    :host(${s}) .control {
      background: ${T.jql};
    }
  `.withBehaviors(An(gt`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${_e.ButtonText};
        }

        :host(${t}:hover) .control,
        :host(${t}:active) .control {
          background: transparent;
          border-color: ${_e.ButtonText};
          color: ${_e.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${_e.GrayText};
        }
        
        .control:${nn} {
          outline-color: ${_e.CanvasText};
        }

        :host([href]) .control {
          color: ${_e.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${_e.LinkText};
          color: ${_e.LinkText};
        }
      `));class bb{constructor(r,t,s){this.propertyName=r,this.value=t,this.styles=s}bind(r){Ze.y$.getNotifier(r).subscribe(this,this.propertyName),this.handleChange(r,this.propertyName)}unbind(r){Ze.y$.getNotifier(r).unsubscribe(this,this.propertyName),r.$fastController.removeStyles(this.styles)}handleChange(r,t){r[t]===this.value?r.$fastController.addStyles(this.styles):r.$fastController.removeStyles(this.styles)}}function Ui(a,r){return new bb("appearance",a,r)}const Pl="[href]",Ru=(()=>{class a extends Rl{appearanceChanged(t,s){t!==s&&(this.classList.add(s),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,s;const c=this.defaultSlottedContent.filter(h=>h.nodeType===Node.ELEMENT_NODE);1===c.length&&c[0]instanceof SVGElement?null===(t=this.control)||void 0===t||t.classList.add("icon-only"):null===(s=this.control)||void 0===s||s.classList.remove("icon-only")}}return(0,At.gn)([z.Lj],a.prototype,"appearance",void 0),a})().compose({baseName:"anchor",baseClass:Rl,template:Yd,styles:(a,r)=>{return Mg().withBehaviors(Ui("neutral",qa(0,0,Pl)),Ui("accent",kg(0,0,Pl)),Ui("hypertext",gt`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${t=Pl}) .control {
      color: ${T.goi};
      text-decoration: underline 1px;
    }

    :host(${t}:hover) .control {
      color: ${T.D9J};
      text-decoration: none;
    }

    :host(${t}:active) .control {
      color: ${T.VNr};
      text-decoration: none;
    }

    .control:${nn} {
      ${Al}
    }
  `.withBehaviors(An(gt`
        :host(${t}) .control {
          color: ${_e.LinkText};
        }

        :host(${t}:hover) .control,
        :host(${t}:active) .control {
          color: ${_e.CanvasText};
        }

        .control:${nn} {
          outline-color: ${_e.CanvasText};
        }
      `))),Ui("lightweight",Kd(0,0,Pl)),Ui("outline",kf(0,0,Pl)),Ui("stealth",Of(0,0,Pl)));var t},shadowOptions:{delegatesFocus:!0}});var er=M(1544);const $f="focusin",Ic="focusout",Tc="keydown",Ll=a=>{const r=a.closest("[dir]");return null!==r&&"rtl"===r.dir?er.N.rtl:er.N.ltr};class ln extends Dn{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=er.N.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(ln.intersectionService.requestPosition(this,this.handleIntersection),ln.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&ln.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,ln.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&ln.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&ln.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=r=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(r)&&this.updateLayout())},this.applyIntersectionEntries=r=>{const t=r.find(h=>h.target===this),s=r.find(h=>h.target===this.anchorElement),c=r.find(h=>h.target===this.viewportElement);return void 0!==t&&void 0!==c&&void 0!==s&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,c.boundingClientRect)||this.isRectDifferent(this.regionRect,t.boundingClientRect))&&(this.regionRect=t.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportRect=this.viewportElement===document.documentElement?new DOMRectReadOnly(c.boundingClientRect.x+document.documentElement.scrollLeft,c.boundingClientRect.y+document.documentElement.scrollTop,c.boundingClientRect.width,c.boundingClientRect.height):c.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(r,t)=>Math.abs(r.top-t.top)>this.updateThreshold||Math.abs(r.right-t.right)>this.updateThreshold||Math.abs(r.bottom-t.bottom)>this.updateThreshold||Math.abs(r.left-t.left)>this.updateThreshold,this.handleResize=r=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=Ll(this),this.startObservers())},this.updateLayout=()=>{let r,t;if("uncontrolled"!==this.horizontalPositioningMode){const h=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)t="center";else if("unset"!==this.horizontalDefaultPosition){let lt=this.horizontalDefaultPosition;if("start"===lt||"end"===lt){const bt=Ll(this);if(bt!==this.currentDirection)return this.currentDirection=bt,void this.initialize();lt=this.currentDirection===er.N.ltr?"start"===lt?"left":"right":"start"===lt?"right":"left"}switch(lt){case"left":t=this.horizontalInset?"insetStart":"start";break;case"right":t=this.horizontalInset?"insetEnd":"end"}}const E=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,k=void 0!==this.anchorRect?this.anchorRect.left:0,$=void 0!==this.anchorRect?this.anchorRect.right:0,Y=void 0!==this.anchorRect?this.anchorRect.width:0,ye=void 0!==this.viewportRect?this.viewportRect.left:0,ke=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===t||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(t,k,$,Y,ye,ke)<E)&&(t=this.getAvailableSpace(h[0],k,$,Y,ye,ke)>this.getAvailableSpace(h[1],k,$,Y,ye,ke)?h[0]:h[1])}if("uncontrolled"!==this.verticalPositioningMode){const h=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)r="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":r=this.verticalInset?"insetStart":"start";break;case"bottom":r=this.verticalInset?"insetEnd":"end"}const E=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,k=void 0!==this.anchorRect?this.anchorRect.top:0,$=void 0!==this.anchorRect?this.anchorRect.bottom:0,Y=void 0!==this.anchorRect?this.anchorRect.height:0,ye=void 0!==this.viewportRect?this.viewportRect.top:0,ke=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===r||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(r,k,$,Y,ye,ke)<E)&&(r=this.getAvailableSpace(h[0],k,$,Y,ye,ke)>this.getAvailableSpace(h[1],k,$,Y,ye,ke)?h[0]:h[1])}const s=this.getNextRegionDimension(t,r),c=this.horizontalPosition!==t||this.verticalPosition!==r;if(this.setHorizontalPosition(t,s),this.setVerticalPosition(r,s),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),c&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(r,t)=>{if(void 0===r||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:t.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset"}let c=0;switch(r){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(c=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+c,this.horizontalViewportLock){const h=this.anchorRect.left+c,E=this.anchorRect.right-c;h<this.viewportRect.left&&!(E>this.viewportRect.right)?this.translateX=this.translateX-(h-this.viewportRect.left):E>this.viewportRect.right&&!(h<this.viewportRect.left)&&(this.translateX=this.translateX-(E-this.viewportRect.right))}}this.horizontalPosition=r},this.setVerticalPosition=(r,t)=>{if(void 0===r||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:t.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset"}let c=0;switch(r){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(c=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+c,this.verticalViewportLock){const h=this.anchorRect.top+c,E=this.anchorRect.bottom-c;h<this.viewportRect.top&&!(E>this.viewportRect.bottom)?this.translateY=this.translateY-(h-this.viewportRect.top):E>this.viewportRect.bottom&&!(h<this.viewportRect.top)&&(this.translateY=this.translateY-(E-this.viewportRect.bottom))}}this.verticalPosition=r},this.getPositioningOptions=r=>r?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(r,t,s,c,h,E)=>{const k=t-h,$=E-(t+c);switch(r){case"start":return k;case"insetStart":return k+c;case"insetEnd":return $+c;case"end":return $;case"center":return 2*Math.min(k,$)+c}},this.getNextRegionDimension=(r,t)=>{const s={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==r&&"fill"===this.horizontalScaling?s.width=this.getAvailableSpace(r,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(s.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==t&&"fill"===this.verticalScaling?s.height=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(s.height=void 0!==this.anchorRect?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener("resize",this.update,{passive:!0}),window.addEventListener("scroll",this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(r,t){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===r&&this.stopAutoUpdateEventListeners(),"auto"===t&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),xn.SO.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}ln.intersectionService=new class Yb{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(r,t)=>{var s;if(null!==this.intersectionDetector){if(this.observedElements.has(r))return void(null===(s=this.observedElements.get(r))||void 0===s||s.push(t));this.observedElements.set(r,[t]),this.intersectionDetector.observe(r)}},this.cancelRequestPosition=(r,t)=>{const s=this.observedElements.get(r);if(void 0!==s){const c=s.indexOf(t);-1!==c&&s.splice(c,1)}},this.initializeIntersectionDetector=()=>{Zs.P3.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=r=>{if(null===this.intersectionDetector)return;const t=[],s=[];r.forEach(c=>{var h;null===(h=this.intersectionDetector)||void 0===h||h.unobserve(c.target);const E=this.observedElements.get(c.target);void 0!==E&&(E.forEach(k=>{let $=t.indexOf(k);-1===$&&($=t.length,t.push(k),s.push([])),s[$].push(c)}),this.observedElements.delete(c.target))}),t.forEach((c,h)=>{c(s[h])})},this.initializeIntersectionDetector()}},(0,J.gn)([z.Lj],ln.prototype,"anchor",void 0),(0,J.gn)([z.Lj],ln.prototype,"viewport",void 0),(0,J.gn)([(0,z.Lj)({attribute:"horizontal-positioning-mode"})],ln.prototype,"horizontalPositioningMode",void 0),(0,J.gn)([(0,z.Lj)({attribute:"horizontal-default-position"})],ln.prototype,"horizontalDefaultPosition",void 0),(0,J.gn)([(0,z.Lj)({attribute:"horizontal-viewport-lock",mode:"boolean"})],ln.prototype,"horizontalViewportLock",void 0),(0,J.gn)([(0,z.Lj)({attribute:"horizontal-inset",mode:"boolean"})],ln.prototype,"horizontalInset",void 0),(0,J.gn)([(0,z.Lj)({attribute:"horizontal-threshold"})],ln.prototype,"horizontalThreshold",void 0),(0,J.gn)([(0,z.Lj)({attribute:"horizontal-scaling"})],ln.prototype,"horizontalScaling",void 0),(0,J.gn)([(0,z.Lj)({attribute:"vertical-positioning-mode"})],ln.prototype,"verticalPositioningMode",void 0),(0,J.gn)([(0,z.Lj)({attribute:"vertical-default-position"})],ln.prototype,"verticalDefaultPosition",void 0),(0,J.gn)([(0,z.Lj)({attribute:"vertical-viewport-lock",mode:"boolean"})],ln.prototype,"verticalViewportLock",void 0),(0,J.gn)([(0,z.Lj)({attribute:"vertical-inset",mode:"boolean"})],ln.prototype,"verticalInset",void 0),(0,J.gn)([(0,z.Lj)({attribute:"vertical-threshold"})],ln.prototype,"verticalThreshold",void 0),(0,J.gn)([(0,z.Lj)({attribute:"vertical-scaling"})],ln.prototype,"verticalScaling",void 0),(0,J.gn)([(0,z.Lj)({attribute:"fixed-placement",mode:"boolean"})],ln.prototype,"fixedPlacement",void 0),(0,J.gn)([(0,z.Lj)({attribute:"auto-update-mode"})],ln.prototype,"autoUpdateMode",void 0),(0,J.gn)([Ze.LO],ln.prototype,"anchorElement",void 0),(0,J.gn)([Ze.LO],ln.prototype,"viewportElement",void 0),(0,J.gn)([Ze.LO],ln.prototype,"initialLayoutComplete",void 0);const Hf=a=>"function"==typeof a,Kb=()=>null;function em(a){return void 0===a?Kb:Hf(a)?a:()=>a}function ji(a,r,t){const s=Hf(a)?a:()=>a,c=em(r),h=em(t);return(E,k)=>s(E,k)?c(E,k):h(E,k)}const Xb=ln.compose({baseName:"anchored-region",template:(a,r)=>Ct`
    <template class="${t=>t.initialLayoutComplete?"loaded":""}">
        ${ji(t=>t.initialLayoutComplete,Ct`
                <slot></slot>
            `)}
    </template>
`,styles:(a,r)=>gt`
  :host {
    contain: layout;
    display: block;
  }
`});let tm=(()=>{class a extends Dn{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,s=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?s:`${s} ${t}`}}}return(0,J.gn)([(0,z.Lj)({attribute:"fill"})],a.prototype,"fill",void 0),(0,J.gn)([(0,z.Lj)({attribute:"color"})],a.prototype,"color",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"circular",void 0),a})();const nm=(()=>{class a extends tm{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,s){t!==s&&xn.SO.queueUpdate(()=>{this.classList.add(s),this.classList.remove(t)})}}return(0,At.gn)([(0,z.Lj)({mode:"fromView"})],a.prototype,"appearance",void 0),a})().compose({baseName:"badge",baseClass:tm,template:(a,r)=>Ct`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-block")} :host {
      box-sizing: border-box;
      ${Zd};
    }

    .control {
      border-radius: calc(${T.UWU} * 1px);
      padding: calc(((${T._5n} * 0.5) - ${T.Han}) * 1px) calc((${T._5n} - ${T.Han}) * 1px);
      border: calc(${T.Han} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${T.CHi};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${T.Avx};
      color: ${T.w41};
    }

    :host(.neutral) .control {
      background: ${T._jX};
      color: ${T.CHi};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${T.vgC} - calc(${T._5n} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `});let Bu=(()=>{class a extends Rl{constructor(){super(...arguments),this.separator=!0}}return(0,J.gn)([Ze.LO],a.prototype,"separator",void 0),a})();Ri(Bu,oo,Mf);const LD=(()=>{class a extends Dn{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedBreadcrumbItems||0===this.slottedBreadcrumbItems.length)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(s=>{const c=s===t;this.setItemSeparator(s,c),this.setAriaCurrent(s,c)})}}setItemSeparator(t,s){t instanceof Bu&&(t.separator=!s)}findChildWithHref(t){var s,c;return t.childElementCount>0?t.querySelector("a[href]"):null!==(s=t.shadowRoot)&&void 0!==s&&s.childElementCount?null===(c=t.shadowRoot)||void 0===c?void 0:c.querySelector("a[href]"):null}setAriaCurrent(t,s){const c=this.findChildWithHref(t);null===c&&t.hasAttribute("href")&&t instanceof Bu?s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):null!==c&&(s?c.setAttribute("aria-current","page"):c.removeAttribute("aria-current"))}}return(0,J.gn)([Ze.LO],a.prototype,"slottedBreadcrumbItems",void 0),a})().compose({baseName:"breadcrumb",template:(a,r)=>Ct`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${Vi({property:"slottedBreadcrumbItems",filter:da()})}
            ></slot>
        </div>
    </template>
`,styles:(a,r)=>gt`
  ${jn("inline-block")} :host {
    box-sizing: border-box;
    ${Pi};
  }

  .list {
    display: flex;
  }
`}),ih=Bu.compose({baseName:"breadcrumb-item",template:(a,r)=>Ct`
    <div role="listitem" class="listitem" part="listitem">
        ${ji(t=>t.href&&t.href.length>0,Ct`
                ${Yd(0,r)}
            `)}
        ${ji(t=>!t.href,Ct`
                ${So(0,r)}
                <slot></slot>
                ${Pr(0,r)}
            `)}
        ${ji(t=>t.separator,Ct`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${r.separator||""}</slot>
                </span>
            `)}
    </div>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")} :host {
      background: transparent;
      color: ${T.CHi};
      fill: currentcolor;
      box-sizing: border-box;
      ${Pi};
      min-width: calc(${kn} * 1px);
      border-radius: calc(${T.UWU} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${T.QPb};
    }

    .control:active {
      color: ${T.Ttg};
    }

    .control:${nn} {
      ${Al}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${T.CHi};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors(An(gt`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${_e.ButtonFace};
          color: ${_e.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${_e.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${_e.ButtonFace};
          color: ${_e.LinkText};
        }
        :host([href]) .control:hover {
          background: ${_e.LinkText};
          color: ${_e.HighlightText};
          fill: currentcolor;
        }
        .control:${nn} {
          outline-color: ${_e.LinkText};
        }
      `)),shadowOptions:{delegatesFocus:!0},separator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '}),fa="form-associated-proxy",am="ElementInternals",rh=am in window&&"setFormValue"in window[am].prototype,lm=new WeakMap;function Qa(a){const r=class extends a{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return rh}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),c=t?s.concat(Array.from(t)):s;return Object.freeze(c)}return Zs.ow}valueChanged(t,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),xn.SO.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),xn.SO.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!rh)return null;let t=lm.get(this);return t||(t=this.attachInternals(),lm.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,s,c){this.elementInternals?this.elementInternals.setValidity(t,s,c):"string"==typeof s&&this.proxy.setCustomValidity(s)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",fa),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",fa)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,s){this.elementInternals&&this.elementInternals.setFormValue(t,s||t)}_keypressHandler(t){if(t.key===Ia&&this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s?.click()}}stopPropagation(t){t.stopPropagation()}};return(0,z.Lj)({mode:"boolean"})(r.prototype,"disabled"),(0,z.Lj)({mode:"fromView",attribute:"value"})(r.prototype,"initialValue"),(0,z.Lj)({attribute:"current-value"})(r.prototype,"currentValue"),(0,z.Lj)(r.prototype,"name"),(0,z.Lj)({mode:"boolean"})(r.prototype,"required"),(0,Ze.LO)(r.prototype,"value"),r}function Wf(a){class r extends(Qa(a)){}class t extends r{constructor(...c){super(c),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(c,h){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==c&&this.$emit("change"),this.validate()}currentCheckedChanged(c,h){this.checked=this.currentChecked}updateForm(){const c=this.checked?this.value:null;this.setFormValue(c,c)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return(0,z.Lj)({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),(0,z.Lj)({attribute:"current-checked",converter:z.bw})(t.prototype,"currentChecked"),(0,Ze.LO)(t.prototype,"defaultChecked"),(0,Ze.LO)(t.prototype,"checked"),t}class cm extends Dn{}class e0 extends(Qa(cm)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Vu=(()=>{class a extends e0{constructor(){super(...arguments),this.handleClick=t=>{var s;this.disabled&&(null===(s=this.defaultSlottedContent)||void 0===s?void 0:s.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&null!==(t=this.$fastController.definition.shadowOptions)&&void 0!==t&&t.delegatesFocus&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,s){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===s&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===s&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const s=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);s&&s.forEach(c=>{c.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const s=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);s&&s.forEach(c=>{c.removeEventListener("click",this.handleClick)})}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"autofocus",void 0),(0,J.gn)([(0,z.Lj)({attribute:"form"})],a.prototype,"formId",void 0),(0,J.gn)([z.Lj],a.prototype,"formaction",void 0),(0,J.gn)([z.Lj],a.prototype,"formenctype",void 0),(0,J.gn)([z.Lj],a.prototype,"formmethod",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"formnovalidate",void 0),(0,J.gn)([z.Lj],a.prototype,"formtarget",void 0),(0,J.gn)([z.Lj],a.prototype,"type",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedContent",void 0),a})(),um=(()=>{class a{}return(0,J.gn)([(0,z.Lj)({attribute:"aria-expanded"})],a.prototype,"ariaExpanded",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-pressed"})],a.prototype,"ariaPressed",void 0),a})();Ri(um,Ka),Ri(Vu,oo,um);const _s="not-allowed",Xa=":not([disabled])",Ma="[disabled]",dm=(()=>{class a extends Vu{appearanceChanged(t,s){t!==s&&(this.classList.add(s),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(s=>s.nodeType===Node.ELEMENT_NODE);1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}return(0,At.gn)([z.Lj],a.prototype,"appearance",void 0),a})().compose({baseName:"button",baseClass:Vu,template:(a,r)=>Ct`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Wn("control")}
    >
        ${So(0,r)}
        <span class="content" part="content">
            <slot ${Vi("defaultSlottedContent")}></slot>
        </span>
        ${Pr(0,r)}
    </button>
`,styles:(a,r)=>gt`
    :host(${Xa}) .control {
      cursor: pointer;
    }

    :host(${Ma}) .control {
      cursor: ${_s};
    }

    @media (forced-colors: none) {
      :host(${Ma}) .control {
        opacity: ${T.VFZ};
      }
    }

    ${Mg(0,0,0,Ma)}
  `.withBehaviors(Ui("neutral",qa(0,0,Xa,Ma)),Ui("accent",kg(0,0,Xa,Ma)),Ui("lightweight",Kd(0,0,Xa,Ma)),Ui("outline",kf(0,0,Xa,Ma)),Ui("stealth",Of(0,0,Xa,Ma))),shadowOptions:{delegatesFocus:!0}});class n0{constructor(r){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,r)for(const t in r){const s=r[t];"date"===t?this.date=this.getDateObject(s):this[t]=s}}getDateObject(r){if("string"==typeof r){const t=r.split(/[/-]/);return t.length<3?new Date:new Date(parseInt(t[2],10),parseInt(t[0],10)-1,parseInt(t[1],10))}if("day"in r&&"month"in r&&"year"in r){const{day:t,month:s,year:c}=r;return new Date(c,s-1,t)}return r}getDate(r=this.date,t={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const c=this.getDateObject(r);if(!c.getTime())return"";const h=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},t);return new Intl.DateTimeFormat(s,h).format(c)}getDay(r=this.date.getDate(),t=this.dayFormat,s=this.locale){return this.getDate({month:1,day:r,year:2020},{day:t},s)}getMonth(r=this.date.getMonth()+1,t=this.monthFormat,s=this.locale){return this.getDate({month:r,day:2,year:2020},{month:t},s)}getYear(r=this.date.getFullYear(),t=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:r},{year:t},s)}getWeekday(r=0,t=this.weekdayFormat,s=this.locale){return this.getDate(`1-${r+1}-2017`,{weekday:t},s)}getWeekdays(r=this.weekdayFormat,t=this.locale){return Array(7).fill(null).map((s,c)=>this.getWeekday(c,r,t))}}let r0=(()=>{class a extends Dn{constructor(){super(...arguments),this.dateFormatter=new n0,this.readonly=!1,this.locale="en-US",this.month=(new Date).getMonth()+1,this.year=(new Date).getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,s=this.year){const c=Y=>new Date(Y.getFullYear(),Y.getMonth(),1).getDay(),h=Y=>{const ye=new Date(Y.getFullYear(),Y.getMonth()+1,1);return new Date(ye.getTime()-this.oneDayInMs).getDate()},E=new Date(s,t-1),k=new Date(s,t),$=new Date(s,t-2);return{length:h(E),month:t,start:c(E),year:s,previous:{length:h($),month:$.getMonth()+1,start:c($),year:$.getFullYear()},next:{length:h(k),month:k.getMonth()+1,start:c(k),year:k.getFullYear()}}}getDays(t=this.getMonthInfo(),s=this.minWeeks){s=s>10?10:s;const{start:c,length:h,previous:E,next:k}=t,$=[];let Y=1-c;for(;Y<h+1||$.length<s||$[$.length-1].length%7!=0;){const{month:ye,year:ke}=Y<1?E:Y>h?k:t,lt=Y<1?E.length+Y:Y>h?Y-h:Y,bt=`${ye}-${lt}-${ke}`,yn={day:lt,month:ye,year:ke,disabled:this.dateInString(bt,this.disabledDates),selected:this.dateInString(bt,this.selectedDates)},Ln=$[$.length-1];0===$.length||Ln.length%7==0?$.push([yn]):Ln.push(yn),Y++}return $}dateInString(t,s){const c=s.split(",").map(h=>h.trim());return t="string"==typeof t?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,c.some(h=>h===t)}getDayClassNames(t,s){const{day:c,month:h,year:E,disabled:k,selected:$}=t;return["day",s===`${h}-${c}-${E}`&&"today",this.month!==h&&"inactive",k&&"disabled",$&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(s=>({text:s}));if("long"!==this.weekdayFormat){const s=this.dateFormatter.getWeekdays("long");t.forEach((c,h)=>{c.abbr=s[h]})}return t}handleDateSelect(t,s){this.$emit("dateselected",s)}handleKeydown(t,s){return t.key===Ia&&this.handleDateSelect(t,s),!0}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"readonly",void 0),(0,J.gn)([z.Lj],a.prototype,"locale",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"month",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"year",void 0),(0,J.gn)([(0,z.Lj)({attribute:"day-format",mode:"fromView"})],a.prototype,"dayFormat",void 0),(0,J.gn)([(0,z.Lj)({attribute:"weekday-format",mode:"fromView"})],a.prototype,"weekdayFormat",void 0),(0,J.gn)([(0,z.Lj)({attribute:"month-format",mode:"fromView"})],a.prototype,"monthFormat",void 0),(0,J.gn)([(0,z.Lj)({attribute:"year-format",mode:"fromView"})],a.prototype,"yearFormat",void 0),(0,J.gn)([(0,z.Lj)({attribute:"min-weeks",converter:z.Id})],a.prototype,"minWeeks",void 0),(0,J.gn)([(0,z.Lj)({attribute:"disabled-dates"})],a.prototype,"disabledDates",void 0),(0,J.gn)([(0,z.Lj)({attribute:"selected-dates"})],a.prototype,"selectedDates",void 0),a})();function qs(a,r,t){return{index:a,removed:r,addedCount:t}}const o0=0,s0=1,$l=2,Gf=3;function u0(a,r,t,s){return r<t||s<a?-1:r===t||s===a?0:a<t?r<s?r-t:s-t:s<r?s-a:r-a}function hm(a,r,t,s,c,h){let E=0,k=0;const $=Math.min(t-r,h-c);if(0===r&&0===c&&(E=function l0(a,r,t){for(let s=0;s<t;++s)if(a[s]!==r[s])return s;return t}(a,s,$)),t===a.length&&h===s.length&&(k=function c0(a,r,t){let s=a.length,c=r.length,h=0;for(;h<t&&a[--s]===r[--c];)h++;return h}(a,s,$-E)),c+=E,h-=k,(t-=k)-(r+=E)==0&&h-c==0)return Zs.ow;if(r===t){const _t=qs(r,[],0);for(;c<h;)_t.removed.push(s[c++]);return[_t]}if(c===h)return[qs(r,[],t-r)];const Y=function ND(a){let r=a.length-1,t=a[0].length-1,s=a[r][t];const c=[];for(;r>0||t>0;){if(0===r){c.push($l),t--;continue}if(0===t){c.push(Gf),r--;continue}const h=a[r-1][t-1],E=a[r-1][t],k=a[r][t-1];let $;$=E<k?E<h?E:h:k<h?k:h,$===h?(h===s?c.push(o0):(c.push(s0),s=h),r--,t--):$===E?(c.push(Gf),r--,s=E):(c.push($l),t--,s=k)}return c.reverse(),c}(function a0(a,r,t,s,c,h){const E=h-c+1,k=t-r+1,$=new Array(E);let Y,ye;for(let ke=0;ke<E;++ke)$[ke]=new Array(k),$[ke][0]=ke;for(let ke=0;ke<k;++ke)$[0][ke]=ke;for(let ke=1;ke<E;++ke)for(let lt=1;lt<k;++lt)a[r+lt-1]===s[c+ke-1]?$[ke][lt]=$[ke-1][lt-1]:(Y=$[ke-1][lt]+1,ye=$[ke][lt-1]+1,$[ke][lt]=Y<ye?Y:ye);return $}(a,r,t,s,c,h)),ye=[];let ke,lt=r,bt=c;for(let _t=0;_t<Y.length;++_t)switch(Y[_t]){case o0:void 0!==ke&&(ye.push(ke),ke=void 0),lt++,bt++;break;case s0:void 0===ke&&(ke=qs(lt,[],0)),ke.addedCount++,lt++,ke.removed.push(s[bt]),bt++;break;case $l:void 0===ke&&(ke=qs(lt,[],0)),ke.addedCount++,lt++;break;case Gf:void 0===ke&&(ke=qs(lt,[],0)),ke.removed.push(s[bt]),bt++}return void 0!==ke&&ye.push(ke),ye}const fm=Array.prototype.push;function pm(a,r,t,s){const c=qs(r,t,s);let h=!1,E=0;for(let k=0;k<a.length;k++){const $=a[k];if($.index+=E,h)continue;const Y=u0(c.index,c.index+c.removed.length,$.index,$.index+$.addedCount);if(Y>=0)if(a.splice(k,1),k--,E-=$.addedCount-$.removed.length,c.addedCount+=$.addedCount-Y,c.addedCount||c.removed.length+$.removed.length-Y){let ke=$.removed;if(c.index<$.index){const lt=c.removed.slice(0,$.index-c.index);fm.apply(lt,ke),ke=lt}if(c.index+c.removed.length>$.index+$.addedCount){const lt=c.removed.slice($.index+$.addedCount-c.index);fm.apply(ke,lt)}c.removed=ke,$.index<c.index&&(c.index=$.index)}else h=!0;else if(c.index<$.index){h=!0,a.splice(k,0,c),k++;const ye=c.addedCount-c.removed.length;$.index+=ye,E+=ye}}h||a.push(c)}var d0=M(472);let sh=!1;function Ls(a,r){let t=a.index;const s=r.length;return t>s?t=s-a.addedCount:t<0&&(t=s+a.removed.length+t-a.addedCount),t<0&&(t=0),a.index=t,a}class mm extends d0.q{constructor(r){super(r),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(r,"$fastController",{value:this,enumerable:!1})}subscribe(r){this.flush(),super.subscribe(r)}addSplice(r){void 0===this.splices?this.splices=[r]:this.splices.push(r),this.needsQueue&&(this.needsQueue=!1,xn.SO.queueUpdate(this))}reset(r){this.oldCollection=r,this.needsQueue&&(this.needsQueue=!1,xn.SO.queueUpdate(this))}flush(){const r=this.splices,t=this.oldCollection;if(void 0===r&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=void 0===t?function Nl(a,r){let t=[];const s=function gm(a){const r=[];for(let t=0,s=a.length;t<s;t++){const c=a[t];pm(r,c.index,c.removed,c.addedCount)}return r}(r);for(let c=0,h=s.length;c<h;++c){const E=s[c];1!==E.addedCount||1!==E.removed.length?t=t.concat(hm(a,E.index,E.index+E.addedCount,E.removed,0,E.removed.length)):E.removed[0]!==a[E.index]&&t.push(E)}return t}(this.source,r):hm(this.source,0,this.source.length,t,0,t.length);this.notify(s)}}const f0=Object.freeze({positioning:!1,recycle:!0});function _r(a,r,t,s){a.bind(r[t],s)}function p0(a,r,t,s){const c=Object.create(s);c.index=t,c.length=r.length,a.bind(r[t],c)}class Zf{constructor(r,t,s,c,h,E){this.location=r,this.itemsBinding=t,this.templateBinding=c,this.options=E,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=_r,this.itemsBindingObserver=Ze.y$.binding(t,this,s),this.templateBindingObserver=Ze.y$.binding(c,this,h),E.positioning&&(this.bindView=p0)}bind(r,t){this.source=r,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=r,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(r,this.originalContext),this.template=this.templateBindingObserver.observe(r,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(r,t){r===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):r===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(r=!1){if(!this.items)return void(this.items=Zs.ow);const t=this.itemsObserver,s=this.itemsObserver=Ze.y$.getNotifier(this.items),c=t!==s;c&&null!==t&&t.unsubscribe(this),(c||r)&&s.subscribe(this)}updateViews(r){const t=this.childContext,s=this.views,c=this.bindView,h=this.items,E=this.template,k=this.options.recycle,$=[];let Y=0,ye=0;for(let ke=0,lt=r.length;ke<lt;++ke){const bt=r[ke];let Rt=0,yn=bt.index;const Ln=yn+bt.addedCount,ai=s.splice(bt.index,bt.removed.length),Qr=ye=$.length+ai.length;for(;yn<Ln;++yn){const dr=s[yn],il=dr?dr.firstChild:this.location;let hr;k&&ye>0?(Rt<=Qr&&ai.length>0?(hr=ai[Rt],Rt++):(hr=$[Y],Y++),ye--):hr=E.create(),s.splice(yn,0,hr),c(hr,h,yn,t),hr.insertBefore(il)}ai[Rt]&&$.push(...ai.slice(Rt))}for(let ke=Y,lt=$.length;ke<lt;++ke)$[ke].dispose();if(this.options.positioning)for(let ke=0,lt=s.length;ke<lt;++ke){const bt=s[ke].context;bt.length=lt,bt.index=ke}}refreshAllViews(r=!1){const t=this.items,s=this.childContext,c=this.template,h=this.location,E=this.bindView;let k=t.length,$=this.views,Y=$.length;if((0===k||r||!this.options.recycle)&&(Cg.disposeContiguousBatch($),Y=0),0===Y){this.views=$=new Array(k);for(let ye=0;ye<k;++ye){const ke=c.create();E(ke,t,ye,s),$[ye]=ke,ke.insertBefore(h)}}else{let ye=0;for(;ye<k;++ye)if(ye<Y)E($[ye],t,ye,s);else{const lt=c.create();E(lt,t,ye,s),$.push(lt),lt.insertBefore(h)}const ke=$.splice(ye,Y-ye);for(ye=0,k=ke.length;ye<k;++ye)ke[ye].dispose()}}unbindAllViews(){const r=this.views;for(let t=0,s=r.length;t<s;++t)r[t].unbind()}}class Yf extends Tl{constructor(r,t,s){super(),this.itemsBinding=r,this.templateBinding=t,this.options=s,this.createPlaceholder=xn.SO.createBlockPlaceholder,function h0(){if(sh)return;sh=!0,Ze.y$.setArrayObserverFactory($=>new mm($));const a=Array.prototype;if(a.$fastPatch)return;Reflect.defineProperty(a,"$fastPatch",{value:1,enumerable:!1});const r=a.pop,t=a.push,s=a.reverse,c=a.shift,h=a.sort,E=a.splice,k=a.unshift;a.pop=function(){const $=this.length>0,Y=r.apply(this,arguments),ye=this.$fastController;return void 0!==ye&&$&&ye.addSplice(qs(this.length,[Y],0)),Y},a.push=function(){const $=t.apply(this,arguments),Y=this.$fastController;return void 0!==Y&&Y.addSplice(Ls(qs(this.length-arguments.length,[],arguments.length),this)),$},a.reverse=function(){let $;const Y=this.$fastController;void 0!==Y&&(Y.flush(),$=this.slice());const ye=s.apply(this,arguments);return void 0!==Y&&Y.reset($),ye},a.shift=function(){const $=this.length>0,Y=c.apply(this,arguments),ye=this.$fastController;return void 0!==ye&&$&&ye.addSplice(qs(0,[Y],0)),Y},a.sort=function(){let $;const Y=this.$fastController;void 0!==Y&&(Y.flush(),$=this.slice());const ye=h.apply(this,arguments);return void 0!==Y&&Y.reset($),ye},a.splice=function(){const $=E.apply(this,arguments),Y=this.$fastController;return void 0!==Y&&Y.addSplice(Ls(qs(+arguments[0],$,arguments.length>2?arguments.length-2:0),this)),$},a.unshift=function(){const $=k.apply(this,arguments),Y=this.$fastController;return void 0!==Y&&Y.addSplice(Ls(qs(0,[],arguments.length),this)),$}}(),this.isItemsBindingVolatile=Ze.y$.isVolatileBinding(r),this.isTemplateBindingVolatile=Ze.y$.isVolatileBinding(t)}createBehavior(r){return new Zf(r,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Mc(a,r,t=f0){return new Yf(a,"function"==typeof r?r:()=>r,Object.assign(Object.assign({},f0),t))}const g0=Ct`
    <template>
        ${a=>null===a.rowData||null===a.columnDefinition||null===a.columnDefinition.columnDataKey?null:a.rowData[a.columnDefinition.columnDataKey]}
    </template>
`,vm=Ct`
    <template>
        ${a=>null===a.columnDefinition?null:void 0===a.columnDefinition.title?a.columnDefinition.columnDataKey:a.columnDefinition.title}
    </template>
`;let Ac=(()=>{class a extends Dn{constructor(){super(...arguments),this.cellType="default",this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,s){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener($f,this.handleFocusin),this.addEventListener(Ic,this.handleFocusout),this.addEventListener(Tc,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(t=this.columnDefinition)||void 0===t?void 0:t.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener($f,this.handleFocusin),this.removeEventListener(Ic,this.handleFocusout),this.removeEventListener(Tc,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){if(this.isActiveCell=!0,"columnheader"===this.cellType){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const s=this.columnDefinition.headerCellFocusTargetCallback(this);null!==s&&s.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const s=this.columnDefinition.cellFocusTargetCallback(this);null!==s&&s.focus()}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||null===this.columnDefinition||"default"===this.cellType&&!0!==this.columnDefinition.cellInternalFocusQueue||"columnheader"===this.cellType&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(t.key){case Ia:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if("columnheader"===this.cellType){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const s=this.columnDefinition.headerCellFocusTargetCallback(this);null!==s&&s.focus(),t.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const s=this.columnDefinition.cellFocusTargetCallback(this);null!==s&&s.focus(),t.preventDefault()}break;case Il:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case"columnheader":this.customCellView=void 0!==this.columnDefinition.headerCellTemplate?this.columnDefinition.headerCellTemplate.render(this,this):vm.render(this,this);break;case void 0:case"rowheader":case"default":this.customCellView=void 0!==this.columnDefinition.cellTemplate?this.columnDefinition.cellTemplate.render(this,this):g0.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}return(0,J.gn)([(0,z.Lj)({attribute:"cell-type"})],a.prototype,"cellType",void 0),(0,J.gn)([(0,z.Lj)({attribute:"grid-column"})],a.prototype,"gridColumn",void 0),(0,J.gn)([Ze.LO],a.prototype,"rowData",void 0),(0,J.gn)([Ze.LO],a.prototype,"columnDefinition",void 0),a})(),Hu=(()=>{class a extends Dn{constructor(){super(...arguments),this.rowType="default",this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Yf(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ic,this.handleFocusout),this.addEventListener(Tc,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ic,this.handleFocusout),this.removeEventListener(Tc,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let s=0;switch(t.key){case xa:s=Math.max(0,this.focusColumnIndex-1),this.cellElements[s].focus(),t.preventDefault();break;case Ya:s=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[s].focus(),t.preventDefault();break;case ua:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case Ys:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate="default"===this.rowType&&void 0!==this.cellItemTemplate?this.cellItemTemplate:"default"===this.rowType&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}return(0,J.gn)([(0,z.Lj)({attribute:"grid-template-columns"})],a.prototype,"gridTemplateColumns",void 0),(0,J.gn)([(0,z.Lj)({attribute:"row-type"})],a.prototype,"rowType",void 0),(0,J.gn)([Ze.LO],a.prototype,"rowData",void 0),(0,J.gn)([Ze.LO],a.prototype,"columnDefinitions",void 0),(0,J.gn)([Ze.LO],a.prototype,"cellItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"headerCellItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"rowIndex",void 0),(0,J.gn)([Ze.LO],a.prototype,"isActiveRow",void 0),(0,J.gn)([Ze.LO],a.prototype,"activeCellItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultCellItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultHeaderCellItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"cellElements",void 0),a})(),Ja=(()=>{class a extends Dn{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,s,c)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const h=Math.max(0,Math.min(this.rowElements.length-1,t)),k=this.rowElements[h].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),Y=k[Math.max(0,Math.min(k.length-1,s))];c&&this.scrollHeight!==this.clientHeight&&(h<this.focusRowIndex&&this.scrollTop>0||h>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&Y.scrollIntoView({block:"center",inline:"center"}),Y.focus()},this.onChildListChange=(t,s)=>{t&&t.length&&(t.forEach(c=>{c.addedNodes.forEach(h=>{1===h.nodeType&&"row"===h.getAttribute("role")&&(h.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,xn.SO.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;void 0===t&&(""===this.generatedGridTemplateColumns&&this.rowElements.length>0&&(this.generatedGridTemplateColumns=new Array(this.rowElements[0].cellElements.length).fill("1fr").join(" ")),t=this.generatedGridTemplateColumns),this.rowElements.forEach((s,c)=>{const h=s;h.rowIndex=c,h.gridTemplateColumns=t,this.columnDefinitionsStale&&(h.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let s="";return t.forEach(c=>{s=`${s}${""===s?"":" "}1fr`}),s}noTabbingChanged(){this.$fastController.isConnected&&this.setAttribute("tabIndex",this.noTabbing||this.contains(document.activeElement)||this===document.activeElement?"-1":"0")}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=a.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=a.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Yf(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener("focus",this.handleFocus),this.addEventListener(Tc,this.handleKeydown),this.addEventListener(Ic,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),xn.SO.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener("focus",this.handleFocus),this.removeEventListener(Tc,this.handleKeydown),this.removeEventListener(Ic,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const s=t.target;this.focusRowIndex=this.rowElements.indexOf(s),this.focusColumnIndex=s.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(null===t.relatedTarget||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let s;const c=this.rowElements.length-1,h=this.offsetHeight+this.scrollTop,E=this.rowElements[c];switch(t.key){case bs:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ys:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(t.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(s=this.focusRowIndex-1;s>=0;s--){const k=this.rowElements[s];if(k.offsetTop<this.scrollTop){this.scrollTop=k.offsetTop+k.clientHeight-this.clientHeight;break}}this.focusOnCell(s,this.focusColumnIndex,!1);break;case"PageDown":if(t.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=c||E.offsetTop+E.offsetHeight<=h)return void this.focusOnCell(c,this.focusColumnIndex,!1);for(s=this.focusRowIndex+1;s<=c;s++){const k=this.rowElements[s];if(k.offsetTop+k.offsetHeight>h){let $=0;"sticky"===this.generateHeader&&null!==this.generatedHeader&&($=this.generatedHeader.clientHeight),this.scrollTop=k.offsetTop-$;break}}this.focusOnCell(s,this.focusColumnIndex,!1);break;case ua:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case Ys:t.ctrlKey&&null!==this.columnDefinitions&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,xn.SO.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);return this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType="sticky"===this.generateHeader?"sticky-header":"header",void((null!==this.firstChild||null!==this.rowsPlaceholder)&&this.insertBefore(t,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}return a.generateColumns=r=>Object.getOwnPropertyNames(r).map((t,s)=>({columnDataKey:t,gridColumn:`${s}`})),(0,J.gn)([(0,z.Lj)({attribute:"no-tabbing",mode:"boolean"})],a.prototype,"noTabbing",void 0),(0,J.gn)([(0,z.Lj)({attribute:"generate-header"})],a.prototype,"generateHeader",void 0),(0,J.gn)([(0,z.Lj)({attribute:"grid-template-columns"})],a.prototype,"gridTemplateColumns",void 0),(0,J.gn)([Ze.LO],a.prototype,"rowsData",void 0),(0,J.gn)([Ze.LO],a.prototype,"columnDefinitions",void 0),(0,J.gn)([Ze.LO],a.prototype,"rowItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"cellItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"headerCellItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"focusRowIndex",void 0),(0,J.gn)([Ze.LO],a.prototype,"focusColumnIndex",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultRowItemTemplate",void 0),(0,J.gn)([Ze.LO],a.prototype,"rowElementTag",void 0),(0,J.gn)([Ze.LO],a.prototype,"rowElements",void 0),a})();const ym=Ct`
    <div
        class="title"
        part="title"
        aria-label="${a=>a.dateFormatter.getDate(`${a.month}-2-${a.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${a=>a.dateFormatter.getMonth(a.month)}
        </span>
        <span part="year">${a=>a.dateFormatter.getYear(a.year)}</span>
    </div>
`,_m=(a,r)=>{const t=a.tagFor(Ja),s=a.tagFor(Hu);return Ct`
    <${t} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Mc(c=>c.getWeekdayText(),(a=>{const r=a.tagFor(Ac);return Ct`
        <${r}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(t,s)=>s.index+1}"
            abbr="${t=>t.abbr}"
        >
            ${t=>t.text}
        </${r}>
    `})(a),{positioning:!0})}
        </${s}>
        ${Mc(c=>c.getDays(),((a,r)=>{const t=a.tagFor(Hu);return Ct`
        <${t}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Mc(s=>s,((a,r)=>{const t=a.tagFor(Ac);return Ct`
        <${t}
            class="${(s,c)=>c.parentContext.parent.getDayClassNames(s,r)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(s,c)=>c.index+1}"
            @click="${(s,c)=>c.parentContext.parent.handleDateSelect(c.event,s)}"
            @keydown="${(s,c)=>c.parentContext.parent.handleKeydown(c.event,s)}"
            aria-label="${(s,c)=>c.parentContext.parent.dateFormatter.getDate(`${s.month}-${s.day}-${s.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${s=>r===`${s.month}-${s.day}-${s.year}`?"today":"date"}"
            >
                ${(s,c)=>c.parentContext.parent.dateFormatter.getDay(s.day)}
            </div>
            <slot name="${s=>s.month}-${s=>s.day}-${s=>s.year}"></slot>
        </${t}>
    `})(a,r),{positioning:!0})}
        </${t}>
    `})(a,r))}
    </${t}>
`};class Rc{constructor(r,t){this.cache=new WeakMap,this.ltr=r,this.rtl=t}bind(r){this.attach(r)}unbind(r){const t=this.cache.get(r);t&&T.o7V.unsubscribe(t)}attach(r){const t=this.cache.get(r)||new v0(this.ltr,this.rtl,r),s=T.o7V.getValueFor(r);T.o7V.subscribe(t),t.attach(s),this.cache.set(r,t)}}class v0{constructor(r,t,s){this.ltr=r,this.rtl=t,this.source=s,this.attached=null}handleChange({token:t}){this.attach(t.getValueFor(this.source))}attach(r){this.attached!==this[r]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[r],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const Kf=gt`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,y0=gt`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,Dm=(()=>{class a extends r0{constructor(){super(...arguments),this.readonly=!0}}return(0,At.gn)([(0,z.Lj)({converter:z.bw})],a.prototype,"readonly",void 0),a})().compose({baseName:"calendar",template:(a,r)=>{var t;const s=new Date,c=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return Ct`
        <template>
            ${Gd}
            ${r.title instanceof Function?r.title(a,r):null!==(t=r.title)&&void 0!==t?t:""}
            <slot></slot>
            ${ji(h=>h.readonly,(a=>Ct`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${Mc(r=>r.getWeekdayText(),Ct`
                        <div class="week-day" part="week-day" abbr="${r=>r.abbr}">
                            ${r=>r.text}
                        </div>
                    `)}
            </div>
            ${Mc(r=>r.getDays(),Ct`
                    <div class="week">
                        ${Mc(r=>r,Ct`
                                <div
                                    class="${(r,t)=>t.parentContext.parent.getDayClassNames(r,a)}"
                                    part="day"
                                    aria-label="${(r,t)=>t.parentContext.parent.dateFormatter.getDate(`${r.month}-${r.day}-${r.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${r=>a===`${r.month}-${r.day}-${r.year}`?"today":"date"}"
                                    >
                                        ${(r,t)=>t.parentContext.parent.dateFormatter.getDay(r.day)}
                                    </div>
                                    <slot
                                        name="${r=>r.month}-${r=>r.day}-${r=>r.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `)(c),_m(a,c))}
            ${If}
        </template>
    `},styles:(a,r)=>gt`
${jn("inline-block")} :host {
  --calendar-cell-size: calc((${T.nfe} + 2 + ${T.hVk}) * ${T._5n} * 1px);
  --calendar-gap: 2px;
  ${Pi}
  color: ${T.CHi};
}

.title {
  padding: calc(${T._5n} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${T.Han} * 1px) solid transparent;
  border-radius: calc(${T.UWU} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${T.Q5n};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${T.Han} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${T.Avx};
  border: 1px solid ${T.Avx};
  background: ${T.IfY};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${T.Han} + ${T.UWU}) * 1px);
  margin-inline-start: calc((${T.UWU} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${T.w41};
}

.today .date {
  color: ${T.w41};
  background: ${T.Avx};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(An(gt`
          .day.selected {
              color: ${_e.Highlight};
          }

          .today .date {
              background: ${_e.Highlight};
              color: ${_e.HighlightText};
          }
      `),new Rc(Kf,y0)),title:ym});class Em extends Dn{}var w0=M(6867),qf=M(6909),Qf=M(1134),_0=M(5917);const Bl=Ai.DesignToken.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(a,r,t)=>{let s=.12,c=.14;return r>16&&(s=.2,c=.24),`0 0 2px rgba(0, 0, 0, ${s}), 0 calc(${r} * 0.5px) calc((${r} * 1px)) rgba(0, 0, 0, ${c})`}}),C0=Ai.DesignToken.create("elevation-shadow-card-rest-size").withDefault(4),Sm=Ai.DesignToken.create("elevation-shadow-card-hover-size").withDefault(8),xm=Ai.DesignToken.create("elevation-shadow-card-active-size").withDefault(0),D0=Ai.DesignToken.create("elevation-shadow-card-focus-size").withDefault(8),ch=Ai.DesignToken.create("elevation-shadow-card-rest").withDefault(a=>Bl.getValueFor(a).evaluate(a,C0.getValueFor(a))),E0=(Ai.DesignToken.create("elevation-shadow-card-hover").withDefault(a=>Bl.getValueFor(a).evaluate(a,Sm.getValueFor(a))),Ai.DesignToken.create("elevation-shadow-card-active").withDefault(a=>Bl.getValueFor(a).evaluate(a,xm.getValueFor(a))),Ai.DesignToken.create("elevation-shadow-card-focus").withDefault(a=>Bl.getValueFor(a).evaluate(a,D0.getValueFor(a))),Ai.DesignToken.create("elevation-shadow-tooltip-size").withDefault(16)),S0=Ai.DesignToken.create("elevation-shadow-tooltip").withDefault(a=>Bl.getValueFor(a).evaluate(a,E0.getValueFor(a))),x0=Ai.DesignToken.create("elevation-shadow-flyout-size").withDefault(32),Im=Ai.DesignToken.create("elevation-shadow-flyout").withDefault(a=>Bl.getValueFor(a).evaluate(a,x0.getValueFor(a))),Tm=Ai.DesignToken.create("elevation-shadow-dialog-size").withDefault(128),Mm=Ai.DesignToken.create("elevation-shadow-dialog").withDefault(a=>Bl.getValueFor(a).evaluate(a,Tm.getValueFor(a))),km=(()=>{class a extends Em{cardFillColorChanged(t,s){if(s){const c=(0,qf.in)(s);null!==c&&(this.neutralPaletteSource=s,T.IfY.setValueFor(this,Qf.w.create(c.r,c.g,c.b)))}}neutralPaletteSourceChanged(t,s){if(s){const c=(0,qf.in)(s),h=Qf.w.create(c.r,c.g,c.b);T.yvm.setValueFor(this,_0.v.create(h))}}handleChange(t,s){this.cardFillColor||T.IfY.setValueFor(this,c=>T.abR.getValueFor(c).evaluate(c,T.IfY.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=(0,w0.T)(this);if(t){const s=Ze.y$.getNotifier(t);s.subscribe(this,"fillColor"),s.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}return(0,At.gn)([(0,z.Lj)({attribute:"card-fill-color",mode:"fromView"})],a.prototype,"cardFillColor",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-palette-source",mode:"fromView"})],a.prototype,"neutralPaletteSource",void 0),a})().compose({baseName:"card",baseClass:Em,template:(a,r)=>Ct`
    <slot></slot>
`,styles:(a,r)=>gt`
    ${jn("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${T.IfY};
      color: ${T.CHi};
      border: calc(${T.Han} * 1px) solid ${T.Ja_};
      border-radius: calc(${T.rSr} * 1px);
      box-shadow: ${ch};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(An(gt`
        :host {
          background: ${_e.Canvas};
          color: ${_e.CanvasText};
        }
      `))});class pa extends Dn{}class zu extends(Wf(pa)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const $s=(()=>{class a extends zu{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{this.readOnly||" "!==t.key||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedNodes",void 0),(0,J.gn)([Ze.LO],a.prototype,"indeterminate",void 0),a})().compose({baseName:"checkbox",template:(a,r)=>Ct`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${r.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${r.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Vi("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${kn} / 2 + ${T._5n}) * 1px);
      height: calc((${kn} / 2 + ${T._5n}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${T.UWU} * 1px);
      border: calc(${T.Han} * 1px) solid ${T.rU8};
      background: ${T.pB6};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Pi}
      color: ${T.CHi};
      ${""} padding-inline-start: calc(${T._5n} * 2px + 2px);
      margin-inline-end: calc(${T._5n} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${T.CHi};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${T.w41};
    }

    :host(:not(.disabled):hover) .control {
      background: ${T.vFq};
      border-color: ${T.gKw};
    }

    :host(:not(.disabled):active) .control {
      background: ${T.bWE};
      border-color: ${T.ekh};
    }

    :host(:${nn}) .control {
      background: ${T.W3V};
      ${Al}
    }

    :host(.checked) .control {
      background: ${T.Avx};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${T.OCG};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${T.UEO};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${_s};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${T.VFZ};
    }
  `.withBehaviors(An(gt`
        .control {
          border-color: ${_e.FieldText};
          background: ${_e.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${_e.Highlight};
          background: ${_e.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${_e.FieldText};
        }
        :host(:${nn}) .control {
          forced-color-adjust: none;
          outline-color: ${_e.FieldText};
          background: ${_e.Field};
          border-color: ${_e.Highlight};
        }
        :host(.checked) .control {
          background: ${_e.Highlight};
          border-color: ${_e.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${_e.HighlightText};
          border-color: ${_e.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${_e.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${_e.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${_e.GrayText};
          background: ${_e.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${_e.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '});let Pc=0;function ga(a=""){return`${a}${Pc++}`}function jl(a){return Ou(a)&&("option"===a.getAttribute("role")||a instanceof HTMLOptionElement)}let dh=(()=>{class a extends Dn{constructor(t,s,c,h){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),s&&(this.initialValue=s),c&&(this.defaultSelected=c),h&&(this.selected=h),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,s){this.ariaChecked="boolean"!=typeof s?null:s?"true":"false"}contentChanged(t,s){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,s){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return null!==(t=this.value)&&void 0!==t?t:this.text}get text(){var t,s;return null!==(s=null===(t=this.textContent)||void 0===t?void 0:t.replace(/\s+/g," ").trim())&&void 0!==s?s:""}set value(t){const s=`${t??""}`;this._value=s,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=s),Ze.y$.notify(this,"value")}get value(){var t;return Ze.y$.track(this,"value"),null!==(t=this._value)&&void 0!==t?t:this.text}get form(){return this.proxy?this.proxy.form:null}}return(0,J.gn)([Ze.LO],a.prototype,"checked",void 0),(0,J.gn)([Ze.LO],a.prototype,"content",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSelected",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"disabled",void 0),(0,J.gn)([(0,z.Lj)({attribute:"selected",mode:"boolean"})],a.prototype,"selectedAttribute",void 0),(0,J.gn)([Ze.LO],a.prototype,"selected",void 0),(0,J.gn)([(0,z.Lj)({attribute:"value",mode:"fromView"})],a.prototype,"initialValue",void 0),a})(),Xf=(()=>{class a{}return(0,J.gn)([Ze.LO],a.prototype,"ariaChecked",void 0),(0,J.gn)([Ze.LO],a.prototype,"ariaPosInSet",void 0),(0,J.gn)([Ze.LO],a.prototype,"ariaSelected",void 0),(0,J.gn)([Ze.LO],a.prototype,"ariaSetSize",void 0),a})();Ri(Xf,Ka),Ri(dh,oo,Xf);let el=(()=>{class a extends Dn{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return null!==(t=this.selectedOptions[0])&&void 0!==t?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,s;return null!==(s=null===(t=this.options)||void 0===t?void 0:t.length)&&void 0!==s?s:0}get options(){return Ze.y$.track(this,"options"),this._options}set options(t){this._options=t,Ze.y$.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const s=t.target.closest("option,[role=option]");if(s&&!s.disabled)return this.selectedIndex=this.options.indexOf(s),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&null!==t&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),s=new RegExp(`^${t}`,"gi");return this.options.filter(c=>c.text.trim().match(s))}getSelectableIndex(t=this.selectedIndex,s){const c=t>s?-1:t<s?1:0,h=t+c;let E=null;switch(c){case-1:E=this.options.reduceRight((k,$,Y)=>!k&&!$.disabled&&Y<h?$:k,E);break;case 1:E=this.options.reduce((k,$,Y)=>!k&&!$.disabled&&Y>h?$:k,E)}return this.options.indexOf(E)}handleChange(t,s){"selected"===s&&(a.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions())}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,a.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const s=t.key;switch(s){case ua:t.shiftKey||(t.preventDefault(),this.selectFirstOption());break;case ys:t.shiftKey||(t.preventDefault(),this.selectNextOption());break;case bs:t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break;case Ys:t.preventDefault(),this.selectLastOption();break;case Hd:return this.focusAndScrollOptionIntoView(),!0;case Ia:case Il:return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===s.length&&this.handleTypeAhead(`${s}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,s){this.ariaMultiSelectable=s?"true":null}selectedIndexChanged(t,s){var c;if(this.hasSelectableOptions){if(null!==(c=this.options[this.selectedIndex])&&void 0!==c&&c.disabled&&"number"==typeof t){const h=this.getSelectableIndex(t,s),E=h>-1?h:t;return this.selectedIndex=E,void(s===E&&this.selectedIndexChanged(s,E))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(t,s){var c;const h=s.filter(a.slottedOptionFilter);null===(c=this.options)||void 0===c||c.forEach(E=>{const k=Ze.y$.getNotifier(E);k.unsubscribe(this,"selected"),E.selected=h.includes(E),k.subscribe(this,"selected")})}selectFirstOption(){var t,s;this.disabled||(this.selectedIndex=null!==(s=null===(t=this.options)||void 0===t?void 0:t.findIndex(c=>!c.disabled))&&void 0!==s?s:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function Fc(a,r){let t=a.length;for(;t--;)if(r(a[t],t,a))return t;return-1}(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,s;this.selectedIndex=null!==(s=null===(t=this.options)||void 0===t?void 0:t.findIndex(c=>c.defaultSelected))&&void 0!==s?s:-1}setSelectedOptions(){var t,s,c;null!==(t=this.options)&&void 0!==t&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(c=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.id)&&void 0!==c?c:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,s){this.options=s.reduce((h,E)=>(jl(E)&&h.push(E),h),[]);const c=`${this.options.length}`;this.options.forEach((h,E)=>{h.id||(h.id=ga("option-")),h.ariaPosInSet=`${E+1}`,h.ariaSetSize=c}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,s){if(this.$fastController.isConnected){const c=this.getTypeaheadMatches();if(c.length){const h=this.options.indexOf(c[0]);h>-1&&(this.selectedIndex=h)}this.typeaheadExpired=!1}}}return a.slottedOptionFilter=r=>jl(r)&&!r.hidden,a.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"disabled",void 0),(0,J.gn)([Ze.LO],a.prototype,"selectedIndex",void 0),(0,J.gn)([Ze.LO],a.prototype,"selectedOptions",void 0),(0,J.gn)([Ze.LO],a.prototype,"slottedOptions",void 0),(0,J.gn)([Ze.LO],a.prototype,"typeaheadBuffer",void 0),a})(),qu=(()=>{class a{}return(0,J.gn)([Ze.LO],a.prototype,"ariaActiveDescendant",void 0),(0,J.gn)([Ze.LO],a.prototype,"ariaDisabled",void 0),(0,J.gn)([Ze.LO],a.prototype,"ariaExpanded",void 0),(0,J.gn)([Ze.LO],a.prototype,"ariaMultiSelectable",void 0),a})();Ri(qu,Ka),Ri(el,qu);class Am extends el{}class Rm extends(Qa(Am)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let hh=(()=>{class a extends Rm{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=ga("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return"inline"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteList(){return"list"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteBoth(){return"both"===this.autocomplete}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),void xn.SO.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}get options(){return Ze.y$.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,Ze.y$.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,s){this.positionAttribute=s,this.setPositioning()}get value(){return Ze.y$.track(this,"value"),this._value}set value(t){var s,c,h;const E=`${this._value}`;if(this.$fastController.isConnected&&this.options){const k=this.options.findIndex(ye=>ye.text.toLowerCase()===t.toLowerCase()),$=null===(s=this.options[this.selectedIndex])||void 0===s?void 0:s.text,Y=null===(c=this.options[k])||void 0===c?void 0:c.text;this.selectedIndex=$!==Y?k:this.selectedIndex,t=(null===(h=this.firstSelectedOption)||void 0===h?void 0:h.text)||t}E!==t&&(this._value=t,super.valueChanged(E,t),Ze.y$.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const s=t.target.closest("option,[role=option]");if(!s||s.disabled)return;this.selectedOptions=[s],this.control.value=s.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,s){super.disabledChanged&&super.disabledChanged(t,s),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||"none"===this.autocomplete)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(s=>s.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(s=>{s.hidden=!this.filteredOptions.includes(s)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;null===(t=this.firstSelectedOption)||void 0===t||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const s=t.relatedTarget;this.isSameNode(s)?this.focus():(!this.options||!this.options.includes(s))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(s=>s.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){if(t.ctrlKey||t.shiftKey)return!0;switch(t.key){case"Enter":this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break;default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(t,s){if(this.$fastController.isConnected){if((s=Du(-1,this.options.length-1,s))!==this.selectedIndex)return void(this.selectedIndex=s);super.selectedIndexChanged(t,s)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(s=>null!==s.getAttribute("selected")||s.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const s=this.selectedIndex>-1?null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text:this.control.value;this.updateValue(this.value!==s)}setPositioning(){const t=this.getBoundingClientRect(),c=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>c?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~t.top:~~c}selectedOptionsChanged(t,s){this.$fastController.isConnected&&this._options.forEach(c=>{c.selected=s.includes(c)})}slottedOptionsChanged(t,s){super.slottedOptionsChanged(t,s),this.updateValue()}updateValue(t){var s;this.$fastController.isConnected&&(this.value=(null===(s=this.firstSelectedOption)||void 0===s?void 0:s.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}}return(0,J.gn)([(0,z.Lj)({attribute:"autocomplete",mode:"fromView"})],a.prototype,"autocomplete",void 0),(0,J.gn)([Ze.LO],a.prototype,"maxHeight",void 0),(0,J.gn)([(0,z.Lj)({attribute:"open",mode:"boolean"})],a.prototype,"open",void 0),(0,J.gn)([z.Lj],a.prototype,"placeholder",void 0),(0,J.gn)([(0,z.Lj)({attribute:"position"})],a.prototype,"positionAttribute",void 0),(0,J.gn)([Ze.LO],a.prototype,"position",void 0),a})(),Xu=(()=>{class a{}return(0,J.gn)([Ze.LO],a.prototype,"ariaAutoComplete",void 0),(0,J.gn)([Ze.LO],a.prototype,"ariaControls",void 0),a})();Ri(Xu,qu),Ri(hh,oo,Xu);const M0=Ai.DesignToken.create("input-placeholder-rest").withDefault(a=>{const r=T.smF.getValueFor(a);return T.axZ.getValueFor(a).evaluate(a,r.evaluate(a).rest)}),k0=Ai.DesignToken.create("input-placeholder-hover").withDefault(a=>{const r=T.smF.getValueFor(a);return T.axZ.getValueFor(a).evaluate(a,r.evaluate(a).hover)}),Jf=Ai.DesignToken.create("input-filled-placeholder-rest").withDefault(a=>{const r=T.TuC.getValueFor(a);return T.axZ.getValueFor(a).evaluate(a,r.evaluate(a).rest)}),Ul=Ai.DesignToken.create("input-filled-placeholder-hover").withDefault(a=>{const r=T.TuC.getValueFor(a);return T.axZ.getValueFor(a).evaluate(a,r.evaluate(a).hover)}),Lc=(a,r,t)=>gt`
  :host {
    ${Pi}
    color: ${T.CHi};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${t} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${T.Han} * 1px) solid transparent;
    border-radius: calc(${T.UWU} * 1px);
    height: calc(${kn} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${T.CHi};
    cursor: pointer;
    ${Pi}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${t},
  :host([readonly]) ${t},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${_s};
  }

  :host([disabled]) {
    opacity: ${T.VFZ};
  }
`,Ju=(a,r,t)=>gt`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${T.vxp} * 1px);
      bottom: 0;
      border-bottom: calc(${T.vxp} * 1px) solid ${T.Avx};
      border-bottom-left-radius: calc(${T.UWU} * 1px);
      border-bottom-right-radius: calc(${T.UWU} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,zl=(a,r,t,s=":not([disabled]):not(:focus-within)")=>gt`
  ${t} {
    background: padding-box linear-gradient(${T._Bj}, ${T._Bj}),
      border-box ${T.iAs};
  }

  :host(${s}:hover) ${t} {
    background: padding-box linear-gradient(${T.Tm7}, ${T.Tm7}),
      border-box ${T.zt3};
  }

  :host(:not([disabled]):focus-within) ${t} {
    background: padding-box linear-gradient(${T.rFm}, ${T.rFm}),
      border-box ${T.iAs};
  }
  
  :host([disabled]) ${t} {
    background: padding-box linear-gradient(${T._Bj}, ${T._Bj}),
      border-box ${T.akT};
  }

  .control::placeholder {
    color: ${M0};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${k0};
  }
`,ed=(a,r,t,s=":not([disabled]):not(:focus-within)")=>gt`
  ${t} {
    background: ${T._jX};
  }

  :host(${s}:hover) ${t} {
    background: ${T.d$x};
  }

  :host(:not([disabled]):focus-within) ${t} {
    background: ${T.KTo};
  }

  :host([disabled]) ${t} {
    background: ${T._jX};
  }

  .control::placeholder {
    color: ${Jf};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${Ul};
  }
`,td=(a,r,t,s=":not([disabled]):not(:focus-within)")=>gt`
  :host {
    color: ${_e.ButtonText};
  }

  ${t} {
    background: ${_e.ButtonFace};
    border-color: ${_e.ButtonText};
  }

  :host(${s}:hover) ${t},
  :host(:not([disabled]):focus-within) ${t} {
    border-color: ${_e.Highlight};
  }

  :host([disabled]) ${t} {
    opacity: 1;
    background: ${_e.ButtonFace};
    border-color: ${_e.GrayText};
  }

  .control::placeholder,
  :host(${s}:hover) .control::placeholder {
    color: ${_e.CanvasText};
  }

  :host(:not([disabled]):focus) ${t} {
    ${Ks}
    outline-color: ${_e.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${_e.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${_e.GrayText};
  }
`,Pm=".control",fh=":not([disabled]):not([open])",ep="[disabled]",Fm=(a,r)=>gt`
    ${jn("inline-flex")}
    
    :host {
      border-radius: calc(${T.UWU} * 1px);
      box-sizing: border-box;
      color: ${T.CHi};
      fill: currentcolor;
      font-family: ${T.SVJ};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${Im};
      background: ${T.IfY};
      border-radius: calc(${T.rSr} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${kn} * 1px));
      padding: calc((${T._5n} - ${T.Han} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${T.Han} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${T.Han} * 1px) solid transparent;
      border-radius: calc(${T.UWU} * 1px);
      height: calc(${kn} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Pi}
      min-height: 100%;
      padding: 0 calc(${T._5n} * 2.25px);
      width: 100%;
    }

    :host(:${nn}) {
      ${Ks}
    }

    :host([disabled]) .control {
      cursor: ${_s};
      opacity: ${T.VFZ};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${kn} + ${T._5n} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${kn} + ${T._5n} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,ph=".control",tp=":not([disabled]):not([open])",Nm=(()=>{class a extends hh{appearanceChanged(t,s){t!==s&&(this.classList.add(s),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&T.IfY.setValueFor(this.listbox,T.s55)}}return(0,At.gn)([(0,z.Lj)({mode:"fromView"})],a.prototype,"appearance",void 0),a})().compose({baseName:"combobox",baseClass:hh,shadowOptions:{delegatesFocus:!0},template:(a,r)=>Ct`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @focusout="${(t,s)=>t.focusoutHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
    >
        <div class="control" part="control">
            ${So(0,r)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,s)=>t.inputHandler(s.event)}"
                    @keyup="${(t,s)=>t.keyupHandler(s.event)}"
                    ${Wn("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${r.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Pr(0,r)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${Wn("listbox")}
        >
            <slot
                ${Vi({filter:el.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(a,r)=>gt`
    ${Fm()}

    ${Ju()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${_s};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${Pi}
      height: calc(100% - ${T.Han} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(Ui("outline",zl(0,0,ph,tp)),Ui("filled",ed(0,0,ph,tp)),An(td(0,0,ph,tp))),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '});class A0 extends Eg{constructor(r,t){super(r,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return Array.from("subtree"in this.options?this.target.querySelectorAll(this.options.selector):this.target.childNodes)}}function gh(a){return"string"==typeof a&&(a={property:a}),new Su("fast-children",A0,a)}const ma=Ac.compose({baseName:"data-grid-cell",template:(a,r)=>Ct`
        <template
            tabindex="-1"
            role="${t=>t.cellType&&"default"!==t.cellType?t.cellType:"gridcell"}"
            class="
            ${t=>"columnheader"===t.cellType?"column-header":"rowheader"===t.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(a,r)=>gt`
    :host {
      padding: calc((${T._5n} + ${T.vxp} - ${T.Han}) * 1px) calc(((${T._5n} * 3) + ${T.vxp} - ${T.Han}) * 1px);
      color: ${T.CHi};
      box-sizing: border-box;
      ${Pi}
      border: transparent calc(${T.Han} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${T.UWU} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${nn}) {
      ${Ks}
    }
  `.withBehaviors(An(gt`
        :host {
          forced-color-adjust: none;
          background: ${_e.Field};
          color: ${_e.FieldText};
        }

        :host(:${nn}) {
          outline-color: ${_e.FieldText};
        }
      `))}),P0=Hu.compose({baseName:"data-grid-row",template:(a,r)=>{const t=function Bm(a){const r=a.tagFor(Ac);return Ct`
    <${r}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,s)=>s.index+1}"
        :rowData="${(t,s)=>s.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${r}>
`}(a),s=function R0(a){const r=a.tagFor(Ac);return Ct`
    <${r}
        cell-type="columnheader"
        grid-column="${(t,s)=>s.index+1}"
        :columnDefinition="${t=>t}"
    ></${r}>
`}(a);return Ct`
        <template
            role="row"
            class="${c=>"default"!==c.rowType?c.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${s}"
            ${gh({property:"cellElements",filter:da('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Vi("slottedCellElements")}></slot>
        </template>
    `},styles:(a,r)=>gt`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${T.Han} * 1px) solid ${T.dtw};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${T.IfY};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(An(gt`
        :host {
        }
      `))}),Qs=Ja.compose({baseName:"data-grid",template:(a,r)=>{const t=function GD(a){const r=a.tagFor(Hu);return Ct`
    <${r}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,s)=>s.parent.headerCellItemTemplate}"
    ></${r}>
`}(a),s=a.tagFor(Hu);return Ct`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${t}"
            ${gh({property:"rowElements",filter:da("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(a,r)=>gt`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`}),mh={toView:a=>null==a?null:a?.toColorString(),fromView(a){if(null==a)return null;const r=(0,qf.in)(a);return r?Qf.w.create(r.r,r.g,r.b):null}},rp=gt`
  :host {
    background-color: ${T.IfY};
    color: ${T.CHi};
  }
`.withBehaviors(An(gt`
      :host {
        background-color: ${_e.Canvas};
        box-shadow: 0 0 0 1px ${_e.CanvasText};
        color: ${_e.CanvasText};
      }
    `));function Gt(a){return(r,t)=>{r[t+"Changed"]=function(s,c){null!=c?a.setValueFor(this,c):a.deleteValueFor(this)}}}const F0=(()=>{class a extends Dn{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};Ze.y$.getNotifier(this).subscribe(t,"fillColor"),Ze.y$.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){this.noPaint||void 0===this.fillColor&&!this.baseLayerLuminance?this.$fastController.removeStyles(rp):this.$fastController.addStyles(rp)}}return(0,At.gn)([(0,z.Lj)({attribute:"no-paint",mode:"boolean"})],a.prototype,"noPaint",void 0),(0,At.gn)([(0,z.Lj)({attribute:"fill-color",converter:mh,mode:"fromView"}),Gt(T.IfY)],a.prototype,"fillColor",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-base-color",converter:mh,mode:"fromView"}),Gt(T.R6v)],a.prototype,"accentBaseColor",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-base-color",converter:mh,mode:"fromView"}),Gt(T.aIT)],a.prototype,"neutralBaseColor",void 0),(0,At.gn)([(0,z.Lj)({converter:z.Id}),Gt(T.hVk)],a.prototype,"density",void 0),(0,At.gn)([(0,z.Lj)({attribute:"design-unit",converter:z.Id}),Gt(T._5n)],a.prototype,"designUnit",void 0),(0,At.gn)([(0,z.Lj)({attribute:"direction"}),Gt(T.o7V)],a.prototype,"direction",void 0),(0,At.gn)([(0,z.Lj)({attribute:"base-height-multiplier",converter:z.Id}),Gt(T.nfe)],a.prototype,"baseHeightMultiplier",void 0),(0,At.gn)([(0,z.Lj)({attribute:"base-horizontal-spacing-multiplier",converter:z.Id}),Gt(T.LQ3)],a.prototype,"baseHorizontalSpacingMultiplier",void 0),(0,At.gn)([(0,z.Lj)({attribute:"control-corner-radius",converter:z.Id}),Gt(T.UWU)],a.prototype,"controlCornerRadius",void 0),(0,At.gn)([(0,z.Lj)({attribute:"layer-corner-radius",converter:z.Id}),Gt(T.rSr)],a.prototype,"layerCornerRadius",void 0),(0,At.gn)([(0,z.Lj)({attribute:"stroke-width",converter:z.Id}),Gt(T.Han)],a.prototype,"strokeWidth",void 0),(0,At.gn)([(0,z.Lj)({attribute:"focus-stroke-width",converter:z.Id}),Gt(T.vxp)],a.prototype,"focusStrokeWidth",void 0),(0,At.gn)([(0,z.Lj)({attribute:"disabled-opacity",converter:z.Id}),Gt(T.VFZ)],a.prototype,"disabledOpacity",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-minus-2-font-size"}),Gt(T.G8g)],a.prototype,"typeRampMinus2FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-minus-2-line-height"}),Gt(T.MwG)],a.prototype,"typeRampMinus2LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-minus-1-font-size"}),Gt(T.sNp)],a.prototype,"typeRampMinus1FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-minus-1-line-height"}),Gt(T.vgC)],a.prototype,"typeRampMinus1LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-base-font-size"}),Gt(T.cSu)],a.prototype,"typeRampBaseFontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-base-line-height"}),Gt(T.RUt)],a.prototype,"typeRampBaseLineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-1-font-size"}),Gt(T.PwC)],a.prototype,"typeRampPlus1FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-1-line-height"}),Gt(T.b3W)],a.prototype,"typeRampPlus1LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-2-font-size"}),Gt(T.mWK)],a.prototype,"typeRampPlus2FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-2-line-height"}),Gt(T.I7_)],a.prototype,"typeRampPlus2LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-3-font-size"}),Gt(T.ipv)],a.prototype,"typeRampPlus3FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-3-line-height"}),Gt(T.yGZ)],a.prototype,"typeRampPlus3LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-4-font-size"}),Gt(T.IWd)],a.prototype,"typeRampPlus4FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-4-line-height"}),Gt(T.iL4)],a.prototype,"typeRampPlus4LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-5-font-size"}),Gt(T.CXZ)],a.prototype,"typeRampPlus5FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-5-line-height"}),Gt(T.n5T)],a.prototype,"typeRampPlus5LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-6-font-size"}),Gt(T.Zaf)],a.prototype,"typeRampPlus6FontSize",void 0),(0,At.gn)([(0,z.Lj)({attribute:"type-ramp-plus-6-line-height"}),Gt(T.yDy)],a.prototype,"typeRampPlus6LineHeight",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-fill-rest-delta",converter:z.Id}),Gt(T.N7s)],a.prototype,"accentFillRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-fill-hover-delta",converter:z.Id}),Gt(T.B23)],a.prototype,"accentFillHoverDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-fill-active-delta",converter:z.Id}),Gt(T.Woc)],a.prototype,"accentFillActiveDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-fill-focus-delta",converter:z.Id}),Gt(T.v$0)],a.prototype,"accentFillFocusDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-foreground-rest-delta",converter:z.Id}),Gt(T.kpA)],a.prototype,"accentForegroundRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-foreground-hover-delta",converter:z.Id}),Gt(T.L8d)],a.prototype,"accentForegroundHoverDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-foreground-active-delta",converter:z.Id}),Gt(T.kb6)],a.prototype,"accentForegroundActiveDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"accent-foreground-focus-delta",converter:z.Id}),Gt(T.ndN)],a.prototype,"accentForegroundFocusDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-rest-delta",converter:z.Id}),Gt(T.MYN)],a.prototype,"neutralFillRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-hover-delta",converter:z.Id}),Gt(T.jWw)],a.prototype,"neutralFillHoverDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-active-delta",converter:z.Id}),Gt(T.hDF)],a.prototype,"neutralFillActiveDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-focus-delta",converter:z.Id}),Gt(T.VQw)],a.prototype,"neutralFillFocusDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-input-rest-delta",converter:z.Id}),Gt(T.efx)],a.prototype,"neutralFillInputRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-input-hover-delta",converter:z.Id}),Gt(T.EL3)],a.prototype,"neutralFillInputHoverDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-input-active-delta",converter:z.Id}),Gt(T.q_p)],a.prototype,"neutralFillInputActiveDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-input-focus-delta",converter:z.Id}),Gt(T.Zbo)],a.prototype,"neutralFillInputFocusDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-layer-rest-delta",converter:z.Id}),Gt(T.YL4)],a.prototype,"neutralFillLayerRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-stealth-rest-delta",converter:z.Id}),Gt(T.qDs)],a.prototype,"neutralFillStealthRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-stealth-hover-delta",converter:z.Id}),Gt(T.fqe)],a.prototype,"neutralFillStealthHoverDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-stealth-active-delta",converter:z.Id}),Gt(T.gs2)],a.prototype,"neutralFillStealthActiveDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-stealth-focus-delta",converter:z.Id}),Gt(T.IU$)],a.prototype,"neutralFillStealthFocusDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-strong-hover-delta",converter:z.Id}),Gt(T.sc1)],a.prototype,"neutralFillStrongHoverDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-strong-active-delta",converter:z.Id}),Gt(T.Vt5)],a.prototype,"neutralFillStrongActiveDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-fill-strong-focus-delta",converter:z.Id}),Gt(T.UCF)],a.prototype,"neutralFillStrongFocusDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"base-layer-luminance",converter:z.Id}),Gt(T.q2d)],a.prototype,"baseLayerLuminance",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-stroke-divider-rest-delta",converter:z.Id}),Gt(T.hD7)],a.prototype,"neutralStrokeDividerRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-stroke-rest-delta",converter:z.Id}),Gt(T.fd1)],a.prototype,"neutralStrokeRestDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-stroke-hover-delta",converter:z.Id}),Gt(T.rnN)],a.prototype,"neutralStrokeHoverDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-stroke-active-delta",converter:z.Id}),Gt(T.IMz)],a.prototype,"neutralStrokeActiveDelta",void 0),(0,At.gn)([(0,z.Lj)({attribute:"neutral-stroke-focus-delta",converter:z.Id}),Gt(T.Bxy)],a.prototype,"neutralStrokeFocusDelta",void 0),a})().compose({baseName:"design-system-provider",template:Ct` <slot></slot> `,styles:gt`
    ${jn("block")}
  `});var Um=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Nc=Um.join(","),Bc=typeof Element>"u",Wl=Bc?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,vh=!Bc&&Element.prototype.getRootNode?function(a){return a.getRootNode()}:function(a){return a.ownerDocument},nd=function(r){return"INPUT"===r.tagName},Ym=function(r){var t=r.getBoundingClientRect();return 0===t.width&&0===t.height},yh=function(r,t){return!(t.disabled||function(r){return nd(r)&&"hidden"===r.type}(t)||function(r,t){var s=t.displayCheck,c=t.getShadowRoot;if("hidden"===getComputedStyle(r).visibility)return!0;var h=Wl.call(r,"details>summary:first-of-type");if(Wl.call(h?r.parentElement:r,"details:not([open]) *"))return!0;var k=vh(r).host,$=k?.ownerDocument.contains(k)||r.ownerDocument.contains(r);if(s&&"full"!==s){if("non-zero-area"===s)return Ym(r)}else{if("function"==typeof c){for(var Y=r;r;){var ye=r.parentElement,ke=vh(r);if(ye&&!ye.shadowRoot&&!0===c(ye))return Ym(r);r=r.assignedSlot?r.assignedSlot:ye||ke===r.ownerDocument?ye:ke.host}r=Y}if($)return!r.getClientRects().length}return!1}(t,r)||function(r){return"DETAILS"===r.tagName&&Array.prototype.slice.apply(r.children).some(function(s){return"SUMMARY"===s.tagName})}(t)||function(r){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(r.tagName))for(var t=r.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var s=0;s<t.children.length;s++){var c=t.children.item(s);if("LEGEND"===c.tagName)return!!Wl.call(t,"fieldset[disabled] *")||!c.contains(r)}return!0}t=t.parentElement}return!1}(t))},sp=function(r,t){return!(function(r){return function(r){return nd(r)&&"radio"===r.type}(r)&&!function(r){if(!r.name)return!0;var c,t=r.form||vh(r),s=function(k){return t.querySelectorAll('input[type="radio"][name="'+k+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)c=s(window.CSS.escape(r.name));else try{c=s(r.name)}catch(E){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",E.message),!1}var h=function(r,t){for(var s=0;s<r.length;s++)if(r[s].checked&&r[s].form===t)return r[s]}(c,r.form);return!h||h===r}(r)}(t)||function(r,t){return r.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(r.tagName)||r.isContentEditable)&&isNaN(parseInt(r.getAttribute("tabindex"),10))?0:r.tabIndex}(t)<0||!yh(r,t))},z0=function(r,t){if(t=t||{},!r)throw new Error("No node provided");return!1!==Wl.call(r,Nc)&&sp(t,r)},W0=Um.concat("iframe").join(","),Km=function(r,t){if(t=t||{},!r)throw new Error("No node provided");return!1!==Wl.call(r,W0)&&yh(t,r)};const Z0=(()=>{class a extends Dn{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Il:this.dismiss(),t.preventDefault();break;case Hd:this.handleTabKeyDown(t)}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const s=this.getTabQueueBounds();if(0!==s.length){if(1===s.length)return s[0].focus(),void t.preventDefault();t.shiftKey&&t.target===s[0]?(s[s.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===s[s.length-1]&&(s[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>a.reduceTabbableItems([],this),this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const s=void 0===t?this.shouldTrapFocus():t;s&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),xn.SO.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!s&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=Ze.y$.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,s){"hidden"===s&&this.updateTrapFocus()}static reduceTabbableItems(t,s){return"-1"===s.getAttribute("tabindex")?t:z0(s)||a.isFocusableFastElement(s)&&a.hasTabbableShadow(s)?(t.push(s),t):s.childElementCount?t.concat(Array.from(s.children).reduce(a.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var s,c;return!(null===(c=null===(s=t.$fastController)||void 0===s?void 0:s.definition.shadowOptions)||void 0===c||!c.delegatesFocus)}static hasTabbableShadow(t){var s,c;return Array.from(null!==(c=null===(s=t.shadowRoot)||void 0===s?void 0:s.querySelectorAll("*"))&&void 0!==c?c:[]).some(h=>z0(h))}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"modal",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"hidden",void 0),(0,J.gn)([(0,z.Lj)({attribute:"trap-focus",mode:"boolean"})],a.prototype,"trapFocus",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-describedby"})],a.prototype,"ariaDescribedby",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-labelledby"})],a.prototype,"ariaLabelledby",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-label"})],a.prototype,"ariaLabel",void 0),a})().compose({baseName:"dialog",template:(a,r)=>Ct`
    <div class="positioning-region" part="positioning-region">
        ${ji(t=>t.modal,Ct`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${t=>t.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${t=>t.modal}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-label="${t=>t.ariaLabel}"
            ${Wn("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(a,r)=>gt`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${Mm};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${T.rSr} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${T.IfY};
    z-index: 1;
    border: calc(${T.Han} * 1px) solid transparent;
  }
`});let Vc=(()=>{class a extends Dn{constructor(){super(...arguments),this.role="separator",this.orientation="horizontal"}}return(0,J.gn)([z.Lj],a.prototype,"role",void 0),(0,J.gn)([z.Lj],a.prototype,"orientation",void 0),a})();const qm=Vc.compose({baseName:"divider",template:(a,r)=>Ct`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,styles:(a,r)=>gt`
    ${jn("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${T.Han} * 1px) solid ${T.dtw};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${T._5n} * 1px);
      border-left: calc(${T.Han} * 1px) solid ${T.dtw};
  }
  `}),K0=(()=>{class a extends Dn{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction="next"}keyupHandler(t){if(!this.hiddenFromAT){const s=t.key;("Enter"===s||"Space"===s)&&this.$emit("click",t),"Escape"===s&&this.blur()}}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"disabled",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-hidden",converter:z.bw})],a.prototype,"hiddenFromAT",void 0),(0,J.gn)([z.Lj],a.prototype,"direction",void 0),a})().compose({baseName:"flipper",template:(a,r)=>Ct`
    <template
        role="button"
        aria-disabled="${t=>!!t.disabled||void 0}"
        tabindex="${t=>t.hiddenFromAT?-1:0}"
        class="${t=>t.direction} ${t=>t.disabled?"disabled":""}"
        @keyup="${(t,s)=>t.keyupHandler(s.event)}"
    >
        ${ji(t=>"next"===t.direction,Ct`
                <span part="next" class="next">
                    <slot name="next">
                        ${r.next||""}
                    </slot>
                </span>
            `)}
        ${ji(t=>"previous"===t.direction,Ct`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${r.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")} :host {
      height: calc((${kn} + ${T._5n}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${T.P0N};
      background: padding-box linear-gradient(${T.wFS}, ${T.wFS}),
        border-box ${T.U_Q};
      box-sizing: border-box;
      border: calc(${T.Han} * 1px) solid transparent;
      border-radius: calc(${T.UWU} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${T.VFZ};
      cursor: ${_s};
      pointer-events: none;
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${T.Dgm};
    }

    :host(:not(.disabled):active) {
      color: ${T.hP0};
    }

    :host(:${nn}) {
      ${Ks}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(An(gt`
        :host {
          background: ${_e.ButtonFace};
          border-color: ${_e.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${_e.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${_e.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${_e.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${_e.GrayText};
          color: ${_e.GrayText};
          fill: currentcolor;
        }
        :host(:${nn}) {
          forced-color-adjust: none;
          outline-color: ${_e.Highlight};
        }
      `)),next:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>\n    </svg>\n  ',previous:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>\n    </svg>\n  '});let rd=(()=>{class a extends Dn{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,s){this.scrollContainer&&this.$emit(1==this.scrolling?"scrollstart":"scrollend",this.scrollContainer.scrollLeft)}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,s){s&&!this.updatingItems&&xn.SO.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((s,c)=>c instanceof HTMLSlotElement?s.concat(c.assignedElements()):(s.push(c),s),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:s}=t,{width:c,left:h}=t.getBoundingClientRect();this.width=c;let E=0,k=this.scrollItems.map(($,Y)=>{const{left:ye,width:ke}=$.getBoundingClientRect(),lt=Math.round(ye+s-h),bt=Math.round(lt+ke);return this.isRtl?-bt:(E=bt,0===Y?0:lt)}).concat(E);k=this.fixScrollMisalign(k),k.sort(($,Y)=>Math.abs($)-Math.abs(Y)),this.scrollStops=k,this.setFlippers()}validateStops(t=!0){const s=()=>!!this.scrollStops.find(c=>c>0);return!s()&&t&&this.setStops(),s()}fixScrollMisalign(t){if(this.isRtl&&t.some(s=>s>0)){t.sort((c,h)=>h-c);const s=t[0];t=t.map(c=>c-s)}return t}setFlippers(){var t,s;const c=this.scrollContainer.scrollLeft;if(null===(t=this.previousFlipperContainer)||void 0===t||t.classList.toggle("disabled",0===c),this.scrollStops){const h=Math.abs(this.scrollStops[this.scrollStops.length-1]);null===(s=this.nextFlipperContainer)||void 0===s||s.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(c)+this.width>=h)}}scrollInView(t,s=0,c){var h;if("number"!=typeof t&&t&&(t=this.scrollItems.findIndex(E=>E===t||E.contains(t))),void 0!==t){c=c??s;const{scrollContainer:E,scrollStops:k,scrollItems:$}=this,{scrollLeft:Y}=this.scrollContainer,{width:ye}=E.getBoundingClientRect(),ke=k[t],{width:lt}=$[t].getBoundingClientRect(),bt=ke+lt,_t=Y+s>ke;if(_t||Y+ye-c<bt){const yn=null!==(h=[...k].sort((Ln,ai)=>_t?ai-Ln:Ln-ai).find(Ln=>_t?Ln+s<ke:Ln+ye-(c??0)>bt))&&void 0!==h?h:0;this.scrollToPosition(yn)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext()}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,s=this.scrollStops.findIndex((E,k)=>E>=t&&(this.isRtl||k===this.scrollStops.length-1||this.scrollStops[k+1]>t)),c=Math.abs(this.scrollStops[s+1]);let h=this.scrollStops.findIndex(E=>Math.abs(E)+this.width>c);(h>=s||-1===h)&&(h=s>0?s-1:0),this.scrollToPosition(this.scrollStops[h],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,s=this.scrollStops.findIndex(E=>Math.abs(E)>=Math.abs(t)),c=this.scrollStops.findIndex(E=>Math.abs(t)+this.width<=Math.abs(E));let h=s;c>s+2?h=c-2:s<this.scrollStops.length-2&&(h=s+1),this.scrollToPosition(this.scrollStops[h],t)}scrollToPosition(t,s=this.scrollContainer.scrollLeft){var c;if(this.scrolling)return;this.scrolling=!0;const h=null!==(c=this.duration)&&void 0!==c?c:Math.abs(t-s)/this.speed+"s";this.content.style.setProperty("transition-duration",h);const E=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),k=ye=>{ye&&ye.target!==ye.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",k),this.scrolling=!1)};if(0===E)return void k();this.content.addEventListener("transitionend",k);const $=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let Y=this.scrollContainer.scrollLeft-Math.min(t,$);this.isRtl&&(Y=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),$)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${Y}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}}return(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"speed",void 0),(0,J.gn)([z.Lj],a.prototype,"duration",void 0),(0,J.gn)([z.Lj],a.prototype,"easing",void 0),(0,J.gn)([(0,z.Lj)({attribute:"flippers-hidden-from-at",converter:z.bw})],a.prototype,"flippersHiddenFromAT",void 0),(0,J.gn)([Ze.LO],a.prototype,"scrolling",void 0),(0,J.gn)([Ze.LO],a.prototype,"scrollItems",void 0),(0,J.gn)([(0,z.Lj)({attribute:"view"})],a.prototype,"view",void 0),a})();const X0=gt`
  .scroll-prev {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before,
  .scroll-next .scroll-action {
    left: auto;
    right: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-next));
  }

  .scroll-next .scroll-action {
    transform: translate(50%, -50%);
  }
`,J0=gt`
  .scroll.scroll-next {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, var(--scroll-fade-next), transparent);
    left: auto;
    right: 0;
  }

  .scroll.scroll-prev::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
  }

  .scroll-prev .scroll-action {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
`,ew=gt`
  .scroll-area {
    position: relative;
  }

  div.scroll-view {
    overflow-x: hidden;
  }

  .scroll {
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    width: 100px;
  }

  .scroll.disabled {
    display: none;
  }

  .scroll::before,
  .scroll-action {
    left: 0;
    position: absolute;
  }

  .scroll::before {
    background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }

  .scroll-action {
    pointer-events: auto;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::slotted(fluent-flipper) {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .scroll-area:hover ::slotted(fluent-flipper) {
    opacity: 1;
  }
`.withBehaviors(new Rc(X0,J0)),Ch=class up extends rd{connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(ew)}}.compose({baseName:"horizontal-scroll",baseClass:rd,template:(a,r)=>{var t,s;return Ct`
    <template
        class="horizontal-scroll"
        @keyup="${(c,h)=>c.keyupHandler(h.event)}"
    >
        ${So(0,r)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${c=>c.scrolled()}"
                ${Wn("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${Wn("content")}>
                    <slot
                        ${Vi({property:"scrollItems",filter:da()})}
                    ></slot>
                </div>
            </div>
            ${ji(c=>"mobile"!==c.view,Ct`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${Wn("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${r.previousFlipper instanceof Function?r.previousFlipper(a,r):null!==(t=r.previousFlipper)&&void 0!==t?t:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${Wn("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${r.nextFlipper instanceof Function?r.nextFlipper(a,r):null!==(s=r.nextFlipper)&&void 0!==s?s:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${Pr(0,r)}
    </template>
`},styles:(a,r)=>gt`
  ${jn("block")} :host {
    --scroll-align: center;
    --scroll-item-spacing: 4px;
    contain: layout;
    position: relative;
  }

  .scroll-view {
    overflow-x: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content-container {
    align-items: var(--scroll-align);
    display: inline-flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .content-container ::slotted(*) {
    margin-right: var(--scroll-item-spacing);
  }

  .content-container ::slotted(*:last-child) {
    margin-right: 0;
  }
`,nextFlipper:Ct`
    <fluent-flipper @click="${a=>a.scrollToNext()}" aria-hidden="${a=>a.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:Ct`
    <fluent-flipper
      @click="${a=>a.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${a=>a.flippersHiddenFromAT}"
    ></fluent-flipper>
  `});let nw=(()=>{class a extends el{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return null===(t=this.options)||void 0===t?void 0:t.filter(s=>s.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,s){var c,h;this.ariaActiveDescendant=null!==(h=null===(c=this.options[s])||void 0===c?void 0:c.id)&&void 0!==h?h:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((s,c)=>{s.checked=Eu(c,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((s,c)=>{s.checked=Eu(c,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((s,c)=>{s.checked=Eu(c,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((s,c)=>{s.checked=Eu(c,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var s;if(!this.multiple)return super.clickHandler(t);const c=null===(s=t.target)||void 0===s?void 0:s.closest("[role=option]");return c&&!c.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(c),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:s,shiftKey:c}=t;switch(this.shouldSkipFocus=!1,s){case ua:return void this.checkFirstOption(c);case ys:return void this.checkNextOption(c);case bs:return void this.checkPreviousOption(c);case Ys:return void this.checkLastOption(c);case Hd:return this.focusAndScrollOptionIntoView(),!0;case Il:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case" ":if(t.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===s.length&&this.handleTypeAhead(`${s}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,s){var c;this.ariaMultiSelectable=s?"true":null,null===(c=this.options)||void 0===c||c.forEach(h=>{h.checked=!s&&void 0}),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(t,s){var c;const h=Math.max(0,parseInt(null!==(c=s?.toFixed())&&void 0!==c?c:"",10));h!==s&&xn.SO.queueUpdate(()=>{this.size=h})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(c=>!c.disabled),s=!t.every(c=>c.selected);t.forEach(c=>c.selected=s),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,s){if(this.multiple){if(this.$fastController.isConnected){const c=this.getTypeaheadMatches(),h=this.options.indexOf(c[0]);h>-1&&(this.activeIndex=h,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(t,s)}uncheckAllOptions(t=!1){this.options.forEach(s=>s.checked=!this.multiple&&void 0),t||(this.rangeStartIndex=-1)}}return(0,J.gn)([Ze.LO],a.prototype,"activeIndex",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"multiple",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"size",void 0),a})();const ow=class hp extends el{}.compose({baseName:"listbox",template:(a,r)=>Ct`
    <template
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @focusin="${(t,s)=>t.focusinHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @mousedown="${(t,s)=>t.mousedownHandler(s.event)}"
    >
        <slot
            ${Vi({filter:nw.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")} :host {
      border: calc(${T.Han} * 1px) solid ${T.akT};
      border-radius: calc(${T.UWU} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${T._5n} * 1px) 0;
    }

    ::slotted(${a.tagFor(dh)}) {
      margin: 0 calc(${T._5n} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Ks}
    }
  `}),Xm=dh.compose({baseName:"option",template:(a,r)=>Ct`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${So(0,r)}
        <span class="content" part="content">
            <slot ${Vi("content")}></slot>
        </span>
        ${Pr(0,r)}
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")} :host {
      position: relative;
      ${Pi}
      background: ${T.jql};
      border-radius: calc(${T.UWU} * 1px);
      border: calc(${T.Han} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${T.CHi};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${kn} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${T._5n} * 3) - ${T.Han} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${T.vxp} - ${T.Han}) * 1px);
      top: calc((${kn} / 4) - ${T.vxp} * 1px);
      width: 3px;
      height: calc((${kn} / 2) * 1px);
      background: transparent;
      border-radius: calc(${T.UWU} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${T.QpD};
    }

    :host(:not([disabled]):active) {
      background: ${T.sG3};
    }

    :host(:not([disabled]):active)::before {
      background: ${T.Avx};
      height: calc(((${kn} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${T.Avx};
    }

    :host(:${nn}) {
      ${Ks}
      background: ${T.s0z};
    }

    :host([aria-selected='true']) {
      background: ${T._jX};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${T.d$x};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${T._ii};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${T.QpD};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${T.sG3};
    }

    :host([disabled]) {
      cursor: ${_s};
      opacity: ${T.VFZ};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new Rc(null,gt`
      :host::before {
        right: calc((${T.vxp} - ${T.Han}) * 1px);
      }
    `),An(gt`
        :host {
          background: ${_e.ButtonFace};
          border-color: ${_e.ButtonFace};
          color: ${_e.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${_e.Highlight};
          color: ${_e.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${_e.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${_e.Canvas};
          color: ${_e.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${nn}) {
          outline-color: ${_e.CanvasText};
        }
      `))}),jc={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};let Dh=(()=>{class a extends Dn{constructor(){super(...arguments),this.role="menuitem",this.hasSubmenu=!1,this.currentDirection=er.N.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case Ia:case" ":return this.invoke(),!1;case Ya:return this.expandAndFocus(),!1;case xa:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case"menuitemcheckbox":this.checked=!this.checked;break;case"menuitem":this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case"menuitemradio":this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>"menu"===t.getAttribute("role")),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(t){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=Ll(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,s){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),xn.SO.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"disabled",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"expanded",void 0),(0,J.gn)([Ze.LO],a.prototype,"startColumnCount",void 0),(0,J.gn)([z.Lj],a.prototype,"role",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"checked",void 0),(0,J.gn)([Ze.LO],a.prototype,"submenuRegion",void 0),(0,J.gn)([Ze.LO],a.prototype,"hasSubmenu",void 0),(0,J.gn)([Ze.LO],a.prototype,"currentDirection",void 0),(0,J.gn)([Ze.LO],a.prototype,"submenu",void 0),a})();Ri(Dh,oo);let Eh=(()=>{class a extends Dn{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Ou(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const s=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[s].setAttribute("tabindex","0"),this.focusIndex=s}},this.handleItemFocus=t=>{const s=t.target;void 0!==this.menuItems&&s!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(s),s.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||void 0===this.menuItems||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const s=t.target;null===this.expandedItem||s!==this.expandedItem||!1!==s.expanded?s.expanded&&(null!==this.expandedItem&&this.expandedItem!==s&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=s,this.focusIndex=this.menuItems.indexOf(s),s.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const s=this.menuItems.filter(this.isMenuItemElement);s.length&&(this.focusIndex=0);const h=s.reduce((E,k)=>{const $=function c(E){const k=E.getAttribute("role"),$=E.querySelector("[slot=start]");return"menuitem"!==k&&null===$||"menuitem"===k&&null!==$?1:"menuitem"!==k&&null!==$?2:0}(k);return E>$?E:$},0);s.forEach((E,k)=>{E.setAttribute("tabindex",0===k?"0":"-1"),E.addEventListener("expanded-change",this.handleExpandedChanged),E.addEventListener("focus",this.handleItemFocus),E instanceof Dh&&(E.startColumnCount=h)})},this.changeHandler=t=>{if(void 0===this.menuItems)return;const s=t.target,c=this.menuItems.indexOf(s);if(-1!==c&&"menuitemradio"===s.role&&!0===s.checked){for(let E=c-1;E>=0;--E){const k=this.menuItems[E],$=k.getAttribute("role");if("menuitemradio"===$&&(k.checked=!1),"separator"===$)break}const h=this.menuItems.length-1;for(let E=c+1;E<=h;++E){const k=this.menuItems[E],$=k.getAttribute("role");if("menuitemradio"===$&&(k.checked=!1),"separator"===$)break}}},this.isMenuItemElement=t=>Ou(t)&&a.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,s){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),xn.SO.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented&&void 0!==this.menuItems)switch(t.key){case ys:return void this.setFocus(this.focusIndex+1,1);case bs:return void this.setFocus(this.focusIndex-1,-1);case Ys:return void this.setFocus(this.menuItems.length-1,-1);case ua:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,s){if(void 0!==this.menuItems)for(;t>=0&&t<this.menuItems.length;){const c=this.menuItems[t];if(this.isFocusableElement(c)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,c.setAttribute("tabindex","0"),c.focus();break}t+=s}}}return a.focusableElementRoles=jc,(0,J.gn)([Ze.LO],a.prototype,"items",void 0),a})();const ev=class Jm extends Eh{connectedCallback(){super.connectedCallback(),T.IfY.setValueFor(this,T.s55)}}.compose({baseName:"menu",baseClass:Eh,template:(a,r)=>Ct`
    <template
        slot="${t=>t.slot?t.slot:t.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(t,s)=>t.handleMenuKeyDown(s.event)}"
        @focusout="${(t,s)=>t.handleFocusOut(s.event)}"
    >
        <slot ${Vi("items")}></slot>
    </template>
`,styles:(a,r)=>gt`
    ${jn("block")} :host {
      background: ${T.s55};
      border: calc(${T.Han} * 1px) solid transparent;
      border-radius: calc(${T.rSr} * 1px);
      box-shadow: ${Im};
      padding: calc((${T._5n} - ${T.Han}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${T._5n} * 2px);
    }

    ::slotted(${a.tagFor(Dh)}) {
      margin: 0 calc(${T._5n} * 1px);
    }

    ::slotted(${a.tagFor(Vc)}) {
      margin: calc(${T._5n} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${T._5n} * 1px) 0;
      border: none;
      border-top: calc(${T.Han} * 1px) solid ${T.dtw};
    }
  `.withBehaviors(An(gt`
        :host([slot='submenu']) {
          background: ${_e.Canvas};
          border-color: ${_e.CanvasText};
        }
      `))}),Hc=Dh.compose({baseName:"menu-item",template:(a,r)=>Ct`
    <template
        role="${t=>t.role}"
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>"menuitem"!==t.role?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,s)=>t.handleMenuItemKeyDown(s.event)}"
        @click="${(t,s)=>t.handleMenuItemClick(s.event)}"
        @mouseover="${(t,s)=>t.handleMouseOver(s.event)}"
        @mouseout="${(t,s)=>t.handleMouseOut(s.event)}"
        class="${t=>t.disabled?"disabled":""} ${t=>t.expanded?"expanded":""} ${t=>`indent-${t.startColumnCount}`}"
    >
            ${ji(t=>"menuitemcheckbox"===t.role,Ct`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${r.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${ji(t=>"menuitemradio"===t.role,Ct`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${r.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${So(0,r)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Pr(0,r)}
        ${ji(t=>t.hasSubmenu,Ct`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${r.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${ji(t=>t.expanded,Ct`
                <${a.tagFor(ln)}
                    :anchorElement="${t=>t}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${t=>t.currentDirection}"
                    @loaded="${t=>t.submenuLoaded()}"
                    ${Wn("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${a.tagFor(ln)}>
            `)}
    </template>
`,styles:(a,r)=>gt`
    ${jn("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Pi}
      box-sizing: border-box;
      height: calc(${kn} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${T.CHi};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${T.UWU} * 1px);
      border: calc(${T.Han} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${nn}) {
      ${Ks}
    }

    :host(:not([disabled]):hover) {
      background: ${T.QpD};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${T.sG3};
      color: ${T.CHi};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${_s};
      opacity: ${T.VFZ};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${T.Q5n};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(An(gt`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${_e.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${_e.Highlight};
          color: ${_e.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${nn}) ::slotted([slot='end']:not(svg)) {
          color: ${_e.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${_e.Highlight};
          color: ${_e.HighlightText};
        }
        :host(:${nn}) {
          background: ${_e.Highlight};
          outline-color: ${_e.ButtonText};
          color: ${_e.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${nn}) {
          background: ${_e.ButtonFace};
          color: ${_e.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${nn}) {
          outline-color: ${_e.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${_e.ButtonText};
          background: ${_e.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${_e.HighlightText};
          border-color: ${_e.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${nn}) .expanded-toggle,
            :host(:${nn}) .checkbox,
            :host(:${nn}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${nn}) .checkbox,
            :host([checked]:${nn}) .radio {
          border-color: ${_e.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${_e.Highlight};
          color: ${_e.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${_e.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${_e.Highlight};
        }
      `),new Rc(gt`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,gt`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '});class pp extends Dn{}class xh extends(Qa(pp)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let gp=(()=>{class a extends xh{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&xn.SO.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"autofocus",void 0),(0,J.gn)([z.Lj],a.prototype,"placeholder",void 0),(0,J.gn)([z.Lj],a.prototype,"type",void 0),(0,J.gn)([z.Lj],a.prototype,"list",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"maxlength",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"minlength",void 0),(0,J.gn)([z.Lj],a.prototype,"pattern",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"size",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"spellcheck",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedNodes",void 0),a})();class sd{}Ri(sd,Ka),Ri(gp,oo,sd);class nv extends Dn{}class mp extends(Qa(nv)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Ih=(()=>{class a extends mp{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,s){var c;this.max=Math.max(s,null!==(c=this.min)&&void 0!==c?c:s);const h=Math.min(this.min,this.max);void 0!==this.min&&this.min!==h&&(this.min=h),this.value=this.getValidValue(this.value)}minChanged(t,s){var c;this.min=Math.min(s,null!==(c=this.max)&&void 0!==c?c:s);const h=Math.max(this.min,this.max);void 0!==this.max&&this.max!==h&&(this.max=h),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,s){this.value=this.getValidValue(s),s===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),void 0!==t&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var s,c;let h=parseFloat(parseFloat(t).toPrecision(12));return isNaN(h)?h="":(h=Math.min(h,null!==(s=this.max)&&void 0!==s?s:h),h=Math.max(h,null!==(c=this.min)&&void 0!==c?c:h).toString()),h}stepUp(){const t=parseFloat(this.value),s=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=s.toString()}stepDown(){const t=parseFloat(this.value),s=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=s.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&xn.SO.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case bs:return this.stepUp(),!1;case ys:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"autofocus",void 0),(0,J.gn)([(0,z.Lj)({attribute:"hide-step",mode:"boolean"})],a.prototype,"hideStep",void 0),(0,J.gn)([z.Lj],a.prototype,"placeholder",void 0),(0,J.gn)([z.Lj],a.prototype,"list",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"maxlength",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"minlength",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"size",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"step",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"max",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"min",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedNodes",void 0),a})();Ri(Ih,oo,sd);const Uc=".root",pw=(()=>{class a extends Ih{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}return(0,At.gn)([z.Lj],a.prototype,"appearance",void 0),a})().compose({baseName:"number-field",baseClass:Ih,styles:(a,r)=>gt`
    ${jn("inline-block")}

    ${Lc(0,0,Uc)}

    ${Ju()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${T._5n} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      margin: auto;
      fill: currentcolor;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }

    .controls {
      opacity: 0;
      position: relative;
      top: -1px;
      z-index: 3;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }

    .step-up,
    .step-down {
      display: flex;
      padding: 0 8px;
      cursor: pointer;
    }

    .step-up {
      padding-top: 3px;
    }
  `.withBehaviors(Ui("outline",zl(0,0,Uc)),Ui("filled",ed(0,0,Uc)),An(td(0,0,Uc))),template:(a,r)=>Ct`
    <template class="${t=>t.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Vi("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${So(0,r)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                @keydown="${(t,s)=>t.handleKeyDown(s.event)}"
                @blur="${(t,s)=>t.handleBlur()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                type="text"
                inputmode="numeric"
                min="${t=>t.min}"
                max="${t=>t.max}"
                step="${t=>t.step}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Wn("control")}
            />
            ${ji(t=>!t.hideStep&&!t.readOnly&&!t.disabled,Ct`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${t=>t.stepUp()}">
                            <slot name="step-up-glyph">
                                ${r.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${t=>t.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${r.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${Pr(0,r)}
        </div>
    </template>
`,shadowOptions:{delegatesFocus:!0},stepDownGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',stepUpGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n'});let rv=(()=>{class a extends Dn{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t="number"==typeof this.min?this.min:0,h=("number"==typeof this.max?this.max:100)-t;this.percentComplete=0===h?0:Math.fround((("number"==typeof this.value?this.value:0)-t)/h*100)}}return(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"value",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"min",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"max",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"paused",void 0),(0,J.gn)([Ze.LO],a.prototype,"percentComplete",void 0),a})();const ov=class zc extends rv{}.compose({baseName:"progress",template:(a,r)=>Ct`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${ji(t=>"number"==typeof t.value,Ct`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${t=>t.percentComplete}%"
                    ></div>
                </div>
            `,Ct`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${r.indeterminateIndicator1||""}
                        ${r.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(a,r)=>gt`
    ${jn("flex")} :host {
      align-items: center;
      height: calc((${T.Han} * 3) * 1px);
    }

    .progress {
      background-color: ${T.rU8};
      border-radius: calc(${T._5n} * 1px);
      width: 100%;
      height: calc(${T.Han} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${T.Avx};
      border-radius: calc(${T._5n} * 1px);
      height: calc((${T.Han} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${T.Han} * 3) * 1px);
      border-radius: calc(${T._5n} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${T.Avx};
      border-radius: calc(${T._5n} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${T.Avx};
      border-radius: calc(${T._5n} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${T.Q5n};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${T.Q5n};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(An(gt`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${_e.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${_e.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '}),lv=class bw extends rv{}.compose({baseName:"progress-ring",template:(a,r)=>Ct`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${ji(t=>"number"==typeof t.value,Ct`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>44*t.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,Ct`
                <slot name="indeterminate" slot="indeterminate">
                    ${r.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(a,r)=>gt`
    ${jn("flex")} :host {
      align-items: center;
      height: calc(${kn} * 1px);
      width: calc(${kn} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${T.Avx};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${T.Avx};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${T.Q5n};
    }

    :host(.paused) .determinate {
      stroke: ${T.Q5n};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(An(gt`
        .background {
          stroke: ${_e.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${_e.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${_e.GrayText};
        }
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '});class ww extends Dn{}class cv extends(Wf(ww)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Cw=(()=>{class a extends cv{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(" "!==t.key)return!0;!this.checked&&!this.readOnly&&(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}connectedCallback(){var t,s;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(s=this.defaultChecked)&&void 0!==s&&s,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([Ze.LO],a.prototype,"name",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedNodes",void 0),a})().compose({baseName:"radio",template:(a,r)=>Ct`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${r.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Vi("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")} :host {
      --input-size: calc((${kn} / 2) + ${T._5n});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${T.Han} * 1px) solid ${T.rU8};
      background: ${T.pB6};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Pi}
      color: ${T.CHi};
      ${""} padding-inline-start: calc(${T._5n} * 2px + 2px);
      margin-inline-end: calc(${T._5n} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${T.w41};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${T.vFq};
      border-color: ${T.gKw};
    }

    :host(:not(.disabled):active) .control {
      background: ${T.bWE};
      border-color: ${T.ekh};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${nn}) .control {
      ${Al}
      background: ${T.W3V};
    }

    :host(.checked) .control {
      background: ${T.Avx};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${T.OCG};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${T.UEO};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${_s};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${T.VFZ};
    }
  `.withBehaviors(An(gt`
        .control {
          background: ${_e.Field};
          border-color: ${_e.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${_e.Highlight};
        }
        :host(:${nn}) .control {
          forced-color-adjust: none;
          background: ${_e.Field};
          outline-color: ${_e.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${_e.Highlight};
          background: ${_e.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${_e.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${_e.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${_e.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${_e.Field};
          border-color: ${_e.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${_e.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '}),Dw=(()=>{class a extends Dn{constructor(){super(...arguments),this.orientation="horizontal",this.radioChangeHandler=t=>{const s=t.target;s.checked&&(this.slottedRadioButtons.forEach(c=>{c!==s&&(c.checked=!1,this.isInsideFoundationToolbar||c.setAttribute("tabindex","-1"))}),this.selectedRadio=s,this.value=s.value,s.setAttribute("tabindex","0"),this.focusedRadio=s),t.stopPropagation()},this.moveToRadioByIndex=(t,s)=>{const c=t[s];this.isInsideToolbar||(c.setAttribute("tabindex","0"),c.readOnly?this.slottedRadioButtons.forEach(h=>{h!==c&&h.setAttribute("tabindex","-1")}):(c.checked=!0,this.selectedRadio=c)),this.focusedRadio=c,c.focus()},this.moveRightOffGroup=()=>{var t;null===(t=this.nextElementSibling)||void 0===t||t.focus()},this.moveLeftOffGroup=()=>{var t;null===(t=this.previousElementSibling)||void 0===t||t.focus()},this.focusOutHandler=t=>{const s=this.slottedRadioButtons,c=t.target,h=null!==c?s.indexOf(c):0,E=this.focusedRadio?s.indexOf(this.focusedRadio):-1;return(0===E&&h===E||E===s.length-1&&E===h)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),s.forEach(k=>{k!==this.selectedRadio&&k.setAttribute("tabindex","-1")}))):(this.focusedRadio=s[0],this.focusedRadio.setAttribute("tabindex","0"),s.forEach(k=>{k!==this.focusedRadio&&k.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const s=t.target;s&&(s.checked||0===this.slottedRadioButtons.indexOf(s)?(s.setAttribute("tabindex","0"),this.selectedRadio=s):(s.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=s),t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,s,c)=>t===s.length&&this.isInsideToolbar&&c===Ya,this.shouldMoveOffGroupToTheLeft=(t,s)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&s===xa,this.checkFocusedRadio=()=>{null!==this.focusedRadio&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const s=this.slottedRadioButtons;let c=0;if(c=this.focusedRadio?s.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(c,s,t.key))this.moveRightOffGroup();else for(c===s.length&&(c=0);c<s.length&&s.length>1;){if(!s[c].disabled){this.moveToRadioByIndex(s,c);break}if(this.focusedRadio&&c===s.indexOf(this.focusedRadio))break;if(c+1>=s.length){if(this.isInsideToolbar)break;c=0}else c+=1}},this.moveLeft=t=>{const s=this.slottedRadioButtons;let c=0;if(c=this.focusedRadio?s.indexOf(this.focusedRadio)-1:0,c=c<0?s.length-1:c,this.shouldMoveOffGroupToTheLeft(s,t.key))this.moveLeftOffGroup();else for(;c>=0&&s.length>1;){if(!s[c].disabled){this.moveToRadioByIndex(s,c);break}if(this.focusedRadio&&c===s.indexOf(this.focusedRadio))break;c-1<0?c=s.length-1:c-=1}},this.keydownHandler=t=>{const s=t.key;if(s in wc&&this.isInsideFoundationToolbar)return!0;switch(s){case Ia:this.checkFocusedRadio();break;case Ya:case ys:this.direction===er.N.ltr?this.moveRight(t):this.moveLeft(t);break;case xa:case bs:this.direction===er.N.ltr?this.moveLeft(t):this.moveRight(t);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.readOnly=!!this.readOnly})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.disabled=!!this.disabled})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,s){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return null!==(t=this.parentToolbar)&&void 0!==t&&t}get isInsideFoundationToolbar(){var t;return!(null===(t=this.parentToolbar)||void 0===t||!t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Ll(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(h=>h.hasAttribute("checked")),s=t?t.length:0;s>1&&(t[s-1].checked=!0);let c=!1;if(this.slottedRadioButtons.forEach(h=>{void 0!==this.name&&h.setAttribute("name",this.name),this.disabled&&(h.disabled=!0),this.readOnly&&(h.readOnly=!0),this.value&&this.value===h.value?(this.selectedRadio=h,this.focusedRadio=h,h.checked=!0,h.setAttribute("tabindex","0"),c=!0):(this.isInsideFoundationToolbar||h.setAttribute("tabindex","-1"),h.checked=!1),h.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const h=this.slottedRadioButtons.filter(k=>k.hasAttribute("checked")),E=null!==h?h.length:0;if(E>0&&!c){const k=h[E-1];k.checked=!0,this.focusedRadio=k,k.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([(0,z.Lj)({attribute:"disabled",mode:"boolean"})],a.prototype,"disabled",void 0),(0,J.gn)([z.Lj],a.prototype,"name",void 0),(0,J.gn)([z.Lj],a.prototype,"value",void 0),(0,J.gn)([z.Lj],a.prototype,"orientation",void 0),(0,J.gn)([Ze.LO],a.prototype,"childItems",void 0),(0,J.gn)([Ze.LO],a.prototype,"slottedRadioButtons",void 0),a})().compose({baseName:"radio-group",template:(a,r)=>Ct`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @focusout="${(t,s)=>t.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>"horizontal"===t.orientation?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Vi({property:"slottedRadioButtons",filter:da("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(a,r)=>gt`
  ${jn("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});class ad extends Dn{}class Wc extends(Qa(ad)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Gc=(()=>{class a extends Wc{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&xn.SO.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"autofocus",void 0),(0,J.gn)([z.Lj],a.prototype,"placeholder",void 0),(0,J.gn)([z.Lj],a.prototype,"list",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"maxlength",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"minlength",void 0),(0,J.gn)([z.Lj],a.prototype,"pattern",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"size",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"spellcheck",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedNodes",void 0),a})();class Zc{}function ld(a,r,t){return a.nodeType!==Node.TEXT_NODE||"string"==typeof a.nodeValue&&!!a.nodeValue.trim().length}Ri(Zc,Ka),Ri(Gc,oo,Zc);const Yc=".root",fv=Ai.DesignToken.create("clear-button-hover").withDefault(a=>{const r=T.DFW.getValueFor(a),t=T.smF.getValueFor(a);return r.evaluate(a,t.evaluate(a).focus).hover}),Th=Ai.DesignToken.create("clear-button-active").withDefault(a=>{const r=T.DFW.getValueFor(a),t=T.smF.getValueFor(a);return r.evaluate(a,t.evaluate(a).focus).active}),Mh=(()=>{class a extends Gc{constructor(){super(...arguments),this.appearance="outline"}}return(0,At.gn)([z.Lj],a.prototype,"appearance",void 0),a})().compose({baseName:"search",baseClass:Gc,template:(a,r)=>Ct`
  <template
    class="
            ${t=>t.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${Vi({property:"defaultSlottedNodes",filter:ld})}></slot>
    </label>
    <div class="root" part="root" ${Wn("root")}>
      ${So(0,r)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${t=>t.handleTextInput()}"
          @change="${t=>t.handleChange()}"
          ?autofocus="${t=>t.autofocus}"
          ?disabled="${t=>t.disabled}"
          list="${t=>t.list}"
          maxlength="${t=>t.maxlength}"
          minlength="${t=>t.minlength}"
          pattern="${t=>t.pattern}"
          placeholder="${t=>t.placeholder}"
          ?readonly="${t=>t.readOnly}"
          ?required="${t=>t.required}"
          size="${t=>t.size}"
          ?spellcheck="${t=>t.spellcheck}"
          :value="${t=>t.value}"
          type="search"
          aria-atomic="${t=>t.ariaAtomic}"
          aria-busy="${t=>t.ariaBusy}"
          aria-controls="${t=>t.ariaControls}"
          aria-current="${t=>t.ariaCurrent}"
          aria-describedby="${t=>t.ariaDescribedby}"
          aria-details="${t=>t.ariaDetails}"
          aria-disabled="${t=>t.ariaDisabled}"
          aria-errormessage="${t=>t.ariaErrormessage}"
          aria-flowto="${t=>t.ariaFlowto}"
          aria-haspopup="${t=>t.ariaHaspopup}"
          aria-hidden="${t=>t.ariaHidden}"
          aria-invalid="${t=>t.ariaInvalid}"
          aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
          aria-label="${t=>t.ariaLabel}"
          aria-labelledby="${t=>t.ariaLabelledby}"
          aria-live="${t=>t.ariaLive}"
          aria-owns="${t=>t.ariaOwns}"
          aria-relevant="${t=>t.ariaRelevant}"
          aria-roledescription="${t=>t.ariaRoledescription}"
          ${Wn("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${t=>t.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${t=>t.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${Pr(0,r)}
    </div>
  </template>
`,styles:(a,r)=>gt`
    ${jn("inline-block")}

    ${Lc(0,0,Yc)}

    ${Ju()}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${T._5n} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${T.CHi};
      fill: currentcolor;
      border: none;
      border-radius: calc(${T.UWU} * 1px);
      min-width: calc(${kn} * 1px);
      ${Pi}
      outline: none;
      padding: 0 calc((10 + (${T._5n} * 2 * ${T.hVk})) * 1px);
    }
    .clear-button:hover {
      background: ${fv};
    }
    .clear-button:active {
      background: ${Th};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${a.tagFor(Vu)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(Ui("outline",zl(0,0,Yc)),Ui("filled",ed(0,0,Yc)),An(td(0,0,Yc))),start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class Sw extends nw{}class Ns extends(Qa(Sw)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let _p=(()=>{class a extends Ns{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=ga("listbox-"),this.maxHeight=0}openChanged(t,s){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void xn.SO.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return Ze.y$.track(this,"value"),this._value}set value(t){var s,c,h,E,k,$,Y;const ye=`${this._value}`;if(null!==(s=this._options)&&void 0!==s&&s.length){const ke=this._options.findIndex(_t=>_t.value===t),lt=null!==(h=null===(c=this._options[this.selectedIndex])||void 0===c?void 0:c.value)&&void 0!==h?h:null,bt=null!==(k=null===(E=this._options[ke])||void 0===E?void 0:E.value)&&void 0!==k?k:null;(-1===ke||lt!==bt)&&(t="",this.selectedIndex=ke),t=null!==(Y=null===($=this.firstSelectedOption)||void 0===$?void 0:$.value)&&void 0!==Y?Y:t}ye!==t&&(this._value=t,super.valueChanged(ye,t),Ze.y$.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var s,c;this.$fastController.isConnected&&(this.value=null!==(c=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==c?c:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,s){super.selectedIndexChanged(t,s),this.updateValue()}positionChanged(t,s){this.positionAttribute=s,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),c=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>c?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~t.top:~~c}get displayValue(){var t,s;return Ze.y$.track(this,"displayValue"),null!==(s=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text)&&void 0!==s?s:""}disabledChanged(t,s){super.disabledChanged&&super.disabledChanged(t,s),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const s=t.target.closest("option,[role=option]");if(s&&s.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var s;if(super.focusoutHandler(t),!this.open)return!0;const c=t.relatedTarget;this.isSameNode(c)?this.focus():null!==(s=this.options)&&void 0!==s&&s.includes(c)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,s){super.handleChange(t,s),"value"===s&&this.updateValue()}slottedOptionsChanged(t,s){this.options.forEach(c=>{Ze.y$.getNotifier(c).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,s),this.options.forEach(c=>{Ze.y$.getNotifier(c).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var s;return t.offsetX>=0&&t.offsetX<=(null===(s=this.listbox)||void 0===s?void 0:s.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,s){super.multipleChanged(t,s),this.proxy&&(this.proxy.multiple=s)}selectedOptionsChanged(t,s){var c;super.selectedOptionsChanged(t,s),null===(c=this.options)||void 0===c||c.forEach((h,E)=>{var k;const $=null===(k=this.proxy)||void 0===k?void 0:k.options.item(E);$&&($.selected=h.selected)})}setDefaultSelectedOption(){var t;const s=null!==(t=this.options)&&void 0!==t?t:Array.from(this.children).filter(el.slottedOptionFilter),c=s?.findIndex(h=>h.hasAttribute("selected")||h.selected||h.value===this.value);this.selectedIndex=-1===c?0:c}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const s=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);s&&this.proxy.options.add(s)}))}keydownHandler(t){super.keydownHandler(t);const s=t.key||t.key.charCodeAt(0);switch(s){case" ":t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case ua:case Ys:t.preventDefault();break;case Ia:t.preventDefault(),this.open=!this.open;break;case Il:this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break;case Hd:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(s===ys||s===bs)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,s){super.sizeChanged(t,s),this.proxy&&(this.proxy.size=s)}updateDisplayValue(){this.collapsible&&Ze.y$.notify(this,"displayValue")}}return(0,J.gn)([(0,z.Lj)({attribute:"open",mode:"boolean"})],a.prototype,"open",void 0),(0,J.gn)([Ze.lk],a.prototype,"collapsible",null),(0,J.gn)([Ze.LO],a.prototype,"control",void 0),(0,J.gn)([(0,z.Lj)({attribute:"position"})],a.prototype,"positionAttribute",void 0),(0,J.gn)([Ze.LO],a.prototype,"position",void 0),(0,J.gn)([Ze.LO],a.prototype,"maxHeight",void 0),a})(),pv=(()=>{class a{}return(0,J.gn)([Ze.LO],a.prototype,"ariaControls",void 0),a})();Ri(pv,qu),Ri(_p,oo,pv);const gv=(()=>{class a extends _p{appearanceChanged(t,s){t!==s&&(this.classList.add(s),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&T.IfY.setValueFor(this.listbox,T.s55)}}return(0,At.gn)([(0,z.Lj)({mode:"fromView"})],a.prototype,"appearance",void 0),a})().compose({baseName:"select",baseClass:_p,template:(a,r)=>Ct`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @focusin="${(t,s)=>t.focusinHandler(s.event)}"
        @focusout="${(t,s)=>t.focusoutHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @mousedown="${(t,s)=>t.mousedownHandler(s.event)}"
    >
        ${ji(t=>t.collapsible,Ct`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${Wn("control")}
                >
                    ${So(0,r)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${r.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Pr(0,r)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!!t.collapsible&&!t.open}"
            ${Wn("listbox")}
        >
            <slot
                ${Vi({filter:el.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(a,r)=>Fm().withBehaviors(Ui("outline",qa(0,0,fh,ep)),Ui("filled",ed(0,0,Pm,fh).withBehaviors(An(td(0,0,Pm,fh)))),Ui("stealth",Of(0,0,fh,ep)),An(gt`
    :host([open]) .listbox {
      background: ${_e.ButtonFace};
      border-color: ${_e.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),Dp=(()=>{class a extends Dn{constructor(){super(...arguments),this.shape="rect"}}return(0,J.gn)([z.Lj],a.prototype,"fill",void 0),(0,J.gn)([z.Lj],a.prototype,"shape",void 0),(0,J.gn)([z.Lj],a.prototype,"pattern",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"shimmer",void 0),a})().compose({baseName:"skeleton",template:(a,r)=>Ct`
    <template
        class="${t=>"circle"===t.shape?"circle":"rect"}"
        pattern="${t=>t.pattern}"
        ?shimmer="${t=>t.shimmer}"
    >
        ${ji(t=>!0===t.shimmer,Ct`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${t=>t.pattern}" role="presentation">
            <img class="pattern" src="${t=>t.pattern}" />
        </object>
        <slot></slot>
    </template>
`,styles:(a,r)=>gt`
    ${jn("block")} :host {
      --skeleton-fill-default: ${T._jX};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${T.d$x} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${T.UWU} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${jn("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${T._jX});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors(An(gt`
        :host{
          background-color: ${_e.CanvasText};
        }
      `))});function nl(a,r,t,s){let c=Du(0,1,(a-r)/(t-r));return s===er.N.rtl&&(c=1-c),c}class vv extends Dn{}class yv extends(Qa(vv)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const wv=(()=>{class a extends yv{constructor(){super(...arguments),this.direction=er.N.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation="horizontal",this.mode="single-value",this.keypressHandler=t=>{if(!this.readOnly)if(t.key===ua)t.preventDefault(),this.value=`${this.min}`;else if(t.key===Ys)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Ya:case bs:t.preventDefault(),this.increment();break;case xa:case ys:t.preventDefault(),this.decrement()}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,0===this.trackWidth&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const s=(t?"remove":"add")+"EventListener";this[s]("keydown",this.keypressHandler),this[s]("mousedown",this.handleMouseDown),this.thumb[s]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[s]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const s=(null!==t?"add":"remove")+"EventListener";window[s]("mouseup",this.handleWindowMouseUp),window[s]("mousemove",this.handleMouseMove,{passive:!0}),window[s]("touchmove",this.handleMouseMove,{passive:!0}),window[s]("touchend",this.handleWindowMouseUp),this.isDragging=null!==t},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const s=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,c="horizontal"===this.orientation?s.pageX-document.documentElement.scrollLeft-this.trackLeft:s.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(c)}`},this.calculateNewValue=t=>{const s=nl(t,"horizontal"===this.orientation?this.trackMinWidth:this.trackMinHeight,"horizontal"===this.orientation?this.trackWidth:this.trackHeight,this.direction);return this.convertToConstrainedValue((this.max-this.min)*s+this.min)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const s=(null!==t?"add":"remove")+"EventListener";if((null===t||!this.disabled&&!this.readOnly)&&(window[s]("mouseup",this.handleWindowMouseUp),window.document[s]("mouseleave",this.handleWindowMouseUp),window[s]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const c="horizontal"===this.orientation?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(c)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let s=t-this.min;const h=s-Math.round(s/this.step)*(this.stepMultiplier*this.step)/this.stepMultiplier;return s=h>=Number(this.step)/2?s-h+Number(this.step):s-h,s+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,s){super.valueChanged(t,s),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Ll(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==er.N.rtl&&"vertical"!==this.orientation?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),s=this.convertToConstrainedValue(t),c=s<Number(this.max)?`${s}`:`${this.max}`;this.value=c}decrement(){const t=this.direction!==er.N.rtl&&"vertical"!==this.orientation?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),s=this.convertToConstrainedValue(t),c=s>Number(this.min)?`${s}`:`${this.min}`;this.value=c}setThumbPositionForOrientation(t){const c=100*(1-nl(Number(this.value),Number(this.min),Number(this.max),t));this.position="horizontal"===this.orientation?this.isDragging?`right: ${c}%; transition: none;`:`right: ${c}%; transition: all 0.2s ease;`:this.isDragging?`bottom: ${c}%; transition: none;`:`bottom: ${c}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",s=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,s)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if("string"==typeof this.value)if(0===this.value.length)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([Ze.LO],a.prototype,"direction",void 0),(0,J.gn)([Ze.LO],a.prototype,"isDragging",void 0),(0,J.gn)([Ze.LO],a.prototype,"position",void 0),(0,J.gn)([Ze.LO],a.prototype,"trackWidth",void 0),(0,J.gn)([Ze.LO],a.prototype,"trackMinWidth",void 0),(0,J.gn)([Ze.LO],a.prototype,"trackHeight",void 0),(0,J.gn)([Ze.LO],a.prototype,"trackLeft",void 0),(0,J.gn)([Ze.LO],a.prototype,"trackMinHeight",void 0),(0,J.gn)([Ze.LO],a.prototype,"valueTextFormatter",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"min",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"max",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"step",void 0),(0,J.gn)([z.Lj],a.prototype,"orientation",void 0),(0,J.gn)([z.Lj],a.prototype,"mode",void 0),a})().compose({baseName:"slider",template:(a,r)=>Ct`
    <template
        role="slider"
        class="${t=>t.readOnly?"readonly":""}
        ${t=>t.orientation||"horizontal"}"
        tabindex="${t=>t.disabled?null:0}"
        aria-valuetext="${t=>t.valueTextFormatter(t.value)}"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        aria-disabled="${t=>!!t.disabled||void 0}"
        aria-readonly="${t=>!!t.readOnly||void 0}"
        aria-orientation="${t=>t.orientation}"
        class="${t=>t.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${Wn("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${t=>t.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${Wn("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${t=>t.position}"
            >
                <slot name="thumb">${r.thumb||""}</slot>
            </div>
        </div>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-grid")} :host {
      --thumb-size: calc((${kn} / 2) + ${T._5n} + (${T.Han} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${T._5n} / 2) * -1);
      --track-width: ${T._5n};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${T.UWU} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${nn}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${T.IfY}, 0 0 0 4px ${T.yGg};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${T.wFS}, ${T.wFS}),
        border-box ${T.U_Q};
      border: calc(${T.Han} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${T.Avx};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${T.OCG};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${T.UEO};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${T.wFS}, ${T.wFS}),
        border-box ${T.xBI};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${T.wFS}, ${T.wFS}),
        border-box ${T._ro};
    }
    .track-start {
      background: ${T.Avx};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${T.UWU} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${T.P0N};
      border: 1px solid ${T.rU8};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${T._5n} * 60px);
      min-width: calc(${T._5n} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${_s};
    }
    :host(.disabled) {
      opacity: ${T.VFZ};
    }
  `.withBehaviors(An(gt`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${_e.FieldText};
          background: ${_e.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${_e.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${_e.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${_e.Field};
        }
        :host(:${nn}) .thumb-cursor {
          background: ${_e.Highlight};
          border-color: ${_e.Highlight};
          box-shadow: 0 0 0 1px ${_e.Field}, 0 0 0 3px ${_e.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${_e.GrayText};
        }
      `)),thumb:'\n    <div class="thumb-cursor"></div>\n  '}),Oh={min:0,max:0,direction:er.N.ltr,orientation:"horizontal",disabled:!1},kw=(()=>{class a extends Dn{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=er.N.ltr,this.getSliderConfiguration=()=>{if(this.isSliderConfig(this.parentNode)){const t=this.parentNode,{min:s,max:c,direction:h,orientation:E,disabled:k}=t;void 0!==k&&(this.disabled=k),this.sliderDirection=h||er.N.ltr,this.sliderOrientation=E||"horizontal",this.sliderMaxPosition=c,this.sliderMinPosition=s}else this.sliderDirection=Oh.direction||er.N.ltr,this.sliderOrientation=Oh.orientation||"horizontal",this.sliderMaxPosition=Oh.max,this.sliderMinPosition=Oh.min},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:er.N.ltr,s=nl(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let c=Math.round(100*(1-s)),h=Math.round(100*s);return Number.isNaN(h)&&Number.isNaN(c)&&(c=50,h=50),"horizontal"===this.sliderOrientation?t===er.N.rtl?`right: ${h}%; left: ${c}%;`:`left: ${h}%; right: ${c}%;`:`top: ${h}%; bottom: ${c}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=Ze.y$.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,s){switch(s){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return void 0!==t.max&&void 0!==t.min}}return(0,J.gn)([Ze.LO],a.prototype,"positionStyle",void 0),(0,J.gn)([z.Lj],a.prototype,"position",void 0),(0,J.gn)([(0,z.Lj)({attribute:"hide-mark",mode:"boolean"})],a.prototype,"hideMark",void 0),(0,J.gn)([(0,z.Lj)({attribute:"disabled",mode:"boolean"})],a.prototype,"disabled",void 0),(0,J.gn)([Ze.LO],a.prototype,"sliderOrientation",void 0),(0,J.gn)([Ze.LO],a.prototype,"sliderMinPosition",void 0),(0,J.gn)([Ze.LO],a.prototype,"sliderMaxPosition",void 0),(0,J.gn)([Ze.LO],a.prototype,"sliderDirection",void 0),a})().compose({baseName:"slider-label",template:(a,r)=>Ct`
    <template
        aria-disabled="${t=>t.disabled}"
        class="${t=>t.sliderOrientation||"horizontal"}
            ${t=>t.disabled?"disabled":""}"
    >
        <div ${Wn("root")} part="root" class="root" style="${t=>t.positionStyle}">
            <div class="container">
                ${ji(t=>!t.hideMark,Ct`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`,styles:(a,r)=>gt`
    ${jn("block")} :host {
      ${Zd}
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${T.Han} * 1px);
      height: calc(${T._5n} * 1px);
      background: ${T.rU8};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${T._5n} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${T.VFZ};
    }
  `.withBehaviors(An(gt`
        .mark {
          forced-color-adjust: none;
          background: ${_e.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${_e.GrayText};
        }
        :host(.disabled) .mark {
          background: ${_e.GrayText};
        }
      `))});class Ow extends Dn{}class Cv extends(Wf(Ow)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Rw=(()=>{class a extends Cv{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case Ia:case" ":this.checked=!this.checked}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,s){super.checkedChanged(t,s),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}return(0,J.gn)([(0,z.Lj)({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedNodes",void 0),a})().compose({baseName:"switch",template:(a,r)=>Ct`
    <template
        role="switch"
        aria-checked="${t=>t.checked}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        class="${t=>t.checked?"checked":""}"
    >
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Vi("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${r.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(a,r)=>gt`
    :host([hidden]) {
      display: none;
    }

    ${jn("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${T.SVJ};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${T.VFZ};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${_s};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${kn} / 2) + ${T._5n}) * 2px);
      height: calc(((${kn} / 2) + ${T._5n}) * 1px);
      background: ${T.pB6};
      border-radius: calc(${kn} * 1px);
      border: calc(${T.Han} * 1px) solid ${T.rU8};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${T.vFq};
      border-color: ${T.gKw};
    }

    :host(:not(.disabled):active) .switch {
      background: ${T.bWE};
      border-color: ${T.ekh};
    }

    :host(:${nn}) .switch {
      ${Al}
      background: ${T.W3V};
    }

    :host(.checked) .switch {
      background: ${T.Avx};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${T.OCG};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${T.UEO};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${T.CHi};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${T.CHi};
      cursor: pointer;
      ${Pi}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${T.CHi};
      ${Pi}
      margin-inline-end: calc(${T._5n} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${T._5n} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${T.Avx};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${T.w41};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${T.OCG};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${T.lJV};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${T.UEO};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${T.PpH};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Rc(gt`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,gt`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),An(gt`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${_e.FieldText};
        }
        .switch {
          background: ${_e.Field};
          border-color: ${_e.FieldText};
        }
        :host(.checked) .switch {
          background: ${_e.Highlight};
          border-color: ${_e.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${_e.HighlightText};
          border-color: ${_e.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${_e.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${_e.Highlight};
        }
        :host(:${nn}) .switch {
          forced-color-adjust: none;
          background: ${_e.Field}; 
          border-color: ${_e.Highlight};
          outline-color: ${_e.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${_e.GrayText};
        }
        :host(.disabled) .switch {
          background: ${_e.Field};
          border-color: ${_e.GrayText};
        }
        .status-message,
        .label {
          color: ${_e.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});let Ev=(()=>{class a extends Dn{constructor(){super(...arguments),this.orientation="horizontal",this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",s="gridRow",c=this.isHorizontal()?t:s;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((h,E)=>{if("tab"===h.slot){const k=this.activeTabIndex===E&&this.isFocusableElement(h);this.activeindicator&&this.isFocusableElement(h)&&(this.showActiveIndicator=!0);const $=this.tabIds[E],Y=this.tabpanelIds[E];h.setAttribute("id",$),h.setAttribute("aria-selected",k?"true":"false"),h.setAttribute("aria-controls",Y),h.addEventListener("click",this.handleTabClick),h.addEventListener("keydown",this.handleTabKeyDown),h.setAttribute("tabindex",k?"0":"-1"),k&&(this.activetab=h,this.activeid=$)}h.style[t]="",h.style[s]="",h.style[c]=`${E+1}`,this.isHorizontal()?h.classList.remove("vertical"):h.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,s)=>{const c=this.tabIds[s];t.setAttribute("id",this.tabpanelIds[s]),t.setAttribute("aria-labelledby",c),this.activeTabIndex!==s?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const s=t.currentTarget;1===s.nodeType&&this.isFocusableElement(s)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(s),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case xa:t.preventDefault(),this.adjustBackward(t);break;case Ya:t.preventDefault(),this.adjustForward(t)}else switch(t.key){case bs:t.preventDefault(),this.adjustBackward(t);break;case ys:t.preventDefault(),this.adjustForward(t)}switch(t.key){case ua:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case Ys:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const s=this.tabs;let c=0;for(c=this.activetab?s.indexOf(this.activetab)+1:1,c===s.length&&(c=0);c<s.length&&s.length>1;){if(this.isFocusableElement(s[c])){this.moveToTabByIndex(s,c);break}if(this.activetab&&c===s.indexOf(this.activetab))break;c+1>=s.length?c=0:c+=1}},this.adjustBackward=t=>{const s=this.tabs;let c=0;for(c=this.activetab?s.indexOf(this.activetab)-1:0,c=c<0?s.length-1:c;c>=0&&s.length>1;){if(this.isFocusableElement(s[c])){this.moveToTabByIndex(s,c);break}c-1<0?c=s.length-1:c-=1}},this.moveToTabByIndex=(t,s)=>{const c=t[s];this.activetab=c,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=s,c.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,s){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(c=>c.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var s;return null!==(s=t.getAttribute("id"))&&void 0!==s?s:`tab-${ga()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var s;return null!==(s=t.getAttribute("id"))&&void 0!==s?s:`panel-${ga()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return"horizontal"===this.orientation}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",s=this.isHorizontal()?"translateX":"translateY",c=this.isHorizontal()?"offsetLeft":"offsetTop",h=this.activeIndicatorRef[c];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const E=this.activeIndicatorRef[c];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${s}(${E-h}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${s}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const s=this.tabs.filter(k=>this.isFocusableElement(k)),c=s.indexOf(this.activetab),h=Du(0,s.length-1,c+t),E=this.tabs.indexOf(s[h]);E>-1&&this.moveToTabByIndex(this.tabs,E)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}return(0,J.gn)([z.Lj],a.prototype,"orientation",void 0),(0,J.gn)([z.Lj],a.prototype,"activeid",void 0),(0,J.gn)([Ze.LO],a.prototype,"tabs",void 0),(0,J.gn)([Ze.LO],a.prototype,"tabpanels",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"activeindicator",void 0),(0,J.gn)([Ze.LO],a.prototype,"activeIndicatorRef",void 0),(0,J.gn)([Ze.LO],a.prototype,"showActiveIndicator",void 0),a})();Ri(Ev,oo);const $w=Ev.compose({baseName:"tabs",template:(a,r)=>Ct`
    <template class="${t=>t.orientation}">
        ${So(0,r)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Vi("tabs")}></slot>

            ${ji(t=>t.showActiveIndicator,Ct`
                    <div
                        ${Wn("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Pr(0,r)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Vi("tabpanels")}></slot>
        </div>
    </template>
`,styles:(a,r)=>gt`
      ${jn("grid")} :host {
        box-sizing: border-box;
        ${Pi}
        color: ${T.CHi};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${kn} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${T.UWU} * 1px);
        justify-self: center;
        background: ${T.Avx};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${T.vxp} * 1px);
        border-radius: calc(${T.UWU} * 1px);
        align-self: center;
        background: ${T.Avx};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(An(gt`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${_e.Highlight};
        }
      `))}),jw=(()=>{class a extends Dn{}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"disabled",void 0),a})().compose({baseName:"tab",template:(a,r)=>Ct`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`,styles:(a,r)=>gt`
      ${jn("inline-flex")} :host {
        box-sizing: border-box;
        ${Pi}
        height: calc((${kn} + (${T._5n} * 2)) * 1px);
        padding: 0 calc((6 + (${T._5n} * 2 * ${T.hVk})) * 1px);
        color: ${T.CHi};
        border-radius: calc(${T.UWU} * 1px);
        border: calc(${T.Han} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${T.CHi};
      }

      :host(:${nn}) {
        ${Ks}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${T.CHi};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(An(gt`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${_e.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${_e.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${_e.Highlight};
            fill: currentcolor;
          }
          :host(:${nn}) {
            background: transparent;
            outline-color: ${_e.ButtonText};
          }
        `))}),Ww=class Hw extends Dn{}.compose({baseName:"tab-panel",template:(a,r)=>Ct`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(a,r)=>gt`
  ${jn("block")} :host {
    box-sizing: border-box;
    ${Pi}
    padding: 0 calc((6 + (${T._5n} * 2 * ${T.hVk})) * 1px);
  }
`});class Gw extends Dn{}class Sv extends(Qa(Gw)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}let ya=(()=>{class a extends Sv{constructor(){super(...arguments),this.resize="none",this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"readOnly",void 0),(0,J.gn)([z.Lj],a.prototype,"resize",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"autofocus",void 0),(0,J.gn)([(0,z.Lj)({attribute:"form"})],a.prototype,"formId",void 0),(0,J.gn)([z.Lj],a.prototype,"list",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"maxlength",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id})],a.prototype,"minlength",void 0),(0,J.gn)([z.Lj],a.prototype,"name",void 0),(0,J.gn)([z.Lj],a.prototype,"placeholder",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id,mode:"fromView"})],a.prototype,"cols",void 0),(0,J.gn)([(0,z.Lj)({converter:z.Id,mode:"fromView"})],a.prototype,"rows",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"spellcheck",void 0),(0,J.gn)([Ze.LO],a.prototype,"defaultSlottedNodes",void 0),a})();Ri(ya,sd);const cd=".control",ud=(()=>{class a extends ya{appearanceChanged(t,s){t!==s&&(this.classList.add(s),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}return(0,At.gn)([z.Lj],a.prototype,"appearance",void 0),a})().compose({baseName:"text-area",baseClass:ya,template:(a,r)=>Ct`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>"none"!==t.resize?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Vi("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,s)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${Wn("control")}
        ></textarea>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")}

    ${Lc(0,0,cd)}

    ${Ju()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${kn} * 2) * 1px);
      padding: calc(${T._5n} * 1.5px) calc(${T._5n} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }

    :host([cols]) {
      width: initial;
    }

    :host([rows]) .control {
      height: initial;
    }
  `.withBehaviors(Ui("outline",zl(0,0,cd)),Ui("filled",ed(0,0,cd)),An(td(0,0,cd))),shadowOptions:{delegatesFocus:!0}}),Jc=".root",Rh=(()=>{class a extends gp{appearanceChanged(t,s){t!==s&&(this.classList.add(s),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}return(0,At.gn)([z.Lj],a.prototype,"appearance",void 0),a})().compose({baseName:"text-field",baseClass:gp,template:(a,r)=>Ct`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Vi({property:"defaultSlottedNodes",filter:ld})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${So(0,r)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Wn("control")}
            />
            ${Pr(0,r)}
        </div>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-block")}

    ${Lc(0,0,Jc)}

    ${Ju()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${T._5n} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(Ui("outline",zl(0,0,Jc)),Ui("filled",ed(0,0,Jc)),An(td(0,0,Jc))),shadowOptions:{delegatesFocus:!0}}),Ph=Object.freeze({[wc.ArrowUp]:{vertical:-1},[wc.ArrowDown]:{vertical:1},[wc.ArrowLeft]:{horizontal:{[er.N.ltr]:-1,[er.N.rtl]:1}},[wc.ArrowRight]:{horizontal:{[er.N.ltr]:1,[er.N.rtl]:-1}}});let Fh=(()=>{class a extends Dn{constructor(){super(...arguments),this._activeIndex=0,this.direction=er.N.ltr,this.orientation="horizontal"}get activeIndex(){return Ze.y$.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=Du(0,this.focusableElements.length-1,t),Ze.y$.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(t){var s;const c=null===(s=this.focusableElements)||void 0===s?void 0:s.findIndex(h=>h.contains(t.target));return c>-1&&this.activeIndex!==c&&this.setFocusedElement(c),!0}childItemsChanged(t,s){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Ll(this)}focusinHandler(t){const s=t.relatedTarget;!s||this.contains(s)||this.setFocusedElement()}getDirectionalIncrementer(t){var s,c,h,E,k;return null!==(k=null!==(h=null===(c=null===(s=Ph[t])||void 0===s?void 0:s[this.orientation])||void 0===c?void 0:c[this.direction])&&void 0!==h?h:null===(E=Ph[t])||void 0===E?void 0:E[this.orientation])&&void 0!==k?k:0}keydownHandler(t){const s=t.key;if(!(s in wc)||t.defaultPrevented||t.shiftKey)return!0;const c=this.getDirectionalIncrementer(s);if(!c)return!t.target.closest("[role=radiogroup]");const h=this.activeIndex+c;return this.focusableElements[h]&&t.preventDefault(),this.setFocusedElement(h),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const s=null===(t=this.focusableElements)||void 0===t?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(a.reduceFocusableItems,[]);const c=this.focusableElements.indexOf(s);this.activeIndex=Math.max(0,c),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var s;this.activeIndex=t,this.setFocusableElements(),null===(s=this.focusableElements[this.activeIndex])||void 0===s||s.focus()}static reduceFocusableItems(t,s){var c,h,E,k;const $="radio"===s.getAttribute("role"),Y=null===(h=null===(c=s.$fastController)||void 0===c?void 0:c.definition.shadowOptions)||void 0===h?void 0:h.delegatesFocus,ye=Array.from(null!==(k=null===(E=s.shadowRoot)||void 0===E?void 0:E.querySelectorAll("*"))&&void 0!==k?k:[]).some(ke=>Km(ke));return s.hasAttribute("disabled")||s.hasAttribute("hidden")||!(Km(s)||$||Y||ye)?s.childElementCount?t.concat(Array.from(s.children).reduce(a.reduceFocusableItems,[])):t:(t.push(s),t)}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,s)=>{t.tabIndex=this.activeIndex===s?0:-1})}}return(0,J.gn)([Ze.LO],a.prototype,"direction",void 0),(0,J.gn)([z.Lj],a.prototype,"orientation",void 0),(0,J.gn)([Ze.LO],a.prototype,"slottedItems",void 0),(0,J.gn)([Ze.LO],a.prototype,"slottedLabel",void 0),(0,J.gn)([Ze.LO],a.prototype,"childItems",void 0),a})(),Mv=(()=>{class a{}return(0,J.gn)([(0,z.Lj)({attribute:"aria-labelledby"})],a.prototype,"ariaLabelledby",void 0),(0,J.gn)([(0,z.Lj)({attribute:"aria-label"})],a.prototype,"ariaLabel",void 0),a})();Ri(Mv,Ka),Ri(Fh,oo,Mv);const Mp=class Tp extends Fh{}.compose({baseName:"toolbar",baseClass:Fh,template:(a,r)=>Ct`
    <template
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-orientation="${t=>t.orientation}"
        orientation="${t=>t.orientation}"
        role="toolbar"
        @mousedown="${(t,s)=>t.mouseDownHandler(s.event)}"
        @focusin="${(t,s)=>t.focusinHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        ${gh({property:"childItems",attributeFilter:["disabled","hidden"],filter:da(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${So(0,r)}
            <slot
                ${Vi({filter:da(),property:"slottedItems"})}
            ></slot>
            ${Pr(0,r)}
        </div>
    </template>
`,styles:(a,r)=>gt`
    ${jn("inline-flex")} :host {
      --toolbar-item-gap: calc(${T._5n} * 1px);
      background: ${T.IfY};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${nn}) {
      ${Ks}
    }

    .positioning-region {
      align-items: center;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      flex-grow: 1;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
      align-items: start;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    :host([orientation='vertical']) {
      display: inline-flex;
      flex-direction: column;
    }

    .start,
    .end {
      display: flex;
      align-items: center;
    }

    .end {
      margin-inline-start: auto;
    }

    .start__hidden,
    .end__hidden {
      display: none;
    }

    ::slotted(svg) {
      ${""}
      width: 16px;
      height: 16px;
    }
  `.withBehaviors(An(gt`
        :host(:${nn}) {
          outline-color: ${_e.Highlight};
          color: ${_e.ButtonText};
          forced-color-adjust: none;
        }
      `))});let kp=(()=>{class a extends Dn{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=er.N.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1)return void(null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay)));this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{!t.defaultPrevented&&this.tooltipVisible&&t.key===Il&&(this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss"))},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Ll(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),xn.SO.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!=this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(null!=t&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),null!=this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const s=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(c=>{c.id===s&&this.startShowDelayTimer()})}null!=this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!=this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case"top":case"bottom":this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case"right":case"left":case"start":case"end":this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case"top-left":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case"top-right":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case"bottom-left":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case"bottom-right":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case"top-start":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case"top-end":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case"bottom-start":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case"bottom-end":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"visible",void 0),(0,J.gn)([z.Lj],a.prototype,"anchor",void 0),(0,J.gn)([z.Lj],a.prototype,"delay",void 0),(0,J.gn)([z.Lj],a.prototype,"position",void 0),(0,J.gn)([(0,z.Lj)({attribute:"auto-update-mode"})],a.prototype,"autoUpdateMode",void 0),(0,J.gn)([(0,z.Lj)({attribute:"horizontal-viewport-lock"})],a.prototype,"horizontalViewportLock",void 0),(0,J.gn)([(0,z.Lj)({attribute:"vertical-viewport-lock"})],a.prototype,"verticalViewportLock",void 0),(0,J.gn)([Ze.LO],a.prototype,"anchorElement",void 0),(0,J.gn)([Ze.LO],a.prototype,"viewportElement",void 0),(0,J.gn)([Ze.LO],a.prototype,"verticalPositioningMode",void 0),(0,J.gn)([Ze.LO],a.prototype,"horizontalPositioningMode",void 0),(0,J.gn)([Ze.LO],a.prototype,"horizontalInset",void 0),(0,J.gn)([Ze.LO],a.prototype,"verticalInset",void 0),(0,J.gn)([Ze.LO],a.prototype,"horizontalScaling",void 0),(0,J.gn)([Ze.LO],a.prototype,"verticalScaling",void 0),(0,J.gn)([Ze.LO],a.prototype,"verticalDefaultPosition",void 0),(0,J.gn)([Ze.LO],a.prototype,"horizontalDefaultPosition",void 0),(0,J.gn)([Ze.LO],a.prototype,"tooltipVisible",void 0),(0,J.gn)([Ze.LO],a.prototype,"currentDirection",void 0),a})();const Ov=class kv extends kp{connectedCallback(){super.connectedCallback(),T.IfY.setValueFor(this,T.s55)}}.compose({baseName:"tooltip",baseClass:kp,template:(a,r)=>Ct`
        ${ji(t=>t.tooltipVisible,Ct`
            <${a.tagFor(ln)}
                fixed-placement="true"
                auto-update-mode="${t=>t.autoUpdateMode}"
                vertical-positioning-mode="${t=>t.verticalPositioningMode}"
                vertical-default-position="${t=>t.verticalDefaultPosition}"
                vertical-inset="${t=>t.verticalInset}"
                vertical-scaling="${t=>t.verticalScaling}"
                horizontal-positioning-mode="${t=>t.horizontalPositioningMode}"
                horizontal-default-position="${t=>t.horizontalDefaultPosition}"
                horizontal-scaling="${t=>t.horizontalScaling}"
                horizontal-inset="${t=>t.horizontalInset}"
                vertical-viewport-lock="${t=>t.horizontalViewportLock}"
                horizontal-viewport-lock="${t=>t.verticalViewportLock}"
                dir="${t=>t.currentDirection}"
                ${Wn("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${a.tagFor(ln)}>
        `)}
    `,styles:(a,r)=>gt`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${T.UWU} * 1px);
      border: calc(${T.Han} * 1px) solid ${T.Ja_};
      background: ${T.IfY};
      color: ${T.CHi};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Pi}
      white-space: nowrap;
      box-shadow: ${S0};
    }

    ${a.tagFor(ln)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${a.tagFor(ln)}.right,
    ${a.tagFor(ln)}.left {
      flex-direction: column;
    }

    ${a.tagFor(ln)}.top .tooltip::after,
    ${a.tagFor(ln)}.bottom .tooltip::after,
    ${a.tagFor(ln)}.left .tooltip::after,
    ${a.tagFor(ln)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${T.IfY};
      border-top: calc(${T.Han} * 1px) solid ${T.Ja_};
      border-left: calc(${T.Han} * 1px) solid ${T.Ja_};
      position: absolute;
    }

    ${a.tagFor(ln)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${a.tagFor(ln)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${a.tagFor(ln)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${a.tagFor(ln)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${a.tagFor(ln)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${a.tagFor(ln)}.left .tooltip {
      margin-right: 12px;
    }

    ${a.tagFor(ln)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${a.tagFor(ln)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(An(gt`
        :host([disabled]) {
          opacity: 1;
        }
        ${a.tagFor(ln)}.top .tooltip::after,
        ${a.tagFor(ln)}.bottom .tooltip::after,
        ${a.tagFor(ln)}.left .tooltip::after,
        ${a.tagFor(ln)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `))});function Aa(a){return Ou(a)&&"treeitem"===a.getAttribute("role")}let qr=(()=>{class a extends Dn{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Aa(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,s){this.$fastController.isConnected&&this.items.forEach(c=>{Aa(c)&&(c.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(s=>Aa(s));return t?t.length:0}}return(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"expanded",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"selected",void 0),(0,J.gn)([(0,z.Lj)({mode:"boolean"})],a.prototype,"disabled",void 0),(0,J.gn)([Ze.LO],a.prototype,"focusable",void 0),(0,J.gn)([Ze.LO],a.prototype,"childItems",void 0),(0,J.gn)([Ze.LO],a.prototype,"items",void 0),(0,J.gn)([Ze.LO],a.prototype,"nested",void 0),(0,J.gn)([Ze.LO],a.prototype,"renderCollapsedChildren",void 0),a})();Ri(qr,oo);const uE=(()=>{class a extends Dn{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this)return null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&qr.focusItem(this.currentFocused));this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(null===t.relatedTarget||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const s=this.getVisibleNodes();switch(t.key){case ua:return void(s.length&&qr.focusItem(s[0]));case Ys:return void(s.length&&qr.focusItem(s[s.length-1]));case xa:if(t.target&&this.isFocusableElement(t.target)){const c=t.target;c instanceof qr&&c.childItemLength()>0&&c.expanded?c.expanded=!1:c instanceof qr&&c.parentElement instanceof qr&&qr.focusItem(c.parentElement)}return!1;case Ya:if(t.target&&this.isFocusableElement(t.target)){const c=t.target;c instanceof qr&&c.childItemLength()>0&&!c.expanded?c.expanded=!0:c instanceof qr&&c.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case ys:return void(t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target));case bs:return void(t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target));case Ia:return void this.handleClick(t)}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element&&Aa(t.target)))return!0;const s=t.target;s.selected?(this.currentSelected&&this.currentSelected!==s&&(this.currentSelected.selected=!1),this.currentSelected=s):!s.selected&&this.currentSelected===s&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(null===this.currentFocused||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(c=>{Aa(c)&&(c.nested=this.nested)})},this.isFocusableElement=t=>Aa(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),xn.SO.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element&&Aa(t.target)))return!0;const s=t.target;s.disabled||(s.selected=!s.selected)}focusNextNode(t,s){const c=this.getVisibleNodes();if(!c)return;const h=c[c.indexOf(s)+t];Ou(h)&&qr.focusItem(h)}getValidFocusableItem(){const t=this.getVisibleNodes();let s=t.findIndex(this.isSelectedElement);return-1===s&&(s=t.findIndex(this.isFocusableElement)),-1!==s?t[s]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>Aa(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return function kC(a,r){return a&&r&&Ou(a)?Array.from(a.querySelectorAll(r)).filter(s=>null!==s.offsetParent):void 0}(this,"[role='treeitem']")||[]}}return(0,J.gn)([(0,z.Lj)({attribute:"render-collapsed-nodes"})],a.prototype,"renderCollapsedNodes",void 0),(0,J.gn)([Ze.LO],a.prototype,"currentSelected",void 0),(0,J.gn)([Ze.LO],a.prototype,"slottedTreeItems",void 0),a})().compose({baseName:"tree-view",template:(a,r)=>Ct`
    <template
        role="tree"
        ${Wn("treeView")}
        @keydown="${(t,s)=>t.handleKeyDown(s.event)}"
        @focusin="${(t,s)=>t.handleFocus(s.event)}"
        @focusout="${(t,s)=>t.handleBlur(s.event)}"
        @click="${(t,s)=>t.handleClick(s.event)}"
        @selected-change="${(t,s)=>t.handleSelectedChange(s.event)}"
    >
        <slot ${Vi("slottedTreeItems")}></slot>
    </template>
`,styles:(a,r)=>gt`
  :host([hidden]) {
    display: none;
  }

  ${jn("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`}),Rv=gt`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${kn} * -1px));
  }
  :host([selected])::after {
    left: calc(${T.vxp} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Pv=gt`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${kn} * -1px));
  }
  :host([selected])::after {
    right: calc(${T.vxp} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,e_=ws`((${T.nfe} / 2) * ${T._5n}) + ((${T._5n} * ${T.hVk}) / 2)`,nu=Ai.DesignToken.create("tree-item-expand-collapse-hover").withDefault(a=>{const r=T.DFW.getValueFor(a);return r.evaluate(a,r.evaluate(a).hover).hover}),t_=Ai.DesignToken.create("tree-item-expand-collapse-selected-hover").withDefault(a=>{const r=T.TuC.getValueFor(a);return T.DFW.getValueFor(a).evaluate(a,r.evaluate(a).rest).hover}),r_={fluentAccordion:fb,fluentAccordionItem:vb,fluentAnchor:Ru,fluentAnchoredRegion:Xb,fluentBadge:nm,fluentBreadcrumb:LD,fluentBreadcrumbItem:ih,fluentButton:dm,fluentCalendar:Dm,fluentCard:km,fluentCheckbox:$s,fluentCombobox:Nm,fluentDataGrid:Qs,fluentDataGridCell:ma,fluentDataGridRow:P0,fluentDesignSystemProvider:F0,fluentDialog:Z0,fluentDivider:qm,fluentFlipper:K0,fluentHorizontalScroll:Ch,fluentListbox:ow,fluentOption:Xm,fluentMenu:ev,fluentMenuItem:Hc,fluentNumberField:pw,fluentProgress:ov,fluentProgressRing:lv,fluentRadio:Cw,fluentRadioGroup:Dw,fluentSearch:Mh,fluentSelect:gv,fluentSkeleton:Dp,fluentSlider:wv,fluentSliderLabel:kw,fluentSwitch:Rw,fluentTabs:$w,fluentTab:jw,fluentTabPanel:Ww,fluentTextArea:ud,fluentTextField:Rh,fluentToolbar:Mp,fluentTooltip:Ov,fluentTreeView:uE,fluentTreeItem:qr.compose({baseName:"tree-item",template:(a,r)=>Ct`
    <template
        role="treeitem"
        slot="${t=>t.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${t=>t.expanded?"expanded":""} ${t=>t.selected?"selected":""} ${t=>t.nested?"nested":""}
            ${t=>t.disabled?"disabled":""}"
        aria-expanded="${t=>t.childItems&&t.childItemLength()>0?t.expanded:void 0}"
        aria-selected="${t=>t.selected}"
        aria-disabled="${t=>t.disabled}"
        @focusin="${(t,s)=>t.handleFocus(s.event)}"
        @focusout="${(t,s)=>t.handleBlur(s.event)}"
        ${gh({property:"childItems",filter:da()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${ji(t=>t.childItems&&t.childItemLength()>0,Ct`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(t,s)=>t.handleExpandCollapseButtonClick(s.event)}"
                            ${Wn("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${r.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${So(0,r)}
                <slot></slot>
                ${Pr(0,r)}
            </div>
        </div>
        ${ji(t=>t.childItems&&t.childItemLength()>0&&(t.expanded||t.renderCollapsedChildren),Ct`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Vi("items")}></slot>
                </div>
            `)}
    </template>
`,styles:(a,r)=>gt`
    ${jn("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${T.CHi};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${T.SVJ};
      --expand-collapse-button-size: calc(${kn} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${T.jql};
      border: calc(${T.Han} * 1px) solid transparent;
      border-radius: calc(${T.UWU} * 1px);
      height: calc((${kn} + 1) * 1px);
    }

    :host(:${nn}) .positioning-region {
      ${Ks}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${T.QpD};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${T.sG3};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${kn} * 1px);
      margin-inline-start: calc(${T._5n} * 2px + 8px);
      ${Pi}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${T._5n} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${T.UWU} * 1px);
      ${""} width: calc((${e_} + (${T._5n} * 2)) * 1px);
      height: calc((${e_} + (${T._5n} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${T._5n} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${T._5n} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${T.VFZ};
      cursor: ${_s};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${nu};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${T._jX};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${t_};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${kn} / 4) * 1px);
      width: 3px;
      height: calc((${kn} / 2) * 1px);
      ${""} background: ${T.Avx};
      border-radius: calc(${T.UWU} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${kn} * -1px);
    }
  `.withBehaviors(new Rc(Rv,Pv),An(gt`
        :host {
          color: ${_e.ButtonText};
        }
        .positioning-region {
          border-color: ${_e.ButtonFace};
          background: ${_e.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${_e.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${_e.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${_e.GrayText};
        }
        :host([selected])::after {
          background: ${_e.HighlightText};
        }
        :host(:${nn}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${_e.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${_e.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${_e.ButtonFace};
          fill: ${_e.ButtonText};
        }
      `)),expandCollapseGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '}),register(a,...r){if(a)for(const t in this)"register"!==t&&this[t]().register(a,...r)}};(function Ry(a){return _u.getOrCreate(a).withPrefix("fluent")})().register(r_),_.q6().bootstrapModule(Td).catch(a=>console.error(a))},5677:(ct,pe)=>{Object.defineProperty(pe,"__esModule",{value:!0}),pe.skipPaddingZeros=pe.getEndpointOfBytes=pe.readBytesToString=pe.readBytesToISO8859=pe.readBytesToUTF16=pe.readBytesToUTF8=void 0;const M=String.fromCharCode;function _(re,fe){fe=null==fe||fe<0?re.length:Math.min(fe,re.length);let q=0;239===re[0]&&187===re[1]&&191===re[2]&&(q=3);const oe=[];for(let V=0;q<fe;V++){const P=re[q++];let Q,ee,de,$e;if(0===P)break;P<128?oe[V]=M(P):P>=194&&P<224?(Q=re[q++],oe[V]=M(((31&P)<<6)+(63&Q))):P>=224&&P<240?(Q=re[q++],ee=re[q++],oe[V]=M(((15&P)<<12)+((63&Q)<<6)+(63&ee))):P>=240&&P<245&&(Q=re[q++],ee=re[q++],de=re[q++],$e=((7&P)<<18)+((63&Q)<<12)+((63&ee)<<6)+(63&de)-65536,oe[V]=M(55296+($e>>10),56320+(1023&$e)))}return oe.join("")}function y(re,fe,q){q=null==q||q<0?re.length:Math.min(q,re.length);let oe=0,V=1,P=0;254===re[0]&&255===re[1]?(fe=!0,oe=2):255===re[0]&&254===re[1]&&(fe=!1,oe=2),fe&&(V=0,P=1);const Q=[];let ee,de,$e,we,ve,qe;for(let Re=0;oe<q&&(ee=re[oe+V],de=re[oe+P],$e=(ee<<8)+de,oe+=2,0!==$e);Re++)ee<216||ee>=224?Q[Re]=M($e):(ve=re[oe+V],qe=re[oe+P],we=(ve<<8)+qe,oe+=2,Q[Re]=M($e,we));return Q.join("")}function ne(re,fe){fe=null==fe||fe<0?re.length:Math.min(fe,re.length);const q=[];for(let oe=0;oe<fe;oe++)q.push(M(re[oe]));return q.join("")}pe.readBytesToUTF8=_,pe.readBytesToUTF16=y,pe.readBytesToISO8859=ne,pe.readBytesToString=function j(re,fe,q){return 0===fe?ne(re,q):3===fe?_(re,q):1===fe||2===fe?y(re,void 0,q):null},pe.getEndpointOfBytes=function U(re,fe,q=0){const oe=0===fe?P=>0===re[P]:P=>0===re[P]&&0===re[P+1];let V=q;for(;V<re.length&&!oe(V);V++);return V},pe.skipPaddingZeros=function Z(re,fe){for(let q=fe;0===re[q];q++)fe++;return fe}},7148:(ct,pe)=>{Object.defineProperty(pe,"__esModule",{value:!0}),pe.FrameTypeValueMap=void 0,pe.default={TALB:"album",TBPM:"bpm",TCOM:"composer",TCON:"genre",TCOP:"copyright",TDEN:"encoding-time",TDLY:"playlist-delay",TDOR:"original-release-time",TDRC:"recording-time",TDRL:"release-time",TDTG:"tagging-time",TENC:"encoder",TEXT:"writer",TFLT:"file-type",TIPL:"involved-people",TIT1:"content-group",TIT2:"title",TIT3:"subtitle",TKEY:"initial-key",TLAN:"language",TLEN:"length",TMCL:"credits",TMED:"media-type",TMOO:"mood",TOAL:"original-album",TOFN:"original-filename",TOLY:"original-writer",TOPE:"original-artist",TOWN:"owner",TPE1:"artist",TPE2:"band",TPE3:"conductor",TPE4:"remixer",TPOS:"set-part",TPRO:"produced-notice",TPUB:"publisher",TRCK:"track",TRSN:"radio-name",TRSO:"radio-owner",TSOA:"album-sort",TSOP:"performer-sort",TSOT:"title-sort",TSRC:"isrc",TSSE:"encoder-settings",TSST:"set-subtitle",TXXX:"user-defined-text-information",TYER:"year",WCOM:"url-commercial",WCOP:"url-legal",WOAF:"url-file",WOAR:"url-artist",WOAS:"url-source",WORS:"url-radio",WPAY:"url-payment",WPUB:"url-publisher",WAF:"url-file",WAR:"url-artist",WAS:"url-source",WCM:"url-commercial",WCP:"url-copyright",WPB:"url-publisher",COMM:"comments",USLT:"lyrics",APIC:"image",PIC:"image",IPLS:"involved-people-list",OWNE:"ownership"},pe.FrameTypeValueMap={TXXX:"array",COMM:"array",USLT:"array"}},4091:(ct,pe)=>{Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=["Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge","Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B","Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska","Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient","Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical","Instrumental","Acid","House","Game","Sound Clip","Gospel","Noise","AlternRock","Bass","Soul","Punk","Space","Meditative","Instrumental Pop","Instrumental Rock","Ethnic","Gothic","Darkwave","Techno-Industrial","Electronic","Pop-Folk","Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta Rap","Top 40","Christian Rap","Pop / Funk","Jungle","Native American","Cabaret","New Wave","Psychedelic","Rave","Showtunes","Trailer","Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro","Musical","Rock & Roll","Hard Rock","Folk","Folk-Rock","National Folk","Swing","Fast  Fusion","Bebob","Latin","Revival","Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock","Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band","Chorus","Easy Listening","Acoustic","Humour","Speech","Chanson","Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus","Porn Groove","Satire","Slow Jam","Club","Tango","Samba","Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle","Duet","Punk Rock","Drum Solo","A Cappella","Euro-House","Dance Hall","Goa","Drum & Bass","Club-House","Hardcore","Terror","Indie","BritPop","Negerpunk","Polsk Punk","Beat","Christian Gangsta Rap","Heavy Metal","Black Metal","Crossover","Contemporary Christian","Christian Rock","Merengue","Salsa","Thrash Metal","Anime","JPop","Synthpop","Rock/Pop"]},8655:(ct,pe)=>{Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=["other","file-icon","icon","cover-front","cover-back","leaflet","media","artist-lead","artist","conductor","band","composer","lyricist-writer","recording-location","during-recording","during-performance","screen","fish","illustration","logo-band","logo-publisher"]},745:function(ct,pe,M){var _=this&&this.__rest||function(U,Z){var re={};for(var fe in U)Object.prototype.hasOwnProperty.call(U,fe)&&Z.indexOf(fe)<0&&(re[fe]=U[fe]);if(null!=U&&"function"==typeof Object.getOwnPropertySymbols){var q=0;for(fe=Object.getOwnPropertySymbols(U);q<fe.length;q++)Z.indexOf(fe[q])<0&&Object.prototype.propertyIsEnumerable.call(U,fe[q])&&(re[fe[q]]=U[fe[q]])}return re};Object.defineProperty(pe,"__esModule",{value:!0}),pe.parseV2Tag=pe.parseV1Tag=void 0;const y=M(7398);pe.parseV1Tag=y.default;const ne=M(5607);pe.parseV2Tag=ne.default,pe.default=function j(U){const Z=(0,y.default)(U),re=(0,ne.default)(U);if(!re&&!Z)return!1;const fe={version:!1},q=re||fe,{version:oe}=q,V=_(q,["version"]),P=Z||fe,{version:Q}=P,ee=_(P,["version"]),de=Object.assign(Object.assign({version:{v1:Q,v2:oe}},ee),V);return ee.comments&&(de.comments=[{value:ee.comments},...V&&V.comments?V.comments:[]]),de}},7398:(ct,pe,M)=>{Object.defineProperty(pe,"__esModule",{value:!0});const _=M(4091),y=M(5677);pe.default=function j(U){if(!U||U.length<128)return!1;U=U.slice(U.length-128);const Z={version:{major:1,minor:0}};if("TAG"!==(0,y.readBytesToUTF8)(U,3))return!1;const fe=/(^[\s0]+|[\s0]+$)/;return Z.title=(0,y.readBytesToUTF8)(U.slice(3),30).replace(fe,""),Z.artist=(0,y.readBytesToUTF8)(U.slice(33),30).replace(fe,""),Z.album=(0,y.readBytesToUTF8)(U.slice(63),30).replace(fe,""),Z.year=(0,y.readBytesToUTF8)(U.slice(93),4).replace(fe,""),0===U[125]?(Z.comments=(0,y.readBytesToUTF8)(U.slice(97),28).replace(fe,""),Z.version.minor=1,Z.track=U[126]):Z.comments=(0,y.readBytesToUTF8)(U.slice(97),30).replace(fe,""),Z.genre=_.default[U[127]]||"",Z}},5607:(ct,pe,M)=>{Object.defineProperty(pe,"__esModule",{value:!0}),pe.calcFrameSize=pe.calcTagSize=void 0;const _=M(7148),y=M(4091),ne=M(8655),j=M(5677);function fe(P){return 2097152*(127&P[0])+16384*(127&P[1])+128*(127&P[2])+(127&P[3])}function q(P){return P.length<4?0:16777216*P[0]+65536*P[1]+256*P[2]+P[3]}function V(P,Q,ee){const de={id:null,tag:null,value:null},$e={id:(0,j.readBytesToUTF8)(P,4),type:null,size:ee,flags:[P[8],P[9]]};if($e.type=$e.id[0],de.id=$e.id,0!==$e.flags[1]||!($e.id in _.default))return de;de.tag=_.default[$e.id];let we=0,ve=0,qe=0,Re=0;if("T"===$e.type){if(we=P[10],"TXXX"===$e.id){ve=11,qe=(0,j.getEndpointOfBytes)(P,we,ve)-ve;const be={description:(0,j.readBytesToString)(P.slice(ve),we,qe),value:""};ve+=qe+1,ve=(0,j.skipPaddingZeros)(P,ve),be.value=(0,j.readBytesToString)(P.slice(ve),we),de.value=be}else if(de.value=(0,j.readBytesToString)(P.slice(11),we),"TCON"===$e.id&&null!==de.value)if("("===de.value[0]){const be=de.value.match(/\(\d+\)/g);be&&(de.value=be.map(Fe=>y.default[+Fe.slice(1,-1)]).join(","))}else{const be=parseInt(de.value,10);isNaN(be)||(de.value=y.default[be])}}else if("W"===$e.type)de.value=(0,j.readBytesToISO8859)(P.slice("WXXX"===$e.id&&0===P[10]?11:10));else if("COMM"===$e.id||"USLT"===$e.id){we=P[10],ve=14,qe=0;const be=(0,j.readBytesToISO8859)(P.slice(11),3);qe=(0,j.getEndpointOfBytes)(P,we,ve)-ve;const Fe=(0,j.readBytesToString)(P.slice(ve),we,qe);ve=(0,j.skipPaddingZeros)(P,ve+qe+1),de.value={language:be,description:Fe,value:(0,j.readBytesToString)(P.slice(ve),we)}}else if("APIC"===$e.id){we=P[10];const be={type:null,mime:null,description:null,data:null};for(ve=11,qe=(0,j.getEndpointOfBytes)(P,0,ve)-ve,be.mime=(0,j.readBytesToString)(P.slice(ve),0,qe),be.type=ne.default[P[ve+qe+1]]||"other",ve+=qe+2,qe=0,Re=ve;;Re++)if(0===P[Re]){qe=Re-ve;break}be.description=0===qe?null:(0,j.readBytesToString)(P.slice(ve),we,qe),ve=(0,j.skipPaddingZeros)(P,ve+qe+1),be.data=P.slice(ve),de.value=be}else if("IPLS"===$e.id)we=P[10],de.value=(0,j.readBytesToString)(P.slice(11),we);else if("OWNE"===$e.id){we=P[10],ve=11,qe=(0,j.getEndpointOfBytes)(P,we,ve);const be=(0,j.readBytesToISO8859)(P.slice(ve),qe);ve+=qe+1;const Fe=(0,j.readBytesToISO8859)(P.slice(ve),8);ve+=8,de.value={pricePayed:be,dateOfPurch:Fe,seller:(0,j.readBytesToString)(P.slice(ve),we)}}return de}pe.default=function Z(P){if(!P||P.length<20)return!1;const Q=function re(P){if(!P||P.length<10||"ID3"!==(0,j.readBytesToUTF8)(P,3))return!1;const ee=P[5];return{version:{major:2,minor:P[3],revision:P[4],flags:{unsync:0!=(128&ee),xheader:0!=(64&ee),experimental:0!=(32&ee)}}}}(P.slice(0,10));if(!Q)return!1;const ee=Q.version.flags;if(ee.unsync)throw new Error("no support for unsynchronisation");let de=10;ee.xheader&&(de+=fe(P.slice(10,14)));const $e=fe(P.slice(6,10));return function oe(P,Q){let ee=0;for(;ee<P.length;){const $e=q(P.slice(ee+4));if(0===$e)break;const we=P.slice(ee,ee+10+$e);if(!we.length)break;const ve=V(we,0,$e);ve.tag&&("array"===_.FrameTypeValueMap[ve.id]?Q[ve.tag]?Q[ve.tag].push(ve.value):Q[ve.tag]=[ve.value]:Q[ve.tag]=ve.value),ee+=we.length}}(P.slice(de,$e+de),Q),Q},pe.calcTagSize=fe,pe.calcFrameSize=q},2507:(ct,pe)=>{pe.Cj=void 0,pe.Cj=function _(ne){const j=new FileReader;return new Promise((U,Z)=>{j.onload=()=>{U(new Uint8Array(j.result))},j.onerror=re=>Z(re),j.readAsArrayBuffer(ne)})}},5619:(ct,pe,M)=>{M.d(pe,{X:()=>y});var _=M(8645);class y extends _.x{constructor(j){super(),this._value=j}get value(){return this.getValue()}_subscribe(j){const U=super._subscribe(j);return!U.closed&&j.next(this._value),U}getValue(){const{hasError:j,thrownError:U,_value:Z}=this;if(j)throw U;return this._throwIfClosed(),Z}next(j){super.next(this._value=j)}}},5592:(ct,pe,M)=>{M.d(pe,{y:()=>fe});var _=M(305),y=M(7394),ne=M(4850),j=M(8888),U=M(2653),Z=M(4674),re=M(1441);let fe=(()=>{class P{constructor(ee){ee&&(this._subscribe=ee)}lift(ee){const de=new P;return de.source=this,de.operator=ee,de}subscribe(ee,de,$e){const we=function V(P){return P&&P instanceof _.Lv||function oe(P){return P&&(0,Z.m)(P.next)&&(0,Z.m)(P.error)&&(0,Z.m)(P.complete)}(P)&&(0,y.Nn)(P)}(ee)?ee:new _.Hp(ee,de,$e);return(0,re.x)(()=>{const{operator:ve,source:qe}=this;we.add(ve?ve.call(we,qe):qe?this._subscribe(we):this._trySubscribe(we))}),we}_trySubscribe(ee){try{return this._subscribe(ee)}catch(de){ee.error(de)}}forEach(ee,de){return new(de=q(de))(($e,we)=>{const ve=new _.Hp({next:qe=>{try{ee(qe)}catch(Re){we(Re),ve.unsubscribe()}},error:we,complete:$e});this.subscribe(ve)})}_subscribe(ee){var de;return null===(de=this.source)||void 0===de?void 0:de.subscribe(ee)}[ne.L](){return this}pipe(...ee){return(0,j.U)(ee)(this)}toPromise(ee){return new(ee=q(ee))((de,$e)=>{let we;this.subscribe(ve=>we=ve,ve=>$e(ve),()=>de(we))})}}return P.create=Q=>new P(Q),P})();function q(P){var Q;return null!==(Q=P??U.config.Promise)&&void 0!==Q?Q:Promise}},8645:(ct,pe,M)=>{M.d(pe,{x:()=>re});var _=M(5592),y=M(7394);const j=(0,M(2306).d)(q=>function(){q(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var U=M(9039),Z=M(1441);let re=(()=>{class q extends _.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(V){const P=new fe(this,this);return P.operator=V,P}_throwIfClosed(){if(this.closed)throw new j}next(V){(0,Z.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const P of this.currentObservers)P.next(V)}})}error(V){(0,Z.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=V;const{observers:P}=this;for(;P.length;)P.shift().error(V)}})}complete(){(0,Z.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:V}=this;for(;V.length;)V.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var V;return(null===(V=this.observers)||void 0===V?void 0:V.length)>0}_trySubscribe(V){return this._throwIfClosed(),super._trySubscribe(V)}_subscribe(V){return this._throwIfClosed(),this._checkFinalizedStatuses(V),this._innerSubscribe(V)}_innerSubscribe(V){const{hasError:P,isStopped:Q,observers:ee}=this;return P||Q?y.Lc:(this.currentObservers=null,ee.push(V),new y.w0(()=>{this.currentObservers=null,(0,U.P)(ee,V)}))}_checkFinalizedStatuses(V){const{hasError:P,thrownError:Q,isStopped:ee}=this;P?V.error(Q):ee&&V.complete()}asObservable(){const V=new _.y;return V.source=this,V}}return q.create=(oe,V)=>new fe(oe,V),q})();class fe extends re{constructor(oe,V){super(),this.destination=oe,this.source=V}next(oe){var V,P;null===(P=null===(V=this.destination)||void 0===V?void 0:V.next)||void 0===P||P.call(V,oe)}error(oe){var V,P;null===(P=null===(V=this.destination)||void 0===V?void 0:V.error)||void 0===P||P.call(V,oe)}complete(){var oe,V;null===(V=null===(oe=this.destination)||void 0===oe?void 0:oe.complete)||void 0===V||V.call(oe)}_subscribe(oe){var V,P;return null!==(P=null===(V=this.source)||void 0===V?void 0:V.subscribe(oe))&&void 0!==P?P:y.Lc}}},305:(ct,pe,M)=>{M.d(pe,{Hp:()=>$e,Lv:()=>P});var _=M(4674),y=M(7394),ne=M(2653),j=M(3894),U=M(2420);const Z=q("C",void 0,void 0);function q(be,Fe,Te){return{kind:be,value:Fe,error:Te}}var oe=M(7599),V=M(1441);class P extends y.w0{constructor(Fe){super(),this.isStopped=!1,Fe?(this.destination=Fe,(0,y.Nn)(Fe)&&Fe.add(this)):this.destination=Re}static create(Fe,Te,Ve){return new $e(Fe,Te,Ve)}next(Fe){this.isStopped?qe(function fe(be){return q("N",be,void 0)}(Fe),this):this._next(Fe)}error(Fe){this.isStopped?qe(function re(be){return q("E",void 0,be)}(Fe),this):(this.isStopped=!0,this._error(Fe))}complete(){this.isStopped?qe(Z,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(Fe){this.destination.next(Fe)}_error(Fe){try{this.destination.error(Fe)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Q=Function.prototype.bind;function ee(be,Fe){return Q.call(be,Fe)}class de{constructor(Fe){this.partialObserver=Fe}next(Fe){const{partialObserver:Te}=this;if(Te.next)try{Te.next(Fe)}catch(Ve){we(Ve)}}error(Fe){const{partialObserver:Te}=this;if(Te.error)try{Te.error(Fe)}catch(Ve){we(Ve)}else we(Fe)}complete(){const{partialObserver:Fe}=this;if(Fe.complete)try{Fe.complete()}catch(Te){we(Te)}}}class $e extends P{constructor(Fe,Te,Ve){let ie;if(super(),(0,_.m)(Fe)||!Fe)ie={next:Fe??void 0,error:Te??void 0,complete:Ve??void 0};else{let he;this&&ne.config.useDeprecatedNextContext?(he=Object.create(Fe),he.unsubscribe=()=>this.unsubscribe(),ie={next:Fe.next&&ee(Fe.next,he),error:Fe.error&&ee(Fe.error,he),complete:Fe.complete&&ee(Fe.complete,he)}):ie=Fe}this.destination=new de(ie)}}function we(be){ne.config.useDeprecatedSynchronousErrorHandling?(0,V.O)(be):(0,j.h)(be)}function qe(be,Fe){const{onStoppedNotification:Te}=ne.config;Te&&oe.z.setTimeout(()=>Te(be,Fe))}const Re={closed:!0,next:U.Z,error:function ve(be){throw be},complete:U.Z}},7394:(ct,pe,M)=>{M.d(pe,{Lc:()=>Z,w0:()=>U,Nn:()=>re});var _=M(4674);const ne=(0,M(2306).d)(q=>function(V){q(this),this.message=V?`${V.length} errors occurred during unsubscription:\n${V.map((P,Q)=>`${Q+1}) ${P.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=V});var j=M(9039);class U{constructor(oe){this.initialTeardown=oe,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let oe;if(!this.closed){this.closed=!0;const{_parentage:V}=this;if(V)if(this._parentage=null,Array.isArray(V))for(const ee of V)ee.remove(this);else V.remove(this);const{initialTeardown:P}=this;if((0,_.m)(P))try{P()}catch(ee){oe=ee instanceof ne?ee.errors:[ee]}const{_finalizers:Q}=this;if(Q){this._finalizers=null;for(const ee of Q)try{fe(ee)}catch(de){oe=oe??[],de instanceof ne?oe=[...oe,...de.errors]:oe.push(de)}}if(oe)throw new ne(oe)}}add(oe){var V;if(oe&&oe!==this)if(this.closed)fe(oe);else{if(oe instanceof U){if(oe.closed||oe._hasParent(this))return;oe._addParent(this)}(this._finalizers=null!==(V=this._finalizers)&&void 0!==V?V:[]).push(oe)}}_hasParent(oe){const{_parentage:V}=this;return V===oe||Array.isArray(V)&&V.includes(oe)}_addParent(oe){const{_parentage:V}=this;this._parentage=Array.isArray(V)?(V.push(oe),V):V?[V,oe]:oe}_removeParent(oe){const{_parentage:V}=this;V===oe?this._parentage=null:Array.isArray(V)&&(0,j.P)(V,oe)}remove(oe){const{_finalizers:V}=this;V&&(0,j.P)(V,oe),oe instanceof U&&oe._removeParent(this)}}U.EMPTY=(()=>{const q=new U;return q.closed=!0,q})();const Z=U.EMPTY;function re(q){return q instanceof U||q&&"closed"in q&&(0,_.m)(q.remove)&&(0,_.m)(q.add)&&(0,_.m)(q.unsubscribe)}function fe(q){(0,_.m)(q)?q():q.unsubscribe()}},2653:(ct,pe,M)=>{M.d(pe,{config:()=>_});const _={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},3168:(ct,pe,M)=>{M.d(pe,{c:()=>Z});var _=M(5592),y=M(7394),ne=M(6196),j=M(8251),U=M(9360);class Z extends _.y{constructor(fe,q){super(),this.source=fe,this.subjectFactory=q,this._subject=null,this._refCount=0,this._connection=null,(0,U.A)(fe)&&(this.lift=fe.lift)}_subscribe(fe){return this.getSubject().subscribe(fe)}getSubject(){const fe=this._subject;return(!fe||fe.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:fe}=this;this._subject=this._connection=null,fe?.unsubscribe()}connect(){let fe=this._connection;if(!fe){fe=this._connection=new y.w0;const q=this.getSubject();fe.add(this.source.subscribe((0,j.x)(q,void 0,()=>{this._teardown(),q.complete()},oe=>{this._teardown(),q.error(oe)},()=>this._teardown()))),fe.closed&&(this._connection=null,fe=y.w0.EMPTY)}return fe}refCount(){return(0,ne.x)()(this)}}},5211:(ct,pe,M)=>{M.d(pe,{z:()=>U});var _=M(7537),ne=M(9940),j=M(7715);function U(...Z){return function y(){return(0,_.J)(1)}()((0,j.D)(Z,(0,ne.yG)(Z)))}},4911:(ct,pe,M)=>{M.d(pe,{P:()=>ne});var _=M(5592),y=M(4829);function ne(j){return new _.y(U=>{(0,y.Xf)(j()).subscribe(U)})}},6232:(ct,pe,M)=>{M.d(pe,{E:()=>y});const y=new(M(5592).y)(U=>U.complete())},7715:(ct,pe,M)=>{M.d(pe,{D:()=>Ve});var _=M(4829),y=M(7103),ne=M(9360),j=M(8251);function U(ie,he=0){return(0,ne.e)((xe,ze)=>{xe.subscribe((0,j.x)(ze,le=>(0,y.f)(ze,ie,()=>ze.next(le),he),()=>(0,y.f)(ze,ie,()=>ze.complete(),he),le=>(0,y.f)(ze,ie,()=>ze.error(le),he)))})}function Z(ie,he=0){return(0,ne.e)((xe,ze)=>{ze.add(ie.schedule(()=>xe.subscribe(ze),he))})}var q=M(5592),V=M(4971),P=M(4674);function ee(ie,he){if(!ie)throw new Error("Iterable cannot be null");return new q.y(xe=>{(0,y.f)(xe,he,()=>{const ze=ie[Symbol.asyncIterator]();(0,y.f)(xe,he,()=>{ze.next().then(le=>{le.done?xe.complete():xe.next(le.value)})},0,!0)})})}var de=M(8382),$e=M(4026),we=M(4266),ve=M(3664),qe=M(5726),Re=M(9853),be=M(541);function Ve(ie,he){return he?function Te(ie,he){if(null!=ie){if((0,de.c)(ie))return function re(ie,he){return(0,_.Xf)(ie).pipe(Z(he),U(he))}(ie,he);if((0,we.z)(ie))return function oe(ie,he){return new q.y(xe=>{let ze=0;return he.schedule(function(){ze===ie.length?xe.complete():(xe.next(ie[ze++]),xe.closed||this.schedule())})})}(ie,he);if((0,$e.t)(ie))return function fe(ie,he){return(0,_.Xf)(ie).pipe(Z(he),U(he))}(ie,he);if((0,qe.D)(ie))return ee(ie,he);if((0,ve.T)(ie))return function Q(ie,he){return new q.y(xe=>{let ze;return(0,y.f)(xe,he,()=>{ze=ie[V.h](),(0,y.f)(xe,he,()=>{let le,ue;try{({value:le,done:ue}=ze.next())}catch(W){return void xe.error(W)}ue?xe.complete():xe.next(le)},0,!0)}),()=>(0,P.m)(ze?.return)&&ze.return()})}(ie,he);if((0,be.L)(ie))return function Fe(ie,he){return ee((0,be.Q)(ie),he)}(ie,he)}throw(0,Re.z)(ie)}(ie,he):(0,_.Xf)(ie)}},4829:(ct,pe,M)=>{M.d(pe,{Xf:()=>Q});var _=M(7582),y=M(4266),ne=M(4026),j=M(5592),U=M(8382),Z=M(5726),re=M(9853),fe=M(3664),q=M(541),oe=M(4674),V=M(3894),P=M(4850);function Q(be){if(be instanceof j.y)return be;if(null!=be){if((0,U.c)(be))return function ee(be){return new j.y(Fe=>{const Te=be[P.L]();if((0,oe.m)(Te.subscribe))return Te.subscribe(Fe);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(be);if((0,y.z)(be))return function de(be){return new j.y(Fe=>{for(let Te=0;Te<be.length&&!Fe.closed;Te++)Fe.next(be[Te]);Fe.complete()})}(be);if((0,ne.t)(be))return function $e(be){return new j.y(Fe=>{be.then(Te=>{Fe.closed||(Fe.next(Te),Fe.complete())},Te=>Fe.error(Te)).then(null,V.h)})}(be);if((0,Z.D)(be))return ve(be);if((0,fe.T)(be))return function we(be){return new j.y(Fe=>{for(const Te of be)if(Fe.next(Te),Fe.closed)return;Fe.complete()})}(be);if((0,q.L)(be))return function qe(be){return ve((0,q.Q)(be))}(be)}throw(0,re.z)(be)}function ve(be){return new j.y(Fe=>{(function Re(be,Fe){var Te,Ve,ie,he;return(0,_.mG)(this,void 0,void 0,function*(){try{for(Te=(0,_.KL)(be);!(Ve=yield Te.next()).done;)if(Fe.next(Ve.value),Fe.closed)return}catch(xe){ie={error:xe}}finally{try{Ve&&!Ve.done&&(he=Te.return)&&(yield he.call(Te))}finally{if(ie)throw ie.error}}Fe.complete()})})(be,Fe).catch(Te=>Fe.error(Te))})}},3019:(ct,pe,M)=>{M.d(pe,{T:()=>Z});var _=M(7537),y=M(4829),ne=M(6232),j=M(9940),U=M(7715);function Z(...re){const fe=(0,j.yG)(re),q=(0,j._6)(re,1/0),oe=re;return oe.length?1===oe.length?(0,y.Xf)(oe[0]):(0,_.J)(q)((0,U.D)(oe,fe)):ne.E}},2096:(ct,pe,M)=>{M.d(pe,{of:()=>ne});var _=M(9940),y=M(7715);function ne(...j){const U=(0,_.yG)(j);return(0,y.D)(j,U)}},8504:(ct,pe,M)=>{M.d(pe,{_:()=>ne});var _=M(5592),y=M(4674);function ne(j,U){const Z=(0,y.m)(j)?j:()=>j,re=fe=>fe.error(Z());return new _.y(U?fe=>U.schedule(re,0,fe):re)}},8251:(ct,pe,M)=>{M.d(pe,{x:()=>y});var _=M(305);function y(j,U,Z,re,fe){return new ne(j,U,Z,re,fe)}class ne extends _.Lv{constructor(U,Z,re,fe,q,oe){super(U),this.onFinalize=q,this.shouldUnsubscribe=oe,this._next=Z?function(V){try{Z(V)}catch(P){U.error(P)}}:super._next,this._error=fe?function(V){try{fe(V)}catch(P){U.error(P)}finally{this.unsubscribe()}}:super._error,this._complete=re?function(){try{re()}catch(V){U.error(V)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var U;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:Z}=this;super.unsubscribe(),!Z&&(null===(U=this.onFinalize)||void 0===U||U.call(this))}}}},2181:(ct,pe,M)=>{M.d(pe,{h:()=>ne});var _=M(9360),y=M(8251);function ne(j,U){return(0,_.e)((Z,re)=>{let fe=0;Z.subscribe((0,y.x)(re,q=>j.call(U,q,fe++)&&re.next(q)))})}},5805:(ct,pe,M)=>{M.d(pe,{U:()=>ne});var _=M(9360),y=M(8251);function ne(j,U){return(0,_.e)((Z,re)=>{let fe=0;Z.subscribe((0,y.x)(re,q=>{re.next(j.call(U,q,fe++))}))})}},975:(ct,pe,M)=>{M.d(pe,{h:()=>y});var _=M(5805);function y(ne){return(0,_.U)(()=>ne)}},7537:(ct,pe,M)=>{M.d(pe,{J:()=>ne});var _=M(1631),y=M(2737);function ne(j=1/0){return(0,_.z)(y.y,j)}},1631:(ct,pe,M)=>{M.d(pe,{z:()=>fe});var _=M(5805),y=M(4829),ne=M(9360),j=M(7103),U=M(8251),re=M(4674);function fe(q,oe,V=1/0){return(0,re.m)(oe)?fe((P,Q)=>(0,_.U)((ee,de)=>oe(P,ee,Q,de))((0,y.Xf)(q(P,Q))),V):("number"==typeof oe&&(V=oe),(0,ne.e)((P,Q)=>function Z(q,oe,V,P,Q,ee,de,$e){const we=[];let ve=0,qe=0,Re=!1;const be=()=>{Re&&!we.length&&!ve&&oe.complete()},Fe=Ve=>ve<P?Te(Ve):we.push(Ve),Te=Ve=>{ee&&oe.next(Ve),ve++;let ie=!1;(0,y.Xf)(V(Ve,qe++)).subscribe((0,U.x)(oe,he=>{Q?.(he),ee?Fe(he):oe.next(he)},()=>{ie=!0},void 0,()=>{if(ie)try{for(ve--;we.length&&ve<P;){const he=we.shift();de?(0,j.f)(oe,de,()=>Te(he)):Te(he)}be()}catch(he){oe.error(he)}}))};return q.subscribe((0,U.x)(oe,Fe,()=>{Re=!0,be()})),()=>{$e?.()}}(P,Q,q,V)))}},6196:(ct,pe,M)=>{M.d(pe,{x:()=>ne});var _=M(9360),y=M(8251);function ne(){return(0,_.e)((j,U)=>{let Z=null;j._refCount++;const re=(0,y.x)(U,void 0,void 0,void 0,()=>{if(!j||j._refCount<=0||0<--j._refCount)return void(Z=null);const fe=j._connection,q=Z;Z=null,fe&&(!q||fe===q)&&fe.unsubscribe(),U.unsubscribe()});j.subscribe(re),re.closed||(Z=j.connect())})}},4664:(ct,pe,M)=>{M.d(pe,{w:()=>j});var _=M(4829),y=M(9360),ne=M(8251);function j(U,Z){return(0,y.e)((re,fe)=>{let q=null,oe=0,V=!1;const P=()=>V&&!q&&fe.complete();re.subscribe((0,ne.x)(fe,Q=>{q?.unsubscribe();let ee=0;const de=oe++;(0,_.Xf)(U(Q,de)).subscribe(q=(0,ne.x)(fe,$e=>fe.next(Z?Z(Q,$e,de,ee++):$e),()=>{q=null,P()}))},()=>{V=!0,P()}))})}},8180:(ct,pe,M)=>{M.d(pe,{q:()=>j});var _=M(6232),y=M(9360),ne=M(8251);function j(U){return U<=0?()=>_.E:(0,y.e)((Z,re)=>{let fe=0;Z.subscribe((0,ne.x)(re,q=>{++fe<=U&&(re.next(q),U<=fe&&re.complete())}))})}},9773:(ct,pe,M)=>{M.d(pe,{R:()=>U});var _=M(9360),y=M(8251),ne=M(4829),j=M(2420);function U(Z){return(0,_.e)((re,fe)=>{(0,ne.Xf)(Z).subscribe((0,y.x)(fe,()=>fe.complete(),j.Z)),!fe.closed&&re.subscribe(fe)})}},9397:(ct,pe,M)=>{M.d(pe,{b:()=>U});var _=M(4674),y=M(9360),ne=M(8251),j=M(2737);function U(Z,re,fe){const q=(0,_.m)(Z)||re||fe?{next:Z,error:re,complete:fe}:Z;return q?(0,y.e)((oe,V)=>{var P;null===(P=q.subscribe)||void 0===P||P.call(q);let Q=!0;oe.subscribe((0,ne.x)(V,ee=>{var de;null===(de=q.next)||void 0===de||de.call(q,ee),V.next(ee)},()=>{var ee;Q=!1,null===(ee=q.complete)||void 0===ee||ee.call(q),V.complete()},ee=>{var de;Q=!1,null===(de=q.error)||void 0===de||de.call(q,ee),V.error(ee)},()=>{var ee,de;Q&&(null===(ee=q.unsubscribe)||void 0===ee||ee.call(q)),null===(de=q.finalize)||void 0===de||de.call(q)}))}):j.y}},4552:(ct,pe,M)=>{M.d(pe,{l:()=>_});const _={now:()=>(_.delegate||Date).now(),delegate:void 0}},7599:(ct,pe,M)=>{M.d(pe,{z:()=>_});const _={setTimeout(y,ne,...j){const{delegate:U}=_;return U?.setTimeout?U.setTimeout(y,ne,...j):setTimeout(y,ne,...j)},clearTimeout(y){const{delegate:ne}=_;return(ne?.clearTimeout||clearTimeout)(y)},delegate:void 0}},4971:(ct,pe,M)=>{M.d(pe,{h:()=>y});const y=function _(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},4850:(ct,pe,M)=>{M.d(pe,{L:()=>_});const _="function"==typeof Symbol&&Symbol.observable||"@@observable"},6973:(ct,pe,M)=>{M.d(pe,{K:()=>y});const y=(0,M(2306).d)(ne=>function(){ne(this),this.name="EmptyError",this.message="no elements in sequence"})},9940:(ct,pe,M)=>{M.d(pe,{_6:()=>Z,jO:()=>j,yG:()=>U});var _=M(4674),y=M(671);function ne(re){return re[re.length-1]}function j(re){return(0,_.m)(ne(re))?re.pop():void 0}function U(re){return(0,y.K)(ne(re))?re.pop():void 0}function Z(re,fe){return"number"==typeof ne(re)?re.pop():fe}},9039:(ct,pe,M)=>{function _(y,ne){if(y){const j=y.indexOf(ne);0<=j&&y.splice(j,1)}}M.d(pe,{P:()=>_})},2306:(ct,pe,M)=>{function _(y){const j=y(U=>{Error.call(U),U.stack=(new Error).stack});return j.prototype=Object.create(Error.prototype),j.prototype.constructor=j,j}M.d(pe,{d:()=>_})},1441:(ct,pe,M)=>{M.d(pe,{O:()=>j,x:()=>ne});var _=M(2653);let y=null;function ne(U){if(_.config.useDeprecatedSynchronousErrorHandling){const Z=!y;if(Z&&(y={errorThrown:!1,error:null}),U(),Z){const{errorThrown:re,error:fe}=y;if(y=null,re)throw fe}}else U()}function j(U){_.config.useDeprecatedSynchronousErrorHandling&&y&&(y.errorThrown=!0,y.error=U)}},7103:(ct,pe,M)=>{function _(y,ne,j,U=0,Z=!1){const re=ne.schedule(function(){j(),Z?y.add(this.schedule(null,U)):this.unsubscribe()},U);if(y.add(re),!Z)return re}M.d(pe,{f:()=>_})},2737:(ct,pe,M)=>{function _(y){return y}M.d(pe,{y:()=>_})},4266:(ct,pe,M)=>{M.d(pe,{z:()=>_});const _=y=>y&&"number"==typeof y.length&&"function"!=typeof y},5726:(ct,pe,M)=>{M.d(pe,{D:()=>y});var _=M(4674);function y(ne){return Symbol.asyncIterator&&(0,_.m)(ne?.[Symbol.asyncIterator])}},4674:(ct,pe,M)=>{function _(y){return"function"==typeof y}M.d(pe,{m:()=>_})},8382:(ct,pe,M)=>{M.d(pe,{c:()=>ne});var _=M(4850),y=M(4674);function ne(j){return(0,y.m)(j[_.L])}},3664:(ct,pe,M)=>{M.d(pe,{T:()=>ne});var _=M(4971),y=M(4674);function ne(j){return(0,y.m)(j?.[_.h])}},4026:(ct,pe,M)=>{M.d(pe,{t:()=>y});var _=M(4674);function y(ne){return(0,_.m)(ne?.then)}},541:(ct,pe,M)=>{M.d(pe,{L:()=>j,Q:()=>ne});var _=M(7582),y=M(4674);function ne(U){return(0,_.FC)(this,arguments,function*(){const re=U.getReader();try{for(;;){const{value:fe,done:q}=yield(0,_.qq)(re.read());if(q)return yield(0,_.qq)(void 0);yield yield(0,_.qq)(fe)}}finally{re.releaseLock()}})}function j(U){return(0,y.m)(U?.getReader)}},671:(ct,pe,M)=>{M.d(pe,{K:()=>y});var _=M(4674);function y(ne){return ne&&(0,_.m)(ne.schedule)}},9360:(ct,pe,M)=>{M.d(pe,{A:()=>y,e:()=>ne});var _=M(4674);function y(j){return(0,_.m)(j?.lift)}function ne(j){return U=>{if(y(U))return U.lift(function(Z){try{return j(Z,this)}catch(re){this.error(re)}});throw new TypeError("Unable to lift unknown Observable type")}}},7400:(ct,pe,M)=>{M.d(pe,{Z:()=>j});var _=M(5805);const{isArray:y}=Array;function j(U){return(0,_.U)(Z=>function ne(U,Z){return y(Z)?U(...Z):U(Z)}(U,Z))}},2420:(ct,pe,M)=>{function _(){}M.d(pe,{Z:()=>_})},8888:(ct,pe,M)=>{M.d(pe,{U:()=>ne,z:()=>y});var _=M(2737);function y(...j){return ne(j)}function ne(j){return 0===j.length?_.y:1===j.length?j[0]:function(Z){return j.reduce((re,fe)=>fe(re),Z)}}},3894:(ct,pe,M)=>{M.d(pe,{h:()=>ne});var _=M(2653),y=M(7599);function ne(j){y.z.setTimeout(()=>{const{onUnhandledError:U}=_.config;if(!U)throw j;U(j)})}},9853:(ct,pe,M)=>{function _(y){return new TypeError(`You provided ${null!==y&&"object"==typeof y?"an invalid object":`'${y}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}M.d(pe,{z:()=>_})},4004:(ct,pe,M)=>{M.d(pe,{Z:()=>V});const y={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let ne;const j=new Uint8Array(16);function U(){if(!ne&&(ne=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ne))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ne(j)}const Z=[];for(let P=0;P<256;++P)Z.push((P+256).toString(16).slice(1));const V=function oe(P,Q,ee){if(y.randomUUID&&!Q&&!P)return y.randomUUID();const de=(P=P||{}).random||(P.rng||U)();if(de[6]=15&de[6]|64,de[8]=63&de[8]|128,Q){ee=ee||0;for(let $e=0;$e<16;++$e)Q[ee+$e]=de[$e];return Q}return function re(P,Q=0){return Z[P[Q+0]]+Z[P[Q+1]]+Z[P[Q+2]]+Z[P[Q+3]]+"-"+Z[P[Q+4]]+Z[P[Q+5]]+"-"+Z[P[Q+6]]+Z[P[Q+7]]+"-"+Z[P[Q+8]]+Z[P[Q+9]]+"-"+Z[P[Q+10]]+Z[P[Q+11]]+Z[P[Q+12]]+Z[P[Q+13]]+Z[P[Q+14]]+Z[P[Q+15]]}(de)}},7815:(ct,pe,M)=>{function U(ie,he,xe,ze){var W,le=arguments.length,ue=le<3?he:null===ze?ze=Object.getOwnPropertyDescriptor(he,xe):ze;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)ue=Reflect.decorate(ie,he,xe,ze);else for(var ce=ie.length-1;ce>=0;ce--)(W=ie[ce])&&(ue=(le<3?W(ue):le>3?W(he,xe,ue):W(he,xe))||ue);return le>3&&ue&&Object.defineProperty(he,xe,ue),ue}M.d(pe,{gn:()=>U})},6814:(ct,pe,M)=>{M.d(pe,{Do:()=>$e,EM:()=>Fo,HT:()=>j,JF:()=>yo,K0:()=>Z,Mx:()=>Uo,NF:()=>ri,Nd:()=>ea,Ov:()=>mo,PC:()=>Oo,PM:()=>Ei,S$:()=>Q,V_:()=>fe,Ye:()=>we,b0:()=>de,bD:()=>Jr,ez:()=>ta,mk:()=>Fn,q:()=>ne,w_:()=>U});var _=M(9467);let y=null;function ne(){return y}function j(w){y||(y=w)}class U{}const Z=new _.OlP("DocumentToken");let re=(()=>{class w{historyGo(x){throw new Error("Not implemented")}static#e=this.\u0275fac=function(F){return new(F||w)};static#t=this.\u0275prov=_.Yz7({token:w,factory:()=>(0,_.f3M)(q),providedIn:"platform"})}return w})();const fe=new _.OlP("Location Initialized");let q=(()=>{class w extends re{constructor(){super(),this._doc=(0,_.f3M)(Z),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ne().getBaseHref(this._doc)}onPopState(x){const F=ne().getGlobalEventTarget(this._doc,"window");return F.addEventListener("popstate",x,!1),()=>F.removeEventListener("popstate",x)}onHashChange(x){const F=ne().getGlobalEventTarget(this._doc,"window");return F.addEventListener("hashchange",x,!1),()=>F.removeEventListener("hashchange",x)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(x){this._location.pathname=x}pushState(x,F,se){this._history.pushState(x,F,se)}replaceState(x,F,se){this._history.replaceState(x,F,se)}forward(){this._history.forward()}back(){this._history.back()}historyGo(x=0){this._history.go(x)}getState(){return this._history.state}static#e=this.\u0275fac=function(F){return new(F||w)};static#t=this.\u0275prov=_.Yz7({token:w,factory:()=>new w,providedIn:"platform"})}return w})();function oe(w,B){if(0==w.length)return B;if(0==B.length)return w;let x=0;return w.endsWith("/")&&x++,B.startsWith("/")&&x++,2==x?w+B.substring(1):1==x?w+B:w+"/"+B}function V(w){const B=w.match(/#|\?|$/),x=B&&B.index||w.length;return w.slice(0,x-("/"===w[x-1]?1:0))+w.slice(x)}function P(w){return w&&"?"!==w[0]?"?"+w:w}let Q=(()=>{class w{historyGo(x){throw new Error("Not implemented")}static#e=this.\u0275fac=function(F){return new(F||w)};static#t=this.\u0275prov=_.Yz7({token:w,factory:()=>(0,_.f3M)(de),providedIn:"root"})}return w})();const ee=new _.OlP("appBaseHref");let de=(()=>{class w extends Q{constructor(x,F){super(),this._platformLocation=x,this._removeListenerFns=[],this._baseHref=F??this._platformLocation.getBaseHrefFromDOM()??(0,_.f3M)(Z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(x){this._removeListenerFns.push(this._platformLocation.onPopState(x),this._platformLocation.onHashChange(x))}getBaseHref(){return this._baseHref}prepareExternalUrl(x){return oe(this._baseHref,x)}path(x=!1){const F=this._platformLocation.pathname+P(this._platformLocation.search),se=this._platformLocation.hash;return se&&x?`${F}${se}`:F}pushState(x,F,se,Ue){const ot=this.prepareExternalUrl(se+P(Ue));this._platformLocation.pushState(x,F,ot)}replaceState(x,F,se,Ue){const ot=this.prepareExternalUrl(se+P(Ue));this._platformLocation.replaceState(x,F,ot)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(x=0){this._platformLocation.historyGo?.(x)}static#e=this.\u0275fac=function(F){return new(F||w)(_.LFG(re),_.LFG(ee,8))};static#t=this.\u0275prov=_.Yz7({token:w,factory:w.\u0275fac,providedIn:"root"})}return w})(),$e=(()=>{class w extends Q{constructor(x,F){super(),this._platformLocation=x,this._baseHref="",this._removeListenerFns=[],null!=F&&(this._baseHref=F)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(x){this._removeListenerFns.push(this._platformLocation.onPopState(x),this._platformLocation.onHashChange(x))}getBaseHref(){return this._baseHref}path(x=!1){let F=this._platformLocation.hash;return null==F&&(F="#"),F.length>0?F.substring(1):F}prepareExternalUrl(x){const F=oe(this._baseHref,x);return F.length>0?"#"+F:F}pushState(x,F,se,Ue){let ot=this.prepareExternalUrl(se+P(Ue));0==ot.length&&(ot=this._platformLocation.pathname),this._platformLocation.pushState(x,F,ot)}replaceState(x,F,se,Ue){let ot=this.prepareExternalUrl(se+P(Ue));0==ot.length&&(ot=this._platformLocation.pathname),this._platformLocation.replaceState(x,F,ot)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(x=0){this._platformLocation.historyGo?.(x)}static#e=this.\u0275fac=function(F){return new(F||w)(_.LFG(re),_.LFG(ee,8))};static#t=this.\u0275prov=_.Yz7({token:w,factory:w.\u0275fac})}return w})(),we=(()=>{class w{constructor(x){this._subject=new _.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=x;const F=this._locationStrategy.getBaseHref();this._basePath=function be(w){if(new RegExp("^(https?:)?//").test(w)){const[,x]=w.split(/\/\/[^\/]+/);return x}return w}(V(Re(F))),this._locationStrategy.onPopState(se=>{this._subject.emit({url:this.path(!0),pop:!0,state:se.state,type:se.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(x=!1){return this.normalize(this._locationStrategy.path(x))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(x,F=""){return this.path()==this.normalize(x+P(F))}normalize(x){return w.stripTrailingSlash(function qe(w,B){if(!w||!B.startsWith(w))return B;const x=B.substring(w.length);return""===x||["/",";","?","#"].includes(x[0])?x:B}(this._basePath,Re(x)))}prepareExternalUrl(x){return x&&"/"!==x[0]&&(x="/"+x),this._locationStrategy.prepareExternalUrl(x)}go(x,F="",se=null){this._locationStrategy.pushState(se,"",x,F),this._notifyUrlChangeListeners(this.prepareExternalUrl(x+P(F)),se)}replaceState(x,F="",se=null){this._locationStrategy.replaceState(se,"",x,F),this._notifyUrlChangeListeners(this.prepareExternalUrl(x+P(F)),se)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(x=0){this._locationStrategy.historyGo?.(x)}onUrlChange(x){return this._urlChangeListeners.push(x),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(F=>{this._notifyUrlChangeListeners(F.url,F.state)})),()=>{const F=this._urlChangeListeners.indexOf(x);this._urlChangeListeners.splice(F,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(x="",F){this._urlChangeListeners.forEach(se=>se(x,F))}subscribe(x,F,se){return this._subject.subscribe({next:x,error:F,complete:se})}static#e=this.normalizeQueryParams=P;static#t=this.joinWithSlash=oe;static#n=this.stripTrailingSlash=V;static#i=this.\u0275fac=function(F){return new(F||w)(_.LFG(Q))};static#r=this.\u0275prov=_.Yz7({token:w,factory:()=>function ve(){return new we((0,_.LFG)(Q))}(),providedIn:"root"})}return w})();function Re(w){return w.replace(/\/index.html$/,"")}function Uo(w,B){B=encodeURIComponent(B);for(const x of w.split(";")){const F=x.indexOf("="),[se,Ue]=-1==F?[x,""]:[x.slice(0,F),x.slice(F+1)];if(se.trim()===B)return decodeURIComponent(Ue)}return null}const Ii=/\s+/,os=[];let Fn=(()=>{class w{constructor(x,F,se,Ue){this._iterableDiffers=x,this._keyValueDiffers=F,this._ngEl=se,this._renderer=Ue,this.initialClasses=os,this.stateMap=new Map}set klass(x){this.initialClasses=null!=x?x.trim().split(Ii):os}set ngClass(x){this.rawClass="string"==typeof x?x.trim().split(Ii):x}ngDoCheck(){for(const F of this.initialClasses)this._updateState(F,!0);const x=this.rawClass;if(Array.isArray(x)||x instanceof Set)for(const F of x)this._updateState(F,!0);else if(null!=x)for(const F of Object.keys(x))this._updateState(F,!!x[F]);this._applyStateDiff()}_updateState(x,F){const se=this.stateMap.get(x);void 0!==se?(se.enabled!==F&&(se.changed=!0,se.enabled=F),se.touched=!0):this.stateMap.set(x,{enabled:F,changed:!0,touched:!0})}_applyStateDiff(){for(const x of this.stateMap){const F=x[0],se=x[1];se.changed?(this._toggleClass(F,se.enabled),se.changed=!1):se.touched||(se.enabled&&this._toggleClass(F,!1),this.stateMap.delete(F)),se.touched=!1}}_toggleClass(x,F){(x=x.trim()).length>0&&x.split(Ii).forEach(se=>{F?this._renderer.addClass(this._ngEl.nativeElement,se):this._renderer.removeClass(this._ngEl.nativeElement,se)})}static#e=this.\u0275fac=function(F){return new(F||w)(_.Y36(_.ZZ4),_.Y36(_.aQg),_.Y36(_.SBq),_.Y36(_.Qsj))};static#t=this.\u0275dir=_.lG2({type:w,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0})}return w})(),Oo=(()=>{class w{constructor(x,F,se){this._ngEl=x,this._differs=F,this._renderer=se,this._ngStyle=null,this._differ=null}set ngStyle(x){this._ngStyle=x,!this._differ&&x&&(this._differ=this._differs.find(x).create())}ngDoCheck(){if(this._differ){const x=this._differ.diff(this._ngStyle);x&&this._applyChanges(x)}}_setStyle(x,F){const[se,Ue]=x.split("."),ot=-1===se.indexOf("-")?void 0:_.JOm.DashCase;null!=F?this._renderer.setStyle(this._ngEl.nativeElement,se,Ue?`${F}${Ue}`:F,ot):this._renderer.removeStyle(this._ngEl.nativeElement,se,ot)}_applyChanges(x){x.forEachRemovedItem(F=>this._setStyle(F.key,null)),x.forEachAddedItem(F=>this._setStyle(F.key,F.currentValue)),x.forEachChangedItem(F=>this._setStyle(F.key,F.currentValue))}static#e=this.\u0275fac=function(F){return new(F||w)(_.Y36(_.SBq),_.Y36(_.aQg),_.Y36(_.Qsj))};static#t=this.\u0275dir=_.lG2({type:w,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0})}return w})();class Ir{createSubscription(B,x){return(0,_.rg0)(()=>B.subscribe({next:x,error:F=>{throw F}}))}dispose(B){(0,_.rg0)(()=>B.unsubscribe())}}class Tr{createSubscription(B,x){return B.then(x,F=>{throw F})}dispose(B){}}const gr=new Tr,Ss=new Ir;let mo=(()=>{class w{constructor(x){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=x}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(x){return this._obj?x!==this._obj?(this._dispose(),this.transform(x)):this._latestValue:(x&&this._subscribe(x),this._latestValue)}_subscribe(x){this._obj=x,this._strategy=this._selectStrategy(x),this._subscription=this._strategy.createSubscription(x,F=>this._updateLatestValue(x,F))}_selectStrategy(x){if((0,_.QGY)(x))return gr;if((0,_.F4k)(x))return Ss;throw function $n(w,B){return new _.vHH(2100,!1)}()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(x,F){x===this._obj&&(this._latestValue=F,this._ref.markForCheck())}static#e=this.\u0275fac=function(F){return new(F||w)(_.Y36(_.sBO,16))};static#t=this.\u0275pipe=_.Yjl({name:"async",type:w,pure:!1,standalone:!0})}return w})(),ea=(()=>{class w{constructor(x){this.differs=x,this.keyValues=[],this.compareFn=Ti}transform(x,F=Ti){if(!x||!(x instanceof Map)&&"object"!=typeof x)return null;this.differ||(this.differ=this.differs.find(x).create());const se=this.differ.diff(x),Ue=F!==this.compareFn;return se&&(this.keyValues=[],se.forEachItem(ot=>{this.keyValues.push(function Zo(w,B){return{key:w,value:B}}(ot.key,ot.currentValue))})),(se||Ue)&&(this.keyValues.sort(F),this.compareFn=F),this.keyValues}static#e=this.\u0275fac=function(F){return new(F||w)(_.Y36(_.aQg,16))};static#t=this.\u0275pipe=_.Yjl({name:"keyvalue",type:w,pure:!1,standalone:!0})}return w})();function Ti(w,B){const x=w.key,F=B.key;if(x===F)return 0;if(void 0===x)return 1;if(void 0===F)return-1;if(null===x)return 1;if(null===F)return-1;if("string"==typeof x&&"string"==typeof F)return x<F?-1:1;if("number"==typeof x&&"number"==typeof F)return x-F;if("boolean"==typeof x&&"boolean"==typeof F)return x<F?-1:1;const se=String(x),Ue=String(F);return se==Ue?0:se<Ue?-1:1}let ta=(()=>{class w{static#e=this.\u0275fac=function(F){return new(F||w)};static#t=this.\u0275mod=_.oAB({type:w});static#n=this.\u0275inj=_.cJS({})}return w})();const Jr="browser",vr="server";function ri(w){return w===Jr}function Ei(w){return w===vr}let Fo=(()=>{class w{static#e=this.\u0275prov=(0,_.Yz7)({token:w,providedIn:"root",factory:()=>new eo((0,_.LFG)(Z),window)})}return w})();class eo{constructor(B,x){this.document=B,this.window=x,this.offset=()=>[0,0]}setOffset(B){this.offset=Array.isArray(B)?()=>B:B}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(B){this.supportsScrolling()&&this.window.scrollTo(B[0],B[1])}scrollToAnchor(B){if(!this.supportsScrolling())return;const x=function lr(w,B){const x=w.getElementById(B)||w.getElementsByName(B)[0];if(x)return x;if("function"==typeof w.createTreeWalker&&w.body&&"function"==typeof w.body.attachShadow){const F=w.createTreeWalker(w.body,NodeFilter.SHOW_ELEMENT);let se=F.currentNode;for(;se;){const Ue=se.shadowRoot;if(Ue){const ot=Ue.getElementById(B)||Ue.querySelector(`[name="${B}"]`);if(ot)return ot}se=F.nextNode()}}return null}(this.document,B);x&&(this.scrollToElement(x),x.focus())}setHistoryScrollRestoration(B){this.supportsScrolling()&&(this.window.history.scrollRestoration=B)}scrollToElement(B){const x=B.getBoundingClientRect(),F=x.left+this.window.pageXOffset,se=x.top+this.window.pageYOffset,Ue=this.offset();this.window.scrollTo(F-Ue[0],se-Ue[1])}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}class yo{}},9467:(ct,pe,M)=>{function _(e,n){return Object.is(e,n)}M.d(pe,{QbO:()=>sC,tb:()=>A_,AFp:()=>Fy,ip1:()=>ZS,hGG:()=>lk,z2F:()=>Bh,Ojb:()=>aC,sBO:()=>dm,Sil:()=>bM,_Vd:()=>Xd,EJc:()=>fM,ktI:()=>$l,Xts:()=>wl,SBq:()=>Jd,lqb:()=>la,qLn:()=>Fl,vpe:()=>Ls,XFs:()=>Xt,OlP:()=>on,zs3:()=>Bo,ZZ4:()=>Wg,aQg:()=>Gg,soG:()=>zv,YKP:()=>iS,h0i:()=>hd,R0b:()=>_r,FiY:()=>Td,Lbi:()=>dg,g9A:()=>Ly,Qsj:()=>Ic,FYo:()=>$f,JOm:()=>bf,tp0:()=>J,Rgc:()=>$p,dDg:()=>zM,eoX:()=>ix,GfV:()=>Sb,s_b:()=>xh,ifc:()=>ri,T8G:()=>wm,gHi:()=>Dl,VuI:()=>Mk,Flj:()=>eD,MMx:()=>oS,Lck:()=>lT,eFA:()=>ax,cEC:()=>pm,f3M:()=>qt,X6Q:()=>nk,$WT:()=>Gr,MR2:()=>rg,_c5:()=>ak,qFp:()=>Ok,r_H:()=>My,tdS:()=>tD,rg0:()=>Tc,c2e:()=>YS,zSh:()=>cf,HDt:()=>qS,wAp:()=>nu,vHH:()=>St,lri:()=>tx,rWj:()=>nx,cg1:()=>Av,kuF:()=>_i,kL8:()=>Rv,dqk:()=>Jn,Z0I:()=>Hr,eJc:()=>Rs,QGY:()=>a_,F4k:()=>CE,RDi:()=>Py,AaK:()=>bn,Xq5:()=>T0,TTD:()=>al,jDz:()=>sS,xp6:()=>Bb,uIk:()=>Om,um2:()=>av,Suo:()=>IS,Xpm:()=>ra,lG2:()=>zs,Yz7:()=>Fn,cJS:()=>Di,oAB:()=>$o,Yjl:()=>yr,Y36:()=>$u,_UZ:()=>Ph,qZA:()=>Ip,TgZ:()=>Rh,EpF:()=>kv,n5z:()=>qh,LFG:()=>sn,$8M:()=>Sd,$Z:()=>jb,NdJ:()=>l_,CRH:()=>TS,oxw:()=>IE,ALo:()=>_S,lcZ:()=>CS,Q6J:()=>np,s9C:()=>c_,MGl:()=>Nv,VKq:()=>pS,WLB:()=>gS,iGM:()=>SS,MAs:()=>LE,wJu:()=>uv,SjG:()=>cv,ikw:()=>lv,KtG:()=>bi,CHM:()=>Qn,LSH:()=>Kd,P3R:()=>Og,YNc:()=>zc,_uU:()=>GE,Oqu:()=>u_,hij:()=>Bv,Gf:()=>xS});let y=null,ne=!1,j=1;const U=Symbol("SIGNAL");function Z(e){const n=y;return y=e,n}const oe={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function V(e){if(ne)throw new Error("");if(null===y)return;y.consumerOnSignalRead(e);const n=y.nextProducerIndex++;Ve(y),n<y.producerNode.length&&y.producerNode[n]!==e&&Te(y)&&Fe(y.producerNode[n],y.producerIndexOfThis[n]),y.producerNode[n]!==e&&(y.producerNode[n]=e,y.producerIndexOfThis[n]=Te(y)?be(e,y,n):0),y.producerLastReadVersion[n]=e.version}function Q(e){if((!Te(e)||e.dirty)&&(e.dirty||e.lastCleanEpoch!==j)){if(!e.producerMustRecompute(e)&&!qe(e))return e.dirty=!1,void(e.lastCleanEpoch=j);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=j}}function ee(e){if(void 0===e.liveConsumerNode)return;const n=ne;ne=!0;try{for(const i of e.liveConsumerNode)i.dirty||$e(i)}finally{ne=n}}function de(){return!1!==y?.consumerAllowSignalWrites}function $e(e){e.dirty=!0,ee(e),e.consumerMarkedDirty?.(e)}function we(e){return e&&(e.nextProducerIndex=0),Z(e)}function ve(e,n){if(Z(n),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(Te(e))for(let i=e.nextProducerIndex;i<e.producerNode.length;i++)Fe(e.producerNode[i],e.producerIndexOfThis[i]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function qe(e){Ve(e);for(let n=0;n<e.producerNode.length;n++){const i=e.producerNode[n],o=e.producerLastReadVersion[n];if(o!==i.version||(Q(i),o!==i.version))return!0}return!1}function Re(e){if(Ve(e),Te(e))for(let n=0;n<e.producerNode.length;n++)Fe(e.producerNode[n],e.producerIndexOfThis[n]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function be(e,n,i){if(ie(e),Ve(e),0===e.liveConsumerNode.length)for(let o=0;o<e.producerNode.length;o++)e.producerIndexOfThis[o]=be(e.producerNode[o],e,o);return e.liveConsumerIndexOfThis.push(i),e.liveConsumerNode.push(n)-1}function Fe(e,n){if(ie(e),Ve(e),1===e.liveConsumerNode.length)for(let o=0;o<e.producerNode.length;o++)Fe(e.producerNode[o],e.producerIndexOfThis[o]);const i=e.liveConsumerNode.length-1;if(e.liveConsumerNode[n]=e.liveConsumerNode[i],e.liveConsumerIndexOfThis[n]=e.liveConsumerIndexOfThis[i],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,n<e.liveConsumerNode.length){const o=e.liveConsumerIndexOfThis[n],l=e.liveConsumerNode[n];Ve(l),l.producerIndexOfThis[o]=n}}function Te(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function Ve(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function ie(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}const xe=Symbol("UNSET"),ze=Symbol("COMPUTING"),le=Symbol("ERRORED"),ue=(()=>({...oe,value:xe,dirty:!0,error:null,equal:_,producerMustRecompute:e=>e.value===xe||e.value===ze,producerRecomputeValue(e){if(e.value===ze)throw new Error("Detected cycle in computations.");const n=e.value;e.value=ze;const i=we(e);let o;try{o=e.computation()}catch(l){o=le,e.error=l}finally{ve(e,i)}n!==xe&&n!==le&&o!==le&&e.equal(n,o)?e.value=n:(e.value=o,e.version++)}}))();let ce=function W(){throw new Error};function je(){ce()}let Dt=null;function Ke(e,n){de()||je();const i=e.value;Object.is(i,n)||e.equal(i,n)||(e.value=n,function fn(e){e.version++,function P(){j++}(),ee(e),Dt?.()}(e))}const Qt=(()=>({...oe,equal:_,value:void 0}))();const Pt=()=>{},dn=(()=>({...oe,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:e=>{null!==e.schedule&&e.schedule(e.ref)},hasRun:!1,cleanupFn:Pt}))();var Rn=M(8645),Gn=M(7394),vi=M(5592),ni=M(3019),Bt=M(5619),nr=M(2096),Er=M(4829),On=M(305),fr=M(9360);function Nr(e={}){const{connector:n=(()=>new Rn.x),resetOnError:i=!0,resetOnComplete:o=!0,resetOnRefCountZero:l=!0}=e;return u=>{let d,f,v,O=0,L=!1,G=!1;const ge=()=>{f?.unsubscribe(),f=void 0},Se=()=>{ge(),d=v=void 0,L=G=!1},Je=()=>{const at=d;Se(),at?.unsubscribe()};return(0,fr.e)((at,Et)=>{O++,!G&&!L&&ge();const Nt=v=v??n();Et.add(()=>{O--,0===O&&!G&&!L&&(f=Vt(Je,l))}),Nt.subscribe(Et),!d&&O>0&&(d=new On.Hp({next:st=>Nt.next(st),error:st=>{G=!0,ge(),f=Vt(Se,i,st),Nt.error(st)},complete:()=>{L=!0,ge(),f=Vt(Se,o),Nt.complete()}}),(0,Er.Xf)(at).subscribe(d))})(u)}}function Vt(e,n,...i){if(!0===n)return void e();if(!1===n)return;const o=new On.Hp({next:()=>{o.unsubscribe(),e()}});return(0,Er.Xf)(n(...i)).subscribe(o)}var zi=M(4664),En=M(2737),Be=M(8251);function Io(e,n){return e===n}function Zt(e){for(let n in e)if(e[n]===Zt)return n;throw Error("Could not find renamed property on target object.")}function bn(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(bn).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const n=e.toString();if(null==n)return""+n;const i=n.indexOf("\n");return-1===i?n:n.substring(0,i)}function lo(e,n){return null==e||""===e?null===n?"":n:null==n||""===n?e:e+" "+n}const Vs=Zt({__forward_ref__:Zt});function Sn(e){return e.__forward_ref__=Sn,e.toString=function(){return bn(this())},e}function zt(e){return Br(e)?e():e}function Br(e){return"function"==typeof e&&e.hasOwnProperty(Vs)&&e.__forward_ref__===Sn}function ts(e){return e&&!!e.\u0275providers}const Wi="https://g.co/ng/security#xss";class St extends Error{constructor(n,i){super(_i(n,i)),this.code=n}}function _i(e,n){return`NG0${Math.abs(e)}${n?": "+n:""}`}const Fi=Zt({\u0275cmp:Zt}),mn=Zt({\u0275dir:Zt}),Vr=Zt({\u0275pipe:Zt}),Xr=Zt({\u0275mod:Zt}),Ot=Zt({\u0275fac:Zt}),jr=Zt({__NG_ELEMENT_ID__:Zt}),tt=Zt({__NG_ENV_ID__:Zt});function Ce(e){return"string"==typeof e?e:null==e?"":String(e)}function en(e,n){throw new St(-201,!1)}function li(e,n){null==e&&function Ut(e,n,i,o){throw new Error(`ASSERTION ERROR: ${e}`+(null==o?"":` [Expected=> ${i} ${o} ${n} <=Actual]`))}(n,e,null,"!=")}function Fn(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Di(e){return{providers:e.providers||[],imports:e.imports||[]}}function rr(e){return fo(e,Ki)||fo(e,Zn)}function Hr(e){return null!==rr(e)}function fo(e,n){return e.hasOwnProperty(n)?e[n]:null}function po(e){return e&&(e.hasOwnProperty(zo)||e.hasOwnProperty(ko))?e[zo]:null}const Ki=Zt({\u0275prov:Zt}),zo=Zt({\u0275inj:Zt}),Zn=Zt({ngInjectableDef:Zt}),ko=Zt({ngInjectorDef:Zt});var Xt=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(Xt||{});let qi;function xr(){return qi}function wn(e){const n=qi;return qi=e,n}function go(e,n,i){const o=rr(e);return o&&"root"==o.providedIn?void 0===o.value?o.value=o.factory():o.value:i&Xt.Optional?null:void 0!==n?n:void en(bn(e))}const Jn=globalThis;class on{constructor(n,i){this._desc=n,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof i?this.__NG_ELEMENT_ID__=i:void 0!==i&&(this.\u0275prov=Fn({token:this,providedIn:i.providedIn||"root",factory:i.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}const Ro={},Go="__NG_DI_FLAG__",ls="ngTempTokenPath",js=/\n/gm,cs="__source";let Zo;function Ti(e){const n=Zo;return Zo=e,n}function Yo(e,n=Xt.Default){if(void 0===Zo)throw new St(-203,!1);return null===Zo?go(e,void 0,n):Zo.get(e,n&Xt.Optional?null:void 0,n)}function sn(e,n=Xt.Default){return(xr()||Yo)(zt(e),n)}function qt(e,n=Xt.Default){return sn(e,ar(n))}function ar(e){return typeof e>"u"||"number"==typeof e?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Ko(e){const n=[];for(let i=0;i<e.length;i++){const o=zt(e[i]);if(Array.isArray(o)){if(0===o.length)throw new St(900,!1);let l,u=Xt.Default;for(let d=0;d<o.length;d++){const f=o[d],v=ta(f);"number"==typeof v?-1===v?l=f.token:u|=v:l=f}n.push(sn(l,u))}else n.push(sn(o))}return n}function mr(e,n){return e[Go]=n,e.prototype[Go]=n,e}function ta(e){return e[Go]}function Gi(e){return{toString:e}.toString()}var vo=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(vo||{}),ri=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(ri||{});const Ei={},_n=[];function Po(e,n,i){let o=e.length;for(;;){const l=e.indexOf(n,i);if(-1===l)return l;if(0===l||e.charCodeAt(l-1)<=32){const u=n.length;if(l+u===o||e.charCodeAt(l+u)<=32)return l}i=l+1}}function zn(e,n,i){let o=0;for(;o<i.length;){const l=i[o];if("number"==typeof l){if(0!==l)break;o++;const u=i[o++],d=i[o++],f=i[o++];e.setAttribute(n,d,f,u)}else{const u=l,d=i[++o];eo(u)?e.setProperty(n,u,d):e.setAttribute(n,u,d),o++}}return o}function Fo(e){return 3===e||4===e||6===e}function eo(e){return 64===e.charCodeAt(0)}function lr(e,n){if(null!==n&&0!==n.length)if(null===e||0===e.length)e=n.slice();else{let i=-1;for(let o=0;o<n.length;o++){const l=n[o];"number"==typeof l?i=l:0===i||Lo(e,i,l,null,-1===i||2===i?n[++o]:null)}}return e}function Lo(e,n,i,o,l){let u=0,d=e.length;if(-1===n)d=-1;else for(;u<e.length;){const f=e[u++];if("number"==typeof f){if(f===n){d=-1;break}if(f>n){d=u-1;break}}}for(;u<e.length;){const f=e[u];if("number"==typeof f)break;if(f===i){if(null===o)return void(null!==l&&(e[u+1]=l));if(o===e[u+1])return void(e[u+2]=l)}u++,null!==o&&u++,null!==l&&u++}-1!==d&&(e.splice(d,0,n),u=d+1),e.splice(u++,0,i),null!==o&&e.splice(u++,0,o),null!==l&&e.splice(u++,0,l)}const yo="ng-template";function Mr(e,n,i){let o=0,l=!0;for(;o<e.length;){let u=e[o++];if("string"==typeof u&&l){const d=e[o++];if(i&&"class"===u&&-1!==Po(d.toLowerCase(),n,0))return!0}else{if(1===u){for(;o<e.length&&"string"==typeof(u=e[o++]);)if(u.toLowerCase()===n)return!0;return!1}"number"==typeof u&&(l=!1)}}return!1}function Wr(e){return 4===e.type&&e.value!==yo}function Is(e,n,i){return n===(4!==e.type||i?e.value:yo)}function to(e,n,i){let o=4;const l=e.attrs||[],u=function us(e){for(let n=0;n<e.length;n++)if(Fo(e[n]))return n;return e.length}(l);let d=!1;for(let f=0;f<n.length;f++){const v=n[f];if("number"!=typeof v){if(!d)if(4&o){if(o=2|1&o,""!==v&&!Is(e,v,i)||""===v&&1===n.length){if(Qi(o))return!1;d=!0}}else{const O=8&o?v:n[++f];if(8&o&&null!==e.attrs){if(!Mr(e.attrs,O,i)){if(Qi(o))return!1;d=!0}continue}const G=na(8&o?"class":v,l,Wr(e),i);if(-1===G){if(Qi(o))return!1;d=!0;continue}if(""!==O){let ge;ge=G>u?"":l[G+1].toLowerCase();const Se=8&o?ge:null;if(Se&&-1!==Po(Se,O,0)||2&o&&O!==ge){if(Qi(o))return!1;d=!0}}}}else{if(!d&&!Qi(o)&&!Qi(v))return!1;if(d&&Qi(v))continue;d=!1,o=v|1&o}}return Qi(o)||d}function Qi(e){return 0==(1&e)}function na(e,n,i,o){if(null===n)return-1;let l=0;if(o||!i){let u=!1;for(;l<n.length;){const d=n[l];if(d===e)return l;if(3===d||6===d)u=!0;else{if(1===d||2===d){let f=n[++l];for(;"string"==typeof f;)f=n[++l];continue}if(4===d)break;if(0===d){l+=4;continue}}l+=u?1:2}return-1}return function Ms(e,n){let i=e.indexOf(4);if(i>-1)for(i++;i<e.length;){const o=e[i];if("number"==typeof o)return-1;if(o===n)return i;i++}return-1}(n,e)}function bo(e,n,i=!1){for(let o=0;o<n.length;o++)if(to(e,n[o],i))return!0;return!1}function ds(e,n){return e?":not("+n.trim()+")":n}function ol(e){let n=e[0],i=1,o=2,l="",u=!1;for(;i<e.length;){let d=e[i];if("string"==typeof d)if(2&o){const f=e[++i];l+="["+d+(f.length>0?'="'+f+'"':"")+"]"}else 8&o?l+="."+d:4&o&&(l+=" "+d);else""!==l&&!Qi(d)&&(n+=ds(u,l),l=""),o=d,u=u||!Qi(o);i++}return""!==l&&(n+=ds(u,l)),n}function ra(e){return Gi(()=>{const n=ks(e),i={...n,decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===vo.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||ri.Emulated,styles:e.styles||_n,_:null,schemas:e.schemas||null,tView:null,id:""};Mn(i);const o=e.dependencies;return i.directiveDefs=ci(o,!1),i.pipeDefs=ci(o,!0),i.id=function No(e){let n=0;const i=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,e.consts,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery].join("|");for(const l of i)n=Math.imul(31,n)+l.charCodeAt(0)<<0;return n+=2147483648,"c"+n}(i),i})}function Us(e){return pn(e)||fi(e)}function ba(e){return null!==e}function $o(e){return Gi(()=>({type:e.type,bootstrap:e.bootstrap||_n,declarations:e.declarations||_n,imports:e.imports||_n,exports:e.exports||_n,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function kr(e,n){if(null==e)return Ei;const i={};for(const o in e)if(e.hasOwnProperty(o)){let l=e[o],u=l;Array.isArray(l)&&(u=l[1],l=l[0]),i[l]=o,n&&(n[l]=u)}return i}function zs(e){return Gi(()=>{const n=ks(e);return Mn(n),n})}function yr(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function pn(e){return e[Fi]||null}function fi(e){return e[mn]||null}function Hi(e){return e[Vr]||null}function Gr(e){const n=pn(e)||fi(e)||Hi(e);return null!==n&&n.standalone}function pi(e,n){const i=e[Xr]||null;if(!i&&!0===n)throw new Error(`Type ${bn(e)} does not have '\u0275mod' property.`);return i}function ks(e){const n={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputTransforms:null,inputConfig:e.inputs||Ei,exportAs:e.exportAs||null,standalone:!0===e.standalone,signals:!0===e.signals,selectors:e.selectors||_n,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:kr(e.inputs,n),outputs:kr(e.outputs),debugInfo:null}}function Mn(e){e.features?.forEach(n=>n(e))}function ci(e,n){if(!e)return null;const i=n?Hi:Us;return()=>("function"==typeof e?e():e).map(o=>i(o)).filter(ba)}const Yn=0,pt=1,Yt=2,Kn=3,$i=4,Si=5,br=6,qo=7,Nn=8,Ni=9,Bi=10,$t=11,qn=12,Qo=13,hs=14,b=15,g=16,I=17,A=18,N=19,X=20,te=21,De=22,me=23,Ie=25,Ne=1,He=2,Pe=6,nt=7,it=9,Qe=11;function Xe(e){return Array.isArray(e)&&"object"==typeof e[Ne]}function ft(e){return Array.isArray(e)&&!0===e[Ne]}function Ft(e){return 0!=(4&e.flags)}function kt(e){return e.componentOffset>-1}function It(e){return 1==(1&e.flags)}function yt(e){return!!e.template}function cn(e){return 0!=(512&e[Yt])}function oi(e,n){return e.hasOwnProperty(Ot)?e[Ot]:null}class sl{constructor(n,i,o){this.previousValue=n,this.currentValue=i,this.firstChange=o}isFirstChange(){return this.firstChange}}function al(){return wa}function wa(e){return e.type.prototype.ngOnChanges&&(e.setInput=oa),ou}function ou(){const e=Yl(this),n=e?.current;if(n){const i=e.previous;if(i===Ei)e.previous=n;else for(let o in n)i[o]=n[o];e.current=null,this.ngOnChanges(n)}}function oa(e,n,i,o){const l=this.declaredInputs[i],u=Yl(e)||function su(e,n){return e[Zl]=n}(e,{previous:Ei,current:null}),d=u.current||(u.current={}),f=u.previous,v=f[l];d[l]=new sl(v&&v.currentValue,n,f===Ei),e[o]=n}al.ngInherit=!0;const Zl="__ngSimpleChanges__";function Yl(e){return e[Zl]||null}const _o=function(e,n,i){};function si(e){for(;Array.isArray(e);)e=e[Yn];return e}function Yr(e,n){return si(n[e.index])}function Ws(e,n){return e.data[n]}function Ca(e,n){return e[n]}function Co(e,n){const i=n[e];return Xe(i)?i:i[Yn]}function ro(e){return 128==(128&e[Yt])}function Do(e,n){return null==n?null:e[n]}function Ba(e){e[I]=0}function gd(e){1024&e[Yt]||(e[Yt]|=1024,ro(e)&&Xl(e))}function Ql(e){9216&e[Yt]&&Xl(e)}function Xl(e){let n=e[Kn];for(;null!==n&&!(ft(n)&&n[Pe]||Xe(n)&&8192&n[Yt]);){if(ft(n))n[Pe]=!0;else if(n[Yt]|=8192,!ro(n))break;n=n[Kn]}}function Da(e,n){if(256==(256&e[Yt]))throw new St(911,!1);null===e[te]&&(e[te]=[]),e[te].push(n)}const tn={lFrame:R(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function nc(){return tn.bindingsEnabled}function Me(){return tn.lFrame.lView}function Tt(){return tn.lFrame.tView}function Qn(e){return tn.lFrame.contextLView=e,e[Nn]}function bi(e){return tn.lFrame.contextLView=null,e}function Kt(){let e=In();for(;null!==e&&64===e.type;)e=e.parent;return e}function In(){return tn.lFrame.currentTNode}function wi(e,n){const i=tn.lFrame;i.currentTNode=e,i.isParent=n}function Zi(){return tn.lFrame.isParent}function Oi(){const e=tn.lFrame;let n=e.bindingRootIndex;return-1===n&&(n=e.bindingRootIndex=e.tView.bindingStartIndex),n}function wr(){return tn.lFrame.bindingIndex++}function dl(e,n){const i=tn.lFrame;i.bindingIndex=i.bindingRootIndex=e,Ua(n)}function Ua(e){tn.lFrame.currentDirectiveIndex=e}function Hp(){return tn.lFrame.currentQueryIndex}function oc(e){tn.lFrame.currentQueryIndex=e}function p(e){const n=e[pt];return 2===n.type?n.declTNode:1===n.type?e[Si]:null}function C(e,n,i){if(i&Xt.SkipSelf){let l=n,u=e;for(;!(l=l.parent,null!==l||i&Xt.Host||(l=p(u),null===l||(u=u[hs],10&l.type))););if(null===l)return!1;n=l,e=u}const o=tn.lFrame=D();return o.currentTNode=n,o.lView=e,!0}function m(e){const n=D(),i=e[pt];tn.lFrame=n,n.currentTNode=i.firstChild,n.lView=e,n.tView=i,n.contextLView=e,n.bindingIndex=i.bindingStartIndex,n.inI18n=!1}function D(){const e=tn.lFrame,n=null===e?null:e.child;return null===n?R(e):n}function R(e){const n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=n),n}function H(){const e=tn.lFrame;return tn.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const ae=H;function Ge(){const e=H();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function mt(){return tn.lFrame.selectedIndex}function Jt(e){tn.lFrame.selectedIndex=e}function jt(){const e=tn.lFrame;return Ws(e.tView,e.selectedIndex)}let Ea=!0;function Uh(){return Ea}function fl(e){Ea=e}function uu(e,n){for(let i=n.directiveStart,o=n.directiveEnd;i<o;i++){const u=e.data[i].type.prototype,{ngAfterContentInit:d,ngAfterContentChecked:f,ngAfterViewInit:v,ngAfterViewChecked:O,ngOnDestroy:L}=u;d&&(e.contentHooks??=[]).push(-i,d),f&&((e.contentHooks??=[]).push(i,f),(e.contentCheckHooks??=[]).push(i,f)),v&&(e.viewHooks??=[]).push(-i,v),O&&((e.viewHooks??=[]).push(i,O),(e.viewCheckHooks??=[]).push(i,O)),null!=L&&(e.destroyHooks??=[]).push(i,L)}}function As(e,n,i){ty(e,n,3,i)}function vd(e,n,i,o){(3&e[Yt])===i&&ty(e,n,i,o)}function zp(e,n){let i=e[Yt];(3&i)===n&&(i&=16383,i+=1,e[Yt]=i)}function ty(e,n,i,o){const u=o??-1,d=n.length-1;let f=0;for(let v=void 0!==o?65535&e[I]:0;v<d;v++)if("number"==typeof n[v+1]){if(f=n[v],null!=o&&f>=o)break}else n[v]<0&&(e[I]+=65536),(f<u||-1==u)&&(z_(e,i,n,v),e[I]=(4294901760&e[I])+v+2),v++}function ny(e,n){_o(4,e,n);const i=Z(null);try{n.call(e)}finally{Z(i),_o(5,e,n)}}function z_(e,n,i,o){const l=i[o]<0,u=i[o+1],f=e[l?-i[o]:i[o]];l?e[Yt]>>14<e[I]>>16&&(3&e[Yt])===n&&(e[Yt]+=16384,ny(f,u)):ny(f,u)}const du=-1;class yd{constructor(n,i,o){this.factory=n,this.resolving=!1,this.canSeeViewProviders=i,this.injectImpl=o}}function Wp(e){return e!==du}function bd(e){return 32767&e}function wd(e,n){let i=function G_(e){return e>>16}(e),o=n;for(;i>0;)o=o[hs],i--;return o}let Gp=!0;function _d(e){const n=Gp;return Gp=e,n}const Cd=255,Gh=5;let sy=0;const Sa={};function hu(e,n){const i=Zh(e,n);if(-1!==i)return i;const o=n[pt];o.firstCreatePass&&(e.injectorIndex=n.length,fu(o.data,e),fu(n,null),fu(o.blueprint,null));const l=Dd(e,n),u=e.injectorIndex;if(Wp(l)){const d=bd(l),f=wd(l,n),v=f[pt].data;for(let O=0;O<8;O++)n[u+O]=f[d+O]|v[d+O]}return n[u+8]=l,u}function fu(e,n){e.push(0,0,0,0,0,0,0,0,n)}function Zh(e,n){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===n[e.injectorIndex+8]?-1:e.injectorIndex}function Dd(e,n){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let i=0,o=null,l=n;for(;null!==l;){if(o=fy(l),null===o)return du;if(i++,l=l[hs],-1!==o.injectorIndex)return o.injectorIndex|i<<16}return du}function Yh(e,n,i){!function ay(e,n,i){let o;"string"==typeof i?o=i.charCodeAt(0)||0:i.hasOwnProperty(jr)&&(o=i[jr]),null==o&&(o=i[jr]=sy++);const l=o&Cd;n.data[e+(l>>Gh)]|=1<<l}(e,n,i)}function cy(e,n,i){if(i&Xt.Optional||void 0!==e)return e;en()}function uy(e,n,i,o){if(i&Xt.Optional&&void 0===o&&(o=null),!(i&(Xt.Self|Xt.Host))){const l=e[Ni],u=wn(void 0);try{return l?l.get(n,o,i&Xt.Optional):go(n,o,i&Xt.Optional)}finally{wn(u)}}return cy(o,0,i)}function Zp(e,n,i,o=Xt.Default,l){if(null!==e){if(2048&n[Yt]&&!(o&Xt.Self)){const d=function Y_(e,n,i,o,l){let u=e,d=n;for(;null!==u&&null!==d&&2048&d[Yt]&&!(512&d[Yt]);){const f=dy(u,d,i,o|Xt.Self,Sa);if(f!==Sa)return f;let v=u.parent;if(!v){const O=d[X];if(O){const L=O.get(i,Sa,o);if(L!==Sa)return L}v=fy(d),d=d[hs]}u=v}return l}(e,n,i,o,Sa);if(d!==Sa)return d}const u=dy(e,n,i,o,Sa);if(u!==Sa)return u}return uy(n,i,o,l)}function dy(e,n,i,o,l){const u=function hy(e){if("string"==typeof e)return e.charCodeAt(0)||0;const n=e.hasOwnProperty(jr)?e[jr]:void 0;return"number"==typeof n?n>=0?n&Cd:ml:n}(i);if("function"==typeof u){if(!C(n,e,o))return o&Xt.Host?cy(l,0,o):uy(n,i,o,l);try{let d;if(d=u(o),null!=d||o&Xt.Optional)return d;en()}finally{ae()}}else if("number"==typeof u){let d=null,f=Zh(e,n),v=du,O=o&Xt.Host?n[b][Si]:null;for((-1===f||o&Xt.SkipSelf)&&(v=-1===f?Dd(e,n):n[f+8],v!==du&&Yp(o,!1)?(d=n[pt],f=bd(v),n=wd(v,n)):f=-1);-1!==f;){const L=n[pt];if(Kh(u,f,L.data)){const G=Z_(f,n,i,d,o,O);if(G!==Sa)return G}v=n[f+8],v!==du&&Yp(o,n[pt].data[f+8]===O)&&Kh(u,f,n)?(d=L,f=bd(v),n=wd(v,n)):f=-1}}return l}function Z_(e,n,i,o,l,u){const d=n[pt],f=d.data[e+8],L=pu(f,d,i,null==o?kt(f)&&Gp:o!=d&&0!=(3&f.type),l&Xt.Host&&u===f);return null!==L?pl(n,d,L,f):Sa}function pu(e,n,i,o,l){const u=e.providerIndexes,d=n.data,f=1048575&u,v=e.directiveStart,L=u>>20,ge=l?f+L:e.directiveEnd;for(let Se=o?f:f+L;Se<ge;Se++){const Je=d[Se];if(Se<v&&i===Je||Se>=v&&Je.type===i)return Se}if(l){const Se=d[v];if(Se&&yt(Se)&&Se.type===i)return v}return null}function pl(e,n,i,o){let l=e[i];const u=n.data;if(function zh(e){return e instanceof yd}(l)){const d=l;d.resolving&&function Mt(e,n){const i=n?`. Dependency path: ${n.join(" > ")} > ${e}`:"";throw new St(-200,`Circular dependency in DI detected for ${e}${i}`)}(function K(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():Ce(e)}(u[i]));const f=_d(d.canSeeViewProviders);d.resolving=!0;const O=d.injectImpl?wn(d.injectImpl):null;C(e,o,Xt.Default);try{l=e[i]=d.factory(void 0,u,e,o),n.firstCreatePass&&i>=o.directiveStart&&function Up(e,n,i){const{ngOnChanges:o,ngOnInit:l,ngDoCheck:u}=n.type.prototype;if(o){const d=wa(n);(i.preOrderHooks??=[]).push(e,d),(i.preOrderCheckHooks??=[]).push(e,d)}l&&(i.preOrderHooks??=[]).push(0-e,l),u&&((i.preOrderHooks??=[]).push(e,u),(i.preOrderCheckHooks??=[]).push(e,u))}(i,u[i],n)}finally{null!==O&&wn(O),_d(f),d.resolving=!1,ae()}}return l}function Kh(e,n,i){return!!(i[n+(e>>Gh)]&1<<e)}function Yp(e,n){return!(e&Xt.Self||e&Xt.Host&&n)}class Rr{constructor(n,i){this._tNode=n,this._lView=i}get(n,i,o){return Zp(this._tNode,this._lView,n,ar(o),i)}}function ml(){return new Rr(Kt(),Me())}function qh(e){return Gi(()=>{const n=e.prototype.constructor,i=n[Ot]||Ed(n),o=Object.prototype;let l=Object.getPrototypeOf(e.prototype).constructor;for(;l&&l!==o;){const u=l[Ot]||Ed(l);if(u&&u!==i)return u;l=Object.getPrototypeOf(l)}return u=>new u})}function Ed(e){return Br(e)?()=>{const n=Ed(zt(e));return n&&n()}:oi(e)}function fy(e){const n=e[pt],i=n.type;return 2===i?n.declTNode:1===i?e[Si]:null}function Sd(e){return function ly(e,n){if("class"===n)return e.classes;if("style"===n)return e.styles;const i=e.attrs;if(i){const o=i.length;let l=0;for(;l<o;){const u=i[l];if(Fo(u))break;if(0===u)l+=2;else if("number"==typeof u)for(l++;l<o&&"string"==typeof i[l];)l++;else{if(u===n)return i[l+1];l+=2}}}return null}(Kt(),e)}const dc="__parameters__";function fc(e,n,i){return Gi(()=>{const o=function Kp(e){return function(...i){if(e){const o=e(...i);for(const l in o)this[l]=o[l]}}}(n);function l(...u){if(this instanceof l)return o.apply(this,u),this;const d=new l(...u);return f.annotation=d,f;function f(v,O,L){const G=v.hasOwnProperty(dc)?v[dc]:Object.defineProperty(v,dc,{value:[]})[dc];for(;G.length<=L;)G.push(null);return(G[L]=G[L]||[]).push(d),v}}return i&&(l.prototype=Object.create(i.prototype)),l.prototype.ngMetadataName=e,l.annotationCls=l,l})}function mc(e,n){e.forEach(i=>Array.isArray(i)?mc(i,n):n(i))}function Xh(e,n,i){n>=e.length?e.push(i):e.splice(n,0,i)}function xd(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}const Td=mr(fc("Optional"),8),J=mr(fc("SkipSelf"),4),wl=new on("ENVIRONMENT_INITIALIZER"),Dy=new on("INJECTOR",-1),rf=new on("INJECTOR_DEF_TYPES");class sf{get(n,i=Ro){if(i===Ro){const o=new Error(`NullInjectorError: No provider for ${bn(n)}!`);throw o.name="NullInjectorError",o}return i}}function rg(e){return{\u0275providers:e}}function Ey(...e){return{\u0275providers:Sy(0,e),\u0275fromNgModule:!0}}function Sy(e,...n){const i=[],o=new Set;let l;const u=d=>{i.push(d)};return mc(n,d=>{const f=d;af(f,u,[],o)&&(l||=[],l.push(f))}),void 0!==l&&xy(l,u),i}function xy(e,n){for(let i=0;i<e.length;i++){const{ngModule:o,providers:l}=e[i];sg(l,u=>{n(u,o)})}}function af(e,n,i,o){if(!(e=zt(e)))return!1;let l=null,u=po(e);const d=!u&&pn(e);if(u||d){if(d&&!d.standalone)return!1;l=e}else{const v=e.ngModule;if(u=po(v),!u)return!1;l=v}const f=o.has(l);if(d){if(f)return!1;if(o.add(l),d.dependencies){const v="function"==typeof d.dependencies?d.dependencies():d.dependencies;for(const O of v)af(O,n,i,o)}}else{if(!u)return!1;{if(null!=u.imports&&!f){let O;o.add(l);try{mc(u.imports,L=>{af(L,n,i,o)&&(O||=[],O.push(L))})}finally{}void 0!==O&&xy(O,n)}if(!f){const O=oi(l)||(()=>new l);n({provide:l,useFactory:O,deps:_n},l),n({provide:rf,useValue:l,multi:!0},l),n({provide:wl,useValue:()=>sn(l),multi:!0},l)}const v=u.providers;if(null!=v&&!f){const O=e;sg(v,L=>{n(L,O)})}}}return l!==e&&void 0!==e.providers}function sg(e,n){for(let i of e)ts(i)&&(i=i.\u0275providers),Array.isArray(i)?sg(i,n):n(i)}const rC=Zt({provide:String,useValue:Zt});function Od(e){return null!==e&&"object"==typeof e&&rC in e}function _l(e){return"function"==typeof e}const cf=new on("Set Injector scope."),Cl={},Ty={};let Ad;function Rd(){return void 0===Ad&&(Ad=new sf),Ad}class la{}class Ga extends la{get destroyed(){return this._destroyed}constructor(n,i,o,l){super(),this.parent=i,this.source=o,this.scopes=l,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Fd(n,d=>this.processProvider(d)),this.records.set(Dy,ca(void 0,this)),l.has("environment")&&this.records.set(la,ca(void 0,this));const u=this.records.get(cf);null!=u&&"string"==typeof u.value&&this.scopes.add(u.value),this.injectorDefTypes=new Set(this.get(rf,_n,Xt.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const i of this._ngOnDestroyHooks)i.ngOnDestroy();const n=this._onDestroyHooks;this._onDestroyHooks=[];for(const i of n)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(n){return this.assertNotDestroyed(),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){this.assertNotDestroyed();const i=Ti(this),o=wn(void 0);try{return n()}finally{Ti(i),wn(o)}}get(n,i=Ro,o=Xt.Default){if(this.assertNotDestroyed(),n.hasOwnProperty(tt))return n[tt](this);o=ar(o);const u=Ti(this),d=wn(void 0);try{if(!(o&Xt.SkipSelf)){let v=this.records.get(n);if(void 0===v){const O=function lg(e){return"function"==typeof e||"object"==typeof e&&e instanceof on}(n)&&rr(n);v=O&&this.injectableDefInScope(O)?ca(yu(n),Cl):null,this.records.set(n,v)}if(null!=v)return this.hydrate(n,v)}return(o&Xt.Self?Rd():this.parent).get(n,i=o&Xt.Optional&&i===Ro?null:i)}catch(f){if("NullInjectorError"===f.name){if((f[ls]=f[ls]||[]).unshift(bn(n)),u)throw f;return function Jr(e,n,i,o){const l=e[ls];throw n[cs]&&l.unshift(n[cs]),e.message=function vr(e,n,i,o=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let l=bn(n);if(Array.isArray(n))l=n.map(bn).join(" -> ");else if("object"==typeof n){let u=[];for(let d in n)if(n.hasOwnProperty(d)){let f=n[d];u.push(d+":"+("string"==typeof f?JSON.stringify(f):bn(f)))}l=`{${u.join(", ")}}`}return`${i}${o?"("+o+")":""}[${l}]: ${e.replace(js,"\n  ")}`}("\n"+e.message,l,i,o),e.ngTokenPath=l,e[ls]=null,e}(f,n,"R3InjectorError",this.source)}throw f}finally{wn(d),Ti(u)}}resolveInjectorInitializers(){const n=Ti(this),i=wn(void 0);try{const l=this.get(wl,_n,Xt.Self);for(const u of l)u()}finally{Ti(n),wn(i)}}toString(){const n=[],i=this.records;for(const o of i.keys())n.push(bn(o));return`R3Injector[${n.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new St(205,!1)}processProvider(n){let i=_l(n=zt(n))?n:zt(n&&n.provide);const o=function uf(e){return Od(e)?ca(void 0,e.useValue):ca(function df(e,n,i){let o;if(_l(e)){const l=zt(e);return oi(l)||yu(l)}if(Od(e))o=()=>zt(e.useValue);else if(function lf(e){return!(!e||!e.useFactory)}(e))o=()=>e.useFactory(...Ko(e.deps||[]));else if(function Jo(e){return!(!e||!e.useExisting)}(e))o=()=>sn(zt(e.useExisting));else{const l=zt(e&&(e.useClass||e.provide));if(!function Pd(e){return!!e.deps}(e))return oi(l)||yu(l);o=()=>new l(...Ko(e.deps))}return o}(e),Cl)}(n);if(_l(n)||!0!==n.multi)this.records.get(i);else{let l=this.records.get(i);l||(l=ca(void 0,Cl,!0),l.factory=()=>Ko(l.multi),this.records.set(i,l)),i=n,l.multi.push(n)}this.records.set(i,o)}hydrate(n,i){return i.value===Cl&&(i.value=Ty,i.value=i.factory()),"object"==typeof i.value&&i.value&&function ag(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(i.value)&&this._ngOnDestroyHooks.add(i.value),i.value}injectableDefInScope(n){if(!n.providedIn)return!1;const i=zt(n.providedIn);return"string"==typeof i?"any"===i||this.scopes.has(i):this.injectorDefTypes.has(i)}removeOnDestroy(n){const i=this._onDestroyHooks.indexOf(n);-1!==i&&this._onDestroyHooks.splice(i,1)}}function yu(e){const n=rr(e),i=null!==n?n.factory:oi(e);if(null!==i)return i;if(e instanceof on)throw new St(204,!1);if(e instanceof Function)return function bu(e){const n=e.length;if(n>0)throw function gu(e,n){const i=[];for(let o=0;o<e;o++)i.push(n);return i}(n,"?"),new St(204,!1);const i=function or(e){return e&&(e[Ki]||e[Zn])||null}(e);return null!==i?()=>i.factory(e):()=>new e}(e);throw new St(204,!1)}function ca(e,n,i=!1){return{factory:e,value:n,multi:i?[]:void 0}}function Fd(e,n){for(const i of e)Array.isArray(i)?Fd(i,n):i&&ts(i)?Fd(i.\u0275providers,n):n(i)}function My(e,n){e instanceof Ga&&e.assertNotDestroyed();const o=Ti(e),l=wn(void 0);try{return n()}finally{Ti(o),wn(l)}}function Dl(e){if(!xr()&&!function ea(){return Zo}())throw new St(-203,!1)}function $d(e,n=null,i=null,o){const l=Nd(e,n,i,o);return l.resolveInjectorInitializers(),l}function Nd(e,n=null,i=null,o,l=new Set){const u=[i||_n,Ey(e)];return o=o||("object"==typeof e?void 0:bn(e)),new Ga(u,n||Rd(),o||null,l)}let z,Bo=(()=>{class e{static#e=this.THROW_IF_NOT_FOUND=Ro;static#t=this.NULL=new sf;static create(i,o){if(Array.isArray(i))return $d({name:""},o,i,"");{const l=i.name??"";return $d({name:l},i.parent,i.providers,l)}}static#n=this.\u0275prov=Fn({token:e,providedIn:"any",factory:()=>sn(Dy)});static#i=this.__NG_ELEMENT_ID__=-1}return e})();function Rs(e){return!!pi(e)}function Py(e){z=e}const Fy=new on("AppId",{providedIn:"root",factory:()=>oC}),oC="ng",Ly=new on("Platform Initializer"),dg=new on("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),sC=new on("AnimationModuleType"),aC=new on("CSP nonce",{providedIn:"root",factory:()=>function El(){if(void 0!==z)return z;if(typeof document<"u")return document;throw new St(210,!1)}().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Ps(e){return e instanceof Function?e():e}function vf(e){return 128==(128&e.flags)}var bf=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(bf||{});const mg=new Map;let wC=0;const yg="__ngContext__";function Vo(e,n){Xe(n)?(e[yg]=n[N],function CC(e){mg.set(e[N],e)}(n)):e[yg]=n}let wf;function Ta(e,n){return wf(e,n)}function Ud(e){const n=e[Kn];return ft(n)?n[Kn]:n}function bg(e){return Eu(e[qn])}function Du(e){return Eu(e[$i])}function Eu(e){for(;null!==e&&!ft(e);)e=e[$i];return e}function xn(e,n,i,o,l){if(null!=o){let u,d=!1;ft(o)?u=o:Xe(o)&&(d=!0,o=o[Yn]);const f=si(o);0===e&&null!==i?null==l?Df(n,i,f):Ml(n,i,f,l||null,!0):1===e&&null!==i?Ml(n,i,f,l||null,!0):2===e?function Gd(e,n,i){const o=_c(e,n);o&&function rb(e,n,i,o){e.removeChild(n,i,o)}(e,o,n,i)}(n,f,d):3===e&&n.destroyNode(f),null!=u&&function Eg(e,n,i,o,l){const u=i[nt];u!==si(i)&&xn(n,e,o,u,l);for(let f=Qe;f<i.length;f++){const v=i[f];Dc(v[pt],v,e,n,o,u)}}(n,e,u,i,l)}}function zd(e,n,i){return e.createElement(n,i)}function wg(e,n){const i=e[it],o=i.indexOf(n);i.splice(o,1)}function xu(e,n){if(e.length<=Qe)return;const i=Qe+n,o=e[i];if(o){const l=o[g];null!==l&&l!==e&&wg(l,o),n>0&&(e[i-1][$i]=o[$i]);const u=xd(e,Qe+n);!function Qy(e,n){Dc(e,n,n[$t],2,null,null),n[Yn]=null,n[Si]=null}(o[pt],o);const d=u[A];null!==d&&d.detachView(u[pt]),o[Kn]=null,o[$i]=null,o[Yt]&=-129}return o}function Wd(e,n){if(!(256&n[Yt])){const i=n[$t];n[me]&&Re(n[me]),i.destroyNode&&Dc(e,n,i,3,null,null),function eb(e){let n=e[qn];if(!n)return Iu(e[pt],e);for(;n;){let i=null;if(Xe(n))i=n[qn];else{const o=n[Qe];o&&(i=o)}if(!i){for(;n&&!n[$i]&&n!==e;)Xe(n)&&Iu(n[pt],n),n=n[Kn];null===n&&(n=e),Xe(n)&&Iu(n[pt],n),i=n&&n[$i]}n=i}}(n)}}function Iu(e,n){if(!(256&n[Yt])){n[Yt]&=-129,n[Yt]|=256,function Cf(e,n){let i;if(null!=e&&null!=(i=e.destroyHooks))for(let o=0;o<i.length;o+=2){const l=n[i[o]];if(!(l instanceof yd)){const u=i[o+1];if(Array.isArray(u))for(let d=0;d<u.length;d+=2){const f=l[u[d]],v=u[d+1];_o(4,f,v);try{v.call(f)}finally{_o(5,f,v)}}else{_o(4,l,u);try{u.call(l)}finally{_o(5,l,u)}}}}}(e,n),function ib(e,n){const i=e.cleanup,o=n[qo];if(null!==i)for(let u=0;u<i.length-1;u+=2)if("string"==typeof i[u]){const d=i[u+3];d>=0?o[d]():o[-d].unsubscribe(),u+=2}else i[u].call(o[i[u+1]]);null!==o&&(n[qo]=null);const l=n[te];if(null!==l){n[te]=null;for(let u=0;u<l.length;u++)(0,l[u])()}}(e,n),1===n[pt].type&&n[$t].destroy();const i=n[g];if(null!==i&&ft(n[Kn])){i!==n[Kn]&&wg(i,n);const o=n[A];null!==o&&o.detachView(e)}!function DC(e){mg.delete(e[N])}(n)}}function Tu(e,n,i){return function _g(e,n,i){let o=n;for(;null!==o&&40&o.type;)o=(n=o).parent;if(null===o)return i[Yn];{const{componentOffset:l}=o;if(l>-1){const{encapsulation:u}=e.data[o.directiveStart+l];if(u===ri.None||u===ri.Emulated)return null}return Yr(o,i)}}(e,n.parent,i)}function Ml(e,n,i,o,l){e.insertBefore(n,i,o,l)}function Df(e,n,i){e.appendChild(n,i)}function Ef(e,n,i,o,l){null!==o?Ml(e,n,i,o,l):Df(e,n,i)}function _c(e,n){return e.parentNode(n)}let xf,Pi,Ct=function Dg(e,n,i){return 40&e.type?Yr(e,i):null};function oo(e,n,i,o){const l=Tu(e,o,n),u=n[$t],f=function Sf(e,n,i){return Ct(e,n,i)}(o.parent||n[Si],o,n);if(null!=l)if(Array.isArray(i))for(let v=0;v<i.length;v++)Ef(u,l,i[v],f,!1);else Ef(u,l,i,f,!1);void 0!==xf&&xf(u,o,n,i,l)}function Pr(e,n){if(null!==n){const i=n.type;if(3&i)return Yr(n,e);if(4&i)return If(-1,e[n.index]);if(8&i){const o=n.child;if(null!==o)return Pr(e,o);{const l=e[n.index];return ft(l)?If(-1,l):si(l)}}if(32&i)return Ta(n,e)()||si(e[n.index]);{const o=So(e,n);return null!==o?Array.isArray(o)?o[0]:Pr(Ud(e[b]),o):Pr(e,n.next)}}return null}function So(e,n){return null!==n?e[b][Si].projection[n.projection]:null}function If(e,n){const i=Qe+e+1;if(i<n.length){const o=n[i],l=o[pt].firstChild;if(null!==l)return Pr(o,l)}return n[nt]}function Cc(e,n,i,o,l,u,d){for(;null!=i;){const f=o[i.index],v=i.type;if(d&&0===n&&(f&&Vo(si(f),o),i.flags|=2),32!=(32&i.flags))if(8&v)Cc(e,n,i.child,o,l,u,!1),xn(n,e,l,f,u);else if(32&v){const O=Ta(i,o);let L;for(;L=O();)xn(n,e,l,L,u);xn(n,e,l,f,u)}else 16&v?da(e,n,o,i,l,u):xn(n,e,l,f,u);i=d?i.projectionNext:i.next}}function Dc(e,n,i,o,l,u){Cc(i,o,e.firstChild,n,l,u,!1)}function da(e,n,i,o,l,u){const d=i[b],v=d[Si].projection[o.projection];if(Array.isArray(v))for(let O=0;O<v.length;O++)xn(n,e,l,v[O],u);else{let O=v;const L=d[Kn];vf(o)&&(O.flags|=128),Cc(e,n,O,L,l,u,!0)}}function Sg(e,n,i){""===i?e.removeAttribute(n,"class"):e.setAttribute(n,"class",i)}function Tf(e,n,i){const{mergedAttrs:o,classes:l,styles:u}=i;null!==o&&zn(e,n,o),null!==l&&Sg(e,n,l),null!==u&&function Vi(e,n,i){e.setAttribute(n,"style",i)}(e,n,u)}function ub(e){return function Zd(){if(void 0===Pi&&(Pi=null,Jn.trustedTypes))try{Pi=Jn.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Pi}()?.createScriptURL(e)||e}class db{constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Wi})`}}function kl(e){return e instanceof db?e.changingThisBreaksApplicationSecurity:e}function ku(e,n){const i=function pb(e){return e instanceof db&&e.getTypeName()||null}(e);if(null!=i&&i!==n){if("ResourceURL"===i&&"URL"===n)return!0;throw new Error(`Required a safe ${n}, got a ${i} (see ${Wi})`)}return i===n}const PC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;var qa=function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e}(qa||{});function Kd(e){const n=Ru();return n?n.sanitize(qa.URL,e)||"":ku(e,"URL")?kl(e):function Ig(e){return(e=String(e)).match(PC)?e:"unsafe:"+e}(Ce(e))}function kf(e){const n=Ru();if(n)return ub(n.sanitize(qa.RESOURCE_URL,e)||"");if(ku(e,"ResourceURL"))return ub(kl(e));throw new St(904,!1)}function Og(e,n,i){return function Pl(e,n){return"src"===n&&("embed"===e||"frame"===e||"iframe"===e||"media"===e||"script"===e)||"href"===n&&("base"===e||"link"===e)?kf:Kd}(n,i)(e)}function Ru(){const e=Me();return e&&e[Bi].sanitizer}let wb=(e,n,i)=>null;function Bg(e,n,i=!1){return wb(e,n,i)}class ZC{}class Db{}class KC{resolveComponentFactory(n){throw function YC(e){const n=Error(`No component factory found for ${bn(e)}.`);return n.ngComponent=e,n}(n)}}let Xd=(()=>{class e{static#e=this.NULL=new KC}return e})();function qC(){return Lu(Kt(),Me())}function Lu(e,n){return new Jd(Yr(e,n))}let Jd=(()=>{class e{constructor(i){this.nativeElement=i}static#e=this.__NG_ELEMENT_ID__=qC}return e})();function Hg(e){return e instanceof Jd?e.nativeElement:e}class $f{}let Ic=(()=>{class e{constructor(){this.destroyNode=null}static#e=this.__NG_ELEMENT_ID__=()=>function QC(){const e=Me(),i=Co(Kt().index,e);return(Xe(i)?i:e)[$t]}()}return e})(),XC=(()=>{class e{static#e=this.\u0275prov=Fn({token:e,providedIn:"root",factory:()=>null})}return e})();class Sb{constructor(n){this.full=n,this.major=n.split(".")[0],this.minor=n.split(".")[1],this.patch=n.split(".").slice(2).join(".")}}const JC=new Sb("17.0.2"),Ug={};function eD(e,n){const i=function he(e){const n=Object.create(ue);n.computation=e;const i=()=>{if(Q(n),V(n),n.value===le)throw n.error;return n.value};return i[U]=n,i}(e);return n?.equal&&(i[U].equal=n.equal),i}function tD(e,n){const i=function Oe(e){const n=Object.create(Qt);n.value=e;const i=()=>(V(n),n.value);return i[U]=n,i}(e),o=i[U];return n?.equal&&(o.equal=n.equal),i.set=l=>Ke(o,l),i.update=l=>function ht(e,n){de()||je(),Ke(e,n(e.value))}(o,l),i.asReadonly=nD.bind(i),i}function nD(){const e=this[U];if(void 0===e.readonlyFn){const n=()=>this();n[U]=e,e.readonlyFn=n}return e.readonlyFn}function Tc(e){const n=Z(null);try{return e()}finally{Z(n)}}function Nf(e){return!!zg(e)&&(Array.isArray(e)||!(e instanceof Map)&&Symbol.iterator in e)}function zg(e){return null!==e&&("function"==typeof e||"object"==typeof e)}class xb{constructor(){}supports(n){return Nf(n)}create(n){return new sD(n)}}const oD=(e,n)=>n;class sD{constructor(n){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=n||oD}forEachItem(n){let i;for(i=this._itHead;null!==i;i=i._next)n(i)}forEachOperation(n){let i=this._itHead,o=this._removalsHead,l=0,u=null;for(;i||o;){const d=!o||i&&i.currentIndex<Tb(o,l,u)?i:o,f=Tb(d,l,u),v=d.currentIndex;if(d===o)l--,o=o._nextRemoved;else if(i=i._next,null==d.previousIndex)l++;else{u||(u=[]);const O=f-l,L=v-l;if(O!=L){for(let ge=0;ge<O;ge++){const Se=ge<u.length?u[ge]:u[ge]=0,Je=Se+ge;L<=Je&&Je<O&&(u[ge]=Se+1)}u[d.previousIndex]=L-O}}f!==v&&n(d,f,v)}}forEachPreviousItem(n){let i;for(i=this._previousItHead;null!==i;i=i._nextPrevious)n(i)}forEachAddedItem(n){let i;for(i=this._additionsHead;null!==i;i=i._nextAdded)n(i)}forEachMovedItem(n){let i;for(i=this._movesHead;null!==i;i=i._nextMoved)n(i)}forEachRemovedItem(n){let i;for(i=this._removalsHead;null!==i;i=i._nextRemoved)n(i)}forEachIdentityChange(n){let i;for(i=this._identityChangesHead;null!==i;i=i._nextIdentityChange)n(i)}diff(n){if(null==n&&(n=[]),!Nf(n))throw new St(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let l,u,d,i=this._itHead,o=!1;if(Array.isArray(n)){this.length=n.length;for(let f=0;f<this.length;f++)u=n[f],d=this._trackByFn(f,u),null!==i&&Object.is(i.trackById,d)?(o&&(i=this._verifyReinsertion(i,u,d,f)),Object.is(i.item,u)||this._addIdentityChange(i,u)):(i=this._mismatch(i,u,d,f),o=!0),i=i._next}else l=0,function rD(e,n){if(Array.isArray(e))for(let i=0;i<e.length;i++)n(e[i]);else{const i=e[Symbol.iterator]();let o;for(;!(o=i.next()).done;)n(o.value)}}(n,f=>{d=this._trackByFn(l,f),null!==i&&Object.is(i.trackById,d)?(o&&(i=this._verifyReinsertion(i,f,d,l)),Object.is(i.item,f)||this._addIdentityChange(i,f)):(i=this._mismatch(i,f,d,l),o=!0),i=i._next,l++}),this.length=l;return this._truncate(i),this.collection=n,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;null!==n;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;null!==n;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;null!==n;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,i,o,l){let u;return null===n?u=this._itTail:(u=n._prev,this._remove(n)),null!==(n=null===this._unlinkedRecords?null:this._unlinkedRecords.get(o,null))?(Object.is(n.item,i)||this._addIdentityChange(n,i),this._reinsertAfter(n,u,l)):null!==(n=null===this._linkedRecords?null:this._linkedRecords.get(o,l))?(Object.is(n.item,i)||this._addIdentityChange(n,i),this._moveAfter(n,u,l)):n=this._addAfter(new aD(i,o),u,l),n}_verifyReinsertion(n,i,o,l){let u=null===this._unlinkedRecords?null:this._unlinkedRecords.get(o,null);return null!==u?n=this._reinsertAfter(u,n._prev,l):n.currentIndex!=l&&(n.currentIndex=l,this._addToMoves(n,l)),n}_truncate(n){for(;null!==n;){const i=n._next;this._addToRemovals(this._unlink(n)),n=i}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,i,o){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(n);const l=n._prevRemoved,u=n._nextRemoved;return null===l?this._removalsHead=u:l._nextRemoved=u,null===u?this._removalsTail=l:u._prevRemoved=l,this._insertAfter(n,i,o),this._addToMoves(n,o),n}_moveAfter(n,i,o){return this._unlink(n),this._insertAfter(n,i,o),this._addToMoves(n,o),n}_addAfter(n,i,o){return this._insertAfter(n,i,o),this._additionsTail=null===this._additionsTail?this._additionsHead=n:this._additionsTail._nextAdded=n,n}_insertAfter(n,i,o){const l=null===i?this._itHead:i._next;return n._next=l,n._prev=i,null===l?this._itTail=n:l._prev=n,null===i?this._itHead=n:i._next=n,null===this._linkedRecords&&(this._linkedRecords=new Ib),this._linkedRecords.put(n),n.currentIndex=o,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){null!==this._linkedRecords&&this._linkedRecords.remove(n);const i=n._prev,o=n._next;return null===i?this._itHead=o:i._next=o,null===o?this._itTail=i:o._prev=i,n}_addToMoves(n,i){return n.previousIndex===i||(this._movesTail=null===this._movesTail?this._movesHead=n:this._movesTail._nextMoved=n),n}_addToRemovals(n){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Ib),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,i){return n.item=i,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=n:this._identityChangesTail._nextIdentityChange=n,n}}class aD{constructor(n,i){this.item=n,this.trackById=i,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class lD{constructor(){this._head=null,this._tail=null}add(n){null===this._head?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,i){let o;for(o=this._head;null!==o;o=o._nextDup)if((null===i||i<=o.currentIndex)&&Object.is(o.trackById,n))return o;return null}remove(n){const i=n._prevDup,o=n._nextDup;return null===i?this._head=o:i._nextDup=o,null===o?this._tail=i:o._prevDup=i,null===this._head}}class Ib{constructor(){this.map=new Map}put(n){const i=n.trackById;let o=this.map.get(i);o||(o=new lD,this.map.set(i,o)),o.add(n)}get(n,i){const l=this.map.get(n);return l?l.get(n,i):null}remove(n){const i=n.trackById;return this.map.get(i).remove(n)&&this.map.delete(i),n}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Tb(e,n,i){const o=e.previousIndex;if(null===o)return o;let l=0;return i&&o<i.length&&(l=i[o]),o+n+l}class Mb{constructor(){}supports(n){return n instanceof Map||zg(n)}create(){return new cD}}class cD{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(n){let i;for(i=this._mapHead;null!==i;i=i._next)n(i)}forEachPreviousItem(n){let i;for(i=this._previousMapHead;null!==i;i=i._nextPrevious)n(i)}forEachChangedItem(n){let i;for(i=this._changesHead;null!==i;i=i._nextChanged)n(i)}forEachAddedItem(n){let i;for(i=this._additionsHead;null!==i;i=i._nextAdded)n(i)}forEachRemovedItem(n){let i;for(i=this._removalsHead;null!==i;i=i._nextRemoved)n(i)}diff(n){if(n){if(!(n instanceof Map||zg(n)))throw new St(900,!1)}else n=new Map;return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let i=this._mapHead;if(this._appendAfter=null,this._forEach(n,(o,l)=>{if(i&&i.key===l)this._maybeAddToChanges(i,o),this._appendAfter=i,i=i._next;else{const u=this._getOrCreateRecordForKey(l,o);i=this._insertBeforeOrAppend(i,u)}}),i){i._prev&&(i._prev._next=null),this._removalsHead=i;for(let o=i;null!==o;o=o._nextRemoved)o===this._mapHead&&(this._mapHead=null),this._records.delete(o.key),o._nextRemoved=o._next,o.previousValue=o.currentValue,o.currentValue=null,o._prev=null,o._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,i){if(n){const o=n._prev;return i._next=n,i._prev=o,n._prev=i,o&&(o._next=i),n===this._mapHead&&(this._mapHead=i),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=i,i._prev=this._appendAfter):this._mapHead=i,this._appendAfter=i,null}_getOrCreateRecordForKey(n,i){if(this._records.has(n)){const l=this._records.get(n);this._maybeAddToChanges(l,i);const u=l._prev,d=l._next;return u&&(u._next=d),d&&(d._prev=u),l._next=null,l._prev=null,l}const o=new uD(n);return this._records.set(n,o),o.currentValue=i,this._addToAdditions(o),o}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;null!==n;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;null!==n;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;null!=n;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,i){Object.is(i,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=i,this._addToChanges(n))}_addToAdditions(n){null===this._additionsHead?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){null===this._changesHead?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,i){n instanceof Map?n.forEach(i):Object.keys(n).forEach(o=>i(n[o],o))}}class uD{constructor(n){this.key=n,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}function kb(){return new Wg([new xb])}let Wg=(()=>{class e{static#e=this.\u0275prov=Fn({token:e,providedIn:"root",factory:kb});constructor(i){this.factories=i}static create(i,o){if(null!=o){const l=o.factories.slice();i=i.concat(l)}return new e(i)}static extend(i){return{provide:e,useFactory:o=>e.create(i,o||kb()),deps:[[e,new J,new Td]]}}find(i){const o=this.factories.find(l=>l.supports(i));if(null!=o)return o;throw new St(901,!1)}}return e})();function Ob(){return new Gg([new Mb])}let Gg=(()=>{class e{static#e=this.\u0275prov=Fn({token:e,providedIn:"root",factory:Ob});constructor(i){this.factories=i}static create(i,o){if(o){const l=o.factories.slice();i=i.concat(l)}return new e(i)}static extend(i){return{provide:e,useFactory:o=>e.create(i,o||Ob()),deps:[[e,new J,new Td]]}}find(i){const o=this.factories.find(l=>l.supports(i));if(o)return o;throw new St(901,!1)}}return e})();function eh(e,n,i,o,l=!1){for(;null!==i;){const u=n[i.index];null!==u&&o.push(si(u)),ft(u)&&Ab(u,o);const d=i.type;if(8&d)eh(e,n,i.child,o);else if(32&d){const f=Ta(i,n);let v;for(;v=f();)o.push(v)}else if(16&d){const f=So(n,i);if(Array.isArray(f))o.push(...f);else{const v=Ud(n[b]);eh(v[pt],v,f,o,!0)}}i=l?i.projectionNext:i.next}return o}function Ab(e,n){for(let i=Qe;i<e.length;i++){const o=e[i],l=o[pt].firstChild;null!==l&&eh(o[pt],o,l,n)}e[nt]!==e[Yn]&&n.push(e[nt])}let Rb=[];const gD={...oe,consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{Xl(e.lView)},consumerOnSignalRead(){this.lView[me]=this}};function Zg(e){return e.ngOriginalError}class Fl{constructor(){this._console=console}handleError(n){const i=this._findOriginalError(n);this._console.error("ERROR",n),i&&this._console.error("ORIGINAL ERROR",i)}_findOriginalError(n){let i=n&&Zg(n);for(;i&&Zg(i);)i=Zg(i);return i||null}}const Lb=new on("",{providedIn:"root",factory:()=>!1}),gn={};function Bb(e){Vb(Tt(),Me(),mt()+e,!1)}function Vb(e,n,i,o){if(!o)if(3==(3&n[Yt])){const u=e.preOrderCheckHooks;null!==u&&As(n,u,i)}else{const u=e.preOrderHooks;null!==u&&vd(n,u,0,i)}Jt(i)}function $u(e,n=Xt.Default){const i=Me();return null===i?sn(e,n):Zp(Kt(),i,zt(e),n)}function jb(){throw new Error("invalid")}function jf(e,n,i,o,l,u,d,f,v,O,L){const G=n.blueprint.slice();return G[Yn]=l,G[Yt]=140|o,(null!==O||e&&2048&e[Yt])&&(G[Yt]|=2048),Ba(G),G[Kn]=G[hs]=e,G[Nn]=i,G[Bi]=d||e&&e[Bi],G[$t]=f||e&&e[$t],G[Ni]=v||e&&e[Ni]||null,G[Si]=u,G[N]=function _C(){return wC++}(),G[br]=L,G[X]=O,G[b]=2==n.type?e[b]:G,G}function Nu(e,n,i,o,l){let u=e.data[n];if(null===u)u=function Yg(e,n,i,o,l){const u=In(),d=Zi(),v=e.data[n]=function TD(e,n,i,o,l,u){let d=n?n.injectorIndex:-1,f=0;return function Va(){return null!==tn.skipHydrationRootTNode}()&&(f|=128),{type:i,index:o,insertBeforeIndex:null,injectorIndex:d,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:f,providerIndexes:0,value:l,attrs:u,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,d?u:u&&u.parent,i,n,o,l);return null===e.firstChild&&(e.firstChild=v),null!==u&&(d?null==u.child&&null!==v.parent&&(u.child=v):null===u.next&&(u.next=v,v.prev=u)),v}(e,n,i,o,l),function Gs(){return tn.lFrame.inI18n}()&&(u.flags|=32);else if(64&u.type){u.type=i,u.value=o,u.attrs=l;const d=function gi(){const e=tn.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}();u.injectorIndex=null===d?-1:d.injectorIndex}return wi(u,!0),u}function th(e,n,i,o){if(0===i)return-1;const l=n.length;for(let u=0;u<i;u++)n.push(o),e.blueprint.push(o),e.data.push(null);return l}function Hb(e,n,i,o,l){const u=mt(),d=2&o;try{Jt(-1),d&&n.length>Ie&&Vb(e,n,Ie,!1),_o(d?2:0,l),i(o,l)}finally{Jt(u),_o(d?3:1,l)}}function Kg(e,n,i){if(Ft(n)){const o=Z(null);try{const u=n.directiveEnd;for(let d=n.directiveStart;d<u;d++){const f=e.data[d];f.contentQueries&&f.contentQueries(1,i[d],d)}}finally{Z(o)}}}function qg(e,n,i){nc()&&(function ln(e,n,i,o){const l=i.directiveStart,u=i.directiveEnd;kt(i)&&function tm(e,n,i){const o=Yr(n,e),l=Ub(i);let d=16;i.signals?d=4096:i.onPush&&(d=64);const f=nh(e,jf(e,l,null,d,o,n,null,e[Bi].rendererFactory.createRenderer(o,i),null,null,null));e[n.index]=f}(n,i,e.data[l+i.componentOffset]),e.firstCreatePass||hu(i,n),Vo(o,n);const d=i.initialInputs;for(let f=l;f<u;f++){const v=e.data[f],O=pl(n,e,f,i);Vo(O,n),null!==d&&PD(0,f-l,O,v,0,d),yt(v)&&(Co(i.index,n)[Nn]=pl(n,e,f,i))}}(e,n,i,Yr(i,n)),64==(64&i.flags)&&Hf(e,n,i))}function Qg(e,n,i=Yr){const o=n.localNames;if(null!==o){let l=n.index+1;for(let u=0;u<o.length;u+=2){const d=o[u+1],f=-1===d?i(n,e):e[d];e[l++]=f}}}function Ub(e){const n=e.tView;return null===n||n.incompleteFirstPass?e.tView=Xg(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function Xg(e,n,i,o,l,u,d,f,v,O,L){const G=Ie+o,ge=G+l,Se=function CD(e,n){const i=[];for(let o=0;o<n;o++)i.push(o<e?null:gn);return i}(G,ge),Je="function"==typeof O?O():O;return Se[pt]={type:e,blueprint:Se,template:i,queries:null,viewQuery:f,declTNode:n,data:Se.slice().fill(null,G),bindingStartIndex:G,expandoStartIndex:ge,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof u?u():u,pipeRegistry:"function"==typeof d?d():d,firstChild:null,schemas:v,consts:Je,incompleteFirstPass:!1,ssrId:L}}let zb=e=>null;function Wb(e,n,i,o){for(let l in e)if(e.hasOwnProperty(l)){i=null===i?{}:i;const u=e[l];null===o?Gb(i,n,l,u):o.hasOwnProperty(l)&&Gb(i,n,o[l],u)}return i}function Gb(e,n,i,o){e.hasOwnProperty(i)?e[i].push(n,o):e[i]=[n,o]}function Fs(e,n,i,o,l,u,d,f){const v=Yr(n,i);let L,O=n.inputs;!f&&null!=O&&(L=O[o])?(sm(e,i,L,o,l),kt(n)&&function OD(e,n){const i=Co(n,e);16&i[Yt]||(i[Yt]|=64)}(i,n.index)):3&n.type&&(o=function kD(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(o),l=null!=d?d(l,n.value||"",o):l,u.setProperty(v,o,l))}function Jg(e,n,i,o){if(nc()){const l=null===o?null:{"":-1},u=function em(e,n){const i=e.directiveRegistry;let o=null,l=null;if(i)for(let u=0;u<i.length;u++){const d=i[u];if(bo(n,d.selectors,!1))if(o||(o=[]),yt(d))if(null!==d.findHostDirectiveDefs){const f=[];l=l||new Map,d.findHostDirectiveDefs(d,f,l),o.unshift(...f,d),ji(e,n,f.length)}else o.unshift(d),ji(e,n,0);else l=l||new Map,d.findHostDirectiveDefs?.(d,o,l),o.push(d)}return null===o?null:[o,l]}(e,i);let d,f;null===u?d=f=null:[d,f]=u,null!==d&&Zb(e,n,i,d,l,f),l&&function qb(e,n,i){if(n){const o=e.localNames=[];for(let l=0;l<n.length;l+=2){const u=i[n[l+1]];if(null==u)throw new St(-301,!1);o.push(n[l],u)}}}(i,o,l)}i.mergedAttrs=lr(i.mergedAttrs,i.attrs)}function Zb(e,n,i,o,l,u){for(let O=0;O<o.length;O++)Yh(hu(i,n),e,o[O].type);!function Xb(e,n,i){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+i,e.providerIndexes=n}(i,e.data.length,o.length);for(let O=0;O<o.length;O++){const L=o[O];L.providersResolver&&L.providersResolver(L)}let d=!1,f=!1,v=th(e,n,o.length,null);for(let O=0;O<o.length;O++){const L=o[O];i.mergedAttrs=lr(i.mergedAttrs,L.hostAttrs),RD(e,i,n,v,L),Qb(v,L,l),null!==L.contentQueries&&(i.flags|=4),(null!==L.hostBindings||null!==L.hostAttrs||0!==L.hostVars)&&(i.flags|=64);const G=L.type.prototype;!d&&(G.ngOnChanges||G.ngOnInit||G.ngDoCheck)&&((e.preOrderHooks??=[]).push(i.index),d=!0),!f&&(G.ngOnChanges||G.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(i.index),f=!0),v++}!function MD(e,n,i){const l=n.directiveEnd,u=e.data,d=n.attrs,f=[];let v=null,O=null;for(let L=n.directiveStart;L<l;L++){const G=u[L],ge=i?i.get(G):null,Je=ge?ge.outputs:null;v=Wb(G.inputs,L,v,ge?ge.inputs:null),O=Wb(G.outputs,L,O,Je);const at=null===v||null===d||Wr(n)?null:FD(v,L,d);f.push(at)}null!==v&&(v.hasOwnProperty("class")&&(n.flags|=8),v.hasOwnProperty("style")&&(n.flags|=16)),n.initialInputs=f,n.inputs=v,n.outputs=O}(e,i,u)}function Hf(e,n,i){const o=i.directiveStart,l=i.directiveEnd,u=i.index,d=function hl(){return tn.lFrame.currentDirectiveIndex}();try{Jt(u);for(let f=o;f<l;f++){const v=e.data[f],O=n[f];Ua(f),(null!==v.hostBindings||0!==v.hostVars||null!==v.hostAttrs)&&Kb(v,O)}}finally{Jt(-1),Ua(d)}}function Kb(e,n){null!==e.hostBindings&&e.hostBindings(1,n)}function ji(e,n,i){n.componentOffset=i,(e.components??=[]).push(n.index)}function Qb(e,n,i){if(i){if(n.exportAs)for(let o=0;o<n.exportAs.length;o++)i[n.exportAs[o]]=e;yt(n)&&(i[""]=e)}}function RD(e,n,i,o,l){e.data[o]=l;const u=l.factory||(l.factory=oi(l.type)),d=new yd(u,yt(l),$u);e.blueprint[o]=d,i[o]=d,function Ll(e,n,i,o,l){const u=l.hostBindings;if(u){let d=e.hostBindingOpCodes;null===d&&(d=e.hostBindingOpCodes=[]);const f=~n.index;(function Yb(e){let n=e.length;for(;n>0;){const i=e[--n];if("number"==typeof i&&i<0)return i}return 0})(d)!=f&&d.push(f),d.push(i,o,u)}}(e,n,o,th(e,i,l.hostVars,gn),l)}function ha(e,n,i,o,l,u){const d=Yr(e,n);!function Uf(e,n,i,o,l,u,d){if(null==u)e.removeAttribute(n,l,i);else{const f=null==d?Ce(u):d(u,o||"",l);e.setAttribute(n,l,f,i)}}(n[$t],d,u,e.value,i,o,l)}function PD(e,n,i,o,l,u){const d=u[n];if(null!==d)for(let f=0;f<d.length;)nm(o,i,d[f++],d[f++],d[f++])}function nm(e,n,i,o,l){const u=Z(null);try{const d=e.inputTransforms;null!==d&&d.hasOwnProperty(o)&&(l=d[o].call(n,l)),null!==e.setInput?e.setInput(n,l,i,o):n[o]=l}finally{Z(u)}}function FD(e,n,i){let o=null,l=0;for(;l<i.length;){const u=i[l];if(0!==u)if(5!==u){if("number"==typeof u)break;if(e.hasOwnProperty(u)){null===o&&(o=[]);const d=e[u];for(let f=0;f<d.length;f+=2)if(d[f]===n){o.push(u,d[f+1],i[l+1]);break}}l+=2}else l+=2;else l+=4}return o}function Bu(e,n,i,o){return[e,!0,!1,n,null,o,!1,i,null,null,null]}function im(e,n){const i=e.contentQueries;if(null!==i){const o=Z(null);try{for(let l=0;l<i.length;l+=2){const d=i[l+1];if(-1!==d){const f=e.data[d];oc(i[l]),f.contentQueries(2,n[d],d)}}}finally{Z(o)}}}function nh(e,n){return e[qn]?e[Qo][$i]=n:e[qn]=n,e[Qo]=n,n}function zf(e,n,i){oc(0);const o=Z(null);try{n(e,i)}finally{Z(o)}}function Jb(e){return e[qo]||(e[qo]=[])}function rm(e){return e.cleanup||(e.cleanup=[])}function ih(e,n){const i=e[Ni],o=i?i.get(Fl,null):null;o&&o.handleError(n)}function sm(e,n,i,o,l){for(let u=0;u<i.length;){const d=i[u++],f=i[u++];nm(e.data[d],n[d],o,f,l)}}function fa(e,n,i){const o=function _a(e,n){return si(n[e])}(n,e);!function _f(e,n,i){e.setValue(n,i)}(e[$t],o,i)}function cm(e,n,i,o){const l=n[Yt];if(256==(256&l))return;n[Bi].inlineEffectRunner?.flush(),m(n);let d=null,f=null;(function e0(e){return 2!==e.type})(e)&&(f=function hD(e){return e[me]??function fD(e){const n=Rb.pop()??Object.create(gD);return n.lView=e,n}(e)}(n),d=we(f));try{Ba(n),function ul(e){return tn.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==i&&Hb(e,n,i,2,o);const v=3==(3&l);if(v){const G=e.preOrderCheckHooks;null!==G&&As(n,G,null)}else{const G=e.preOrderHooks;null!==G&&vd(n,G,0,null),zp(n,0)}if(function um(e){for(let n=bg(e);null!==n;n=Du(n)){if(!n[He])continue;const i=n[it];for(let o=0;o<i.length;o++){gd(i[o])}}}(n),Vu(n,0),null!==e.contentQueries&&im(e,n),v){const G=e.contentCheckHooks;null!==G&&As(n,G)}else{const G=e.contentHooks;null!==G&&vd(n,G,1),zp(n,1)}!function _D(e,n){const i=e.hostBindingOpCodes;if(null!==i)try{for(let o=0;o<i.length;o++){const l=i[o];if(l<0)Jt(~l);else{const u=l,d=i[++o],f=i[++o];dl(d,u),f(2,n[u])}}}finally{Jt(-1)}}(e,n);const O=e.components;null!==O&&Ma(n,O,0);const L=e.viewQuery;if(null!==L&&zf(2,L,o),v){const G=e.viewCheckHooks;null!==G&&As(n,G)}else{const G=e.viewHooks;null!==G&&vd(n,G,2),zp(n,2)}if(!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),n[De]){for(const G of n[De])G();n[De]=null}n[Yt]&=-73}catch(v){throw Xl(n),v}finally{null!==f&&(ve(f,d),function pD(e){e.lView[me]!==e&&(e.lView=null,Rb.push(e))}(f)),Ge()}}function Vu(e,n){for(let i=bg(e);null!==i;i=Du(i)){i[Pe]=!1;for(let o=Qe;o<i.length;o++)_s(i[o],n)}}function t0(e,n,i){_s(Co(n,e),i)}function _s(e,n){ro(e)&&Xa(e,n)}function Xa(e,n){const o=e[pt],l=e[Yt],u=e[me];let d=!!(0===n&&16&l);if(d||=!!(64&l&&0===n),d||=!!(1024&l),d||=!(!u?.dirty||!qe(u)),u&&(u.dirty=!1),e[Yt]&=-9217,d)cm(o,e,o.template,e[Nn]);else if(8192&l){Vu(e,1);const f=o.components;null!==f&&Ma(e,f,1)}}function Ma(e,n,i){for(let o=0;o<n.length;o++)t0(e,n[o],i)}function ju(e){for(;e;){e[Yt]|=64;const n=Ud(e);if(cn(e)&&!n)return e;e=n}return null}class oh{get rootNodes(){const n=this._lView,i=n[pt];return eh(i,n,i.firstChild,[])}constructor(n,i,o=!0){this._lView=n,this._cdRefInjectingView=i,this.notifyErrorHandler=o,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Nn]}set context(n){this._lView[Nn]=n}get destroyed(){return 256==(256&this._lView[Yt])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const n=this._lView[Kn];if(ft(n)){const i=n[8],o=i?i.indexOf(this):-1;o>-1&&(xu(n,o),xd(i,o))}this._attachedToViewContainer=!1}Wd(this._lView[pt],this._lView)}onDestroy(n){Da(this._lView,n)}markForCheck(){ju(this._cdRefInjectingView||this._lView)}detach(){this._lView[Yt]&=-129}reattach(){Ql(this._lView),this._lView[Yt]|=128}detectChanges(){!function rh(e,n,i,o=!0){const l=n[Bi],u=l.rendererFactory,d=l.afterRenderEventManager;u.begin?.(),d?.begin();try{cm(e,n,e.template,i),function lm(e){let n=0;for(;9216&e[Yt]||e[me]?.dirty;){if(100===n)throw new St(103,!1);n++,Xa(e,1)}}(n)}catch(v){throw o&&ih(n,v),v}finally{u.end?.(),l.inlineEffectRunner?.flush(),d?.end()}}(this._lView[pt],this._lView,this.context,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new St(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function Jy(e,n){Dc(e,n,n[$t],2,null,null)}(this._lView[pt],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new St(902,!1);this._appRef=n}}let dm=(()=>{class e{static#e=this.__NG_ELEMENT_ID__=$D}return e})();function $D(e){return function n0(e,n,i){if(kt(e)&&!i){const o=Co(e.index,n);return new oh(o,o)}return 47&e.type?new oh(n[b],n):null}(Kt(),Me(),16==(16&e))}let $l=(()=>{class e{static#e=this.__NG_ELEMENT_ID__=a0;static#t=this.__NG_ENV_ID__=i=>i}return e})();class Gf extends $l{constructor(n){super(),this._lView=n}onDestroy(n){return Da(this._lView,n),()=>function Jl(e,n){if(null===e[te])return;const i=e[te].indexOf(n);-1!==i&&e[te].splice(i,1)}(this._lView,n)}}function a0(){return new Gf(Me())}const l0=new on("",{providedIn:"root",factory:()=>qt(c0)});let c0=(()=>{class e{static#e=this.\u0275prov=Fn({token:e,providedIn:"root",factory:()=>new hm})}return e})(),u0=(()=>{class e{constructor(){this.queuedEffectCount=0,this.queues=new Map}scheduleEffect(i){const o=i.creationZone;this.queues.has(o)||this.queues.set(o,new Set);const l=this.queues.get(o);l.has(i)||(this.queuedEffectCount++,l.add(i))}flush(){for(;this.queuedEffectCount>0;)for(const[i,o]of this.queues)null===i?this.flushQueue(o):i.run(()=>this.flushQueue(o))}flushQueue(i){for(const o of i)i.delete(o),this.queuedEffectCount--,o.run()}static#e=this.\u0275prov=Fn({token:e,providedIn:"root",factory:()=>new e})}return e})();class hm{constructor(){this.hasQueuedFlush=!1,this.delegate=new u0,this.flushTask=()=>{this.delegate.flush(),this.hasQueuedFlush=!1}}scheduleEffect(n){this.delegate.scheduleEffect(n),this.hasQueuedFlush||(queueMicrotask(this.flushTask),this.hasQueuedFlush=!0)}}class fm{constructor(n,i,o,l,u,d){this.scheduler=n,this.effectFn=i,this.creationZone=o,this.errorHandler=u,this.watcher=function hi(e,n,i){const o=Object.create(dn);i&&(o.consumerAllowSignalWrites=!0),o.fn=e,o.schedule=n;const l=v=>{o.cleanupFn=v};return o.ref={notify:()=>$e(o),run:()=>{if(null===o.fn)return;if(function fe(){return ne}())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(o.dirty=!1,o.hasRun&&!qe(o))return;o.hasRun=!0;const v=we(o);try{o.cleanupFn(),o.cleanupFn=Pt,o.fn(l)}finally{ve(o,v)}},cleanup:()=>o.cleanupFn(),destroy:()=>function d(v){(function u(v){return null===v.fn&&null===v.schedule})(v)||(Re(v),v.cleanupFn(),v.fn=null,v.schedule=null,v.cleanupFn=Pt)}(o),[U]:o},o.ref}(f=>this.runEffect(f),()=>this.schedule(),d),this.unregisterOnDestroy=l?.onDestroy(()=>this.destroy())}runEffect(n){try{this.effectFn(n)}catch(i){this.errorHandler?.handleError(i)}}run(){this.watcher.run()}schedule(){this.scheduler.scheduleEffect(this)}destroy(){this.watcher.destroy(),this.unregisterOnDestroy?.()}}function pm(e,n){!n?.injector&&Dl();const i=n?.injector??qt(Bo),o=i.get(Fl,null,{optional:!0}),l=!0!==n?.manualCleanup?i.get($l):null,u=new fm(i.get(l0),e,typeof Zone>"u"?null:Zone.current,l,o,n?.allowSignalWrites??!1),d=i.get(dm,null,{optional:!0});return d&&8&d._lView[Yt]?(d._lView[De]??=[]).push(u.watcher.notify):u.watcher.notify(),u}const gm=new Set;function Nl(e){gm.has(e)||(gm.add(e),performance?.mark?.("mark_use_counter",{detail:{feature:e}}))}function sh(e){return n=>{setTimeout(e,void 0,n)}}const Ls=class d0 extends Rn.x{constructor(n=!1){super(),this.__isAsync=n}emit(n){super.next(n)}subscribe(n,i,o){let l=n,u=i||(()=>null),d=o;if(n&&"object"==typeof n){const v=n;l=v.next?.bind(v),u=v.error?.bind(v),d=v.complete?.bind(v)}this.__isAsync&&(u=sh(u),l&&(l=sh(l)),d&&(d=sh(d)));const f=super.subscribe({next:l,error:u,complete:d});return n instanceof Gn.w0&&n.add(f),f}};function mm(...e){}class _r{constructor({enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:o=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Ls(!1),this.onMicrotaskEmpty=new Ls(!1),this.onStable=new Ls(!1),this.onError=new Ls(!1),typeof Zone>"u")throw new St(908,!1);Zone.assertZonePatched();const l=this;l._nesting=0,l._outer=l._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(l._inner=l._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(l._inner=l._inner.fork(Zone.longStackTraceZoneSpec)),l.shouldCoalesceEventChangeDetection=!o&&i,l.shouldCoalesceRunChangeDetection=o,l.lastRequestAnimationFrameId=-1,l.nativeRequestAnimationFrame=function h0(){const e="function"==typeof Jn.requestAnimationFrame;let n=Jn[e?"requestAnimationFrame":"setTimeout"],i=Jn[e?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&n&&i){const o=n[Zone.__symbol__("OriginalDelegate")];o&&(n=o);const l=i[Zone.__symbol__("OriginalDelegate")];l&&(i=l)}return{nativeRequestAnimationFrame:n,nativeCancelAnimationFrame:i}}().nativeRequestAnimationFrame,function Mc(e){const n=()=>{!function Yf(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Jn,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,kc(e),e.isCheckStableRunning=!0,Zf(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),kc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(i,o,l,u,d,f)=>{if(function Hu(e){return!(!Array.isArray(e)||1!==e.length)&&!0===e[0].data?.__ignore_ng_zone__}(f))return i.invokeTask(l,u,d,f);try{return ka(e),i.invokeTask(l,u,d,f)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===u.type||e.shouldCoalesceRunChangeDetection)&&n(),Oc(e)}},onInvoke:(i,o,l,u,d,f,v)=>{try{return ka(e),i.invoke(l,u,d,f,v)}finally{e.shouldCoalesceRunChangeDetection&&n(),Oc(e)}},onHasTask:(i,o,l,u)=>{i.hasTask(l,u),o===l&&("microTask"==u.change?(e._hasPendingMicrotasks=u.microTask,kc(e),Zf(e)):"macroTask"==u.change&&(e.hasPendingMacrotasks=u.macroTask))},onHandleError:(i,o,l,u)=>(i.handleError(l,u),e.runOutsideAngular(()=>e.onError.emit(u)),!1)})}(l)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!_r.isInAngularZone())throw new St(909,!1)}static assertNotInAngularZone(){if(_r.isInAngularZone())throw new St(909,!1)}run(n,i,o){return this._inner.run(n,i,o)}runTask(n,i,o,l){const u=this._inner,d=u.scheduleEventTask("NgZoneEvent: "+l,n,p0,mm,mm);try{return u.runTask(d,i,o)}finally{u.cancelTask(d)}}runGuarded(n,i,o){return this._inner.runGuarded(n,i,o)}runOutsideAngular(n){return this._outer.run(n)}}const p0={};function Zf(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function kc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function ka(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Oc(e){e._nesting--,Zf(e)}class g0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Ls,this.onMicrotaskEmpty=new Ls,this.onStable=new Ls,this.onError=new Ls}run(n,i,o){return n.apply(i,o)}runGuarded(n,i,o){return n.apply(i,o)}runOutsideAngular(n){return n()}runTask(n,i,o,l){return n.apply(i,o)}}const vm=new on("",{providedIn:"root",factory:Ac});function Ac(){const e=qt(_r);let n=!0;const i=new vi.y(l=>{n=e.isStable&&!e.hasPendingMacrotasks&&!e.hasPendingMicrotasks,e.runOutsideAngular(()=>{l.next(n),l.complete()})}),o=new vi.y(l=>{let u;e.runOutsideAngular(()=>{u=e.onStable.subscribe(()=>{_r.assertNotInAngularZone(),queueMicrotask(()=>{!n&&!e.hasPendingMacrotasks&&!e.hasPendingMicrotasks&&(n=!0,l.next(!0))})})});const d=e.onUnstable.subscribe(()=>{_r.assertInAngularZone(),n&&(n=!1,e.runOutsideAngular(()=>{l.next(!1)}))});return()=>{u.unsubscribe(),d.unsubscribe()}});return(0,ni.T)(i,o.pipe(Nr()))}var Ja=function(e){return e[e.EarlyRead=0]="EarlyRead",e[e.Write=1]="Write",e[e.MixedReadWrite=2]="MixedReadWrite",e[e.Read=3]="Read",e}(Ja||{});const ym={destroy(){}};function wm(e,n){!n&&Dl();const i=n?.injector??qt(Bo);if(!function Sl(e){return"browser"===(e??qt(Bo)).get(dg)}(i))return ym;Nl("NgAfterNextRender");const o=i.get(ah),l=o.handler??=new Cm,u=n?.phase??Ja.MixedReadWrite,d=()=>{l.unregister(v),f()},f=i.get($l).onDestroy(d),v=new _m(i,u,()=>{d(),e()});return l.register(v),{destroy:d}}class _m{constructor(n,i,o){this.phase=i,this.callbackFn=o,this.zone=n.get(_r),this.errorHandler=n.get(Fl,null,{optional:!0})}invoke(){try{this.zone.runOutsideAngular(this.callbackFn)}catch(n){this.errorHandler?.handleError(n)}}}class Cm{constructor(){this.executingCallbacks=!1,this.buckets={[Ja.EarlyRead]:new Set,[Ja.Write]:new Set,[Ja.MixedReadWrite]:new Set,[Ja.Read]:new Set},this.deferredCallbacks=new Set}validateBegin(){if(this.executingCallbacks)throw new St(102,!1)}register(n){(this.executingCallbacks?this.deferredCallbacks:this.buckets[n.phase]).add(n)}unregister(n){this.buckets[n.phase].delete(n),this.deferredCallbacks.delete(n)}execute(){this.executingCallbacks=!0;for(const n of Object.values(this.buckets))for(const i of n)i.invoke();this.executingCallbacks=!1;for(const n of this.deferredCallbacks)this.buckets[n.phase].add(n);this.deferredCallbacks.clear()}destroy(){for(const n of Object.values(this.buckets))n.clear();this.deferredCallbacks.clear()}}let ah=(()=>{class e{constructor(){this.renderDepth=0,this.handler=null,this.internalCallbacks=[]}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){if(this.renderDepth--,0===this.renderDepth){for(const i of this.internalCallbacks)i();this.internalCallbacks.length=0,this.handler?.execute()}}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}static#e=this.\u0275prov=Fn({token:e,providedIn:"root",factory:()=>new e})}return e})();function Rc(e,n){const i=Co(n,e),o=i[pt];!function v0(e,n){for(let i=n.length;i<e.blueprint.length;i++)n.push(e.blueprint[i])}(o,i);const l=i[Yn];null!==l&&null===i[br]&&(i[br]=Bg(l,i[Ni])),Kf(o,i,i[Nn])}function Kf(e,n,i){m(n);try{const o=e.viewQuery;null!==o&&zf(1,o,i);const l=e.template;null!==l&&Hb(e,n,l,1,i),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&im(e,n),e.staticViewQueries&&zf(2,e.viewQuery,i);const u=e.components;null!==u&&function y0(e,n){for(let i=0;i<n.length;i++)Rc(e,n[i])}(n,u)}catch(o){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),o}finally{n[Yt]&=-5,Ge()}}function lh(e,n,i){let o=i?e.styles:null,l=i?e.classes:null,u=0;if(null!==n)for(let d=0;d<n.length;d++){const f=n[d];"number"==typeof f?u=f:1==u?l=lo(l,f):2==u&&(o=lo(o,f+": "+n[++d]+";"))}i?e.styles=o:e.stylesWithoutHost=o,i?e.classes=l:e.classesWithoutHost=l}class b0 extends Xd{constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){const i=pn(n);return new Uu(i,this.ngModule)}}function Dm(e){const n=[];for(let i in e)e.hasOwnProperty(i)&&n.push({propName:e[i],templateName:i});return n}class w0{constructor(n,i){this.injector=n,this.parentInjector=i}get(n,i,o){o=ar(o);const l=this.injector.get(n,Ug,o);return l!==Ug||i===Ug?l:this.parentInjector.get(n,i,o)}}class Uu extends Db{get inputs(){const n=this.componentDef,i=n.inputTransforms,o=Dm(n.inputs);if(null!==i)for(const l of o)i.hasOwnProperty(l.propName)&&(l.transform=i[l.propName]);return o}get outputs(){return Dm(this.componentDef.outputs)}constructor(n,i){super(),this.componentDef=n,this.ngModule=i,this.componentType=n.type,this.selector=function ia(e){return e.map(ol).join(",")}(n.selectors),this.ngContentSelectors=n.ngContentSelectors?n.ngContentSelectors:[],this.isBoundToModule=!!i}create(n,i,o,l){let u=(l=l||this.ngModule)instanceof la?l:l?.injector;u&&null!==this.componentDef.getStandaloneInjector&&(u=this.componentDef.getStandaloneInjector(u)||u);const d=u?new w0(n,u):n,f=d.get($f,null);if(null===f)throw new St(407,!1);const L={rendererFactory:f,sanitizer:d.get(XC,null),inlineEffectRunner:null,afterRenderEventManager:d.get(ah,null)},G=f.createRenderer(null,this.componentDef),ge=this.componentDef.selectors[0][0]||"div",Se=o?function DD(e,n,i,o){const u=o.get(Lb,!1)||i===ri.ShadowDom,d=e.selectRootElement(n,u);return function ED(e){zb(e)}(d),d}(G,o,this.componentDef.encapsulation,d):zd(G,ge,function Em(e){const n=e.toLowerCase();return"svg"===n?"svg":"math"===n?"math":null}(ge)),Et=this.componentDef.signals?4608:this.componentDef.onPush?576:528;let Nt=null;null!==Se&&(Nt=Bg(Se,d,!0));const st=Xg(0,null,null,1,0,null,null,null,null,null,null),un=jf(null,st,null,Et,null,null,L,G,d,null,Nt);let Xn,mi;m(un);try{const xo=this.componentDef;let pd,U_=null;xo.findHostDirectiveDefs?(pd=[],U_=new Map,xo.findHostDirectiveDefs(xo,pd,U_),pd.push(xo)):pd=[xo];const Ak=function Qf(e,n){const i=e[pt],o=Ie;return e[o]=n,Nu(i,o,2,"#host",null)}(un,Se),Rk=function _0(e,n,i,o,l,u,d){const f=l[pt];!function BD(e,n,i,o){for(const l of e)n.mergedAttrs=lr(n.mergedAttrs,l.hostAttrs);null!==n.mergedAttrs&&(lh(n,n.mergedAttrs,!0),null!==i&&Tf(o,i,n))}(o,e,n,d);let v=null;null!==n&&(v=Bg(n,l[Ni]));const O=u.rendererFactory.createRenderer(n,i);let L=16;i.signals?L=4096:i.onPush&&(L=64);const G=jf(l,Ub(i),null,L,l[e.index],e,u,O,null,null,v);return f.firstCreatePass&&ji(f,e,o.length-1),nh(l,G),l[e.index]=G}(Ak,Se,xo,pd,un,L,G);mi=Ws(st,Ie),Se&&function jD(e,n,i,o){if(o)zn(e,i,["ng-version",JC.full]);else{const{attrs:l,classes:u}=function Hs(e){const n=[],i=[];let o=1,l=2;for(;o<e.length;){let u=e[o];if("string"==typeof u)2===l?""!==u&&n.push(u,e[++o]):8===l&&i.push(u);else{if(!Qi(l))break;l=u}o++}return{attrs:n,classes:i}}(n.selectors[0]);l&&zn(e,i,l),u&&u.length>0&&Sg(e,i,u.join(" "))}}(G,xo,Se,o),void 0!==i&&function Bl(e,n,i){const o=e.projection=[];for(let l=0;l<n.length;l++){const u=i[l];o.push(null!=u?Array.from(u):null)}}(mi,this.ngContentSelectors,i),Xn=function VD(e,n,i,o,l,u){const d=Kt(),f=l[pt],v=Yr(d,l);Zb(f,l,d,i,null,o);for(let L=0;L<i.length;L++)Vo(pl(l,f,d.directiveStart+L,d),l);Hf(f,l,d),v&&Vo(v,l);const O=pl(l,f,d.directiveStart+d.componentOffset,d);if(e[Nn]=l[Nn]=O,null!==u)for(const L of u)L(O,n);return Kg(f,d,e),O}(Rk,xo,pd,U_,un,[C0]),Kf(st,un,null)}finally{Ge()}return new qf(this.componentType,Xn,Lu(mi,un),un,mi)}}class qf extends ZC{constructor(n,i,o,l,u){super(),this.location=o,this._rootLView=l,this._tNode=u,this.previousInputValues=null,this.instance=i,this.hostView=this.changeDetectorRef=new oh(l,void 0,!1),this.componentType=n}setInput(n,i){const o=this._tNode.inputs;let l;if(null!==o&&(l=o[n])){if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),i))return;const u=this._rootLView;sm(u[pt],u,l,n,i),this.previousInputValues.set(n,i),ju(Co(this._tNode.index,u))}}get injector(){return new Rr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}}function C0(){const e=Kt();uu(Me()[pt],e)}function T0(e){const n=e.inputConfig,i={};for(const o in n)if(n.hasOwnProperty(o)){const l=n[o];Array.isArray(l)&&l[2]&&(i[o]=l[2])}e.inputTransforms=i}function pa(e,n,i){return e[n]=i}function Cr(e,n,i){return!Object.is(e[n],i)&&(e[n]=i,!0)}function Om(e,n,i,o){const l=Me();return Cr(l,wr(),n)&&(Tt(),ha(jt(),l,e,n,i,o)),Om}function ga(e,n,i,o){return Cr(e,wr(),i)?n+Ce(i)+o:gn}function np(e,n,i){const o=Me();return Cr(o,wr(),n)&&Fs(Tt(),jt(),o,e,n,o[$t],i,!1),np}function ip(e,n,i,o,l){const d=l?"class":"style";sm(e,i,n.inputs[d],d,o)}let Xm=(e,n)=>null;function jc(e,n){return Xm(e,n)}class Dh{destroy(n){}updateValue(n,i){}swap(n,i){const o=Math.min(n,i),l=Math.max(n,i),u=this.detach(l);if(l-o>1){const d=this.detach(o);this.attach(o,u),this.attach(l,d)}else this.attach(o,u)}move(n,i){this.attach(i,this.detach(n))}}function Eh(e,n,i,o,l){return e===i&&Object.is(n,o)?1:Object.is(l(e,n),l(i,o))?-1:0}function fp(e,n,i,o){return!(void 0===n||!n.has(o)||(e.attach(i,n.get(o)),n.delete(o),0))}function Jm(e,n,i,o,l){if(fp(e,n,o,i(o,l)))e.updateValue(o,l);else{const u=e.create(o,l);e.attach(o,u)}}function ev(e,n,i,o){const l=new Set;for(let u=n;u<=i;u++)l.add(o(u,e.at(u)));return l}class uw{constructor(){this.map=new Map}has(n){const i=this.map.get(n);return void 0!==i&&i.length>0}delete(n){const i=this.map.get(n);return void 0!==i&&(i.shift(),!0)}get(n){const i=this.map.get(n);return void 0!==i&&i.length>0?i[0]:void 0}set(n,i){this.map.has(n)?this.map.get(n)?.push(i):this.map.set(n,[i])}forEach(n){for(const[i,o]of this.map)for(const l of o)n(l,i)}}function od(e,n,i,o){const l=n.tView,f=jf(e,l,i,4096&e[Yt]?4096:16,null,n,null,null,null,o?.injector??null,o?.dehydratedView??null);f[g]=e[n.index];const O=e[A];return null!==O&&(f[A]=O.createEmbeddedView(l)),Kf(l,f,i),f}function tv(e,n){const i=Qe+n;if(i<e.length)return e[i]}function Hc(e,n){return!n||vf(e)}function Sh(e,n,i,o=!0){const l=n[pt];if(function tb(e,n,i,o){const l=Qe+o,u=i.length;o>0&&(i[l-1][$i]=n),o<u-Qe?(n[$i]=i[l],Xh(i,Qe+o,n)):(i.push(n),n[$i]=null),n[Kn]=i;const d=n[g];null!==d&&i!==d&&function nb(e,n){const i=e[it];n[b]!==n[Kn][Kn][b]&&(e[He]=!0),null===i?e[it]=[n]:i.push(n)}(d,n);const f=n[A];null!==f&&f.insertView(e),Ql(n),n[Yt]|=128}(l,n,e,i),o){const u=If(i,e),d=n[$t],f=_c(d,e[nt]);null!==f&&function Xy(e,n,i,o,l,u){o[Yn]=l,o[Si]=n,Dc(e,o,i,1,l,u)}(l,e[Si],d,n,f,u)}}function pp(e,n){const i=xu(e,n);return void 0!==i&&Wd(i[pt],i),i}let xh=(()=>{class e{static#e=this.__NG_ELEMENT_ID__=dw}return e})();function dw(){return Ih(Kt(),Me())}const gp=xh,sd=class extends gp{constructor(n,i,o){super(),this._lContainer=n,this._hostTNode=i,this._hostLView=o}get element(){return Lu(this._hostTNode,this._hostLView)}get injector(){return new Rr(this._hostTNode,this._hostLView)}get parentInjector(){const n=Dd(this._hostTNode,this._hostLView);if(Wp(n)){const i=wd(n,this._hostLView),o=bd(n);return new Rr(i[pt].data[o+8],i)}return new Rr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){const i=nv(this._lContainer);return null!==i&&i[n]||null}get length(){return this._lContainer.length-Qe}createEmbeddedView(n,i,o){let l,u;"number"==typeof o?l=o:null!=o&&(l=o.index,u=o.injector);const d=jc(this._lContainer,n.ssrId),f=n.createEmbeddedViewImpl(i||{},u,d);return this.insertImpl(f,l,Hc(this._hostTNode,d)),f}createComponent(n,i,o,l,u){const d=n&&!function za(e){return"function"==typeof e}(n);let f;if(d)f=i;else{const Je=i||{};f=Je.index,o=Je.injector,l=Je.projectableNodes,u=Je.environmentInjector||Je.ngModuleRef}const v=d?n:new Uu(pn(n)),O=o||this.parentInjector;if(!u&&null==v.ngModule){const at=(d?O:this.parentInjector).get(la,null);at&&(u=at)}const L=pn(v.componentType??{}),G=jc(this._lContainer,L?.id??null),Se=v.create(O,l,G?.firstChild??null,u);return this.insertImpl(Se.hostView,f,Hc(this._hostTNode,G)),Se}insert(n,i){return this.insertImpl(n,i,!0)}insertImpl(n,i,o){const l=n._lView;if(function ql(e){return ft(e[Kn])}(l)){const f=this.indexOf(n);if(-1!==f)this.detach(f);else{const v=l[Kn],O=new sd(v,v[Si],v[Kn]);O.detach(O.indexOf(n))}}const u=this._adjustIndex(i),d=this._lContainer;return Sh(d,l,u,o),n.attachToViewContainerRef(),Xh(mp(d),u,n),n}move(n,i){return this.insert(n,i)}indexOf(n){const i=nv(this._lContainer);return null!==i?i.indexOf(n):-1}remove(n){const i=this._adjustIndex(n,-1),o=xu(this._lContainer,i);o&&(xd(mp(this._lContainer),i),Wd(o[pt],o))}detach(n){const i=this._adjustIndex(n,-1),o=xu(this._lContainer,i);return o&&null!=xd(mp(this._lContainer),i)?new oh(o):null}_adjustIndex(n,i=0){return n??this.length+i}};function nv(e){return e[8]}function mp(e){return e[8]||(e[8]=[])}function Ih(e,n){let i;const o=n[e.index];return ft(o)?i=o:(i=Bu(o,n,null,e),n[e.index]=i,nh(n,i)),Uc(i,n,e,o),new sd(i,e,n)}let Uc=function fw(e,n,i,o){if(e[nt])return;let l;l=8&i.type?si(o):function hw(e,n){const i=e[$t],o=i.createComment(""),l=Yr(n,e);return Ml(i,_c(i,l),o,function Cg(e,n){return e.nextSibling(n)}(i,l),!1),o}(n,i),e[nt]=l},vp=(e,n,i)=>!1;function zc(e,n,i,o,l,u,d,f){const v=Me(),O=Tt(),L=e+Ie,G=O.firstCreatePass?function mw(e,n,i,o,l,u,d,f,v){const O=n.consts,L=Nu(n,e,4,d||null,Do(O,f));Jg(n,i,L,Do(O,v)),uu(n,L);const G=L.tView=Xg(2,L,o,l,u,n.directiveRegistry,n.pipeRegistry,null,n.schemas,O,null);return null!==n.queries&&(n.queries.template(n,L),G.queries=n.queries.embeddedTView(L)),L}(L,O,v,n,i,o,l,u,d):O.data[L];wi(G,!1);const ge=ov(O,v,G,e);Uh()&&oo(O,v,ge,G),Vo(ge,v);const Se=Bu(ge,v,ge,G);return v[L]=Se,nh(v,Se),function iv(e,n,i){return vp(e,n,i)}(Se,G,v),It(G)&&qg(O,v,G),null!=d&&Qg(v,G,f),zc}let ov=function vw(e,n,i,o){return fl(!0),n[$t].createComment("")};function av(e,n,i){Nl("NgControlFlow");const o=Me(),l=wr(),u=yp(o,Ie+e);if(Cr(o,l,n)){const f=Z(null);try{if(pp(u,0),-1!==n){const v=bp(o[pt],n),O=jc(u,v.tView.ssrId);Sh(u,od(o,v,i,{dehydratedView:O}),0,Hc(v,O))}}finally{Z(f)}}else{const f=tv(u,0);void 0!==f&&(f[Nn]=i)}}class bw{constructor(n,i,o){this.lContainer=n,this.$implicit=i,this.$index=o}get $count(){return this.lContainer.length-Qe}}function lv(e){return e}class ww{constructor(n,i,o){this.hasEmptyBlock=n,this.trackByFn=i,this.liveCollection=o}}function cv(e,n,i,o,l,u,d,f,v,O,L){Nl("NgControlFlow");const G=void 0!==v,ge=Me(),Se=f?d.bind(ge[b][Nn]):d,Je=new ww(G,Se);ge[Ie+e]=Je,zc(e+1,n,i,o,l,u),G&&zc(e+2,v,O,L)}class _w extends Dh{constructor(n,i,o){super(),this.lContainer=n,this.hostLView=i,this.templateTNode=o,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-Qe}at(n){return this.getLView(n)[Nn].$implicit}attach(n,i){const o=i[br];this.needsIndexUpdate||=n!==this.length,Sh(this.lContainer,i,n,Hc(this.templateTNode,o))}detach(n){return this.needsIndexUpdate||=n!==this.length-1,function Cw(e,n){return xu(e,n)}(this.lContainer,n)}create(n,i){const o=jc(this.lContainer,this.templateTNode.tView.ssrId);return od(this.hostLView,this.templateTNode,new bw(this.lContainer,i,n),{dehydratedView:o})}destroy(n){Wd(n[pt],n)}updateValue(n,i){this.getLView(n)[Nn].$implicit=i}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Nn].$index=n}getLView(n){return function tE(e,n){return tv(e,n)}(this.lContainer,n)}}function uv(e,n){const i=Z(null);try{const o=Me(),l=o[pt],u=o[Ie+e];if(void 0===u.liveCollection){const f=e+1,v=yp(o,Ie+f),O=bp(l,f);u.liveCollection=new _w(v,o,O)}else u.liveCollection.reset();const d=u.liveCollection;if(function cw(e,n,i){let o,l,u=0,d=e.length-1;if(Array.isArray(n)){let f=n.length-1;for(;u<=d&&u<=f;){const v=e.at(u),O=n[u],L=Eh(u,v,u,O,i);if(0!==L){L<0&&e.updateValue(u,O),u++;continue}const G=e.at(d),ge=n[f],Se=Eh(d,G,f,ge,i);if(0!==Se){Se<0&&e.updateValue(d,ge),d--,f--;continue}const Je=i(u,v),at=i(d,G),Et=i(u,O);if(Object.is(Et,at)){const Nt=i(f,ge);Object.is(Nt,Je)?(e.swap(u,d),e.updateValue(d,ge),f--,d--):e.move(d,u),e.updateValue(u,O),u++}else if(o??=new uw,l??=ev(e,u,d,i),fp(e,o,u,Et))e.updateValue(u,O),u++,d++;else if(l.has(Et))o.set(Je,e.detach(u)),d--;else{const Nt=e.create(u,n[u]);e.attach(u,Nt),u++,d++}}for(;u<=f;)Jm(e,o,i,u,n[u]),u++}else if(null!=n){const f=n[Symbol.iterator]();let v=f.next();for(;!v.done&&u<=d;){const O=e.at(u),L=v.value,G=Eh(u,O,u,L,i);if(0!==G)G<0&&e.updateValue(u,L),u++,v=f.next();else{o??=new uw,l??=ev(e,u,d,i);const ge=i(u,L);if(fp(e,o,u,ge))e.updateValue(u,L),u++,d++,v=f.next();else if(l.has(ge)){const Se=i(u,O);o.set(Se,e.detach(u)),d--}else e.attach(u,e.create(u,L)),u++,d++,v=f.next()}}for(;!v.done;)Jm(e,o,i,e.length,v.value),v=f.next()}for(;u<=d;)e.destroy(e.detach(d--));o?.forEach(f=>{e.destroy(f)})}(d,n,u.trackByFn),d.updateIndexes(),u.hasEmptyBlock){const f=wr(),v=0===d.length;if(Cr(o,f,v)){const O=e+2,L=yp(o,Ie+O);if(v){const G=bp(l,O),ge=jc(L,G.tView.ssrId);Sh(L,od(o,G,void 0,{dehydratedView:ge}),0,Hc(G,ge))}else pp(L,0)}}}finally{Z(i)}}function yp(e,n){return e[n]}function bp(e,n){return Ws(e,n+Ie)}function Rh(e,n,i,o){const l=Me(),u=Tt(),d=Ie+e,f=l[$t],v=u.firstCreatePass?function cE(e,n,i,o,l,u){const d=n.consts,v=Nu(n,e,2,o,Do(d,l));return Jg(n,i,v,Do(d,u)),null!==v.attrs&&lh(v,v.attrs,!1),null!==v.mergedAttrs&&lh(v,v.mergedAttrs,!0),null!==n.queries&&n.queries.elementStart(n,v),v}(d,u,l,n,i,o):u.data[d],O=Fh(u,l,v,f,n,e);l[d]=O;const L=It(v);return wi(v,!0),Tf(f,O,v),32!=(32&v.flags)&&Uh()&&oo(u,l,O,v),0===function cl(){return tn.lFrame.elementDepthCount}()&&Vo(O,l),function gs(){tn.lFrame.elementDepthCount++}(),L&&(qg(u,l,v),Kg(u,v,l)),null!==o&&Qg(l,v),Rh}function Ip(){let e=Kt();Zi()?function cr(){tn.lFrame.isParent=!1}():(e=e.parent,wi(e,!1));const n=e;(function Hh(e){return tn.skipHydrationRootTNode===e})(n)&&function Le(){tn.skipHydrationRootTNode=null}(),function tc(){tn.lFrame.elementDepthCount--}();const i=Tt();return i.firstCreatePass&&(uu(i,e),Ft(e)&&i.queries.elementEnd(e)),null!=n.classesWithoutHost&&function ry(e){return 0!=(8&e.flags)}(n)&&ip(i,n,Me(),n.classesWithoutHost,!0),null!=n.stylesWithoutHost&&function oy(e){return 0!=(16&e.flags)}(n)&&ip(i,n,Me(),n.stylesWithoutHost,!1),Ip}function Ph(e,n,i,o){return Rh(e,n,i,o),Ip(),Ph}let Fh=(e,n,i,o,l,u)=>(fl(!0),zd(o,l,function cu(){return tn.lFrame.currentNamespace}()));function kv(){return Me()}const qr=void 0;var Jw=["en",[["a","p"],["AM","PM"],qr],[["AM","PM"],qr,qr],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],qr,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],qr,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",qr,"{1} 'at' {0}",qr],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function Xw(e){const i=Math.floor(Math.abs(e)),o=e.toString().replace(/^[^.]*\.?/,"").length;return 1===i&&0===o?1:5}];let tu={};function Av(e){const n=function t_(e){return e.toLowerCase().replace(/_/g,"-")}(e);let i=Pv(n);if(i)return i;const o=n.split("-")[0];if(i=Pv(o),i)return i;if("en"===o)return Jw;throw new St(701,!1)}function Rv(e){return Av(e)[nu.PluralCase]}function Pv(e){return e in tu||(tu[e]=Jn.ng&&Jn.ng.common&&Jn.ng.common.locales&&Jn.ng.common.locales[e]),tu[e]}var nu=function(e){return e[e.LocaleId=0]="LocaleId",e[e.DayPeriodsFormat=1]="DayPeriodsFormat",e[e.DayPeriodsStandalone=2]="DayPeriodsStandalone",e[e.DaysFormat=3]="DaysFormat",e[e.DaysStandalone=4]="DaysStandalone",e[e.MonthsFormat=5]="MonthsFormat",e[e.MonthsStandalone=6]="MonthsStandalone",e[e.Eras=7]="Eras",e[e.FirstDayOfWeek=8]="FirstDayOfWeek",e[e.WeekendRange=9]="WeekendRange",e[e.DateFormat=10]="DateFormat",e[e.TimeFormat=11]="TimeFormat",e[e.DateTimeFormat=12]="DateTimeFormat",e[e.NumberSymbols=13]="NumberSymbols",e[e.NumberFormats=14]="NumberFormats",e[e.CurrencyCode=15]="CurrencyCode",e[e.CurrencySymbol=16]="CurrencySymbol",e[e.CurrencyName=17]="CurrencyName",e[e.Currencies=18]="Currencies",e[e.Directionality=19]="Directionality",e[e.PluralCase=20]="PluralCase",e[e.ExtraData=21]="ExtraData",e}(nu||{});const dd="en-US";let s=dd;function a_(e){return!!e&&"function"==typeof e.then}function CE(e){return!!e&&"function"==typeof e.subscribe}function l_(e,n,i,o){const l=Me(),u=Tt(),d=Kt();return function EE(e,n,i,o,l,u,d){const f=It(o),O=e.firstCreatePass&&rm(e),L=n[Nn],G=Jb(n);let ge=!0;if(3&o.type||d){const at=Yr(o,n),Et=d?d(at):at,Nt=G.length,st=d?Xn=>d(si(Xn[o.index])):o.index;let un=null;if(!d&&f&&(un=function jI(e,n,i,o){const l=e.cleanup;if(null!=l)for(let u=0;u<l.length-1;u+=2){const d=l[u];if(d===i&&l[u+1]===o){const f=n[qo],v=l[u+2];return f.length>v?f[v]:null}"string"==typeof d&&(u+=2)}return null}(e,n,l,o.index)),null!==un)(un.__ngLastListenerFn__||un).__ngNextListenerFn__=u,un.__ngLastListenerFn__=u,ge=!1;else{u=xE(o,n,L,u,!1);const Xn=i.listen(Et,l,u);G.push(u,Xn),O&&O.push(l,st,Nt,Nt+1)}}else u=xE(o,n,L,u,!1);const Se=o.outputs;let Je;if(ge&&null!==Se&&(Je=Se[l])){const at=Je.length;if(at)for(let Et=0;Et<at;Et+=2){const mi=n[Je[Et]][Je[Et+1]].subscribe(u),xo=G.length;G.push(u,mi),O&&O.push(l,o.index,xo,-(xo+1))}}}(u,l,l[$t],d,e,n,o),l_}function SE(e,n,i,o){try{return _o(6,n,i),!1!==i(o)}catch(l){return ih(e,l),!1}finally{_o(7,n,i)}}function xE(e,n,i,o,l){return function u(d){if(d===Function)return o;ju(e.componentOffset>-1?Co(e.index,n):n);let v=SE(n,i,o,d),O=u.__ngNextListenerFn__;for(;O;)v=SE(n,i,O,d)&&v,O=O.__ngNextListenerFn__;return l&&!1===v&&d.preventDefault(),v}}function IE(e=1){return function We(e){return(tn.lFrame.contextLView=function md(e,n){for(;e>0;)n=n[hs],e--;return n}(e,tn.lFrame.contextLView))[Nn]}(e)}function c_(e,n,i){return Nv(e,"",n,"",i),c_}function Nv(e,n,i,o,l){const u=Me(),d=ga(u,n,i,o);return d!==gn&&Fs(Tt(),jt(),u,e,d,u[$t],l,!1),Nv}function LE(e){return Ca(function Ar(){return tn.lFrame.contextLView}(),Ie+e)}function GE(e,n=""){const i=Me(),o=Tt(),l=e+Ie,u=o.firstCreatePass?Nu(o,l,1,n,null):o.data[l],d=ZE(o,i,u,n,e);i[l]=d,Uh()&&oo(o,i,d,u),wi(u,!1)}let ZE=(e,n,i,o,l)=>(fl(!0),function Tl(e,n){return e.createText(n)}(n[$t],o));function u_(e){return Bv("",e,""),u_}function Bv(e,n,i){const o=Me(),l=ga(o,e,n,i);return l!==gn&&fa(o,mt(),l),Bv}class hd{}class iS{}function lT(e,n){return new g_(e,n??null,[])}class g_ extends hd{constructor(n,i,o){super(),this._parent=i,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new b0(this);const l=pi(n);this._bootstrapComponents=Ps(l.bootstrap),this._r3Injector=Nd(n,i,[{provide:hd,useValue:this},{provide:Xd,useValue:this.componentFactoryResolver},...o],bn(n),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(n)}get injector(){return this._r3Injector}destroy(){const n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(i=>i()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}}class m_ extends iS{constructor(n){super(),this.moduleType=n}create(n){return new g_(this.moduleType,n,[])}}class rS extends hd{constructor(n){super(),this.componentFactoryResolver=new b0(this),this.instance=null;const i=new Ga([...n.providers,{provide:hd,useValue:this},{provide:Xd,useValue:this.componentFactoryResolver}],n.parent||Rd(),n.debugName,new Set(["environment"]));this.injector=i,n.runEnvironmentInitializers&&i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}}function oS(e,n,i=null){return new rS({providers:e,parent:n,debugName:i,runEnvironmentInitializers:!0}).injector}let uT=(()=>{class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){const o=Sy(0,i.type),l=o.length>0?oS([o],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,l)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(const i of this.cachedInjectors.values())null!==i&&i.destroy()}finally{this.cachedInjectors.clear()}}static#e=this.\u0275prov=Fn({token:e,providedIn:"environment",factory:()=>new e(sn(la))})}return e})();function sS(e){Nl("NgStandalone"),e.getStandaloneInjector=n=>n.get(uT).getOrCreateStandaloneInjector(e)}function pS(e,n,i,o){return mS(Me(),Oi(),e,n,i,o)}function gS(e,n,i,o,l){return function vS(e,n,i,o,l,u,d){const f=n+i;return function Vl(e,n,i,o){const l=Cr(e,n,i);return Cr(e,n+1,o)||l}(e,f,l,u)?pa(e,f+2,d?o.call(d,l,u):o(l,u)):Fp(e,f+2)}(Me(),Oi(),e,n,i,o,l)}function Fp(e,n){const i=e[n];return i===gn?void 0:i}function mS(e,n,i,o,l,u){const d=n+i;return Cr(e,d,l)?pa(e,d+1,u?o.call(u,l):o(l)):Fp(e,d+1)}function _S(e,n){const i=Tt();let o;const l=e+Ie;i.firstCreatePass?(o=function MT(e,n){if(n)for(let i=n.length-1;i>=0;i--){const o=n[i];if(e===o.name)return o}}(n,i.pipeRegistry),i.data[l]=o,o.onDestroy&&(i.destroyHooks??=[]).push(l,o.onDestroy)):o=i.data[l];const u=o.factory||(o.factory=oi(o.type)),f=wn($u);try{const v=_d(!1),O=u();return _d(v),function WI(e,n,i,o){i>=e.data.length&&(e.data[i]=null,e.blueprint[i]=null),n[i]=o}(i,Me(),l,O),O}finally{wn(f)}}function CS(e,n,i){const o=e+Ie,l=Me(),u=Ca(l,o);return function Lp(e,n){return e[pt].data[n].pure}(l,o)?mS(l,Oi(),n,u.transform,i,u):u.transform(i)}function PT(){return this._results[Symbol.iterator]()}class y_{static#e=Symbol.iterator;get changes(){return this._changes||(this._changes=new Ls)}constructor(n=!1){this._emitDistinctChangesOnly=n,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const i=y_.prototype;i[Symbol.iterator]||(i[Symbol.iterator]=PT)}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,i){return this._results.reduce(n,i)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,i){this.dirty=!1;const o=function Xo(e){return e.flat(Number.POSITIVE_INFINITY)}(n);(this._changesDetected=!function gy(e,n,i){if(e.length!==n.length)return!1;for(let o=0;o<e.length;o++){let l=e[o],u=n[o];if(i&&(l=i(l),u=i(u)),u!==l)return!1}return!0}(this._results,o,i))&&(this._results=o,this.length=o.length,this.last=o[this.length-1],this.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}let $p=(()=>{class e{static#e=this.__NG_ELEMENT_ID__=$T}return e})();const FT=$p,LT=class extends FT{constructor(n,i,o){super(),this._declarationLView=n,this._declarationTContainer=i,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,i){return this.createEmbeddedViewImpl(n,i)}createEmbeddedViewImpl(n,i,o){const l=od(this._declarationLView,this._declarationTContainer,n,{injector:i,dehydratedView:o});return new oh(l)}};function $T(){return Hv(Kt(),Me())}function Hv(e,n){return 4&e.type?new LT(n,e,Lu(e,n)):null}class b_{constructor(n){this.queryList=n,this.matches=null}clone(){return new b_(this.queryList)}setDirty(){this.queryList.setDirty()}}class w_{constructor(n=[]){this.queries=n}createEmbeddedView(n){const i=n.queries;if(null!==i){const o=null!==n.contentQueries?n.contentQueries[0]:i.length,l=[];for(let u=0;u<o;u++){const d=i.getByIndex(u);l.push(this.queries[d.indexInDeclarationView].clone())}return new w_(l)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let i=0;i<this.queries.length;i++)null!==OS(n,i).matches&&this.queries[i].setDirty()}}class DS{constructor(n,i,o=null){this.predicate=n,this.flags=i,this.read=o}}class __{constructor(n=[]){this.queries=n}elementStart(n,i){for(let o=0;o<this.queries.length;o++)this.queries[o].elementStart(n,i)}elementEnd(n){for(let i=0;i<this.queries.length;i++)this.queries[i].elementEnd(n)}embeddedTView(n){let i=null;for(let o=0;o<this.length;o++){const l=null!==i?i.length:0,u=this.getByIndex(o).embeddedTView(n,l);u&&(u.indexInDeclarationView=o,null!==i?i.push(u):i=[u])}return null!==i?new __(i):null}template(n,i){for(let o=0;o<this.queries.length;o++)this.queries[o].template(n,i)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}}class C_{constructor(n,i=-1){this.metadata=n,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=i}elementStart(n,i){this.isApplyingToNode(i)&&this.matchTNode(n,i)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,i){this.elementStart(n,i)}embeddedTView(n,i){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,i),new C_(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const i=this._declarationNodeIndex;let o=n.parent;for(;null!==o&&8&o.type&&o.index!==i;)o=o.parent;return i===(null!==o?o.index:-1)}return this._appliesToNextNode}matchTNode(n,i){const o=this.metadata.predicate;if(Array.isArray(o))for(let l=0;l<o.length;l++){const u=o[l];this.matchTNodeWithReadOption(n,i,NT(i,u)),this.matchTNodeWithReadOption(n,i,pu(i,n,u,!1,!1))}else o===$p?4&i.type&&this.matchTNodeWithReadOption(n,i,-1):this.matchTNodeWithReadOption(n,i,pu(i,n,o,!1,!1))}matchTNodeWithReadOption(n,i,o){if(null!==o){const l=this.metadata.read;if(null!==l)if(l===Jd||l===xh||l===$p&&4&i.type)this.addMatch(i.index,-2);else{const u=pu(i,n,l,!1,!1);null!==u&&this.addMatch(i.index,u)}else this.addMatch(i.index,o)}}addMatch(n,i){null===this.matches?this.matches=[n,i]:this.matches.push(n,i)}}function NT(e,n){const i=e.localNames;if(null!==i)for(let o=0;o<i.length;o+=2)if(i[o]===n)return i[o+1];return null}function VT(e,n,i,o){return-1===i?function BT(e,n){return 11&e.type?Lu(e,n):4&e.type?Hv(e,n):null}(n,e):-2===i?function jT(e,n,i){return i===Jd?Lu(n,e):i===$p?Hv(n,e):i===xh?Ih(n,e):void 0}(e,n,o):pl(e,e[pt],i,n)}function ES(e,n,i,o){const l=n[A].queries[o];if(null===l.matches){const u=e.data,d=i.matches,f=[];for(let v=0;v<d.length;v+=2){const O=d[v];f.push(O<0?null:VT(n,u[O],d[v+1],i.metadata.read))}l.matches=f}return l.matches}function D_(e,n,i,o){const l=e.queries.getByIndex(i),u=l.matches;if(null!==u){const d=ES(e,n,l,i);for(let f=0;f<u.length;f+=2){const v=u[f];if(v>0)o.push(d[f/2]);else{const O=u[f+1],L=n[-v];for(let G=Qe;G<L.length;G++){const ge=L[G];ge[g]===ge[Kn]&&D_(ge[pt],ge,O,o)}if(null!==L[it]){const G=L[it];for(let ge=0;ge<G.length;ge++){const Se=G[ge];D_(Se[pt],Se,O,o)}}}}}return o}function SS(e){const n=Me(),i=Tt(),o=Hp();oc(o+1);const l=OS(i,o);if(e.dirty&&function jh(e){return 4==(4&e[Yt])}(n)===(2==(2&l.metadata.flags))){if(null===l.matches)e.reset([]);else{const u=l.crossesNgTemplate?D_(i,n,o,[]):ES(i,n,l,o);e.reset(u,Hg),e.notifyOnChanges()}return!0}return!1}function xS(e,n,i){const o=Tt();o.firstCreatePass&&(kS(o,new DS(e,n,i),-1),2==(2&n)&&(o.staticViewQueries=!0)),MS(o,Me(),n)}function IS(e,n,i,o){const l=Tt();if(l.firstCreatePass){const u=Kt();kS(l,new DS(n,i,o),u.index),function UT(e,n){const i=e.contentQueries||(e.contentQueries=[]);n!==(i.length?i[i.length-1]:-1)&&i.push(e.queries.length-1,n)}(l,e),2==(2&i)&&(l.staticContentQueries=!0)}MS(l,Me(),i)}function TS(){return function HT(e,n){return e[A].queries[n].queryList}(Me(),Hp())}function MS(e,n,i){const o=new y_(4==(4&i));(function ID(e,n,i,o){const l=Jb(n);l.push(i),e.firstCreatePass&&rm(e).push(o,l.length-1)})(e,n,o,o.destroy),null===n[A]&&(n[A]=new w_),n[A].queries.push(new b_(o))}function kS(e,n,i){null===e.queries&&(e.queries=new __),e.queries.track(new C_(n,i))}function OS(e,n){return e.queries.getByIndex(n)}const ZS=new on("Application Initializer");let T_=(()=>{class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,o)=>{this.resolve=i,this.reject=o}),this.appInits=qt(ZS,{optional:!0})??[]}runInitializers(){if(this.initialized)return;const i=[];for(const l of this.appInits){const u=l();if(a_(u))i.push(u);else if(CE(u)){const d=new Promise((f,v)=>{u.subscribe({complete:f,error:v})});i.push(d)}}const o=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{o()}).catch(l=>{this.reject(l)}),0===i.length&&o(),this.initialized=!0}static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),YS=(()=>{class e{log(i){console.log(i)}warn(i){console.warn(i)}static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();const zv=new on("LocaleId",{providedIn:"root",factory:()=>qt(zv,Xt.Optional|Xt.SkipSelf)||function hM(){return typeof $localize<"u"&&$localize.locale||dd}()}),fM=new on("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});let qS=(()=>{class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Bt.X(!1)}add(){this.hasPendingTasks.next(!0);const i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),0===this.pendingTasks.size&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();class yM{constructor(n,i){this.ngModuleFactory=n,this.componentFactories=i}}let bM=(()=>{class e{compileModuleSync(i){return new m_(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){const o=this.compileModuleSync(i),u=Ps(pi(i).declarations).reduce((d,f)=>{const v=pn(f);return v&&d.push(new Uu(v)),d},[]);return new yM(o,u)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const tx=new on(""),nx=new on("");let k_,zM=(()=>{class e{constructor(i,o,l){this._ngZone=i,this.registry=o,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,k_||(function WM(e){k_=e}(l),l.addToWindow(o)),this._watchAngularEvents(),i.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{_r.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;0!==this._callbacks.length;){let i=this._callbacks.pop();clearTimeout(i.timeoutId),i.doneCb(this._didWork)}this._didWork=!1});else{let i=this.getPendingTasks();this._callbacks=this._callbacks.filter(o=>!o.updateCb||!o.updateCb(i)||(clearTimeout(o.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(i=>({source:i.source,creationLocation:i.creationLocation,data:i.data})):[]}addCallback(i,o,l){let u=-1;o&&o>0&&(u=setTimeout(()=>{this._callbacks=this._callbacks.filter(d=>d.timeoutId!==u),i(this._didWork,this.getPendingTasks())},o)),this._callbacks.push({doneCb:i,timeoutId:u,updateCb:l})}whenStable(i,o,l){if(l&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(i,o,l),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(i){this.registry.registerApplication(i,this)}unregisterApplication(i){this.registry.unregisterApplication(i)}findProviders(i,o,l){return[]}static#e=this.\u0275fac=function(o){return new(o||e)(sn(_r),sn(ix),sn(nx))};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac})}return e})(),ix=(()=>{class e{constructor(){this._applications=new Map}registerApplication(i,o){this._applications.set(i,o)}unregisterApplication(i){this._applications.delete(i)}unregisterAllApplications(){this._applications.clear()}getTestability(i){return this._applications.get(i)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(i,o=!0){return k_?.findTestabilityInTree(this,i,o)??null}static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})(),ru=null;const rx=new on("AllowMultipleToken"),O_=new on("PlatformDestroyListeners"),A_=new on("appBootstrapListener");function ax(e,n,i=[]){const o=`Platform: ${n}`,l=new on(o);return(u=[])=>{let d=R_();if(!d||d.injector.get(rx,!1)){const f=[...i,...u,{provide:l,useValue:!0}];e?e(f):function YM(e){if(ru&&!ru.get(rx,!1))throw new St(400,!1);(function ox(){!function et(e){ce=e}(()=>{throw new St(600,!1)})})(),ru=e;const n=e.get(cx);(function sx(e){e.get(Ly,null)?.forEach(i=>i())})(e)}(function lx(e=[],n){return Bo.create({name:n,providers:[{provide:cf,useValue:"platform"},{provide:O_,useValue:new Set([()=>ru=null])},...e]})}(f,o))}return function qM(e){const n=R_();if(!n)throw new St(401,!1);return n}()}}function R_(){return ru?.get(cx)??null}let cx=(()=>{class e{constructor(i){this._injector=i,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(i,o){const l=function QM(e="zone.js",n){return"noop"===e?new g0:"zone.js"===e?new _r(n):e}(o?.ngZone,function ux(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}({eventCoalescing:o?.ngZoneEventCoalescing,runCoalescing:o?.ngZoneRunCoalescing}));return l.run(()=>{const u=function cT(e,n,i){return new g_(e,n,i)}(i.moduleType,this.injector,function gx(e){return[{provide:_r,useFactory:e},{provide:wl,multi:!0,useFactory:()=>{const n=qt(JM,{optional:!0});return()=>n.initialize()}},{provide:px,useFactory:XM},{provide:vm,useFactory:Ac}]}(()=>l)),d=u.injector.get(Fl,null);return l.runOutsideAngular(()=>{const f=l.onError.subscribe({next:v=>{d.handleError(v)}});u.onDestroy(()=>{Gv(this._modules,u),f.unsubscribe()})}),function dx(e,n,i){try{const o=i();return a_(o)?o.catch(l=>{throw n.runOutsideAngular(()=>e.handleError(l)),l}):o}catch(o){throw n.runOutsideAngular(()=>e.handleError(o)),o}}(d,l,()=>{const f=u.injector.get(T_);return f.runInitializers(),f.donePromise.then(()=>(function c(e){li(e,"Expected localeId to be defined"),"string"==typeof e&&(s=e.toLowerCase().replace(/_/g,"-"))}(u.injector.get(zv,dd)||dd),this._moduleDoBootstrap(u),u))})})}bootstrapModule(i,o=[]){const l=hx({},o);return function GM(e,n,i){const o=new m_(i);return Promise.resolve(o)}(0,0,i).then(u=>this.bootstrapModuleFactory(u,l))}_moduleDoBootstrap(i){const o=i.injector.get(Bh);if(i._bootstrapComponents.length>0)i._bootstrapComponents.forEach(l=>o.bootstrap(l));else{if(!i.instance.ngDoBootstrap)throw new St(-403,!1);i.instance.ngDoBootstrap(o)}this._modules.push(i)}onDestroy(i){this._destroyListeners.push(i)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new St(404,!1);this._modules.slice().forEach(o=>o.destroy()),this._destroyListeners.forEach(o=>o());const i=this._injector.get(O_,null);i&&(i.forEach(o=>o()),i.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static#e=this.\u0275fac=function(o){return new(o||e)(sn(Bo))};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();function hx(e,n){return Array.isArray(n)?n.reduce(hx,e):{...e,...n}}let Bh=(()=>{class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=qt(px),this.zoneIsStable=qt(vm),this.componentTypes=[],this.components=[],this.isStable=qt(qS).hasPendingTasks.pipe((0,zi.w)(i=>i?(0,nr.of)(!1):this.zoneIsStable),function wt(e,n=En.y){return e=e??Io,(0,fr.e)((i,o)=>{let l,u=!0;i.subscribe((0,Be.x)(o,d=>{const f=n(d);(u||!e(l,f))&&(u=!1,l=f,o.next(d))}))})}(),Nr()),this._injector=qt(la)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,o){const l=i instanceof Db;if(!this._injector.get(T_).done)throw!l&&Gr(i),new St(405,!1);let d;d=l?i:this._injector.get(Xd).resolveComponentFactory(i),this.componentTypes.push(d.componentType);const f=function ZM(e){return e.isBoundToModule}(d)?void 0:this._injector.get(hd),O=d.create(Bo.NULL,[],o||d.selector,f),L=O.location.nativeElement,G=O.injector.get(tx,null);return G?.registerApplication(L),O.onDestroy(()=>{this.detachView(O.hostView),Gv(this.components,O),G?.unregisterApplication(L)}),this._loadComponent(O),O}tick(){if(this._runningTick)throw new St(101,!1);try{this._runningTick=!0;for(let i of this._views)i.detectChanges()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}attachView(i){const o=i;this._views.push(o),o.attachToAppRef(this)}detachView(i){const o=i;Gv(this._views,o),o.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);const o=this._injector.get(A_,[]);[...this._bootstrapListeners,...o].forEach(l=>l(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Gv(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new St(406,!1);const i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Gv(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const px=new on("",{providedIn:"root",factory:()=>qt(Fl).handleError.bind(void 0)});function XM(){const e=qt(_r),n=qt(Fl);return i=>e.runOutsideAngular(()=>n.handleError(i))}let JM=(()=>{class e{constructor(){this.zone=qt(_r),this.applicationRef=qt(Bh)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275prov=Fn({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function nk(){return!1}const ak=ax(null,"core",[]);let lk=(()=>{class e{constructor(i){}static#e=this.\u0275fac=function(o){return new(o||e)(sn(Bh))};static#t=this.\u0275mod=$o({type:e});static#n=this.\u0275inj=Di({})}return e})();function Mk(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}function Ok(e){const n=pn(e);if(!n)return null;const i=new Uu(n);return{get selector(){return i.selector},get type(){return i.componentType},get inputs(){return i.inputs},get outputs(){return i.outputs},get ngContentSelectors(){return i.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}},5522:(ct,pe,M)=>{M.d(pe,{Dx:()=>Z});var _=M(9467),y=M(8645),ne=M(4552);class j extends y.x{constructor(q=1/0,oe=1/0,V=ne.l){super(),this._bufferSize=q,this._windowTime=oe,this._timestampProvider=V,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=oe===1/0,this._bufferSize=Math.max(1,q),this._windowTime=Math.max(1,oe)}next(q){const{isStopped:oe,_buffer:V,_infiniteTimeWindow:P,_timestampProvider:Q,_windowTime:ee}=this;oe||(V.push(q),!P&&V.push(Q.now()+ee)),this._trimBuffer(),super.next(q)}_subscribe(q){this._throwIfClosed(),this._trimBuffer();const oe=this._innerSubscribe(q),{_infiniteTimeWindow:V,_buffer:P}=this,Q=P.slice();for(let ee=0;ee<Q.length&&!q.closed;ee+=V?1:2)q.next(Q[ee]);return this._checkFinalizedStatuses(q),oe}_trimBuffer(){const{_bufferSize:q,_timestampProvider:oe,_buffer:V,_infiniteTimeWindow:P}=this,Q=(P?1:2)*q;if(q<1/0&&Q<V.length&&V.splice(0,V.length-Q),!P){const ee=oe.now();let de=0;for(let $e=1;$e<V.length&&V[$e]<=ee;$e+=2)de=$e;de&&V.splice(0,de+1)}}}function Z(fe,q){!q?.injector&&(0,_.gHi)(Z);const oe=q?.injector??(0,_.f3M)(_.zs3),V=new j(1),P=(0,_.cEC)(()=>{let Q;try{Q=fe()}catch(ee){return void(0,_.rg0)(()=>V.error(ee))}(0,_.rg0)(()=>V.next(Q))},{injector:oe,manualCleanup:!0});return oe.get(_.ktI).onDestroy(()=>{P.destroy(),V.complete()}),V.asObservable()}},6593:(ct,pe,M)=>{M.d(pe,{Dx:()=>fr,b2:()=>ni,q6:()=>Hn,se:()=>he});var _=M(9467),y=M(6814);class ne extends y.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class j extends ne{static makeCurrent(){(0,y.HT)(new j)}onAndCancel(Ce,K,Ae){return Ce.addEventListener(K,Ae),()=>{Ce.removeEventListener(K,Ae)}}dispatchEvent(Ce,K){Ce.dispatchEvent(K)}remove(Ce){Ce.parentNode&&Ce.parentNode.removeChild(Ce)}createElement(Ce,K){return(K=K||this.getDefaultDocument()).createElement(Ce)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(Ce){return Ce.nodeType===Node.ELEMENT_NODE}isShadowRoot(Ce){return Ce instanceof DocumentFragment}getGlobalEventTarget(Ce,K){return"window"===K?window:"document"===K?Ce:"body"===K?Ce.body:null}getBaseHref(Ce){const K=function Z(){return U=U||document.querySelector("base"),U?U.getAttribute("href"):null}();return null==K?null:function fe(tt){re=re||document.createElement("a"),re.setAttribute("href",tt);const Ce=re.pathname;return"/"===Ce.charAt(0)?Ce:`/${Ce}`}(K)}resetBaseElement(){U=null}getUserAgent(){return window.navigator.userAgent}getCookie(Ce){return(0,y.Mx)(document.cookie,Ce)}}let re,U=null,oe=(()=>{class tt{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)};static#t=this.\u0275prov=_.Yz7({token:tt,factory:tt.\u0275fac})}return tt})();const V=new _.OlP("EventManagerPlugins");let P=(()=>{class tt{constructor(K,Ae){this._zone=Ae,this._eventNameToPlugin=new Map,K.forEach(rt=>{rt.manager=this}),this._plugins=K.slice().reverse()}addEventListener(K,Ae,rt){return this._findPluginFor(Ae).addEventListener(K,Ae,rt)}getZone(){return this._zone}_findPluginFor(K){let Ae=this._eventNameToPlugin.get(K);if(Ae)return Ae;if(Ae=this._plugins.find(Mt=>Mt.supports(K)),!Ae)throw new _.vHH(5101,!1);return this._eventNameToPlugin.set(K,Ae),Ae}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)(_.LFG(V),_.LFG(_.R0b))};static#t=this.\u0275prov=_.Yz7({token:tt,factory:tt.\u0275fac})}return tt})();class Q{constructor(Ce){this._doc=Ce}}const ee="ng-app-id";let de=(()=>{class tt{constructor(K,Ae,rt,Mt={}){this.doc=K,this.appId=Ae,this.nonce=rt,this.platformId=Mt,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,y.PM)(Mt),this.resetHostNodes()}addStyles(K){for(const Ae of K)1===this.changeUsageCount(Ae,1)&&this.onStyleAdded(Ae)}removeStyles(K){for(const Ae of K)this.changeUsageCount(Ae,-1)<=0&&this.onStyleRemoved(Ae)}ngOnDestroy(){const K=this.styleNodesInDOM;K&&(K.forEach(Ae=>Ae.remove()),K.clear());for(const Ae of this.getAllStyles())this.onStyleRemoved(Ae);this.resetHostNodes()}addHost(K){this.hostNodes.add(K);for(const Ae of this.getAllStyles())this.addStyleToHost(K,Ae)}removeHost(K){this.hostNodes.delete(K)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(K){for(const Ae of this.hostNodes)this.addStyleToHost(Ae,K)}onStyleRemoved(K){const Ae=this.styleRef;Ae.get(K)?.elements?.forEach(rt=>rt.remove()),Ae.delete(K)}collectServerRenderedStyles(){const K=this.doc.head?.querySelectorAll(`style[${ee}="${this.appId}"]`);if(K?.length){const Ae=new Map;return K.forEach(rt=>{null!=rt.textContent&&Ae.set(rt.textContent,rt)}),Ae}return null}changeUsageCount(K,Ae){const rt=this.styleRef;if(rt.has(K)){const Mt=rt.get(K);return Mt.usage+=Ae,Mt.usage}return rt.set(K,{usage:Ae,elements:[]}),Ae}getStyleElement(K,Ae){const rt=this.styleNodesInDOM,Mt=rt?.get(Ae);if(Mt?.parentNode===K)return rt.delete(Ae),Mt.removeAttribute(ee),Mt;{const Ht=this.doc.createElement("style");return this.nonce&&Ht.setAttribute("nonce",this.nonce),Ht.textContent=Ae,this.platformIsServer&&Ht.setAttribute(ee,this.appId),K.appendChild(Ht),Ht}}addStyleToHost(K,Ae){const rt=this.getStyleElement(K,Ae),Mt=this.styleRef,Ht=Mt.get(Ae)?.elements;Ht?Ht.push(rt):Mt.set(Ae,{elements:[rt],usage:1})}resetHostNodes(){const K=this.hostNodes;K.clear(),K.add(this.doc.head)}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)(_.LFG(y.K0),_.LFG(_.AFp),_.LFG(_.Ojb,8),_.LFG(_.Lbi))};static#t=this.\u0275prov=_.Yz7({token:tt,factory:tt.\u0275fac})}return tt})();const $e={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},we=/%COMP%/g,Fe=new _.OlP("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>!0});function ie(tt,Ce){return Ce.map(K=>K.replace(we,tt))}let he=(()=>{class tt{constructor(K,Ae,rt,Mt,Ht,Tn,en,Cn=null){this.eventManager=K,this.sharedStylesHost=Ae,this.appId=rt,this.removeStylesOnCompDestroy=Mt,this.doc=Ht,this.platformId=Tn,this.ngZone=en,this.nonce=Cn,this.rendererByCompId=new Map,this.platformIsServer=(0,y.PM)(Tn),this.defaultRenderer=new xe(K,Ht,en,this.platformIsServer)}createRenderer(K,Ae){if(!K||!Ae)return this.defaultRenderer;this.platformIsServer&&Ae.encapsulation===_.ifc.ShadowDom&&(Ae={...Ae,encapsulation:_.ifc.Emulated});const rt=this.getOrCreateRenderer(K,Ae);return rt instanceof je?rt.applyToHost(K):rt instanceof ce&&rt.applyStyles(),rt}getOrCreateRenderer(K,Ae){const rt=this.rendererByCompId;let Mt=rt.get(Ae.id);if(!Mt){const Ht=this.doc,Tn=this.ngZone,en=this.eventManager,Cn=this.sharedStylesHost,pr=this.removeStylesOnCompDestroy,ir=this.platformIsServer;switch(Ae.encapsulation){case _.ifc.Emulated:Mt=new je(en,Cn,Ae,this.appId,pr,Ht,Tn,ir);break;case _.ifc.ShadowDom:return new W(en,Cn,K,Ae,Ht,Tn,this.nonce,ir);default:Mt=new ce(en,Cn,Ae,pr,Ht,Tn,ir)}rt.set(Ae.id,Mt)}return Mt}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)(_.LFG(P),_.LFG(de),_.LFG(_.AFp),_.LFG(Fe),_.LFG(y.K0),_.LFG(_.Lbi),_.LFG(_.R0b),_.LFG(_.Ojb))};static#t=this.\u0275prov=_.Yz7({token:tt,factory:tt.\u0275fac})}return tt})();class xe{constructor(Ce,K,Ae,rt){this.eventManager=Ce,this.doc=K,this.ngZone=Ae,this.platformIsServer=rt,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(Ce,K){return K?this.doc.createElementNS($e[K]||K,Ce):this.doc.createElement(Ce)}createComment(Ce){return this.doc.createComment(Ce)}createText(Ce){return this.doc.createTextNode(Ce)}appendChild(Ce,K){(ue(Ce)?Ce.content:Ce).appendChild(K)}insertBefore(Ce,K,Ae){Ce&&(ue(Ce)?Ce.content:Ce).insertBefore(K,Ae)}removeChild(Ce,K){Ce&&Ce.removeChild(K)}selectRootElement(Ce,K){let Ae="string"==typeof Ce?this.doc.querySelector(Ce):Ce;if(!Ae)throw new _.vHH(-5104,!1);return K||(Ae.textContent=""),Ae}parentNode(Ce){return Ce.parentNode}nextSibling(Ce){return Ce.nextSibling}setAttribute(Ce,K,Ae,rt){if(rt){K=rt+":"+K;const Mt=$e[rt];Mt?Ce.setAttributeNS(Mt,K,Ae):Ce.setAttribute(K,Ae)}else Ce.setAttribute(K,Ae)}removeAttribute(Ce,K,Ae){if(Ae){const rt=$e[Ae];rt?Ce.removeAttributeNS(rt,K):Ce.removeAttribute(`${Ae}:${K}`)}else Ce.removeAttribute(K)}addClass(Ce,K){Ce.classList.add(K)}removeClass(Ce,K){Ce.classList.remove(K)}setStyle(Ce,K,Ae,rt){rt&(_.JOm.DashCase|_.JOm.Important)?Ce.style.setProperty(K,Ae,rt&_.JOm.Important?"important":""):Ce.style[K]=Ae}removeStyle(Ce,K,Ae){Ae&_.JOm.DashCase?Ce.style.removeProperty(K):Ce.style[K]=""}setProperty(Ce,K,Ae){Ce[K]=Ae}setValue(Ce,K){Ce.nodeValue=K}listen(Ce,K,Ae){if("string"==typeof Ce&&!(Ce=(0,y.q)().getGlobalEventTarget(this.doc,Ce)))throw new Error(`Unsupported event target ${Ce} for event ${K}`);return this.eventManager.addEventListener(Ce,K,this.decoratePreventDefault(Ae))}decoratePreventDefault(Ce){return K=>{if("__ngUnwrap__"===K)return Ce;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>Ce(K)):Ce(K))&&K.preventDefault()}}}function ue(tt){return"TEMPLATE"===tt.tagName&&void 0!==tt.content}class W extends xe{constructor(Ce,K,Ae,rt,Mt,Ht,Tn,en){super(Ce,Mt,Ht,en),this.sharedStylesHost=K,this.hostEl=Ae,this.shadowRoot=Ae.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Cn=ie(rt.id,rt.styles);for(const pr of Cn){const ir=document.createElement("style");Tn&&ir.setAttribute("nonce",Tn),ir.textContent=pr,this.shadowRoot.appendChild(ir)}}nodeOrShadowRoot(Ce){return Ce===this.hostEl?this.shadowRoot:Ce}appendChild(Ce,K){return super.appendChild(this.nodeOrShadowRoot(Ce),K)}insertBefore(Ce,K,Ae){return super.insertBefore(this.nodeOrShadowRoot(Ce),K,Ae)}removeChild(Ce,K){return super.removeChild(this.nodeOrShadowRoot(Ce),K)}parentNode(Ce){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(Ce)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class ce extends xe{constructor(Ce,K,Ae,rt,Mt,Ht,Tn,en){super(Ce,Mt,Ht,Tn),this.sharedStylesHost=K,this.removeStylesOnCompDestroy=rt,this.styles=en?ie(en,Ae.styles):Ae.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class je extends ce{constructor(Ce,K,Ae,rt,Mt,Ht,Tn,en){const Cn=rt+"-"+Ae.id;super(Ce,K,Ae,Mt,Ht,Tn,en,Cn),this.contentAttr=function Te(tt){return"_ngcontent-%COMP%".replace(we,tt)}(Cn),this.hostAttr=function Ve(tt){return"_nghost-%COMP%".replace(we,tt)}(Cn)}applyToHost(Ce){this.applyStyles(),this.setAttribute(Ce,this.hostAttr,"")}createElement(Ce,K){const Ae=super.createElement(Ce,K);return super.setAttribute(Ae,this.contentAttr,""),Ae}}let et=(()=>{class tt extends Q{constructor(K){super(K)}supports(K){return!0}addEventListener(K,Ae,rt){return K.addEventListener(Ae,rt,!1),()=>this.removeEventListener(K,Ae,rt)}removeEventListener(K,Ae,rt){return K.removeEventListener(Ae,rt)}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)(_.LFG(y.K0))};static#t=this.\u0275prov=_.Yz7({token:tt,factory:tt.\u0275fac})}return tt})();const Dt=["alt","control","meta","shift"],Oe={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ee={alt:tt=>tt.altKey,control:tt=>tt.ctrlKey,meta:tt=>tt.metaKey,shift:tt=>tt.shiftKey};let Ye=(()=>{class tt extends Q{constructor(K){super(K)}supports(K){return null!=tt.parseEventName(K)}addEventListener(K,Ae,rt){const Mt=tt.parseEventName(Ae),Ht=tt.eventCallback(Mt.fullKey,rt,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,y.q)().onAndCancel(K,Mt.domEventName,Ht))}static parseEventName(K){const Ae=K.toLowerCase().split("."),rt=Ae.shift();if(0===Ae.length||"keydown"!==rt&&"keyup"!==rt)return null;const Mt=tt._normalizeKey(Ae.pop());let Ht="",Tn=Ae.indexOf("code");if(Tn>-1&&(Ae.splice(Tn,1),Ht="code."),Dt.forEach(Cn=>{const pr=Ae.indexOf(Cn);pr>-1&&(Ae.splice(pr,1),Ht+=Cn+".")}),Ht+=Mt,0!=Ae.length||0===Mt.length)return null;const en={};return en.domEventName=rt,en.fullKey=Ht,en}static matchEventFullKeyCode(K,Ae){let rt=Oe[K.key]||K.key,Mt="";return Ae.indexOf("code.")>-1&&(rt=K.code,Mt="code."),!(null==rt||!rt)&&(rt=rt.toLowerCase()," "===rt?rt="space":"."===rt&&(rt="dot"),Dt.forEach(Ht=>{Ht!==rt&&(0,Ee[Ht])(K)&&(Mt+=Ht+".")}),Mt+=rt,Mt===Ae)}static eventCallback(K,Ae,rt){return Mt=>{tt.matchEventFullKeyCode(Mt,K)&&rt.runGuarded(()=>Ae(Mt))}}static _normalizeKey(K){return"esc"===K?"escape":K}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)(_.LFG(y.K0))};static#t=this.\u0275prov=_.Yz7({token:tt,factory:tt.\u0275fac})}return tt})();const Hn=(0,_.eFA)(_._c5,"browser",[{provide:_.Lbi,useValue:y.bD},{provide:_.g9A,useValue:function fn(){j.makeCurrent()},multi:!0},{provide:y.K0,useFactory:function Pt(){return(0,_.RDi)(document),document},deps:[]}]),Rn=new _.OlP(""),Gn=[{provide:_.rWj,useClass:class q{addToWindow(Ce){_.dqk.getAngularTestability=(Ae,rt=!0)=>{const Mt=Ce.findTestabilityInTree(Ae,rt);if(null==Mt)throw new _.vHH(5103,!1);return Mt},_.dqk.getAllAngularTestabilities=()=>Ce.getAllTestabilities(),_.dqk.getAllAngularRootElements=()=>Ce.getAllRootElements(),_.dqk.frameworkStabilizers||(_.dqk.frameworkStabilizers=[]),_.dqk.frameworkStabilizers.push(Ae=>{const rt=_.dqk.getAllAngularTestabilities();let Mt=rt.length,Ht=!1;const Tn=function(en){Ht=Ht||en,Mt--,0==Mt&&Ae(Ht)};rt.forEach(en=>{en.whenStable(Tn)})})}findTestabilityInTree(Ce,K,Ae){return null==K?null:Ce.getTestability(K)??(Ae?(0,y.q)().isShadowRoot(K)?this.findTestabilityInTree(Ce,K.host,!0):this.findTestabilityInTree(Ce,K.parentElement,!0):null)}},deps:[]},{provide:_.lri,useClass:_.dDg,deps:[_.R0b,_.eoX,_.rWj]},{provide:_.dDg,useClass:_.dDg,deps:[_.R0b,_.eoX,_.rWj]}],vi=[{provide:_.zSh,useValue:"root"},{provide:_.qLn,useFactory:function hi(){return new _.qLn},deps:[]},{provide:V,useClass:et,multi:!0,deps:[y.K0,_.R0b,_.Lbi]},{provide:V,useClass:Ye,multi:!0,deps:[y.K0]},he,de,P,{provide:_.FYo,useExisting:he},{provide:y.JF,useClass:oe,deps:[]},[]];let ni=(()=>{class tt{constructor(K){}static withServerTransition(K){return{ngModule:tt,providers:[{provide:_.AFp,useValue:K.appId}]}}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)(_.LFG(Rn,12))};static#t=this.\u0275mod=_.oAB({type:tt});static#n=this.\u0275inj=_.cJS({providers:[...vi,...Gn],imports:[y.ez,_.hGG]})}return tt})(),fr=(()=>{class tt{constructor(K){this._doc=K}getTitle(){return this._doc.title}setTitle(K){this._doc.title=K||""}static#e=this.\u0275fac=function(Ae){return new(Ae||tt)(_.LFG(y.K0))};static#t=this.\u0275prov=_.Yz7({token:tt,factory:function(Ae){let rt=null;return rt=Ae?new Ae:function On(){return new fr((0,_.LFG)(y.K0))}(),rt},providedIn:"root"})}return tt})();typeof window<"u"&&window},9500:(ct,pe,M)=>{M.d(pe,{gz:()=>Jr,F0:()=>ro,Bz:()=>Ha,lC:()=>Fo});var _=M(9467),y=M(5592),ne=M(4674),U=M(7715),Z=M(2096),re=M(5619);const{isArray:fe}=Array,{getPrototypeOf:q,prototype:oe,keys:V}=Object;var ee=M(2737),de=M(7400),$e=M(9940),ve=M(8251),qe=M(7103);function Re(...p){const C=(0,$e.yG)(p),m=(0,$e.jO)(p),{args:D,keys:R}=function P(p){if(1===p.length){const C=p[0];if(fe(C))return{args:C,keys:null};if(function Q(p){return p&&"object"==typeof p&&q(p)===oe}(C)){const m=V(C);return{args:m.map(D=>C[D]),keys:m}}}return{args:p,keys:null}}(p);if(0===D.length)return(0,U.D)([],C);const H=new y.y(function be(p,C,m=ee.y){return D=>{Fe(C,()=>{const{length:R}=p,H=new Array(R);let ae=R,Ge=R;for(let We=0;We<R;We++)Fe(C,()=>{const mt=(0,U.D)(p[We],C);let Jt=!1;mt.subscribe((0,ve.x)(D,jt=>{H[We]=jt,Jt||(Jt=!0,Ge--),Ge||D.next(m(H.slice()))},()=>{--ae||D.complete()}))},D)},D)}}(D,C,R?ae=>function we(p,C){return p.reduce((m,D,R)=>(m[D]=C[R],m),{})}(R,ae):ee.y));return m?H.pipe((0,de.Z)(m)):H}function Fe(p,C,m){p?(0,qe.f)(m,p,C):C()}var Te=M(6973),Ve=M(5211),ie=M(4911),he=M(8888),xe=M(8504),ze=M(6232),le=M(3168),ue=M(8645),W=M(7394),ce=M(6814),je=M(5805),et=M(4664),Dt=M(8180),Oe=M(9360),Ye=M(2181),Ke=M(1631);function ht(p){return(0,Oe.e)((C,m)=>{let D=!1;C.subscribe((0,ve.x)(m,R=>{D=!0,m.next(R)},()=>{D||m.next(p),m.complete()}))})}function dt(p=Qt){return(0,Oe.e)((C,m)=>{let D=!1;C.subscribe((0,ve.x)(m,R=>{D=!0,m.next(R)},()=>D?m.complete():m.error(p())))})}function Qt(){return new Te.K}function fn(p,C){const m=arguments.length>=2;return D=>D.pipe(p?(0,Ye.h)((R,H)=>p(R,H,D)):ee.y,(0,Dt.q)(1),m?ht(C):dt(()=>new Te.K))}function hi(p,C){return(0,ne.m)(C)?(0,Ke.z)(p,C,1):(0,Ke.z)(p,1)}var Pt=M(9397),dn=M(4829);function Hn(p){return(0,Oe.e)((C,m)=>{let H,D=null,R=!1;D=C.subscribe((0,ve.x)(m,void 0,void 0,ae=>{H=(0,dn.Xf)(p(ae,Hn(p)(C))),D?(D.unsubscribe(),D=null,H.subscribe(m)):R=!0})),R&&(D.unsubscribe(),D=null,H.subscribe(m))})}function vi(p){return p<=0?()=>ze.E:(0,Oe.e)((C,m)=>{let D=[];C.subscribe((0,ve.x)(m,R=>{D.push(R),p<D.length&&D.shift()},()=>{for(const R of D)m.next(R);m.complete()},void 0,()=>{D=null}))})}var Bt=M(975);function nr(p){return(0,Oe.e)((C,m)=>{try{C.subscribe(m)}finally{m.add(p)}})}var Er=M(6196),On=M(9773),fr=M(7537),Nr=M(6593);const Vt="primary",zi=Symbol("RouteTitle");class En{constructor(C){this.params=C||{}}has(C){return Object.prototype.hasOwnProperty.call(this.params,C)}get(C){if(this.has(C)){const m=this.params[C];return Array.isArray(m)?m[0]:m}return null}getAll(C){if(this.has(C)){const m=this.params[C];return Array.isArray(m)?m:[m]}return[]}get keys(){return Object.keys(this.params)}}function Be(p){return new En(p)}function wt(p,C,m){const D=m.path.split("/");if(D.length>p.length||"full"===m.pathMatch&&(C.hasChildren()||D.length<p.length))return null;const R={};for(let H=0;H<D.length;H++){const ae=D[H],Ge=p[H];if(ae.startsWith(":"))R[ae.substring(1)]=Ge;else if(ae!==Ge.path)return null}return{consumed:p.slice(0,D.length),posParams:R}}function Zt(p,C){const m=p?Sr(p):void 0,D=C?Sr(C):void 0;if(!m||!D||m.length!=D.length)return!1;let R;for(let H=0;H<m.length;H++)if(R=m[H],!bn(p[R],C[R]))return!1;return!0}function Sr(p){return[...Object.keys(p),...Object.getOwnPropertySymbols(p)]}function bn(p,C){if(Array.isArray(p)&&Array.isArray(C)){if(p.length!==C.length)return!1;const m=[...p].sort(),D=[...C].sort();return m.every((R,H)=>D[H]===R)}return p===C}function lo(p){return p.length>0?p[p.length-1]:null}function Pn(p){return function j(p){return!!p&&(p instanceof y.y||(0,ne.m)(p.lift)&&(0,ne.m)(p.subscribe))}(p)?p:(0,_.QGY)(p)?(0,U.D)(Promise.resolve(p)):(0,Z.of)(p)}const Vs={exact:function ts(p,C,m){if(!Ot(p.segments,C.segments)||!_i(p.segments,C.segments,m)||p.numberOfChildren!==C.numberOfChildren)return!1;for(const D in C.children)if(!p.children[D]||!ts(p.children[D],C.children[D],m))return!1;return!0},subset:Wi},Sn={exact:function Br(p,C){return Zt(p,C)},subset:function co(p,C){return Object.keys(C).length<=Object.keys(p).length&&Object.keys(C).every(m=>bn(p[m],C[m]))},ignored:()=>!0};function zt(p,C,m){return Vs[m.paths](p.root,C.root,m.matrixParams)&&Sn[m.queryParams](p.queryParams,C.queryParams)&&!("exact"===m.fragment&&p.fragment!==C.fragment)}function Wi(p,C,m){return St(p,C,C.segments,m)}function St(p,C,m,D){if(p.segments.length>m.length){const R=p.segments.slice(0,m.length);return!(!Ot(R,m)||C.hasChildren()||!_i(R,m,D))}if(p.segments.length===m.length){if(!Ot(p.segments,m)||!_i(p.segments,m,D))return!1;for(const R in C.children)if(!p.children[R]||!Wi(p.children[R],C.children[R],D))return!1;return!0}{const R=m.slice(0,p.segments.length),H=m.slice(p.segments.length);return!!(Ot(p.segments,R)&&_i(p.segments,R,D)&&p.children[Vt])&&St(p.children[Vt],C,H,D)}}function _i(p,C,m){return C.every((D,R)=>Sn[m](p[R].parameters,D.parameters))}class Fi{constructor(C=new mn([],{}),m={},D=null){this.root=C,this.queryParams=m,this.fragment=D}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Be(this.queryParams)),this._queryParamMap}toString(){return K.serialize(this)}}class mn{constructor(C,m){this.segments=C,this.children=m,this.parent=null,Object.values(m).forEach(D=>D.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ae(this)}}class Vr{constructor(C,m){this.path=C,this.parameters=m}get parameterMap(){return this._parameterMap||(this._parameterMap=Be(this.parameters)),this._parameterMap}toString(){return ir(this)}}function Ot(p,C){return p.length===C.length&&p.every((m,D)=>m.path===C[D].path)}let tt=(()=>{class p{static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:()=>new Ce,providedIn:"root"})}return p})();class Ce{parse(C){const m=new li(C);return new Fi(m.parseRootSegment(),m.parseQueryParams(),m.parseFragment())}serialize(C){const m=`/${rt(C.root,!0)}`,D=function Ci(p){const C=Object.keys(p).map(m=>{const D=p[m];return Array.isArray(D)?D.map(R=>`${Ht(m)}=${Ht(R)}`).join("&"):`${Ht(m)}=${Ht(D)}`}).filter(m=>!!m);return C.length?`?${C.join("&")}`:""}(C.queryParams);return`${m}${D}${"string"==typeof C.fragment?`#${function Tn(p){return encodeURI(p)}(C.fragment)}`:""}`}}const K=new Ce;function Ae(p){return p.segments.map(C=>ir(C)).join("/")}function rt(p,C){if(!p.hasChildren())return Ae(p);if(C){const m=p.children[Vt]?rt(p.children[Vt],!1):"",D=[];return Object.entries(p.children).forEach(([R,H])=>{R!==Vt&&D.push(`${R}:${rt(H,!1)}`)}),D.length>0?`${m}(${D.join("//")})`:m}{const m=function jr(p,C){let m=[];return Object.entries(p.children).forEach(([D,R])=>{D===Vt&&(m=m.concat(C(R,D)))}),Object.entries(p.children).forEach(([D,R])=>{D!==Vt&&(m=m.concat(C(R,D)))}),m}(p,(D,R)=>R===Vt?[rt(p.children[Vt],!1)]:[`${R}:${rt(D,!1)}`]);return 1===Object.keys(p.children).length&&null!=p.children[Vt]?`${Ae(p)}/${m[0]}`:`${Ae(p)}/(${m.join("//")})`}}function Mt(p){return encodeURIComponent(p).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ht(p){return Mt(p).replace(/%3B/gi,";")}function en(p){return Mt(p).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Cn(p){return decodeURIComponent(p)}function pr(p){return Cn(p.replace(/\+/g,"%20"))}function ir(p){return`${en(p.path)}${function ns(p){return Object.keys(p).map(C=>`;${en(C)}=${en(p[C])}`).join("")}(p.parameters)}`}const is=/^[^\/()?;#]+/;function Es(p){const C=p.match(is);return C?C[0]:""}const rs=/^[^\/()?;=#]+/,Li=/^[^=?&#]+/,Mo=/^[^&#]+/;class li{constructor(C){this.url=C,this.remaining=C}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new mn([],{}):new mn([],this.parseChildren())}parseQueryParams(){const C={};if(this.consumeOptional("?"))do{this.parseQueryParam(C)}while(this.consumeOptional("&"));return C}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const C=[];for(this.peekStartsWith("(")||C.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),C.push(this.parseSegment());let m={};this.peekStartsWith("/(")&&(this.capture("/"),m=this.parseParens(!0));let D={};return this.peekStartsWith("(")&&(D=this.parseParens(!1)),(C.length>0||Object.keys(m).length>0)&&(D[Vt]=new mn(C,m)),D}parseSegment(){const C=Es(this.remaining);if(""===C&&this.peekStartsWith(";"))throw new _.vHH(4009,!1);return this.capture(C),new Vr(Cn(C),this.parseMatrixParams())}parseMatrixParams(){const C={};for(;this.consumeOptional(";");)this.parseParam(C);return C}parseParam(C){const m=function ii(p){const C=p.match(rs);return C?C[0]:""}(this.remaining);if(!m)return;this.capture(m);let D="";if(this.consumeOptional("=")){const R=Es(this.remaining);R&&(D=R,this.capture(D))}C[Cn(m)]=Cn(D)}parseQueryParam(C){const m=function To(p){const C=p.match(Li);return C?C[0]:""}(this.remaining);if(!m)return;this.capture(m);let D="";if(this.consumeOptional("=")){const ae=function uo(p){const C=p.match(Mo);return C?C[0]:""}(this.remaining);ae&&(D=ae,this.capture(D))}const R=pr(m),H=pr(D);if(C.hasOwnProperty(R)){let ae=C[R];Array.isArray(ae)||(ae=[ae],C[R]=ae),ae.push(H)}else C[R]=H}parseParens(C){const m={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const D=Es(this.remaining),R=this.remaining[D.length];if("/"!==R&&")"!==R&&";"!==R)throw new _.vHH(4010,!1);let H;D.indexOf(":")>-1?(H=D.slice(0,D.indexOf(":")),this.capture(H),this.capture(":")):C&&(H=Vt);const ae=this.parseChildren();m[H]=1===Object.keys(ae).length?ae[Vt]:new mn([],ae),this.consumeOptional("//")}return m}peekStartsWith(C){return this.remaining.startsWith(C)}consumeOptional(C){return!!this.peekStartsWith(C)&&(this.remaining=this.remaining.substring(C.length),!0)}capture(C){if(!this.consumeOptional(C))throw new _.vHH(4011,!1)}}function Ut(p){return p.segments.length>0?new mn([],{[Vt]:p}):p}function ho(p){const C={};for(const D of Object.keys(p.children)){const H=ho(p.children[D]);if(D===Vt&&0===H.segments.length&&H.hasChildren())for(const[ae,Ge]of Object.entries(H.children))C[ae]=Ge;else(H.segments.length>0||H.hasChildren())&&(C[D]=H)}return function Uo(p){if(1===p.numberOfChildren&&p.children[Vt]){const C=p.children[Vt];return new mn(p.segments.concat(C.segments),C.children)}return p}(new mn(p.segments,C))}function Ii(p){return p instanceof Fi}function Fn(p){let C;const R=Ut(function m(H){const ae={};for(const We of H.children){const mt=m(We);ae[We.outlet]=mt}const Ge=new mn(H.url,ae);return H===p&&(C=Ge),Ge}(p.root));return C??R}function ss(p,C,m,D){let R=p;for(;R.parent;)R=R.parent;if(0===C.length)return Hr(R,R,R,m,D);const H=function po(p){if("string"==typeof p[0]&&1===p.length&&"/"===p[0])return new or(!0,0,p);let C=0,m=!1;const D=p.reduce((R,H,ae)=>{if("object"==typeof H&&null!=H){if(H.outlets){const Ge={};return Object.entries(H.outlets).forEach(([We,mt])=>{Ge[We]="string"==typeof mt?mt.split("/"):mt}),[...R,{outlets:Ge}]}if(H.segmentPath)return[...R,H.segmentPath]}return"string"!=typeof H?[...R,H]:0===ae?(H.split("/").forEach((Ge,We)=>{0==We&&"."===Ge||(0==We&&""===Ge?m=!0:".."===Ge?C++:""!=Ge&&R.push(Ge))}),R):[...R,H]},[]);return new or(m,C,D)}(C);if(H.toRoot())return Hr(R,R,new mn([],{}),m,D);const ae=function zo(p,C,m){if(p.isAbsolute)return new Ki(C,!0,0);if(!m)return new Ki(C,!1,NaN);if(null===m.parent)return new Ki(m,!0,0);const D=Di(p.commands[0])?0:1;return function Zn(p,C,m){let D=p,R=C,H=m;for(;H>R;){if(H-=R,D=D.parent,!D)throw new _.vHH(4005,!1);R=D.segments.length}return new Ki(D,!1,R-H)}(m,m.segments.length-1+D,p.numberOfDoubleDots)}(H,R,p),Ge=ae.processChildren?qi(ae.segmentGroup,ae.index,H.commands):Xt(ae.segmentGroup,ae.index,H.commands);return Hr(R,ae.segmentGroup,Ge,m,D)}function Di(p){return"object"==typeof p&&null!=p&&!p.outlets&&!p.segmentPath}function rr(p){return"object"==typeof p&&null!=p&&p.outlets}function Hr(p,C,m,D,R){let ae,H={};D&&Object.entries(D).forEach(([We,mt])=>{H[We]=Array.isArray(mt)?mt.map(Jt=>`${Jt}`):`${mt}`}),ae=p===C?m:fo(p,C,m);const Ge=Ut(ho(ae));return new Fi(Ge,H,R)}function fo(p,C,m){const D={};return Object.entries(p.children).forEach(([R,H])=>{D[R]=H===C?m:fo(H,C,m)}),new mn(p.segments,D)}class or{constructor(C,m,D){if(this.isAbsolute=C,this.numberOfDoubleDots=m,this.commands=D,C&&D.length>0&&Di(D[0]))throw new _.vHH(4003,!1);const R=D.find(rr);if(R&&R!==lo(D))throw new _.vHH(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Ki{constructor(C,m,D){this.segmentGroup=C,this.processChildren=m,this.index=D}}function Xt(p,C,m){if(p||(p=new mn([],{})),0===p.segments.length&&p.hasChildren())return qi(p,C,m);const D=function xr(p,C,m){let D=0,R=C;const H={match:!1,pathIndex:0,commandIndex:0};for(;R<p.segments.length;){if(D>=m.length)return H;const ae=p.segments[R],Ge=m[D];if(rr(Ge))break;const We=`${Ge}`,mt=D<m.length-1?m[D+1]:null;if(R>0&&void 0===We)break;if(We&&mt&&"object"==typeof mt&&void 0===mt.outlets){if(!Jn(We,mt,ae))return H;D+=2}else{if(!Jn(We,{},ae))return H;D++}R++}return{match:!0,pathIndex:R,commandIndex:D}}(p,C,m),R=m.slice(D.commandIndex);if(D.match&&D.pathIndex<p.segments.length){const H=new mn(p.segments.slice(0,D.pathIndex),{});return H.children[Vt]=new mn(p.segments.slice(D.pathIndex),p.children),qi(H,0,R)}return D.match&&0===R.length?new mn(p.segments,{}):D.match&&!p.hasChildren()?wn(p,C,m):D.match?qi(p,0,R):wn(p,C,m)}function qi(p,C,m){if(0===m.length)return new mn(p.segments,{});{const D=function ko(p){return rr(p[0])?p[0].outlets:{[Vt]:p}}(m),R={};if(Object.keys(D).some(H=>H!==Vt)&&p.children[Vt]&&1===p.numberOfChildren&&0===p.children[Vt].segments.length){const H=qi(p.children[Vt],C,m);return new mn(p.segments,H.children)}return Object.entries(D).forEach(([H,ae])=>{"string"==typeof ae&&(ae=[ae]),null!==ae&&(R[H]=Xt(p.children[H],C,ae))}),Object.entries(p.children).forEach(([H,ae])=>{void 0===D[H]&&(R[H]=ae)}),new mn(p.segments,R)}}function wn(p,C,m){const D=p.segments.slice(0,C);let R=0;for(;R<m.length;){const H=m[R];if(rr(H)){const We=go(H.outlets);return new mn(D,We)}if(0===R&&Di(m[0])){D.push(new Vr(p.segments[C].path,Ur(m[0]))),R++;continue}const ae=rr(H)?H.outlets[Vt]:`${H}`,Ge=R<m.length-1?m[R+1]:null;ae&&Ge&&Di(Ge)?(D.push(new Vr(ae,Ur(Ge))),R+=2):(D.push(new Vr(ae,{})),R++)}return new mn(D,{})}function go(p){const C={};return Object.entries(p).forEach(([m,D])=>{"string"==typeof D&&(D=[D]),null!==D&&(C[m]=wn(new mn([],{}),0,D))}),C}function Ur(p){const C={};return Object.entries(p).forEach(([m,D])=>C[m]=`${D}`),C}function Jn(p,C,m){return p==m.path&&Zt(C,m.parameters)}const Oo="imperative";class zr{constructor(C,m){this.id=C,this.url=m}}class on extends zr{constructor(C,m,D="imperative",R=null){super(C,m),this.type=0,this.navigationTrigger=D,this.restoredState=R}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class $n extends zr{constructor(C,m,D){super(C,m),this.urlAfterRedirects=D,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Ir extends zr{constructor(C,m,D,R){super(C,m),this.reason=D,this.code=R,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Tr extends zr{constructor(C,m,D,R){super(C,m),this.reason=D,this.code=R,this.type=16}}class gr extends zr{constructor(C,m,D,R){super(C,m),this.error=D,this.target=R,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Ss extends zr{constructor(C,m,D,R){super(C,m),this.urlAfterRedirects=D,this.state=R,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class mo extends zr{constructor(C,m,D,R){super(C,m),this.urlAfterRedirects=D,this.state=R,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class sr extends zr{constructor(C,m,D,R,H){super(C,m),this.urlAfterRedirects=D,this.state=R,this.shouldActivate=H,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Wo extends zr{constructor(C,m,D,R){super(C,m),this.urlAfterRedirects=D,this.state=R,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class as extends zr{constructor(C,m,D,R){super(C,m),this.urlAfterRedirects=D,this.state=R,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ao{constructor(C){this.route=C,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Js{constructor(C){this.route=C,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ro{constructor(C){this.snapshot=C,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Go{constructor(C){this.snapshot=C,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ls{constructor(C){this.snapshot=C,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class xs{constructor(C){this.snapshot=C,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class js{constructor(C,m,D){this.routerEvent=C,this.position=m,this.anchor=D,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}class yi{}class cs{constructor(C){this.url=C}}class ea{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Ti,this.attachRef=null}}let Ti=(()=>{class p{constructor(){this.contexts=new Map}onChildOutletCreated(m,D){const R=this.getOrCreateContext(m);R.outlet=D,this.contexts.set(m,R)}onChildOutletDestroyed(m){const D=this.getContext(m);D&&(D.outlet=null,D.attachRef=null)}onOutletDeactivated(){const m=this.contexts;return this.contexts=new Map,m}onOutletReAttached(m){this.contexts=m}getOrCreateContext(m){let D=this.getContext(m);return D||(D=new ea,this.contexts.set(m,D)),D}getContext(m){return this.contexts.get(m)||null}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();class Yo{constructor(C){this._root=C}get root(){return this._root.value}parent(C){const m=this.pathFromRoot(C);return m.length>1?m[m.length-2]:null}children(C){const m=sn(C,this._root);return m?m.children.map(D=>D.value):[]}firstChild(C){const m=sn(C,this._root);return m&&m.children.length>0?m.children[0].value:null}siblings(C){const m=Mi(C,this._root);return m.length<2?[]:m[m.length-2].children.map(R=>R.value).filter(R=>R!==C)}pathFromRoot(C){return Mi(C,this._root).map(m=>m.value)}}function sn(p,C){if(p===C.value)return C;for(const m of C.children){const D=sn(p,m);if(D)return D}return null}function Mi(p,C){if(p===C.value)return[C];for(const m of C.children){const D=Mi(p,m);if(D.length)return D.unshift(C),D}return[]}class qt{constructor(C,m){this.value=C,this.children=m}toString(){return`TreeNode(${this.value})`}}function ar(p){const C={};return p&&p.children.forEach(m=>C[m.value.outlet]=m),C}class Ko extends Yo{constructor(C,m){super(C),this.snapshot=m,ri(this,C)}toString(){return this.snapshot.toString()}}function mr(p,C){const m=function ta(p,C){const ae=new Gi([],{},{},"",{},Vt,C,null,{});return new vo("",new qt(ae,[]))}(0,C),D=new re.X([new Vr("",{})]),R=new re.X({}),H=new re.X({}),ae=new re.X({}),Ge=new re.X(""),We=new Jr(D,R,ae,Ge,H,Vt,C,m.root);return We.snapshot=m.root,new Ko(new qt(We,[]),m)}class Jr{constructor(C,m,D,R,H,ae,Ge,We){this.urlSubject=C,this.paramsSubject=m,this.queryParamsSubject=D,this.fragmentSubject=R,this.dataSubject=H,this.outlet=ae,this.component=Ge,this._futureSnapshot=We,this.title=this.dataSubject?.pipe((0,je.U)(mt=>mt[zi]))??(0,Z.of)(void 0),this.url=C,this.params=m,this.queryParams=D,this.fragment=R,this.data=H}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,je.U)(C=>Be(C)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,je.U)(C=>Be(C)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function vr(p,C,m="emptyOnly"){let D;const{routeConfig:R}=p;return D=null===C||"always"!==m&&""!==R?.path&&(C.component||C.routeConfig?.loadComponent)?{params:p.params,data:p.data,resolve:{...p.data,...p._resolvedData??{}}}:{params:{...C.params,...p.params},data:{...C.data,...p.data},resolve:{...p.data,...C.data,...R?.data,...p._resolvedData}},R&&zn(R)&&(D.resolve[zi]=R.title),D}class Gi{get title(){return this.data?.[zi]}constructor(C,m,D,R,H,ae,Ge,We,mt){this.url=C,this.params=m,this.queryParams=D,this.fragment=R,this.data=H,this.outlet=ae,this.component=Ge,this.routeConfig=We,this._resolve=mt}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Be(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Be(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(D=>D.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class vo extends Yo{constructor(C,m){super(m),this.url=C,ri(this,m)}toString(){return Ei(this._root)}}function ri(p,C){C.value._routerState=p,C.children.forEach(m=>ri(p,m))}function Ei(p){const C=p.children.length>0?` { ${p.children.map(Ei).join(", ")} } `:"";return`${p.value}${C}`}function _n(p){if(p.snapshot){const C=p.snapshot,m=p._futureSnapshot;p.snapshot=m,Zt(C.queryParams,m.queryParams)||p.queryParamsSubject.next(m.queryParams),C.fragment!==m.fragment&&p.fragmentSubject.next(m.fragment),Zt(C.params,m.params)||p.paramsSubject.next(m.params),function Io(p,C){if(p.length!==C.length)return!1;for(let m=0;m<p.length;++m)if(!Zt(p[m],C[m]))return!1;return!0}(C.url,m.url)||p.urlSubject.next(m.url),Zt(C.data,m.data)||p.dataSubject.next(m.data)}else p.snapshot=p._futureSnapshot,p.dataSubject.next(p._futureSnapshot.data)}function Po(p,C){const m=Zt(p.params,C.params)&&function Xr(p,C){return Ot(p,C)&&p.every((m,D)=>Zt(m.parameters,C[D].parameters))}(p.url,C.url);return m&&!(!p.parent!=!C.parent)&&(!p.parent||Po(p.parent,C.parent))}function zn(p){return"string"==typeof p.title||null===p.title}let Fo=(()=>{class p{constructor(){this.activated=null,this._activatedRoute=null,this.name=Vt,this.activateEvents=new _.vpe,this.deactivateEvents=new _.vpe,this.attachEvents=new _.vpe,this.detachEvents=new _.vpe,this.parentContexts=(0,_.f3M)(Ti),this.location=(0,_.f3M)(_.s_b),this.changeDetector=(0,_.f3M)(_.sBO),this.environmentInjector=(0,_.f3M)(_.lqb),this.inputBinder=(0,_.f3M)(lr,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(m){if(m.name){const{firstChange:D,previousValue:R}=m.name;if(D)return;this.isTrackedInParentContexts(R)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(R)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(m){return this.parentContexts.getContext(m)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;const m=this.parentContexts.getContext(this.name);m?.route&&(m.attachRef?this.attach(m.attachRef,m.route):this.activateWith(m.route,m.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new _.vHH(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new _.vHH(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new _.vHH(4012,!1);this.location.detach();const m=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(m.instance),m}attach(m,D){this.activated=m,this._activatedRoute=D,this.location.insert(m.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(m.instance)}deactivate(){if(this.activated){const m=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(m)}}activateWith(m,D){if(this.isActivated)throw new _.vHH(4013,!1);this._activatedRoute=m;const R=this.location,ae=m.snapshot.component,Ge=this.parentContexts.getOrCreateContext(this.name).children,We=new eo(m,Ge,R.injector);this.activated=R.createComponent(ae,{index:R.length,injector:We,environmentInjector:D??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275dir=_.lG2({type:p,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[_.TTD]})}return p})();class eo{constructor(C,m,D){this.route=C,this.childContexts=m,this.parent=D}get(C,m){return C===Jr?this.route:C===Ti?this.childContexts:this.parent.get(C,m)}}const lr=new _.OlP("");let Lo=(()=>{class p{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(m){this.unsubscribeFromRouteData(m),this.subscribeToRouteData(m)}unsubscribeFromRouteData(m){this.outletDataSubscriptions.get(m)?.unsubscribe(),this.outletDataSubscriptions.delete(m)}subscribeToRouteData(m){const{activatedRoute:D}=m,R=Re([D.queryParams,D.params,D.data]).pipe((0,et.w)(([H,ae,Ge],We)=>(Ge={...H,...ae,...Ge},0===We?(0,Z.of)(Ge):Promise.resolve(Ge)))).subscribe(H=>{if(!m.isActivated||!m.activatedComponentRef||m.activatedRoute!==D||null===D.component)return void this.unsubscribeFromRouteData(m);const ae=(0,_.qFp)(D.component);if(ae)for(const{templateName:Ge}of ae.inputs)m.activatedComponentRef.setInput(Ge,H[Ge]);else this.unsubscribeFromRouteData(m)});this.outletDataSubscriptions.set(m,R)}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac})}return p})();function Mr(p,C,m){if(m&&p.shouldReuseRoute(C.value,m.value.snapshot)){const D=m.value;D._futureSnapshot=C.value;const R=function Wr(p,C,m){return C.children.map(D=>{for(const R of m.children)if(p.shouldReuseRoute(D.value,R.value.snapshot))return Mr(p,D,R);return Mr(p,D)})}(p,C,m);return new qt(D,R)}{if(p.shouldAttach(C.value)){const H=p.retrieve(C.value);if(null!==H){const ae=H.route;return ae.value._futureSnapshot=C.value,ae.children=C.children.map(Ge=>Mr(p,Ge)),ae}}const D=function Is(p){return new Jr(new re.X(p.url),new re.X(p.params),new re.X(p.queryParams),new re.X(p.fragment),new re.X(p.data),p.outlet,p.component,p)}(C.value),R=C.children.map(H=>Mr(p,H));return new qt(D,R)}}const to="ngNavigationCancelingError";function Qi(p,C){const{redirectTo:m,navigationBehaviorOptions:D}=Ii(C)?{redirectTo:C,navigationBehaviorOptions:void 0}:C,R=na(!1,0,C);return R.url=m,R.navigationBehaviorOptions=D,R}function na(p,C,m){const D=new Error("NavigationCancelingError: "+(p||""));return D[to]=!0,D.cancellationCode=C,m&&(D.url=m),D}function Ts(p){return p&&p[to]}let us=(()=>{class p{static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275cmp=_.Xpm({type:p,selectors:[["ng-component"]],standalone:!0,features:[_.jDz],decls:1,vars:0,template:function(D,R){1&D&&_._UZ(0,"router-outlet")},dependencies:[Fo],encapsulation:2})}return p})();function $o(p){const C=p.children&&p.children.map($o),m=C?{...p,children:C}:{...p};return!m.component&&!m.loadComponent&&(C||m.loadChildren)&&m.outlet&&m.outlet!==Vt&&(m.component=us),m}function kr(p){return p.outlet||Vt}function yr(p){if(!p)return null;if(p.routeConfig?._injector)return p.routeConfig._injector;for(let C=p.parent;C;C=C.parent){const m=C.routeConfig;if(m?._loadedInjector)return m._loadedInjector;if(m?._injector)return m._injector}return null}class Hi{constructor(C,m,D,R,H){this.routeReuseStrategy=C,this.futureState=m,this.currState=D,this.forwardEvent=R,this.inputBindingEnabled=H}activate(C){const m=this.futureState._root,D=this.currState?this.currState._root:null;this.deactivateChildRoutes(m,D,C),_n(this.futureState.root),this.activateChildRoutes(m,D,C)}deactivateChildRoutes(C,m,D){const R=ar(m);C.children.forEach(H=>{const ae=H.value.outlet;this.deactivateRoutes(H,R[ae],D),delete R[ae]}),Object.values(R).forEach(H=>{this.deactivateRouteAndItsChildren(H,D)})}deactivateRoutes(C,m,D){const R=C.value,H=m?m.value:null;if(R===H)if(R.component){const ae=D.getContext(R.outlet);ae&&this.deactivateChildRoutes(C,m,ae.children)}else this.deactivateChildRoutes(C,m,D);else H&&this.deactivateRouteAndItsChildren(m,D)}deactivateRouteAndItsChildren(C,m){C.value.component&&this.routeReuseStrategy.shouldDetach(C.value.snapshot)?this.detachAndStoreRouteSubtree(C,m):this.deactivateRouteAndOutlet(C,m)}detachAndStoreRouteSubtree(C,m){const D=m.getContext(C.value.outlet),R=D&&C.value.component?D.children:m,H=ar(C);for(const ae of Object.keys(H))this.deactivateRouteAndItsChildren(H[ae],R);if(D&&D.outlet){const ae=D.outlet.detach(),Ge=D.children.onOutletDeactivated();this.routeReuseStrategy.store(C.value.snapshot,{componentRef:ae,route:C,contexts:Ge})}}deactivateRouteAndOutlet(C,m){const D=m.getContext(C.value.outlet),R=D&&C.value.component?D.children:m,H=ar(C);for(const ae of Object.keys(H))this.deactivateRouteAndItsChildren(H[ae],R);D&&(D.outlet&&(D.outlet.deactivate(),D.children.onOutletDeactivated()),D.attachRef=null,D.route=null)}activateChildRoutes(C,m,D){const R=ar(m);C.children.forEach(H=>{this.activateRoutes(H,R[H.value.outlet],D),this.forwardEvent(new xs(H.value.snapshot))}),C.children.length&&this.forwardEvent(new Go(C.value.snapshot))}activateRoutes(C,m,D){const R=C.value,H=m?m.value:null;if(_n(R),R===H)if(R.component){const ae=D.getOrCreateContext(R.outlet);this.activateChildRoutes(C,m,ae.children)}else this.activateChildRoutes(C,m,D);else if(R.component){const ae=D.getOrCreateContext(R.outlet);if(this.routeReuseStrategy.shouldAttach(R.snapshot)){const Ge=this.routeReuseStrategy.retrieve(R.snapshot);this.routeReuseStrategy.store(R.snapshot,null),ae.children.onOutletReAttached(Ge.contexts),ae.attachRef=Ge.componentRef,ae.route=Ge.route.value,ae.outlet&&ae.outlet.attach(Ge.componentRef,Ge.route.value),_n(Ge.route.value),this.activateChildRoutes(C,null,ae.children)}else{const Ge=yr(R.snapshot);ae.attachRef=null,ae.route=R,ae.injector=Ge,ae.outlet&&ae.outlet.activateWith(R,ae.injector),this.activateChildRoutes(C,null,ae.children)}}else this.activateChildRoutes(C,null,D)}}class Gr{constructor(C){this.path=C,this.route=this.path[this.path.length-1]}}class pi{constructor(C,m){this.component=C,this.route=m}}function ks(p,C,m){const D=p._root;return no(D,C?C._root:null,m,[D.value])}function ci(p,C){const m=Symbol(),D=C.get(p,m);return D===m?"function"!=typeof p||(0,_.Z0I)(p)?C.get(p):p:D}function no(p,C,m,D,R={canDeactivateChecks:[],canActivateChecks:[]}){const H=ar(C);return p.children.forEach(ae=>{(function No(p,C,m,D,R={canDeactivateChecks:[],canActivateChecks:[]}){const H=p.value,ae=C?C.value:null,Ge=m?m.getContext(p.value.outlet):null;if(ae&&H.routeConfig===ae.routeConfig){const We=function Yn(p,C,m){if("function"==typeof m)return m(p,C);switch(m){case"pathParamsChange":return!Ot(p.url,C.url);case"pathParamsOrQueryParamsChange":return!Ot(p.url,C.url)||!Zt(p.queryParams,C.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Po(p,C)||!Zt(p.queryParams,C.queryParams);default:return!Po(p,C)}}(ae,H,H.routeConfig.runGuardsAndResolvers);We?R.canActivateChecks.push(new Gr(D)):(H.data=ae.data,H._resolvedData=ae._resolvedData),no(p,C,H.component?Ge?Ge.children:null:m,D,R),We&&Ge&&Ge.outlet&&Ge.outlet.isActivated&&R.canDeactivateChecks.push(new pi(Ge.outlet.component,ae))}else ae&&pt(C,Ge,R),R.canActivateChecks.push(new Gr(D)),no(p,null,H.component?Ge?Ge.children:null:m,D,R)})(ae,H[ae.value.outlet],m,D.concat([ae.value]),R),delete H[ae.value.outlet]}),Object.entries(H).forEach(([ae,Ge])=>pt(Ge,m.getContext(ae),R)),R}function pt(p,C,m){const D=ar(p),R=p.value;Object.entries(D).forEach(([H,ae])=>{pt(ae,R.component?C?C.children.getContext(H):null:C,m)}),m.canDeactivateChecks.push(new pi(R.component&&C&&C.outlet&&C.outlet.isActivated?C.outlet.component:null,R))}function Yt(p){return"function"==typeof p}function $t(p){return p instanceof Te.K||"EmptyError"===p?.name}const qn=Symbol("INITIAL_VALUE");function Qo(){return(0,et.w)(p=>Re(p.map(C=>C.pipe((0,Dt.q)(1),function Ee(...p){const C=(0,$e.yG)(p);return(0,Oe.e)((m,D)=>{(C?(0,Ve.z)(p,m,C):(0,Ve.z)(p,m)).subscribe(D)})}(qn)))).pipe((0,je.U)(C=>{for(const m of C)if(!0!==m){if(m===qn)return qn;if(!1===m||m instanceof Fi)return m}return!0}),(0,Ye.h)(C=>C!==qn),(0,Dt.q)(1)))}function me(p){return(0,he.z)((0,Pt.b)(C=>{if(Ii(C))throw Qi(0,C)}),(0,je.U)(C=>!0===C))}class Ne{constructor(C){this.segmentGroup=C||null}}class He extends Error{constructor(C){super(),this.urlTree=C}}function Pe(p){return(0,xe._)(new Ne(p))}class vt{constructor(C,m){this.urlSerializer=C,this.urlTree=m}noMatchError(C){return new _.vHH(4002,!1)}lineralizeSegments(C,m){let D=[],R=m.root;for(;;){if(D=D.concat(R.segments),0===R.numberOfChildren)return(0,Z.of)(D);if(R.numberOfChildren>1||!R.children[Vt])return(0,xe._)(new _.vHH(4e3,!1));R=R.children[Vt]}}applyRedirectCommands(C,m,D){const R=this.applyRedirectCreateUrlTree(m,this.urlSerializer.parse(m),C,D);if(m.startsWith("/"))throw new He(R);return R}applyRedirectCreateUrlTree(C,m,D,R){const H=this.createSegmentGroup(C,m.root,D,R);return new Fi(H,this.createQueryParams(m.queryParams,this.urlTree.queryParams),m.fragment)}createQueryParams(C,m){const D={};return Object.entries(C).forEach(([R,H])=>{if("string"==typeof H&&H.startsWith(":")){const Ge=H.substring(1);D[R]=m[Ge]}else D[R]=H}),D}createSegmentGroup(C,m,D,R){const H=this.createSegments(C,m.segments,D,R);let ae={};return Object.entries(m.children).forEach(([Ge,We])=>{ae[Ge]=this.createSegmentGroup(C,We,D,R)}),new mn(H,ae)}createSegments(C,m,D,R){return m.map(H=>H.path.startsWith(":")?this.findPosParam(C,H,R):this.findOrReturn(H,D))}findPosParam(C,m,D){const R=D[m.path.substring(1)];if(!R)throw new _.vHH(4001,!1);return R}findOrReturn(C,m){let D=0;for(const R of m){if(R.path===C.path)return m.splice(D),R;D++}return C}}const Qe={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Xe(p,C,m,D,R){const H=ft(p,C,m);return H.matched?(D=function Ms(p,C){return p.providers&&!p._injector&&(p._injector=(0,_.MMx)(p.providers,C,`Route: ${p.path}`)),p._injector??C}(C,D),function Ie(p,C,m,D){const R=C.canMatch;if(!R||0===R.length)return(0,Z.of)(!0);const H=R.map(ae=>{const Ge=ci(ae,p);return Pn(function Nn(p){return p&&Yt(p.canMatch)}(Ge)?Ge.canMatch(C,m):p.runInContext(()=>Ge(C,m)))});return(0,Z.of)(H).pipe(Qo(),me())}(D,C,m).pipe((0,je.U)(ae=>!0===ae?H:{...Qe}))):(0,Z.of)(H)}function ft(p,C,m){if(""===C.path)return"full"===C.pathMatch&&(p.hasChildren()||m.length>0)?{...Qe}:{matched:!0,consumedSegments:[],remainingSegments:m,parameters:{},positionalParamSegments:{}};const R=(C.matcher||wt)(m,p,C);if(!R)return{...Qe};const H={};Object.entries(R.posParams??{}).forEach(([Ge,We])=>{H[Ge]=We.path});const ae=R.consumed.length>0?{...H,...R.consumed[R.consumed.length-1].parameters}:H;return{matched:!0,consumedSegments:R.consumed,remainingSegments:m.slice(R.consumed.length),parameters:ae,positionalParamSegments:R.posParams??{}}}function Ft(p,C,m,D){return m.length>0&&function yt(p,C,m){return m.some(D=>xt(p,C,D)&&kr(D)!==Vt)}(p,m,D)?{segmentGroup:new mn(C,It(D,new mn(m,p.children))),slicedSegments:[]}:0===m.length&&function cn(p,C,m){return m.some(D=>xt(p,C,D))}(p,m,D)?{segmentGroup:new mn(p.segments,kt(p,0,m,D,p.children)),slicedSegments:m}:{segmentGroup:new mn(p.segments,p.children),slicedSegments:m}}function kt(p,C,m,D,R){const H={};for(const ae of D)if(xt(p,m,ae)&&!R[kr(ae)]){const Ge=new mn([],{});H[kr(ae)]=Ge}return{...R,...H}}function It(p,C){const m={};m[Vt]=C;for(const D of p)if(""===D.path&&kr(D)!==Vt){const R=new mn([],{});m[kr(D)]=R}return m}function xt(p,C,m){return(!(p.hasChildren()||C.length>0)||"full"!==m.pathMatch)&&""===m.path}class w{}class F{constructor(C,m,D,R,H,ae,Ge){this.injector=C,this.configLoader=m,this.rootComponentType=D,this.config=R,this.urlTree=H,this.paramsInheritanceStrategy=ae,this.urlSerializer=Ge,this.applyRedirects=new vt(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(C){return new _.vHH(4002,!1)}recognize(){const C=Ft(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(C).pipe((0,je.U)(m=>{const D=new Gi([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Vt,this.rootComponentType,null,{}),R=new qt(D,m),H=new vo("",R),ae=function os(p,C,m=null,D=null){return ss(Fn(p),C,m,D)}(D,[],this.urlTree.queryParams,this.urlTree.fragment);return ae.queryParams=this.urlTree.queryParams,H.url=this.urlSerializer.serialize(ae),this.inheritParamsAndData(H._root,null),{state:H,tree:ae}}))}match(C){return this.processSegmentGroup(this.injector,this.config,C,Vt).pipe(Hn(D=>{if(D instanceof He)return this.urlTree=D.urlTree,this.match(D.urlTree.root);throw D instanceof Ne?this.noMatchError(D):D}))}inheritParamsAndData(C,m){const D=C.value,R=vr(D,m,this.paramsInheritanceStrategy);D.params=Object.freeze(R.params),D.data=Object.freeze(R.data),C.children.forEach(H=>this.inheritParamsAndData(H,D))}processSegmentGroup(C,m,D,R){return 0===D.segments.length&&D.hasChildren()?this.processChildren(C,m,D):this.processSegment(C,m,D,D.segments,R,!0).pipe((0,je.U)(H=>H instanceof qt?[H]:[]))}processChildren(C,m,D){const R=[];for(const H of Object.keys(D.children))"primary"===H?R.unshift(H):R.push(H);return(0,U.D)(R).pipe(hi(H=>{const ae=D.children[H],Ge=function zs(p,C){const m=p.filter(D=>kr(D)===C);return m.push(...p.filter(D=>kr(D)!==C)),m}(m,H);return this.processSegmentGroup(C,Ge,ae,H)}),function Gn(p,C){return(0,Oe.e)(function Rn(p,C,m,D,R){return(H,ae)=>{let Ge=m,We=C,mt=0;H.subscribe((0,ve.x)(ae,Jt=>{const jt=mt++;We=Ge?p(We,Jt,jt):(Ge=!0,Jt),D&&ae.next(We)},R&&(()=>{Ge&&ae.next(We),ae.complete()})))}}(p,C,arguments.length>=2,!0))}((H,ae)=>(H.push(...ae),H)),ht(null),function ni(p,C){const m=arguments.length>=2;return D=>D.pipe(p?(0,Ye.h)((R,H)=>p(R,H,D)):ee.y,vi(1),m?ht(C):dt(()=>new Te.K))}(),(0,Ke.z)(H=>{if(null===H)return Pe(D);const ae=ot(H);return function se(p){p.sort((C,m)=>C.value.outlet===Vt?-1:m.value.outlet===Vt?1:C.value.outlet.localeCompare(m.value.outlet))}(ae),(0,Z.of)(ae)}))}processSegment(C,m,D,R,H,ae){return(0,U.D)(m).pipe(hi(Ge=>this.processSegmentAgainstRoute(Ge._injector??C,m,Ge,D,R,H,ae).pipe(Hn(We=>{if(We instanceof Ne)return(0,Z.of)(null);throw We}))),fn(Ge=>!!Ge),Hn(Ge=>{if($t(Ge))return function Bn(p,C,m){return 0===C.length&&!p.children[m]}(D,R,H)?(0,Z.of)(new w):Pe(D);throw Ge}))}processSegmentAgainstRoute(C,m,D,R,H,ae,Ge){return function ei(p,C,m,D){return!!(kr(p)===D||D!==Vt&&xt(C,m,p))&&("**"===p.path||ft(C,p,m).matched)}(D,R,H,ae)?void 0===D.redirectTo?this.matchSegmentAgainstRoute(C,R,D,H,ae):this.allowRedirects&&Ge?this.expandSegmentAgainstRouteUsingRedirect(C,R,m,D,H,ae):Pe(R):Pe(R)}expandSegmentAgainstRouteUsingRedirect(C,m,D,R,H,ae){const{matched:Ge,consumedSegments:We,positionalParamSegments:mt,remainingSegments:Jt}="**"===R.path?Un(H):ft(m,R,H);if(!Ge)return Pe(m);R.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>31&&(this.allowRedirects=!1));const jt=this.applyRedirects.applyRedirectCommands(We,R.redirectTo,mt);return this.applyRedirects.lineralizeSegments(R,jt).pipe((0,Ke.z)(Ji=>this.processSegment(C,D,m,Ji.concat(Jt),ae,!1)))}matchSegmentAgainstRoute(C,m,D,R,H){let ae;return"**"===D.path?(ae=(0,Z.of)(Un(R)),m.children={}):ae=Xe(m,D,R,C),ae.pipe((0,et.w)(Ge=>Ge.matched?this.getChildConfig(C=D._injector??C,D,R).pipe((0,et.w)(({routes:We})=>{const mt=D._loadedInjector??C,{consumedSegments:Jt,remainingSegments:jt,parameters:Ji}=Ge,sc=new Gi(Jt,Ji,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,function Vn(p){return p.data||{}}(D),kr(D),D.component??D._loadedComponent??null,D,function ui(p){return p.resolve||{}}(D)),{segmentGroup:ac,slicedSegments:lc}=Ft(m,Jt,jt,We);if(0===lc.length&&ac.hasChildren())return this.processChildren(mt,We,ac).pipe((0,je.U)(Ea=>null===Ea?null:new qt(sc,Ea)));if(0===We.length&&0===lc.length)return(0,Z.of)(new qt(sc,[]));const cu=kr(D)===H;return this.processSegment(mt,We,ac,lc,cu?Vt:H,!0).pipe((0,je.U)(Ea=>new qt(sc,Ea instanceof qt?[Ea]:[])))})):Pe(m)))}getChildConfig(C,m,D){return m.children?(0,Z.of)({routes:m.children,injector:C}):m.loadChildren?void 0!==m._loadedRoutes?(0,Z.of)({routes:m._loadedRoutes,injector:m._loadedInjector}):function De(p,C,m,D){const R=C.canLoad;if(void 0===R||0===R.length)return(0,Z.of)(!0);const H=R.map(ae=>{const Ge=ci(ae,p);return Pn(function $i(p){return p&&Yt(p.canLoad)}(Ge)?Ge.canLoad(C,m):p.runInContext(()=>Ge(C,m)))});return(0,Z.of)(H).pipe(Qo(),me())}(C,m,D).pipe((0,Ke.z)(R=>R?this.configLoader.loadChildren(C,m).pipe((0,Pt.b)(H=>{m._loadedRoutes=H.routes,m._loadedInjector=H.injector})):function it(p){return(0,xe._)(na(!1,3))}())):(0,Z.of)({routes:[],injector:C})}}function Ue(p){const C=p.value.routeConfig;return C&&""===C.path}function ot(p){const C=[],m=new Set;for(const D of p){if(!Ue(D)){C.push(D);continue}const R=C.find(H=>D.value.routeConfig===H.value.routeConfig);void 0!==R?(R.children.push(...D.children),m.add(R)):C.push(D)}for(const D of m){const R=ot(D.children);C.push(new qt(D.value,R))}return C.filter(D=>!m.has(D))}function Un(p){return{matched:!0,parameters:p.length>0?lo(p).parameters:{},consumedSegments:p,remainingSegments:[],positionalParamSegments:{}}}function xi(p,C){return(0,Ke.z)(m=>{const{targetSnapshot:D,guards:{canActivateChecks:R}}=m;if(!R.length)return(0,Z.of)(m);const H=R.map(mt=>mt.route),ae=new Set(H),Ge=an(H[0].parent).slice(1);let We=0;return(0,U.D)(Ge).pipe(hi(mt=>ae.has(mt)?function ki(p,C,m,D){const R=p.routeConfig,H=p._resolve;return void 0!==R?.title&&!zn(R)&&(H[zi]=R.title),function fs(p,C,m,D){const R=Sr(p);if(0===R.length)return(0,Z.of)({});const H={};return(0,U.D)(R).pipe((0,Ke.z)(ae=>function Zr(p,C,m,D){const R=yr(C)??D,H=ci(p,R);return Pn(H.resolve?H.resolve(C,m):R.runInContext(()=>H(C,m)))}(p[ae],C,m,D).pipe(fn(),(0,Pt.b)(Ge=>{H[ae]=Ge}))),vi(1),(0,Bt.h)(H),Hn(ae=>$t(ae)?ze.E:(0,xe._)(ae)))}(H,p,C,D).pipe((0,je.U)(ae=>(p._resolvedData=ae,p.data=vr(p,p.parent,m).resolve,null)))}(mt,D,p,C):(mt.data=vr(mt,mt.parent,p).resolve,(0,Z.of)(void 0))),(0,Pt.b)(()=>We++),vi(1),(0,Ke.z)(mt=>We===Ge.length?(0,Z.of)(m):ze.E))})}function an(p){const C=p.children.map(m=>an(m)).flat();return[p,...C]}function wo(p){return(0,et.w)(C=>{const m=p(C);return m?(0,U.D)(m).pipe((0,je.U)(()=>C)):(0,Z.of)(C)})}let Or=(()=>{class p{buildTitle(m){let D,R=m.root;for(;void 0!==R;)D=this.getResolvedTitleForRoute(R)??D,R=R.children.find(H=>H.outlet===Vt);return D}getResolvedTitleForRoute(m){return m.data[zi]}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:()=>(0,_.f3M)(ps),providedIn:"root"})}return p})(),ps=(()=>{class p extends Or{constructor(m){super(),this.title=m}updateTitle(m){const D=this.buildTitle(m);void 0!==D&&this.title.setTitle(D)}static#e=this.\u0275fac=function(D){return new(D||p)(_.LFG(Nr.Dx))};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();const io=new _.OlP("",{providedIn:"root",factory:()=>({})}),oi=new _.OlP("ROUTES");let sl=(()=>{class p{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=(0,_.f3M)(_.Sil)}loadComponent(m){if(this.componentLoaders.get(m))return this.componentLoaders.get(m);if(m._loadedComponent)return(0,Z.of)(m._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(m);const D=Pn(m.loadComponent()).pipe((0,je.U)(ou),(0,Pt.b)(H=>{this.onLoadEndListener&&this.onLoadEndListener(m),m._loadedComponent=H}),nr(()=>{this.componentLoaders.delete(m)})),R=new le.c(D,()=>new ue.x).pipe((0,Er.x)());return this.componentLoaders.set(m,R),R}loadChildren(m,D){if(this.childrenLoaders.get(D))return this.childrenLoaders.get(D);if(D._loadedRoutes)return(0,Z.of)({routes:D._loadedRoutes,injector:D._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(D);const H=function al(p,C,m,D){return Pn(p.loadChildren()).pipe((0,je.U)(ou),(0,Ke.z)(R=>R instanceof _.YKP||Array.isArray(R)?(0,Z.of)(R):(0,U.D)(C.compileModuleAsync(R))),(0,je.U)(R=>{D&&D(p);let H,ae,Ge=!1;return Array.isArray(R)?(ae=R,!0):(H=R.create(m).injector,ae=H.get(oi,[],{optional:!0,self:!0}).flat()),{routes:ae.map($o),injector:H}}))}(D,this.compiler,m,this.onLoadEndListener).pipe(nr(()=>{this.childrenLoaders.delete(D)})),ae=new le.c(H,()=>new ue.x).pipe((0,Er.x)());return this.childrenLoaders.set(D,ae),ae}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();function ou(p){return function wa(p){return p&&"object"==typeof p&&"default"in p}(p)?p.default:p}let oa=(()=>{class p{static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:()=>(0,_.f3M)(Zl),providedIn:"root"})}return p})(),Zl=(()=>{class p{shouldProcessUrl(m){return!0}extract(m){return m}merge(m,D){return m}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();const Yl=new _.OlP(""),su=new _.OlP("");function Kl(p,C,m){const D=p.get(su),R=p.get(ce.K0);return p.get(_.R0b).runOutsideAngular(()=>{if(!R.startViewTransition||D.skipNextTransition)return D.skipNextTransition=!1,Promise.resolve();let H;const ae=new Promise(mt=>{H=mt}),Ge=R.startViewTransition(()=>(H(),function ll(p){return new Promise(C=>{(0,_.T8G)(C,{injector:p})})}(p))),{onViewTransitionCreated:We}=D;return We&&(0,_.r_H)(p,()=>We({transition:Ge,from:C,to:m})),ae})}let _o=(()=>{class p{get hasRequestedNavigation(){return 0!==this.navigationId}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new ue.x,this.transitionAbortSubject=new ue.x,this.configLoader=(0,_.f3M)(sl),this.environmentInjector=(0,_.f3M)(_.lqb),this.urlSerializer=(0,_.f3M)(tt),this.rootContexts=(0,_.f3M)(Ti),this.location=(0,_.f3M)(ce.Ye),this.inputBindingEnabled=null!==(0,_.f3M)(lr,{optional:!0}),this.titleStrategy=(0,_.f3M)(Or),this.options=(0,_.f3M)(io,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=(0,_.f3M)(oa),this.createViewTransition=(0,_.f3M)(Yl,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>(0,Z.of)(void 0),this.rootComponentType=null,this.configLoader.onLoadEndListener=R=>this.events.next(new Js(R)),this.configLoader.onLoadStartListener=R=>this.events.next(new Ao(R))}complete(){this.transitions?.complete()}handleNavigationRequest(m){const D=++this.navigationId;this.transitions?.next({...this.transitions.value,...m,id:D})}setupNavigations(m,D,R){return this.transitions=new re.X({id:0,currentUrlTree:D,currentRawUrl:D,extractedUrl:this.urlHandlingStrategy.extract(D),urlAfterRedirects:this.urlHandlingStrategy.extract(D),rawUrl:D,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Oo,restoredState:null,currentSnapshot:R.snapshot,targetSnapshot:null,currentRouterState:R,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe((0,Ye.h)(H=>0!==H.id),(0,je.U)(H=>({...H,extractedUrl:this.urlHandlingStrategy.extract(H.rawUrl)})),(0,et.w)(H=>{this.currentTransition=H;let ae=!1,Ge=!1;return(0,Z.of)(H).pipe((0,Pt.b)(We=>{this.currentNavigation={id:We.id,initialUrl:We.rawUrl,extractedUrl:We.extractedUrl,trigger:We.source,extras:We.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),(0,et.w)(We=>{const mt=!m.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl();if(!mt&&"reload"!==(We.extras.onSameUrlNavigation??m.onSameUrlNavigation)){const jt="";return this.events.next(new Tr(We.id,this.urlSerializer.serialize(We.rawUrl),jt,0)),We.resolve(null),ze.E}if(this.urlHandlingStrategy.shouldProcessUrl(We.rawUrl))return(0,Z.of)(We).pipe((0,et.w)(jt=>{const Ji=this.transitions?.getValue();return this.events.next(new on(jt.id,this.urlSerializer.serialize(jt.extractedUrl),jt.source,jt.restoredState)),Ji!==this.transitions?.getValue()?ze.E:Promise.resolve(jt)}),function vn(p,C,m,D,R,H){return(0,Ke.z)(ae=>function B(p,C,m,D,R,H,ae="emptyOnly"){return new F(p,C,m,D,R,ae,H).recognize()}(p,C,m,D,ae.extractedUrl,R,H).pipe((0,je.U)(({state:Ge,tree:We})=>({...ae,targetSnapshot:Ge,urlAfterRedirects:We}))))}(this.environmentInjector,this.configLoader,this.rootComponentType,m.config,this.urlSerializer,this.paramsInheritanceStrategy),(0,Pt.b)(jt=>{H.targetSnapshot=jt.targetSnapshot,H.urlAfterRedirects=jt.urlAfterRedirects,this.currentNavigation={...this.currentNavigation,finalUrl:jt.urlAfterRedirects};const Ji=new Ss(jt.id,this.urlSerializer.serialize(jt.extractedUrl),this.urlSerializer.serialize(jt.urlAfterRedirects),jt.targetSnapshot);this.events.next(Ji)}));if(mt&&this.urlHandlingStrategy.shouldProcessUrl(We.currentRawUrl)){const{id:jt,extractedUrl:Ji,source:sc,restoredState:ac,extras:lc}=We,cu=new on(jt,this.urlSerializer.serialize(Ji),sc,ac);this.events.next(cu);const Ea=mr(0,this.rootComponentType).snapshot;return this.currentTransition=H={...We,targetSnapshot:Ea,urlAfterRedirects:Ji,extras:{...lc,skipLocationChange:!1,replaceUrl:!1}},this.currentNavigation.finalUrl=Ji,(0,Z.of)(H)}{const jt="";return this.events.next(new Tr(We.id,this.urlSerializer.serialize(We.extractedUrl),jt,1)),We.resolve(null),ze.E}}),(0,Pt.b)(We=>{const mt=new mo(We.id,this.urlSerializer.serialize(We.extractedUrl),this.urlSerializer.serialize(We.urlAfterRedirects),We.targetSnapshot);this.events.next(mt)}),(0,je.U)(We=>(this.currentTransition=H={...We,guards:ks(We.targetSnapshot,We.currentSnapshot,this.rootContexts)},H)),function hs(p,C){return(0,Ke.z)(m=>{const{targetSnapshot:D,currentSnapshot:R,guards:{canActivateChecks:H,canDeactivateChecks:ae}}=m;return 0===ae.length&&0===H.length?(0,Z.of)({...m,guardsResult:!0}):function b(p,C,m,D){return(0,U.D)(p).pipe((0,Ke.z)(R=>function te(p,C,m,D,R){const H=C&&C.routeConfig?C.routeConfig.canDeactivate:null;if(!H||0===H.length)return(0,Z.of)(!0);const ae=H.map(Ge=>{const We=yr(C)??R,mt=ci(Ge,We);return Pn(function qo(p){return p&&Yt(p.canDeactivate)}(mt)?mt.canDeactivate(p,C,m,D):We.runInContext(()=>mt(p,C,m,D))).pipe(fn())});return(0,Z.of)(ae).pipe(Qo())}(R.component,R.route,m,C,D)),fn(R=>!0!==R,!0))}(ae,D,R,p).pipe((0,Ke.z)(Ge=>Ge&&function Kn(p){return"boolean"==typeof p}(Ge)?function g(p,C,m,D){return(0,U.D)(C).pipe(hi(R=>(0,Ve.z)(function A(p,C){return null!==p&&C&&C(new Ro(p)),(0,Z.of)(!0)}(R.route.parent,D),function I(p,C){return null!==p&&C&&C(new ls(p)),(0,Z.of)(!0)}(R.route,D),function X(p,C,m){const D=C[C.length-1],H=C.slice(0,C.length-1).reverse().map(ae=>function Mn(p){const C=p.routeConfig?p.routeConfig.canActivateChild:null;return C&&0!==C.length?{node:p,guards:C}:null}(ae)).filter(ae=>null!==ae).map(ae=>(0,ie.P)(()=>{const Ge=ae.guards.map(We=>{const mt=yr(ae.node)??m,Jt=ci(We,mt);return Pn(function br(p){return p&&Yt(p.canActivateChild)}(Jt)?Jt.canActivateChild(D,p):mt.runInContext(()=>Jt(D,p))).pipe(fn())});return(0,Z.of)(Ge).pipe(Qo())}));return(0,Z.of)(H).pipe(Qo())}(p,R.path,m),function N(p,C,m){const D=C.routeConfig?C.routeConfig.canActivate:null;if(!D||0===D.length)return(0,Z.of)(!0);const R=D.map(H=>(0,ie.P)(()=>{const ae=yr(C)??m,Ge=ci(H,ae);return Pn(function Si(p){return p&&Yt(p.canActivate)}(Ge)?Ge.canActivate(C,p):ae.runInContext(()=>Ge(C,p))).pipe(fn())}));return(0,Z.of)(R).pipe(Qo())}(p,R.route,m))),fn(R=>!0!==R,!0))}(D,H,p,C):(0,Z.of)(Ge)),(0,je.U)(Ge=>({...m,guardsResult:Ge})))})}(this.environmentInjector,We=>this.events.next(We)),(0,Pt.b)(We=>{if(H.guardsResult=We.guardsResult,Ii(We.guardsResult))throw Qi(0,We.guardsResult);const mt=new sr(We.id,this.urlSerializer.serialize(We.extractedUrl),this.urlSerializer.serialize(We.urlAfterRedirects),We.targetSnapshot,!!We.guardsResult);this.events.next(mt)}),(0,Ye.h)(We=>!!We.guardsResult||(this.cancelNavigationTransition(We,"",3),!1)),wo(We=>{if(We.guards.canActivateChecks.length)return(0,Z.of)(We).pipe((0,Pt.b)(mt=>{const Jt=new Wo(mt.id,this.urlSerializer.serialize(mt.extractedUrl),this.urlSerializer.serialize(mt.urlAfterRedirects),mt.targetSnapshot);this.events.next(Jt)}),(0,et.w)(mt=>{let Jt=!1;return(0,Z.of)(mt).pipe(xi(this.paramsInheritanceStrategy,this.environmentInjector),(0,Pt.b)({next:()=>Jt=!0,complete:()=>{Jt||this.cancelNavigationTransition(mt,"",2)}}))}),(0,Pt.b)(mt=>{const Jt=new as(mt.id,this.urlSerializer.serialize(mt.extractedUrl),this.urlSerializer.serialize(mt.urlAfterRedirects),mt.targetSnapshot);this.events.next(Jt)}))}),wo(We=>{const mt=Jt=>{const jt=[];Jt.routeConfig?.loadComponent&&!Jt.routeConfig._loadedComponent&&jt.push(this.configLoader.loadComponent(Jt.routeConfig).pipe((0,Pt.b)(Ji=>{Jt.component=Ji}),(0,je.U)(()=>{})));for(const Ji of Jt.children)jt.push(...mt(Ji));return jt};return Re(mt(We.targetSnapshot.root)).pipe(ht(),(0,Dt.q)(1))}),wo(()=>this.afterPreactivation()),(0,et.w)(()=>{const{currentSnapshot:We,targetSnapshot:mt}=H,Jt=this.createViewTransition?.(this.environmentInjector,We.root,mt.root);return Jt?(0,U.D)(Jt).pipe((0,je.U)(()=>H)):(0,Z.of)(H)}),(0,je.U)(We=>{const mt=function yo(p,C,m){const D=Mr(p,C._root,m?m._root:void 0);return new Ko(D,C)}(m.routeReuseStrategy,We.targetSnapshot,We.currentRouterState);return this.currentTransition=H={...We,targetRouterState:mt},this.currentNavigation.targetRouterState=mt,H}),(0,Pt.b)(()=>{this.events.next(new yi)}),((p,C,m,D)=>(0,je.U)(R=>(new Hi(C,R.targetRouterState,R.currentRouterState,m,D).activate(p),R)))(this.rootContexts,m.routeReuseStrategy,We=>this.events.next(We),this.inputBindingEnabled),(0,Dt.q)(1),(0,Pt.b)({next:We=>{ae=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new $n(We.id,this.urlSerializer.serialize(We.extractedUrl),this.urlSerializer.serialize(We.urlAfterRedirects))),this.titleStrategy?.updateTitle(We.targetRouterState.snapshot),We.resolve(!0)},complete:()=>{ae=!0}}),(0,On.R)(this.transitionAbortSubject.pipe((0,Pt.b)(We=>{throw We}))),nr(()=>{ae||Ge||this.cancelNavigationTransition(H,"",1),this.currentNavigation?.id===H.id&&(this.currentNavigation=null)}),Hn(We=>{if(Ge=!0,Ts(We))this.events.next(new Ir(H.id,this.urlSerializer.serialize(H.extractedUrl),We.message,We.cancellationCode)),function bo(p){return Ts(p)&&Ii(p.url)}(We)?this.events.next(new cs(We.url)):H.resolve(!1);else{this.events.next(new gr(H.id,this.urlSerializer.serialize(H.extractedUrl),We,H.targetSnapshot??void 0));try{H.resolve(m.errorHandler(We))}catch(mt){H.reject(mt)}}return ze.E}))}))}cancelNavigationTransition(m,D,R){const H=new Ir(m.id,this.urlSerializer.serialize(m.extractedUrl),D,R);this.events.next(H),m.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();function Na(p){return p!==Oo}let au=(()=>{class p{static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:()=>(0,_.f3M)(sa),providedIn:"root"})}return p})();class si{shouldDetach(C){return!1}store(C,m){}shouldAttach(C){return!1}retrieve(C){return null}shouldReuseRoute(C,m){return C.routeConfig===m.routeConfig}}let sa=(()=>{class p extends si{static#e=this.\u0275fac=(()=>{let m;return function(R){return(m||(m=_.n5z(p)))(R||p)}})();static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),_a=(()=>{class p{static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:()=>(0,_.f3M)(Yr),providedIn:"root"})}return p})(),Yr=(()=>{class p extends _a{constructor(){super(...arguments),this.location=(0,_.f3M)(ce.Ye),this.urlSerializer=(0,_.f3M)(tt),this.options=(0,_.f3M)(io,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=(0,_.f3M)(oa),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Fi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=mr(0,null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return"computed"!==this.canceledNavigationResolution?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(m){return this.location.subscribe(D=>{"popstate"===D.type&&m(D.url,D.state)})}handleRouterEvent(m,D){if(m instanceof on)this.stateMemento=this.createStateMemento();else if(m instanceof Tr)this.rawUrlTree=D.initialUrl;else if(m instanceof Ss){if("eager"===this.urlUpdateStrategy&&!D.extras.skipLocationChange){const R=this.urlHandlingStrategy.merge(D.finalUrl,D.initialUrl);this.setBrowserUrl(R,D)}}else m instanceof yi?(this.currentUrlTree=D.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(D.finalUrl,D.initialUrl),this.routerState=D.targetRouterState,"deferred"===this.urlUpdateStrategy&&(D.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,D))):m instanceof Ir&&(3===m.code||2===m.code)?this.restoreHistory(D):m instanceof gr?this.restoreHistory(D,!0):m instanceof $n&&(this.lastSuccessfulId=m.id,this.currentPageId=this.browserPageId)}setBrowserUrl(m,D){const R=this.urlSerializer.serialize(m);if(this.location.isCurrentPathEqualTo(R)||D.extras.replaceUrl){const ae={...D.extras.state,...this.generateNgRouterState(D.id,this.browserPageId)};this.location.replaceState(R,"",ae)}else{const H={...D.extras.state,...this.generateNgRouterState(D.id,this.browserPageId+1)};this.location.go(R,"",H)}}restoreHistory(m,D=!1){if("computed"===this.canceledNavigationResolution){const H=this.currentPageId-this.browserPageId;0!==H?this.location.historyGo(H):this.currentUrlTree===m.finalUrl&&0===H&&(this.resetState(m),this.resetUrlToCurrentUrlTree())}else"replace"===this.canceledNavigationResolution&&(D&&this.resetState(m),this.resetUrlToCurrentUrlTree())}resetState(m){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,m.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(m,D){return"computed"===this.canceledNavigationResolution?{navigationId:m,\u0275routerPageId:D}:{navigationId:m}}static#e=this.\u0275fac=(()=>{let m;return function(R){return(m||(m=_.n5z(p)))(R||p)}})();static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();var Os=function(p){return p[p.COMPLETE=0]="COMPLETE",p[p.FAILED=1]="FAILED",p[p.REDIRECTING=2]="REDIRECTING",p}(Os||{});function Ws(p,C){p.events.pipe((0,Ye.h)(m=>m instanceof $n||m instanceof Ir||m instanceof gr||m instanceof Tr),(0,je.U)(m=>m instanceof $n||m instanceof Tr?Os.COMPLETE:m instanceof Ir&&(0===m.code||1===m.code)?Os.REDIRECTING:Os.FAILED),(0,Ye.h)(m=>m!==Os.REDIRECTING),(0,Dt.q)(1)).subscribe(()=>{C()})}function Ca(p){throw p}const Co={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},jh={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let ro=(()=>{class p{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=(0,_.f3M)(_.c2e),this.stateManager=(0,_.f3M)(_a),this.options=(0,_.f3M)(io,{optional:!0})||{},this.pendingTasks=(0,_.f3M)(_.HDt),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=(0,_.f3M)(_o),this.urlSerializer=(0,_.f3M)(tt),this.location=(0,_.f3M)(ce.Ye),this.urlHandlingStrategy=(0,_.f3M)(oa),this._events=new ue.x,this.errorHandler=this.options.errorHandler||Ca,this.navigated=!1,this.routeReuseStrategy=(0,_.f3M)(au),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=(0,_.f3M)(oi,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!(0,_.f3M)(lr,{optional:!0}),this.eventsSubscription=new W.w0,this.isNgZoneEnabled=(0,_.f3M)(_.R0b)instanceof _.R0b&&_.R0b.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:m=>{this.console.warn(m)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){const m=this.navigationTransitions.events.subscribe(D=>{try{const R=this.navigationTransitions.currentTransition,H=this.navigationTransitions.currentNavigation;if(null!==R&&null!==H)if(this.stateManager.handleRouterEvent(D,H),D instanceof Ir&&0!==D.code&&1!==D.code)this.navigated=!0;else if(D instanceof $n)this.navigated=!0;else if(D instanceof cs){const ae=this.urlHandlingStrategy.merge(D.url,R.currentRawUrl),Ge={skipLocationChange:R.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||Na(R.source)};this.scheduleNavigation(ae,Oo,null,Ge,{resolve:R.resolve,reject:R.reject,promise:R.promise})}(function Do(p){return!(p instanceof yi||p instanceof cs)})(D)&&this._events.next(D)}catch(R){this.navigationTransitions.transitionAbortSubject.next(R)}});this.eventsSubscription.add(m)}resetRootComponentType(m){this.routerState.root.component=m,this.navigationTransitions.rootComponentType=m}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Oo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription||(this.nonRouterCurrentEntryChangeSubscription=this.stateManager.registerNonRouterCurrentEntryChangeListener((m,D)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(m,"popstate",D)},0)}))}navigateToSyncWithBrowser(m,D,R){const H={replaceUrl:!0},ae=R?.navigationId?R:null;if(R){const We={...R};delete We.navigationId,delete We.\u0275routerPageId,0!==Object.keys(We).length&&(H.state=We)}const Ge=this.parseUrl(m);this.scheduleNavigation(Ge,D,ae,H)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(m){this.config=m.map($o),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(m,D={}){const{relativeTo:R,queryParams:H,fragment:ae,queryParamsHandling:Ge,preserveFragment:We}=D,mt=We?this.currentUrlTree.fragment:ae;let jt,Jt=null;switch(Ge){case"merge":Jt={...this.currentUrlTree.queryParams,...H};break;case"preserve":Jt=this.currentUrlTree.queryParams;break;default:Jt=H||null}null!==Jt&&(Jt=this.removeEmptyProps(Jt));try{jt=Fn(R?R.snapshot:this.routerState.snapshot.root)}catch{("string"!=typeof m[0]||!m[0].startsWith("/"))&&(m=[]),jt=this.currentUrlTree.root}return ss(jt,m,Jt,mt??null)}navigateByUrl(m,D={skipLocationChange:!1}){const R=Ii(m)?m:this.parseUrl(m),H=this.urlHandlingStrategy.merge(R,this.rawUrlTree);return this.scheduleNavigation(H,Oo,null,D)}navigate(m,D={skipLocationChange:!1}){return function ql(p){for(let C=0;C<p.length;C++)if(null==p[C])throw new _.vHH(4008,!1)}(m),this.navigateByUrl(this.createUrlTree(m,D),D)}serializeUrl(m){return this.urlSerializer.serialize(m)}parseUrl(m){try{return this.urlSerializer.parse(m)}catch{return this.urlSerializer.parse("/")}}isActive(m,D){let R;if(R=!0===D?{...Co}:!1===D?{...jh}:D,Ii(m))return zt(this.currentUrlTree,m,R);const H=this.parseUrl(m);return zt(this.currentUrlTree,H,R)}removeEmptyProps(m){return Object.keys(m).reduce((D,R)=>{const H=m[R];return null!=H&&(D[R]=H),D},{})}scheduleNavigation(m,D,R,H,ae){if(this.disposed)return Promise.resolve(!1);let Ge,We,mt;ae?(Ge=ae.resolve,We=ae.reject,mt=ae.promise):mt=new Promise((jt,Ji)=>{Ge=jt,We=Ji});const Jt=this.pendingTasks.add();return Ws(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(Jt))}),this.navigationTransitions.handleNavigationRequest({source:D,restoredState:R,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:m,extras:H,resolve:Ge,reject:We,promise:mt,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),mt.catch(jt=>Promise.reject(jt))}static#e=this.\u0275fac=function(D){return new(D||p)};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();class Ql{}let Jl=(()=>{class p{constructor(m,D,R,H,ae){this.router=m,this.injector=R,this.preloadingStrategy=H,this.loader=ae}setUpPreloading(){this.subscription=this.router.events.pipe((0,Ye.h)(m=>m instanceof $n),hi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(m,D){const R=[];for(const H of D){H.providers&&!H._injector&&(H._injector=(0,_.MMx)(H.providers,m,`Route: ${H.path}`));const ae=H._injector??m,Ge=H._loadedInjector??ae;(H.loadChildren&&!H._loadedRoutes&&void 0===H.canLoad||H.loadComponent&&!H._loadedComponent)&&R.push(this.preloadConfig(ae,H)),(H.children||H._loadedRoutes)&&R.push(this.processRoutes(Ge,H.children??H._loadedRoutes))}return(0,U.D)(R).pipe((0,fr.J)())}preloadConfig(m,D){return this.preloadingStrategy.preload(D,()=>{let R;R=D.loadChildren&&void 0===D.canLoad?this.loader.loadChildren(m,D):(0,Z.of)(null);const H=R.pipe((0,Ke.z)(ae=>null===ae?(0,Z.of)(void 0):(D._loadedRoutes=ae.routes,D._loadedInjector=ae.injector,this.processRoutes(ae.injector??m,ae.routes))));if(D.loadComponent&&!D._loadedComponent){const ae=this.loader.loadComponent(D);return(0,U.D)([H,ae]).pipe((0,fr.J)())}return H})}static#e=this.\u0275fac=function(D){return new(D||p)(_.LFG(ro),_.LFG(_.Sil),_.LFG(_.lqb),_.LFG(Ql),_.LFG(sl))};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();const tn=new _.OlP("");let ec=(()=>{class p{constructor(m,D,R,H,ae={}){this.urlSerializer=m,this.transitions=D,this.viewportScroller=R,this.zone=H,this.options=ae,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},ae.scrollPositionRestoration=ae.scrollPositionRestoration||"disabled",ae.anchorScrolling=ae.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(m=>{m instanceof on?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=m.navigationTrigger,this.restoredId=m.restoredState?m.restoredState.navigationId:0):m instanceof $n?(this.lastId=m.id,this.scheduleScrollEvent(m,this.urlSerializer.parse(m.urlAfterRedirects).fragment)):m instanceof Tr&&0===m.code&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(m,this.urlSerializer.parse(m.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(m=>{m instanceof js&&(m.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(m.position):m.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(m.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(m,D){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new js(m,"popstate"===this.lastSource?this.store[this.restoredId]:null,D))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static#e=this.\u0275fac=function(D){_.$Z()};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac})}return p})();function gs(p,C){return{\u0275kind:p,\u0275providers:C}}function lu(){const p=(0,_.f3M)(_.zs3);return C=>{const m=p.get(_.z2F);if(C!==m.components[0])return;const D=p.get(ro),R=p.get(ic);1===p.get(S)&&D.initialNavigation(),p.get(Qn,null,_.XFs.Optional)?.setUpPreloading(),p.get(tn,null,_.XFs.Optional)?.init(),D.resetRootComponentType(m.componentTypes[0]),R.closed||(R.next(),R.complete(),R.unsubscribe())}}const ic=new _.OlP("",{factory:()=>new ue.x}),S=new _.OlP("",{providedIn:"root",factory:()=>1}),Qn=new _.OlP("");function bi(p){return gs(0,[{provide:Qn,useExisting:Jl},{provide:Ql,useExisting:p}])}function Zi(p){return gs(9,[{provide:Yl,useValue:Kl},{provide:su,useValue:{skipNextTransition:!!p?.skipInitialTransition,...p}}])}const Ar=new _.OlP("ROUTER_FORROOT_GUARD"),ja=[ce.Ye,{provide:tt,useClass:Ce},ro,Ti,{provide:Jr,useFactory:function cl(p){return p.routerState.root},deps:[ro]},sl,[]];let Ha=(()=>{class p{constructor(m){}static forRoot(m,D){return{ngModule:p,providers:[ja,[],{provide:oi,multi:!0,useValue:m},{provide:Ar,useFactory:wr,deps:[[ro,new _.FiY,new _.tp0]]},{provide:io,useValue:D||{}},D?.useHash?{provide:ce.S$,useClass:ce.Do}:{provide:ce.S$,useClass:ce.b0},{provide:tn,useFactory:()=>{const p=(0,_.f3M)(ce.EM),C=(0,_.f3M)(_.R0b),m=(0,_.f3M)(io),D=(0,_.f3M)(_o),R=(0,_.f3M)(tt);return m.scrollOffset&&p.setOffset(m.scrollOffset),new ec(R,D,p,C,m)}},D?.preloadingStrategy?bi(D.preloadingStrategy).\u0275providers:[],D?.initialNavigation?Xi(D):[],D?.bindToComponentInputs?gs(8,[Lo,{provide:lr,useExisting:Lo}]).\u0275providers:[],D?.enableViewTransitions?Zi().\u0275providers:[],[{provide:Gs,useFactory:lu},{provide:_.tb,multi:!0,useExisting:Gs}]]}}static forChild(m){return{ngModule:p,providers:[{provide:oi,multi:!0,useValue:m}]}}static#e=this.\u0275fac=function(D){return new(D||p)(_.LFG(Ar,8))};static#t=this.\u0275mod=_.oAB({type:p});static#n=this.\u0275inj=_.cJS({})}return p})();function wr(p){return"guarded"}function Xi(p){return["disabled"===p.initialNavigation?gs(3,[{provide:_.ip1,multi:!0,useFactory:()=>{const C=(0,_.f3M)(ro);return()=>{C.setUpLocationChangeListener()}}},{provide:S,useValue:2}]).\u0275providers:[],"enabledBlocking"===p.initialNavigation?gs(2,[{provide:S,useValue:0},{provide:_.ip1,multi:!0,deps:[_.zs3],useFactory:C=>{const m=C.get(ce.V_,Promise.resolve());return()=>m.then(()=>new Promise(D=>{const R=C.get(ro),H=C.get(ic);Ws(R,()=>{D(!0)}),C.get(_o).afterPreactivation=()=>(D(!0),H.closed?(0,Z.of)(void 0):H),R.initialNavigation()}))}}]).\u0275providers:[]]}const Gs=new _.OlP("")},7401:(ct,pe,M)=>{M.d(pe,{PJ:()=>P,hP:()=>ee,DR:()=>Ve,lw:()=>Q,v1:()=>Te,hM:()=>re});var _=M(7464),y=M(9797),ne=M(9080),j=M(6763);class U{constructor(ue,W,ce){this.x=ue,this.y=W,this.z=ce}static fromObject(ue){return!ue||isNaN(ue.x)||isNaN(ue.y)||isNaN(ue.z)?null:new U(ue.x,ue.y,ue.z)}equalValue(ue){return this.x===ue.x&&this.y===ue.y&&this.z===ue.z}roundToPrecision(ue){return new U((0,j.fZ)(this.x,ue),(0,j.fZ)(this.y,ue),(0,j.fZ)(this.z,ue))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function re(le){function ue(W){return W<=.03928?W/12.92:Math.pow((W+.055)/1.055,2.4)}return function Z(le){return.2126*le.r+.7152*le.g+.0722*le.b}(new ne.h(ue(le.r),ue(le.g),ue(le.b),1))}function oe(le,ue,W){return W-ue==0?0:(le-ue)/(W-ue)}function V(le,ue,W){return(oe(le.r,ue.r,W.r)+oe(le.g,ue.g,W.g)+oe(le.b,ue.b,W.b))/3}function P(le,ue,W=null){let ce=0,je=W;return null!==je?ce=V(le,ue,je):(je=new ne.h(0,0,0,1),ce=V(le,ue,je),ce<=0&&(je=new ne.h(1,1,1,1),ce=V(le,ue,je))),ce=Math.round(1e3*ce)/1e3,new ne.h(je.r,je.g,je.b,ce)}function Q(le){const ue=Math.max(le.r,le.g,le.b),W=Math.min(le.r,le.g,le.b),ce=ue-W;let je=0;0!==ce&&(je=ue===le.r?(le.g-le.b)/ce%6*60:ue===le.g?60*((le.b-le.r)/ce+2):60*((le.r-le.g)/ce+4)),je<0&&(je+=360);const et=(ue+W)/2;let Dt=0;return 0!==ce&&(Dt=ce/(1-Math.abs(2*et-1))),new _.H(je,Dt,et)}function ee(le,ue=1){const W=(1-Math.abs(2*le.l-1))*le.s,ce=W*(1-Math.abs(le.h/60%2-1)),je=le.l-W/2;let et=0,Dt=0,Oe=0;return le.h<60?(et=W,Dt=ce,Oe=0):le.h<120?(et=ce,Dt=W,Oe=0):le.h<180?(et=0,Dt=W,Oe=ce):le.h<240?(et=0,Dt=ce,Oe=W):le.h<300?(et=ce,Dt=0,Oe=W):le.h<360&&(et=W,Dt=0,Oe=ce),new ne.h(et+je,Dt+je,Oe+je,ue)}function Te(le){return function Re(le){function ue(Ee){return Ee>y.R.epsilon?Math.pow(Ee,1/3):(y.R.kappa*Ee+16)/116}const W=ue(le.x/U.whitePoint.x),ce=ue(le.y/U.whitePoint.y),je=ue(le.z/U.whitePoint.z);return new y.R(116*ce-16,500*(W-ce),200*(ce-je))}(function be(le){function ue(Ee){return Ee<=.04045?Ee/12.92:Math.pow((Ee+.055)/1.055,2.4)}const W=ue(le.r),ce=ue(le.g),je=ue(le.b);return new U(.4124564*W+.3575761*ce+.1804375*je,.2126729*W+.7151522*ce+.072175*je,.0193339*W+.119192*ce+.9503041*je)}(le))}function Ve(le,ue=1){return function Fe(le,ue=1){function W(Dt){return Dt<=.0031308?12.92*Dt:1.055*Math.pow(Dt,1/2.4)-.055}const ce=W(3.2404542*le.x-1.5371385*le.y-.4985314*le.z),je=W(-.969266*le.x+1.8760108*le.y+.041556*le.z),et=W(.0556434*le.x-.2040259*le.y+1.0572252*le.z);return new ne.h(ce,je,et,ue)}(function qe(le){const ue=(le.l+16)/116,W=ue+le.a/500,ce=ue-le.b/200,je=Math.pow(W,3),et=Math.pow(ue,3),Dt=Math.pow(ce,3);let Oe=0;Oe=je>y.R.epsilon?je:(116*W-16)/y.R.kappa;let Ee=0;Ee=le.l>y.R.epsilon*y.R.kappa?et:le.l/y.R.kappa;let Ye=0;return Ye=Dt>y.R.epsilon?Dt:(116*ce-16)/y.R.kappa,Oe*=U.whitePoint.x,Ee*=U.whitePoint.y,Ye*=U.whitePoint.z,new U(Oe,Ee,Ye)}(le),ue)}U.whitePoint=new U(.95047,1,1.08883)},7464:(ct,pe,M)=>{M.d(pe,{H:()=>y});var _=M(6763);class y{constructor(j,U,Z){this.h=j,this.s=U,this.l=Z}static fromObject(j){return!j||isNaN(j.h)||isNaN(j.s)||isNaN(j.l)?null:new y(j.h,j.s,j.l)}equalValue(j){return this.h===j.h&&this.s===j.s&&this.l===j.l}roundToPrecision(j){return new y((0,_.fZ)(this.h,j),(0,_.fZ)(this.s,j),(0,_.fZ)(this.l,j))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},9797:(ct,pe,M)=>{M.d(pe,{R:()=>y});var _=M(6763);let y=(()=>{class ne{constructor(U,Z,re){this.l=U,this.a=Z,this.b=re}static fromObject(U){return!U||isNaN(U.l)||isNaN(U.a)||isNaN(U.b)?null:new ne(U.l,U.a,U.b)}equalValue(U){return this.l===U.l&&this.a===U.a&&this.b===U.b}roundToPrecision(U){return new ne((0,_.fZ)(this.l,U),(0,_.fZ)(this.a,U),(0,_.fZ)(this.b,U))}toObject(){return{l:this.l,a:this.a,b:this.b}}}return ne.epsilon=216/24389,ne.kappa=24389/27,ne})()},9080:(ct,pe,M)=>{M.d(pe,{h:()=>y});var _=M(6763);class y{constructor(j,U,Z,re){this.r=j,this.g=U,this.b=Z,this.a="number"!=typeof re||isNaN(re)?1:re}static fromObject(j){return!j||isNaN(j.r)||isNaN(j.g)||isNaN(j.b)?null:new y(j.r,j.g,j.b,j.a)}equalValue(j){return this.r===j.r&&this.g===j.g&&this.b===j.b&&this.a===j.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round((0,_.cY)(this.r,0,255))},${Math.round((0,_.cY)(this.g,0,255))},${Math.round((0,_.cY)(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round((0,_.cY)(this.r,0,255))},${Math.round((0,_.cY)(this.g,0,255))},${Math.round((0,_.cY)(this.b,0,255))},${(0,_.uZ)(this.a,0,1)})`}roundToPrecision(j){return new y((0,_.fZ)(this.r,j),(0,_.fZ)(this.g,j),(0,_.fZ)(this.b,j),(0,_.fZ)(this.a,j))}clamp(){return new y((0,_.uZ)(this.r,0,1),(0,_.uZ)(this.g,0,1),(0,_.uZ)(this.b,0,1),(0,_.uZ)(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(j){return(0,_.yi)((0,_.cY)(j,0,255))}}},6763:(ct,pe,M)=>{function _(P,Q,ee){return isNaN(P)||P<=Q?Q:P>=ee?ee:P}function y(P,Q,ee){return isNaN(P)||P<=Q?0:P>=ee?1:P/(ee-Q)}function ne(P,Q,ee){return isNaN(P)?Q:Q+P*(ee-Q)}function Z(P){const Q=Math.round(_(P,0,255)).toString(16);return 1===Q.length?"0"+Q:Q}function re(P,Q,ee){return isNaN(P)||P<=0?Q:P>=1?ee:Q+P*(ee-Q)}function V(P,Q){const ee=Math.pow(10,Q);return Math.round(P*ee)/ee}M.d(pe,{Fv:()=>y,cY:()=>ne,fZ:()=>V,t7:()=>re,uZ:()=>_,yi:()=>Z}),Math},6909:(ct,pe,M)=>{M.d(pe,{in:()=>Q});var _=M(9080),y=M(6763);const U=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Q(Re){const be=U.exec(Re);if(null===be)return null;let Fe=be[1];if(3===Fe.length){const Ve=Fe.charAt(0),ie=Fe.charAt(1),he=Fe.charAt(2);Fe=Ve.concat(Ve,ie,ie,he,he)}const Te=parseInt(Fe,16);return isNaN(Te)?null:new _.h((0,y.Fv)((16711680&Te)>>>16,0,255),(0,y.Fv)((65280&Te)>>>8,0,255),(0,y.Fv)(255&Te,0,255),1)}},7138:(ct,pe,M)=>{M.d(pe,{Ax:()=>j,Id:()=>Z,Lj:()=>fe,bw:()=>U,so:()=>re});var _=M(7726),y=M(3309),ne=M(1526);const j=Object.freeze({locate:(0,ne.j8)()}),U={toView:q=>q?"true":"false",fromView:q=>!(null==q||"false"===q||!1===q||0===q)},Z={toView(q){if(null==q)return null;const oe=1*q;return isNaN(oe)?null:oe.toString()},fromView(q){if(null==q)return null;const oe=1*q;return isNaN(oe)?null:oe}};class re{constructor(oe,V,P=V.toLowerCase(),Q="reflect",ee){this.guards=new Set,this.Owner=oe,this.name=V,this.attribute=P,this.mode=Q,this.converter=ee,this.fieldName=`_${V}`,this.callbackName=`${V}Changed`,this.hasCallback=this.callbackName in oe.prototype,"boolean"===Q&&void 0===ee&&(this.converter=U)}setValue(oe,V){const P=oe[this.fieldName],Q=this.converter;void 0!==Q&&(V=Q.fromView(V)),P!==V&&(oe[this.fieldName]=V,this.tryReflectToAttribute(oe),this.hasCallback&&oe[this.callbackName](P,V),oe.$fastController.notify(this.name))}getValue(oe){return _.y$.track(oe,this.name),oe[this.fieldName]}onAttributeChangedCallback(oe,V){this.guards.has(oe)||(this.guards.add(oe),this.setValue(oe,V),this.guards.delete(oe))}tryReflectToAttribute(oe){const V=this.mode,P=this.guards;P.has(oe)||"fromView"===V||y.SO.queueUpdate(()=>{P.add(oe);const Q=oe[this.fieldName];switch(V){case"reflect":const ee=this.converter;y.SO.setAttribute(oe,this.attribute,void 0!==ee?ee.toView(Q):Q);break;case"boolean":y.SO.setBooleanAttribute(oe,this.attribute,Q)}P.delete(oe)})}static collect(oe,...V){const P=[];V.push(j.locate(oe));for(let Q=0,ee=V.length;Q<ee;++Q){const de=V[Q];if(void 0!==de)for(let $e=0,we=de.length;$e<we;++$e){const ve=de[$e];P.push("string"==typeof ve?new re(oe,ve):new re(oe,ve.property,ve.attribute,ve.mode,ve.converter))}}return P}}function fe(q,oe){let V;function P(Q,ee){arguments.length>1&&(V.property=ee),j.locate(Q.constructor).push(V)}return arguments.length>1?(V={},void P(q,oe)):(V=void 0===q?{}:q,P)}},2674:(ct,pe,M)=>{M.d(pe,{W:()=>fe});var _=M(1526),y=M(7726),ne=M(3502),j=M(7138);const U={mode:"open"},Z={},re=_.Bo.getById(4,()=>{const q=new Map;return Object.freeze({register:oe=>!q.has(oe.type)&&(q.set(oe.type,oe),!0),getByType:oe=>q.get(oe)})});class fe{constructor(oe,V=oe.definition){"string"==typeof V&&(V={name:V}),this.type=oe,this.name=V.name,this.template=V.template;const P=j.so.collect(oe,V.attributes),Q=new Array(P.length),ee={},de={};for(let $e=0,we=P.length;$e<we;++$e){const ve=P[$e];Q[$e]=ve.attribute,ee[ve.name]=ve,de[ve.attribute]=ve}this.attributes=P,this.observedAttributes=Q,this.propertyLookup=ee,this.attributeLookup=de,this.shadowOptions=void 0===V.shadowOptions?U:null===V.shadowOptions?void 0:Object.assign(Object.assign({},U),V.shadowOptions),this.elementOptions=void 0===V.elementOptions?Z:Object.assign(Object.assign({},Z),V.elementOptions),this.styles=void 0===V.styles?void 0:Array.isArray(V.styles)?ne.XL.create(V.styles):V.styles instanceof ne.XL?V.styles:ne.XL.create([V.styles])}get isDefined(){return!!re.getByType(this.type)}define(oe=customElements){const V=this.type;if(re.register(this)){const P=this.attributes,Q=V.prototype;for(let ee=0,de=P.length;ee<de;++ee)y.y$.defineProperty(Q,P[ee]);Reflect.defineProperty(V,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return oe.get(this.name)||oe.define(this.name,V,this.elementOptions),this}}fe.forType=re.getByType},8987:(ct,pe,M)=>{M.d(pe,{H:()=>oe});var _=M(3309),y=M(472),ne=M(7726),j=M(2674);const U=new WeakMap,Z={bubbles:!0,composed:!0,cancelable:!0};function re(P){return P.shadowRoot||U.get(P)||null}class fe extends y.A{constructor(Q,ee){super(Q),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=Q,this.definition=ee;const de=ee.shadowOptions;if(void 0!==de){const we=Q.attachShadow(de);"closed"===de.mode&&U.set(Q,we)}const $e=ne.y$.getAccessors(Q);if($e.length>0){const we=this.boundObservables=Object.create(null);for(let ve=0,qe=$e.length;ve<qe;++ve){const Re=$e[ve].name,be=Q[Re];void 0!==be&&(delete Q[Re],we[Re]=be)}}}get isConnected(){return ne.y$.track(this,"isConnected"),this._isConnected}setIsConnected(Q){this._isConnected=Q,ne.y$.notify(this,"isConnected")}get template(){return this._template}set template(Q){this._template!==Q&&(this._template=Q,this.needsInitialization||this.renderTemplate(Q))}get styles(){return this._styles}set styles(Q){this._styles!==Q&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=Q,!this.needsInitialization&&null!==Q&&this.addStyles(Q))}addStyles(Q){const ee=re(this.element)||this.element.getRootNode();if(Q instanceof HTMLStyleElement)ee.append(Q);else if(!Q.isAttachedTo(ee)){const de=Q.behaviors;Q.addStylesTo(ee),null!==de&&this.addBehaviors(de)}}removeStyles(Q){const ee=re(this.element)||this.element.getRootNode();if(Q instanceof HTMLStyleElement)ee.removeChild(Q);else if(Q.isAttachedTo(ee)){const de=Q.behaviors;Q.removeStylesFrom(ee),null!==de&&this.removeBehaviors(de)}}addBehaviors(Q){const ee=this.behaviors||(this.behaviors=new Map),de=Q.length,$e=[];for(let we=0;we<de;++we){const ve=Q[we];ee.has(ve)?ee.set(ve,ee.get(ve)+1):(ee.set(ve,1),$e.push(ve))}if(this._isConnected){const we=this.element;for(let ve=0;ve<$e.length;++ve)$e[ve].bind(we,ne.Wp)}}removeBehaviors(Q,ee=!1){const de=this.behaviors;if(null===de)return;const $e=Q.length,we=[];for(let ve=0;ve<$e;++ve){const qe=Q[ve];if(de.has(qe)){const Re=de.get(qe)-1;0===Re||ee?de.delete(qe)&&we.push(qe):de.set(qe,Re)}}if(this._isConnected){const ve=this.element;for(let qe=0;qe<we.length;++qe)we[qe].unbind(ve)}}onConnectedCallback(){if(this._isConnected)return;const Q=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(Q,ne.Wp);const ee=this.behaviors;if(null!==ee)for(const[de]of ee)de.bind(Q,ne.Wp);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const Q=this.view;null!==Q&&Q.unbind();const ee=this.behaviors;if(null!==ee){const de=this.element;for(const[$e]of ee)$e.unbind(de)}}onAttributeChangedCallback(Q,ee,de){const $e=this.definition.attributeLookup[Q];void 0!==$e&&$e.onAttributeChangedCallback(this.element,de)}emit(Q,ee,de){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(Q,Object.assign(Object.assign({detail:ee},Z),de)))}finishInitialization(){const Q=this.element,ee=this.boundObservables;if(null!==ee){const $e=Object.keys(ee);for(let we=0,ve=$e.length;we<ve;++we){const qe=$e[we];Q[qe]=ee[qe]}this.boundObservables=null}const de=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():de.template&&(this._template=de.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():de.styles&&(this._styles=de.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(Q){const ee=this.element,de=re(ee)||ee;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||_.SO.removeChildNodes(de),Q&&(this.view=Q.render(ee,de,ee))}static forCustomElement(Q){const ee=Q.$fastController;if(void 0!==ee)return ee;const de=j.W.forType(Q.constructor);if(void 0===de)throw new Error("Missing FASTElement definition.");return Q.$fastController=new fe(Q,de)}}function q(P){return class extends P{constructor(){super(),fe.forCustomElement(this)}$emit(Q,ee,de){return this.$fastController.emit(Q,ee,de)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(Q,ee,de){this.$fastController.onAttributeChangedCallback(Q,ee,de)}}}const oe=Object.assign(q(HTMLElement),{from:P=>q(P),define:(P,Q)=>new j.W(P,Q).define().type})},3309:(ct,pe,M)=>{M.d(pe,{SO:()=>fe,Yl:()=>re,pc:()=>Z});var _=M(1526);const y=_.P3.FAST.getById(1,()=>{const q=[],oe=[];function V(){if(oe.length)throw oe.shift()}function P(de){try{de.call()}catch($e){oe.push($e),setTimeout(V,0)}}function Q(){let $e=0;for(;$e<q.length;)if(P(q[$e]),$e++,$e>1024){for(let we=0,ve=q.length-$e;we<ve;we++)q[we]=q[we+$e];q.length-=$e,$e=0}q.length=0}return Object.freeze({enqueue:function ee(de){q.length<1&&_.P3.requestAnimationFrame(Q),q.push(de)},process:Q})}),ne=_.P3.trustedTypes.createPolicy("fast-html",{createHTML:q=>q});let j=ne;const U=`fast-${Math.random().toString(36).substring(2,8)}`,Z=`${U}{`,re=`}${U}`,fe=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(q){if(j!==ne)throw new Error("The HTML policy can only be set once.");j=q},createHTML:q=>j.createHTML(q),isMarker:q=>q&&8===q.nodeType&&q.data.startsWith(U),extractDirectiveIndexFromMarker:q=>parseInt(q.data.replace(`${U}:`,"")),createInterpolationPlaceholder:q=>`${Z}${q}${re}`,createCustomAttributePlaceholder(q,oe){return`${q}="${this.createInterpolationPlaceholder(oe)}"`},createBlockPlaceholder:q=>`\x3c!--${U}:${q}--\x3e`,queueUpdate:y.enqueue,processUpdates:y.process,nextUpdate:()=>new Promise(y.enqueue),setAttribute(q,oe,V){null==V?q.removeAttribute(oe):q.setAttribute(oe,V)},setBooleanAttribute(q,oe,V){V?q.setAttribute(oe,""):q.removeAttribute(oe)},removeChildNodes(q){for(let oe=q.firstChild;null!==oe;oe=q.firstChild)q.removeChild(oe)},createTemplateWalker:q=>document.createTreeWalker(q,133,null,!1)})},472:(ct,pe,M)=>{M.d(pe,{A:()=>y,q:()=>_});class _{constructor(j,U){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=j,this.sub1=U}has(j){return void 0===this.spillover?this.sub1===j||this.sub2===j:-1!==this.spillover.indexOf(j)}subscribe(j){const U=this.spillover;if(void 0===U){if(this.has(j))return;if(void 0===this.sub1)return void(this.sub1=j);if(void 0===this.sub2)return void(this.sub2=j);this.spillover=[this.sub1,this.sub2,j],this.sub1=void 0,this.sub2=void 0}else-1===U.indexOf(j)&&U.push(j)}unsubscribe(j){const U=this.spillover;if(void 0===U)this.sub1===j?this.sub1=void 0:this.sub2===j&&(this.sub2=void 0);else{const Z=U.indexOf(j);-1!==Z&&U.splice(Z,1)}}notify(j){const U=this.spillover,Z=this.source;if(void 0===U){const re=this.sub1,fe=this.sub2;void 0!==re&&re.handleChange(Z,j),void 0!==fe&&fe.handleChange(Z,j)}else for(let re=0,fe=U.length;re<fe;++re)U[re].handleChange(Z,j)}}class y{constructor(j){this.subscribers={},this.sourceSubscribers=null,this.source=j}notify(j){var U;const Z=this.subscribers[j];void 0!==Z&&Z.notify(j),null===(U=this.sourceSubscribers)||void 0===U||U.notify(j)}subscribe(j,U){var Z;if(U){let re=this.subscribers[U];void 0===re&&(this.subscribers[U]=re=new _(this.source)),re.subscribe(j)}else this.sourceSubscribers=null!==(Z=this.sourceSubscribers)&&void 0!==Z?Z:new _(this.source),this.sourceSubscribers.subscribe(j)}unsubscribe(j,U){var Z;if(U){const re=this.subscribers[U];void 0!==re&&re.unsubscribe(j)}else null===(Z=this.sourceSubscribers)||void 0===Z||Z.unsubscribe(j)}}},7726:(ct,pe,M)=>{M.d(pe,{LO:()=>U,Wp:()=>q,lk:()=>Z,rd:()=>fe,y$:()=>j});var _=M(3309),y=M(1526),ne=M(472);const j=y.Bo.getById(2,()=>{const oe=/(:|&&|\|\||if)/,V=new WeakMap,P=_.SO.queueUpdate;let Q,ee=qe=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function de(qe){let Re=qe.$fastController||V.get(qe);return void 0===Re&&(Array.isArray(qe)?Re=ee(qe):V.set(qe,Re=new ne.A(qe))),Re}const $e=(0,y.j8)();class we{constructor(Re){this.name=Re,this.field=`_${Re}`,this.callback=`${Re}Changed`}getValue(Re){return void 0!==Q&&Q.watch(Re,this.name),Re[this.field]}setValue(Re,be){const Fe=this.field,Te=Re[Fe];if(Te!==be){Re[Fe]=be;const Ve=Re[this.callback];"function"==typeof Ve&&Ve.call(Re,Te,be),de(Re).notify(this.name)}}}class ve extends ne.q{constructor(Re,be,Fe=!1){super(Re,be),this.binding=Re,this.isVolatileBinding=Fe,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(Re,be){this.needsRefresh&&null!==this.last&&this.disconnect();const Fe=Q;Q=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const Te=this.binding(Re,be);return Q=Fe,Te}disconnect(){if(null!==this.last){let Re=this.first;for(;void 0!==Re;)Re.notifier.unsubscribe(this,Re.propertyName),Re=Re.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(Re,be){const Fe=this.last,Te=de(Re),Ve=null===Fe?this.first:{};if(Ve.propertySource=Re,Ve.propertyName=be,Ve.notifier=Te,Te.subscribe(this,be),null!==Fe){if(!this.needsRefresh){let ie;Q=void 0,ie=Fe.propertySource[Fe.propertyName],Q=this,Re===ie&&(this.needsRefresh=!0)}Fe.next=Ve}this.last=Ve}handleChange(){this.needsQueue&&(this.needsQueue=!1,P(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let Re=this.first;return{next:()=>{const be=Re;return void 0===be?{value:void 0,done:!0}:(Re=Re.next,{value:be,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(qe){ee=qe},getNotifier:de,track(qe,Re){void 0!==Q&&Q.watch(qe,Re)},trackVolatile(){void 0!==Q&&(Q.needsRefresh=!0)},notify(qe,Re){de(qe).notify(Re)},defineProperty(qe,Re){"string"==typeof Re&&(Re=new we(Re)),$e(qe).push(Re),Reflect.defineProperty(qe,Re.name,{enumerable:!0,get:function(){return Re.getValue(this)},set:function(be){Re.setValue(this,be)}})},getAccessors:$e,binding(qe,Re,be=this.isVolatileBinding(qe)){return new ve(qe,Re,be)},isVolatileBinding:qe=>oe.test(qe.toString())})});function U(oe,V){j.defineProperty(oe,V)}function Z(oe,V,P){return Object.assign({},P,{get:function(){return j.trackVolatile(),P.get.apply(this)}})}const re=y.Bo.getById(3,()=>{let oe=null;return{get:()=>oe,set(V){oe=V}}});class fe{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return re.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(V){re.set(V)}}j.defineProperty(fe.prototype,"index"),j.defineProperty(fe.prototype,"length");const q=Object.seal(new fe)},1526:(ct,pe,M)=>{M.d(pe,{Bo:()=>ne,P3:()=>_,j8:()=>U,ow:()=>j});const _=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();void 0===_.trustedTypes&&(_.trustedTypes={createPolicy:(Z,re)=>re});const y={configurable:!1,enumerable:!1,writable:!1};void 0===_.FAST&&Reflect.defineProperty(_,"FAST",Object.assign({value:Object.create(null)},y));const ne=_.FAST;if(void 0===ne.getById){const Z=Object.create(null);Reflect.defineProperty(ne,"getById",Object.assign({value(re,fe){let q=Z[re];return void 0===q&&(q=fe?Z[re]=fe():null),q}},y))}const j=Object.freeze([]);function U(){const Z=new WeakMap;return function(re){let fe=Z.get(re);if(void 0===fe){let q=Reflect.getPrototypeOf(re);for(;void 0===fe&&null!==q;)fe=Z.get(q),q=Reflect.getPrototypeOf(q);fe=void 0===fe?[]:fe.slice(0),Z.set(re,fe)}return fe}}},2257:(ct,pe,M)=>{M.d(pe,{v:()=>_});class _{createCSS(){return""}createBehavior(){}}},3502:(ct,pe,M)=>{M.d(pe,{XL:()=>y});var _=M(3309);class y{constructor(){this.targets=new WeakSet}addStylesTo(P){this.targets.add(P)}removeStylesFrom(P){this.targets.delete(P)}isAttachedTo(P){return this.targets.has(P)}withBehaviors(...P){return this.behaviors=null===this.behaviors?P:this.behaviors.concat(P),this}}function ne(V){return V.map(P=>P instanceof y?ne(P.styles):[P]).reduce((P,Q)=>P.concat(Q),[])}function j(V){return V.map(P=>P instanceof y?P.behaviors:null).reduce((P,Q)=>null===Q?P:(null===P&&(P=[]),P.concat(Q)),null)}y.create=(()=>{if(_.SO.supportsAdoptedStyleSheets){const V=new Map;return P=>new re(P,V)}return V=>new oe(V)})();let U=(V,P)=>{V.adoptedStyleSheets=[...V.adoptedStyleSheets,...P]},Z=(V,P)=>{V.adoptedStyleSheets=V.adoptedStyleSheets.filter(Q=>-1===P.indexOf(Q))};if(_.SO.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),U=(V,P)=>{V.adoptedStyleSheets.push(...P)},Z=(V,P)=>{for(const Q of P){const ee=V.adoptedStyleSheets.indexOf(Q);-1!==ee&&V.adoptedStyleSheets.splice(ee,1)}}}catch{}class re extends y{constructor(P,Q){super(),this.styles=P,this.styleSheetCache=Q,this._styleSheets=void 0,this.behaviors=j(P)}get styleSheets(){if(void 0===this._styleSheets){const Q=this.styleSheetCache;this._styleSheets=ne(this.styles).map(ee=>{if(ee instanceof CSSStyleSheet)return ee;let de=Q.get(ee);return void 0===de&&(de=new CSSStyleSheet,de.replaceSync(ee),Q.set(ee,de)),de})}return this._styleSheets}addStylesTo(P){U(P,this.styleSheets),super.addStylesTo(P)}removeStylesFrom(P){Z(P,this.styleSheets),super.removeStylesFrom(P)}}let fe=0;class oe extends y{constructor(P){super(),this.styles=P,this.behaviors=null,this.behaviors=j(P),this.styleSheets=ne(P),this.styleClass=function q(){return"fast-style-class-"+ ++fe}()}addStylesTo(P){const Q=this.styleSheets,ee=this.styleClass;P=this.normalizeTarget(P);for(let de=0;de<Q.length;de++){const $e=document.createElement("style");$e.innerHTML=Q[de],$e.className=ee,P.append($e)}super.addStylesTo(P)}removeStylesFrom(P){const Q=(P=this.normalizeTarget(P)).querySelectorAll(`.${this.styleClass}`);for(let ee=0,de=Q.length;ee<de;++ee)P.removeChild(Q[ee]);super.removeStylesFrom(P)}isAttachedTo(P){return super.isAttachedTo(this.normalizeTarget(P))}normalizeTarget(P){return P===document?document.body:P}}},1365:(ct,pe,M)=>{M.d(pe,{DesignToken:()=>le});var _=M(7815),y=M(2257),ne=M(7726),j=M(8987),U=M(6867),re=M(3309),fe=M(3502);const q=document.createElement("div");class V{setProperty(W,ce){re.SO.queueUpdate(()=>this.target.setProperty(W,ce))}removeProperty(W){re.SO.queueUpdate(()=>this.target.removeProperty(W))}}class Q extends V{constructor(){super();const W=new CSSStyleSheet;this.target=W.cssRules[W.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,W]}}class ee extends V{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:W}=this.style;if(W){const ce=W.insertRule(":root{}",W.cssRules.length);this.target=W.cssRules[ce].style}}}let de=(()=>{class ue{constructor(ce){this.store=new Map,this.target=null;const je=ce.$fastController;this.style=document.createElement("style"),je.addStyles(this.style),ne.y$.getNotifier(je).subscribe(this,"isConnected"),this.handleChange(je,"isConnected")}targetChanged(){if(null!==this.target)for(const[ce,je]of this.store.entries())this.target.setProperty(ce,je)}setProperty(ce,je){this.store.set(ce,je),re.SO.queueUpdate(()=>{null!==this.target&&this.target.setProperty(ce,je)})}removeProperty(ce){this.store.delete(ce),re.SO.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(ce)})}handleChange(ce,je){const{sheet:et}=this.style;if(et){const Dt=et.insertRule(":host{}",et.cssRules.length);this.target=et.cssRules[Dt].style}else this.target=null}}return(0,_.gn)([ne.LO],ue.prototype,"target",void 0),ue})();class $e{constructor(W){this.target=W.style}setProperty(W,ce){re.SO.queueUpdate(()=>this.target.setProperty(W,ce))}removeProperty(W){re.SO.queueUpdate(()=>this.target.removeProperty(W))}}class we{setProperty(W,ce){we.properties[W]=ce;for(const je of we.roots.values())Re.getOrCreate(we.normalizeRoot(je)).setProperty(W,ce)}removeProperty(W){delete we.properties[W];for(const ce of we.roots.values())Re.getOrCreate(we.normalizeRoot(ce)).removeProperty(W)}static registerRoot(W){const{roots:ce}=we;if(!ce.has(W)){ce.add(W);const je=Re.getOrCreate(this.normalizeRoot(W));for(const et in we.properties)je.setProperty(et,we.properties[et])}}static unregisterRoot(W){const{roots:ce}=we;if(ce.has(W)){ce.delete(W);const je=Re.getOrCreate(we.normalizeRoot(W));for(const et in we.properties)je.removeProperty(et)}}static normalizeRoot(W){return W===q?document:W}}we.roots=new Set,we.properties={};const ve=new WeakMap,qe=re.SO.supportsAdoptedStyleSheets?class P extends V{constructor(W){super();const ce=new CSSStyleSheet;this.target=ce.cssRules[ce.insertRule(":host{}")].style,W.$fastController.addStyles(fe.XL.create([ce]))}}:de,Re=Object.freeze({getOrCreate(ue){if(ve.has(ue))return ve.get(ue);let W;return W=ue===q?new we:ue instanceof Document?re.SO.supportsAdoptedStyleSheets?new Q:new ee:function oe(ue){return ue instanceof j.H}(ue)?new qe(ue):new $e(ue),ve.set(ue,W),W}});class be extends y.v{constructor(W){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=W.name,null!==W.cssCustomPropertyName&&(this.cssCustomProperty=`--${W.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=be.uniqueId(),be.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(W){return new be({name:"string"==typeof W?W:W.name,cssCustomPropertyName:"string"==typeof W?W:void 0===W.cssCustomPropertyName?W.name:W.cssCustomPropertyName})}static isCSSDesignToken(W){return"string"==typeof W.cssCustomProperty}static isDerivedDesignTokenValue(W){return"function"==typeof W}static getTokenById(W){return be.tokensById.get(W)}getOrCreateSubscriberSet(W=this){return this.subscribers.get(W)||this.subscribers.set(W,new Set)&&this.subscribers.get(W)}createCSS(){return this.cssVar||""}getValueFor(W){const ce=xe.getOrCreate(W).get(this);if(void 0!==ce)return ce;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${W} or an ancestor of ${W}.`)}setValueFor(W,ce){return this._appliedTo.add(W),ce instanceof be&&(ce=this.alias(ce)),xe.getOrCreate(W).set(this,ce),this}deleteValueFor(W){return this._appliedTo.delete(W),xe.existsFor(W)&&xe.getOrCreate(W).delete(this),this}withDefault(W){return this.setValueFor(q,W),this}subscribe(W,ce){const je=this.getOrCreateSubscriberSet(ce);ce&&!xe.existsFor(ce)&&xe.getOrCreate(ce),je.has(W)||je.add(W)}unsubscribe(W,ce){const je=this.subscribers.get(ce||this);je&&je.has(W)&&je.delete(W)}notify(W){const ce=Object.freeze({token:this,target:W});this.subscribers.has(this)&&this.subscribers.get(this).forEach(je=>je.handleChange(ce)),this.subscribers.has(W)&&this.subscribers.get(W).forEach(je=>je.handleChange(ce))}alias(W){return ce=>W.getValueFor(ce)}}be.uniqueId=(()=>{let ue=0;return()=>(ue++,ue.toString(16))})(),be.tokensById=new Map;class Te{constructor(W,ce,je){this.source=W,this.token=ce,this.node=je,this.dependencies=new Set,this.observer=ne.y$.binding(W,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ne.Wp))}}class Ve{constructor(){this.values=new Map}set(W,ce){this.values.get(W)!==ce&&(this.values.set(W,ce),ne.y$.getNotifier(this).notify(W.id))}get(W){return ne.y$.track(this,W.id),this.values.get(W)}delete(W){this.values.delete(W)}all(){return this.values.entries()}}const ie=new WeakMap,he=new WeakMap;class xe{constructor(W){this.target=W,this.store=new Ve,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(ce,je)=>{const et=be.getTokenById(je);if(et&&(et.notify(this.target),be.isCSSDesignToken(et))){const Dt=this.parent,Oe=this.isReflecting(et);if(Dt){const Ee=Dt.get(et),Ye=ce.get(et);Ee===Ye||Oe?Ee===Ye&&Oe&&this.stopReflectToCSS(et):this.reflectToCSS(et)}else Oe||this.reflectToCSS(et)}}},ie.set(W,this),ne.y$.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),W instanceof j.H?W.$fastController.addBehaviors([this]):W.isConnected&&this.bind()}static getOrCreate(W){return ie.get(W)||new xe(W)}static existsFor(W){return ie.has(W)}static findParent(W){if(q!==W.target){let ce=(0,U.T)(W.target);for(;null!==ce;){if(ie.has(ce))return ie.get(ce);ce=(0,U.T)(ce)}return xe.getOrCreate(q)}return null}static findClosestAssignedNode(W,ce){let je=ce;do{if(je.has(W))return je;je=je.parent?je.parent:je.target!==q?xe.getOrCreate(q):null}while(null!==je);return null}get parent(){return he.get(this)||null}has(W){return this.assignedValues.has(W)}get(W){const ce=this.store.get(W);if(void 0!==ce)return ce;const je=this.getRaw(W);return void 0!==je?(this.hydrate(W,je),this.get(W)):void 0}getRaw(W){var ce;return this.assignedValues.has(W)?this.assignedValues.get(W):null===(ce=xe.findClosestAssignedNode(W,this))||void 0===ce?void 0:ce.getRaw(W)}set(W,ce){be.isDerivedDesignTokenValue(this.assignedValues.get(W))&&this.tearDownBindingObserver(W),this.assignedValues.set(W,ce),be.isDerivedDesignTokenValue(ce)?this.setupBindingObserver(W,ce):this.store.set(W,ce)}delete(W){this.assignedValues.delete(W),this.tearDownBindingObserver(W);const ce=this.getRaw(W);ce?this.hydrate(W,ce):this.store.delete(W)}bind(){const W=xe.findParent(this);W&&W.appendChild(this);for(const ce of this.assignedValues.keys())ce.notify(this.target)}unbind(){this.parent&&he.get(this).removeChild(this)}appendChild(W){W.parent&&he.get(W).removeChild(W);const ce=this.children.filter(je=>W.contains(je));he.set(W,this),this.children.push(W),ce.forEach(je=>W.appendChild(je)),ne.y$.getNotifier(this.store).subscribe(W);for(const[je,et]of this.store.all())W.hydrate(je,this.bindingObservers.has(je)?this.getRaw(je):et)}removeChild(W){const ce=this.children.indexOf(W);return-1!==ce&&this.children.splice(ce,1),ne.y$.getNotifier(this.store).unsubscribe(W),W.parent===this&&he.delete(W)}contains(W){return function Z(ue,W){let ce=W;for(;null!==ce;){if(ce===ue)return!0;ce=(0,U.T)(ce)}return!1}(this.target,W.target)}reflectToCSS(W){this.isReflecting(W)||(this.reflecting.add(W),xe.cssCustomPropertyReflector.startReflection(W,this.target))}stopReflectToCSS(W){this.isReflecting(W)&&(this.reflecting.delete(W),xe.cssCustomPropertyReflector.stopReflection(W,this.target))}isReflecting(W){return this.reflecting.has(W)}handleChange(W,ce){const je=be.getTokenById(ce);je&&this.hydrate(je,this.getRaw(je))}hydrate(W,ce){if(!this.has(W)){const je=this.bindingObservers.get(W);be.isDerivedDesignTokenValue(ce)?je?je.source!==ce&&(this.tearDownBindingObserver(W),this.setupBindingObserver(W,ce)):this.setupBindingObserver(W,ce):(je&&this.tearDownBindingObserver(W),this.store.set(W,ce))}}setupBindingObserver(W,ce){const je=new Te(ce,W,this);return this.bindingObservers.set(W,je),je}tearDownBindingObserver(W){return!!this.bindingObservers.has(W)&&(this.bindingObservers.get(W).disconnect(),this.bindingObservers.delete(W),!0)}}xe.cssCustomPropertyReflector=new class Fe{startReflection(W,ce){W.subscribe(this,ce),this.handleChange({token:W,target:ce})}stopReflection(W,ce){W.unsubscribe(this,ce),this.remove(W,ce)}handleChange(W){const{token:ce,target:je}=W;this.add(ce,je)}add(W,ce){Re.getOrCreate(ce).setProperty(W.cssCustomProperty,this.resolveCSSValue(xe.getOrCreate(ce).get(W)))}remove(W,ce){Re.getOrCreate(ce).removeProperty(W.cssCustomProperty)}resolveCSSValue(W){return W&&"function"==typeof W.createCSS?W.createCSS():W}},(0,_.gn)([ne.LO],xe.prototype,"children",void 0);const le=Object.freeze({create:function ze(ue){return be.from(ue)},notifyConnection:ue=>!(!ue.isConnected||!xe.existsFor(ue)||(xe.getOrCreate(ue).bind(),0)),notifyDisconnection:ue=>!(ue.isConnected||!xe.existsFor(ue)||(xe.getOrCreate(ue).unbind(),0)),registerRoot(ue=q){we.registerRoot(ue)},unregisterRoot(ue=q){we.unregisterRoot(ue)}})},6867:(ct,pe,M)=>{function _(y){const ne=y.parentElement;if(ne)return ne;{const j=y.getRootNode();if(j.host instanceof HTMLElement)return j.host}return null}M.d(pe,{T:()=>_})},1544:(ct,pe,M)=>{M.d(pe,{N:()=>_});var _=function(y){return y.ltr="ltr",y.rtl="rtl",y}(_||{})},6296:(ct,pe,M)=>{function _(ne){var j,U,Z,re=2;for(typeof Symbol<"u"&&(U=Symbol.asyncIterator,Z=Symbol.iterator);re--;){if(U&&null!=(j=ne[U]))return j.call(ne);if(Z&&null!=(j=ne[Z]))return new y(j.call(ne));U="@@asyncIterator",Z="@@iterator"}throw new TypeError("Object is not async iterable")}function y(ne){function j(U){if(Object(U)!==U)return Promise.reject(new TypeError(U+" is not an object."));var Z=U.done;return Promise.resolve(U.value).then(function(re){return{value:re,done:Z}})}return(y=function(Z){this.s=Z,this.n=Z.next}).prototype={s:null,n:null,next:function(){return j(this.n.apply(this.s,arguments))},return:function(Z){var re=this.s.return;return void 0===re?Promise.resolve({value:Z,done:!0}):j(re.apply(this.s,arguments))},throw:function(Z){var re=this.s.return;return void 0===re?Promise.reject(Z):j(re.apply(this.s,arguments))}},new y(ne)}M.d(pe,{Z:()=>_})},5861:(ct,pe,M)=>{function _(ne,j,U,Z,re,fe,q){try{var oe=ne[fe](q),V=oe.value}catch(P){return void U(P)}oe.done?j(V):Promise.resolve(V).then(Z,re)}function y(ne){return function(){var j=this,U=arguments;return new Promise(function(Z,re){var fe=ne.apply(j,U);function q(V){_(fe,Z,re,q,oe,"next",V)}function oe(V){_(fe,Z,re,q,oe,"throw",V)}q(void 0)})}}M.d(pe,{Z:()=>y})},7582:(ct,pe,M)=>{function U(Oe,Ee,Ye,Ke){var Qt,ht=arguments.length,dt=ht<3?Ee:null===Ke?Ke=Object.getOwnPropertyDescriptor(Ee,Ye):Ke;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)dt=Reflect.decorate(Oe,Ee,Ye,Ke);else for(var fn=Oe.length-1;fn>=0;fn--)(Qt=Oe[fn])&&(dt=(ht<3?Qt(dt):ht>3?Qt(Ee,Ye,dt):Qt(Ee,Ye))||dt);return ht>3&&dt&&Object.defineProperty(Ee,Ye,dt),dt}function P(Oe,Ee,Ye,Ke){return new(Ye||(Ye=Promise))(function(dt,Qt){function fn(dn){try{Pt(Ke.next(dn))}catch(Hn){Qt(Hn)}}function hi(dn){try{Pt(Ke.throw(dn))}catch(Hn){Qt(Hn)}}function Pt(dn){dn.done?dt(dn.value):function ht(dt){return dt instanceof Ye?dt:new Ye(function(Qt){Qt(dt)})}(dn.value).then(fn,hi)}Pt((Ke=Ke.apply(Oe,Ee||[])).next())})}function be(Oe){return this instanceof be?(this.v=Oe,this):new be(Oe)}function Fe(Oe,Ee,Ye){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ht,Ke=Ye.apply(Oe,Ee||[]),dt=[];return ht={},Qt("next"),Qt("throw"),Qt("return"),ht[Symbol.asyncIterator]=function(){return this},ht;function Qt(Rn){Ke[Rn]&&(ht[Rn]=function(Gn){return new Promise(function(vi,ni){dt.push([Rn,Gn,vi,ni])>1||fn(Rn,Gn)})})}function fn(Rn,Gn){try{!function hi(Rn){Rn.value instanceof be?Promise.resolve(Rn.value.v).then(Pt,dn):Hn(dt[0][2],Rn)}(Ke[Rn](Gn))}catch(vi){Hn(dt[0][3],vi)}}function Pt(Rn){fn("next",Rn)}function dn(Rn){fn("throw",Rn)}function Hn(Rn,Gn){Rn(Gn),dt.shift(),dt.length&&fn(dt[0][0],dt[0][1])}}function Ve(Oe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Ye,Ee=Oe[Symbol.asyncIterator];return Ee?Ee.call(Oe):(Oe=function $e(Oe){var Ee="function"==typeof Symbol&&Symbol.iterator,Ye=Ee&&Oe[Ee],Ke=0;if(Ye)return Ye.call(Oe);if(Oe&&"number"==typeof Oe.length)return{next:function(){return Oe&&Ke>=Oe.length&&(Oe=void 0),{value:Oe&&Oe[Ke++],done:!Oe}}};throw new TypeError(Ee?"Object is not iterable.":"Symbol.iterator is not defined.")}(Oe),Ye={},Ke("next"),Ke("throw"),Ke("return"),Ye[Symbol.asyncIterator]=function(){return this},Ye);function Ke(dt){Ye[dt]=Oe[dt]&&function(Qt){return new Promise(function(fn,hi){!function ht(dt,Qt,fn,hi){Promise.resolve(hi).then(function(Pt){dt({value:Pt,done:fn})},Qt)}(fn,hi,(Qt=Oe[dt](Qt)).done,Qt.value)})}}}M.d(pe,{FC:()=>Fe,KL:()=>Ve,gn:()=>U,mG:()=>P,qq:()=>be}),"function"==typeof SuppressedError&&SuppressedError}},ct=>{ct(ct.s=2880)}]);