(function(h){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],h):"object"===typeof exports?h(require("jquery")):h(jQuery)})(function(h){var p=h.jgrid,C=function(){var a=h.makeArray(arguments);a.unshift("");a.unshift("");a.unshift(this.p);return p.feedback.apply(this,a)},E=function(a,b){return p.mergeCssClasses(p.getRes(p.guiStyles[this.p.guiStyle],"states."+a),b||"")},D=function(a,b){var f=this.grid.fbRows;return h((null!=f&&f[0].cells.length>
b?f[a.rowIndex]:a).cells[b])};p.extend({editCell:function(a,b,f){return this.each(function(){var d=this,g=h(d),e=d.p,l,c,k,t;l=d.rows;if(d.grid&&!0===e.cellEdit&&null!=l&&null!=l[a]&&(a=parseInt(a,10),b=parseInt(b,10),!isNaN(a)&&!isNaN(b))){var v=l[a],m=null!=v?v.id:null,n=h(v),q=parseInt(e.iCol,10),A=parseInt(e.iRow,10),w=h(l[A]),u=e.savedRow;if(null!=m){e.selrow=m;e.knv||g.jqGrid("GridNav");if(0<u.length){if(!0===f&&a===A&&b===q)return;g.jqGrid("saveCell",u[0].id,u[0].ic)}else setTimeout(function(){h("#"+
p.jqID(e.knv)).attr("tabindex","-1").focus()},1);t=e.colModel[b];l=t.name;if("subgrid"!==l&&"cb"!==l&&"rn"!==l){k=D.call(d,v,b);v=t.editable;h.isFunction(v)&&(v=v.call(d,{rowid:m,iCol:b,iRow:a,name:l,cm:t,mode:"cell"}));var x=E.call(d,"select","edit-cell"),y=E.call(d,"hover","selected-row");if(!0!==v||!0!==f||k.hasClass("not-editable-cell"))0<=q&&0<=A&&(D.call(d,w[0],q).removeClass(x),w.removeClass(y)),k.addClass(x),n.addClass(y),c=k.html().replace(/\&#160\;/ig,""),C.call(d,"onSelectCell",m,l,c,a,
b);else{0<=q&&0<=A&&(D.call(d,w[0],q).removeClass(x),w.removeClass(y));k.addClass(x);n.addClass(y);t.edittype||(t.edittype="text");n=t.edittype;try{c=h.unformat.call(d,k,{rowId:m,colModel:t},b)}catch(r){c="textarea"===n?k.text():k.html()}e.autoEncodeOnEdit&&(c=p.oldDecodePostedData(c));u.push({id:a,ic:b,name:l,v:c});if("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))c="";h.isFunction(e.formatCell)&&(q=e.formatCell.call(d,m,l,c,a,b),void 0!==q&&(c=q));C.call(d,"beforeEditCell",m,l,
c,a,b);t=h.extend({},t.editoptions||{},{id:a+"_"+l,name:l,rowId:m,mode:"cell"});var B=p.createEl.call(d,n,t,c,!0,h.extend({},p.ajaxOptions,e.ajaxSelectOptions||{})),n=k;(q=!0===e.treeGrid&&l===e.ExpandColumn)&&(n=k.children("span.cell-wrapperleaf,span.cell-wrapper"));n.html("").append(B).attr("tabindex","0");q&&h(B).width(k.width()-k.children("div.tree-wrap").outerWidth());p.bindEv.call(d,B,t);setTimeout(function(){h(B).focus()},1);h("input, select, textarea",k).bind("keydown",function(f){27===f.keyCode&&
(0<h("input.hasDatepicker",k).length?h(".ui-datepicker").is(":hidden")?g.jqGrid("restoreCell",a,b):h("input.hasDatepicker",k).datepicker("hide"):g.jqGrid("restoreCell",a,b));if(13===f.keyCode&&!f.shiftKey)return g.jqGrid("saveCell",a,b),!1;if(9===f.keyCode){if(d.grid.hDiv.loading)return!1;f.shiftKey?g.jqGrid("prevCell",a,b):g.jqGrid("nextCell",a,b)}f.stopPropagation()});C.call(d,"afterEditCell",m,l,c,a,b);g.triggerHandler("jqGridAfterEditCell",[m,l,c,a,b])}e.iCol=b;e.iRow=a}}}})},saveCell:function(a,
b){return this.each(function(){var f=this,d=h(f),g=f.p,e=p.info_dialog,l=p.jqID;if(f.grid&&!0===g.cellEdit){var c=d.jqGrid("getGridRes","errors"),k=c.errcap,t=d.jqGrid("getGridRes","edit").bClose,v=g.savedRow,m=1<=v.length?0:null;if(null!==m){var n=f.rows[a],q=n.id,A=h(n),w=g.colModel[b],u=w.name,x,y=D.call(f,n,b),B={},r=p.getEditedValue.call(f,y,w,B);if(r!==v[m].v){x=d.triggerHandler("jqGridBeforeSaveCell",[q,u,r,a,b]);void 0!==x&&(r=x);h.isFunction(g.beforeSaveCell)&&(x=g.beforeSaveCell.call(f,
q,u,r,a,b),void 0!==x&&(r=x));var E=p.checkValues.call(f,r,b,void 0,void 0,{oldValue:v[m].v,newValue:r,cmName:u,rowid:q,iCol:b,iRow:a,cm:w,tr:n,td:y,mode:"cell"}),n=w.formatoptions||{};if(!0===E[0]){m=d.triggerHandler("jqGridBeforeSubmitCell",[q,u,r,a,b])||{};h.isFunction(g.beforeSubmitCell)&&((m=g.beforeSubmitCell.call(f,q,u,r,a,b))||(m={}));0<h("input.hasDatepicker",y).length&&h("input.hasDatepicker",y).datepicker("hide");"date"===w.formatter&&!0!==n.sendFormatted&&(r=h.unformat.date.call(f,r,w));
if("remote"===g.cellsubmit)if(g.cellurl){var z={};z[u]=r;var c=g.prmNames,n=c.oper,F=f.grid.hDiv;z[c.id]=p.stripPref(g.idPrefix,q);z[n]=c.editoper;z=h.extend(m,z);g.autoEncodeOnEdit&&h.each(z,function(a,b){h.isFunction(b)||(z[a]=p.oldEncodePostedData(b))});d.jqGrid("progressBar",{method:"show",loadtype:g.loadui,htmlcontent:p.defaults.savetext||"Saving..."});F.loading=!0;h.ajax(h.extend({url:h.isFunction(g.cellurl)?g.cellurl.call(f,g.cellurl,a,b,q,r,u):g.cellurl,data:p.serializeFeedback.call(f,g.serializeCellData,
"jqGridSerializeCellData",z),type:"POST",complete:function(c){d.jqGrid("progressBar",{method:"hide",loadtype:g.loadui});F.loading=!1;if((300>c.status||304===c.status)&&(0!==c.status||4!==c.readyState)){var m=d.triggerHandler("jqGridAfterSubmitCell",[f,c,z.id,u,r,a,b])||[!0,""];!0===m[0]&&h.isFunction(g.afterSubmitCell)&&(m=g.afterSubmitCell.call(f,c,z.id,u,r,a,b));!0===m[0]?(d.jqGrid("setCell",q,b,r,!1,!1,!0),y.addClass("dirty-cell"),A.addClass("edited"),C.call(f,"afterSaveCell",q,u,r,a,b),v.splice(0,
1)):(e.call(f,k,m[1],t),d.jqGrid("restoreCell",a,b))}},error:function(c,m,n){h("#lui_"+l(g.id)).hide();F.loading=!1;d.triggerHandler("jqGridErrorCell",[c,m,n]);h.isFunction(g.errorCell)?g.errorCell.call(f,c,m,n):e.call(f,k,c.status+" : "+c.statusText+"<br/>"+m,t);d.jqGrid("restoreCell",a,b)}},p.ajaxOptions,g.ajaxCellOptions||{}))}else try{e.call(f,k,c.nourl,t),d.jqGrid("restoreCell",a,b)}catch(G){}"clientArray"===g.cellsubmit&&(d.jqGrid("setCell",q,b,"select"===w.edittype&&"select"!==w.formatter?
B.text:r,!1,!1,!0),y.addClass("dirty-cell"),A.addClass("edited"),C.call(f,"afterSaveCell",q,u,r,a,b),v.splice(0,1))}else try{setTimeout(function(){e.call(f,k,r+" "+E[1],t)},100),d.jqGrid("restoreCell",a,b)}catch(G){}}else d.jqGrid("restoreCell",a,b)}setTimeout(function(){h("#"+l(g.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(a,b){return this.each(function(){var f=this.p,d=this.rows[a],g=d.id,e,l;if(this.grid&&!0===f.cellEdit){var c=f.savedRow;e=D.call(this,d,b);if(1<=c.length){if(h.isFunction(h.fn.datepicker))try{h("input.hasDatepicker",
e).datepicker("hide")}catch(k){}d=f.colModel[b];!0===f.treeGrid&&d.name===f.ExpandColumn?e.children("span.cell-wrapperleaf,span.cell-wrapper").empty():e.empty();e.attr("tabindex","-1");e=c[0].v;l=d.formatoptions||{};"date"===d.formatter&&!0!==l.sendFormatted&&(e=h.unformat.date.call(this,e,d));h(this).jqGrid("setCell",g,b,e,!1,!1,!0);C.call(this,"afterRestoreCell",g,e,a,b);c.splice(0,1)}setTimeout(function(){h("#"+f.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(a,b){return this.each(function(){var f=
h(this),d=this.p,g=!1,e,l,c,k=this.rows;if(this.grid&&!0===d.cellEdit&&null!=k&&null!=k[a]){for(e=b+1;e<d.colModel.length;e++)if(c=d.colModel[e],l=c.editable,h.isFunction(l)&&(l=l.call(this,{rowid:k[a].id,iCol:e,iRow:a,name:c.name,cm:c,mode:"cell"})),!0===l){g=e;break}!1!==g?f.jqGrid("editCell",a,g,!0):0<d.savedRow.length&&f.jqGrid("saveCell",a,b)}})},prevCell:function(a,b){return this.each(function(){var f=h(this),d=this.p,g=!1,e,l,c,k=this.rows;if(this.grid&&!0===d.cellEdit&&null!=k&&null!=k[a]){for(e=
b-1;0<=e;e--)if(c=d.colModel[e],l=c.editable,h.isFunction(l)&&(l=l.call(this,{rowid:k[a].id,iCol:e,iRow:a,name:c.name,cm:c,mode:"cell"})),!0===l){g=e;break}!1!==g?f.jqGrid("editCell",a,g,!0):0<d.savedRow.length&&f.jqGrid("saveCell",a,b)}})},GridNav:function(){return this.each(function(){function a(a,b,c){a=f.rows[a];if("v"===c.substr(0,1)){var d=k.clientHeight,g=k.scrollTop,h=a.offsetTop+a.clientHeight,e=a.offsetTop;"vd"===c&&h>=d&&(k.scrollTop+=a.clientHeight);"vu"===c&&e<g&&(k.scrollTop-=a.clientHeight)}"h"===
c&&(c=k.scrollLeft,b=a.cells[b],a=b.offsetLeft,b.offsetLeft+b.clientWidth>=k.clientWidth+parseInt(c,10)?k.scrollLeft+=b.clientWidth:a<c&&(k.scrollLeft-=b.clientWidth))}function b(a,b){var c=0,d,f=g.colModel;if("lft"===b)for(c=a+1,d=a;0<=d;d--)if(!0!==f[d].hidden){c=d;break}if("rgt"===b)for(c=a-1,d=a;d<f.length;d++)if(!0!==f[d].hidden){c=d;break}return c}var f=this,d=h(f),g=f.p,e=f.grid,l,c;if(e&&!0===g.cellEdit){var k=e.bDiv;g.knv=g.id+"_kn";var t=h("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+
g.knv+"'></div></div>");h(t).insertBefore(e.cDiv);h("#"+g.knv).focus().keydown(function(h){var e=parseInt(g.iRow,10),k=parseInt(g.iCol,10);c=h.keyCode;"rtl"===g.direction&&(37===c?c=39:39===c&&(c=37));switch(c){case 38:0<e-1&&(a(e-1,k,"vu"),d.jqGrid("editCell",e-1,k,!1));break;case 40:e+1<=f.rows.length-1&&(a(e+1,k,"vd"),d.jqGrid("editCell",e+1,k,!1));break;case 37:0<=k-1&&(l=b(k-1,"lft"),a(e,l,"h"),d.jqGrid("editCell",e,l,!1));break;case 39:k+1<=g.colModel.length-1&&(l=b(k+1,"rgt"),a(e,l,"h"),d.jqGrid("editCell",
e,l,!1));break;case 13:0<=k&&0<=e&&d.jqGrid("editCell",e,k,!0);break;default:return!0}return!1})}})},getChangedCells:function(a){var b=[];a||(a="all");this.each(function(){var f=this,d=f.p,g=p.htmlDecode,e=f.rows;f.grid&&!0===d.cellEdit&&h(e).each(function(l){var c={};if(h(this).hasClass("edited")){var k=this;h(this.cells).each(function(b){var p=d.colModel[b],m=p.name,n=D.call(f,k,b);if("cb"!==m&&"subgrid"!==m&&"rn"!==m&&("dirty"!==a||n.hasClass("dirty-cell")))try{c[m]=h.unformat.call(f,n[0],{rowId:e[l].id,
colModel:p},b)}catch(q){c[m]=g(n.html())}});c.id=this.id;b.push(c)}})});return b}})});
/*
//# sourceMappingURL=grid.celledit.map
*/