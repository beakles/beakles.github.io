function ko(d,C){for(var re=0;re<C.length;re++){const U=C[re];if(typeof U!="string"&&!Array.isArray(U)){for(const N in U)if(N!=="default"&&!(N in d)){const I=Object.getOwnPropertyDescriptor(U,N);I&&Object.defineProperty(d,N,I.get?I:{enumerable:!0,get:()=>U[N]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))U(N);new MutationObserver(N=>{for(const I of N)if(I.type==="childList")for(const ne of I.addedNodes)ne.tagName==="LINK"&&ne.rel==="modulepreload"&&U(ne)}).observe(document,{childList:!0,subtree:!0});function re(N){const I={};return N.integrity&&(I.integrity=N.integrity),N.referrerPolicy&&(I.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?I.credentials="include":N.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function U(N){if(N.ep)return;N.ep=!0;const I=re(N);fetch(N.href,I)}})();var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Do(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var yo={exports:{}};(function(d,C){var re=Object.defineProperty,U=(I,ne,Se)=>ne in I?re(I,ne,{enumerable:!0,configurable:!0,writable:!0,value:Se}):I[ne]=Se,N=(I,ne,Se)=>(U(I,typeof ne!="symbol"?ne+"":ne,Se),Se);(function(I,ne){ne(C)})(Ro,function(I){function ne(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Se={exports:{}},An={Note:"Note",Rest:"Rest",Octave:"Octave",OctaveShift:"OctaveShift",NoteLength:"NoteLength",NoteVelocity:"NoteVelocity",NoteQuantize:"NoteQuantize",Tempo:"Tempo",InfiniteLoop:"InfiniteLoop",LoopBegin:"LoopBegin",LoopExit:"LoopExit",LoopEnd:"LoopEnd"},cr={tempo:120,octave:4,length:4,velocity:100,quantize:75,loopCount:2},dt=function(){function e(t,n){for(var l=0;l<n.length;l++){var s=n[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var mi=function(){function e(t){G(this,e),this.source=t,this.index=0}return dt(e,[{key:"hasNext",value:function(){return this.index<this.source.length}},{key:"peek",value:function(){return this.source.charAt(this.index)||""}},{key:"next",value:function(){return this.source.charAt(this.index++)||""}},{key:"forward",value:function(){for(;this.hasNext()&&this.match(/\s/);)this.index+=1}},{key:"match",value:function(n){return n instanceof RegExp?n.test(this.peek()):this.peek()===n}},{key:"expect",value:function(n){this.match(n)||this.throwUnexpectedToken(),this.index+=1}},{key:"scan",value:function(n){var l=this.source.substr(this.index),s=null;if(n instanceof RegExp){var u=n.exec(l);u&&u.index===0&&(s=u[0])}else l.substr(0,n.length)===n&&(s=n);return s&&(this.index+=s.length),s}},{key:"throwUnexpectedToken",value:function(){var n=this.peek()||"ILLEGAL";throw new SyntaxError("Unexpected token: "+n)}}]),e}(),ur=mi,ht=function(){function e(t,n){for(var l=0;l<n.length;l++){var s=n[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();function fr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var se=An,Cn=ur,Xe={c:0,d:2,e:4,f:5,g:7,a:9,b:11},mt=function(){function e(t){fr(this,e),this.scanner=new Cn(t)}return ht(e,[{key:"parse",value:function(){var n=this,l=[];return this._readUntil(";",function(){l=l.concat(n.advance())}),l}},{key:"advance",value:function(){switch(this.scanner.peek()){case"c":case"d":case"e":case"f":case"g":case"a":case"b":return this.readNote();case"[":return this.readChord();case"r":return this.readRest();case"o":return this.readOctave();case">":return this.readOctaveShift(1);case"<":return this.readOctaveShift(-1);case"l":return this.readNoteLength();case"q":return this.readNoteQuantize();case"v":return this.readNoteVelocity();case"t":return this.readTempo();case"$":return this.readInfiniteLoop();case"/":return this.readLoop()}this.scanner.throwUnexpectedToken()}},{key:"readNote",value:function(){return{type:se.Note,noteNumbers:[this._readNoteNumber(0)],noteLength:this._readLength()}}},{key:"readChord",value:function(){var n=this;this.scanner.expect("[");var l=[],s=0;return this._readUntil("]",function(){switch(n.scanner.peek()){case"c":case"d":case"e":case"f":case"g":case"a":case"b":l.push(n._readNoteNumber(s));break;case">":n.scanner.next(),s+=12;break;case"<":n.scanner.next(),s-=12;break;default:n.scanner.throwUnexpectedToken()}}),this.scanner.expect("]"),{type:se.Note,noteNumbers:l,noteLength:this._readLength()}}},{key:"readRest",value:function(){return this.scanner.expect("r"),{type:se.Rest,noteLength:this._readLength()}}},{key:"readOctave",value:function(){return this.scanner.expect("o"),{type:se.Octave,value:this._readArgument(/\d+/)}}},{key:"readOctaveShift",value:function(n){return this.scanner.expect(/<|>/),{type:se.OctaveShift,direction:n|0,value:this._readArgument(/\d+/)}}},{key:"readNoteLength",value:function(){return this.scanner.expect("l"),{type:se.NoteLength,noteLength:this._readLength()}}},{key:"readNoteQuantize",value:function(){return this.scanner.expect("q"),{type:se.NoteQuantize,value:this._readArgument(/\d+/)}}},{key:"readNoteVelocity",value:function(){return this.scanner.expect("v"),{type:se.NoteVelocity,value:this._readArgument(/\d+/)}}},{key:"readTempo",value:function(){return this.scanner.expect("t"),{type:se.Tempo,value:this._readArgument(/\d+(\.\d+)?/)}}},{key:"readInfiniteLoop",value:function(){return this.scanner.expect("$"),{type:se.InfiniteLoop}}},{key:"readLoop",value:function(){var n=this;this.scanner.expect("/"),this.scanner.expect(":");var l={type:se.LoopBegin},s={type:se.LoopEnd},u=[];return u=u.concat(l),this._readUntil(/[|:]/,function(){u=u.concat(n.advance())}),u=u.concat(this._readLoopExit()),this.scanner.expect(":"),this.scanner.expect("/"),l.value=this._readArgument(/\d+/)||null,u=u.concat(s),u}},{key:"_readUntil",value:function(n,l){for(;this.scanner.hasNext()&&(this.scanner.forward(),!(!this.scanner.hasNext()||this.scanner.match(n)));)l()}},{key:"_readArgument",value:function(n){var l=this.scanner.scan(n);return l!==null?+l:null}},{key:"_readNoteNumber",value:function(n){var l=Xe[this.scanner.next()];return l+this._readAccidental()+n}},{key:"_readAccidental",value:function(){return this.scanner.match("+")?1*this.scanner.scan(/\++/).length:this.scanner.match("-")?-1*this.scanner.scan(/\-+/).length:0}},{key:"_readDot",value:function(){for(var n=(this.scanner.scan(/\.+/)||"").length,l=new Array(n),s=0;s<n;s++)l[s]=0;return l}},{key:"_readLength",value:function(){var n=[];n=n.concat(this._readArgument(/\d+/)),n=n.concat(this._readDot());var l=this._readTie();return l&&(n=n.concat(l)),n}},{key:"_readTie",value:function(){return this.scanner.forward(),this.scanner.match("^")?(this.scanner.next(),this._readLength()):null}},{key:"_readLoopExit",value:function(){var n=this,l=[];if(this.scanner.match("|")){this.scanner.next();var s={type:se.LoopExit};l=l.concat(s),this._readUntil(":",function(){l=l.concat(n.advance())})}return l}}]),e}(),dr=mt,hr=function(){function e(t,n){for(var l=0;l<n.length;l++){var s=n[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();function ge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var z=An,V=cr,B=dr,W=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pi=function(){function e(t){ge(this,e),this.source=t,this._commands=new B(t).parse(),this._commandIndex=0,this._processedTime=0,this._iterator=null,this._octave=V.octave,this._noteLength=[V.length],this._velocity=V.velocity,this._quantize=V.quantize,this._tempo=V.tempo,this._infiniteLoopIndex=-1,this._loopStack=[],this._done=!1}return hr(e,[{key:"hasNext",value:function(){return this._commandIndex<this._commands.length}},{key:"next",value:function(){if(this._done)return{done:!0,value:null};if(this._iterator){var n=this._iterator.next();if(!n.done)return n}var l=this._forward(!0);if(Ye(l))this._iterator=this[l.type](l);else return this._done=!0,{done:!1,value:{type:"end",time:this._processedTime}};return this.next()}},{key:W,value:function(){return this}},{key:"_forward",value:function(n){for(;this.hasNext()&&!Ye(this._commands[this._commandIndex]);){var l=this._commands[this._commandIndex++];this[l.type](l)}return n&&!this.hasNext()&&this._infiniteLoopIndex!==-1?(this._commandIndex=this._infiniteLoopIndex,this._forward(!1)):this._commands[this._commandIndex++]||{}}},{key:"_calcDuration",value:function(n){var l=this;n[0]===null&&(n=this._noteLength.concat(n.slice(1)));var s=null,u=0;return n=n.map(function(m){switch(m){case null:m=s;break;case 0:m=u*=2;break;default:s=u=m;break}var y=m!==null?m:V.length;return 60/l._tempo*(4/y)}),n.reduce(function(m,y){return m+y},0)}},{key:"_calcNoteNumber",value:function(n){return n+this._octave*12+12}},{key:z.Note,value:function(n){var l=this,s="note",u=this._processedTime,m=this._calcDuration(n.noteLength),y=n.noteNumbers.map(function(E){return l._calcNoteNumber(E)}),P=this._quantize,S=this._velocity;return this._processedTime=this._processedTime+m,$(y.map(function(E){return{type:s,time:u,duration:m,noteNumber:E,velocity:S,quantize:P}}))}},{key:z.Rest,value:function(n){var l=this._calcDuration(n.noteLength);this._processedTime=this._processedTime+l}},{key:z.Octave,value:function(n){this._octave=n.value!==null?n.value:V.octave}},{key:z.OctaveShift,value:function(n){var l=n.value!==null?n.value:1;this._octave+=l*n.direction}},{key:z.NoteLength,value:function(n){var l=n.noteLength.map(function(s){return s!==null?s:V.length});this._noteLength=l}},{key:z.NoteVelocity,value:function(n){this._velocity=n.value!==null?n.value:V.velocity}},{key:z.NoteQuantize,value:function(n){this._quantize=n.value!==null?n.value:V.quantize}},{key:z.Tempo,value:function(n){this._tempo=n.value!==null?n.value:V.tempo}},{key:z.InfiniteLoop,value:function(){this._infiniteLoopIndex=this._commandIndex}},{key:z.LoopBegin,value:function(n){var l=n.value!==null?n.value:V.loopCount,s=this._commandIndex,u=-1;this._loopStack.push({loopCount:l,loopTopIndex:s,loopOutIndex:u})}},{key:z.LoopExit,value:function(){var n=this._loopStack[this._loopStack.length-1],l=this._commandIndex;n.loopCount<=1&&n.loopOutIndex!==-1&&(l=n.loopOutIndex),this._commandIndex=l}},{key:z.LoopEnd,value:function(){var n=this._loopStack[this._loopStack.length-1],l=this._commandIndex;n.loopOutIndex===-1&&(n.loopOutIndex=this._commandIndex),n.loopCount-=1,0<n.loopCount?l=n.loopTopIndex:this._loopStack.pop(),this._commandIndex=l}}]),e}();function $(e){var t=0;return{next:function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}}function Ye(e){return e.type===z.Note||e.type===z.Rest}var pt=pi;(function(e){e.exports=pt})(Se);const Ht=ne(Se.exports);var J={};(function(e){var t=+Math.PI*2,n=16,l=1,s=Math.sin,u=Math.pow,m=Math.abs,y=1e-6,P=window.AudioContext||window.webkitAudioContext;e.SampleRate=0,e.Sec=0,e.SetSampleRate=function(o){e.SampleRate=o|0,e.Sec=o|0},e.SetSampleRate(Eo()),e.Live=function(){var o={};return o._generate=function(f){var g=new _(f,e.DefaultModules),b=di(g.getSamplesLeft());return g.generate(b),b},o},e.Module={},e.G={};var S=e.stage={PhaseSpeed:0,PhaseSpeedMod:10,Generator:20,SampleMod:30,Volume:40};function E(o,f){return o.stage-f.stage}e.InitDefaultParams=R;function R(o,f){for(var g=0;g<f.length;g+=1){var b=f[g],w=o[b.name]||{};nr(b.params,function(A,x){typeof w[x]>"u"&&(w[x]=A.D)}),o[b.name]=w}}e.Processor=_;function _(o,f){o=o||{},f=f||e.DefaultModules,typeof o=="function"?o=o():o=JSON.parse(JSON.stringify(o)),this.finished=!1,this.state={SampleRate:o.SampleRate||e.SampleRate},f=f.slice(),f.sort(E),this.modules=f,R(o,f);for(var g=0;g<this.modules.length;g+=1){var b=this.modules[g];this.modules[g].setup(this.state,o[b.name])}}_.prototype={generate:function(o){for(var f=0;f<o.length;f+=1)o[f]=0;if(!this.finished){for(var g=this.state,b=o.length|0,f=0;f<this.modules.length;f+=1){var w=this.modules[f],A=w.process(g,o.subarray(0,b))|0;b=Math.min(b,A)}b<o.length&&(this.finished=!0);for(var f=b;f<o.length;f++)o[f]=0}},getSamplesLeft:function(){for(var o=0,f=0;f<this.state.envelopes.length;f+=1)o+=this.state.envelopes[f].N;return o===0&&(o=3*this.state.SampleRate),o}},e.Module.Frequency={name:"Frequency",params:{Start:{L:30,H:1800,D:440},Min:{L:30,H:1800,D:30},Max:{L:30,H:1800,D:1800},Slide:{L:-1,H:1,D:0},DeltaSlide:{L:-1,H:1,D:0},RepeatSpeed:{L:0,H:3,D:0},ChangeAmount:{L:-12,H:12,D:0},ChangeSpeed:{L:0,H:1,D:0}},stage:S.PhaseSpeed,setup:function(o,f){var g=o.SampleRate;o.phaseParams=f,o.phaseSpeed=f.Start*t/g,o.phaseSpeedMax=f.Max*t/g,o.phaseSpeedMin=f.Min*t/g,o.phaseSpeedMin=Math.min(o.phaseSpeedMin,o.phaseSpeed),o.phaseSpeedMax=Math.max(o.phaseSpeedMax,o.phaseSpeed),o.phaseSlide=1+u(f.Slide,3)*64/g,o.phaseDeltaSlide=u(f.DeltaSlide,3)/(g*1e3),o.repeatTime=0,o.repeatLimit=1/0,f.RepeatSpeed>0&&(o.repeatLimit=f.RepeatSpeed*g),o.arpeggiatorTime=0,o.arpeggiatorLimit=f.ChangeSpeed*g,f.ChangeAmount==0&&(o.arpeggiatorLimit=1/0),o.arpeggiatorMod=1+f.ChangeAmount/12},process:function(o,f){for(var g=+o.phaseSpeed,b=+o.phaseSpeedMin,w=+o.phaseSpeedMax,A=+o.phaseSlide,x=+o.phaseDeltaSlide,H=o.repeatTime,T=o.repeatLimit,Z=o.arpeggiatorTime,ee=o.arpeggiatorLimit,pe=o.arpeggiatorMod,oe=0;oe<f.length;oe++){if(A+=x,g*=A,g=g<b?b:g>w?w:g,H>T)return this.setup(o,o.phaseParams),oe+this.process(o,f.subarray(oe))-1;H++,Z>ee&&(g*=pe,Z=0,ee=1/0),Z++,f[oe]+=g}return o.repeatTime=H,o.arpeggiatorTime=Z,o.arpeggiatorLimit=ee,o.phaseSpeed=g,o.phaseSlide=A,f.length}},e.Module.Vibrato={name:"Vibrato",params:{Depth:{L:0,H:1,D:0},DepthSlide:{L:-1,H:1,D:0},Frequency:{L:.01,H:48,D:0},FrequencySlide:{L:-1,H:1,D:0}},stage:S.PhaseSpeedMod,setup:function(o,f){var g=o.SampleRate;o.vibratoPhase=0,o.vibratoDepth=f.Depth,o.vibratoPhaseSpeed=f.Frequency*t/g,o.vibratoPhaseSpeedSlide=1+u(f.FrequencySlide,3)*3/g,o.vibratoDepthSlide=f.DepthSlide/g},process:function(o,f){var g=+o.vibratoPhase,b=+o.vibratoDepth,w=+o.vibratoPhaseSpeed,A=+o.vibratoPhaseSpeedSlide,x=+o.vibratoDepthSlide;if(b==0&&x<=0)return f.length;for(var H=0;H<f.length;H++)g+=w,g>t&&(g-=t),f[H]+=f[H]*s(g)*b,w*=A,b+=x,b=Io(b);return o.vibratoPhase=g,o.vibratoDepth=b,o.vibratoPhaseSpeed=w,f.length}},e.Module.Generator={name:"Generator",params:{Func:{C:e.G,D:"square"},A:{L:0,H:1,D:0},B:{L:0,H:1,D:0},ASlide:{L:-1,H:1,D:0},BSlide:{L:-1,H:1,D:0}},stage:S.Generator,setup:function(o,f){o.generatorPhase=0,typeof f.Func=="string"?o.generator=e.G[f.Func]:o.generator=f.Func,typeof o.generator=="object"&&(o.generator=o.generator.create()),tr(typeof o.generator=="function","generator must be a function"),o.generatorA=f.A,o.generatorASlide=f.ASlide,o.generatorB=f.B,o.generatorBSlide=f.BSlide},process:function(o,f){return o.generator(o,f)}};var D=65536;e.Module.Guitar={name:"Guitar",params:{A:{L:0,H:1,D:1},B:{L:0,H:1,D:1},C:{L:0,H:1,D:1}},stage:S.Generator,setup:function(o,f){o.guitarA=f.A,o.guitarB=f.B,o.guitarC=f.C,o.guitarBuffer=di(D),o.guitarHead=0;for(var g=o.guitarBuffer,b=0;b<g.length;b++)g[b]=bn()*2-1},process:function(o,f){for(var g=D,b=g-1,w=+o.guitarA,A=+o.guitarB,x=+o.guitarC,H=w+A+x,T=o.guitarHead,Z=o.guitarBuffer,ee=0;ee<f.length;ee++){var pe=t/f[ee]|0;pe=pe>g?g:pe;var oe=T-pe+g&b;Z[T]=(Z[oe-0+g&b]*w+Z[oe-1+g&b]*A+Z[oe-2+g&b]*x)/H,f[ee]=Z[T],T=T+1&b}return o.guitarHead=T,f.length}},e.Module.Filter={name:"Filter",params:{LP:{L:0,H:1,D:1},LPSlide:{L:-1,H:1,D:0},LPResonance:{L:0,H:1,D:0},HP:{L:0,H:1,D:0},HPSlide:{L:-1,H:1,D:0}},stage:S.SampleMod+0,setup:function(o,f){o.FilterEnabled=f.HP>y||f.LP<1-y,o.LPEnabled=f.LP<1-y,o.LP=u(f.LP,3)/10,o.LPSlide=1+f.LPSlide*100/o.SampleRate,o.LPPos=0,o.LPPosSlide=0,o.LPDamping=5/(1+u(f.LPResonance,2)*20)*(.01+f.LP),o.LPDamping=1-Math.min(o.LPDamping,.8),o.HP=u(f.HP,2)/10,o.HPPos=0,o.HPSlide=1+f.HPSlide*100/o.SampleRate},enabled:function(o){return o.FilterEnabled},process:function(o,f){if(!this.enabled(o))return f.length;for(var g=+o.LP,b=+o.LPPos,w=+o.LPPosSlide,A=+o.LPSlide,x=+o.LPDamping,H=+o.LPEnabled,T=+o.HP,Z=+o.HPPos,ee=+o.HPSlide,pe=0;pe<f.length;pe++){(T>y||T<-y)&&(T*=ee,T=T<y?y:T>.1?.1:T);var oe=b;g*=A,g=g<0?g=0:g>.1?.1:g;var Bt=f[pe];H?(w+=(Bt-b)*g,w*=x):(b=Bt,w=0),b+=w,Z+=b-oe,Z*=1-T,f[pe]=Z}return o.LPPos=b,o.LPPosSlide=w,o.LP=g,o.HP=T,o.HPPos=Z,f.length}};var Q=1024;e.Module.Phaser={name:"Phaser",params:{Offset:{L:-1,H:1,D:0},Sweep:{L:-1,H:1,D:0}},stage:S.SampleMod+1,setup:function(o,f){o.phaserBuffer=di(Q),o.phaserPos=0,o.phaserOffset=u(f.Offset,2)*(Q-4),o.phaserOffsetSlide=u(f.Sweep,3)*4e3/o.SampleRate},enabled:function(o){return m(o.phaserOffsetSlide)>y||m(o.phaserOffset)>y},process:function(o,f){if(!this.enabled(o))return f.length;for(var g=Q,b=g-1,w=o.phaserBuffer,A=o.phaserPos|0,x=+o.phaserOffset,H=+o.phaserOffsetSlide,T=0;T<f.length;T++){x+=H,x<0&&(x=-x,H=-H),x>b&&(x=b,H=0),w[A]=f[T];var Z=A-(x|0)+g&b;f[T]+=w[Z],A=A+1&b|0}return o.phaserPos=A,o.phaserOffset=x,f.length}},e.Module.Volume={name:"Volume",params:{Master:{L:0,H:1,D:.5},Attack:{L:.001,H:1,D:.01},Sustain:{L:0,H:2,D:.3},Punch:{L:0,H:3,D:1},Decay:{L:.001,H:2,D:1}},stage:S.Volume,setup:function(o,f){var g=o.SampleRate,b=f.Master,w=b*(1+f.Punch);o.envelopes=[{S:0,E:b,N:f.Attack*g|0},{S:w,E:b,N:f.Sustain*g|0},{S:b,E:0,N:f.Decay*g|0}];for(var A=0;A<o.envelopes.length;A+=1){var x=o.envelopes[A];x.G=(x.E-x.S)/x.N}},process:function(o,f){for(var g=0;o.envelopes.length>0&&g<f.length;){for(var b=o.envelopes[0],w=b.S,A=b.G,x=Math.min(f.length-g,b.N)|0,H=g+x|0;g<H;g+=1)f[g]*=w,w+=A,w=xo(w,0,10);b.S=w,b.N-=x,b.N<=0&&o.envelopes.shift()}return g}},e.DefaultModules=[e.Module.Frequency,e.Module.Vibrato,e.Module.Generator,e.Module.Filter,e.Module.Phaser,e.Module.Volume],e.DefaultModules.sort(E),e.EmptyParams=X;function X(){return nr(e.Module,function(){return{}})}e._RemoveEmptyParams=de;function de(o){for(var f in o)vo(o[f]).length==0&&delete o[f]}e.Preset={Reset:function(){return X()},Coin:function(){var o=X();return o.Frequency.Start=M(880,660),o.Volume.Sustain=M(.1),o.Volume.Decay=M(.4,.1),o.Volume.Punch=M(.3,.3),M()<.5&&(o.Frequency.ChangeSpeed=M(.15,.1),o.Frequency.ChangeAmount=M(8,4)),de(o),o},Laser:function(){var o=X();return o.Generator.Func=fi(["square","saw","sine"]),M()<.33?(o.Frequency.Start=M(880,440),o.Frequency.Min=M(.1),o.Frequency.Slide=M(.3,-.8)):(o.Frequency.Start=M(1200,440),o.Frequency.Min=o.Frequency.Start-M(880,440),o.Frequency.Min<110&&(o.Frequency.Min=110),o.Frequency.Slide=M(.3,-1)),M()<.5?(o.Generator.A=M(.5),o.Generator.ASlide=M(.2)):(o.Generator.A=M(.5,.4),o.Generator.ASlide=M(.7)),o.Volume.Sustain=M(.2,.1),o.Volume.Decay=M(.4),M()<.5&&(o.Volume.Punch=M(.3)),M()<.33&&(o.Phaser.Offset=M(.2),o.Phaser.Sweep=M(.2)),M()<.5&&(o.Filter.HP=M(.3)),de(o),o},Explosion:function(){var o=X();return o.Generator.Func="noise",M()<.5?(o.Frequency.Start=M(440,40),o.Frequency.Slide=M(.4,-.1)):(o.Frequency.Start=M(1600,220),o.Frequency.Slide=M(-.2,-.2)),M()<.2&&(o.Frequency.Slide=0),M()<.3&&(o.Frequency.RepeatSpeed=M(.5,.3)),o.Volume.Sustain=M(.3,.1),o.Volume.Decay=M(.5),o.Volume.Punch=M(.6,.2),M()<.5&&(o.Phaser.Offset=M(.9,-.3),o.Phaser.Sweep=M(-.3)),M()<.33&&(o.Frequency.ChangeSpeed=M(.3,.6),o.Frequency.ChangeAmount=M(24,-12)),de(o),o},Powerup:function(){var o=X();return M()<.5?o.Generator.Func="saw":o.Generator.A=M(.6),o.Frequency.Start=M(220,440),M()<.5?(o.Frequency.Slide=M(.5,.2),o.Frequency.RepeatSpeed=M(.4,.4)):(o.Frequency.Slide=M(.2,.05),M()<.5&&(o.Vibrato.Depth=M(.6,.1),o.Vibrato.Frequency=M(30,10))),o.Volume.Sustain=M(.4),o.Volume.Decay=M(.4,.1),de(o),o},Hit:function(){var o=X();return o.Generator.Func=fi(["square","saw","noise"]),o.Generator.A=M(.6),o.Generator.ASlide=M(1,-.5),o.Frequency.Start=M(880,220),o.Frequency.Slide=-M(.4,.3),o.Volume.Sustain=M(.1),o.Volume.Decay=M(.2,.1),M()<.5&&(o.Filter.HP=M(.3)),de(o),o},Jump:function(){var o=X();return o.Generator.Func="square",o.Generator.A=M(.6),o.Frequency.Start=M(330,330),o.Frequency.Slide=M(.4,.2),o.Volume.Sustain=M(.3,.1),o.Volume.Decay=M(.2,.1),M()<.5&&(o.Filter.HP=M(.3)),M()<.3&&(o.Filter.LP=M(-.6,1)),de(o),o},Select:function(){var o=X();return o.Generator.Func=fi(["square","saw"]),o.Generator.A=M(.6),o.Frequency.Start=M(660,220),o.Volume.Sustain=M(.1,.1),o.Volume.Decay=M(.2),o.Filter.HP=.2,de(o),o},Lucky:function(){var o=X();return nr(o,function(f,g){var b=e.Module[g].params;nr(b,function(w,A){if(w.C){var x=vo(w.C);f[A]=x[x.length*bn()|0]}else f[A]=bn()*(w.H-w.L)+w.L})}),o.Volume.Master=.4,o.Filter={},de(o),o},Synth:function(){var o=X();return o.Generator.Func=fi(["square","saw"]),o.Frequency.Start=fi([340,240,170]),o.Volume.Attack=M()>.6?M(.5):0,o.Volume.Sustain=M(1),o.Volume.Punch=M(1),o.Volume.Decay=M(.9)+.1,o.Generator.A=M(1),M()<.25&&(o.Filter.HP=M(1)),M()<.25&&(o.Filter.LP=M(1)),de(o),o},Tone:function(){var o=X();return o.Generator.Func="square",o.Frequency.Start=261.6,o.Volume.Sustain=.6441,de(o),o},Click:function(){var o=M()>.5?e.Preset.Hit():e.Preset.Explosion();return M()<.5&&(o.Frequency.Slide=-.5+M(1)),M()<.5&&(o.Volume.Sustain*=M(.4)+.2,o.Volume.Decay*=M(.4)+.2),o.Frequency.Start=M(1200,440),de(o),o}},e.G.unoise=Ke("sample = Math.random();"),e.G.sine=Ke("sample = Math.sin(phase);"),e.G.saw=Ke("sample = 2*(phase/TAU - ((phase/TAU + 0.5)|0));"),e.G.triangle=Ke("sample = Math.abs(4 * ((phase/TAU - 0.25)%1) - 2) - 1;"),e.G.square=Ke("var s = Math.sin(phase); sample = s > A ? 1.0 : s < A ? -1.0 : A;"),e.G.synth=Ke("sample = Math.sin(phase) + .5*Math.sin(phase/2) + .3*Math.sin(phase/4);"),e.G.noise=Ke("if(phase % TAU < 4){__noiseLast = Math.random() * 2 - 1;} sample = __noiseLast;"),e.G.string={create:function(){for(var o=65536,f=o-1,g=di(o),b=0;b<g.length;b++)g[b]=bn()*2-1;var w=0;return function(A,x){for(var H=Math.PI*2,T=+A.generatorA,Z=+A.generatorASlide,ee=+A.generatorB,pe=+A.generatorBSlide,oe=g,Bt=0;Bt<x.length;Bt++){var _o=x[Bt],No=H/_o|0;T+=Z,ee+=pe,T=T<0?0:T>1?1:T,ee=ee<0?0:ee>1?1:ee;var co=w-No+o&f,To=(oe[co-0+o&f]*1+oe[co-1+o&f]*T+oe[co-2+o&f]*ee)/(1+T+ee);oe[w]=To,x[Bt]=oe[w],w=w+1&f}return A.generatorA=T,A.generatorB=ee,x.length}}};function Ke(o){return new Function("$","block",`var TAU = Math.PI * 2;
var sample;
var phase = +$.generatorPhase,
	A = +$.generatorA, ASlide = +$.generatorASlide,
	B = +$.generatorB, BSlide = +$.generatorBSlide;

for(var i = 0; i < block.length; i++){
	var phaseSpeed = block[i];
	phase += phaseSpeed;
	if(phase > TAU){ phase -= TAU };
	A += ASlide; B += BSlide;
   A = A < 0 ? 0 : A > 1 ? 1 : A;
   B = B < 0 ? 0 : B > 1 ? 1 : B;
`+o+`	block[i] = sample;
}

$.generatorPhase = phase;
$.generatorA = A;
$.generatorB = B;
return block.length;
`)}e.CreateAudio=Po;function Po(o){typeof Float32Array<"u"&&tr(o instanceof Float32Array,"data must be an Float32Array");var f=l*n>>3,g=e.SampleRate*f,b=Lo(8+36+o.length*2),w=0;function A(H){for(var T=0;T<H.length;T+=1)b[w]=H.charCodeAt(T),w++}function x(H,T){T<=0||(b[w]=H&255,w++,x(H>>8,T-1))}return A("RIFF"),x(36+o.length*2,4),A("WAVEfmt "),x(16,4),x(1,2),x(l,2),x(e.SampleRate,4),x(g,4),x(f,2),x(n,2),A("data"),x(o.length*2,4),Mo(b.subarray(w),o),new Audio("data:audio/wav;base64,"+Co(b))}e.DownloadAsFile=function(o){tr(o instanceof Audio,"input must be an Audio object"),document.location.href=o.src},e.Util={},e.Util.CopyFToU8=Mo;function Mo(o,f){tr(o.length/2==f.length,"the target buffer must be twice as large as the iinput");for(var g=0,b=0;b<f.length;b++){var w=+f[b],A=w*32767|0;A=A<-32768?-32768:32767<A?32767:A,A+=A<0?65536:0,o[g]=A&255,g++,o[g]=A>>8,g++}}function Co(o){for(var f=32768,g="",b=0;b<o.length;b+=f){var w=Math.min(b+f,o.length);g+=String.fromCharCode.apply(null,o.subarray(b,w))}return btoa(g)}function Eo(){return typeof P<"u"?new P().sampleRate:44100}function tr(o,f){if(!o)throw new Error(f)}function xo(o,f,g){return o=+o,f=+f,g=+g,o<f?+f:o>g?+g:+o}function Io(o){return o=+o,o<0?0:o>1?1:+o}function nr(o,f){var g={};for(var b in o)o.hasOwnProperty(b)&&(g[b]=f(o[b],b));return g}function M(o,f){var g=bn();return o!==void 0&&(g*=o),f!==void 0&&(g+=f),g}function fi(o){return o[o.length*bn()|0]}function vo(o){var f=[];for(var g in o)f.push(g);return f}e._createFloatArray=di;function di(o){if(typeof Float32Array>"u")for(var f=new Array(o),g=0;g<f.length;g++)f[g]=0;return new Float32Array(o)}function Lo(o){if(typeof Uint8Array>"u")for(var f=new Array(o),g=0;g<f.length;g++)f[g]=0;return new Uint8Array(o)}var bo=Math.random;e.setRandomFunc=function(o){bo=o};function bn(){return bo()}})(J={});let ye,Fe,F,jt,gi,gt=!1;function we(e=void 0){ye=e??new(window.AudioContext||window.webkitAudioContext),yt(),Pt(),Mt()}function qt(){gt||(gt=!0,yi())}function yt(e=120){Fe=e,F=60/Fe}function Pt(e=8){jt=e>0?4/e:void 0}function Mt(e=.1){gi=e}function Ge(e){if(jt==null)return e;const t=F*jt;return t>0?Math.ceil(e/t)*t:e}function yi(){const e=ye.createBufferSource();e.start=e.start||e.noteOn,e.start()}function mr(){ye.resume()}class En{constructor(t=null){N(this,"x"),N(this,"y"),N(this,"z"),N(this,"w"),this.setSeed(t)}get(t=1,n){return n==null&&(n=t,t=0),this.next()/4294967295*(n-t)+t}getInt(t,n){n==null&&(n=t,t=0);const l=Math.floor(t),s=Math.floor(n);return s===l?l:this.next()%(s-l)+l}getPlusOrMinus(){return this.getInt(2)*2-1}select(t){return t[this.getInt(t.length)]}setSeed(t,n=123456789,l=362436069,s=521288629,u=32){this.w=t!=null?t>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=n>>>0,this.y=l>>>0,this.z=s>>>0;for(let m=0;m<u;m++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const t=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(t^t>>>8))>>>0,this.w}}function le(e,t){let n=[];for(let l=0;l<e;l++)n.push(t(l));return n}function ze(e){return 440*Math.pow(2,(e-69)/12)}function Qe(e){let t=0;const n=e.length;for(let l=0;l<n;l++){const s=e.charCodeAt(l);t=(t<<5)-t+s,t|=0}return t}const xn=["coin","laser","explosion","powerUp","hit","jump","select","lucky","random","click","synth","tone"],Pi={coin:"Coin",laser:"Laser",explosion:"Explosion",powerUp:"Powerup",hit:"Hit",jump:"Jump",select:"Select",lucky:"Lucky",random:"Lucky",click:"Click",synth:"Synth",tone:"Tone"},vt=new En;let In,Ut;function Mi(){Ut=J.Live(),In=[],J.setRandomFunc(()=>vt.get())}function vi(e){_n(e)}function bi(e){In.forEach(t=>{Nn(t,e)})}function ke(e=void 0,t=void 0,n=2,l=.5,s=void 0,u=1,m=1){t!=null&&vt.setSeed(t);const y=J.Preset[Pi[e??xn[vt.getInt(8)]]],P=le(n,()=>{const S=y();return s!=null&&S.Frequency.Start!=null&&(S.Frequency.Start=s),S.Volume.Attack!=null&&(S.Volume.Attack*=u),S.Volume.Sustain!=null&&(S.Volume.Sustain*=m),S});return bt(e,P,l)}function bt(e,t,n){const l=t.map(u=>{const m=Ut._generate(u),y=ye.createBuffer(1,m.length,J.SampleRate);var P=y.getChannelData(0);return P.set(m),y}),s=ye.createGain();return s.gain.value=n*gi,s.connect(ye.destination),{type:e,params:t,volume:n,buffers:l,bufferSourceNodes:void 0,gainNode:s,isPlaying:!1,playedTime:void 0}}function k(e,t,n,l,s){const u=new En;u.setSeed(n);let m;if(t){let y=u.select(["hit","hit","click","click","explosion"]);l!=null&&(y=l),m=ke(y,u.getInt(999999999),y==="explosion"?1:2,s??(y==="explosion"?.4:.5),u.get(100,200),y==="explosion"?.5:1,y==="explosion"?.2:1)}else{const y=Si(e);let P=u.get()<1/y?"select":u.select(["tone","tone","synth"]);l!=null&&(P=l),m=ke(P,u.getInt(999999999),P!=="select"?1:2,s??(P==="tone"?.3:P==="synth"?.4:.25),261.6,P!=="select"?.1:1,P!=="select"?2:1)}return m.isDrum=t,m.seed=n,m}function Si(e){if(e==null||e.notes.length===0)return 1;let t=0,n=0;return e.notes.forEach(l=>{const s=l.quantizedEndStep-l.quantizedStartStep;s>0&&(t+=s,n++)}),t/n}function Ln(e){In.push(e)}function _n(e){e.isPlaying=!0}function Nn(e,t){if(!e.isPlaying)return;e.isPlaying=!1;const n=Ge(t);(e.playedTime==null||n>e.playedTime)&&(Pe(e,n),e.playedTime=n)}function Pe(e,t,n=void 0){e.bufferSourceNodes=[],e.buffers.forEach(l=>{const s=ye.createBufferSource();if(s.buffer=l,n!=null&&s.playbackRate!=null){const u=Math.pow(2,.08333333333333333);s.playbackRate.value=Math.pow(u,n)}s.start=s.start||s.noteOn,s.connect(e.gainNode),s.start(t),e.bufferSourceNodes.push(s)})}function Ae(e,t=void 0){e.bufferSourceNodes!=null&&(e.bufferSourceNodes.forEach(n=>{t==null?n.stop():n.stop(t)}),e.bufferSourceNodes=void 0)}const St=100;function Vt(e){let t=`${e}`,n;xn.forEach(E=>{const R=`@${E}`,_=t.indexOf(R);_>=0&&(n=E,t=`${t.slice(0,_)}${t.slice(_+R.length)}`)});const l="@d",s=t.indexOf(l);let u=!1;s>=0&&(u=!0,t=`${t.slice(0,s)}${t.slice(s+l.length)}`);const m=t.match(/@s\d+/);let y=1;m!=null&&(y=Number.parseInt(m[0].substring(2)),t=t.replace(/@s\d+/,""));const P=t.match(/v\d+/);let S=.5;return P!=null&&(S=Number.parseInt(P[0].substring(1))/St,t=t.replace(/v\d+/,"")),{mml:t,args:{isDrum:u,seed:y,type:n,volume:S}}}function Ze(e,t,n,l){return{mml:e,sequence:t,soundEffect:n,noteIndex:0,endStep:-1,visualizer:l}}function pr(e,t,n){const l=t.sequence.notes[t.noteIndex];l!=null&&((t.soundEffect.type==="synth"||t.soundEffect.type==="tone")&&t.endStep===e.notesStepsIndex&&Ae(t.soundEffect,n),l.quantizedStartStep===e.notesStepsIndex&&((t.soundEffect.type==="synth"||t.soundEffect.type==="tone")&&Ae(t.soundEffect),t.soundEffect.isDrum?Pe(t.soundEffect,n):Pe(t.soundEffect,n,l.pitch-69),t.visualizer!=null&&t.visualizer.redraw(l),t.endStep=l.quantizedEndStep,t.endStep>=e.notesStepsCount&&(t.endStep-=e.notesStepsCount),t.noteIndex++,t.noteIndex>=t.sequence.notes.length&&(t.noteIndex=0)))}let et=[];function gr(){kn(),et=[]}function $t(e,t,n=1){e.forEach(s=>{s.noteIndex=0});const l={parts:e,notesStepsCount:t,notesStepsIndex:void 0,noteInterval:void 0,nextNotesTime:void 0,speedRatio:n,isPlaying:!1,isLooping:!1};return Tn(l),l}function Tn(e){const t=F/4/e.speedRatio;e.notesStepsIndex=0,e.noteInterval=t,e.nextNotesTime=Ge(ye.currentTime)-t}function Jt(e){et.push(e)}function Wt(e){et=et.filter(t=>t!==e)}function wi(e){et.forEach(t=>{nt(t,e)})}function wt(e,t=!1){e.isLooping=t,Tn(e),e.isPlaying=!0}function tt(e){e.isPlaying=!1,e.parts.forEach(t=>{Ae(t.soundEffect)})}function kn(){et.forEach(e=>{tt(e)})}function nt(e,t){e.isPlaying&&(t<e.nextNotesTime||(e.nextNotesTime+=e.noteInterval,e.nextNotesTime<t-F&&(e.nextNotesTime=Ge(t)),e.parts.forEach(n=>{pr(e,n,e.nextNotesTime)}),e.notesStepsIndex++,e.notesStepsIndex>=e.notesStepsCount&&(e.isLooping?e.notesStepsIndex=0:e.isPlaying=!1)))}const At={c:"coin",l:"laser",e:"explosion",p:"powerUp",h:"hit",j:"jump",s:"select",u:"random",r:"random",i:"click",y:"synth",t:"tone"},L=vt;let Kt=1;function Rn(e){Kt=e}function yr(e,t,n,l,s,u,m){L.setSeed(Kt+Qe(e)),Ai(),Be=null;let y=L.select(u);const P=le(s,()=>{const S=Math.floor(Math.abs(L.get()+L.get()-1)*3),E=Math.floor((L.get()+L.get()-1)*10),R=Math.abs(L.get()+L.get()-1),_=L.get()<.25;_||(y=L.select(u));const D=L.get()<.5,Q=L.get()<.5,X=L.get()<.9;return Yt(n,y,t,.7,S,E,R,_,D,Q,X,void 0,m)});return Xt(P,.5/l)}function Dn(e="0",t=!1,n=69-12,l=16,s=.25,u=4,m=1){L.setSeed(Kt+Qe(e)),Ai(),Be=null;let y=At[e[0]];y==null&&(y=xn[L.getInt(8)]);let P=.8;t&&(s/=4,P/=2);const S=le(u,()=>{const E=Math.floor(Math.abs(L.get()+L.get()-1)*3),R=Math.floor((L.get()+L.get()-1)*10),_=t?2:Math.abs(L.get()+L.get()-1),D=L.get()<.25,Q=t?!1:L.get()<.5,X=L.get()<.5,de=t?L.get()<.25:L.get()<.9,Ke=L.get(.5);return Yt(l,y,n,P,E,R,_,D,Q,X,de,Ke,m)});return Xt(S,.5/s)}function Xt(e,t){const n=e.map(l=>{const s=[];return l.notes.forEach((u,m)=>{u!=null&&s.push({pitch:u+69,quantizedStartStep:m*2})}),Ze(void 0,{notes:s},l.soundEffect)});return $t(n,e[0].notes.length*2,t)}let Be;function Yt(e=32,t,n=60,l=1,s=0,u=0,m=1,y=!1,P=!1,S=!1,E=!1,R=null,_=.1){const D=Ce(t,ze(n),l,_);if(Be!=null&&y)D.noteRatios=Be.noteRatios;else{const Q=R!=null?Gn(e,R):On(e);D.noteRatios=Zt(Q,P?0:-1,1,m,E)}return D.notes=Ct(D.noteRatios,s,u,S),Be=D,D}function On(e){let t=le(e,()=>!1),n=4;for(;n<=e;)t=Fn(t,n),n*=2;return t}function Fn(e,t){let n=le(t,()=>!1);const l=Math.floor(Math.abs(L.get()+L.get()-1)*4);for(let s=0;s<l;s++)n[L.getInt(t-1)]=!0;return e.map((s,u)=>n[u%t]?!s:s)}function Gn(e,t){return le(e,()=>L.get()>=t)}const zn=[[0,4,7],[0,3,7],[0,4,7,10],[0,4,7,11],[0,3,7,10]],Qt=[[[0,0],[7,0],[9,1],[4,1]],[[5,0],[0,0],[5,0],[7,0]],[[5,3],[7,2],[4,4],[9,1]],[[9,1],[2,1],[7,0],[0,0]],[[9,1],[5,0],[7,0],[0,0]]];let He;function Ai(){He=L.select(Qt).map((t,n)=>[L.get()<.7?t[0]:Qt[L.getInt(Qt.length)][n][0],L.get()<.7?t[1]:L.getInt(zn.length)])}function Zt(e,t,n,l,s){let u=L.get(),m=L.get(-.5,.5),P=e.length/He.length,S=[];return e.forEach((E,R)=>{let _=Math.floor(R/P),D=R%P;if(s&&_===Math.floor(He.length/2)){S.push(S[D]),S[D]!=null&&(u=S[D]);return}if(!E){S.push(null);return}S.push(u),m+=L.get(-.25,.25),u+=m*l,(L.get()<.2||u<=t||u>=n)&&(u-=m*2,m*=-1)}),S}function Ct(e,t,n,l){let u=e.length/He.length;return e.map((m,y)=>{if(m==null)return null;let P=Math.floor(y/u),S=He[P][0],E=zn[He[P][1]],R=m;l&&(R=Math.floor(R*2)/2);let _=Math.floor(R),D=Math.floor((R-_)*E.length);for(D+=t+L.getInt(-n,n+1);D>=E.length;)D-=E.length,_++;for(;D<0;)D+=E.length,_--;return S+_*12+E[D]})}function Ce(e,t,n,l){return{noteRatios:void 0,notes:void 0,soundEffect:ke(e,void 0,1,l,t,n,n)}}const Ee=(e,t)=>Array(Math.abs(t)+1).join(e);function Et(e,t,n){return function(...l){return console.warn(`${e} is deprecated. Use ${t}.`),n.apply(this,l)}}function Bn(e){return e!==null&&typeof e=="object"&&typeof e.name=="string"}function ie(e){return e!==null&&typeof e=="object"&&typeof e.step=="number"&&typeof e.alt=="number"}const ue=[0,2,4,-1,1,3,5],K=ue.map(e=>Math.floor(e*7/12));function it(e){const{step:t,alt:n,oct:l,dir:s=1}=e,u=ue[t]+7*n;if(l===void 0)return[s*u];const m=l-K[t]-4*n;return[s*u,s*m]}const je=[3,0,4,1,5,2,6];function Me(e){const[t,n,l]=e,s=je[xt(t)],u=Math.floor((t+1)/7);if(n===void 0)return{step:s,alt:u,dir:l};const m=n+4*u+K[s];return{step:s,alt:u,oct:m,dir:l}}function xt(e){const t=(e+1)%7;return t<0?7+t:t}const rt={empty:!0,name:"",pc:"",acc:""},en=new Map,Hn=e=>"CDEFGAB".charAt(e),tn=e=>e<0?Ee("b",-e):Ee("#",e),jn=e=>e[0]==="b"?-e.length:e.length;function Y(e){const t=en.get(e);if(t)return t;const n=typeof e=="string"?Ii(e):ie(e)?Y(Pr(e)):Bn(e)?Y(e.name):rt;return en.set(e,n),n}const Ci=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function Ei(e){const t=Ci.exec(e);return[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]}function qn(e){return Y(Me(e))}const xi=(e,t)=>(e%t+t)%t,nn=[0,2,4,5,7,9,11];function Ii(e){const t=Ei(e);if(t[0]===""||t[3]!=="")return rt;const n=t[0],l=t[1],s=t[2],u=(n.charCodeAt(0)+3)%7,m=jn(l),y=s.length?+s:void 0,P=it({step:u,alt:m,oct:y}),S=n+l+s,E=n+l,R=(nn[u]+m+120)%12,_=y===void 0?xi(nn[u]+m,12)-12*99:nn[u]+m+12*(y+1),D=_>=0&&_<=127?_:null,Q=y===void 0?null:Math.pow(2,(_-69)/12)*440;return{empty:!1,acc:l,alt:m,chroma:R,coord:P,freq:Q,height:_,letter:n,midi:D,name:S,oct:y,pc:E,step:u}}function Pr(e){const{step:t,alt:n,oct:l}=e,s=Hn(t);if(!s)return"";const u=s+tn(n);return l||l===0?u+l:u}const he={empty:!0,name:"",acc:""},xe="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",ve="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Re=new RegExp("^"+xe+"|"+ve+"$");function Li(e){const t=Re.exec(`${e}`);return t===null?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}const Un={};function Ie(e){return typeof e=="string"?Un[e]||(Un[e]=Ni(e)):ie(e)?Ie(Vn(e)):Bn(e)?Ie(e.name):he}const ot=[0,2,4,5,7,9,11],_i="PMMPPMM";function Ni(e){const t=Li(e);if(t[0]==="")return he;const n=+t[0],l=t[1],s=(Math.abs(n)-1)%7,u=_i[s];if(u==="M"&&l==="P")return he;const m=u==="M"?"majorable":"perfectable",y=""+n+l,P=n<0?-1:1,S=n===8||n===-8?n:P*(s+1),E=ki(m,l),R=Math.floor((Math.abs(n)-1)/7),_=P*(ot[s]+E+12*R),D=(P*(ot[s]+E)%12+12)%12,Q=it({step:s,alt:E,oct:R,dir:P});return{empty:!1,name:y,num:n,q:l,step:s,alt:E,dir:P,type:m,simple:S,semitones:_,chroma:D,coord:Q,oct:R}}function Ti(e,t){const[n,l=0]=e,s=n*7+l*12<0,u=t||s?[-n,-l,-1]:[n,l,1];return Ie(Me(u))}function ki(e,t){return t==="M"&&e==="majorable"||t==="P"&&e==="perfectable"?0:t==="m"&&e==="majorable"?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*(e==="perfectable"?t.length:t.length+1):0}function Vn(e){const{step:t,alt:n,oct:l=0,dir:s}=e;if(!s)return"";const u=t+1+7*l,m=u===0?t+1:u,y=s<0?"-":"",P=_i[t]==="M"?"majorable":"perfectable";return y+m+It(P,n)}function It(e,t){return t===0?e==="majorable"?"M":"P":t===-1&&e==="majorable"?"m":t>0?Ee("A",t):Ee("d",e==="perfectable"?t:t+1)}function lt(e,t){const n=Y(e),l=Ie(t);if(n.empty||l.empty)return"";const s=n.coord,u=l.coord,m=s.length===1?[s[0]+u[0]]:[s[0]+u[0],s[1]+u[1]];return qn(m).name}function ce(e,t){const n=Y(e),l=Y(t);if(n.empty||l.empty)return"";const s=n.coord,u=l.coord,m=u[0]-s[0],y=s.length===2&&u.length===2?u[1]-s[1]:-Math.floor(m*7/12),P=l.height===n.height&&l.midi!==null&&n.midi!==null&&n.step>l.step;return Ti([m,y],P).name}function rn(e,t){const n=t.length,l=(e%n+n)%n;return t.slice(l,n).concat(t.slice(0,l))}function Mr(e){return e.filter(t=>t===0||t)}const De={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},Ri=e=>Number(e).toString(2),Lt=e=>parseInt(e,2),on=/^[01]{12}$/;function ln(e){return on.test(e)}const Di=e=>typeof e=="number"&&e>=0&&e<=4095,an=e=>e&&ln(e.chroma),sn={[De.chroma]:De};function qe(e){const t=ln(e)?e:Di(e)?Ri(e):Array.isArray(e)?Jn(e):an(e)?e.chroma:De.chroma;return sn[t]=sn[t]||$n(t)}const vr=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function br(e){const t=[];for(let n=0;n<12;n++)e.charAt(n)==="1"&&t.push(vr[n]);return t}function Sr(e,t=!0){const l=qe(e).chroma.split("");return Mr(l.map((s,u)=>{const m=rn(u,l);return t&&m[0]==="0"?null:m.join("")}))}function Oi(e){const t=qe(e).setNum;return n=>{const l=qe(n).setNum;return t&&t!==l&&(l&t)===l}}function cn(e){const t=qe(e).setNum;return n=>{const l=qe(n).setNum;return t&&t!==l&&(l|t)===l}}function Ue(e){const t=e.split("");return t.map((n,l)=>rn(l,t).join(""))}function $n(e){const t=Lt(e),n=Ue(e).map(Lt).filter(u=>u>=2048).sort()[0],l=Ri(n),s=br(e);return{empty:!1,name:"",setNum:t,chroma:e,normalized:l,intervals:s}}function Jn(e){if(e.length===0)return De.chroma;let t;const n=[0,0,0,0,0,0,0,0,0,0,0,0];for(let l=0;l<e.length;l++)t=Y(e[l]),t.empty&&(t=Ie(e[l])),t.empty||(n[t.chroma]=1);return n.join("")}const un=[["1P 3M 5P","major","M ^ "],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth/ninth","6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],be={...De,name:"",quality:"Unknown",intervals:[],aliases:[]};let Ve=[],me={};function Wn(e){return me[e]||be}function Kn(){return Ve.slice()}function wr(e,t,n){const l=Ar(e),s={...qe(e),name:n||"",quality:l,intervals:e,aliases:t};Ve.push(s),s.name&&(me[s.name]=s),me[s.setNum]=s,me[s.chroma]=s,s.aliases.forEach(u=>Fi(s,u))}function Fi(e,t){me[t]=e}function Ar(e){const t=n=>e.indexOf(n)!==-1;return t("5A")?"Augmented":t("3M")?"Major":t("5d")?"Diminished":t("3m")?"Minor":"Unknown"}un.forEach(([e,t,n])=>wr(e.split(" "),n.split(" "),t)),Ve.sort((e,t)=>e.setNum-t.setNum);const Cr=e=>{const t=e.reduce((n,l)=>{const s=Y(l).chroma;return s!==void 0&&(n[s]=n[s]||Y(l).name),n},{});return n=>t[n]};function Er(e){const t=e.map(l=>Y(l).pc).filter(l=>l);return Y.length===0?[]:xr(t,1).filter(l=>l.weight).sort((l,s)=>s.weight-l.weight).map(l=>l.name)}function xr(e,t){const n=e[0],l=Y(n).chroma,s=Cr(e),u=Sr(e,!1),m=[];return u.forEach((y,P)=>{Kn().filter(E=>E.chroma===y).forEach(E=>{const R=E.aliases[0],_=s(P);P!==l?m.push({weight:.5*t,name:`${_}${R}/${n}`}):m.push({weight:1*t,name:`${_}${R}`})})}),m}const Ir=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neopolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5P pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7M pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neopolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 7m","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neopolitan major"],["1P 2M 3m 4P 5P 6m 7m","aeolian","minor"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Lr={...De,intervals:[],aliases:[]};let Gi=[],_t={};function _r(e){return _t[e]||Lr}function Nr(){return Gi.slice()}function Tr(e,t,n=[]){const l={...qe(e),name:t,intervals:e,aliases:n};return Gi.push(l),_t[l.name]=l,_t[l.setNum]=l,_t[l.chroma]=l,l.aliases.forEach(s=>kr(l,s)),l}function kr(e,t){_t[t]=e}Ir.forEach(([e,t,...n])=>Tr(e.split(" "),t,n));const Xn={empty:!0,name:"",symbol:"",root:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]},Rr=/^(6|64|7|9|11|13)$/;function fn(e){const[t,n,l,s]=Ei(e);return t===""?["",e]:t==="A"&&s==="ug"?["","aug"]:!s&&(l==="4"||l==="5")?[t+n,l]:Rr.test(l)?[t+n,l+s]:[t+n+l,s]}function Nt(e){if(e==="")return Xn;if(Array.isArray(e)&&e.length===2)return dn(e[1],e[0]);{const[t,n]=fn(e),l=dn(n,t);return l.empty?dn(e):l}}function dn(e,t,n){const l=Wn(e),s=Y(t||""),u=Y(n||"");if(l.empty||t&&s.empty||n&&u.empty)return Xn;const m=ce(s.pc,u.pc),y=l.intervals.indexOf(m)+1;if(!u.empty&&!y)return Xn;const P=Array.from(l.intervals);for(let _=1;_<y;_++){const D=P[0][0],Q=P[0][1],X=parseInt(D,10)+7;P.push(`${X}${Q}`),P.shift()}const S=s.empty?[]:P.map(_=>lt(s,_));e=l.aliases.indexOf(e)!==-1?e:l.aliases[0];const E=`${s.empty?"":s.pc}${e}${u.empty||y<=1?"":"/"+u.pc}`,R=`${t?s.pc+" ":""}${l.name}${y>1&&n?" over "+u.pc:""}`;return{...l,name:R,symbol:E,type:l.name,root:u.name,intervals:P,rootDegree:y,tonic:s.name,notes:S}}const Dr=Et("Chord.chord","Chord.get",Nt);function Or(e,t){const[n,l]=fn(e);return n?lt(n,t)+l:e}function Fr(e){const t=Nt(e),n=cn(t.chroma);return Nr().filter(l=>n(l.chroma)).map(l=>l.name)}function Gr(e){const t=Nt(e),n=cn(t.chroma);return Kn().filter(l=>n(l.chroma)).map(l=>t.tonic+l.aliases[0])}function zr(e){const t=Nt(e),n=Oi(t.chroma);return Kn().filter(l=>n(l.chroma)).map(l=>t.tonic+l.aliases[0])}var Yn={getChord:dn,get:Nt,detect:Er,chordScales:Fr,extended:Gr,reduced:zr,tokenize:fn,transpose:Or,chord:Dr};const Br=Math.log(2),Hr=Math.log(440);function Qn(e){const t=12*(Math.log(e)-Hr)/Br+69;return Math.round(t*100)/100}const jr="C C# D D# E F F# G G# A A# B".split(" "),zi="C Db D Eb E F Gb G Ab A Bb B".split(" ");function $e(e,t={}){if(isNaN(e)||e===-1/0||e===1/0)return"";e=Math.round(e);const l=(t.sharps===!0?jr:zi)[e%12];if(t.pitchClass)return l;const s=Math.floor(e/12)-1;return l+s}const Zn=["C","D","E","F","G","A","B"],hn=e=>e.name,mn=e=>e.map(Y).filter(t=>!t.empty);function qr(e){return e===void 0?Zn.slice():Array.isArray(e)?mn(e).map(hn):[]}const fe=Y,Ur=e=>fe(e).name,Bi=e=>fe(e).pc,Vr=e=>fe(e).acc,Le=e=>fe(e).oct,Je=e=>fe(e).midi,$r=e=>fe(e).freq,ae=e=>fe(e).chroma;function ei(e){return $e(e)}function pn(e){return $e(Qn(e))}function gn(e){return $e(Qn(e),{sharps:!0})}function yn(e){return $e(e,{sharps:!0})}const _e=lt,Tt=lt,ti=e=>t=>_e(t,e),at=ti,st=e=>t=>_e(e,t),Pn=st;function ct(e,t){const n=fe(e);if(n.empty)return"";const[l,s]=n.coord;return qn(s===void 0?[l+t]:[l+t,s]).name}const ni=ct,Ne=(e,t)=>e.height-t.height,Te=(e,t)=>t.height-e.height;function kt(e,t){return t=t||Ne,mn(e).sort(t).map(hn)}function Rt(e){return kt(e,Ne).filter((t,n,l)=>n===0||t!==l[n-1])}const We=e=>{const t=fe(e);return t.empty?"":$e(t.midi||t.chroma,{sharps:t.alt>0,pitchClass:t.midi===null})};function Dt(e,t){const n=fe(e);if(n.empty)return"";const l=fe(t||$e(n.midi||n.chroma,{sharps:n.alt<0,pitchClass:!0}));if(l.empty||l.chroma!==n.chroma)return"";if(n.oct===void 0)return l.pc;const s=n.chroma-n.alt,u=l.chroma-l.alt,m=s>11||u<0?-1:s<0||u>11?1:0,y=n.oct+m;return l.pc+y}var Mn={names:qr,get:fe,name:Ur,pitchClass:Bi,accidentals:Vr,octave:Le,midi:Je,ascending:Ne,descending:Te,sortedNames:kt,sortedUniqNames:Rt,fromMidi:ei,fromMidiSharps:yn,freq:$r,fromFreq:pn,fromFreqSharps:gn,chroma:ae,transpose:_e,tr:Tt,transposeBy:ti,trBy:at,transposeFrom:st,trFrom:Pn,transposeFifths:ct,trFifths:ni,simplify:We,enharmonic:Dt};const Ot={empty:!0,name:"",chordType:""},vn={};function Ft(e){return typeof e=="string"?vn[e]||(vn[e]=qi(e)):typeof e=="number"?Ft(ii[e]||""):ie(e)?Hi(e):Bn(e)?Ft(e.name):Ot}function Hi(e){return Ft(tn(e.alt)+ii[e.step])}const Jr=/^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;function Wr(e){return Jr.exec(e)||["","","",""]}const ii="I II III IV V VI VII".split(" ");function qi(e){const[t,n,l,s]=Wr(e);if(!l)return Ot;const u=l.toUpperCase(),m=ii.indexOf(u),y=jn(n),P=1;return{empty:!1,name:t,roman:l,interval:Ie({step:m,alt:y,dir:P}).name,acc:n,chordType:s,alt:y,step:m,major:l===u,oct:0,dir:P}}const ri=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],oi={...De,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},Kr=ri.map(Xr),li={};Kr.forEach(e=>{li[e.name]=e,e.aliases.forEach(t=>{li[t]=e})});function Ui(e){return typeof e=="string"?li[e.toLowerCase()]||oi:e&&e.name?Ui(e.name):oi}function Xr(e){const[t,n,l,s,u,m,y]=e,P=y?[y]:[],S=Number(n).toString(2);return{empty:!1,intervals:_r(s).intervals,modeNum:t,chroma:S,normalized:S,name:s,setNum:n,alt:l,triad:u,seventh:m,aliases:P}}function Vi(e){return(t,n)=>{const l=Ui(t);if(l.empty)return[];const s=rn(l.modeNum,e),u=l.intervals.map(m=>lt(n,m));return s.map((m,y)=>u[y]+m)}}Vi(ri.map(e=>e[4])),Vi(ri.map(e=>e[5]));function ai(e,t){return t.map(Ft).map(l=>lt(e,Ie(l))+l.chordType)}function $i(e,t){return t.map(n=>{const[l,s]=fn(n),u=ce(e,l);return Ft(Ie(u)).name+s})}var si={fromRomanNumerals:ai,toRomanNumerals:$i};const Ji={seed:0,noteLength:32,partCount:4,drumPartRatio:.5},q=new En;let Wi=1;function Yr(e){Wi=e}function Qr(e){const t={...Ji,...e};q.setSeed(Wi+t.seed);const n=no(t.noteLength);return le(t.partCount,()=>q.get()<t.drumPartRatio?eo(t.noteLength):Zr(t.noteLength,n))}function Zr(e,t){const n=Ki(e,1),l=le(e,()=>q.get()<.8),s=q.select([[0,2],[0,1,2],[0,1,2,3]]);let u=q.select(["tone","tone","tone","select","laser","synth","hit"]),m=q.getInt(36,50);(u==="synth"||u==="select")&&(m=Math.floor(m*.6));const y=q.getInt(-1,1),P=16;let S=`@${u}@s${q.getInt(999999999)} v${m} l${P} `,E=-1,R=!1;for(let _=0;_<e;_++){if(!n[_]){S+="r",R=!1;continue}if(l[_]&&R){S+="^";continue}R=!0;const D=t[_][q.select(s)];let Q=Number.parseFloat(D.charAt(D.length-1))+y,X=D.substring(0,D.length-1).replace("#","+").replace("b","-").toLowerCase();Q!==E&&(S+=` o${Q}`,E=Q),S+=X}return S}function eo(e){const t=Ki(e,3),n=le(e,()=>q.get()<.4),l=q.select(["hit","hit","click","explosion"]);let s=q.getInt(36,50);(l==="click"||l==="explosion")&&(s=Math.floor(s*.5));const u=16;let m=`@${l}@d@s${q.getInt(999999999)} v${s} l${u} `,y=!1;for(let P=0;P<e;P++){if(!t[P]){m+="r",y=!1;continue}if(n[P]&&y){m+="^";continue}y=!0,m+="c"}return m}const ci=[["I","IIIm","VIm"],["IV","IIm"],["V","VIIm"]],to=[[0,1,2],[1,2,0],[2,0]];function no(e){const t=q.select(["C","D","Eb","F","G","A","Bb"]),n=4,l=4;let s,u,m,y;return le(e,P=>{if(P%l===0){P===0?(u=q.getInt(ci.length-1),s=q.select(ci[u])):q.get()<.8-P/l%2*.5&&(u=q.select(to[u]),s=q.select(ci[u]));const S=si.fromRomanNumerals(`${t}${n}`,[s])[0];S.charAt(S.length-1)==="m"?(m="m7",y=S.substring(0,S.length-1)):(m="7",y=S)}return Yn.getChord(m,y).notes})}function Ki(e,t){let n=le(e,()=>!1),l=4;for(;l<=e;)n=io(n,l,t),l*=2;return n}function io(e,t,n){let l=le(t,()=>!1);return le(n,()=>{l[q.getInt(t)]=!0}),e.map((s,u)=>l[u%t]?!s:s)}let Gt;function Xi(e,t){const n={seed:0,numberOfSounds:2,volume:1,...t},l=`${e}_${JSON.stringify(n)}_${Gt}`;if(zt[l]!=null)return vi(zt[l]),zt[l];let s;n.freq!=null?s=n.freq:n.pitch!=null?s=ze(n.pitch):n.note!=null&&(s=Mn.get(n.note.toUpperCase().replace("+","#").replace("-","b")).freq);let u=n.numberOfSounds,m=1,y=1;e==="synth"?m=y=.2:e==="tone"&&(m=y=.1,u=1);const P=ke(e,n.seed+Gt,u,n.volume,s,m,y);return Ln(P),zt[l]=P,vi(P),P}const ui=.125;let zt,ut;function ro(e,t){Yi();const n={volume:1,speed:1,isLooping:!0,...t};let l=0;const s=e.map(y=>Vt(y));s.forEach(y=>{const P=so(y.mml);P>l&&(l=P)});const u=s.map(y=>{const{mml:P,args:S}=y,E=er(P,l),R=k(E,S.isDrum,S.seed,S.type,S.volume*n.volume);return Ze(P,E,R)}),m=$t(u,l,n.speed);return Jt(m),wt(m,n.isLooping),n.isLooping&&(ut=m),m}function Yi(e){let t=e;if(t==null)if(ut!=null)t=ut,ut=void 0;else return;tt(t),Wt(t),ut=void 0}function oo(e){return Qr(e)}function lo(){const e=ye.currentTime;wi(e),bi(e)}function ao(e=1,t=void 0){Zi(e),we(t),Qi()}function Qi(){gr(),ut=void 0,r={},Mi(),zt={}}function Zi(e=1){Gt=e,Rn(Gt),Yr(Gt)}function so(e){const t=new Ht(e);for(let n of t)if(n.type==="end")return Math.floor(n.time/ui)}function er(e,t){const n=[],l=new Ht(e);for(let s of l)if(s.type==="note"){let u=Math.floor((s.time+s.duration)/ui);u>=t&&(u-=t),n.push({pitch:s.noteNumber,quantizedStartStep:Math.floor(s.time/ui),quantizedEndStep:u})}return{notes:n}}let r,i;function a(e="0",t=2,n,l=1){Xi(At[e[0]],{seed:Qe(e),numberOfSounds:t,pitch:n,volume:l})}function c(e="0",t=69-24,n=32,l=.25,s=4,u=["laser","select","hit","hit"],m=1){h(),i=yr(e,t,n,l,s,u,m),Jt(i),wt(i,!0)}function h(){i!=null&&(tt(i),Wt(i),i=void 0)}function p(e="0",t=!1,n=69-12,l=16,s=.25,u=4,m=1){const y=`${e}_${t}_${n}_${l}_${s}_${u}_${m}`;if(r[y]==null){const P=Dn(e,t,n,l,s,u,m);Jt(P),r[y]=P}wt(r[y])}function v(){kn()}I.generateMml=oo,I.init=ao,I.play=a,I.playBgm=c,I.playEmpty=yi,I.playJingle=p,I.playMml=ro,I.playSoundEffect=Xi,I.reset=Qi,I.resumeAudioContext=mr,I.setQuantize=Pt,I.setSeed=Zi,I.setTempo=yt,I.setVolume=Mt,I.startAudio=qt,I.stopBgm=h,I.stopJingles=v,I.stopMml=Yi,I.update=lo,Object.defineProperties(I,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})})(yo,yo.exports);var wo=yo.exports;const Oo=Do(wo),Fo=ko({__proto__:null,default:Oo},[wo]);(function(d){function C(r,i=0,a=1){return Math.max(i,Math.min(r,a))}function re(r,i,a){const c=a-i,h=r-i;if(h>=0)return h%c+i;{let p=c+h%c+i;return p>=a&&(p-=c),p}}function U(r,i,a){return i<=r&&r<a}function N(r){return[...Array(r).keys()]}function I(r,i){return N(r).map(a=>i(a))}function ne(r,i){let a=[];for(let c=0,h=0;c<r.length;h++)i(r[c],h)?(a.push(r[c]),r.splice(c,1)):c++;return a}function Se(r){return[...r].reduce((i,[a,c])=>(i[a]=c,i),{})}function An(r){return Object.keys(r).map(i=>[i,r[i]])}function cr(r,i){return String.fromCharCode(r.charCodeAt(0)+i)}function dt(r){return r.x!=null&&r.y!=null}class G{constructor(i,a){this.x=0,this.y=0,this.set(i,a)}set(i=0,a=0){return dt(i)?(this.x=i.x,this.y=i.y,this):(this.x=i,this.y=a,this)}add(i,a){return dt(i)?(this.x+=i.x,this.y+=i.y,this):(this.x+=i,this.y+=a,this)}sub(i,a){return dt(i)?(this.x-=i.x,this.y-=i.y,this):(this.x-=i,this.y-=a,this)}mul(i){return this.x*=i,this.y*=i,this}div(i){return this.x/=i,this.y/=i,this}clamp(i,a,c,h){return this.x=C(this.x,i,a),this.y=C(this.y,c,h),this}wrap(i,a,c,h){return this.x=re(this.x,i,a),this.y=re(this.y,c,h),this}addWithAngle(i,a){return this.x+=Math.cos(i)*a,this.y+=Math.sin(i)*a,this}swapXy(){const i=this.x;return this.x=this.y,this.y=i,this}normalize(){return this.div(this.length),this}rotate(i){if(i===0)return this;const a=this.x;return this.x=a*Math.cos(i)-this.y*Math.sin(i),this.y=a*Math.sin(i)+this.y*Math.cos(i),this}angleTo(i,a){return dt(i)?Math.atan2(i.y-this.y,i.x-this.x):Math.atan2(a-this.y,i-this.x)}distanceTo(i,a){let c,h;return dt(i)?(c=i.x-this.x,h=i.y-this.y):(c=i-this.x,h=a-this.y),Math.sqrt(c*c+h*h)}isInRect(i,a,c,h){return U(this.x,i,i+c)&&U(this.y,a,a+h)}equals(i){return this.x===i.x&&this.y===i.y}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}get angle(){return Math.atan2(this.y,this.x)}}const mi=["transparent","white","red","green","yellow","blue","purple","cyan","black","light_red","light_green","light_yellow","light_blue","light_purple","light_cyan","light_black"],ur="twrgybpclRGYBPCL";let ht;const fr=[15658734,15277667,5025616,16761095,4149685,10233776,240116,6381921];function se(r){const[i,a,c]=Cn(0,r);if(ht=Se(mi.map((h,p)=>{if(p<1)return[h,{r:0,g:0,b:0,a:0}];if(p<9){const[n,l,s]=Cn(p-1,r);return[h,{r:n,g:l,b:s,a:1}]}const[v,e,t]=Cn(p-9+1,r);return[h,{r:Math.floor(r?v*.5:i-(i-v)*.5),g:Math.floor(r?e*.5:c-(c-e)*.5),b:Math.floor(r?t*.5:a-(a-t)*.5),a:1}]})),r){const h=ht.blue;ht.white={r:Math.floor(h.r*.15),g:Math.floor(h.g*.15),b:Math.floor(h.b*.15),a:1}}}function Cn(r,i){i&&(r===0?r=7:r===7&&(r=0));const a=fr[r];return[(a&16711680)>>16,(a&65280)>>8,a&255]}function Xe(r,i=1){const a=ht[r];return Math.floor(a.r*i)<<16|Math.floor(a.g*i)<<8|Math.floor(a.b*i)}function mt(r,i=1){const a=ht[r],c=Math.floor(a.r*i),h=Math.floor(a.g*i),p=Math.floor(a.b*i);return a.a<1?`rgba(${c},${h},${p},${a.a})`:`rgb(${c},${h},${p})`}const dr=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float width;
uniform float height;

float gridValue(vec2 uv, float res) {
  vec2 grid = fract(uv * res);
  return (step(res, grid.x) * step(res, grid.y));
}

void main(void) {
  vec4 color = texture2D(uSampler, vTextureCoord);  
  vec2 grid_uv = vTextureCoord.xy * vec2(width, height);
  float v = gridValue(grid_uv, 0.2);
  gl_FragColor.rgba = color * v;
}
`;function hr(r,i){return new PIXI.Filter(void 0,dr,{width:r,height:i})}const ge=new G;let z,V,B,W=new G;const pi=5;document.createElement("img");let $,Ye,pt=1,Ht="black",J,ye,Fe=!1,F,jt;function gi(r,i,a,c,h,p,v){ge.set(r),F=v,Ht=a;const e=`
-webkit-touch-callout: none;
-webkit-tap-highlight-color: ${i};
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background: ${i};
color: #888;
`,t=`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`,n=`
image-rendering: -moz-crisp-edges;
image-rendering: -webkit-optimize-contrast;
image-rendering: -o-crisp-edges;
image-rendering: pixelated;
`;if(document.body.style.cssText=e,W.set(ge),F.isUsingPixi){W.mul(pi);const s=new PIXI.Application({width:W.x,height:W.y});if(z=s.view,B=new PIXI.Graphics,B.scale.x=B.scale.y=pi,PIXI.settings.SCALE_MODE=PIXI.SCALE_MODES.NEAREST,s.stage.addChild(B),B.filters=[],F.name==="crt"&&B.filters.push(jt=new PIXI.filters.CRTFilter({vignettingAlpha:.7})),F.name==="pixel"&&B.filters.push(hr(W.x,W.y)),F.name==="pixel"||F.name==="shapeDark"){const u=new PIXI.filters.AdvancedBloomFilter({threshold:.1,bloomScale:F.name==="pixel"?1.5:1,brightness:F.name==="pixel"?1.5:1,blur:8});B.filters.push(u)}B.lineStyle(0),z.style.cssText=t}else z=document.createElement("canvas"),z.width=W.x,z.height=W.y,V=z.getContext("2d"),V.imageSmoothingEnabled=!1,z.style.cssText=t+n;document.body.appendChild(z);const l=()=>{const u=innerWidth/innerHeight,m=W.x/W.y,y=u<m,P=y?.95*innerWidth:.95*innerHeight*m,S=y?.95*innerWidth/m:.95*innerHeight;z.style.width=`${P}px`,z.style.height=`${S}px`};if(window.addEventListener("resize",l),l(),c){$=document.createElement("canvas");let s;h?($.width=W.x,$.height=W.y,s=p):(W.x<=W.y*2?($.width=W.y*2,$.height=W.y):($.width=W.x,$.height=W.x/2),$.width>400&&(pt=400/$.width,$.width=400,$.height*=pt),s=Math.round(400/$.width)),Ye=$.getContext("2d"),Ye.fillStyle=i,gcc.setOptions({scale:s,capturingFps:60,isSmoothingEnabled:!1})}}function gt(){if(F.isUsingPixi){B.clear(),B.beginFill(Xe(Ht,F.isDarkColor?.15:1)),B.drawRect(0,0,ge.x,ge.y),B.endFill(),B.beginFill(Xe(J)),Fe=!0;return}V.fillStyle=mt(Ht,F.isDarkColor?.15:1),V.fillRect(0,0,ge.x,ge.y),V.fillStyle=mt(J)}function we(r){if(r===J){F.isUsingPixi&&!Fe&&qt(Xe(J));return}if(J=r,F.isUsingPixi){Fe&&B.endFill(),qt(Xe(J));return}V.fillStyle=mt(r)}function qt(r){yt(),B.beginFill(r),Fe=!0}function yt(){Fe&&(B.endFill(),Fe=!1)}function Pt(){ye=J}function Mt(){we(ye)}function Ge(r,i,a,c){if(F.isUsingPixi){F.name==="shape"||F.name==="shapeDark"?B.drawRoundedRect(r,i,a,c,2):B.drawRect(r,i,a,c);return}V.fillRect(r,i,a,c)}function yi(r,i,a,c,h){const p=Xe(J);qt(p),B.drawCircle(r,i,h*.5),B.drawCircle(a,c,h*.5),yt(),B.lineStyle(h,p),B.moveTo(r,i),B.lineTo(a,c),B.lineStyle(0)}function mr(){jt.time+=.2}function En(){if(Ye.fillRect(0,0,$.width,$.height),pt===1)Ye.drawImage(z,($.width-z.width)/2,($.height-z.height)/2);else{const r=z.width*pt,i=z.height*pt;Ye.drawImage(z,($.width-r)/2,($.height-i)/2,r,i)}gcc.capture($)}const le=[`
l
l
l

l
`,`
l l
l l



`,`
 l l
lllll
 l l
lllll
 l l
`,`
 lll
l l
 lll
  l l
 lll
`,`
l   l
l  l
  l
 l  l
l   l
`,`
 l
l l
 ll l
l  l
 ll l
`,`
l
l



`,`
 l
l
l
l
 l
`,`
l
 l
 l
 l
l
`,`
  l
l l l
 lll
l l l
  l
`,`
  l
  l
lllll
  l
  l
`,`



 l
l
`,`


lllll


`,`




l
`,`
    l
   l
  l
 l
l
`,`
 lll
l  ll
l l l
ll  l
 lll
`,`
 ll
l l
  l
  l
lllll
`,`
 lll
l   l
  ll
 l
lllll
`,`
llll
    l
  ll
    l
llll
`,`
  ll
 l l
l  l
lllll
   l
`,`
lllll
l
llll
    l
llll
`,`
 lll
l
llll
l   l
 lll
`,`
lllll
l   l
   l
  l
 l
`,`
 lll
l   l
 lll
l   l
 lll
`,`
 lll
l   l
 llll
    l
 lll
`,`

l

l

`,`

 l

 l
l
`,`
   ll
 ll
l
 ll
   ll
`,`

lllll

lllll

`,`
ll
  ll
    l
  ll
ll
`,`
 lll
l   l
  ll

  l
`,`
 lll
l   l
l lll
l
 lll
`,`
 lll
l   l
lllll
l   l
l   l
`,`
llll
l   l
llll
l   l
llll
`,`
 llll
l
l
l
 llll
`,`
llll
l   l
l   l
l   l
llll
`,`
lllll
l
llll
l
lllll
`,`
lllll
l
llll
l
l
`,`
 lll
l
l  ll
l   l
 llll
`,`
l   l
l   l
lllll
l   l
l   l
`,`
lllll
  l
  l
  l
lllll
`,`
  lll
   l
   l
   l
lll
`,`
l   l
l  l
lll
l  l
l   l
`,`
l
l
l
l
lllll
`,`
l   l
ll ll
l l l
l   l
l   l
`,`
l   l
ll  l
l l l
l  ll
l   l
`,`
 lll
l   l
l   l
l   l
 lll
`,`
llll
l   l
llll
l
l
`,`
 lll
l   l
l   l
l  ll
 llll
`,`
llll
l   l
llll
l   l
l   l
`,`
 llll
l
 lll
    l
llll
`,`
lllll
  l
  l
  l
  l
`,`
l   l
l   l
l   l
l   l
 lll
`,`
l   l
l   l
l   l
 l l
  l
`,`
l   l
l l l
l l l
l l l
 l l
`,`
l   l
 l l
  l
 l l
l   l
`,`
l   l
 l l
  l
  l
  l
`,`
lllll
   l
  l
 l
lllll
`,`
  ll
  l
  l
  l
  ll
`,`
l
 l
  l
   l
    l
`,`
 ll
  l
  l
  l
 ll
`,`
  l
 l l



`,`




lllll
`,`
 l
  l



`,`

 lll
l  l
l  l
 lll
`,`
l
l
lll
l  l
lll
`,`

 lll
l  
l
 lll
`,`
   l
   l
 lll
l  l
 lll
`,`

 ll
l ll
ll
 ll
`,`
  l
 l 
lll
 l
 l
`,`
 ll
l  l
 lll
   l
 ll
`,`
l
l
ll
l l
l l
`,`

l

l
l
`,`
 l

 l
 l
l
`,`
l
l
l l
ll
l l
`,`
ll
 l
 l
 l
lll
`,`

llll
l l l
l l l
l   l
`,`

lll
l  l
l  l
l  l
`,`

 ll
l  l
l  l
 ll
`,`

lll
l  l
lll
l
`,`

 lll
l  l
 lll
   l
`,`

l ll
ll
l
l
`,`

 lll
ll
  ll
lll
`,`

 l
lll
 l
  l
`,`

l  l
l  l
l  l
 lll
`,`

l  l
l  l
 ll
 ll
`,`

l   l
l l l
l l l
 l l
`,`

l  l
 ll
 ll
l  l
`,`

l  l
 ll
 l
l
`,`

llll
  l
 l
llll
`,`
 ll
 l
l
 l
 ll
`,`
l
l
l
l
l
`,`
ll
 l
  l
 l
ll
`,`

 l
l l l
   l

`];let ze,Qe;function xn(){ze=[],Qe=[]}function Pi(){ze=ze.concat(Qe),Qe=[]}function vt(r){let i={isColliding:{rect:{},text:{},char:{}}};return ze.forEach(a=>{In(r,a)&&(i=Object.assign(Object.assign(Object.assign({},i),Ut(a.collision.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},i.isColliding.rect),a.collision.isColliding.rect),text:Object.assign(Object.assign({},i.isColliding.text),a.collision.isColliding.text),char:Object.assign(Object.assign({},i.isColliding.char),a.collision.isColliding.char)}}))}),i}function In(r,i){const a=i.pos.x-r.pos.x,c=i.pos.y-r.pos.y;return-i.size.x<a&&a<r.size.x&&-i.size.y<c&&c<r.size.y}function Ut(r){if(r==null)return{};const i={transparent:"tr",white:"wh",red:"rd",green:"gr",yellow:"yl",blue:"bl",purple:"pr",cyan:"cy",black:"lc"};let a={};return An(r).forEach(([c,h])=>{const p=i[c];h&&p!=null&&(a[p]=!0)}),a}function Mi(r,i,a,c){return bi(!1,r,i,a,c)}function vi(r,i,a,c){return bi(!0,r,i,a,c)}function bi(r,i,a,c,h){if(typeof a=="number"){if(typeof c=="number")return $t(i,a,c,Object.assign({isCharacter:r,isCheckingCollision:!0,color:J},h));throw"invalid params"}else return $t(i,a.x,a.y,Object.assign({isCharacter:r,isCheckingCollision:!0,color:J},c))}const ke=6,bt=1,k=ke*bt;let Si,Ln,_n,Nn=!1,Pe,Ae,St,Vt;const Ze={color:"black",backgroundColor:"transparent",rotation:0,mirror:{x:1,y:1},scale:{x:1,y:1},isCharacter:!1,isCheckingCollision:!1};function pr(){Pe=document.createElement("canvas"),Pe.width=Pe.height=k,Ae=Pe.getContext("2d"),St=document.createElement("canvas"),Vt=St.getContext("2d"),Si=le.map((r,i)=>Object.assign(Object.assign({},wt(r)),{hitBox:tt(String.fromCharCode(33+i),!1)})),Ln=le.map((r,i)=>Object.assign(Object.assign({},wt(r)),{hitBox:tt(String.fromCharCode(33+i),!0)})),_n={}}function et(r,i){const a=i.charCodeAt(0)-33;r.forEach((c,h)=>{Ln[a+h]=Object.assign(Object.assign({},wt(c)),{hitBox:tt(String.fromCharCode(33+a+h),!0)})})}function gr(){Nn=!0}function $t(r,i,a,c={}){const h=kn(c);i-=k/2*h.scale.x,a-=k/2*h.scale.y;const p=Math.floor(i);let v=r,e=p,t=Math.floor(a),n={isColliding:{rect:{},text:{},char:{}}};for(let l=0;l<v.length;l++){const s=v[l];if(s===`
`){e=p,t+=k*h.scale.y;continue}const u=Tn(s,e,t,h);h.isCheckingCollision&&(n={isColliding:{rect:Object.assign(Object.assign({},n.isColliding.rect),u.isColliding.rect),text:Object.assign(Object.assign({},n.isColliding.text),u.isColliding.text),char:Object.assign(Object.assign({},n.isColliding.char),u.isColliding.char)}}),e+=k*h.scale.x}return n}function Tn(r,i,a,c){const h=r.charCodeAt(0);if(h<32||h>126)return{isColliding:{rect:{},text:{},char:{}}};const p=kn(c);if(p.backgroundColor!=="transparent"&&(Pt(),we(p.backgroundColor),Ge(i,a,k*p.scale.x,k*p.scale.y),Mt()),h<=32)return{isColliding:{rect:{},text:{},char:{}}};const v=h-33,e=p.isCharacter?Ln[v]:Si[v],t=re(p.rotation,0,4);if(p.color==="black"&&t===0&&p.mirror.x===1&&p.mirror.y===1&&(!F.isUsingPixi||p.scale.x===1&&p.scale.y===1))return Wt(e,i,a,p.scale,p.isCheckingCollision,!0);const n=JSON.stringify({c:r,options:p}),l=_n[n];if(l!=null)return Wt(l,i,a,p.scale,p.isCheckingCollision,p.color!=="transparent");let s=!1;F.isUsingPixi&&(p.scale.x!==1||p.scale.y!==1)&&(St.width=k*p.scale.x,St.height=k*p.scale.y,Vt.imageSmoothingEnabled=!1,Vt.scale(p.scale.x,p.scale.y),Jt(Vt,t,p,e),s=!0),Ae.clearRect(0,0,k,k),Jt(Ae,t,p,e);const u=tt(r,p.isCharacter);let m;if(Nn||F.isUsingPixi){const y=document.createElement("img");if(y.src=Pe.toDataURL(),F.isUsingPixi){const P=document.createElement("img");P.src=(s?St:Pe).toDataURL(),m=PIXI.Texture.from(P)}Nn&&(_n[n]={image:y,texture:m,hitBox:u})}return Wt({image:Pe,texture:m,hitBox:u},i,a,p.scale,p.isCheckingCollision,p.color!=="transparent")}function Jt(r,i,a,c){i===0&&a.mirror.x===1&&a.mirror.y===1?r.drawImage(c.image,0,0):(r.save(),r.translate(k/2,k/2),r.rotate(Math.PI/2*i),(a.mirror.x===-1||a.mirror.y===-1)&&r.scale(a.mirror.x,a.mirror.y),r.drawImage(c.image,-k/2,-k/2),r.restore()),a.color!=="black"&&(r.globalCompositeOperation="source-in",r.fillStyle=mt(a.color==="transparent"?"black":a.color),r.fillRect(0,0,k,k),r.globalCompositeOperation="source-over")}function Wt(r,i,a,c,h,p){if(p&&(c.x===1&&c.y===1?wi(r,i,a):wi(r,i,a,k*c.x,k*c.y)),!h)return;const v={pos:{x:i+r.hitBox.pos.x*c.x,y:a+r.hitBox.pos.y*c.y},size:{x:r.hitBox.size.x*c.x,y:r.hitBox.size.y*c.y},collision:r.hitBox.collision},e=vt(v);return p&&ze.push(v),e}function wi(r,i,a,c,h){if(F.isUsingPixi){yt(),B.beginTextureFill({texture:r.texture,matrix:new PIXI.Matrix().translate(i,a)}),B.drawRect(i,a,c??k,h??k),qt(Xe(J));return}c==null?V.drawImage(r.image,i,a):V.drawImage(r.image,i,a,c,h)}function wt(r,i=!0){Ae.clearRect(0,0,k,k);let a=r.split(`
`);i&&(a=a.slice(1,a.length-1));let c=0;a.forEach(t=>{c=Math.max(t.length,c)});const h=Math.max(Math.ceil((ke-c)/2),0),p=a.length,v=Math.max(Math.ceil((ke-p)/2),0);a.forEach((t,n)=>{if(!(n+v>=ke))for(let l=0;l<ke-h;l++){const s=t.charAt(l);let u=ur.indexOf(s);s!==""&&u>=1&&(Ae.fillStyle=mt(mi[u]),Ae.fillRect((l+h)*bt,(n+v)*bt,bt,bt))}});const e=document.createElement("img");return e.src=Pe.toDataURL(),F.isUsingPixi?{image:e,texture:PIXI.Texture.from(e)}:{image:e}}function tt(r,i){const a={pos:new G(k,k),size:new G,collision:{isColliding:{char:{},text:{}}}};i?a.collision.isColliding.char[r]=!0:a.collision.isColliding.text[r]=!0;const c=Ae.getImageData(0,0,k,k).data;let h=0;for(let p=0;p<k;p++)for(let v=0;v<k;v++)c[h+3]>0&&(v<a.pos.x&&(a.pos.x=v),p<a.pos.y&&(a.pos.y=p)),h+=4;h=0;for(let p=0;p<k;p++)for(let v=0;v<k;v++)c[h+3]>0&&(v>a.pos.x+a.size.x-1&&(a.size.x=v-a.pos.x+1),p>a.pos.y+a.size.y-1&&(a.size.y=p-a.pos.y+1)),h+=4;return a}function kn(r){let i=Object.assign(Object.assign({},Ze),r);return r.scale!=null&&(i.scale=Object.assign(Object.assign({},Ze.scale),r.scale)),r.mirror!=null&&(i.mirror=Object.assign(Object.assign({},Ze.mirror),r.mirror)),i}let nt=!1,At=!1,L=!1;const Kt=["Escape","Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Enter","ControlLeft","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Backquote","ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","NumpadMultiply","AltLeft","Space","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","Pause","ScrollLock","Numpad7","Numpad8","Numpad9","NumpadSubtract","Numpad4","Numpad5","Numpad6","NumpadAdd","Numpad1","Numpad2","Numpad3","Numpad0","NumpadDecimal","IntlBackslash","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","IntlYen","Undo","Paste","MediaTrackPrevious","Cut","Copy","MediaTrackNext","NumpadEnter","ControlRight","LaunchMail","AudioVolumeMute","MediaPlayPause","MediaStop","Eject","AudioVolumeDown","AudioVolumeUp","BrowserHome","NumpadDivide","PrintScreen","AltRight","Help","NumLock","Pause","Home","ArrowUp","PageUp","ArrowLeft","ArrowRight","End","ArrowDown","PageDown","Insert","Delete","OSLeft","OSRight","ContextMenu","BrowserSearch","BrowserFavorites","BrowserRefresh","BrowserStop","BrowserForward","BrowserBack"];let Rn;const yr={onKeyDown:void 0};let Dn,Xt=!1,Be=!1,Yt=!1,On={},Fn={},Gn={};function zn(r){Dn=Object.assign(Object.assign({},yr),r),Rn=Se(Kt.map(i=>[i,{isPressed:!1,isJustPressed:!1,isJustReleased:!1}])),document.addEventListener("keydown",i=>{Xt=Be=!0,On[i.code]=Fn[i.code]=!0,Dn.onKeyDown!=null&&Dn.onKeyDown(),(i.code==="AltLeft"||i.code==="AltRight"||i.code==="ArrowRight"||i.code==="ArrowDown"||i.code==="ArrowLeft"||i.code==="ArrowUp")&&i.preventDefault()}),document.addEventListener("keyup",i=>{Xt=!1,Yt=!0,On[i.code]=!1,Gn[i.code]=!0})}function Qt(){At=!nt&&Be,L=nt&&Yt,Be=Yt=!1,nt=Xt,An(Rn).forEach(([r,i])=>{i.isJustPressed=!i.isPressed&&Fn[r],i.isJustReleased=i.isPressed&&Gn[r],i.isPressed=!!On[r]}),Fn={},Gn={}}function He(){At=!1,nt=!0}var Ai=Object.freeze({__proto__:null,get isPressed(){return nt},get isJustPressed(){return At},get isJustReleased(){return L},codes:Kt,get code(){return Rn},init:zn,update:Qt,clearJustPressed:He});class Zt{constructor(i=null){this.setSeed(i)}get(i=1,a){return a==null&&(a=i,i=0),this.next()/4294967295*(a-i)+i}getInt(i,a){a==null&&(a=i,i=0);const c=Math.floor(i),h=Math.floor(a);return h===c?c:this.next()%(h-c)+c}getPlusOrMinus(){return this.getInt(2)*2-1}select(i){return i[this.getInt(i.length)]}setSeed(i,a=123456789,c=362436069,h=521288629,p=32){this.w=i!=null?i>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=a>>>0,this.y=c>>>0,this.z=h>>>0;for(let v=0;v<p;v++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const i=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(i^i>>>8))>>>0,this.w}}const Ct=new G;let Ce=!1,Ee=!1,Et=!1,Bn={isDebugMode:!1,anchor:new G,padding:new G,onPointerDownOrUp:void 0},ie,ue,K;const it=new Zt,je=new G,Me=new G;let xt=!1,rt=new G,en=!1,Hn=!1,tn=!1;function jn(r,i,a){K=Object.assign(Object.assign({},Bn),a),ie=r,ue=new G(i.x+K.padding.x*2,i.y+K.padding.y*2),rt.set(ie.offsetLeft+ie.clientWidth*(.5-K.anchor.x),ie.offsetTop+ie.clientWidth*(.5-K.anchor.y)),K.isDebugMode&&je.set(ie.offsetLeft+ie.clientWidth*(.5-K.anchor.x),ie.offsetTop+ie.clientWidth*(.5-K.anchor.y)),document.addEventListener("mousedown",c=>{xi(c.pageX,c.pageY)}),document.addEventListener("touchstart",c=>{xi(c.touches[0].pageX,c.touches[0].pageY)}),document.addEventListener("mousemove",c=>{nn(c.pageX,c.pageY)}),document.addEventListener("touchmove",c=>{c.preventDefault(),nn(c.touches[0].pageX,c.touches[0].pageY)},{passive:!1}),document.addEventListener("mouseup",c=>{Ii()}),document.addEventListener("touchend",c=>{c.preventDefault(),c.target.click(),Ii()},{passive:!1})}function Y(){Ei(rt.x,rt.y,Ct),K.isDebugMode&&!Ct.isInRect(0,0,ue.x,ue.y)?(qn(),Ct.set(je),Ee=!Ce&&xt,Et=Ce&&!xt,Ce=xt):(Ee=!Ce&&Hn,Et=Ce&&tn,Ce=en),Hn=tn=!1}function Ci(){Ee=!1,Ce=!0}function Ei(r,i,a){ie!=null&&(a.x=Math.round(((r-ie.offsetLeft)/ie.clientWidth+K.anchor.x)*ue.x-K.padding.x),a.y=Math.round(((i-ie.offsetTop)/ie.clientHeight+K.anchor.y)*ue.y-K.padding.y))}function qn(){Me.length>0?(je.add(Me),!U(je.x,-ue.x*.1,ue.x*1.1)&&je.x*Me.x>0&&(Me.x*=-1),!U(je.y,-ue.y*.1,ue.y*1.1)&&je.y*Me.y>0&&(Me.y*=-1),it.get()<.05&&Me.set(0)):it.get()<.1&&(Me.set(0),Me.addWithAngle(it.get(Math.PI*2),(ue.x+ue.y)*it.get(.01,.03))),it.get()<.05&&(xt=!xt)}function xi(r,i){rt.set(r,i),en=Hn=!0,K.onPointerDownOrUp!=null&&K.onPointerDownOrUp()}function nn(r,i){rt.set(r,i)}function Ii(r){en=!1,tn=!0,K.onPointerDownOrUp!=null&&K.onPointerDownOrUp()}var Pr=Object.freeze({__proto__:null,pos:Ct,get isPressed(){return Ce},get isJustPressed(){return Ee},get isJustReleased(){return Et},init:jn,update:Y,clearJustPressed:Ci});let he=new G,xe=!1,ve=!1,Re=!1;function Li(r){zn({onKeyDown:r}),jn(z,ge,{onPointerDownOrUp:r,anchor:new G(.5,.5)})}function Un(){Qt(),Y(),he=Ct,xe=nt||Ce,ve=At||Ee,Re=L||Et}function Ie(){He(),Ci()}function ot(r){he.set(r.pos),xe=r.isPressed,ve=r.isJustPressed,Re=r.isJustReleased}var _i=Object.freeze({__proto__:null,get pos(){return he},get isPressed(){return xe},get isJustPressed(){return ve},get isJustReleased(){return Re},init:Li,update:Un,clearJustPressed:Ie,set:ot});let Ni,Ti;const ki=68,Vn=1e3/ki;let It=0;const lt={viewSize:{x:126,y:126},bodyBackground:"#111",viewBackground:"black",isUsingVirtualPad:!0,isFourWaysStick:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,isSoundEnabled:!0,captureCanvasScale:1,theme:{name:"simple",isUsingPixi:!1,isDarkColor:!1}};let ce,rn=10;function Mr(r,i,a){Ni=r,Ti=i,ce=Object.assign(Object.assign({},lt),a),se(ce.theme.isDarkColor),gi(ce.viewSize,ce.bodyBackground,ce.viewBackground,ce.isCapturing,ce.isCapturingGameCanvasOnly,ce.captureCanvasScale,ce.theme),Li(ce.isSoundEnabled?sss.startAudio:()=>{}),pr(),Ni(),De()}function De(){requestAnimationFrame(De);const r=window.performance.now();r<It-ki/12||(It+=Vn,(It<r||It>r+Vn*2)&&(It=r+Vn),ce.isSoundEnabled&&sss.update(),Un(),Ti(),ce.isCapturing&&En(),rn--,rn===0&&gr())}class Ri{constructor(i){this.size=new G,this.size.set(i),this.letterGrid=N(this.size.x).map(()=>N(this.size.y).map(()=>{})),this.colorGrid=N(this.size.x).map(()=>N(this.size.y).map(()=>{})),this.backgroundColorGrid=N(this.size.x).map(()=>N(this.size.y).map(()=>{})),this.rotationGrid=N(this.size.x).map(()=>N(this.size.y).map(()=>{})),this.characterGrid=N(this.size.x).map(()=>N(this.size.y).map(()=>{}))}print(i,a,c,h={}){const p=Object.assign(Object.assign({},Ze),h);let v=Math.floor(a),e=Math.floor(c);const t=v;for(let n=0;n<i.length;n++){const l=i[n];if(l===`
`){v=t,e++;continue}if(v<0||v>=this.size.x||e<0||e>=this.size.y){v++;continue}this.letterGrid[v][e]=l,this.colorGrid[v][e]=p.color,this.backgroundColorGrid[v][e]=p.backgroundColor,this.rotationGrid[v][e]=p.rotation,this.characterGrid[v][e]=p.isCharacter,v++}}getCharAt(i,a){if(i<0||i>=this.size.x||a<0||a>=this.size.y)return;const c=Math.floor(i),h=Math.floor(a),p=this.letterGrid[c][h],v=this.colorGrid[c][h],e=this.backgroundColorGrid[c][h],t=this.rotationGrid[c][h],n=this.characterGrid[c][h];return{char:p,options:{color:v,backgroundColor:e,rotation:t,isCharacter:n}}}setCharAt(i,a,c,h){if(i<0||i>=this.size.x||a<0||a>=this.size.y)return;const p=Object.assign(Object.assign({},Ze),h),v=Math.floor(i),e=Math.floor(a);this.letterGrid[v][e]=c,this.colorGrid[v][e]=p.color,this.backgroundColorGrid[v][e]=p.backgroundColor,this.rotationGrid[v][e]=p.rotation,this.characterGrid[v][e]=p.isCharacter}draw(){for(let i=0;i<this.size.x;i++)for(let a=0;a<this.size.y;a++){const c=this.letterGrid[i][a];if(c==null)continue;const h=this.colorGrid[i][a],p=this.backgroundColorGrid[i][a],v=this.rotationGrid[i][a],e=this.characterGrid[i][a];Tn(c,i*k,a*k,{color:h,backgroundColor:p,rotation:v,isCharacter:e})}}clear(){for(let i=0;i<this.size.x;i++)for(let a=0;a<this.size.y;a++)this.letterGrid[i][a]=this.colorGrid[i][a]=this.backgroundColorGrid[i][a]=this.rotationGrid[i][a]=this.characterGrid[i][a]=void 0}scrollUp(){for(let a=0;a<this.size.x;a++)for(let c=1;c<this.size.y;c++)this.letterGrid[a][c-1]=this.letterGrid[a][c],this.colorGrid[a][c-1]=this.colorGrid[a][c],this.backgroundColorGrid[a][c-1]=this.backgroundColorGrid[a][c],this.rotationGrid[a][c-1]=this.rotationGrid[a][c],this.characterGrid[a][c-1]=this.characterGrid[a][c];const i=this.size.y-1;for(let a=0;a<this.size.x;a++)this.letterGrid[a][i]=this.colorGrid[a][i]=this.backgroundColorGrid[a][i]=this.rotationGrid[a][i]=this.characterGrid[a][i]=void 0}getState(){return{charGrid:this.letterGrid.map(i=>[].concat(i)),colorGrid:this.colorGrid.map(i=>[].concat(i)),backgroundColorGrid:this.backgroundColorGrid.map(i=>[].concat(i)),rotationGrid:this.rotationGrid.map(i=>[].concat(i)),symbolGrid:this.characterGrid.map(i=>[].concat(i))}}setState(i){this.letterGrid=i.charGrid.map(a=>[].concat(a)),this.colorGrid=i.colorGrid.map(a=>[].concat(a)),this.backgroundColorGrid=i.backgroundColorGrid.map(a=>[].concat(a)),this.rotationGrid=i.rotationGrid.map(a=>[].concat(a)),this.characterGrid=i.symbolGrid.map(a=>[].concat(a))}}let Lt;const on=new Zt;function ln(){Lt=[]}function Di(r,i=16,a=1,c=0,h=Math.PI*2){if(i<1){if(on.get()>i)return;i=1}for(let p=0;p<i;p++){const v=c+on.get(h)-h/2,e={pos:new G(r),vel:new G(a*on.get(.5,1),0).rotate(v),color:J,ticks:C(on.get(10,20)*Math.sqrt(Math.abs(a)),10,60)};Lt.push(e)}}function an(){Pt(),Lt=Lt.filter(r=>(r.ticks--,r.ticks<0?!1:(r.pos.add(r.vel),r.vel.mul(.98),we(r.color),Ge(Math.floor(r.pos.x),Math.floor(r.pos.y),1,1),!0))),Mt()}function sn(r,i,a,c){return Oi(!1,r,i,a,c)}function qe(r,i,a,c){return Oi(!0,r,i,a,c)}function vr(r,i,a,c,h=.5,p=.5){typeof r!="number"&&(p=h,h=c,c=a,a=i,i=r.y,r=r.x);const v=new G(a).rotate(h),e=new G(r-v.x*p,i-v.y*p);return cn(e,v,c)}function br(r,i,a=3,c=3,h=3){const p=new G,v=new G;if(typeof r=="number")if(typeof i=="number")typeof a=="number"?(p.set(r,i),v.set(a,c)):(p.set(r,i),v.set(a),h=c);else throw"invalid params";else if(typeof i=="number")if(typeof a=="number")p.set(r),v.set(i,a),h=c;else throw"invalid params";else if(typeof a=="number")p.set(r),v.set(i),h=a;else throw"invalid params";return cn(p,v.sub(p),h)}function Sr(r,i,a,c,h,p){let v=new G;typeof r=="number"?v.set(r,i):(v.set(r),p=h,h=c,c=a,a=i),c==null&&(c=3),h==null&&(h=0),p==null&&(p=Math.PI*2);let e,t;if(h>p?(e=p,t=h-p):(e=h,t=p-h),t=C(t,0,Math.PI*2),t<.01)return;const n=C(Math.ceil(t*Math.sqrt(a*.25)),1,36),l=t/n;let s=e,u=new G(a).rotate(s).add(v),m=new G,y=new G,P={isColliding:{rect:{},text:{},char:{}}};for(let S=0;S<n;S++){s+=l,m.set(a).rotate(s).add(v),y.set(m).sub(u);const E=cn(u,y,c,!0);P=Object.assign(Object.assign(Object.assign({},P),Ut(E.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},P.isColliding.rect),E.isColliding.rect),text:Object.assign(Object.assign({},P.isColliding.text),E.isColliding.text),char:Object.assign(Object.assign({},P.isColliding.char),E.isColliding.char)}}),u.set(m)}return Pi(),P}function Oi(r,i,a,c,h){if(typeof i=="number"){if(typeof a=="number")return typeof c=="number"?h==null?Ue(r,i,a,c,c):Ue(r,i,a,c,h):Ue(r,i,a,c.x,c.y);throw"invalid params"}else if(typeof a=="number"){if(c==null)return Ue(r,i.x,i.y,a,a);if(typeof c=="number")return Ue(r,i.x,i.y,a,c);throw"invalid params"}else return Ue(r,i.x,i.y,a.x,a.y)}function cn(r,i,a,c=!1){let h=!0;(F.name==="shape"||F.name==="shapeDark")&&(J!=="transparent"&&yi(r.x,r.y,r.x+i.x,r.y+i.y,a),h=!1);const p=Math.floor(C(a,3,10)),v=Math.abs(i.x),e=Math.abs(i.y),t=C(Math.ceil(v>e?v/p:e/p)+1,3,99);i.div(t-1);let n={isColliding:{rect:{},text:{},char:{}}};for(let l=0;l<t;l++){const s=Ue(!0,r.x,r.y,a,a,!0,h);n=Object.assign(Object.assign(Object.assign({},n),Ut(s.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},n.isColliding.rect),s.isColliding.rect),text:Object.assign(Object.assign({},n.isColliding.text),s.isColliding.text),char:Object.assign(Object.assign({},n.isColliding.char),s.isColliding.char)}}),r.add(i)}return c||Pi(),n}function Ue(r,i,a,c,h,p=!1,v=!0){let e=v;(F.name==="shape"||F.name==="shapeDark")&&e&&J!=="transparent"&&(r?Ge(i-c/2,a-h/2,c,h):Ge(i,a,c,h),e=!1);let t=r?{x:Math.floor(i-c/2),y:Math.floor(a-h/2)}:{x:Math.floor(i),y:Math.floor(a)};const n={x:Math.trunc(c),y:Math.trunc(h)};if(n.x===0||n.y===0)return{isColliding:{rect:{},text:{},char:{}}};n.x<0&&(t.x+=n.x,n.x*=-1),n.y<0&&(t.y+=n.y,n.y*=-1);const l={pos:t,size:n,collision:{isColliding:{rect:{}}}};l.collision.isColliding.rect[J]=!0;const s=vt(l);return J!=="transparent"&&((p?Qe:ze).push(l),e&&Ge(t.x,t.y,n.x,n.y)),s}function $n({pos:r,size:i,text:a,isToggle:c=!1,onClick:h=()=>{}}){return{pos:r,size:i,text:a,isToggle:c,onClick:h,isPressed:!1,isSelected:!1,isHovered:!1,toggleGroup:[]}}function Jn(r){const i=new G(he).sub(r.pos);r.isHovered=i.isInRect(0,0,r.size.x,r.size.y),r.isHovered&&Ee&&(r.isPressed=!0),r.isPressed&&!r.isHovered&&(r.isPressed=!1),r.isPressed&&Et&&(r.onClick(),r.isPressed=!1,r.isToggle&&(r.toggleGroup.length===0?r.isSelected=!r.isSelected:(r.toggleGroup.forEach(a=>{a.isSelected=!1}),r.isSelected=!0))),un(r)}function un(r){Pt(),we(r.isPressed?"blue":"light_blue"),sn(r.pos.x,r.pos.y,r.size.x,r.size.y),r.isToggle&&!r.isSelected&&(we("white"),sn(r.pos.x+1,r.pos.y+1,r.size.x-2,r.size.y-2)),we(r.isHovered?"black":"blue"),Mi(r.text,r.pos.x+3,r.pos.y+3),Mt()}let be,Ve,me,Wn;function Kn(r){be={randomSeed:r,inputs:[]}}function wr(r){be.inputs.push(r)}function Fi(){return be!=null}function Ar(r){Ve=0,r.setSeed(be.randomSeed)}function Cr(){Ve>=be.inputs.length||(ot(be.inputs[Ve]),Ve++)}function Er(){me=[]}function xr(r,i,a){me.push({randomState:a.getState(),gameState:cloneDeep(r),baseState:cloneDeep(i)})}function Ir(r){const i=me.pop(),a=i.randomState;return r.setSeed(a.w,a.x,a.y,a.z,0),Wn={pos:new G(he),isPressed:xe,isJustPressed:ve,isJustReleased:Re},ot(be.inputs.pop()),i}function Lr(r){const i=me[me.length-1],a=i.randomState;return r.setSeed(a.w,a.x,a.y,a.z,0),Wn={pos:new G(he),isPressed:xe,isJustPressed:ve,isJustReleased:Re},ot(be.inputs[be.inputs.length-1]),i}function Gi(){ot(Wn)}function _t(){return me.length===0}function _r(){const r=Ve-1;if(!(r>=be.inputs.length))return me[r]}const Nr=Math.PI,Tr=Math.abs,kr=Math.sin,Xn=Math.cos,Rr=Math.atan2,fn=Math.sqrt,Nt=Math.pow,dn=Math.floor,Dr=Math.round,Or=Math.ceil;d.ticks=0,d.difficulty=void 0,d.score=0,d.time=void 0,d.isReplaying=!1;function Fr(r=1,i){return Le.get(r,i)}function Gr(r=2,i){return Le.getInt(r,i)}function zr(r=1,i){return Le.get(r,i)*Le.getPlusOrMinus()}function Yn(r="GAME OVER"){Ot=r,at&&(d.time=void 0),oi()}function Br(r="COMPLETE"){Ot=r,oi()}function Hr(r,i,a){if(d.isReplaying||(d.score+=r,i==null))return;const c=`${r>=1?"+":""}${Math.floor(r)}`;let h=new G;typeof i=="number"?h.set(i,a):h.set(i),h.x-=c.length*k/2,h.y-=k/2,kt.push({str:c,pos:h,vy:-2,ticks:30})}function Qn(r){we(r)}function jr(r,i,a,c,h,p){let v=new G;typeof r=="number"?(v.set(r,i),Di(v,a,c,h,p)):(v.set(r),Di(v,i,a,c,h))}function zi(r,i){return new G(r,i)}function $e(r,i){!Rt&&!We&&Ne&&(i!=null&&typeof sss.playSoundEffect=="function"?sss.playSoundEffect(r,i):sss.play(Ur[r]))}let Zn;function hn(){typeof sss.generateMml=="function"?Zn=sss.playMml(sss.generateMml()):sss.playBgm()}function mn(){Zn!=null&&sss.stopMml(Zn),sss.stopBgm()}function qr(r){if(Rt){const i=Lr(Le),a=i.baseState;return d.score=a.score,d.ticks=a.ticks,cloneDeep(i.gameState)}else if(We){const i=Ir(Le),a=i.baseState;return d.score=a.score,d.ticks=a.ticks,i.gameState}else{if(d.isReplaying)return _r().gameState;if(Je==="inGame"){const i={score:d.score,ticks:d.ticks};xr(r,i,Le)}}return r}function fe(){We||(!d.isReplaying&&Pn?Ui():Yn())}const Ur={coin:"c",laser:"l",explosion:"e",powerUp:"p",hit:"h",jump:"j",select:"s",lucky:"u",random:"r",click:"i",synth:"y",tone:"t"},Bi={isPlayingBgm:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,captureCanvasScale:1,isShowingScore:!0,isShowingTime:!1,isReplayEnabled:!1,isRewindEnabled:!1,isDrawingParticleFront:!1,isDrawingScoreFront:!1,isMinifying:!1,isSoundEnabled:!0,viewSize:{x:100,y:100},seed:0,theme:"simple"},Vr=new Zt,Le=new Zt;let Je,$r={title:ri,inGame:ii,gameOver:Kr,rewind:Xr},ae,ei=0,pn,gn=!0,yn=0,_e,Tt,ti,at,st,Pn,ct,ni,Ne,Te,kt,Rt=!1,We=!1,Dt,Mn,Ot,vn;function Ft(r){const i=window;i.update=r.update,i.title=r.title,i.description=r.description,i.characters=r.characters,i.options=r.options,Hi()}function Hi(){let r;typeof options<"u"&&options!=null?r=Object.assign(Object.assign({},Bi),options):r=Bi;const i={name:r.theme,isUsingPixi:!1,isDarkColor:!1};r.theme!=="simple"&&r.theme!=="dark"&&(i.isUsingPixi=!0),(r.theme==="pixel"||r.theme==="shapeDark"||r.theme==="crt"||r.theme==="dark")&&(i.isDarkColor=!0),_e={viewSize:{x:100,y:100},bodyBackground:i.isDarkColor?"#101010":"#e0e0e0",viewBackground:i.isDarkColor?"blue":"white",theme:i,isSoundEnabled:r.isSoundEnabled},yn=r.seed,_e.isCapturing=r.isCapturing,_e.isCapturingGameCanvasOnly=r.isCapturingGameCanvasOnly,_e.captureCanvasScale=r.captureCanvasScale,_e.viewSize=r.viewSize,Tt=r.isPlayingBgm,ti=r.isShowingScore&&!r.isShowingTime,at=r.isShowingTime,st=r.isReplayEnabled,Pn=r.isRewindEnabled,ct=r.isDrawingParticleFront,ni=r.isDrawingScoreFront,Ne=r.isSoundEnabled,r.isMinifying&&Yr(),Mr(Jr,Wr,_e)}function Jr(){typeof description<"u"&&description!=null&&description.trim().length>0&&(gn=!1,yn+=q(description)),typeof title<"u"&&title!=null&&title.trim().length>0&&(gn=!1,document.title=title,yn+=q(title)),typeof characters<"u"&&characters!=null&&et(characters,"a"),Ne&&sss.init(yn);const r=_e.viewSize;Te={x:Math.floor(r.x/6),y:Math.floor(r.y/6)},ae=new Ri(Te),we("black"),gn?(ji(),d.ticks=0):qi()}function Wr(){d.df=d.difficulty=d.ticks/3600+1,d.tc=d.ticks;const r=d.score,i=d.time;d.sc=d.score;const a=d.sc;d.inp={p:he,ip:xe,ijp:ve,ijr:Re},xn(),$r[Je](),F.isUsingPixi&&(yt(),F.name==="crt"&&mr()),d.ticks++,d.isReplaying?(d.score=r,d.time=i):d.sc!==a&&(d.score=d.sc)}function ji(){Je="inGame",d.ticks=-1,ln();const r=Math.floor(d.score);r>ei&&(ei=r),at&&d.time!=null&&(pn==null||pn>d.time)&&(pn=d.time),d.score=0,d.time=0,kt=[],Tt&&Ne&&hn();const i=Vr.getInt(999999999);Le.setSeed(i),(st||Pn)&&(Kn(i),Er(),d.isReplaying=!1)}function ii(){ae.clear(),gt(),ct||an(),ni||Ji(),(st||Pn)&&wr({pos:zi(he),isPressed:xe,isJustPressed:ve,isJustReleased:Re}),typeof update=="function"&&update(),ct&&an(),ni&&Ji(),ai(),ae.draw(),at&&d.time!=null&&d.time++}function qi(){Je="title",d.ticks=-1,ln(),ae.clear(),gt(),Fi()&&(Ar(Le),d.isReplaying=!0)}function ri(){if(ve){ji();return}if(gt(),st&&Fi()&&(Cr(),d.inp={p:he,ip:xe,ijp:ve,ijr:Re},ct||an(),update(),ct&&an()),d.ticks===0&&(ai(),typeof title<"u"&&title!=null&&ae.print(title,Math.floor(Te.x-title.length)/2,Math.ceil(Te.y*.2))),(d.ticks===30||d.ticks==40)&&typeof description<"u"&&description!=null){let r=0;description.split(`
`).forEach(a=>{a.length>r&&(r=a.length)});const i=Math.floor((Te.x-r)/2);description.split(`
`).forEach((a,c)=>{ae.print(a,i,Math.floor(Te.y/2)+c)})}ae.draw()}function oi(){Je="gameOver",d.isReplaying||Ie(),d.ticks=-1,li(),Tt&&Ne&&mn()}function Kr(){(d.isReplaying||d.ticks>20)&&ve?ji():d.ticks===(st?120:300)&&!gn&&qi()}function li(){d.isReplaying||(ae.print(Ot,Math.floor((Te.x-Ot.length)/2),Math.floor(Te.y/2)),ae.draw())}function Ui(){Je="rewind",Rt=!0,Dt=$n({pos:{x:ge.x-39,y:11},size:{x:36,y:7},text:"Rewind"}),Mn=$n({pos:{x:ge.x-39,y:ge.y-19},size:{x:36,y:7},text:"GiveUp"}),Tt&&Ne&&mn(),F.isUsingPixi&&(un(Dt),un(Mn))}function Xr(){ae.clear(),gt(),update(),ai(),Gi(),We?(un(Dt),(_t()||!xe)&&Vi()):(Jn(Dt),Jn(Mn),Dt.isPressed&&(We=!0,Rt=!1)),Mn.isPressed?(Rt=We=!1,Yn()):ae.draw(),at&&d.time!=null&&d.time++}function Vi(){We=!1,Je="inGame",ln(),Tt&&Ne&&hn()}function ai(){if(ti){ae.print(`${Math.floor(d.score)}`,0,0);const r=`HI ${ei}`;ae.print(r,Te.x-r.length,0)}at&&($i(d.time,0,0),$i(pn,9,0))}function $i(r,i,a){if(r==null)return;let c=Math.floor(r*100/50);c>=10*60*100&&(c=10*60*100-1);const h=si(Math.floor(c/6e3),1)+"'"+si(Math.floor(c%6e3/100),2)+'"'+si(Math.floor(c%100),2);ae.print(h,i,a)}function si(r,i){return("0000"+r).slice(-i)}function Ji(){Pt(),we("black"),kt=kt.filter(r=>($t(r.str,r.pos.x,r.pos.y),r.pos.y+=r.vy,r.vy*=.9,r.ticks--,r.ticks>0)),Mt()}function q(r){let i=0;for(let a=0;a<r.length;a++){const c=r.charCodeAt(a);i=(i<<5)-i+c,i|=0}return i}function Wi(){let r=window.location.search.substring(1);if(r=r.replace(/[^A-Za-z0-9_-]/g,""),r.length===0)return;const i=document.createElement("script");vn=`${r}/main.js`,i.setAttribute("src",vn),document.head.appendChild(i)}function Yr(){fetch(vn).then(r=>r.text()).then(r=>{const i=Terser.minify(r+"update();",{toplevel:!0}).code,a="function(){",c=i.indexOf(a),h="options={",p=i.indexOf(h);let v=i;if(c>=0)v=i.substring(i.indexOf(a)+a.length,i.length-4);else if(p>=0){let e=1,t;for(let n=p+h.length;n<i.length;n++){const l=i.charAt(n);if(l==="{")e++;else if(l==="}"&&(e--,e===0)){t=n+2;break}}e===0&&(v=i.substring(t))}er.forEach(([e,t])=>{v=v.split(e).join(t)}),console.log(v),console.log(`${v.length} letters`)})}d.inp=void 0;function Qr(...r){return Qn.apply(this,r)}function Zr(...r){return $e.apply(this,r)}function eo(...r){return I.apply(this,r)}function ci(...r){return ne.apply(this.args)}d.tc=void 0,d.df=void 0,d.sc=void 0;const to="transparent",no="white",Ki="red",io="green",Gt="yellow",Xi="blue",ui="purple",zt="cyan",ut="black",ro="coin",Yi="laser",oo="explosion",lo="powerUp",ao="hit",Qi="jump",Zi="select",so="lucky";let er=[["===","=="],["!==","!="],["input.pos","inp.p"],["input.isPressed","inp.ip"],["input.isJustPressed","inp.ijp"],["input.isJustReleased","inp.ijr"],["color(","clr("],["play(","ply("],["times(","tms("],["remove(","rmv("],["ticks","tc"],["difficulty","df"],["score","sc"],[".isColliding.rect.transparent",".tr"],[".isColliding.rect.white",".wh"],[".isColliding.rect.red",".rd"],[".isColliding.rect.green",".gr"],[".isColliding.rect.yellow",".yl"],[".isColliding.rect.blue",".bl"],[".isColliding.rect.purple",".pr"],[".isColliding.rect.cyan",".cy"],[".isColliding.rect.black",".lc"],['"transparent"',"tr"],['"white"',"wh"],['"red"',"rd"],['"green"',"gr"],['"yellow"',"yl"],['"blue"',"bl"],['"purple"',"pr"],['"cyan"',"cy"],['"black"',"lc"],['"coin"',"cn"],['"laser"',"ls"],['"explosion"',"ex"],['"powerUp"',"pw"],['"hit"',"ht"],['"jump"',"jm"],['"select"',"sl"],['"lucky"',"uc"]];d.PI=Nr,d.abs=Tr,d.addGameScript=Wi,d.addScore=Hr,d.addWithCharCode=cr,d.arc=Sr,d.atan2=Rr,d.bar=vr,d.bl=Xi,d.box=qe,d.ceil=Or,d.char=vi,d.clamp=C,d.clr=Qr,d.cn=ro,d.color=Qn,d.complete=Br,d.cos=Xn,d.cy=zt,d.end=Yn,d.ex=oo,d.floor=dn,d.frameState=qr,d.getButton=$n,d.gr=io,d.ht=ao,d.init=Ft,d.input=_i,d.jm=Qi,d.keyboard=Ai,d.lc=ut,d.line=br,d.ls=Yi,d.minifyReplaces=er,d.onLoad=Hi,d.particle=jr,d.play=$e,d.playBgm=hn,d.ply=Zr,d.pointer=Pr,d.pow=Nt,d.pr=ui,d.pw=lo,d.range=N,d.rd=Ki,d.rect=sn,d.remove=ne,d.rewind=fe,d.rmv=ci,d.rnd=Fr,d.rndi=Gr,d.rnds=zr,d.round=Dr,d.sin=kr,d.sl=Zi,d.sqrt=fn,d.stopBgm=mn,d.text=Mi,d.times=I,d.tms=eo,d.tr=to,d.uc=so,d.updateButton=Jn,d.vec=zi,d.wh=no,d.wrap=re,d.yl=Gt})(window||{});window.sss||(window.sss=Fo);const Go="SPACE SK8TR",zo=`[TAP ON GROUND] JUMP

[TAP IN AIR] STOP MOMENTUM/MOVE DOWN`,O={WIDTH:250,HEIGHT:150,ENEMY_SPAWN_TIME:60,ENEMY_SPEED_MIN:.5,ENEMY_SPEED_MAX:1,BREEZE_SPEED_MIN:.01,BREEZE_SPEED_MAX:.3,MAX_GAME_SPEED:3,GAME_SPEED_INCREMENT:1/200,JUMP_POWER:2.5,GRAVITY_MULTIPLIER:.5,INERTIA_DRAG:.1,DEBUG_MODE:!1},Bo=[`
rrrrrr
rryryr
rrrrrr
r   r
r   r
rr  rr
`,`
rrrrrr
rryryr
rrrrrr
r   r
rr  rr
`,`
rrrrrr
rrrrrr
rryryr
rrrrrr
r   r
rr  rr
`,`
bbbbbb
bbbbbb
bb  bb
`,`
g g
 g 
g g
`,`
 g
ggg
 g
`,`
lllll
lYYYl
 lYl
  l
`,`
LLL
LYL
 L
`,`
llllll
lrrrrl
lrPPrl
lrPPrl
lrrrrl
llllll
`,`
llllll
`,`
l
`,`
 L
L L
 L
`];let j,So,uo,te,ir,rr,or=0,Ho=3,fo=0,lr=0,jo=30,ho=0,qo=2,ar=1,Ao=8,mo=Ao,Oe=1,Sn=0,ft=0,po=0,hi=!1,wn=!1,sr=!0,go=!1;function Uo(d,C){return d.x<C.x+6&&d.x+6>C.x&&d.y<C.y+6&&d.y+6>C.y}function Vo(){ticks||(j={playerPosition:vec(O.WIDTH*.25,O.HEIGHT*.5),animationFrames:3,currentAnimationFrame:1,animationTime:15,currentAnimationTime:0,playerSpeed:10,playerVelocity:0,playerVelocityAcceleration:0},uo=[],te=vec(j.playerPosition.x,j.playerPosition.y+4),ir=vec(te.x-3,te.y+1),rr=vec(te.x+2,te.y+1),So=times(60,()=>{const C=rnd(0,O.WIDTH),re=rnd(0,O.HEIGHT);let U="";const N=rndi(1,100);return N>30?U="k":N<25?U="j":U="k",{breezePosition:vec(C,re),breezeSpeed:rnd(O.BREEZE_SPEED_MIN,O.BREEZE_SPEED_MAX),breezeLook:U}})),So.forEach(C=>{C.breezePosition.x-=C.breezeSpeed*Oe,C.breezePosition.wrap(0,O.WIDTH,0,O.HEIGHT),char(C.breezeLook,C.breezePosition)});for(let C=0;C<floor(O.WIDTH/6)+2;C+=1)char("g",vec(3+6*C-or,O.HEIGHT*.5+9));let d=0;for(let C=0;C<floor(O.WIDTH/4)+2;C+=1)C%6==0&&(C>(floor(O.WIDTH/4)+2)/2?d-=1:d+=1),char("h",vec(-3+4*C+lr,O.HEIGHT*.5+15+d));if(input.isJustPressed&&!wn&&!hi&&(hi=!0,go?(play("explosion",{freq:1.2}),color("light_black"),particle(te.x,te.y+3,10,1.5,-PI/2,PI/4),color("black"),ft=-O.JUMP_POWER):(go=!0,play("hit",{pitch:.8}),color("light_black"),particle(te.x,te.y+3,10,1.5,0,2*PI),color("black"),ft=0)),input.isJustPressed&&wn&&!hi&&(hi=!0,play("explosion",{freq:.8}),color("light_black"),particle(te.x,te.y+3,10,1.5,PI/2,PI/4),color("black"),ft=O.JUMP_POWER),Sn-=ft,wn||(ft-=O.INERTIA_DRAG*O.GRAVITY_MULTIPLIER),O.HEIGHT*.5+Sn>=O.HEIGHT*.5?(wn=!0,go=!1,Sn=0,ft=0,sr||(sr=!0,play("coin"),color("light_black"),particle(te.x,te.y+3,10,1.5,PI/2,PI),color("black"))):(sr=!1,wn=!1),O.HEIGHT*.5+Sn<=0+5&&(ft=-O.INERTIA_DRAG*O.GRAVITY_MULTIPLIER),j.playerPosition.set(j.playerPosition.x,O.HEIGHT*.5+Sn),input.isJustReleased&&(hi=!1),te=vec(j.playerPosition.x,j.playerPosition.y+4),ir=vec(te.x-3,te.y+1),rr=vec(te.x+2,te.y+1),j.currentAnimationFrame==1?char("a",j.playerPosition):j.currentAnimationFrame==2?char("b",j.playerPosition):j.currentAnimationFrame==3?char("c",j.playerPosition):j.currentAnimationFrame==4&&char("d",j.playerPosition),char("d",te),ar==1?(char("e",ir),char("e",rr)):(char("f",ir),char("f",rr)),fo-=1*Oe,fo<=0&&(fo=Ho,or+=1,or>=6&&(or=0)),ho-=1*Oe,ho<=0&&(ho=jo,lr+=1,lr>=5&&(lr=0)),mo-=1*Oe,mo<=0&&(mo=Ao,ar+=1,ar>qo&&(ar=1)),j.currentAnimationTime-=1*Oe,j.currentAnimationTime<=0&&(j.currentAnimationTime=j.animationTime,j.currentAnimationFrame+=1,j.currentAnimationFrame>j.animationFrames&&(addScore(1),Oe<O.MAX_GAME_SPEED?Oe+=O.GAME_SPEED_INCREMENT:Oe=O.MAX_GAME_SPEED,j.currentAnimationFrame=1)),po-=1*(Oe/1.5),po<=0){po=O.ENEMY_SPAWN_TIME;const C=O.WIDTH+3;let re=rnd(0,O.HEIGHT/2+3);rndi(1,3)==1&&(re=rnd(O.HEIGHT/2-3,O.HEIGHT/2+3));const U=rnd(O.ENEMY_SPEED_MIN,O.ENEMY_SPEED_MAX)*Oe;uo.push({enemyPosition:vec(C,re),enemySpeed:U})}remove(uo,C=>(C.enemyPosition.x-=C.enemySpeed,char("i",C.enemyPosition),Uo(j.playerPosition,C.enemyPosition)&&(end(),Sn=0,ft=0,wn=!0,sr=!0,play("laser")),C.enemyPosition.x<0-3))}init({update:Vo,title:Go,description:zo,characters:Bo,options:{viewSize:{x:O.WIDTH,y:O.HEIGHT},theme:"dark",isPlayingBgm:!0}});
