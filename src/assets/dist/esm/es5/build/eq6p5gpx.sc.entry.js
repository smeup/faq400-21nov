import{h}from"../mycomponent.core.js";import{f as PaginatorPos,g as ShowGrid,h as calcTotals,a as filterRows,b as SortMode,i as groupRows,c as sortRows,j as isNumber,k as isIcon,l as isVoCodver,d as isImage,m as isLink,n as isBar}from"./chunk-30ec9921.js";import"./chunk-77ecfe7f.js";var KupDataTable=function(){function t(){this.showFilters=!1,this.filters={},this.globalFilter=!1,this.sortEnabled=!0,this.sort=[],this.rowsPerPage=10,this.paginatorPos=PaginatorPos.TOP,this.columnsWidth=[],this.showHeader=!0,this.showGrid=ShowGrid.NONE,this.groups=[],this.expandGroups=!1,this.multiSelection=!1,this.globalFilterValue="",this.currentPage=1,this.currentRowsPerPage=10,this.selectedRows=[],this.groupState={},this.openedMenu=null,this.density="medium",this.renderedRows=[]}return t.prototype.rowsPerPageHandler=function(t){this.currentRowsPerPage=t},t.prototype.expandGroupsHandler=function(){this.groupState={},this.forceGroupExpansion()},t.prototype.recalculateRows=function(){this.initRows()},t.prototype.componentWillLoad=function(){this.rowsPerPageHandler(this.rowsPerPage),this.initRows(),this.expandGroups&&this.forceGroupExpansion()},t.prototype.componentDidLoad=function(){this.selectRow&&this.selectRow>0&&this.selectRow<=this.renderedRows.length&&(this.selectedRows=[],this.selectedRows.push(this.renderedRows[this.selectRow-1]),this.kupAutoRowSelect.emit({selectedRow:this.selectedRows[0]}))},t.prototype.getColumns=function(){return this.data&&this.data.columns?this.data.columns:[{title:"",name:"",size:0}]},t.prototype.getVisibleColumns=function(){var t=this,e=this.getColumns().filter(function(t){return!t.hasOwnProperty("visible")||t.visible});return this.isGrouping()?e.filter(function(e){for(var r=null,o=0,n=t.groups;o<n.length;o++){var i=n[o];if(i.column===e.name){r=i;break}}return!r||!r.hasOwnProperty("visible")||r.visible}):e},t.prototype.getColumnByName=function(t){for(var e=0,r=this.getColumns();e<r.length;e++){var o=r[e];if(o.name===t)return o}return null},t.prototype.getGroupByName=function(t){if(!this.isGrouping())return null;for(var e=0,r=this.groups;e<r.length;e++){var o=r[e];if(o.column===t)return o}return null},t.prototype.getRows=function(){return this.data&&this.data.rows?this.data.rows:[]},t.prototype.initRows=function(){var t=this.getFilteredRows(),e=this.sortRows(t);this.footer=calcTotals(e,this.totals),this.rows=this.groupRows(e),this.paginatedRows=this.paginateRows(this.rows)},t.prototype.getFilteredRows=function(){return filterRows(this.getRows(),this.filters,this.globalFilterValue,this.getVisibleColumns().map(function(t){return t.name}))},t.prototype.isGrouping=function(){return this.groups&&this.groups.length>0},t.prototype.hasRowActions=function(){return void 0!==this.rowActions},t.prototype.removeGroup=function(t){this.groupState={};var e=this.groups.indexOf(t);e>=0&&(this.groups.splice(e,1),this.groups=this.groups.slice())},t.prototype.hasTotals=function(){return this.totals&&Object.keys(this.totals).length>0},t.prototype.forceGroupExpansion=function(){var t=this;this.rows.forEach(function(e){return t.forceRowGroupExpansion(e)})},t.prototype.forceRowGroupExpansion=function(t){var e=this;if(t.group){t.group.expanded=!0;var r=this.groupState[t.group.id];r?r.expanded=this.expandGroups:r={expanded:this.expandGroups},this.groupState[t.group.id]=r,t.group.children&&t.group.children.forEach(function(t){return e.forceRowGroupExpansion(t)})}},t.prototype.onColumnSort=function(t,e){for(var r=t.ctrlKey,o=0;o<this.sort.length&&(n=this.sort[o]).column!==e;o++);if(o<this.sort.length){var n=this.sort[o],i=Object.assign({},n,{sortMode:n.sortMode===SortMode.A?SortMode.D:SortMode.A});if(r){var s=this.sort.slice();s[o]=i,this.sort=s}else this.sort=[i]}else n={column:e,sortMode:SortMode.A},this.sort=r?this.sort.concat([n]):[n]},t.prototype.onFilterChange=function(t,e){var r=t.detail;this.currentPage=1;var o=Object.assign({},this.filters);0===r.value.length?delete o[e]:o[e]=r.value,this.filters=o},t.prototype.onGlobalFilterChange=function(t){var e=t.detail;this.currentPage=1,this.globalFilterValue=e.value},t.prototype.handlePageChanged=function(t){this.currentPage=t.detail.newPage},t.prototype.handleRowsPerPageChanged=function(t){this.currentRowsPerPage=t.detail.newRowsPerPage},t.prototype.onRowClick=function(t,e){this.handleRowSelect(e,t.ctrlKey);var r=t.target,o=null;if(r instanceof HTMLElement&&"TR"!==r.tagName){for(var n=r;"TD"!==n.tagName;)n=n.parentElement;o=n.dataset.column}this.kupRowSelected.emit({selectedRows:this.selectedRows,clickedColumn:o})},t.prototype.onDefaultRowActionClick=function(t,e){var r=e.action,o=e.row,n=e.type,i=e.index;t.stopPropagation(),this.kupRowActionClicked.emit({action:r,index:i,row:o,type:n})},t.prototype.onRowActionExpanderClick=function(t,e){t.stopPropagation(),this.kupRowActionClicked.emit({row:e,type:"expander"})},t.prototype.handleRowSelect=function(t,e){if(this.multiSelection)if(e&&this.selectedRows){var r=this.selectedRows.indexOf(t);r<0?this.selectedRows=this.selectedRows.concat([t]):(this.selectedRows.splice(r,1),this.selectedRows=this.selectedRows.slice())}else this.selectedRows=[t];else this.selectedRows=[t]},t.prototype.onRowCheckboxSelection=function(t,e){if(t.target.checked)this.selectedRows=this.selectedRows.length>0?this.selectedRows.concat([e]):[e];else{var r=this.selectedRows.indexOf(e);r>=0&&(this.selectedRows.splice(r,1),this.selectedRows=this.selectedRows.slice())}this.kupRowSelected.emit({selectedRows:this.selectedRows,clickedColumn:null})},t.prototype.onRowExpand=function(t){t.group.expanded=!t.group.expanded,this.groupState[t.group.id].expanded=t.group.expanded,this.groupState=Object.assign({},this.groupState)},t.prototype.onSelectAll=function(t){this.selectedRows=t.target.checked?this.renderedRows:[],this.kupRowSelected.emit({selectedRows:this.selectedRows,clickedColumn:null})},t.prototype.onColumnMouseEnter=function(t){var e=this;this.columnOverTimeout=setTimeout(function(){e.openedMenu=t},500)},t.prototype.onColumnMouseLeave=function(t){clearTimeout(this.columnOverTimeout),this.openedMenu===t&&(this.openedMenu=null)},t.prototype.switchColumnGroup=function(t,e){if(this.openedMenu=null,this.groupState={},null!==t){var r=this.groups.indexOf(t);this.groups.splice(r,1),this.groups=this.groups.slice()}else this.groups=this.groups.concat([{column:e,visible:!0}])},t.prototype.onOptionClicked=function(t,e){this.kupOptionClicked.emit({column:t,row:e})},t.prototype.groupRows=function(t){if(!this.isGrouping())return t;var e=groupRows(t,this.groups,this.totals);return this.adjustGroupState(e),e},t.prototype.adjustGroupState=function(t){var e=this;t&&0!==t.length&&t[0].hasOwnProperty("group")&&t.forEach(function(t){return e.adjustGroupStateFromRow(t)})},t.prototype.adjustGroupStateFromRow=function(t){var e=this;if(t&&t.hasOwnProperty("group")){var r=t.group,o=this.groupState[r.id];o?r.expanded=o.expanded:this.groupState[r.id]=r,r.children.forEach(function(t){return e.adjustGroupStateFromRow(t)})}},t.prototype.sortRows=function(t){return sortRows(t,this.sort)},t.prototype.paginateRows=function(t){var e=this.currentPage*this.currentRowsPerPage-this.currentRowsPerPage;return t.slice(e,e+this.currentRowsPerPage)},t.prototype.getSortIcon=function(t){for(var e=0,r=this.sort;e<r.length;e++){var o=r[e];if(o.column===t)return"A"===o.sortMode?"mdi-sort-ascending":"mdi-sort-descending"}return"mdi-sort"},t.prototype.calculateColspan=function(){var t=this.getVisibleColumns().length;return this.multiSelection&&(t+=1),this.isGrouping()&&this.hasTotals()&&(t+=1),this.hasRowActions()&&(t+=1),t},t.prototype.isGroupExpanded=function(t){var e=t.group;return!!e&&!!this.groupState[e.id]&&this.groupState[e.id].expanded},t.prototype.renderHeader=function(){var t=this,e=this.columnsWidth.length>0,r=this.getVisibleColumns().map(function(r){var o=null;if(t.showFilters){var n="";t.filters&&t.filters[r.name]&&(n=t.filters[r.name]),o=h("div",{onMouseEnter:function(){return t.onColumnMouseLeave(r.name)},onMouseLeave:function(){return t.onColumnMouseEnter(r.name)}},h("kup-text-input",{class:"datatable-filter",initialValue:n,"data-col":r.name,onKetchupTextInputUpdated:function(e){t.onFilterChange(e,r.name)}}))}var i=null;t.sortEnabled&&(i=h("span",{class:"column-sort",onMouseEnter:function(){return t.onColumnMouseLeave(r.name)},onMouseLeave:function(){return t.onColumnMouseEnter(r.name)}},h("span",{role:"button","aria-label":"Sort column",class:"mdi "+t.getSortIcon(r.name),onClick:function(e){return t.onColumnSort(e,r.name)}})));var s=null;if(e)for(var a=0;a<t.columnsWidth.length;a++){var l=t.columnsWidth[a];if(l.column===r.name){var u=l.width.toString()+"px";s={width:u,minWidth:u,maxWidth:u};break}}var c=[],p=t.getGroupByName(r.name),d=null!=p?"Disattiva raggruppamento":"Attiva raggruppamento";c.push(h("li",{role:"menuitem",onClick:function(){return t.switchColumnGroup(p,r.name)}},h("span",{class:"mdi mdi-book"}),d)),c.push(h("li",{role:"menuitem",onClick:function(){return t.kupAddColumn.emit({column:r.name})}},h("span",{class:"mdi mdi-table-column-plus-after"}),"Aggiungi colonna"));var g=null;return 0!==c.length&&(g=h("div",{class:"column-menu "+(t.openedMenu===r.name?"open":"closed")},h("ul",{role:"menubar"},c))),h("th",{style:s,onMouseEnter:function(){return t.onColumnMouseEnter(r.name)},onMouseLeave:function(){return t.onColumnMouseLeave(r.name)}},h("span",{class:"column-title"},r.title),i,o,g)}),o=null;this.multiSelection&&(o=h("th",{style:{width:"30px",margin:"0 auto"}},h("input",{type:"checkbox",onChange:function(e){return t.onSelectAll(e)},title:"selectedRow: "+this.selectedRows.length+" - renderedRows: "+this.renderedRows.length,checked:this.selectedRows.length>0&&this.selectedRows.length===this.renderedRows.length})));var n=null;this.isGrouping()&&this.hasTotals()&&(n=h("th",null));var i=null;return this.hasRowActions()&&(i=h("th",null)),[o,n,i].concat(r)},t.prototype.renderFooter=function(){var t=this;if(!this.hasTotals())return null;var e=this.getVisibleColumns().map(function(e){return h("td",null,t.footer[e.name])}),r=null;this.multiSelection&&(r=h("td",null));var o=null;return this.isGrouping()&&this.hasTotals()&&(o=h("td",null)),h("tfoot",null,h("tr",null,r,o,e))},t.prototype.renderRow=function(t,e){var r=this;void 0===e&&(e=0);var o=this.getVisibleColumns();if(t.group){if(0===t.group.children.length)return null;for(var n="mdi mdi-chevron-"+(t.group.expanded?"right":"down"),i=[],s=[],a=0;a<e;a++)s.push(h("span",{class:"indent"}));if(this.hasTotals()){(c=[]).push(h("td",{colSpan:this.multiSelection?2:1},s,h("span",{role:"button","aria-label":"Row expander",class:n,onClick:function(e){e.stopPropagation(),r.onRowExpand(t)}}),t.group.label));for(var l=0,u=o;l<u.length;l++)c.push(h("td",{class:"total"},t.group.totals[u[l].name]));i.push(h("tr",{class:"group",onClick:function(){return r.onRowExpand(t)}},c))}else i.push(h("tr",{class:"group",onClick:function(){return r.onRowExpand(t)}},h("td",{colSpan:this.calculateColspan()},s,h("span",{role:"button","aria-label":"Row expander",class:"row-expander "+n,onClick:function(e){e.stopPropagation(),r.onRowExpand(t)}}),t.group.label)));return this.isGroupExpanded(t)&&t.group.children.map(function(t){return r.renderRow(t,e+1)}).forEach(function(t){Array.isArray(t)?t.forEach(function(t){return i.push(t)}):i.push(t)}),i}var c=o.map(function(o,n){var i=o.name,s=[];if(!(0!==n||r.isGrouping()&&r.hasTotals()))for(var a=0;a<e;a++)s.push(h("span",{class:"indent"}));var l=t.cells[i],u=null;l.options&&(u=h("span",{class:"options",role:"button","aria-label":"Opzioni oggetto",title:"Opzioni oggetto",onClick:function(){return r.onOptionClicked(i,t)}},h("i",{class:"mdi mdi-settings"})));var c=r.renderCell(l,i),p={number:isNumber(l.obj)};return h("td",{"data-column":i,style:l.style,class:p},s,c,u)}),p=null;this.multiSelection&&(p=h("td",null,h("input",{type:"checkbox",checked:this.selectedRows.includes(t),onClick:function(t){return t.stopPropagation()},onChange:function(e){return r.onRowCheckboxSelection(e,t)}})));var d=null;this.isGrouping()&&this.hasTotals()&&(d=h("td",null)),this.renderedRows.push(t);var g=null;if(this.hasRowActions()){var f=this.renderActions(this.rowActions,t,"default"),w=null,m=null;t.actions?m=this.renderActions(t.actions,t,"variable"):w=h("span",{title:"Espandi voci",class:"row-action mdi mdi-chevron-right",onClick:function(e){return r.onRowActionExpanderClick(e,t)},role:"button","aria-label":"Espandi voci","aria-pressed":"false"}),g=h("td",null,f,w,m)}var b={selected:this.selectedRows.includes(t)};return h("tr",{class:b,onClick:function(e){return r.onRowClick(e,t)}},p,d,g,c)},t.prototype.renderActions=function(t,e,r){var o=this;return t.map(function(t,n){return h("span",{title:t.text,class:"row-action "+t.icon,onClick:function(i){return o.onDefaultRowActionClick(i,{action:t,index:n,row:e,type:r})},role:"button","aria-label":t.text,"aria-pressed":"false"})})},t.prototype.renderCell=function(t,e){var r=t.value;if(isIcon(t.obj)||isVoCodver(t.obj))r=h("span",{class:t.value});else if(isImage(t.obj))r=h("img",{src:t.value,alt:"",width:"64",height:"64"});else if(isLink(t.obj))r=h("a",{href:t.value,target:"_blank"},t.value);else if(isBar(t.obj)){var o={value:t.value};this.columnsWidth&&this.columnsWidth[e]&&(o.width=this.columnsWidth[e]),r=h("kup-graphic-cell",Object.assign({},o))}return h("span",{class:"cell-content"},r)},t.prototype.render=function(){var t=this;this.renderedRows=[];var e=null;0===this.paginatedRows.length?e=h("tr",null,h("td",{colSpan:this.calculateColspan()},"Empty data")):(e=[],this.paginatedRows.map(function(e){return t.renderRow(e)}).forEach(function(t){Array.isArray(t)?t.forEach(function(t){return e.push(t)}):e.push(t)}));var r=this.renderHeader(),o=this.renderFooter(),n=null;this.globalFilter&&(n=h("div",{id:"globalFilter"},h("kup-text-input",{label:"Global filter",onKetchupTextInputUpdated:function(e){return t.onGlobalFilterChange(e)}})));var i=null;PaginatorPos.TOP!==this.paginatorPos&&PaginatorPos.BOTH!==this.paginatorPos||(i=h("kup-paginator",{id:"top-paginator",max:this.rows.length,perPage:this.rowsPerPage,selectedPerPage:this.currentRowsPerPage,currentPage:this.currentPage,onKupPageChanged:function(e){return t.handlePageChanged(e)},onKupRowsPerPageChanged:function(e){return t.handleRowsPerPageChanged(e)}}));var s=null;PaginatorPos.BOTTOM!==this.paginatorPos&&PaginatorPos.BOTH!==this.paginatorPos||(s=h("kup-paginator",{id:"bottom-paginator",max:this.rows.length,perPage:this.rowsPerPage,selectedPerPage:this.currentRowsPerPage,currentPage:this.currentPage,onKupPageChanged:function(e){return t.handlePageChanged(e)},onKupRowsPerPageChanged:function(e){return t.handleRowsPerPageChanged(e)}}));var a=null;if(this.isGrouping()){var l=this.groups.map(function(e){var r=t.getColumnByName(e.column);return r?h("div",{class:"group-chip",tabIndex:0,onClick:function(){return t.removeGroup(e)}},h("span",{class:"mdi mdi-close-circle"}),r.title):null});a=h("div",{id:"group-chips"},l)}var u=h("div",{id:"density-panel"},h("kup-button",{class:{active:"small"===this.density},iconClass:"mdi mdi-format-align-justify",onClick:function(){return t.density="small"}}),h("kup-button",{class:{active:"medium"===this.density},iconClass:"mdi mdi-menu",onClick:function(){return t.density="medium"}}),h("kup-button",{class:{active:"big"===this.density},iconClass:"mdi mdi-view-sequential",onClick:function(){return t.density="big"}})),c={"column-separation":ShowGrid.COMPLETE===this.showGrid||ShowGrid.COL===this.showGrid,"row-separation":ShowGrid.COMPLETE===this.showGrid||ShowGrid.ROW===this.showGrid};return c["density-"+this.density]=!0,h("div",{id:"data-table-wrapper"},h("div",{class:"above-wrapper"},i,n,u),h("div",{class:"below-wrapper"},a,h("table",{class:c},h("thead",{hidden:!this.showHeader},h("tr",null,r)),h("tbody",null,e),o)),s)},Object.defineProperty(t,"is",{get:function(){return"kup-data-table"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{columnsWidth:{type:"Any",attr:"columns-width"},currentPage:{state:!0,watchCallbacks:["recalculateRows"]},currentRowsPerPage:{state:!0,watchCallbacks:["recalculateRows"]},data:{type:"Any",attr:"data",watchCallbacks:["recalculateRows"]},density:{state:!0},expandGroups:{type:Boolean,attr:"expand-groups",watchCallbacks:["expandGroupsHandler"]},filters:{type:"Any",attr:"filters",mutable:!0,watchCallbacks:["recalculateRows"]},globalFilter:{type:Boolean,attr:"global-filter"},globalFilterValue:{state:!0,watchCallbacks:["recalculateRows"]},groups:{type:"Any",attr:"groups",mutable:!0,watchCallbacks:["recalculateRows"]},groupState:{state:!0},multiSelection:{type:Boolean,attr:"multi-selection"},openedMenu:{state:!0},paginatorPos:{type:String,attr:"paginator-pos"},rowActions:{type:"Any",attr:"row-actions"},rowsPerPage:{type:Number,attr:"rows-per-page",watchCallbacks:["rowsPerPageHandler","recalculateRows"]},selectedRows:{state:!0},selectRow:{type:Number,attr:"select-row"},showFilters:{type:Boolean,attr:"show-filters"},showGrid:{type:String,attr:"show-grid"},showHeader:{type:Boolean,attr:"show-header"},sort:{type:"Any",attr:"sort",mutable:!0,watchCallbacks:["recalculateRows"]},sortEnabled:{type:Boolean,attr:"sort-enabled"},totals:{type:"Any",attr:"totals",watchCallbacks:["recalculateRows"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"kupAutoRowSelect",method:"kupAutoRowSelect",bubbles:!0,cancelable:!1,composed:!0},{name:"kupRowSelected",method:"kupRowSelected",bubbles:!0,cancelable:!1,composed:!0},{name:"kupOptionClicked",method:"kupOptionClicked",bubbles:!0,cancelable:!1,composed:!0},{name:"kupAddColumn",method:"kupAddColumn",bubbles:!0,cancelable:!1,composed:!0},{name:"kupRowActionClicked",method:"kupRowActionClicked",bubbles:!0,cancelable:!1,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);.sc-kup-data-table-h{--int_background-color:var(--kup-data-table_background-color,#fff);--int_main-color:var(--kup-data-table_main-color,#6aaaa7);--int_text-on-main-color:var(--kup-data-table_text-on-main-color,#fff);--int_color:var(--kup-data-table_color,#545454);--int_stronger-color:var(--kup-data-table_stronger-color,#111);--int_hover-color:var(--kup-data-table_hover-color,#545454);--int_hover-background-color:var(--kup-data-table_hover-background-color,#e0e0e0);--int_border-color:var(--kup-data-table_border-color,#000);--int_head-background-color:var(--kup-data-table_head-background-color,#f5f5f5);--int_group-background-color:var(--kup-data-table_group-background-color,#f5f5f5);--int_group-border-color:var(--kup-data-table_group-border-color,#6aaaa7);--int_filter-border-color:var(--kup-data-table_filter-border-color,#dadada);--int_icons-color:var(--kup-data-table_icons-color,grey);--int_icons-hover-color:var(--kup-data-table_icons-hover-color,#a0a0a0);--int_box-shadow:var(--kup-data-table_box-shadow,0px 0px 7.5px 0px hsla(0,0%,50.2%,0.5));--int_font-size:var(--kup-data-table_font-size,1rem)}#data-table-wrapper.sc-kup-data-table{background-color:var(--int_background-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table{color:var(--int_stronger-color);width:100%;min-width:intrinsic;min-width:-moz-max-content;min-width:-webkit-max-content;border-collapse:collapse;text-align:left;font-size:var(--int_font-size)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   td.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   th.sc-kup-data-table{padding:.5rem 1rem}#data-table-wrapper.sc-kup-data-table   table.row-separation.sc-kup-data-table   tr.sc-kup-data-table{border-bottom:1px solid var(--int_border-color)}#data-table-wrapper.sc-kup-data-table   table.column-separation.sc-kup-data-table   td.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.column-separation.sc-kup-data-table   th.sc-kup-data-table{border-right:1px solid var(--int_border-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table{margin-left:.5rem;cursor:pointer}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table   .mdi.sc-kup-data-table{-webkit-transition:color .2s ease-in-out;transition:color .2s ease-in-out}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table   .mdi-sort-ascending.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   .column-sort.sc-kup-data-table   .mdi-sort-descending.sc-kup-data-table{color:var(--int_main-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   th.sc-kup-data-table   kup-text-input.datatable-filter.sc-kup-data-table{--int_border-color:var(--int_filter-border-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   th.sc-kup-data-table   input.sc-kup-data-table{display:block}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   thead.sc-kup-data-table{background:var(--int_head-background-color);border:1px solid var(--int_border-color);border-bottom:3px solid var(--int_border-color);font-size:115%}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   thead.sc-kup-data-table   th.sc-kup-data-table{position:relative}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table{border:1px solid var(--int_border-color);cursor:pointer;font-size:100%}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.selected.sc-kup-data-table > td.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table:hover > td.sc-kup-data-table{color:var(--int_hover-color);background-color:var(--int_hover-background-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table{background:var(--int_group-background-color);font-weight:700;border-top:1px solid var(--int_border-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table   td.sc-kup-data-table{padding:1rem 0}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table   td.total.sc-kup-data-table{text-align:right;padding-right:1rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table   icon.sc-kup-data-table{margin-right:.5rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.number.sc-kup-data-table{text-align:right}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .row-expander.sc-kup-data-table{margin-right:.5rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .indent.sc-kup-data-table{display:inline-block;height:1rem;width:2rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .options.sc-kup-data-table{font-size:100%;margin-left:.5rem;color:var(--int_icons-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .options.sc-kup-data-table:hover{color:var(--int_icons-hover-color)}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table   .row-action.sc-kup-data-table{margin-right:.2rem}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tfoot.sc-kup-data-table{font-size:110%}#data-table-wrapper.sc-kup-data-table   table.sc-kup-data-table   tfoot.sc-kup-data-table   td.sc-kup-data-table{text-align:right}#data-table-wrapper.sc-kup-data-table   table.noGrid.sc-kup-data-table, #data-table-wrapper.sc-kup-data-table   table.noGrid.sc-kup-data-table   td.sc-kup-data-table{border:none}#data-table-wrapper.sc-kup-data-table   table.density-small.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table{padding-top:.2rem;padding-bottom:.2rem}#data-table-wrapper.sc-kup-data-table   table.density-small.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table > td.sc-kup-data-table{padding-top:.75rem;padding-bottom:.75rem}#data-table-wrapper.sc-kup-data-table   table.density-big.sc-kup-data-table   tbody.sc-kup-data-table > tr.sc-kup-data-table > td.sc-kup-data-table{padding-top:1rem;padding-bottom:1rem}#data-table-wrapper.sc-kup-data-table   table.density-big.sc-kup-data-table   tbody.sc-kup-data-table > tr.group.sc-kup-data-table > td.sc-kup-data-table{padding-top:1.25rem;padding-bottom:1.25rem}#globalFilter.sc-kup-data-table{margin-bottom:.5rem;text-align:center}#group-chips.sc-kup-data-table{display:-ms-flexbox;display:flex;margin-bottom:.5rem}#group-chips.sc-kup-data-table > .group-chip.sc-kup-data-table{display:-ms-flexbox;display:flex;background-color:var(--int_main-color);padding:.5rem;color:var(--int_text-on-main-color);margin-right:.5rem;cursor:pointer;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}#group-chips.sc-kup-data-table > .group-chip.sc-kup-data-table   icon.sc-kup-data-table{margin-right:.5rem}#group-chips.sc-kup-data-table > .group-chip.sc-kup-data-table:hover{opacity:.75}.column-menu.sc-kup-data-table{background-color:var(--int_background-color);-webkit-box-shadow:var(--int_box-shadow);box-shadow:var(--int_box-shadow);color:var(--int_color);position:absolute;z-index:100;font-weight:400;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;min-width:200px;min-width:-moz-max-content;min-width:-webkit-max-content}.column-menu.closed.sc-kup-data-table{display:none;opacity:0}.column-menu.open.sc-kup-data-table{display:block;opacity:1;-webkit-animation:display-none-transition .5s both;-webkit-animation-timing-function:cubic-bezier(.67,-.81,.89,.71);animation:display-none-transition .5s both;animation-timing-function:cubic-bezier(.67,-.81,.89,.71)}.column-menu.sc-kup-data-table   ul.sc-kup-data-table{list-style-type:none;margin:0;padding:0}.column-menu.sc-kup-data-table   ul.sc-kup-data-table > li.sc-kup-data-table{padding:.8rem;font-size:1rem;-webkit-transition:color .2s ease-in-out;transition:color .2s ease-in-out}.column-menu.sc-kup-data-table   ul.sc-kup-data-table > li.sc-kup-data-table:hover{cursor:pointer;color:var(--int_main-color)}.column-menu.sc-kup-data-table   ul.sc-kup-data-table > li.sc-kup-data-table   .mdi.sc-kup-data-table{margin-right:.5rem}#density-panel.sc-kup-data-table{text-align:center}#density-panel.sc-kup-data-table   kup-button.sc-kup-data-table{--kup-button_main-color:transparent;--kup-button_opacity:0.25;--kup-button_icon-color:var(--int_main-color);--kup-button_box-shadow:none}#density-panel.sc-kup-data-table   kup-button.sc-kup-data-table:hover{--kup-button_opacity:0.75}#density-panel.sc-kup-data-table   kup-button.active.sc-kup-data-table{--kup-button_opacity:1}\@-webkit-keyframes display-none-transition{0%{opacity:0}}\@keyframes display-none-transition{0%{opacity:0}}"},enumerable:!0,configurable:!0}),t}();function getColorFromString(t){var e=t.indexOf("R"),r=t.indexOf("G"),o=t.indexOf("B");if(!(e<0||r<0||o<0)){var n=t.substring(e+1,e+4),i=t.substring(r+1,r+4),s=t.substring(o+1,o+4);try{return new Color(parseInt(n),parseInt(i),parseInt(s))}catch(t){console.error(t)}return null}}var GraphicElement=function(){function t(){this.width=100,this.height=100,this.color=null,this.shape="bar"}return t.prototype.init=function(t){var e=this;t.forEach(function(t){t.toUpperCase().startsWith("HEIGHT;")?e.initHeight(t):t.toUpperCase().startsWith("SHAPE;")?e.initShape(t):t.toUpperCase().startsWith("BCOLOR;")||e.initColor(t)})},t.prototype.initColor=function(t){if(t.length>11&&this.isValidColor(t)){this.color=getColorFromString(t.substring(0,12));try{this.width=parseFloat(t.substring(13).replace(",","."))}catch(t){console.error(t)}}else if(t.startsWith("*NONE"))try{this.width=parseFloat(t.substring(6).replace(",","."))}catch(t){console.error(t)}},t.prototype.isTrasparent=function(){return null===this.color},t.prototype.initHeight=function(t){if(t){var e=t.substring("HEIGHT;".length).replace(",",".");try{this.height=parseFloat(e)}catch(t){console.error(t)}}},t.prototype.initShape=function(t){var e=(t=t.substring("SHAPE;".length)).indexOf(";"),r=t;if(e>-1){r=t.substring(0,e);try{this.width=parseFloat(t.substring(e+1).replace(",","."))}catch(t){console.error(t)}}switch(r.toLocaleLowerCase()){case"circle":this.shape="circle";break;case"tril":this.shape="tril";break;case"trir":this.shape="trir"}},t.prototype.isValidColor=function(t){if(!t)return!1;var e=[],r=!1,o=null,n=(t=t.trim()).indexOf("R");if(n>-1&&(o=t.substring(n+1,n+4),e[0]=parseInt(o),isNaN(e[0])&&(r=!0)),(n=t.indexOf("G"))>-1&&(o=t.substring(n+1,n+4),e[1]=parseInt(o),isNaN(e[1])&&(r=!0)),(n=t.indexOf("B"))>-1&&(o=t.substring(n+1,n+4),e[2]=parseInt(o),isNaN(e[2])&&(r=!0)),r){var i=t.indexOf("R"),s=t.indexOf("G"),a=t.indexOf("B");if(o=t.substring(i+1,s),e[0]=parseInt(o),isNaN(e[0])&&(r=!0),o=t.substring(s+1,a),e[1]=parseInt(o),isNaN(e[1])&&(r=!0),o=t.substring(a+1),e[2]=parseInt(o),isNaN(e[2])&&(r=!0),r)return!1}return!(e[0]<0||e[0]>255||e[1]<0||e[1]>255||e[2]<0||e[2]>255)},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.getShape=function(){return this.shape},t.prototype.getColor=function(){return this.color},t}(),Color=function(){function t(t,e,r){this.r=t,this.g=e,this.b=r}return t.prototype.toString=function(){return"rgb("+this.r+","+this.g+","+this.b+")"},t}(),KupGraphicCell=function(){function t(){this.height=30,this.width=300,this.graphic_element_marker_splitter="\\\\",this.graphic_element_splitter="\\\\AND\\\\",this.background_color="BCOLOR;R255G000B000",this.default_color=new Color(0,0,0)}return t.prototype.onValueChange=function(){this.draw()},t.prototype.componentDidLoad=function(){this.draw()},t.prototype.draw=function(){this.value&&this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.drawGraphicCell())},t.prototype.drawGraphicCell=function(){var t=this;this.value.split(this.graphic_element_splitter).forEach(function(e,r){var o="SHAPE;BAR",n=t.background_color,i="HEIGHT;100",s=e.split(t.graphic_element_marker_splitter),a=[],l=[];s.forEach(function(e){t.isShapeMarker(e)?o=e:t.isBgColorMarker(e)?n=e:t.isHeightMarker(e)?i=e:t.isDecoratorMarker(e)?l.push(e):a.push(e)});var u=a.map(function(t){var e=new GraphicElement;return e.init([o,n,i,t]),e});if(0===r&&n!==t.background_color){var h=getColorFromString(n.substring("BCOLOR;".length));t.drawRect(0,0,t.canvas.width,t.canvas.height,h)}var c=0;u.forEach(function(e){switch(e.getShape()){case"circle":c=t.getNewStarXFromCircle(c,e);break;case"tril":c=t.getNewStarXFromTril(c,e);break;case"trir":c=t.getNewStarXFromTrir(c,e);break;default:c=t.getNewStarXFromBar(c,e)}}),l.forEach(function(e){e.startsWith("SEP")||e.startsWith("DIV")?t.drawSeparator(e):e.startsWith("ARW")?t.drawArrow(e):e.startsWith("GRID")&&t.drawGrid(e)})})},t.prototype.isShapeMarker=function(t){return t&&t.toUpperCase().startsWith("SHAPE;")},t.prototype.isBgColorMarker=function(t){return t&&t.toUpperCase().startsWith("BCOLOR;")},t.prototype.isHeightMarker=function(t){return t&&t.toUpperCase().startsWith("HEIGHT;")},t.prototype.isDecoratorMarker=function(t){return t&&(t.toUpperCase().startsWith("SEP;")||t.toUpperCase().startsWith("DIV;")||t.toUpperCase().startsWith("ARW;")||t.toUpperCase().startsWith("GRID;"))},t.prototype.getDim=function(t,e){return Math.floor(t/100*e)},t.prototype.getNewStarXFromBar=function(t,e){var r=this.getDim(this.canvas.width,e.getWidth()),o=this.getDim(this.canvas.height,e.getHeight()),n=this.canvas.height-o;return e.isTrasparent()||this.drawRect(t,n,r,o,e.getColor()),r},t.prototype.getNewStarXFromCircle=function(t,e){var r=this.getDim(this.canvas.width,e.getWidth()),o=(t+r)/2;return e.isTrasparent()||this.drawArc(o,this.canvas.height/2,e.getColor()),r},t.prototype.getNewStarXFromTril=function(t,e){var r=this.getDim(this.canvas.width,e.getWidth());return e.isTrasparent()||this.drawTri(r,0,t,this.canvas.height/2,e.getColor()),r},t.prototype.getNewStarXFromTrir=function(t,e){var r=this.getDim(this.canvas.width,e.getWidth());return e.isTrasparent()||this.drawTri(t,0,r,this.canvas.height/2,e.getColor()),r},t.prototype.drawArc=function(t,e,r){this.ctx.fillStyle=r.toString(),this.ctx.beginPath(),this.ctx.arc(t,e,e,0,2*Math.PI,!0),this.ctx.fill()},t.prototype.drawRect=function(t,e,r,o,n){this.ctx.fillStyle=n.toString(),this.ctx.fillRect(t,e,r,o)},t.prototype.drawTri=function(t,e,r,o,n){this.ctx.fillStyle=n.toString(),this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(r,o),this.ctx.lineTo(t,this.canvas.height),this.ctx.fill()},t.prototype.drawArrow=function(t){var e=t.substring("ARW;".length);e.indexOf(",")>-1&&(e=e.replace(",",".")),this.ctx.fillStyle=this.default_color.toString();var r=this.getDim(this.canvas.width,parseFloat(e)),o=this.canvas.height,n=Math.floor(o/3),i=n/2;this.ctx.beginPath(),this.ctx.moveTo(r,0),this.ctx.lineTo(r-n,o/2),this.ctx.lineTo(r-i,o/2),this.ctx.lineTo(r-i,o),this.ctx.lineTo(r+i,o),this.ctx.lineTo(r+i,o/2),this.ctx.lineTo(r+n,o/2),this.ctx.fill()},t.prototype.drawGrid=function(t){var e=t.substring("GRID;".length);e.indexOf(",")>-1&&(e=e.replace(",","."));for(var r=parseInt(e),o=this.canvas.width/r,n=this.canvas.height/5,i=this.canvas.height-n,s=o;s<this.canvas.width;s+=o)this.drawRect(s,i,1,n,this.default_color)},t.prototype.drawSeparator=function(t){var e=t.substring("SEP;".length).split(";"),r="R000G000B000",o=2,n=e[0];e.length>1&&(r=e[1]),e.length>2&&(o=parseInt(e[2])),n.indexOf(",")>-1&&(n=n.replace(",","."));var i=this.getDim(this.canvas.width,parseFloat(n));this.drawRect(i,0,o,this.canvas.height,getColorFromString(r))},t.prototype.render=function(){var t=this;return h("canvas",{ref:function(e){return t.canvas=e},height:this.height,width:this.width},this.value)},Object.defineProperty(t,"is",{get:function(){return"kup-graphic-cell"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{height:{type:Number,attr:"height"},value:{type:String,attr:"value",watchCallbacks:["onValueChange"]},width:{type:Number,attr:"width"}}},enumerable:!0,configurable:!0}),t}(),KupPaginator=function(){function t(){this.max=0,this.perPage=10,this.selectedPerPage=10,this.currentPage=1}return t.prototype.isPrevPageDisabled=function(){return 1==this.currentPage},t.prototype.isNextPageDisabled=function(){return this.currentPage*this.perPage>=this.max},t.prototype.onPrevPage=function(){this.isPrevPageDisabled()||this.kupPageChanged.emit({newPage:this.currentPage-1})},t.prototype.onNextPage=function(){this.isNextPageDisabled()||this.kupPageChanged.emit({newPage:this.currentPage+1})},t.prototype.onGoToPage=function(t){this.kupPageChanged.emit({newPage:parseInt(t.target.value)})},t.prototype.onRowsPerPage=function(t){this.kupRowsPerPageChanged.emit({newRowsPerPage:parseInt(t.target.value)})},t.prototype.getGoToPageOptions=function(t){var e=[];e.push(h("option",{value:"1",selected:1===this.currentPage},"1"));for(var r=2;r<=t;r++)e.push(h("option",{value:r,selected:this.currentPage===r},r));return e},t.prototype.getRowsPerPageOptions=function(){var t=[];if(this.currentPage!=this.max){var e=this.perPage;if(0===e)return t;for(;e<this.max;)t.push(h("option",{value:e,selected:e===this.selectedPerPage},e)),e*=2;t.push(h("option",{value:this.max,selected:this.max===this.perPage},this.max))}else t.push(h("option",{value:this.perPage,selected:!0},this.perPage));return t},t.prototype.render=function(){var t=this,e="mdi mdi-chevron-left";this.isPrevPageDisabled()&&(e+=" disabled");var r="mdi mdi-chevron-right";this.isNextPageDisabled()&&(r+=" disabled");var o=Math.ceil(this.max/this.selectedPerPage),n=this.getGoToPageOptions(o),i=this.getRowsPerPageOptions();return h("div",{id:"paginator"},h("div",{class:"align-left"},"Pagina",h("span",{class:"prev-page"},h("icon",{className:e,onclick:function(){return t.onPrevPage()}})),h("select",{onChange:function(e){return t.onGoToPage(e)}},n),h("span",{class:"next-page"},h("icon",{className:r,onclick:function(){return t.onNextPage()}})),"Di ",o),h("div",{class:"align-right"},h("span",{class:"nextPageGroup"},"Numero risultati: ",this.max),"Mostra",h("select",{onChange:function(e){return t.onRowsPerPage(e)}},i),"righe per pagina"))},Object.defineProperty(t,"is",{get:function(){return"kup-paginator"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{currentPage:{type:Number,attr:"current-page"},max:{type:Number,attr:"max"},perPage:{type:Number,attr:"per-page"},selectedPerPage:{type:Number,attr:"selected-per-page"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"kupPageChanged",method:"kupPageChanged",bubbles:!0,cancelable:!1,composed:!0},{name:"kupRowsPerPageChanged",method:"kupRowsPerPageChanged",bubbles:!0,cancelable:!1,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);.sc-kup-paginator-h{--int_text-color:var(--kup-paginator_text-color,#545454);--int_font-size:var(--kup-paginator_font-size,1rem)}#paginator.sc-kup-paginator{color:var(--int_text-color);margin:.5rem 0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;font-size:var(--int_font-size)}#paginator.sc-kup-paginator   icon.sc-kup-paginator{cursor:pointer;opacity:1;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}#paginator.sc-kup-paginator   icon.sc-kup-paginator:hover:not(.disabled){opacity:.75}#paginator.sc-kup-paginator   icon.disabled.sc-kup-paginator{cursor:default;opacity:.3}#paginator.sc-kup-paginator   .nextPageGroup.sc-kup-paginator, #paginator.sc-kup-paginator   select.sc-kup-paginator{margin:0 .5rem}#paginator.sc-kup-paginator   .next-page.sc-kup-paginator, #paginator.sc-kup-paginator   .prev-page.sc-kup-paginator{margin:0 .25rem}#paginator.sc-kup-paginator   .nextPageGroup.sc-kup-paginator{padding-right:1.5rem}"},enumerable:!0,configurable:!0}),t}();export{KupDataTable,KupGraphicCell,KupPaginator};