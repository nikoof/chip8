let W=0,S=null,P=`undefined`,$=`boolean`,a0=`string`,T=1,a1=`Object`,U=`utf-8`,_=`number`,a3=4,Y=`function`,a2=16,a6=1065,R=Array,V=Error,a4=Float32Array,Z=Int32Array,a5=Promise,X=Uint8Array,Q=undefined;var H=((a,b)=>{a=a>>>W;return G().subarray(a/a3,a/a3+ b)});var v=(a=>{const b=typeof a;if(b==_||b==$||a==S){return `${a}`};if(b==a0){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==S){return `Symbol`}else{return `Symbol(${b})`}};if(b==Y){const b=a.name;if(typeof b==a0&&b.length>W){return `Function(${b})`}else{return `Function`}};if(R.isArray(a)){const b=a.length;let c=`[`;if(b>W){c+=v(a[W])};for(let d=T;d<b;d++){c+=`, `+ v(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>T){d=c[T]}else{return toString.call(a)};if(d==a1){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a1}};if(a instanceof V){return `${a.name}: ${a.message}\n${a.stack}`};return d});var G=(()=>{if(F===S||F.byteLength===W){F=new a4(b.memory.buffer)};return F});var L=((a,b)=>{});var C=((a,c,d)=>{b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__haaef0c597fac1799(a,c,h(d))});function E(a,c){try{return a.apply(this,c)}catch(a){b.__wbindgen_exn_store(h(a))}}var q=(a=>a===Q||a===S);var d=(a=>c[a]);var u=(()=>{if(t===S||t.byteLength===W){t=new Float64Array(b.memory.buffer)};return t});var K=(()=>{const c={};c.wbg={};c.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==T){b.a=W;return !0};const c=!1;return c});c.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});c.wbg.__wbindgen_object_clone_ref=(a=>{const b=d(a);return h(b)});c.wbg.__wbindgen_string_new=((a,b)=>{const c=l(a,b);return h(c)});c.wbg.__wbg_crypto_d05b68a3572bb8ca=(a=>{const b=d(a).crypto;return h(b)});c.wbg.__wbindgen_is_object=(a=>{const b=d(a);const c=typeof b===`object`&&b!==S;return c});c.wbg.__wbg_process_b02b3570280d0366=(a=>{const b=d(a).process;return h(b)});c.wbg.__wbg_versions_c1cb42213cedf0f5=(a=>{const b=d(a).versions;return h(b)});c.wbg.__wbg_node_43b1089f407e4ec2=(a=>{const b=d(a).node;return h(b)});c.wbg.__wbindgen_is_string=(a=>{const b=typeof d(a)===a0;return b});c.wbg.__wbg_msCrypto_10fc94afee92bd76=(a=>{const b=d(a).msCrypto;return h(b)});c.wbg.__wbg_require_9a7e0f667ead4995=function(){return E((()=>{const a=module.require;return h(a)}),arguments)};c.wbg.__wbindgen_is_function=(a=>{const b=typeof d(a)===Y;return b});c.wbg.__wbg_randomFillSync_b70ccbdf4926a99d=function(){return E(((a,b)=>{d(a).randomFillSync(g(b))}),arguments)};c.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d=function(){return E(((a,b)=>{d(a).getRandomValues(d(b))}),arguments)};c.wbg.__wbindgen_string_get=((a,c)=>{const e=d(c);const f=typeof e===a0?e:Q;var g=q(f)?W:p(f,b.__wbindgen_malloc,b.__wbindgen_realloc);var h=m;s()[a/a3+ T]=h;s()[a/a3+ W]=g});c.wbg.__wbindgen_number_get=((a,b)=>{const c=d(b);const e=typeof c===_?c:Q;u()[a/8+ T]=q(e)?W:e;s()[a/a3+ W]=!q(e)});c.wbg.__wbg_trace_d15d23fb5b2b47ef=((a,b)=>{console.trace(l(a,b))});c.wbg.__wbg_debug_a8a54540f1bab3f4=((a,b)=>{console.debug(l(a,b))});c.wbg.__wbg_info_e044b22a5191d711=((a,b)=>{console.info(l(a,b))});c.wbg.__wbg_warn_0fa5ef0dc2a288d0=((a,b)=>{console.warn(l(a,b))});c.wbg.__wbg_error_14d05ac44618f166=((a,c)=>{let d;let e;try{d=a;e=c;console.error(l(a,c))}finally{b.__wbindgen_free(d,e,T)}});c.wbg.__wbg_new_5558faf900c28862=(()=>{const a=new V();return h(a)});c.wbg.__wbg_stack_0ad674156f31e4a6=((a,c)=>{const e=d(c).stack;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbg_queueMicrotask_118eeb525d584d9a=(a=>{queueMicrotask(d(a))});c.wbg.__wbg_queueMicrotask_26a89c14c53809c0=(a=>{const b=d(a).queueMicrotask;return h(b)});c.wbg.__wbindgen_boolean_get=(a=>{const b=d(a);const c=typeof b===$?(b?T:W):2;return c});c.wbg.__wbindgen_number_new=(a=>{const b=a;return h(b)});c.wbg.__wbg_instanceof_WebGl2RenderingContext_92adf5bbd2568b71=(a=>{let b;try{b=d(a) instanceof WebGL2RenderingContext}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_bindVertexArray_2a70aed123353597=((a,b)=>{d(a).bindVertexArray(d(b))});c.wbg.__wbg_bufferData_eab63186e3e72d98=((a,b,c,e)=>{d(a).bufferData(b>>>W,d(c),e>>>W)});c.wbg.__wbg_createVertexArray_761ba22fc5da3ad7=(a=>{const b=d(a).createVertexArray();return q(b)?W:h(b)});c.wbg.__wbg_texImage2D_1159b898accc2807=function(){return E(((a,b,c,e,f,g,h,i,j,k)=>{d(a).texImage2D(b>>>W,c,e,f,g,h,i>>>W,j>>>W,d(k))}),arguments)};c.wbg.__wbg_texSubImage2D_33018bcf2de70890=function(){return E(((a,b,c,e,f,g,h,i,j,k)=>{d(a).texSubImage2D(b>>>W,c,e,f,g,h,i>>>W,j>>>W,d(k))}),arguments)};c.wbg.__wbg_texSubImage2D_b97aa5ddc0162314=function(){return E(((a,b,c,e,f,g,h,i,j,k)=>{d(a).texSubImage2D(b>>>W,c,e,f,g,h,i>>>W,j>>>W,k)}),arguments)};c.wbg.__wbg_activeTexture_02d56293bce2f613=((a,b)=>{d(a).activeTexture(b>>>W)});c.wbg.__wbg_attachShader_70c3f88b777a0a54=((a,b,c)=>{d(a).attachShader(d(b),d(c))});c.wbg.__wbg_bindBuffer_ac939bcab5249160=((a,b,c)=>{d(a).bindBuffer(b>>>W,d(c))});c.wbg.__wbg_bindTexture_e28115f3ea3da6d2=((a,b,c)=>{d(a).bindTexture(b>>>W,d(c))});c.wbg.__wbg_blendEquationSeparate_457e81472270e23c=((a,b,c)=>{d(a).blendEquationSeparate(b>>>W,c>>>W)});c.wbg.__wbg_blendFuncSeparate_b6a96b8e26e75171=((a,b,c,e,f)=>{d(a).blendFuncSeparate(b>>>W,c>>>W,e>>>W,f>>>W)});c.wbg.__wbg_clear_40335e7899ec7759=((a,b)=>{d(a).clear(b>>>W)});c.wbg.__wbg_clearColor_b48ee3ca810de959=((a,b,c,e,f)=>{d(a).clearColor(b,c,e,f)});c.wbg.__wbg_colorMask_743f2bbb6e3fb4e5=((a,b,c,e,f)=>{d(a).colorMask(b!==W,c!==W,e!==W,f!==W)});c.wbg.__wbg_compileShader_bdfb3d5a3ad59498=((a,b)=>{d(a).compileShader(d(b))});c.wbg.__wbg_createBuffer_a95c59cc2c1750e7=(a=>{const b=d(a).createBuffer();return q(b)?W:h(b)});c.wbg.__wbg_createProgram_0a7670ed33f06d97=(a=>{const b=d(a).createProgram();return q(b)?W:h(b)});c.wbg.__wbg_createShader_119ffcdb1667f405=((a,b)=>{const c=d(a).createShader(b>>>W);return q(c)?W:h(c)});c.wbg.__wbg_createTexture_4f0c3c77df4bde11=(a=>{const b=d(a).createTexture();return q(b)?W:h(b)});c.wbg.__wbg_deleteBuffer_b8aaa61f9bb13617=((a,b)=>{d(a).deleteBuffer(d(b))});c.wbg.__wbg_deleteProgram_d90e44574acb8018=((a,b)=>{d(a).deleteProgram(d(b))});c.wbg.__wbg_deleteShader_5ec1e25476df2da0=((a,b)=>{d(a).deleteShader(d(b))});c.wbg.__wbg_deleteTexture_554c30847d340929=((a,b)=>{d(a).deleteTexture(d(b))});c.wbg.__wbg_detachShader_5fe9df16c9007fca=((a,b,c)=>{d(a).detachShader(d(b),d(c))});c.wbg.__wbg_disable_f68719f70ddfb5b8=((a,b)=>{d(a).disable(b>>>W)});c.wbg.__wbg_disableVertexAttribArray_557393d91e187e24=((a,b)=>{d(a).disableVertexAttribArray(b>>>W)});c.wbg.__wbg_drawElements_a3781a76e2ccb054=((a,b,c,e,f)=>{d(a).drawElements(b>>>W,c,e>>>W,f)});c.wbg.__wbg_enable_6dab9d5278ba15e2=((a,b)=>{d(a).enable(b>>>W)});c.wbg.__wbg_enableVertexAttribArray_c2bfb733e87824c8=((a,b)=>{d(a).enableVertexAttribArray(b>>>W)});c.wbg.__wbg_getAttribLocation_cab9273a8063f57a=((a,b,c,e)=>{const f=d(a).getAttribLocation(d(b),l(c,e));return f});c.wbg.__wbg_getError_b3d74583648031ab=(a=>{const b=d(a).getError();return b});c.wbg.__wbg_getExtension_25430e0ed157fcf8=function(){return E(((a,b,c)=>{const e=d(a).getExtension(l(b,c));return q(e)?W:h(e)}),arguments)};c.wbg.__wbg_getParameter_b282105ca8420119=function(){return E(((a,b)=>{const c=d(a).getParameter(b>>>W);return h(c)}),arguments)};c.wbg.__wbg_getProgramInfoLog_110f43b4125782e9=((a,c,e)=>{const f=d(c).getProgramInfoLog(d(e));var g=q(f)?W:p(f,b.__wbindgen_malloc,b.__wbindgen_realloc);var h=m;s()[a/a3+ T]=h;s()[a/a3+ W]=g});c.wbg.__wbg_getProgramParameter_22b3f1c8d913cd2c=((a,b,c)=>{const e=d(a).getProgramParameter(d(b),c>>>W);return h(e)});c.wbg.__wbg_getShaderInfoLog_562b1447e7c24866=((a,c,e)=>{const f=d(c).getShaderInfoLog(d(e));var g=q(f)?W:p(f,b.__wbindgen_malloc,b.__wbindgen_realloc);var h=m;s()[a/a3+ T]=h;s()[a/a3+ W]=g});c.wbg.__wbg_getShaderParameter_58d3b34afa9db13b=((a,b,c)=>{const e=d(a).getShaderParameter(d(b),c>>>W);return h(e)});c.wbg.__wbg_getSupportedExtensions_1a007030d26efba5=(a=>{const b=d(a).getSupportedExtensions();return q(b)?W:h(b)});c.wbg.__wbg_getUniformLocation_7b435a76db4f3128=((a,b,c,e)=>{const f=d(a).getUniformLocation(d(b),l(c,e));return q(f)?W:h(f)});c.wbg.__wbg_linkProgram_e170ffe0b8242136=((a,b)=>{d(a).linkProgram(d(b))});c.wbg.__wbg_pixelStorei_6be3fc7114b690b8=((a,b,c)=>{d(a).pixelStorei(b>>>W,c)});c.wbg.__wbg_scissor_27cb154cc9864444=((a,b,c,e,f)=>{d(a).scissor(b,c,e,f)});c.wbg.__wbg_shaderSource_e12efd3a2bf3413d=((a,b,c,e)=>{d(a).shaderSource(d(b),l(c,e))});c.wbg.__wbg_texParameteri_f5c0d085b77931dd=((a,b,c,e)=>{d(a).texParameteri(b>>>W,c>>>W,e)});c.wbg.__wbg_uniform1i_1fd90743f7b78faa=((a,b,c)=>{d(a).uniform1i(d(b),c)});c.wbg.__wbg_uniform2f_e5d4fed81577da9b=((a,b,c,e)=>{d(a).uniform2f(d(b),c,e)});c.wbg.__wbg_useProgram_53de6b084c4780ce=((a,b)=>{d(a).useProgram(d(b))});c.wbg.__wbg_vertexAttribPointer_3133080603a92d4c=((a,b,c,e,f,g,h)=>{d(a).vertexAttribPointer(b>>>W,c,e>>>W,f!==W,g,h)});c.wbg.__wbg_viewport_afd5166081d009b2=((a,b,c,e,f)=>{d(a).viewport(b,c,e,f)});c.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=d(a) instanceof Window}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=d(a).document;return q(b)?W:h(b)});c.wbg.__wbg_location_0f233324e8e8c699=(a=>{const b=d(a).location;return h(b)});c.wbg.__wbg_navigator_910cca0226b70083=(a=>{const b=d(a).navigator;return h(b)});c.wbg.__wbg_innerHeight_dc4c81e04e8bc294=function(){return E((a=>{const b=d(a).innerHeight;return h(b)}),arguments)};c.wbg.__wbg_devicePixelRatio_93bac98af723c7ba=(a=>{const b=d(a).devicePixelRatio;return b});c.wbg.__wbg_speechSynthesis_49032620643b6c6d=function(){return E((a=>{const b=d(a).speechSynthesis;return h(b)}),arguments)};c.wbg.__wbg_localStorage_318b1c4f106a46f9=function(){return E((a=>{const b=d(a).localStorage;return q(b)?W:h(b)}),arguments)};c.wbg.__wbg_performance_698febdfb8f1f470=(a=>{const b=d(a).performance;return q(b)?W:h(b)});c.wbg.__wbg_matchMedia_fed5c8e73cf148cf=function(){return E(((a,b,c)=>{const e=d(a).matchMedia(l(b,c));return q(e)?W:h(e)}),arguments)};c.wbg.__wbg_open_0aa18467f0bb625e=function(){return E(((a,b,c,e,f)=>{const g=d(a).open(l(b,c),l(e,f));return q(g)?W:h(g)}),arguments)};c.wbg.__wbg_requestAnimationFrame_1820a8e6b645ec5a=function(){return E(((a,b)=>{const c=d(a).requestAnimationFrame(d(b));return c}),arguments)};c.wbg.__wbg_clearInterval_9886eebcc6575e58=((a,b)=>{d(a).clearInterval(b)});c.wbg.__wbg_setTimeout_bd20251bb242e262=function(){return E(((a,b,c)=>{const e=d(a).setTimeout(d(b),c);return e}),arguments)};c.wbg.__wbg_setid_4a30be2ea97a37dd=((a,b,c)=>{d(a).id=l(b,c)});c.wbg.__wbg_scrollLeft_d6eb4c6a0a6417b2=(a=>{const b=d(a).scrollLeft;return b});c.wbg.__wbg_clientWidth_63a18f3f1c0d50b9=(a=>{const b=d(a).clientWidth;return b});c.wbg.__wbg_clientHeight_12bebacfbf7ddf82=(a=>{const b=d(a).clientHeight;return b});c.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,c)=>{d(a).innerHTML=l(b,c)});c.wbg.__wbg_getBoundingClientRect_f3f6eb39f24c1bb0=(a=>{const b=d(a).getBoundingClientRect();return h(b)});c.wbg.__wbg_remove_ed2f62f1a8be044b=(a=>{d(a).remove()});c.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=d(a).body;return q(b)?W:h(b)});c.wbg.__wbg_createElement_1a136faad4101f43=function(){return E(((a,b,c)=>{const e=d(a).createElement(l(b,c));return h(e)}),arguments)};c.wbg.__wbg_getElementById_00904c7c4a32c23b=((a,b,c)=>{const e=d(a).getElementById(l(b,c));return q(e)?W:h(e)});c.wbg.__wbg_instanceof_HtmlElement_430cfa09315574cc=(a=>{let b;try{b=d(a) instanceof HTMLElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_scrollTop_b8364983aece464a=(a=>{const b=d(a).scrollTop;return b});c.wbg.__wbg_setinnerText_50a32710b8f1b7b6=((a,b,c)=>{d(a).innerText=l(b,c)});c.wbg.__wbg_hidden_445daefa35729d27=(a=>{const b=d(a).hidden;return b});c.wbg.__wbg_sethidden_a1bed94b94610e67=((a,b)=>{d(a).hidden=b!==W});c.wbg.__wbg_style_b32d5cb9a6bd4720=(a=>{const b=d(a).style;return h(b)});c.wbg.__wbg_offsetTop_f17e37517e25eb43=(a=>{const b=d(a).offsetTop;return b});c.wbg.__wbg_offsetLeft_0d0f84745a0af686=(a=>{const b=d(a).offsetLeft;return b});c.wbg.__wbg_offsetWidth_d131cad586641a97=(a=>{const b=d(a).offsetWidth;return b});c.wbg.__wbg_setonclick_da378f5c0567cc03=((a,b)=>{d(a).onclick=d(b)});c.wbg.__wbg_blur_3de7a3848d6d481c=function(){return E((a=>{d(a).blur()}),arguments)};c.wbg.__wbg_focus_623326ec4eefd224=function(){return E((a=>{d(a).focus()}),arguments)};c.wbg.__wbg_instanceof_WebGlRenderingContext_7515fd5b9abf4249=(a=>{let b;try{b=d(a) instanceof WebGLRenderingContext}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_bufferData_b2e68fdc1fd1e94b=((a,b,c,e)=>{d(a).bufferData(b>>>W,d(c),e>>>W)});c.wbg.__wbg_texImage2D_9cd1931c442b03ad=function(){return E(((a,b,c,e,f,g,h,i,j,k)=>{d(a).texImage2D(b>>>W,c,e,f,g,h,i>>>W,j>>>W,d(k))}),arguments)};c.wbg.__wbg_texSubImage2D_d23a3ec1fa60bdaf=function(){return E(((a,b,c,e,f,g,h,i,j,k)=>{d(a).texSubImage2D(b>>>W,c,e,f,g,h,i>>>W,j>>>W,d(k))}),arguments)};c.wbg.__wbg_activeTexture_3748123e1becf07d=((a,b)=>{d(a).activeTexture(b>>>W)});c.wbg.__wbg_attachShader_cfbbdefc08a0422f=((a,b,c)=>{d(a).attachShader(d(b),d(c))});c.wbg.__wbg_bindBuffer_3f166cc2f502fc09=((a,b,c)=>{d(a).bindBuffer(b>>>W,d(c))});c.wbg.__wbg_bindTexture_be92cdd3f162b4f9=((a,b,c)=>{d(a).bindTexture(b>>>W,d(c))});c.wbg.__wbg_blendEquationSeparate_33f23a57d77e8079=((a,b,c)=>{d(a).blendEquationSeparate(b>>>W,c>>>W)});c.wbg.__wbg_blendFuncSeparate_52fdb0f1fbf57928=((a,b,c,e,f)=>{d(a).blendFuncSeparate(b>>>W,c>>>W,e>>>W,f>>>W)});c.wbg.__wbg_clear_af4278a00382d3ce=((a,b)=>{d(a).clear(b>>>W)});c.wbg.__wbg_clearColor_9a45e2200c61a8f2=((a,b,c,e,f)=>{d(a).clearColor(b,c,e,f)});c.wbg.__wbg_colorMask_57603facaeb6e2e3=((a,b,c,e,f)=>{d(a).colorMask(b!==W,c!==W,e!==W,f!==W)});c.wbg.__wbg_compileShader_be824cfad43331b8=((a,b)=>{d(a).compileShader(d(b))});c.wbg.__wbg_createBuffer_90bf79c414ad4956=(a=>{const b=d(a).createBuffer();return q(b)?W:h(b)});c.wbg.__wbg_createProgram_983b87cad6d06768=(a=>{const b=d(a).createProgram();return q(b)?W:h(b)});c.wbg.__wbg_createShader_896229165c5a11d4=((a,b)=>{const c=d(a).createShader(b>>>W);return q(c)?W:h(c)});c.wbg.__wbg_createTexture_b77eefdce0bb2c55=(a=>{const b=d(a).createTexture();return q(b)?W:h(b)});c.wbg.__wbg_deleteBuffer_d70596808095dac2=((a,b)=>{d(a).deleteBuffer(d(b))});c.wbg.__wbg_deleteProgram_8447c337271aa934=((a,b)=>{d(a).deleteProgram(d(b))});c.wbg.__wbg_deleteShader_322b059ad560664a=((a,b)=>{d(a).deleteShader(d(b))});c.wbg.__wbg_deleteTexture_bbda7cb554bc12b9=((a,b)=>{d(a).deleteTexture(d(b))});c.wbg.__wbg_detachShader_1faf06c8a1000e58=((a,b,c)=>{d(a).detachShader(d(b),d(c))});c.wbg.__wbg_disable_57e8624c865bd654=((a,b)=>{d(a).disable(b>>>W)});c.wbg.__wbg_disableVertexAttribArray_fb822948cb54eec9=((a,b)=>{d(a).disableVertexAttribArray(b>>>W)});c.wbg.__wbg_drawElements_5cade7fb4236c93b=((a,b,c,e,f)=>{d(a).drawElements(b>>>W,c,e>>>W,f)});c.wbg.__wbg_enable_54d01bacc240df3e=((a,b)=>{d(a).enable(b>>>W)});c.wbg.__wbg_enableVertexAttribArray_c971ef03599058ec=((a,b)=>{d(a).enableVertexAttribArray(b>>>W)});c.wbg.__wbg_getAttribLocation_3ec473fee682bd2a=((a,b,c,e)=>{const f=d(a).getAttribLocation(d(b),l(c,e));return f});c.wbg.__wbg_getError_0a6390188216606e=(a=>{const b=d(a).getError();return b});c.wbg.__wbg_getExtension_5dfa3b5f570d8fe1=function(){return E(((a,b,c)=>{const e=d(a).getExtension(l(b,c));return q(e)?W:h(e)}),arguments)};c.wbg.__wbg_getParameter_798cbb8ff20c7af0=function(){return E(((a,b)=>{const c=d(a).getParameter(b>>>W);return h(c)}),arguments)};c.wbg.__wbg_getProgramInfoLog_3ff10ea818ab6ce4=((a,c,e)=>{const f=d(c).getProgramInfoLog(d(e));var g=q(f)?W:p(f,b.__wbindgen_malloc,b.__wbindgen_realloc);var h=m;s()[a/a3+ T]=h;s()[a/a3+ W]=g});c.wbg.__wbg_getProgramParameter_35800b92324ff726=((a,b,c)=>{const e=d(a).getProgramParameter(d(b),c>>>W);return h(e)});c.wbg.__wbg_getShaderInfoLog_3e435d2b50e0ecf0=((a,c,e)=>{const f=d(c).getShaderInfoLog(d(e));var g=q(f)?W:p(f,b.__wbindgen_malloc,b.__wbindgen_realloc);var h=m;s()[a/a3+ T]=h;s()[a/a3+ W]=g});c.wbg.__wbg_getShaderParameter_a9315ba73ab18731=((a,b,c)=>{const e=d(a).getShaderParameter(d(b),c>>>W);return h(e)});c.wbg.__wbg_getSupportedExtensions_eebc361c389e2ab3=(a=>{const b=d(a).getSupportedExtensions();return q(b)?W:h(b)});c.wbg.__wbg_getUniformLocation_f161344f25983444=((a,b,c,e)=>{const f=d(a).getUniformLocation(d(b),l(c,e));return q(f)?W:h(f)});c.wbg.__wbg_linkProgram_caeab1eb0c0246be=((a,b)=>{d(a).linkProgram(d(b))});c.wbg.__wbg_pixelStorei_ac98844c2d6d1937=((a,b,c)=>{d(a).pixelStorei(b>>>W,c)});c.wbg.__wbg_scissor_7206bcd2a5540aa3=((a,b,c,e,f)=>{d(a).scissor(b,c,e,f)});c.wbg.__wbg_shaderSource_04af20ecb1962b3b=((a,b,c,e)=>{d(a).shaderSource(d(b),l(c,e))});c.wbg.__wbg_texParameteri_dd08984388e62491=((a,b,c,e)=>{d(a).texParameteri(b>>>W,c>>>W,e)});c.wbg.__wbg_uniform1i_5a5f1f9d5828e6c6=((a,b,c)=>{d(a).uniform1i(d(b),c)});c.wbg.__wbg_uniform2f_d1df633e1cda7ce0=((a,b,c,e)=>{d(a).uniform2f(d(b),c,e)});c.wbg.__wbg_useProgram_229c8fa8394b4c26=((a,b)=>{d(a).useProgram(d(b))});c.wbg.__wbg_vertexAttribPointer_e9c4ff85658b9ad2=((a,b,c,e,f,g,h)=>{d(a).vertexAttribPointer(b>>>W,c,e>>>W,f!==W,g,h)});c.wbg.__wbg_viewport_0ca27d1d6ac8424c=((a,b,c,e,f)=>{d(a).viewport(b,c,e,f)});c.wbg.__wbg_width_164c11c1f72aa632=(a=>{const b=d(a).width;return b});c.wbg.__wbg_height_ac60120008caa50b=(a=>{const b=d(a).height;return b});c.wbg.__wbg_instanceof_HtmlAnchorElement_afbec6867d883d45=(a=>{let b;try{b=d(a) instanceof HTMLAnchorElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_setdownload_27aa66329922270e=((a,b,c)=>{d(a).download=l(b,c)});c.wbg.__wbg_sethref_e4f758ffb6abc79c=((a,b,c)=>{d(a).href=l(b,c)});c.wbg.__wbg_instanceof_HtmlButtonElement_2e288583ed44f37c=(a=>{let b;try{b=d(a) instanceof HTMLButtonElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_touches_95bba57784560e75=(a=>{const b=d(a).touches;return h(b)});c.wbg.__wbg_changedTouches_9667f17739458e92=(a=>{const b=d(a).changedTouches;return h(b)});c.wbg.__wbg_size_be41bf26ab113208=(a=>{const b=d(a).size;return b});c.wbg.__wbg_type_b596e92b4e34956a=((a,c)=>{const e=d(c).type;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbg_newwithu8arraysequenceandoptions_d0ee7f095b8bf8eb=function(){return E(((a,b)=>{const c=new Blob(d(a),d(b));return h(c)}),arguments)};c.wbg.__wbg_arrayBuffer_fb7b7f60c42268ca=(a=>{const b=d(a).arrayBuffer();return h(b)});c.wbg.__wbg_type_b820b38587c684cd=((a,c)=>{const e=d(c).type;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbg_length_c610906ecf0a8f99=(a=>{const b=d(a).length;return b});c.wbg.__wbg_get_428f35579210a950=((a,b)=>{const c=d(a)[b>>>W];return q(c)?W:h(c)});c.wbg.__wbg_length_5f3530f0f1af8661=(a=>{const b=d(a).length;return b});c.wbg.__wbg_get_f2ba4265e9e1e12b=((a,b)=>{const c=d(a)[b>>>W];return q(c)?W:h(c)});c.wbg.__wbg_now_65ff8ec2b863300c=(a=>{const b=d(a).now();return b});c.wbg.__wbg_cancel_5bf5e5903af53580=(a=>{d(a).cancel()});c.wbg.__wbg_speak_db05924dff6a2674=((a,b)=>{d(a).speak(d(b))});c.wbg.__wbg_createObjectURL_0a02ce8c75afc373=function(){return E(((a,c)=>{const e=URL.createObjectURL(d(c));const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_items_5ca9bad002b2890c=(a=>{const b=d(a).items;return h(b)});c.wbg.__wbg_files_0aa81397021d2faa=(a=>{const b=d(a).files;return q(b)?W:h(b)});c.wbg.__wbg_result_e515a9bf8390ef47=function(){return E((a=>{const b=d(a).result;return h(b)}),arguments)};c.wbg.__wbg_setonload_427d4e894b2d55b4=((a,b)=>{d(a).onload=d(b)});c.wbg.__wbg_new_b07bacad2380fbb9=function(){return E((()=>{const a=new FileReader();return h(a)}),arguments)};c.wbg.__wbg_readAsArrayBuffer_84f69d5bca819f0a=function(){return E(((a,b)=>{d(a).readAsArrayBuffer(d(b))}),arguments)};c.wbg.__wbg_getItem_f7e7a061bbdabefe=function(){return E(((a,c,e,f)=>{const g=d(c).getItem(l(e,f));var h=q(g)?W:p(g,b.__wbindgen_malloc,b.__wbindgen_realloc);var i=m;s()[a/a3+ T]=i;s()[a/a3+ W]=h}),arguments)};c.wbg.__wbg_setItem_2b72ddf192083111=function(){return E(((a,b,c,e,f)=>{d(a).setItem(l(b,c),l(e,f))}),arguments)};c.wbg.__wbg_copyToChannel_47042ca9c7b9618d=function(){return E(((a,b,c,e)=>{d(a).copyToChannel(H(b,c),e)}),arguments)};c.wbg.__wbg_setbuffer_f16a95796c5a7380=((a,b)=>{d(a).buffer=d(b)});c.wbg.__wbg_setonended_d2cab878358a6af4=((a,b)=>{d(a).onended=d(b)});c.wbg.__wbg_start_88dbb78b1c762033=function(){return E(((a,b)=>{d(a).start(b)}),arguments)};c.wbg.__wbg_preventDefault_d2c7416966cb0632=(a=>{d(a).preventDefault()});c.wbg.__wbg_stopPropagation_786ab850031995e5=(a=>{d(a).stopPropagation()});c.wbg.__wbg_matches_2a7b0d97653c323f=(a=>{const b=d(a).matches;return b});c.wbg.__wbg_clientX_4d37584813a1790a=(a=>{const b=d(a).clientX;return b});c.wbg.__wbg_clientY_ea543e0b8dc1490d=(a=>{const b=d(a).clientY;return b});c.wbg.__wbg_ctrlKey_0d75e0e9028bd999=(a=>{const b=d(a).ctrlKey;return b});c.wbg.__wbg_shiftKey_12353f0e19b21d6a=(a=>{const b=d(a).shiftKey;return b});c.wbg.__wbg_metaKey_4e3f6e986f2802b1=(a=>{const b=d(a).metaKey;return b});c.wbg.__wbg_button_8a97c55db17c7314=(a=>{const b=d(a).button;return b});c.wbg.__wbg_identifier_87f10c1b114973b1=(a=>{const b=d(a).identifier;return b});c.wbg.__wbg_pageX_6bdd2e573704efc2=(a=>{const b=d(a).pageX;return b});c.wbg.__wbg_pageY_74fbace64ec902b5=(a=>{const b=d(a).pageY;return b});c.wbg.__wbg_force_a248870a06b19f84=(a=>{const b=d(a).force;return b});c.wbg.__wbg_data_03b517344e75fca6=((a,c)=>{const e=d(c).data;var f=q(e)?W:p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);var g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbg_instanceof_HtmlCanvasElement_a6076360513b6876=(a=>{let b;try{b=d(a) instanceof HTMLCanvasElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_width_9d9d26b087c6ad54=(a=>{const b=d(a).width;return b});c.wbg.__wbg_setwidth_05075fb6b4cc720e=((a,b)=>{d(a).width=b>>>W});c.wbg.__wbg_height_770da314320603d8=(a=>{const b=d(a).height;return b});c.wbg.__wbg_setheight_7e0e88a922100d8c=((a,b)=>{d(a).height=b>>>W});c.wbg.__wbg_getContext_39cdfeffd658feb7=function(){return E(((a,b,c)=>{const e=d(a).getContext(l(b,c));return q(e)?W:h(e)}),arguments)};c.wbg.__wbg_keyCode_6acbcd0e4e062504=(a=>{const b=d(a).keyCode;return b});c.wbg.__wbg_altKey_c3c61dc3af936846=(a=>{const b=d(a).altKey;return b});c.wbg.__wbg_ctrlKey_e7fc1575581bc431=(a=>{const b=d(a).ctrlKey;return b});c.wbg.__wbg_shiftKey_0a061aeba25dbd63=(a=>{const b=d(a).shiftKey;return b});c.wbg.__wbg_metaKey_b879a69fa9f3f7af=(a=>{const b=d(a).metaKey;return b});c.wbg.__wbg_isComposing_aa6fdae3e5d50cdb=(a=>{const b=d(a).isComposing;return b});c.wbg.__wbg_key_9a2550983fbad1d0=((a,c)=>{const e=d(c).key;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbg_destination_62d2e29a54544ec0=(a=>{const b=d(a).destination;return h(b)});c.wbg.__wbg_currentTime_6b9141913a965d2f=(a=>{const b=d(a).currentTime;return b});c.wbg.__wbg_newwithcontextoptions_14f6b0728f2e5974=function(){return E((b=>{const c=new a(d(b));return h(c)}),arguments)};c.wbg.__wbg_close_41fb3d66e34246dc=function(){return E((a=>{const b=d(a).close();return h(b)}),arguments)};c.wbg.__wbg_createBuffer_a4cdfb0b3c256e3e=function(){return E(((a,b,c,e)=>{const f=d(a).createBuffer(b>>>W,c>>>W,e);return h(f)}),arguments)};c.wbg.__wbg_createBufferSource_0d20dc119e4ded11=function(){return E((a=>{const b=d(a).createBufferSource();return h(b)}),arguments)};c.wbg.__wbg_resume_32fc64eaa464289a=function(){return E((a=>{const b=d(a).resume();return h(b)}),arguments)};c.wbg.__wbg_matches_68b7ad47c1091323=(a=>{const b=d(a).matches;return b});c.wbg.__wbg_setvolume_8f37b8f0c12da738=((a,b)=>{d(a).volume=b});c.wbg.__wbg_setrate_bcbb8a02a544ffaa=((a,b)=>{d(a).rate=b});c.wbg.__wbg_setpitch_0a009b6413179163=((a,b)=>{d(a).pitch=b});c.wbg.__wbg_newwithtext_4c52c77cf50640f9=function(){return E(((a,b)=>{const c=new SpeechSynthesisUtterance(l(a,b));return h(c)}),arguments)};c.wbg.__wbg_maxChannelCount_f7897fa7dc85d572=(a=>{const b=d(a).maxChannelCount;return b});c.wbg.__wbg_top_d39cc7e325e1f687=(a=>{const b=d(a).top;return b});c.wbg.__wbg_left_064e5e69a7d7c925=(a=>{const b=d(a).left;return b});c.wbg.__wbg_instanceof_HtmlInputElement_d53941bc0aaa6ae9=(a=>{let b;try{b=d(a) instanceof HTMLInputElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_setaccept_daff69ab32942193=((a,b,c)=>{d(a).accept=l(b,c)});c.wbg.__wbg_setautofocus_4389a83ce5fce4de=((a,b)=>{d(a).autofocus=b!==W});c.wbg.__wbg_files_0fe2affb0f600765=(a=>{const b=d(a).files;return q(b)?W:h(b)});c.wbg.__wbg_setmultiple_ed858720a0451899=((a,b)=>{d(a).multiple=b!==W});c.wbg.__wbg_setsize_16b7c38ee657b247=((a,b)=>{d(a).size=b>>>W});c.wbg.__wbg_settype_c544f49a0425f209=((a,b,c)=>{d(a).type=l(b,c)});c.wbg.__wbg_value_c93cb4b4d352228e=((a,c)=>{const e=d(c).value;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbg_setvalue_9bd3f93b3864ddbf=((a,b,c)=>{d(a).value=l(b,c)});c.wbg.__wbg_setchannelCount_ddf571b2ad2e8eef=((a,b)=>{d(a).channelCount=b>>>W});c.wbg.__wbg_connect_65474f2479b77506=function(){return E(((a,b)=>{const c=d(a).connect(d(b));return h(c)}),arguments)};c.wbg.__wbg_dataTransfer_114daff2829a408c=(a=>{const b=d(a).dataTransfer;return q(b)?W:h(b)});c.wbg.__wbg_bindVertexArrayOES_e95cf32f50e47240=((a,b)=>{d(a).bindVertexArrayOES(d(b))});c.wbg.__wbg_createVertexArrayOES_96ccfea00081dcf3=(a=>{const b=d(a).createVertexArrayOES();return q(b)?W:h(b)});c.wbg.__wbg_setProperty_a763529f4ef8ac76=function(){return E(((a,b,c,e,f)=>{d(a).setProperty(l(b,c),l(e,f))}),arguments)};c.wbg.__wbg_addEventListener_2f891d22985fd3c8=function(){return E(((a,b,c,e)=>{d(a).addEventListener(l(b,c),d(e))}),arguments)};c.wbg.__wbg_removeEventListener_07715e6f464823fc=function(){return E(((a,b,c,e)=>{d(a).removeEventListener(l(b,c),d(e))}),arguments)};c.wbg.__wbg_name_6c808ccae465f9e1=((a,c)=>{const e=d(c).name;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbg_lastModified_5b92d1f516d58609=(a=>{const b=d(a).lastModified;return b});c.wbg.__wbg_userAgent_4106f80b9924b065=function(){return E(((a,c)=>{const e=d(c).userAgent;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_deltaX_de18e6f358ab88cf=(a=>{const b=d(a).deltaX;return b});c.wbg.__wbg_deltaY_50a026b7421f883d=(a=>{const b=d(a).deltaY;return b});c.wbg.__wbg_deltaMode_b8290e36698673d0=(a=>{const b=d(a).deltaMode;return b});c.wbg.__wbg_href_1ab7f03b8a745310=function(){return E(((a,c)=>{const e=d(c).href;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_origin_a66ff95a994d7e40=function(){return E(((a,c)=>{const e=d(c).origin;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_protocol_14f54c8356e78bea=function(){return E(((a,c)=>{const e=d(c).protocol;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_host_0c29a6ff8ae1ff8c=function(){return E(((a,c)=>{const e=d(c).host;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_hostname_26a3a1944f8c045c=function(){return E(((a,c)=>{const e=d(c).hostname;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_port_a56212936bd85dac=function(){return E(((a,c)=>{const e=d(c).port;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_search_eb68df82d26f8761=function(){return E(((a,c)=>{const e=d(c).search;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_hash_9bd16c0f666cdf27=function(){return E(((a,c)=>{const e=d(c).hash;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f}),arguments)};c.wbg.__wbg_parentElement_86a7612dde875ba9=(a=>{const b=d(a).parentElement;return q(b)?W:h(b)});c.wbg.__wbg_appendChild_bd383ec5356c0bdb=function(){return E(((a,b)=>{const c=d(a).appendChild(d(b));return h(c)}),arguments)};c.wbg.__wbg_length_568297424aea6468=(a=>{const b=d(a).length;return b});c.wbg.__wbg_item_b77b7c1ae96bba19=((a,b)=>{const c=d(a).item(b>>>W);return q(c)?W:h(c)});c.wbg.__wbg_get_2f7d53cc08af8d1a=((a,b)=>{const c=d(a)[b>>>W];return q(c)?W:h(c)});c.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const c=d(a)[b>>>W];return h(c)});c.wbg.__wbg_length_d99b680fd68bf71b=(a=>{const b=d(a).length;return b});c.wbg.__wbg_new_34c624469fb1d4fd=(()=>{const a=new R();return h(a)});c.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{const c=new Function(l(a,b));return h(c)});c.wbg.__wbg_call_a79f1973a4f07d5e=function(){return E(((a,b)=>{const c=d(a).call(d(b));return h(c)}),arguments)};c.wbg.__wbg_new_87d841e70661f6e9=(()=>{const a=new Object();return h(a)});c.wbg.__wbg_self_086b5302bcafb962=function(){return E((()=>{const a=self.self;return h(a)}),arguments)};c.wbg.__wbg_window_132fa5d7546f1de5=function(){return E((()=>{const a=window.window;return h(a)}),arguments)};c.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return E((()=>{const a=globalThis.globalThis;return h(a)}),arguments)};c.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return E((()=>{const a=global.global;return h(a)}),arguments)};c.wbg.__wbindgen_is_undefined=(a=>{const b=d(a)===Q;return b});c.wbg.__wbg_eval_6c93b88a4b3be0eb=function(){return E(((a,b)=>{const c=eval(l(a,b));return h(c)}),arguments)};c.wbg.__wbg_push_906164999551d793=((a,b)=>{const c=d(a).push(d(b));return c});c.wbg.__wbg_call_f6a2bc58c19c53c6=function(){return E(((a,b,c)=>{const e=d(a).call(d(b),d(c));return h(e)}),arguments)};c.wbg.__wbg_new_1d93771b84541aa5=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=W;try{return I(d,c.b,a,b)}finally{c.a=d}};const e=new a5(d);return h(e)}finally{c.a=c.b=W}});c.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=a5.resolve(d(a));return h(b)});c.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const c=d(a).then(d(b));return h(c)});c.wbg.__wbg_then_5842e4e97f7beace=((a,b,c)=>{const e=d(a).then(d(b),d(c));return h(e)});c.wbg.__wbg_buffer_5d1b598a01b41a42=(a=>{const b=d(a).buffer;return h(b)});c.wbg.__wbg_newwithbyteoffsetandlength_54c7b98977affdec=((a,b,c)=>{const e=new Int8Array(d(a),b>>>W,c>>>W);return h(e)});c.wbg.__wbg_newwithbyteoffsetandlength_16ba6d10861ea013=((a,b,c)=>{const e=new Int16Array(d(a),b>>>W,c>>>W);return h(e)});c.wbg.__wbg_newwithbyteoffsetandlength_821c7736f0d22b04=((a,b,c)=>{const e=new Z(d(a),b>>>W,c>>>W);return h(e)});c.wbg.__wbg_newwithbyteoffsetandlength_d695c7957788f922=((a,b,c)=>{const e=new X(d(a),b>>>W,c>>>W);return h(e)});c.wbg.__wbg_new_ace717933ad7117f=(a=>{const b=new X(d(a));return h(b)});c.wbg.__wbg_set_74906aa30864df5a=((a,b,c)=>{d(a).set(d(b),c>>>W)});c.wbg.__wbg_length_f0764416ba5bb237=(a=>{const b=d(a).length;return b});c.wbg.__wbg_newwithbyteoffsetandlength_2412e38a0385bbe2=((a,b,c)=>{const e=new Uint16Array(d(a),b>>>W,c>>>W);return h(e)});c.wbg.__wbg_newwithbyteoffsetandlength_aeed38cac7555df7=((a,b,c)=>{const e=new Uint32Array(d(a),b>>>W,c>>>W);return h(e)});c.wbg.__wbg_newwithbyteoffsetandlength_21163b4dfcbc673c=((a,b,c)=>{const e=new a4(d(a),b>>>W,c>>>W);return h(e)});c.wbg.__wbg_newwithlength_728575f3bba9959b=(a=>{const b=new X(a>>>W);return h(b)});c.wbg.__wbg_buffer_3da2aecfd9814cd8=(a=>{const b=d(a).buffer;return h(b)});c.wbg.__wbg_subarray_7f7a652672800851=((a,b,c)=>{const e=d(a).subarray(b>>>W,c>>>W);return h(e)});c.wbg.__wbg_set_37a50e901587b477=function(){return E(((a,b,c)=>{const e=Reflect.set(d(a),d(b),d(c));return e}),arguments)};c.wbg.__wbindgen_debug_string=((a,c)=>{const e=v(d(c));const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ T]=g;s()[a/a3+ W]=f});c.wbg.__wbindgen_throw=((a,b)=>{throw new V(l(a,b))});c.wbg.__wbindgen_memory=(()=>{const a=b.memory;return h(a)});c.wbg.__wbindgen_closure_wrapper358=((a,b,c)=>{const d=w(a,b,5,x);return h(d)});c.wbg.__wbindgen_closure_wrapper703=((a,b,c)=>{const d=w(a,b,187,y);return h(d)});c.wbg.__wbindgen_closure_wrapper2380=((a,b,c)=>{const d=w(a,b,a6,z);return h(d)});c.wbg.__wbindgen_closure_wrapper2382=((a,b,c)=>{const d=w(a,b,a6,A);return h(d)});c.wbg.__wbindgen_closure_wrapper2384=((a,b,c)=>{const d=w(a,b,a6,B);return h(d)});c.wbg.__wbindgen_closure_wrapper2505=((a,b,c)=>{const d=w(a,b,1110,C);return h(d)});c.wbg.__wbindgen_closure_wrapper2684=((a,b,c)=>{const d=w(a,b,1160,D);return h(d)});return c});var p=((a,b,c)=>{if(c===Q){const c=n.encode(a);const d=b(c.length,T)>>>W;k().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,T)>>>W;const f=k();let g=W;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==W){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,T)>>>W;const b=k().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var k=(()=>{if(j===S||j.byteLength===W){j=new X(b.memory.buffer)};return j});var J=(async(a,b)=>{if(typeof Response===Y&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===Y){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var x=((a,c)=>{b.wasm_bindgen__convert__closures__invoke0_mut__h6f8eccd97d757a90(a,c)});var h=(a=>{if(e===c.length)c.push(c.length+ T);const b=e;e=c[b];c[b]=a;return b});var g=(a=>{const b=d(a);f(a);return b});var z=((a,c,d)=>{b.wasm_bindgen__convert__closures__invoke1_mut__h6aa839346e0b633d(a,c,h(d))});var B=((a,c)=>{try{const f=b.__wbindgen_add_to_stack_pointer(-a2);b.wasm_bindgen__convert__closures__invoke0_mut__h18a94f81cdaaf69f(f,a,c);var d=s()[f/a3+ W];var e=s()[f/a3+ T];if(e){throw g(d)}}finally{b.__wbindgen_add_to_stack_pointer(a2)}});var s=(()=>{if(r===S||r.byteLength===W){r=new Z(b.memory.buffer)};return r});var O=(async(a)=>{if(b!==Q)return b;if(typeof a===P){a=new URL(`octarou-883b65f296386a68091354474152a3ae79de91cbd0f33fd072368a406f805a96d8599a8841bd1aa45ba537250e07dbd9_bg.wasm`,import.meta.url)};const c=K();if(typeof a===a0||typeof Request===Y&&a instanceof Request||typeof URL===Y&&a instanceof URL){a=fetch(a)};L(c);const {instance:d,module:e}=await J(await a,c);return M(d,e)});var A=((a,c)=>{b.wasm_bindgen__convert__closures__invoke0_mut__ha87f384b0b72d436(a,c)});var N=(a=>{if(b!==Q)return b;const c=K();L(c);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const d=new WebAssembly.Instance(a,c);return M(d,a)});var M=((a,c)=>{b=a.exports;O.__wbindgen_wasm_module=c;F=S;t=S;r=S;j=S;b.__wbindgen_start();return b});var f=(a=>{if(a<132)return;c[a]=e;e=a});var y=((a,c)=>{b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h73d1840acd17e414(a,c)});var D=((a,c)=>{b.wasm_bindgen__convert__closures__invoke0_mut__h1e1e955b2ae34f1a(a,c)});var w=((a,c,d,e)=>{const f={a:a,b:c,cnt:T,dtor:d};const g=(...a)=>{f.cnt++;const c=f.a;f.a=W;try{return e(c,f.b,...a)}finally{if(--f.cnt===W){b.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var l=((a,b)=>{a=a>>>W;return i.decode(k().subarray(a,a+ b))});var I=((a,c,d,e)=>{b.wasm_bindgen__convert__closures__invoke2_mut__h7807998a1b60fd88(a,c,h(d),h(e))});const a=typeof AudioContext!==P?AudioContext:(typeof webkitAudioContext!==P?webkitAudioContext:Q);let b;const c=new R(128).fill(Q);c.push(Q,S,!0,!1);let e=c.length;const i=typeof TextDecoder!==P?new TextDecoder(U,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw V(`TextDecoder not available`)}};if(typeof TextDecoder!==P){i.decode()};let j=S;let m=W;const n=typeof TextEncoder!==P?new TextEncoder(U):{encode:()=>{throw V(`TextEncoder not available`)}};const o=typeof n.encodeInto===Y?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let r=S;let t=S;let F=S;export default O;export{N as initSync}