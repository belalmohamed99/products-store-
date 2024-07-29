import './polyfills.server.mjs';
import{$ as ue,Ba as R,Ca as C,Da as he,Ga as Pe,H as q,Ha as ke,I as k,Ia as Te,J as z,K as b,M as A,Ma as je,P as E,Q as M,R as g,U as se,V as ae,W as le,Y as T,Z as d,_ as u,ba as j,ca as y,e as Ee,f as Fe,fa as v,ga as h,h as we,ha as ce,ia as l,ja as a,ka as F,la as w,m as Ie,ma as Z,na as c,oa as de,pa as xe,qa as G,r as Se,sa as Oe,ua as Ne}from"./chunk-IMZ4IR46.mjs";import{a as f,b as m}from"./chunk-5XUXGTUW.mjs";var qe=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(ue),u(le))},e.\u0275dir=g({type:e});let t=e;return t})(),ze=(()=>{let e=class e extends qe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ae(e)))(o||e)}})(),e.\u0275dir=g({type:e,features:[y]});let t=e;return t})(),_e=new A("");var bt={provide:_e,useExisting:k(()=>re),multi:!0};function At(){let t=he()?he().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Mt=new A(""),re=(()=>{let e=class e extends qe{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!At())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(ue),u(le),u(Mt,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&w("input",function(p){return o._handleInput(p.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(p){return o._compositionEnd(p.target.value)})},features:[G([bt]),y]});let t=e;return t})();function V(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Ze(t){return t!=null&&typeof t.length=="number"}var Xe=new A(""),Ye=new A(""),Et=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_=class{static min(e){return Ft(e)}static max(e){return wt(e)}static required(e){return It(e)}static requiredTrue(e){return St(e)}static email(e){return xt(e)}static minLength(e){return Ot(e)}static maxLength(e){return Nt(e)}static pattern(e){return Pt(e)}static nullValidator(e){return Ke(e)}static compose(e){return nt(e)}static composeAsync(e){return ot(e)}};function Ft(t){return e=>{if(V(e.value)||V(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function wt(t){return e=>{if(V(e.value)||V(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function It(t){return V(t.value)?{required:!0}:null}function St(t){return t.value===!0?null:{required:!0}}function xt(t){return V(t.value)||Et.test(t.value)?null:{email:!0}}function Ot(t){return e=>V(e.value)||!Ze(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Nt(t){return e=>Ze(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Pt(t){if(!t)return Ke;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(V(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Ke(t){return null}function Je(t){return t!=null}function Qe(t){return Ne(t)?we(t):t}function et(t){let e={};return t.forEach(n=>{e=n!=null?f(f({},e),n):e}),Object.keys(e).length===0?null:e}function tt(t,e){return e.map(n=>n(t))}function kt(t){return!t.validate}function it(t){return t.map(e=>kt(e)?e:n=>e.validate(n))}function nt(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){return et(tt(n,e))}}function rt(t){return t!=null?nt(it(t)):null}function ot(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){let i=tt(n,e).map(Qe);return Se(i).pipe(Ie(et))}}function st(t){return t!=null?ot(it(t)):null}function Ge(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function at(t){return t._rawValidators}function lt(t){return t._rawAsyncValidators}function fe(t){return t?Array.isArray(t)?t:[t]:[]}function K(t,e){return Array.isArray(t)?t.includes(e):t===e}function Re(t,e){let n=fe(e);return fe(t).forEach(r=>{K(n,r)||n.push(r)}),n}function Be(t,e){return fe(e).filter(n=>!K(t,n))}var J=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=rt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=st(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},x=class extends J{get formDirective(){return null}get path(){return null}},$=class extends J{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Q=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Tt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ti=m(f({},Tt),{"[class.ng-submitted]":"isSubmitted"}),ut=(()=>{let e=class e extends Q{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u($,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ce("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})(),ct=(()=>{let e=class e extends Q{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(x,10))},e.\u0275dir=g({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ce("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[y]});let t=e;return t})();var B="VALID",X="INVALID",I="PENDING",U="DISABLED",D=class{},ee=class extends D{constructor(e,n){super(),this.value=e,this.source=n}},H=class extends D{constructor(e,n){super(),this.pristine=e,this.source=n}},L=class extends D{constructor(e,n){super(),this.touched=e,this.source=n}},S=class extends D{constructor(e,n){super(),this.status=e,this.source=n}},pe=class extends D{constructor(e){super(),this.source=e}},me=class extends D{constructor(e){super(),this.source=e}};function ye(t){return(oe(t)?t.validators:t)||null}function jt(t){return Array.isArray(t)?rt(t):t||null}function Ce(t,e){return(oe(e)?e.asyncValidators:t)||null}function Gt(t){return Array.isArray(t)?st(t):t||null}function oe(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function dt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new q(1e3,"");if(!i[n])throw new q(1001,"")}function ht(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new q(1002,"")})}var O=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=R(()=>this.statusReactive()),this.statusReactive=j(void 0),this._pristine=R(()=>this.pristineReactive()),this.pristineReactive=j(!0),this._touched=R(()=>this.touchedReactive()),this.touchedReactive=j(!1),this._events=new Ee,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return C(this.statusReactive)}set status(e){C(()=>this.statusReactive.set(e))}get valid(){return this.status===B}get invalid(){return this.status===X}get pending(){return this.status==I}get disabled(){return this.status===U}get enabled(){return this.status!==U}get pristine(){return C(this.pristineReactive)}set pristine(e){C(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return C(this.touchedReactive)}set touched(e){C(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return K(this._rawValidators,e)}hasAsyncValidator(e){return K(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(m(f({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new L(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new L(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(m(f({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new H(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new H(!0,i))}markAsPending(e={}){this.status=I;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new S(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(m(f({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=U,this.errors=null,this._forEachChild(r=>{r.disable(m(f({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ee(this.value,i)),this._events.next(new S(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(f({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=B,this._forEachChild(i=>{i.enable(m(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(f({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===B||this.status===I)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ee(this.value,n)),this._events.next(new S(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(m(f({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?U:B}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=I,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=Qe(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new S(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?U:this.errors?X:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(I)?I:this._anyControlsHaveStatus(X)?X:B}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new H(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new L(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){oe(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=jt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Gt(this._rawAsyncValidators)}},te=class extends O{constructor(e,n,i){super(ye(n),Ce(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){ht(this,!0,e),Object.keys(e).forEach(i=>{dt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ge=class extends te{};var ft=new A("CallSetDisabledState",{providedIn:"root",factory:()=>Ve}),Ve="always";function Rt(t,e){return[...e.path,t]}function Ue(t,e,n=Ve){De(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ut(t,e),Lt(t,e),Ht(t,e),Bt(t,e)}function He(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),ne(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function ie(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Bt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function De(t,e){let n=at(t);e.validator!==null?t.setValidators(Ge(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=lt(t);e.asyncValidator!==null?t.setAsyncValidators(Ge(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();ie(e._rawValidators,r),ie(e._rawAsyncValidators,r)}function ne(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=at(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=lt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return ie(e._rawValidators,i),ie(e._rawAsyncValidators,i),n}function Ut(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&pt(t,e)})}function Ht(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&pt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function pt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Lt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function $t(t,e){t==null,De(t,e)}function Wt(t,e){return ne(t,e)}function qt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function zt(t){return Object.getPrototypeOf(t.constructor)===ze}function Zt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Xt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===re?n=o:zt(o)?i=o:r=o}),r||i||n||null}function Yt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Le(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function $e(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Y=class extends O{constructor(e=null,n,i){super(ye(n),Ce(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oe(n)&&(n.nonNullable||n.initialValueIsDefault)&&($e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Le(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Le(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){$e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Kt=t=>t instanceof Y;var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=g({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),Jt={provide:_e,useExisting:k(()=>be),multi:!0},be=(()=>{let e=class e extends ze{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ae(e)))(o||e)}})(),e.\u0275dir=g({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&w("input",function(p){return o.onChange(p.target.value)})("blur",function(){return o.onTouched()})},features:[G([Jt]),y]});let t=e;return t})();var gt=new A("");var Qt={provide:x,useExisting:k(()=>Ae)},Ae=(()=>{let e=class e extends x{get submitted(){return C(this._submittedReactive)}set submitted(i){this._submittedReactive.set(i)}constructor(i,r,o){super(),this.callSetDisabledState=o,this._submitted=R(()=>this._submittedReactive()),this._submittedReactive=j(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new T,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ne(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Ue(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){He(i.control||null,i,!1),Yt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this._submittedReactive.set(!0),Zt(this.form,this.directives),this.ngSubmit.emit(i),this.form._events.next(new pe(this.control)),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this._submittedReactive.set(!1),this.form._events.next(new me(this.form))}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(He(r||null,i),Kt(o)&&(Ue(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);$t(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Wt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){De(this.form,this),this._oldForm&&ne(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(u(Xe,10),u(Ye,10),u(ft,8))},e.\u0275dir=g({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&w("submit",function(p){return o.onSubmit(p)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[G([Qt]),y,se]});let t=e;return t})();var ei={provide:$,useExisting:k(()=>Me)},Me=(()=>{let e=class e extends ${set isDisabled(i){}constructor(i,r,o,s,p){super(),this._ngModelWarningConfig=p,this._added=!1,this.name=null,this.update=new T,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Xt(this,s)}ngOnChanges(i){this._added||this._setUpControl(),qt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Rt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(u(x,13),u(Xe,10),u(Ye,10),u(_e,10),u(gt,8))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[G([ei]),y,se]});let t=e;return t})();var ti=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e}),e.\u0275inj=b({});let t=e;return t})(),ve=class extends O{constructor(e,n,i){super(ye(n),Ce(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){ht(this,!1,e),e.forEach((i,r)=>{dt(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function We(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var vt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let o=this._reduceControls(i),s={};return We(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new te(o,s)}record(i,r=null){let o=this._reduceControls(i);return new ge(o,r)}control(i,r,o){let s={};return this.useNonNullable?(We(r)?s=r:(s.validators=r,s.asyncValidators=o),new Y(i,m(f({},s),{nonNullable:!0}))):new Y(i,r,o)}array(i,r,o){let s=i.map(p=>this._createControl(p));return new ve(s,r,o)}_reduceControls(i){let r={};return Object.keys(i).forEach(o=>{r[o]=this._createControl(i[o])}),r}_createControl(i){if(i instanceof Y)return i;if(i instanceof O)return i;if(Array.isArray(i)){let r=i[0],o=i.length>1?i[1]:null,s=i.length>2?i[2]:null;return this.control(r,o,s)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=z({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var _t=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:gt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ft,useValue:i.callSetDisabledState??Ve}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e}),e.\u0275inj=b({imports:[ti]});let t=e;return t})();var W=(()=>{class t{title="store";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[2,"text-align","center"]],template:function(i,r){i&1&&(l(0,"div",0)(1,"h1"),c(2,"Product Store"),a(),F(3,"app-product-form")(4,"app-product-list"),a())}})}return t})();var P=(()=>{class t{products=[];productsSubject=new Fe(this.products);getProducts(){return this.productsSubject.asObservable()}addProduct(n){n.id=this.products.length?Math.max(...this.products.map(i=>i.id))+1:1,this.products.push(n),this.productsSubject.next(this.products)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ri(t,e){t&1&&(l(0,"small"),c(1,"Name is required."),a())}function oi(t,e){t&1&&(l(0,"small"),c(1,"Name must be at least 3 characters long."),a())}function si(t,e){if(t&1&&(l(0,"div"),v(1,ri,2,0,"small",3)(2,oi,2,0,"small",3),a()),t&2){let n=Z();d(),h("ngIf",n.productForm.controls.name.errors==null?null:n.productForm.controls.name.errors.required),d(),h("ngIf",n.productForm.controls.name.errors==null?null:n.productForm.controls.name.errors.minlength)}}function ai(t,e){t&1&&(l(0,"small"),c(1,"Description is required."),a())}function li(t,e){t&1&&(l(0,"small"),c(1,"Description must be at least 10 characters long."),a())}function ui(t,e){if(t&1&&(l(0,"div"),v(1,ai,2,0,"small",3)(2,li,2,0,"small",3),a()),t&2){let n=Z();d(),h("ngIf",n.productForm.controls.description.errors==null?null:n.productForm.controls.description.errors.required),d(),h("ngIf",n.productForm.controls.description.errors==null?null:n.productForm.controls.description.errors.minlength)}}function ci(t,e){t&1&&(l(0,"small"),c(1,"Price is required."),a())}function di(t,e){t&1&&(l(0,"small"),c(1,"Price must be a positive number."),a())}function hi(t,e){if(t&1&&(l(0,"div"),v(1,ci,2,0,"small",3)(2,di,2,0,"small",3),a()),t&2){let n=Z();d(),h("ngIf",n.productForm.controls.price.errors==null?null:n.productForm.controls.price.errors.required),d(),h("ngIf",n.productForm.controls.price.errors==null?null:n.productForm.controls.price.errors.min)}}var Ct=(()=>{class t{fb;productService;productForm;constructor(n,i){this.fb=n,this.productService=i,this.productForm=this.fb.group({name:["",[_.required,_.minLength(3)]],description:["",[_.required,_.minLength(10)]],price:["",[_.required,_.min(0)]]})}onSubmit(){this.productForm.valid&&(this.productService.addProduct(this.productForm.value),this.productForm.reset())}static \u0275fac=function(i){return new(i||t)(u(vt),u(P))};static \u0275cmp=E({type:t,selectors:[["app-product-form"]],decls:18,vars:5,consts:[[3,"ngSubmit","formGroup"],["for","name"],["id","name","formControlName","name"],[4,"ngIf"],["for","description"],["id","description","formControlName","description"],["for","price"],["id","price","formControlName","price","type","number"],["type","submit",3,"disabled"]],template:function(i,r){i&1&&(l(0,"form",0),w("ngSubmit",function(){return r.onSubmit()}),l(1,"div")(2,"label",1),c(3,"Name:"),a(),F(4,"input",2),v(5,si,3,2,"div",3),a(),l(6,"div")(7,"label",4),c(8,"Description:"),a(),F(9,"textarea",5),v(10,ui,3,2,"div",3),a(),l(11,"div")(12,"label",6),c(13,"Price:"),a(),F(14,"input",7),v(15,hi,3,2,"div",3),a(),l(16,"button",8),c(17,"Add Product"),a()()),i&2&&(h("formGroup",r.productForm),d(5),h("ngIf",r.productForm.controls.name.invalid&&r.productForm.controls.name.touched),d(5),h("ngIf",r.productForm.controls.description.invalid&&r.productForm.controls.description.touched),d(5),h("ngIf",r.productForm.controls.price.invalid&&r.productForm.controls.price.touched),d(),h("disabled",r.productForm.invalid))},dependencies:[ke,mt,re,be,ut,ct,Ae,Me]})}return t})();function fi(t,e){if(t&1&&(l(0,"li")(1,"h3"),c(2),a(),l(3,"p"),c(4),a(),l(5,"p"),c(6),a()()),t&2){let n=e.$implicit;d(2),de(n.name),d(2),de(n.description),d(2),xe("Price: $",n.price,"")}}var Vt=(()=>{class t{productService;products=[];constructor(n){this.productService=n}ngOnInit(){this.productService.getProducts().subscribe(n=>{this.products=n})}static \u0275fac=function(i){return new(i||t)(u(P))};static \u0275cmp=E({type:t,selectors:[["app-product-list"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(i,r){i&1&&(l(0,"ul"),v(1,fi,7,3,"li",0),a()),i&2&&(d(),h("ngForOf",r.products))},dependencies:[Pe]})}return t})();var Dt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t,bootstrap:[W]});static \u0275inj=b({providers:[P],imports:[Te,_t]})}return t})();Oe(W,[Ct,Vt],[]);var pi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t,bootstrap:[W]});static \u0275inj=b({imports:[Dt,je]})}return t})();export{pi as a};