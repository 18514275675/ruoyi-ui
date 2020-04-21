(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-712f179b"],{"1f34":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:4,xs:24}},[s("div",{staticClass:"head-container"},[s("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请输入部门名称",clearable:"",size:"small","prefix-icon":"el-icon-search"},model:{value:e.deptName,callback:function(t){e.deptName=t},expression:"deptName"}})],1),e._v(" "),s("div",{staticClass:"head-container"},[s("el-tree",{ref:"tree",attrs:{data:e.deptOptions,props:e.defaultProps,"expand-on-click-node":!1,"filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.handleNodeClick}})],1)]),e._v(" "),s("el-col",{attrs:{span:20,xs:24}},[s("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[s("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[s("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入用户名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入手机号码",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenumber,callback:function(t){e.$set(e.queryParams,"phonenumber",t)},expression:"queryParams.phonenumber"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"状态",prop:"status"}},[s("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"用户状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return s("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"创建时间"}},[s("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),s("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),s("el-row",{staticClass:"mb8",attrs:{gutter:10}},[s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:add"],expression:"['system:user:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),e._v(" "),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),e._v(" "),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:remove"],expression:"['system:user:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:import"],expression:"['system:user:import']"}],attrs:{type:"info",icon:"el-icon-upload2",size:"mini"},on:{click:e.handleImport}},[e._v("导入")])],1),e._v(" "),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:export"],expression:"['system:user:export']"}],attrs:{type:"warning",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.userList},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"40",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"用户编号",align:"center",prop:"userId"}}),e._v(" "),s("el-table-column",{attrs:{label:"用户名称",align:"center",prop:"userName","show-overflow-tooltip":!0}}),e._v(" "),s("el-table-column",{attrs:{label:"用户昵称",align:"center",prop:"nickName","show-overflow-tooltip":!0}}),e._v(" "),s("el-table-column",{attrs:{label:"部门",align:"center",prop:"dept.deptName","show-overflow-tooltip":!0}}),e._v(" "),s("el-table-column",{attrs:{label:"手机号码",align:"center",prop:"phonenumber",width:"120"}}),e._v(" "),s("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-switch",{attrs:{"active-value":"0","inactive-value":"1"},on:{change:function(s){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(s){e.$set(t.row,"status",s)},expression:"scope.row.status"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(s){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),1!==t.row.userId?s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:remove"],expression:"['system:user:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(s){return e.handleDelete(t.row)}}},[e._v("删除")]):e._e(),e._v(" "),s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:resetPwd"],expression:"['system:user:resetPwd']"}],attrs:{size:"mini",type:"text",icon:"el-icon-key"},on:{click:function(s){return e.handleResetPwd(t.row)}}},[e._v("重置")])]}}])})],1),e._v(" "),s("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1),e._v(" "),s("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px"},on:{"update:visible":function(t){e.open=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[s("el-input",{attrs:{placeholder:"请输入用户昵称"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"归属部门",prop:"deptId"}},[s("treeselect",{attrs:{options:e.deptOptions,placeholder:"请选择归属部门"},model:{value:e.form.deptId,callback:function(t){e.$set(e.form,"deptId",t)},expression:"form.deptId"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{attrs:{placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.form.phonenumber,callback:function(t){e.$set(e.form,"phonenumber",t)},expression:"form.phonenumber"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{placeholder:"请输入邮箱",maxlength:"50"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[s("el-input",{attrs:{placeholder:"请输入用户名称"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[void 0==e.form.userId?s("el-form-item",{attrs:{label:"用户密码",prop:"password"}},[s("el-input",{attrs:{placeholder:"请输入用户密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e()],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"用户性别"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.sexOptions,(function(e){return s("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"状态"}},[s("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return s("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"岗位"}},[s("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.postIds,callback:function(t){e.$set(e.form,"postIds",t)},expression:"form.postIds"}},e._l(e.postOptions,(function(e){return s("el-option",{key:e.postId,attrs:{label:e.postName,value:e.postId,disabled:1==e.status}})})),1)],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"角色"}},[s("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.form.roleIds,callback:function(t){e.$set(e.form,"roleIds",t)},expression:"form.roleIds"}},e._l(e.roleOptions,(function(e){return s("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId,disabled:1==e.status}})})),1)],1)],1),e._v(" "),s("el-col",{attrs:{span:24}},[s("el-form-item",{attrs:{label:"备注"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:e.upload.title,visible:e.upload.open,width:"400px"},on:{"update:visible":function(t){return e.$set(e.upload,"open",t)}}},[s("el-upload",{ref:"upload",attrs:{limit:1,accept:".xlsx, .xls",headers:e.upload.headers,action:e.upload.url+"?updateSupport="+e.upload.updateSupport,disabled:e.upload.isUploading,"on-progress":e.handleFileUploadProgress,"on-success":e.handleFileSuccess,"auto-upload":!1,drag:""}},[s("i",{staticClass:"el-icon-upload"}),e._v(" "),s("div",{staticClass:"el-upload__text"},[e._v("\n        将文件拖到此处，或\n        "),s("em",[e._v("点击上传")])]),e._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[s("el-checkbox",{model:{value:e.upload.updateSupport,callback:function(t){e.$set(e.upload,"updateSupport",t)},expression:"upload.updateSupport"}}),e._v("是否更新已经存在的用户数据\n        "),s("el-link",{staticStyle:{"font-size":"12px"},attrs:{type:"info"},on:{click:e.importTemplate}},[e._v("下载模板")])],1),e._v(" "),s("div",{staticClass:"el-upload__tip",staticStyle:{color:"red"},attrs:{slot:"tip"},slot:"tip"},[e._v("提示：仅允许导入“xls”或“xlsx”格式文件！")])]),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitFileForm}},[e._v("确 定")]),e._v(" "),s("el-button",{on:{click:function(t){e.upload.open=!1}}},[e._v("取 消")])],1)],1)],1)},a=[],n=s("c0c7"),o=s("5f87"),l=s("fcb7"),i=s("ca17"),u=s.n(i),c=(s("542c"),{name:"User",components:{Treeselect:u.a},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,total:0,userList:null,title:"",deptOptions:void 0,open:!1,deptName:void 0,initPassword:void 0,dateRange:[],statusOptions:[],sexOptions:[],postOptions:[],roleOptions:[],form:{},defaultProps:{children:"children",label:"label"},upload:{open:!1,title:"",isUploading:!1,updateSupport:0,headers:{Authorization:"Bearer "+Object(o["a"])()},url:"/prod-api/system/user/importData"},queryParams:{pageNum:1,pageSize:10,userName:void 0,phonenumber:void 0,status:void 0,deptId:void 0},rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"}],nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],deptId:[{required:!0,message:"归属部门不能为空",trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"'请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},watch:{deptName:function(e){this.$refs.tree.filter(e)}},created:function(){var e=this;this.getList(),this.getTreeselect(),this.getDicts("sys_normal_disable").then((function(t){e.statusOptions=t.data})),this.getDicts("sys_user_sex").then((function(t){e.sexOptions=t.data})),this.getConfigKey("sys.user.initPassword").then((function(t){e.initPassword=t.msg}))},methods:{getList:function(){var e=this;this.loading=!0,Object(n["h"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.userList=t.rows,e.total=t.total,e.loading=!1}))},getTreeselect:function(){var e=this;Object(l["f"])().then((function(t){e.deptOptions=t.data}))},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(e){this.queryParams.deptId=e.id,this.getList()},handleStatusChange:function(e){var t=this,s="0"===e.status?"启用":"停用";this.$confirm('确认要"'+s+'""'+e.userName+'"用户吗?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(n["b"])(e.userId,e.status)})).then((function(){t.msgSuccess(s+"成功")})).catch((function(){e.status="0"===e.status?"1":"0"}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={userId:void 0,deptId:void 0,userName:void 0,nickName:void 0,password:void 0,phonenumber:void 0,email:void 0,sex:void 0,status:"0",remark:void 0,postIds:[],roleIds:[]},this.resetForm("form")},handleQuery:function(){this.queryParams.page=1,this.getList()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.userId})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){var e=this;this.reset(),this.getTreeselect(),Object(n["e"])().then((function(t){e.postOptions=t.posts,e.roleOptions=t.roles,e.open=!0,e.title="添加用户",e.form.password=e.initPassword}))},handleUpdate:function(e){var t=this;this.reset(),this.getTreeselect();var s=e.userId||this.ids;Object(n["e"])(s).then((function(e){t.form=e.data,t.postOptions=e.posts,t.roleOptions=e.roles,t.form.postIds=e.postIds,t.form.roleIds=e.roleIds,t.open=!0,t.title="修改用户",t.form.password=""}))},handleResetPwd:function(e){var t=this;this.$prompt('请输入"'+e.userName+'"的新密码',"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(s){var r=s.value;Object(n["i"])(e.userId,r).then((function(e){200===e.code?t.msgSuccess("修改成功，新密码是："+r):t.msgError(e.msg)}))})).catch((function(){}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.userId?Object(n["j"])(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):Object(n["a"])(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this,s=e.userId||this.ids;this.$confirm('是否确认删除用户编号为"'+s+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(n["c"])(s)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$confirm("是否确认导出所有用户数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(n["d"])(t)})).then((function(t){e.download(t.msg)})).catch((function(){}))},handleImport:function(){this.upload.title="用户导入",this.upload.open=!0},importTemplate:function(){var e=this;Object(n["g"])().then((function(t){e.download(t.msg)}))},handleFileUploadProgress:function(e,t,s){this.upload.isUploading=!0},handleFileSuccess:function(e,t,s){this.upload.open=!1,this.upload.isUploading=!1,this.$refs.upload.clearFiles(),this.$alert(e.msg,"导入结果",{dangerouslyUseHTMLString:!0}),this.getList()},submitFileForm:function(){this.$refs.upload.submit()}}}),d=c,p=s("2877"),m=Object(p["a"])(d,r,a,!1,null,null,null);t["default"]=m.exports},c0c7:function(e,t,s){"use strict";s.d(t,"h",(function(){return n})),s.d(t,"e",(function(){return o})),s.d(t,"a",(function(){return l})),s.d(t,"j",(function(){return i})),s.d(t,"c",(function(){return u})),s.d(t,"d",(function(){return c})),s.d(t,"i",(function(){return d})),s.d(t,"b",(function(){return p})),s.d(t,"f",(function(){return m})),s.d(t,"k",(function(){return f})),s.d(t,"l",(function(){return h})),s.d(t,"m",(function(){return v})),s.d(t,"g",(function(){return b}));var r=s("b775"),a=s("c38a");function n(e){return Object(r["a"])({url:"/system/user/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/system/user/"+Object(a["e"])(e),method:"get"})}function l(e){return Object(r["a"])({url:"/system/user",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/system/user",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/system/user/"+e,method:"delete"})}function c(e){return Object(r["a"])({url:"/system/user/export",method:"get",params:e})}function d(e,t){var s={userId:e,password:t};return Object(r["a"])({url:"/system/user/resetPwd",method:"put",data:s})}function p(e,t){var s={userId:e,status:t};return Object(r["a"])({url:"/system/user/changeStatus",method:"put",data:s})}function m(){return Object(r["a"])({url:"/system/user/profile",method:"get"})}function f(e){return Object(r["a"])({url:"/system/user/profile",method:"put",data:e})}function h(e,t){var s={oldPassword:e,newPassword:t};return Object(r["a"])({url:"/system/user/profile/updatePwd",method:"put",params:s})}function v(e){return Object(r["a"])({url:"/system/user/profile/avatar",method:"post",data:e})}function b(){return Object(r["a"])({url:"/system/user/importTemplate",method:"get"})}},fcb7:function(e,t,s){"use strict";s.d(t,"d",(function(){return a})),s.d(t,"c",(function(){return n})),s.d(t,"f",(function(){return o})),s.d(t,"e",(function(){return l})),s.d(t,"a",(function(){return i})),s.d(t,"g",(function(){return u})),s.d(t,"b",(function(){return c}));var r=s("b775");function a(e){return Object(r["a"])({url:"/system/dept/list",method:"get",params:e})}function n(e){return Object(r["a"])({url:"/system/dept/"+e,method:"get"})}function o(){return Object(r["a"])({url:"/system/dept/treeselect",method:"get"})}function l(e){return Object(r["a"])({url:"/system/dept/roleDeptTreeselect/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/system/dept",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/system/dept",method:"put",data:e})}function c(e){return Object(r["a"])({url:"/system/dept/"+e,method:"delete"})}}}]);