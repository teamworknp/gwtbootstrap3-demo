$wnd.GwtBootstrap3Demo.runAsyncCallback40("function aSc(){}\nfunction eSc(){}\nfunction gSc(){}\nfunction hSc(){hSc=whb;dSc=new gSc}\nfunction hwc(a){Ryb.call(this,a);gwc(this)}\nfunction _Rc(){$Jb.call(this);YJb(this,bSc(new cSc))}\nfunction VRc(a,b,c){kJb();IJb.call(this,a,b,c,(Dwc(),Cwc))}\nfunction cSc(){this.a=(new eSc,hSc(),dSc);fSc(this.a)}\nfunction XWc(a){var b;if(!a.M){b=new _Rc(new aSc);a.M=b}return a.M}\nfunction WWc(a){var b;if(!a.L){b=new VRc(LIb(nKb(a.a)),XWc(a),VWc(a));cJb((qKb(a.a),b),CKb(qKb(a.a)));a.L=b}return a.L}\nfunction fSc(a){if(!a.a){a.a=true;ex((qD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction bSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new Q5b;f_b(a,(b=new C1b(KLd),f_b(b,(c=new u4b,c.a='Offline',t4b(c),c)),f_b(b,(d=new p0b,f_b(d,(e=new o2b((sec(),pec)),Alb((Wsb(),e.eb),'GPBYFDEFM',true),vwc(e.b,RRd),g_b(e,e.b,0),e)),f_b(d,new pwc((j=new sQb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new qjb(j.a)).a)),f_b(d,(f=new f1c,F5b(f,(k=new sQb,k.a+=SRd,new qjb(k.a)).a),Alb(f.eb,PLd,true),f)),f_b(d,new pwc((l=new sQb,l.a+=TRd,new qjb(l.a)).a)),f_b(d,(g=new f1c,F5b(g,(m=new sQb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new qjb(m.a)).a),Alb(g.eb,PLd,true),g)),Alb(d.eb,'GPBYFDEEM',true),d)),f_b(b,(h=new H4b,f_b(h,(n=new W4b,f_b(n,(o=new o2b(oec),vwc(o.b,'What is Offline?'),g_b(o,o.b,0),o)),n)),f_b(h,(p=new J4b,f_b(p,new hwc((q=new sQb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new qjb(q.a)).a)),p)),f_b(h,new T4b),h)),f_b(b,(i=new H4b,f_b(i,(r=new W4b,f_b(r,(s=new o2b(oec),vwc(s.b,'How to configure?'),g_b(s,s.b,0),s)),r)),f_b(i,(t=new J4b,f_b(t,new pwc((u=new sQb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new qjb(u.a)).a)),f_b(t,(v=new f1c,F5b(v,(w=new sQb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new qjb(w.a)).a),Alb(v.eb,PLd,true),v)),f_b(t,new pwc((A=new sQb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new qjb(A.a)).a)),f_b(t,(B=new f1c,F5b(B,(C=new sQb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new qjb(C.a)).a),Alb(B.eb,PLd,true),B)),f_b(t,new pwc((D=new sQb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new qjb(D.a)).a)),f_b(t,(F=new f1c,F5b(F,(G=new sQb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new qjb(G.a)).a),Alb(F.eb,PLd,true),F)),t)),f_b(i,new T4b),i)),b));return a}\nvhb(405,231,wId,hwc);vhb(972,44,JId,VRc);var $5=IOb(BLd,'OfflinePresenter',972);vhb(1210,47,KId,_Rc);var d6=IOb(BLd,'OfflineView',1210);vhb(1481,1,{},aSc);var c6=IOb(BLd,'OfflineView_BinderImpl',1481);vhb(1482,1,{},cSc);var _5=IOb(BLd,'OfflineView_BinderImpl/Widgets',1482);vhb(1831,1,{},eSc);var dSc;var b6=IOb(BLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1831);vhb(1832,1,{},gSc);_.a=false;var a6=IOb(BLd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1832);vhb(894,1,XKd);_.Sb=function wXc(){VLb(this.b,WWc(this.a.a))};fGd(Oo)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
