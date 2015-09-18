$wnd.GwtBootstrap3Demo.runAsyncCallback39("function YGc(){}\nfunction aHc(){}\nfunction cHc(){}\nfunction dHc(){dHc=O8;_Gc=new cHc}\nfunction Xmc(a){Ypb.call(this,a);Wmc(this)}\nfunction XGc(){uBb.call(this);sBb(this,ZGc(new $Gc))}\nfunction RGc(a,b,c){GAb();cBb.call(this,a,b,c,(qnc(),pnc))}\nfunction $Gc(){this.a=(new aHc,dHc(),_Gc);bHc(this.a)}\nfunction WKc(a){var b;if(!a.I){b=new XGc(new YGc);a.I=b}return a.I}\nfunction VKc(a){var b;if(!a.H){b=new RGc(fAb(JBb(a.a)),WKc(a),UKc(a));yAb((MBb(a.a),b),YBb(MBb(a.a)));a.H=b}return a.H}\nfunction bHc(a){if(!a.a){a.a=true;Du((oA(),'.GPBYFDEOL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEPL{margin-top:0 !important;}.GPBYFDEAM{margin-left:5px;}'));return true}return false}\nfunction ZGc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new PYb;CSb(a,(b=new QUb(Mmd),CSb(b,(c=new BXb,c.a='Offline',AXb(c),c)),CSb(b,(d=new DTb,CSb(d,(e=new AVb((B5b(),y5b)),Rcb((fkb(),e.db),'GPBYFDEPL',true),inc(e.b,Zsd),DSb(e,e.b,0),e)),CSb(d,new cnc((j=new SHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Iab(j.a)).a)),CSb(d,(f=new TQc,EYb(f,(k=new SHb,k.a+=$sd,new Iab(k.a)).a),Rcb(f.db,Rmd,true),f)),CSb(d,new cnc((l=new SHb,l.a+=_sd,new Iab(l.a)).a)),CSb(d,(g=new TQc,EYb(g,(m=new SHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Iab(m.a)).a),Rcb(g.db,Rmd,true),g)),Rcb(d.db,'GPBYFDEOL',true),d)),CSb(b,(h=new OXb,CSb(h,(n=new bYb,CSb(n,(o=new AVb(x5b),inc(o.b,'What is Offline?'),DSb(o,o.b,0),o)),n)),CSb(h,(p=new QXb,CSb(p,new Xmc((q=new SHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Iab(q.a)).a)),p)),CSb(h,new $Xb),h)),CSb(b,(i=new OXb,CSb(i,(r=new bYb,CSb(r,(s=new AVb(x5b),inc(s.b,'How to configure?'),DSb(s,s.b,0),s)),r)),CSb(i,(t=new QXb,CSb(t,new cnc((u=new SHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Iab(u.a)).a)),CSb(t,(v=new TQc,EYb(v,(w=new SHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Iab(w.a)).a),Rcb(v.db,Rmd,true),v)),CSb(t,new cnc((A=new SHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Iab(A.a)).a)),CSb(t,(B=new TQc,EYb(B,(C=new SHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Iab(C.a)).a),Rcb(B.db,Rmd,true),B)),CSb(t,new cnc((D=new SHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Iab(D.a)).a)),CSb(t,(F=new TQc,EYb(F,(G=new SHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Iab(G.a)).a),Rcb(F.db,Rmd,true),F)),t)),CSb(i,new $Xb),i)),b));return a}\nN8(385,220,_kd,Xmc);N8(898,48,Mjd,RGc);var W_=hGb(zmd,'OfflinePresenter',898);N8(1131,51,Njd,XGc);var __=hGb(zmd,'OfflineView',1131);N8(1356,1,{},YGc);var $_=hGb(zmd,'OfflineView_BinderImpl',1356);N8(1357,1,{},$Gc);var X_=hGb(zmd,'OfflineView_BinderImpl/Widgets',1357);N8(1687,1,{},aHc);var _Gc;var Z_=hGb(zmd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1687);N8(1688,1,{},cHc);_.a=false;var Y_=hGb(zmd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1688);N8(823,1,Zld);_.Ob=function tMc(){vDb(this.b,VKc(this.a.a))};uhd(mm)(39);\n//# sourceURL=GwtBootstrap3Demo-39.js\n")
