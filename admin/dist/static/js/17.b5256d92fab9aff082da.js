webpackJsonp([17],{bG5p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r),i=a("exGp"),s=a.n(i),o=a("Dd8w"),l=a.n(o),c=a("NYxO"),u={data:function(){return{column_id:this.$route.params.column_id,detail:null,formValidate:{title:""},ruleValidate:{title:[{required:!0,message:"章节不能为空",trigger:"blur"}]}}},methods:l()({},Object(c.b)({createChapter:"chapter/create"}),{create:function(){var t=this;return s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.formValidate.id=t.id,e.prev=1,t.formValidate.column_id=t.column_id,e.next=5,t.createChapter(t.formValidate);case 5:t.$Message.success("创建成功!"),t.$emit("showCreateChapter"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}},e,t,[[1,9]])}))()},handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.create():e.$Message.error("请完成表单!")})},handleReset:function(t){this.$refs[t].resetFields()}})},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"章节名称",prop:"title"}},[a("Input",{attrs:{placeholder:"章节名称"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),t._v(" "),a("FormItem",[a("Button",{on:{click:function(e){return t.handleReset("formValidate")}}},[t._v("重置")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},p=a("VU/8")(u,d,!1,null,null,null).exports,h={props:{title:{type:String,default:function(){return""}},chapter_id:{type:Number,default:function(){return-1}}},data:function(){return{column_id:this.$route.params.column_id,detail:null,formValidate:{title:""},ruleValidate:{title:[{required:!0,message:"章节不能为空",trigger:"blur"}]}}},watch:{title:function(){this.formValidate.title=this.title}},methods:l()({},Object(c.b)({updateChapter:"chapter/update"}),{update:function(){var t=this;return s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.formValidate.id=t.chapter_id,t.formValidate.column_id=t.column_id,e.next=5,t.updateChapter(t.formValidate);case 5:t.$Message.success("更新成功!"),t.$emit("showUpdateChapter"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,t,[[0,9]])}))()},handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.update():e.$Message.error("请完成表单!")})},handleReset:function(t){this.$refs[t].resetFields()}})},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"章节名称",prop:"title"}},[a("Input",{attrs:{placeholder:"章节名称"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),t._v(" "),a("FormItem",[a("Button",{on:{click:function(e){return t.handleReset("formValidate")}}},[t._v("重置")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("更新")])],1)],1)],1)},staticRenderFns:[]},m={components:{VCreateChapter:p,VUpdateChapter:a("VU/8")(h,f,!1,null,null,null).exports},name:"list",data:function(){return{isCreateChapter:!1,isUpdateChapter:!1,column_id:this.$route.params.column_id,loading:!0,chapterTitle:"",chapterId:-1,zIndex:9999,list:[],columns:[{title:"ID",key:"id",width:80,align:"center"},{title:"章节标题",key:"title"},{title:"操作",slot:"action",width:200,align:"center"}]}},created:function(){this.fetchData()},methods:l()({},Object(c.b)({getChapterList:"chapter/list",destroyChapter:"chapter/destroy"}),{fetchData:function(){var t=this;return s()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getChapterList({column_id:t.column_id});case 2:a=e.sent,t.list=a.data.data.chapter_list,t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},showUpdateChapter:function(){this.isUpdateChapter=!this.isUpdateChapter,this.fetchData()},update:function(t,e){this.chapterTitle=t,this.chapterId=e,this.isUpdateChapter=!this.isUpdateChapter},toPathLink:function(t){this.$router.push(t)},showCreateChapter:function(){this.isCreateChapter=!this.isCreateChapter,this.fetchData()},chapterSection:function(t){this.$router.push("/chapter/section/"+t)},destroy:function(t){var e,a=this;this.$Modal.confirm({title:"提示",content:"<p>确定删除此章节吗？</p>",loading:!0,onOk:(e=s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.destroyChapter(t);case 3:a.$Message.success("删除成功"),a.fetchData(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),a.$Message.error(e.t0);case 11:return e.prev=11,a.$Modal.remove(),e.finish(11);case 14:case"end":return e.stop()}},e,a,[[0,7,11,14]])})),function(){return e.apply(this,arguments)}),onCancel:function(){a.$Message.warning("取消！")}})}})},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary",icon:"md-add"},on:{click:t.showCreateChapter}},[t._v("新增章节\n  ")]),t._v(" "),t.list.length>0?a("section",[a("Table",{attrs:{loading:t.loading,border:"",columns:t.columns,data:t.list},scopedSlots:t._u([{key:"name",fn:function(e){var r=e.row;return[a("strong",[t._v(t._s(r.name))])]}},{key:"action",fn:function(e){var r=e.row;return e.index,[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"warning",size:"small"},on:{click:function(e){return t.chapterSection(r.id)}}},[t._v("章节文章")]),t._v(" "),a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.update(r.title,r.id)}}},[t._v("编辑")]),t._v(" "),a("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){return t.destroy(r.id)}}},[t._v("删除")])]}}],null,!1,3453102184)})],1):t._e(),t._v(" "),a("Modal",{attrs:{"z-index":t.zIndex,title:"创建章节"},model:{value:t.isCreateChapter,callback:function(e){t.isCreateChapter=e},expression:"isCreateChapter"}},[a("v-create-chapter",{on:{showCreateChapter:t.showCreateChapter}})],1),t._v(" "),a("Modal",{attrs:{"z-index":t.zIndex,title:"更新章节"},model:{value:t.isUpdateChapter,callback:function(e){t.isUpdateChapter=e},expression:"isUpdateChapter"}},[a("v-update-chapter",{attrs:{chapter_id:t.chapterId,title:t.chapterTitle},on:{showUpdateChapter:t.showUpdateChapter}})],1)],1)},staticRenderFns:[]};var C=a("VU/8")(m,v,!1,function(t){a("npZo")},"data-v-16cb477e",null);e.default=C.exports},npZo:function(t,e){}});
//# sourceMappingURL=17.b5256d92fab9aff082da.js.map