$wnd.GwtBootstrap3Demo.runAsyncCallback40("function mSc(){}\nfunction qSc(){}\nfunction sSc(){}\nfunction tSc(){tSc=ihb;pSc=new sSc}\nfunction twc(a){Gyb.call(this,a);swc(this)}\nfunction lSc(){BJb.call(this);zJb(this,nSc(new oSc))}\nfunction fSc(a,b,c){NIb();jJb.call(this,a,b,c,(Pwc(),Owc))}\nfunction oSc(){this.a=(new qSc,tSc(),pSc);rSc(this.a)}\nfunction xXc(a){var b;if(!a.M){b=new lSc(new mSc);a.M=b}return a.M}\nfunction wXc(a){var b;if(!a.L){b=new fSc(mIb(QJb(a.a)),xXc(a),vXc(a));FIb((TJb(a.a),b),dKb(TJb(a.a)));a.L=b}return a.L}\nfunction rSc(a){if(!a.a){a.a=true;ax((dD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction nSc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new q5b;I$b(a,(b=new c1b(EMd),I$b(b,(c=new W3b,c.a='Offline',V3b(c),c)),I$b(b,(d=new R_b,I$b(d,(e=new Q1b((Wdc(),Tdc)),mlb((Msb(),e.eb),'GPBYFDEFM',true),Hwc(e.b,JSd),J$b(e,e.b,0),e)),I$b(d,new Bwc((j=new VPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new cjb(j.a)).a)),I$b(d,(f=new H1c,f5b(f,(k=new VPb,k.a+=KSd,new cjb(k.a)).a),mlb(f.eb,JMd,true),f)),I$b(d,new Bwc((l=new VPb,l.a+=LSd,new cjb(l.a)).a)),I$b(d,(g=new H1c,f5b(g,(m=new VPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new cjb(m.a)).a),mlb(g.eb,JMd,true),g)),mlb(d.eb,'GPBYFDEEM',true),d)),I$b(b,(h=new h4b,I$b(h,(n=new w4b,I$b(n,(o=new Q1b(Sdc),Hwc(o.b,'What is Offline?'),J$b(o,o.b,0),o)),n)),I$b(h,(p=new j4b,I$b(p,new twc((q=new VPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new cjb(q.a)).a)),p)),I$b(h,new t4b),h)),I$b(b,(i=new h4b,I$b(i,(r=new w4b,I$b(r,(s=new Q1b(Sdc),Hwc(s.b,'How to configure?'),J$b(s,s.b,0),s)),r)),I$b(i,(t=new j4b,I$b(t,new Bwc((u=new VPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new cjb(u.a)).a)),I$b(t,(v=new H1c,f5b(v,(w=new VPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new cjb(w.a)).a),mlb(v.eb,JMd,true),v)),I$b(t,new Bwc((A=new VPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new cjb(A.a)).a)),I$b(t,(B=new H1c,f5b(B,(C=new VPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new cjb(C.a)).a),mlb(B.eb,JMd,true),B)),I$b(t,new Bwc((D=new VPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new cjb(D.a)).a)),I$b(t,(F=new H1c,f5b(F,(G=new VPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new cjb(G.a)).a),mlb(F.eb,JMd,true),F)),t)),I$b(i,new t4b),i)),b));return a}\nhhb(408,232,rJd,twc);hhb(1009,44,CJd,fSc);var E5=jOb(uMd,'OfflinePresenter',1009);hhb(1247,47,DJd,lSc);var J5=jOb(uMd,'OfflineView',1247);hhb(1524,1,{},mSc);var I5=jOb(uMd,'OfflineView_BinderImpl',1524);hhb(1525,1,{},oSc);var F5=jOb(uMd,'OfflineView_BinderImpl/Widgets',1525);hhb(1872,1,{},qSc);var pSc;var H5=jOb(uMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1872);hhb(1873,1,{},sSc);_.a=false;var G5=jOb(uMd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1873);hhb(931,1,QLd);_.Sb=function YXc(){wLb(this.b,wXc(this.a.a))};$Gd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
