$wnd.GwtBootstrap3Demo.runAsyncCallback40("function bMc(){}\nfunction fMc(){}\nfunction hMc(){}\nfunction iMc(){iMc=cdb;eMc=new hMc}\nfunction Hrc(a){wub.call(this,a);Grc(this)}\nfunction aMc(){HFb.call(this);FFb(this,cMc(new dMc))}\nfunction WLc(a,b,c){TEb();pFb.call(this,a,b,c,(bsc(),asc))}\nfunction dMc(){this.a=(new fMc,iMc(),eMc);gMc(this.a)}\nfunction EQc(a){var b;if(!a.M){b=new aMc(new bMc);a.M=b}return a.M}\nfunction DQc(a){var b;if(!a.L){b=new WLc(sEb(WFb(a.a)),EQc(a),CQc(a));LEb((ZFb(a.a),b),jGb(ZFb(a.a)));a.L=b}return a.L}\nfunction gMc(a){if(!a.a){a.a=true;bv((eB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction cMc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new s1b;NWb(a,(b=new eZb(lyd),NWb(b,(c=new Y_b,c.a='Offline',X_b(c),c)),NWb(b,(d=new TXb,NWb(d,(e=new SZb((S9b(),P9b)),fhb((Bob(),e.eb),'GPBYFDECM',true),Vrc(e.b,wEd),OWb(e,e.b,0),e)),NWb(d,new Prc((j=new $Lb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Yeb(j.a)).a)),NWb(d,(f=new GWc,h1b(f,(k=new $Lb,k.a+=xEd,new Yeb(k.a)).a),fhb(f.eb,qyd,true),f)),NWb(d,new Prc((l=new $Lb,l.a+=yEd,new Yeb(l.a)).a)),NWb(d,(g=new GWc,h1b(g,(m=new $Lb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Yeb(m.a)).a),fhb(g.eb,qyd,true),g)),fhb(d.eb,'GPBYFDEBM',true),d)),NWb(b,(h=new j0b,NWb(h,(n=new y0b,NWb(n,(o=new SZb(O9b),Vrc(o.b,'What is Offline?'),OWb(o,o.b,0),o)),n)),NWb(h,(p=new l0b,NWb(p,new Hrc((q=new $Lb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Yeb(q.a)).a)),p)),NWb(h,new v0b),h)),NWb(b,(i=new j0b,NWb(i,(r=new y0b,NWb(r,(s=new SZb(O9b),Vrc(s.b,'How to configure?'),OWb(s,s.b,0),s)),r)),NWb(i,(t=new l0b,NWb(t,new Prc((u=new $Lb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Yeb(u.a)).a)),NWb(t,(v=new GWc,h1b(v,(w=new $Lb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Yeb(w.a)).a),fhb(v.eb,qyd,true),v)),NWb(t,new Prc((A=new $Lb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Yeb(A.a)).a)),NWb(t,(B=new GWc,h1b(B,(C=new $Lb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Yeb(C.a)).a),fhb(B.eb,qyd,true),B)),NWb(t,new Prc((D=new $Lb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Yeb(D.a)).a)),NWb(t,(F=new GWc,h1b(F,(G=new $Lb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Yeb(G.a)).a),fhb(F.eb,qyd,true),F)),t)),NWb(i,new v0b),i)),b));return a}\nbdb(401,230,zwd,Hrc);bdb(961,49,gvd,WLc);var V2=oKb(byd,'OfflinePresenter',961);bdb(1195,53,hvd,aMc);var $2=oKb(byd,'OfflineView',1195);bdb(1428,1,{},bMc);var Z2=oKb(byd,'OfflineView_BinderImpl',1428);bdb(1429,1,{},dMc);var W2=oKb(byd,'OfflineView_BinderImpl/Widgets',1429);bdb(1772,1,{},fMc);var eMc;var Y2=oKb(byd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1772);bdb(1773,1,{},hMc);_.a=false;var X2=oKb(byd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1773);bdb(885,1,zxd);_.Sb=function aRc(){CHb(this.b,DQc(this.a.a))};Gsd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
