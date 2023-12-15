"use strict";(self.webpackChunkpwa_media_player=self.webpackChunkpwa_media_player||[]).push([[200],{4200:(v,c,s)=>{s.r(c),s.d(c,{SettingsPage:()=>T});var u=s(5861),e=s(9467),_=s(6814),d=s(9752),p=s(5487);const g=(n,l)=>l.id;function m(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"span"),e._uU(1),e.qZA(),e.TgZ(2,"fluent-button",35),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.removeFolder(r,"audio"))}),e._uU(3,"Remove"),e.qZA()}if(2&n){const t=l.$implicit;e.xp6(1),e.Oqu(t.name)}}function f(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1,"No Folders found"),e.qZA())}function Z(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"span"),e._uU(1),e.qZA(),e.TgZ(2,"fluent-button",35),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.removeFolder(r,"video"))}),e._uU(3,"Remove"),e.qZA()}if(2&n){const t=l.$implicit;e.xp6(1),e.Oqu(t.name)}}function h(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1,"No Folders found"),e.qZA())}let T=(()=>{class n{constructor(){this.#e=(0,e.f3M)(d.g),this.#n=(0,e.f3M)(p.c),this.selectedThemeMode=(0,e.tdS)(null),this.selectedAccentColor=(0,e.tdS)("default"),this.videoFolders=(0,e.tdS)([]),this.musicFolders=(0,e.tdS)([])}#e;#n;onThemeChange(t){const i=t.target?.value;this.#e.applyTheme(i)}ngOnInit(){this.#t("audio"),this.#t("video"),this.#e.getSelectedThemeMode().then(t=>{this.selectedThemeMode.set(t)})}#t(t){var i=this;return(0,u.Z)(function*(){const o=yield i.#e.getSavedFolders(t);"audio"===t?i.musicFolders.set(o):i.videoFolders.set(o)})()}removeFolder(t,i){var o=this;return(0,u.Z)(function*(){"ok"===(yield o.#n.showConfirm({title:"Remove this folder ?",message:`Removing folder "${t.name}" will remove all media from library of this folder. But folder still remain in file system.`,cancelButtonText:"Cancel",okButtonText:"Remove folder"}))&&(yield o.#e.removeFolder(t.id),o.#t(i))})()}onAccentColorChange(t){this.#e.setAccentColor(t)}static#o=this.\u0275fac=function(i){return new(i||n)};static#i=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings"]],standalone:!0,features:[e.jDz],decls:106,vars:4,consts:[[1,"page-wrapper"],[1,"music-toolbar"],[1,"toolbar-title"],[1,"page-content"],["alt","music library icon","slot","start","src","assets/icons/folder.svg"],["slot","heading"],[1,"panel","folders-panel"],["slot","end"],["alt","add folder icon","src","assets/icons/add_folder.svg","slot","start"],["alt","video library icon","src","assets/icons/folder.svg","slot","start"],["alt","Personalization icon","slot","start","src","assets/icons/brush.svg"],[1,"panel"],["orientation","vertical",3,"value","change"],["value","light"],["value","dark"],["value","system"],["alt","color icon","src","assets/icons/color.svg","slot","start"],["orientation","vertical",3,"value"],["accent",""],["value","default"],["value","custom"],["type","color","title","pick an accent color",3,"change"],["alt","music icon","slot","start","src","assets/icons/music.svg"],[1,"mt-0"],[1,"project-list"],["rel","noopener","target","_blank","href","https://www.typescriptlang.org/"],["rel","noopener","target","_blank","href","https://dexie.org/"],["rel","noopener","target","_blank","href","https://angular.dev"],["rel","noopener","target","_blank","href","https://learn.microsoft.com/en-us/fluent-ui/web-components/"],["rel","noopener","target","_blank","href","https://github.com/uuidjs/uuid"],["rel","noopener","target","_blank","href","https://github.com/coltongriffith/fluenticons"],["rel","noopener","target","_blank","href","https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/wicg-file-system-access"],[1,"about-dev"],["rel","author","href","www.linkedin.com/in/gyan-parkash-ba286455"],["src","assets/icons/heart.svg","alt","love icon"],["title","Remove this folder",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"section",1)(2,"span",2),e._uU(3,"Settings"),e.qZA()(),e.TgZ(4,"div",3)(5,"h4"),e._uU(6,"Libraries"),e.qZA(),e.TgZ(7,"fluent-accordion")(8,"fluent-accordion-item"),e._UZ(9,"img",4),e.TgZ(10,"span",5),e._uU(11," Music library locations"),e.qZA(),e.TgZ(12,"div",6),e.SjG(13,m,4,1,null,null,g,!1,f,2,0),e.qZA(),e.TgZ(16,"fluent-button",7),e._UZ(17,"img",8),e._uU(18," Add folder"),e.qZA()(),e.TgZ(19,"fluent-accordion-item"),e._UZ(20,"img",9),e.TgZ(21,"span",5),e._uU(22," Video library locations"),e.qZA(),e.TgZ(23,"div",6),e.SjG(24,Z,4,1,null,null,g,!1,h,2,0),e.qZA(),e.TgZ(27,"fluent-button",7),e._UZ(28,"img",8),e._uU(29," Add folder"),e.qZA()()(),e.TgZ(30,"h4"),e._uU(31,"Personalization"),e.qZA(),e.TgZ(32,"fluent-accordion")(33,"fluent-accordion-item"),e._UZ(34,"img",10),e.TgZ(35,"span",5),e._uU(36," App theme"),e.qZA(),e.TgZ(37,"div",11)(38,"fluent-radio-group",12),e.NdJ("change",function(a){return o.onThemeChange(a)}),e.TgZ(39,"fluent-radio",13),e._uU(40,"Light"),e.qZA(),e.TgZ(41,"fluent-radio",14),e._uU(42,"Dark"),e.qZA(),e.TgZ(43,"fluent-radio",15),e._uU(44,"Use system settings"),e.qZA()()(),e.TgZ(45,"span",7),e._uU(46," Light "),e.qZA()(),e.TgZ(47,"fluent-accordion-item"),e._UZ(48,"img",16),e.TgZ(49,"span",5),e._uU(50," Accent color"),e.qZA(),e.TgZ(51,"div",11)(52,"fluent-radio-group",17,18)(54,"fluent-radio",19),e._uU(55,"Default (blue)"),e.qZA(),e.TgZ(56,"fluent-radio",20),e._uU(57,"Custom"),e.qZA()(),e.TgZ(58,"input",21),e.NdJ("change",function(a){return o.onAccentColorChange(a.target.value)}),e.qZA()(),e.TgZ(59,"span",7),e._uU(60," Color"),e.qZA()()(),e.TgZ(61,"h4"),e._uU(62,"About"),e.qZA(),e.TgZ(63,"fluent-accordion")(64,"fluent-accordion-item"),e._UZ(65,"img",22),e.TgZ(66,"span",5),e._uU(67," PWA Media Player"),e.qZA(),e.TgZ(68,"div",11)(69,"p",23),e._uU(70,"Media player for web"),e.qZA(),e._UZ(71,"fluent-divider"),e.TgZ(72,"p"),e._uU(73,"This app is made possible by following open source projects"),e.qZA(),e.TgZ(74,"ul",24)(75,"li")(76,"a",25),e._uU(77,"Typescript"),e.qZA()(),e.TgZ(78,"li")(79,"a",26),e._uU(80,"Dexie"),e.qZA()(),e.TgZ(81,"li")(82,"a",27),e._uU(83,"Angular"),e.qZA()(),e.TgZ(84,"li")(85,"a",28),e._uU(86,"Fluent web component"),e.qZA()(),e.TgZ(87,"li")(88,"a",29),e._uU(89,"UUID"),e.qZA()(),e.TgZ(90,"li")(91,"a",30),e._uU(92,"Fluent icons"),e.qZA()(),e.TgZ(93,"li")(94,"a",31),e._uU(95,"wicg file system access typings"),e.qZA()()(),e._UZ(96,"fluent-divider"),e.TgZ(97,"p",32),e._uU(98," Designed and developed by "),e.TgZ(99,"a",33),e._uU(100," Gyan Parkash Gautam "),e.qZA(),e._uU(101," and made with "),e._UZ(102,"img",34),e._uU(103,". "),e.qZA()(),e.TgZ(104,"span",7),e._uU(105," Version 1.0.0 "),e.qZA()()()()()),2&i&&(e.wJu(13,o.musicFolders()),e.wJu(24,o.videoFolders()),e.xp6(38),e.Q6J("value",o.selectedThemeMode()),e.xp6(14),e.s9C("value",o.selectedAccentColor()))},dependencies:[_.ez],styles:["fluent-accordion-item[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{margin:15px 30px}fluent-radio-group[_ngcontent-%COMP%] > fluent-radio[_ngcontent-%COMP%]{margin-bottom:10px}.panel.folders-panel[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;row-gap:10px}.panel[_ngcontent-%COMP%]   ul.project-list[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]   ul.project-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]   ul.project-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.panel[_ngcontent-%COMP%]   .about-dev[_ngcontent-%COMP%]{display:flex;align-items:center}.panel[_ngcontent-%COMP%]   .about-dev[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;margin:0 6px}"]})}return n})()}}]);