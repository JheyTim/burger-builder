(this["webpackJsonpburger-project"]=this["webpackJsonpburger-project"]||[]).push([[4],{93:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(94),l=n.n(r);t.a=function(e){var t=null,n=[l.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(l.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:l.a.Input},i.a.createElement("label",{className:l.a.Label},e.label),t)}},94:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},98:function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},99:function(e,t,n){"use strict";n.r(t);var a=n(22),i=n(1),r=n(5),l=n(6),u=n(8),o=n(7),c=n(0),s=n.n(c),h=n(14),d=n(4),p=n(93),g=n(31),m=n(98),v=n.n(m),f=n(39),b=n(15),j=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var l=arguments.length,u=new Array(l),o=0;o<l;o++)u[o]=arguments[o];return(e=t.call.apply(t,[this].concat(u))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.checkValidity=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n},e.inputChangedHandler=function(t,n){var r=Object(i.a)(Object(i.a)({},e.state.controls),{},Object(a.a)({},n,Object(i.a)(Object(i.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:r})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthMethodHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthredirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return s.a.createElement(p.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=s.a.createElement(f.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message));var r=null;return this.props.isAuthenticated&&(r=s.a.createElement(d.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:v.a.Auth},r,i,s.a.createElement("form",{onSubmit:this.submitHandler},a,s.a.createElement(g.a,{btnType:"Success"},"SUBMIT")),s.a.createElement(g.a,{btnType:"Danger",clicked:this.switchAuthMethodHandler},"Switch to ",this.state.isSignup?"Sign in":"Sign up"))}}]),n}(c.Component);t.default=Object(h.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthredirectPath:function(){return e(b.j("/"))}}}))(j)}}]);
//# sourceMappingURL=4.9f918171.chunk.js.map