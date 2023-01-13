(function(){"use strict";var t={4180:function(t,e,n){var o=n(9242),i=n(3396);const l={class:"header"},r=(0,i._)("h1",null,"My notes",-1);function s(t,e,n,o,s,a){const u=(0,i.up)("AddNewNote"),d=(0,i.up)("NoteItems");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",l,[r,(0,i.Wm)(u,{onAddNewNote:a.addNewNote},null,8,["onAddNewNote"])]),(0,i.Wm)(d,{notes:s.notes,onDeleteNote:a.deleteNote},null,8,["notes","onDeleteNote"])],64)}const a={class:"noteItems"};function u(t,e,n,o,l,r){const s=(0,i.up)("Note");return(0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.notes,(t=>((0,i.wg)(),(0,i.j4)(s,{note:t,onDeleteNote:r.deleteNote},null,8,["note","onDeleteNote"])))),256))])}var d=n(7139);const c=t=>((0,i.dD)("data-v-1c453f0e"),t=t(),(0,i.Cn)(),t),f={class:"note"},p={class:"noteControls"},h={class:"btnCheckbox"},v=["true-value","false-value"],m=c((()=>(0,i._)("span",null,"…",-1))),w={key:0,class:"noteTitle"},N={key:2,class:"noteText"};function x(t,e,n,l,r,s){return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",p,[(0,i._)("label",h,[(0,i.wy)((0,i._)("input",{class:"checkboxEdit",name:"edit",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>r.edit=t),"true-value":r.on,"false-value":r.off},null,8,v),[[o.e8,r.edit]]),m]),(0,i._)("button",{onClick:e[1]||(e[1]=e=>t.$emit("deleteNote",n.note.id)),class:"btnNote",id:"btnDelete"},"×")]),r.edit===r.off?((0,i.wg)(),(0,i.iD)("h2",w,(0,d.zw)(n.note.title),1)):(0,i.wy)(((0,i.wg)(),(0,i.iD)("textarea",{key:1,class:"noteTitleEdit","onUpdate:modelValue":e[2]||(e[2]=t=>n.note.title=t)},null,512)),[[o.nr,n.note.title]]),r.edit===r.off?((0,i.wg)(),(0,i.iD)("p",N,(0,d.zw)(n.note.text),1)):(0,i.wy)(((0,i.wg)(),(0,i.iD)("textarea",{key:3,class:"noteTextEdit","onUpdate:modelValue":e[3]||(e[3]=t=>n.note.text=t)},null,512)),[[o.nr,n.note.text]])])}var b={data(){return{on:!0,off:!1,edit:!1}},props:["note"],name:"Note",components:{}},y=n(89);const g=(0,y.Z)(b,[["render",x],["__scopeId","data-v-1c453f0e"]]);var _=g,D={props:["notes"],name:"NotesItems",components:{Note:_},methods:{deleteNote(t){this.$emit("deleteNote",t)}}};const k=(0,y.Z)(D,[["render",u]]);var O=k;const C=t=>((0,i.dD)("data-v-5e0e80dd"),t=t(),(0,i.Cn)(),t),T=C((()=>(0,i._)("button",{type:"submit",class:"btnAddNote"},"Add note",-1)));function j(t,e,n,l,r,s){return(0,i.wg)(),(0,i.iD)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>s.onSubmit&&s.onSubmit(...t)),["prevent"])),class:"addNewNote"},[(0,i.wy)((0,i._)("input",{class:"newNoteText",type:"text",placeholder:"title here...","onUpdate:modelValue":e[0]||(e[0]=t=>r.title=t)},null,512),[[o.nr,r.title]]),(0,i.wy)((0,i._)("textarea",{class:"newNoteTitle",rows:"5",type:"text",placeholder:"text here...","onUpdate:modelValue":e[1]||(e[1]=t=>r.text=t)},null,512),[[o.nr,r.text]]),T],32)}var A={data(){return{title:"",text:""}},methods:{onSubmit(){if(this.title.trim()&&this.text.trim()){console.log("submit"),console.log(this.title),console.log(this.text);const t={id:Date.now(),title:this.title,text:this.text};this.$emit("addNewNote",t),this.title=this.text=""}}}};const I=(0,y.Z)(A,[["render",j],["__scopeId","data-v-5e0e80dd"]]);var U=I,V={data(){return{notes:[{id:1,title:"Новая встреча",text:"1 августа в 16 00 в кофейне с мишей!"},{id:2,title:"Красивая цитата... заставляет задуматься",text:"Кто знает — не говорит. Кто говорит — не знает. (Лао-цзы)"},{id:3,title:"Опять дамашка",text:"Сделать 1-9 задание из 4 параграфа (78-90 страницы)"},{id:4,title:"Рецепт фунчозы в овощами (20мин)",text:"Залить лапшу на 6 минут кипятком и на это время поставить на сковороду нарезанное мясо, далее напрезать сельдерей, болгарский перец можно огурец и все смешать с мясом и готвой лапшой. залить соевым соусом и можно добавить острый соус."},{id:5,title:"Фильм о котором все говорят...",text:"Драйв (2011) Великолепный гонщик — при свете дня он выполняет каскадерские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт — и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего — виртуозно уходить от погони…"},{id:6,title:"Трек который в такси играл",text:"Plenka - Closed"}]}},methods:{addNewNote(t){this.notes.unshift(t)},deleteNote(t){this.notes=this.notes.filter((e=>e.id!==t))}},name:"App",components:{NoteItems:O,AddNewNote:U}};const E=(0,y.Z)(V,[["render",s]]);var S=E;(0,o.ri)(S).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var l=e[o]={exports:{}};return t[o](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,l){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],i=t[d][1],l=t[d][2];for(var s=!0,a=0;a<o.length;a++)(!1&l||r>=l)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(s=!1,l<r&&(r=l));if(s){t.splice(d--,1);var u=i();void 0!==u&&(e=u)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[o,i,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,l,r=o[0],s=o[1],a=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var d=a(n)}for(e&&e(o);u<r.length;u++)l=r[u],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(d)},o=self["webpackChunkmy_vue"]=self["webpackChunkmy_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4180)}));o=n.O(o)})();
//# sourceMappingURL=app.ac8d165e.js.map