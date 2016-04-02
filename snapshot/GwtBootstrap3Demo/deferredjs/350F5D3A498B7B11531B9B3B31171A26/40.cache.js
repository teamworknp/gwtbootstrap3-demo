$wnd.GwtBootstrap3Demo.runAsyncCallback40("function uRc(){}\nfunction yRc(){}\nfunction ARc(){}\nfunction BRc(){BRc=ahb;xRc=new ARc}\nfunction Bvc(a){yyb.call(this,a);Avc(this)}\nfunction tRc(){tJb.call(this);rJb(this,vRc(new wRc))}\nfunction nRc(a,b,c){FIb();bJb.call(this,a,b,c,(Xvc(),Wvc))}\nfunction wRc(){this.a=(new yRc,BRc(),xRc);zRc(this.a)}\nfunction pWc(a){var b;if(!a.M){b=new tRc(new uRc);a.M=b}return a.M}\nfunction oWc(a){var b;if(!a.L){b=new nRc(eIb(IJb(a.a)),pWc(a),nWc(a));xIb((LJb(a.a),b),XJb(LJb(a.a)));a.L=b}return a.L}\nfunction zRc(a){if(!a.a){a.a=true;bx((eD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction vRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new i5b;A$b(a,(b=new W0b(bLd),A$b(b,(c=new O3b,c.a='Offline',N3b(c),c)),A$b(b,(d=new J_b,A$b(d,(e=new I1b((Mdc(),Jdc)),elb((Esb(),e.eb),'GPBYFDEFM',true),Pvc(e.b,gRd),B$b(e,e.b,0),e)),A$b(d,new Jvc((j=new NPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Wib(j.a)).a)),A$b(d,(f=new z0c,Z4b(f,(k=new NPb,k.a+=hRd,new Wib(k.a)).a),elb(f.eb,gLd,true),f)),A$b(d,new Jvc((l=new NPb,l.a+=iRd,new Wib(l.a)).a)),A$b(d,(g=new z0c,Z4b(g,(m=new NPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Wib(m.a)).a),elb(g.eb,gLd,true),g)),elb(d.eb,'GPBYFDEEM',true),d)),A$b(b,(h=new _3b,A$b(h,(n=new o4b,A$b(n,(o=new I1b(Idc),Pvc(o.b,'What is Offline?'),B$b(o,o.b,0),o)),n)),A$b(h,(p=new b4b,A$b(p,new Bvc((q=new NPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Wib(q.a)).a)),p)),A$b(h,new l4b),h)),A$b(b,(i=new _3b,A$b(i,(r=new o4b,A$b(r,(s=new I1b(Idc),Pvc(s.b,'How to configure?'),B$b(s,s.b,0),s)),r)),A$b(i,(t=new b4b,A$b(t,new Jvc((u=new NPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Wib(u.a)).a)),A$b(t,(v=new z0c,Z4b(v,(w=new NPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Wib(w.a)).a),elb(v.eb,gLd,true),v)),A$b(t,new Jvc((A=new NPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Wib(A.a)).a)),A$b(t,(B=new z0c,Z4b(B,(C=new NPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Wib(C.a)).a),elb(B.eb,gLd,true),B)),A$b(t,new Jvc((D=new NPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Wib(D.a)).a)),A$b(t,(F=new z0c,Z4b(F,(G=new NPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Wib(G.a)).a),elb(F.eb,gLd,true),F)),t)),A$b(i,new l4b),i)),b));return a}\n_gb(406,231,RHd,Bvc);_gb(974,44,aId,nRc);var E5=bOb(UKd,'OfflinePresenter',974);_gb(1212,47,bId,tRc);var J5=bOb(UKd,'OfflineView',1212);_gb(1485,1,{},uRc);var I5=bOb(UKd,'OfflineView_BinderImpl',1485);_gb(1486,1,{},wRc);var F5=bOb(UKd,'OfflineView_BinderImpl/Widgets',1486);_gb(1832,1,{},yRc);var xRc;var H5=bOb(UKd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1832);_gb(1833,1,{},ARc);_.a=false;var G5=bOb(UKd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1833);_gb(896,1,oKd);_.Sb=function QWc(){oLb(this.b,oWc(this.a.a))};zFd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
