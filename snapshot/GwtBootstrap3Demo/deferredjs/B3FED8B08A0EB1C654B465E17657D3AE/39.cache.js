$wnd.GwtBootstrap3Demo.runAsyncCallback39("function EGc(){}\nfunction IGc(){}\nfunction KGc(){}\nfunction LGc(){LGc=u8;HGc=new KGc}\nfunction Dmc(a){Epb.call(this,a);Cmc(this)}\nfunction DGc(){aBb.call(this);$Ab(this,FGc(new GGc))}\nfunction xGc(a,b,c){mAb();KAb.call(this,a,b,c,(Ymc(),Xmc))}\nfunction GGc(){this.a=(new IGc,LGc(),HGc);JGc(this.a)}\nfunction CKc(a){var b;if(!a.I){b=new DGc(new EGc);a.I=b}return a.I}\nfunction BKc(a){var b;if(!a.H){b=new xGc(Nzb(pBb(a.a)),CKc(a),AKc(a));eAb((sBb(a.a),b),EBb(sBb(a.a)));a.H=b}return a.H}\nfunction JGc(a){if(!a.a){a.a=true;Du((fA(),'.GPBYFDEOL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEPL{margin-top:0 !important;}.GPBYFDEAM{margin-left:5px;}'));return true}return false}\nfunction FGc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new vYb;iSb(a,(b=new wUb(rmd),iSb(b,(c=new hXb,c.a='Offline',gXb(c),c)),iSb(b,(d=new jTb,iSb(d,(e=new gVb((h5b(),e5b)),xcb((Njb(),e.db),'GPBYFDEPL',true),Qmc(e.b,Esd),jSb(e,e.b,0),e)),iSb(d,new Kmc((j=new yHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new oab(j.a)).a)),iSb(d,(f=new zQc,kYb(f,(k=new yHb,k.a+=Fsd,new oab(k.a)).a),xcb(f.db,wmd,true),f)),iSb(d,new Kmc((l=new yHb,l.a+=Gsd,new oab(l.a)).a)),iSb(d,(g=new zQc,kYb(g,(m=new yHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new oab(m.a)).a),xcb(g.db,wmd,true),g)),xcb(d.db,'GPBYFDEOL',true),d)),iSb(b,(h=new uXb,iSb(h,(n=new JXb,iSb(n,(o=new gVb(d5b),Qmc(o.b,'What is Offline?'),jSb(o,o.b,0),o)),n)),iSb(h,(p=new wXb,iSb(p,new Dmc((q=new yHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new oab(q.a)).a)),p)),iSb(h,new GXb),h)),iSb(b,(i=new uXb,iSb(i,(r=new JXb,iSb(r,(s=new gVb(d5b),Qmc(s.b,'How to configure?'),jSb(s,s.b,0),s)),r)),iSb(i,(t=new wXb,iSb(t,new Kmc((u=new yHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new oab(u.a)).a)),iSb(t,(v=new zQc,kYb(v,(w=new yHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new oab(w.a)).a),xcb(v.db,wmd,true),v)),iSb(t,new Kmc((A=new yHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new oab(A.a)).a)),iSb(t,(B=new zQc,kYb(B,(C=new yHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new oab(C.a)).a),xcb(B.db,wmd,true),B)),iSb(t,new Kmc((D=new yHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new oab(D.a)).a)),iSb(t,(F=new zQc,kYb(F,(G=new yHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new oab(G.a)).a),xcb(F.db,wmd,true),F)),t)),iSb(i,new GXb),i)),b));return a}\nt8(385,220,Gkd,Dmc);t8(899,48,sjd,xGc);var C_=PFb(emd,'OfflinePresenter',899);t8(1132,51,tjd,DGc);var H_=PFb(emd,'OfflineView',1132);t8(1357,1,{},EGc);var G_=PFb(emd,'OfflineView_BinderImpl',1357);t8(1358,1,{},GGc);var D_=PFb(emd,'OfflineView_BinderImpl/Widgets',1358);t8(1686,1,{},IGc);var HGc;var F_=PFb(emd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1686);t8(1687,1,{},KGc);_.a=false;var E_=PFb(emd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1687);t8(824,1,Eld);_.Ob=function _Lc(){bDb(this.b,BKc(this.a.a))};ahd(mm)(39);\n//# sourceURL=GwtBootstrap3Demo-39.js\n")
