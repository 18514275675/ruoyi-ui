(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2efe924"],{"70eb":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入角色名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.roleName,callback:function(t){e.$set(e.queryParams,"roleName",t)},expression:"queryParams.roleName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"权限字符",prop:"roleKey"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入权限字符",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.roleKey,callback:function(t){e.$set(e.queryParams,"roleKey",t)},expression:"queryParams.roleKey"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"角色状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return r("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"创建时间"}},[r("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:add"],expression:"['system:role:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),e._v(" "),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:edit"],expression:"['system:role:edit']"}],attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),e._v(" "),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:remove"],expression:"['system:role:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:post:export"],expression:"['system:post:export']"}],attrs:{type:"warning",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.roleList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"角色编号",prop:"roleId",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName","show-overflow-tooltip":!0,width:"150"}}),e._v(" "),r("el-table-column",{attrs:{label:"权限字符",prop:"roleKey","show-overflow-tooltip":!0,width:"150"}}),e._v(" "),r("el-table-column",{attrs:{label:"显示顺序",prop:"roleSort",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{label:"状态",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-value":"0","inactive-value":"1"},on:{change:function(r){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(r){e.$set(t.row,"status",r)},expression:"scope.row.status"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:edit"],expression:"['system:role:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:edit"],expression:"['system:role:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-circle-check"},on:{click:function(r){return e.handleDataScope(t.row)}}},[e._v("数据权限")]),e._v(" "),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:role:remove"],expression:"['system:role:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"权限字符",prop:"roleKey"}},[r("el-input",{attrs:{placeholder:"请输入权限字符"},model:{value:e.form.roleKey,callback:function(t){e.$set(e.form,"roleKey",t)},expression:"form.roleKey"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色顺序",prop:"roleSort"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.roleSort,callback:function(t){e.$set(e.form,"roleSort",t)},expression:"form.roleSort"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态"}},[r("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return r("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"菜单权限"}},[r("el-tree",{ref:"menu",attrs:{data:e.menuOptions,"show-checkbox":"","node-key":"id","empty-text":"加载中，请稍后",props:e.defaultProps}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.openDataScope,width:"500px"},on:{"update:visible":function(t){e.openDataScope=t}}},[r("el-form",{attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"权限字符"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form.roleKey,callback:function(t){e.$set(e.form,"roleKey",t)},expression:"form.roleKey"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"权限范围"}},[r("el-select",{model:{value:e.form.dataScope,callback:function(t){e.$set(e.form,"dataScope",t)},expression:"form.dataScope"}},e._l(e.dataScopeOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2==e.form.dataScope,expression:"form.dataScope == 2"}],attrs:{label:"数据权限"}},[r("el-tree",{ref:"dept",attrs:{data:e.deptOptions,"show-checkbox":"","default-expand-all":"","node-key":"id","empty-text":"加载中，请稍后",props:e.defaultProps}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitDataScope}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.cancelDataScope}},[e._v("取 消")])],1)],1)],1)},n=[],o=r("b775");function s(e){return Object(o["a"])({url:"/system/role/list",method:"get",params:e})}function l(e){return Object(o["a"])({url:"/system/role/"+e,method:"get"})}function i(e){return Object(o["a"])({url:"/system/role",method:"post",data:e})}function u(e){return Object(o["a"])({url:"/system/role",method:"put",data:e})}function c(e){return Object(o["a"])({url:"/system/role/dataScope",method:"put",data:e})}function m(e,t){var r={roleId:e,status:t};return Object(o["a"])({url:"/system/role/changeStatus",method:"put",data:r})}function d(e){return Object(o["a"])({url:"/system/role/"+e,method:"delete"})}function p(e){return Object(o["a"])({url:"/system/role/export",method:"get",params:e})}var f=r("a6dc"),h=r("fcb7"),v={name:"Role",data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,total:0,roleList:[],title:"",open:!1,openDataScope:!1,dateRange:[],statusOptions:[],dataScopeOptions:[{value:"1",label:"全部数据权限"},{value:"2",label:"自定数据权限"},{value:"3",label:"本部门数据权限"},{value:"4",label:"本部门及以下数据权限"},{value:"5",label:"仅本人数据权限"}],menuOptions:[],deptOptions:[],queryParams:{pageNum:1,pageSize:10,roleName:void 0,roleKey:void 0,status:void 0},form:{},defaultProps:{children:"children",label:"label"},rules:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleKey:[{required:!0,message:"权限字符不能为空",trigger:"blur"}],roleSort:[{required:!0,message:"角色顺序不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),this.getDicts("sys_normal_disable").then((function(t){e.statusOptions=t.data}))},methods:{getList:function(){var e=this;this.loading=!0,s(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.roleList=t.rows,e.total=t.total,e.loading=!1}))},getMenuTreeselect:function(){var e=this;Object(f["f"])().then((function(t){e.menuOptions=t.data}))},getDeptTreeselect:function(){var e=this;Object(h["f"])().then((function(t){e.deptOptions=t.data}))},getMenuAllCheckedKeys:function(){var e=this.$refs.menu.getHalfCheckedKeys(),t=this.$refs.menu.getCheckedKeys();return e.unshift.apply(e,t),e},getDeptAllCheckedKeys:function(){var e=this.$refs.dept.getHalfCheckedKeys(),t=this.$refs.dept.getCheckedKeys();return e.unshift.apply(e,t),e},getRoleMenuTreeselect:function(e){var t=this;Object(f["e"])(e).then((function(e){t.menuOptions=e.menus,t.$refs.menu.setCheckedKeys(e.checkedKeys)}))},getRoleDeptTreeselect:function(e){var t=this;Object(h["e"])(e).then((function(e){t.deptOptions=e.depts,t.$refs.dept.setCheckedKeys(e.checkedKeys)}))},handleStatusChange:function(e){var t=this,r="0"===e.status?"启用":"停用";this.$confirm('确认要"'+r+'""'+e.roleName+'"角色吗?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return m(e.roleId,e.status)})).then((function(){t.msgSuccess(r+"成功")})).catch((function(){e.status="0"===e.status?"1":"0"}))},cancel:function(){this.open=!1,this.reset()},cancelDataScope:function(){this.openDataScope=!1,this.reset()},reset:function(){void 0!=this.$refs.menu&&this.$refs.menu.setCheckedKeys([]),this.form={roleId:void 0,roleName:void 0,roleKey:void 0,roleSort:0,status:"0",menuIds:[],deptIds:[],remark:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.roleId})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.getMenuTreeselect(),this.open=!0,this.title="添加角色"},handleUpdate:function(e){var t=this;this.reset();var r=e.roleId||this.ids;this.$nextTick((function(){t.getRoleMenuTreeselect(r)})),l(r).then((function(e){t.form=e.data,t.open=!0,t.title="修改角色"}))},handleDataScope:function(e){var t=this;this.reset(),this.$nextTick((function(){t.getRoleDeptTreeselect(e.roleId)})),l(e.roleId).then((function(e){t.form=e.data,t.openDataScope=!0,t.title="分配数据权限"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.roleId?(e.form.menuIds=e.getMenuAllCheckedKeys(),u(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)}))):(e.form.menuIds=e.getMenuAllCheckedKeys(),i(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)}))))}))},submitDataScope:function(){var e=this;void 0!=this.form.roleId&&(this.form.deptIds=this.getDeptAllCheckedKeys(),c(this.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.openDataScope=!1,e.getList()):e.msgError(t.msg)})))},handleDelete:function(e){var t=this,r=e.roleId||this.ids;this.$confirm('是否确认删除角色编号为"'+r+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return d(r)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$confirm("是否确认导出所有角色数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return p(t)})).then((function(t){e.download(t.msg)})).catch((function(){}))}}},y=v,b=r("2877"),g=Object(b["a"])(y,a,n,!1,null,null,null);t["default"]=g.exports},a6dc:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"g",(function(){return u})),r.d(t,"b",(function(){return c}));var a=r("b775");function n(e){return Object(a["a"])({url:"/system/menu/list",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/system/menu/"+e,method:"get"})}function s(){return Object(a["a"])({url:"/system/menu/treeselect",method:"get"})}function l(e){return Object(a["a"])({url:"/system/menu/roleMenuTreeselect/"+e,method:"get"})}function i(e){return Object(a["a"])({url:"/system/menu",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/system/menu",method:"put",data:e})}function c(e){return Object(a["a"])({url:"/system/menu/"+e,method:"delete"})}},fcb7:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"g",(function(){return u})),r.d(t,"b",(function(){return c}));var a=r("b775");function n(e){return Object(a["a"])({url:"/system/dept/list",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/system/dept/"+e,method:"get"})}function s(){return Object(a["a"])({url:"/system/dept/treeselect",method:"get"})}function l(e){return Object(a["a"])({url:"/system/dept/roleDeptTreeselect/"+e,method:"get"})}function i(e){return Object(a["a"])({url:"/system/dept",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/system/dept",method:"put",data:e})}function c(e){return Object(a["a"])({url:"/system/dept/"+e,method:"delete"})}}}]);