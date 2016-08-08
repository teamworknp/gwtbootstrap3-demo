$wnd.GwtBootstrap3Demo.runAsyncCallback40("function xTc(){}\nfunction BTc(){}\nfunction DTc(){}\nfunction ETc(){ETc=gib;ATc=new DTc}\nfunction Exc(a){Izb.call(this,a);Dxc(this)}\nfunction wTc(){LKb.call(this);JKb(this,yTc(new zTc))}\nfunction qTc(a,b,c){XJb();tKb.call(this,a,b,c,($xc(),Zxc))}\nfunction zTc(){this.a=(new BTc,ETc(),ATc);CTc(this.a)}\nfunction IYc(a){var b;if(!a.M){b=new wTc(new xTc);a.M=b}return a.M}\nfunction HYc(a){var b;if(!a.L){b=new qTc(wJb($Kb(a.a)),IYc(a),GYc(a));PJb((bLb(a.a),b),nLb(bLb(a.a)));a.L=b}return a.L}\nfunction CTc(a){if(!a.a){a.a=true;ax((DD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction yTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new B6b;S_b(a,(b=new n2b(RNd),S_b(b,(c=new f5b,c.a='Offline',e5b(c),c)),S_b(b,(d=new a1b,S_b(d,(e=new _2b((ffc(),cfc)),omb((Otb(),e.eb),'GPBYFDEFM',true),Sxc(e.b,UTd),T_b(e,e.b,0),e)),S_b(d,new Mxc((j=new dRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new ekb(j.a)).a)),S_b(d,(f=new S2c,q6b(f,(k=new dRb,k.a+=VTd,new ekb(k.a)).a),omb(f.eb,WNd,true),f)),S_b(d,new Mxc((l=new dRb,l.a+=WTd,new ekb(l.a)).a)),S_b(d,(g=new S2c,q6b(g,(m=new dRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new ekb(m.a)).a),omb(g.eb,WNd,true),g)),omb(d.eb,'GPBYFDEEM',true),d)),S_b(b,(h=new s5b,S_b(h,(n=new H5b,S_b(n,(o=new _2b(bfc),Sxc(o.b,'What is Offline?'),T_b(o,o.b,0),o)),n)),S_b(h,(p=new u5b,S_b(p,new Exc((q=new dRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new ekb(q.a)).a)),p)),S_b(h,new E5b),h)),S_b(b,(i=new s5b,S_b(i,(r=new H5b,S_b(r,(s=new _2b(bfc),Sxc(s.b,'How to configure?'),T_b(s,s.b,0),s)),r)),S_b(i,(t=new u5b,S_b(t,new Mxc((u=new dRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new ekb(u.a)).a)),S_b(t,(v=new S2c,q6b(v,(w=new dRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new ekb(w.a)).a),omb(v.eb,WNd,true),v)),S_b(t,new Mxc((A=new dRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new ekb(A.a)).a)),S_b(t,(B=new S2c,q6b(B,(C=new dRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new ekb(C.a)).a),omb(B.eb,WNd,true),B)),S_b(t,new Mxc((D=new dRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new ekb(D.a)).a)),S_b(t,(F=new S2c,q6b(F,(G=new dRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new ekb(G.a)).a),omb(F.eb,WNd,true),F)),t)),S_b(i,new E5b),i)),b));return a}\nfib(408,232,DKd,Exc);fib(1007,44,PKd,qTc);var C6=tPb(HNd,'OfflinePresenter',1007);fib(1245,47,QKd,wTc);var H6=tPb(HNd,'OfflineView',1245);fib(1522,1,{},xTc);var G6=tPb(HNd,'OfflineView_BinderImpl',1522);fib(1523,1,{},zTc);var D6=tPb(HNd,'OfflineView_BinderImpl/Widgets',1523);fib(1872,1,{},BTc);var ATc;var F6=tPb(HNd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1872);fib(1873,1,{},DTc);_.a=false;var E6=tPb(HNd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1873);fib(929,1,bNd);_.Sb=function hZc(){GMb(this.b,HYc(this.a.a))};jId(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
