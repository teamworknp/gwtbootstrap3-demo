$wnd.GwtBootstrap3Demo.runAsyncCallback40("function JMc(){}\nfunction NMc(){}\nfunction PMc(){}\nfunction QMc(){QMc=Ydb;MMc=new PMc}\nfunction nsc(a){tvb.call(this,a);msc(this)}\nfunction IMc(){oGb.call(this);mGb(this,KMc(new LMc))}\nfunction CMc(a,b,c){AFb();YFb.call(this,a,b,c,(Jsc(),Isc))}\nfunction LMc(){this.a=(new NMc,QMc(),MMc);OMc(this.a)}\nfunction kRc(a){var b;if(!a.M){b=new IMc(new JMc);a.M=b}return a.M}\nfunction jRc(a){var b;if(!a.L){b=new CMc(_Eb(DGb(a.a)),kRc(a),iRc(a));sFb((GGb(a.a),b),SGb(GGb(a.a)));a.L=b}return a.L}\nfunction OMc(a){if(!a.a){a.a=true;_u((AB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction KMc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new $1b;uXb(a,(b=new MZb(Tyd),uXb(b,(c=new E0b,c.a='Offline',D0b(c),c)),uXb(b,(d=new zYb,uXb(d,(e=new y$b((yac(),vac)),_hb((zpb(),e.eb),'GPBYFDECM',true),Bsc(e.b,aFd),vXb(e,e.b,0),e)),uXb(d,new vsc((j=new HMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Sfb(j.a)).a)),uXb(d,(f=new mXc,P1b(f,(k=new HMb,k.a+=bFd,new Sfb(k.a)).a),_hb(f.eb,Yyd,true),f)),uXb(d,new vsc((l=new HMb,l.a+=cFd,new Sfb(l.a)).a)),uXb(d,(g=new mXc,P1b(g,(m=new HMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Sfb(m.a)).a),_hb(g.eb,Yyd,true),g)),_hb(d.eb,'GPBYFDEBM',true),d)),uXb(b,(h=new R0b,uXb(h,(n=new e1b,uXb(n,(o=new y$b(uac),Bsc(o.b,'What is Offline?'),vXb(o,o.b,0),o)),n)),uXb(h,(p=new T0b,uXb(p,new nsc((q=new HMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Sfb(q.a)).a)),p)),uXb(h,new b1b),h)),uXb(b,(i=new R0b,uXb(i,(r=new e1b,uXb(r,(s=new y$b(uac),Bsc(s.b,'How to configure?'),vXb(s,s.b,0),s)),r)),uXb(i,(t=new T0b,uXb(t,new vsc((u=new HMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Sfb(u.a)).a)),uXb(t,(v=new mXc,P1b(v,(w=new HMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Sfb(w.a)).a),_hb(v.eb,Yyd,true),v)),uXb(t,new vsc((A=new HMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Sfb(A.a)).a)),uXb(t,(B=new mXc,P1b(B,(C=new HMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Sfb(C.a)).a),_hb(B.eb,Yyd,true),B)),uXb(t,new vsc((D=new HMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Sfb(D.a)).a)),uXb(t,(F=new mXc,P1b(F,(G=new HMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Sfb(G.a)).a),_hb(F.eb,Yyd,true),F)),t)),uXb(i,new b1b),i)),b));return a}\nXdb(402,230,fxd,nsc);Xdb(961,49,Ovd,CMc);var P3=XKb(Jyd,'OfflinePresenter',961);Xdb(1195,53,Pvd,IMc);var U3=XKb(Jyd,'OfflineView',1195);Xdb(1430,1,{},JMc);var T3=XKb(Jyd,'OfflineView_BinderImpl',1430);Xdb(1431,1,{},LMc);var Q3=XKb(Jyd,'OfflineView_BinderImpl/Widgets',1431);Xdb(1775,1,{},NMc);var MMc;var S3=XKb(Jyd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1775);Xdb(1776,1,{},PMc);_.a=false;var R3=XKb(Jyd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1776);Xdb(885,1,fyd);_.Sb=function IRc(){jIb(this.b,jRc(this.a.a))};mtd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
