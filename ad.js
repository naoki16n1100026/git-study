var PROXY_DIRECT="DIRECT";var DIRECT="DIRECT";var BLACK="PROXY 8.8.8.8:53";var WHITE=PROXY_DIRECT;function s(u,r){return shExpMatch(u,r);}function d(h,r){return dnsDomainIs(h,r);}function n(h,r,m){return isInNet(h,r,m);}function e(u){var h;if(u.indexOf("://")>-1){h=u.split('/')[2];}else{h=u.split('/')[0];}h=h.split(':')[0];var s=h.split('.').reverse();return s;}function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();var a=e(u);var b=a[0];var c=a[1];var f=c.length;var t=c[f-1];var z=c[f-2];if(d(host,"LO99Z0.configtest.wl.is")){return"PROXY 5.9.40.99:80";}if(d(h,"wl.is")||d(h,"weblockapp.com")){return PROXY_DIRECT;}if(b=="com"){if(t=="3"){if(d(h,"wafmedia3.com")||d(h,"admtpmp123.com"))return BLACK;}if(t=="2"){if(d(h,"aimg.fc2.com")||d(h,"adshost2.com")||d(h,"affiliate.fc2.com"))return BLACK;}if(t=="4"){if(d(h,"clk1004.com")||d(h,"admtpmp124.com"))return BLACK;}if(t=="a"){if(z=="i"){if(d(h,"engine.a.redditmedia.com")||d(h,"vdopia.com")||d(h,"wigetmedia.com")||d(h,"amazemobilemedia.com")||d(h,"tremormedia.com")||d(h,"xtendmedia.com")||d(h,"cdn.millennialmedia.com")||d(h,"lfstmedia.com")||d(h,"andomedia.com")||d(h,"conversantmedia.com"))return BLACK;}else if(z=="v"){if(d(h,"adelva.com")||d(h,"kochava.com")||d(h,"mojiva.com"))return BLACK;}else if(d(h,"atemda.com")||d(h,"adtoma.com")||d(h,"bnmla.com")||d(h,"atwola.com")||d(h,"komoona.com")||d(h,"eclkmpsa.com")||d(h,"transpera.com")||d(h,"atedra.com")||d(h,"admeta.com")||d(h,"plista.com")||d(h,"de17a.com")||d(h,"videoplaza.com"))return BLACK;}if(t=="c"){if(z=="i"){if(d(h,"cxpublic.com")||d(h,"pubmatic.com")||d(h,"adsymptotic.com"))return BLACK;}else if(d(h,"contentabc.com")||d(h,"adztec.com"))return BLACK;}if(t=="b"){if(z=="a"){if(d(h,"crosspromo.zeptolab.com")||d(h,"bms.zeptolab.com")||d(h,"asp.animelab.com"))return BLACK;}else if(z=="u"){if(!s(u,"*filmon*")&&d(h,"mopub.com")||d(h,"tremorhub.com")||d(h,"m2pub.com"))return BLACK;}else if(z=="e"){if(d(h,"ucweb.com")||d(h,"ox\u002Dd.advanceweb.com")||d(h,"sa.entireweb.com"))return BLACK;}else if(z=="o"){if(d(h,"admob.com")||d(h,"hot\u002Dmob.com")||d(h,"revmob.com"))return BLACK;}}if(t=="e"){if(z=="c"){if(d(h,"startappservice.com")||d(h,"valuecommerce.com")||d(h,"delivery.trafficforce.com")||d(h,"adnetworkperformance.com")||d(h,"widespace.com"))return BLACK;}else if(z=="b"){if(d(h,"delivery.brokerbabe.com")||d(h,"youtube.com")&&s(u,"*/_get_ads*")||d(h,"adotube.com"))return BLACK;}else if(z=="g"){if(d(h,"bounceexchange.com")||s(u,"*admax*")&&d(h,"nexage.com")||d(h,"tradeadexchange.com")||d(h,"startappexchange.com"))return BLACK;}else if(z=="s"){if(d(h,"adinfuse.com")||d(h,"mobilefuse.com")||d(h,"openxenterprise.com")||d(h,"adhese.com")||d(h,"postrelease.com")||d(h,"uauniverse.com")||d(h,"trafficposse.com")||d(h,"clickfuse.com")||d(h,"cxense.com"))return BLACK;}else if(z=="v"){if(d(h,"adsnative.com")||d(h,"quantserve.com")||d(h,"swrve.com")||d(h,"inner\u002Dactive.com")||d(h,"pushnative.com")||d(h,"advertserve.com")||d(h,"redirectnative.com"))return BLACK;}else if(d(h,"amobee.com")||d(h,"adblade.com")||d(h,"lockerdome.com")||d(h,"ad4game.com")||d(h,"vungle.com")||d(h,"admngronline.com")||d(h,"madsone.com")||d(h,"greystripe.com")||d(h,"omniture.com")||d(h,"awempire.com")||d(h,"pubdirecte.com"))return BLACK;}if(t=="d"){if(z=="a"){if(d(h,"ximad.com")&&s(u,"*/ad3/*")||d(h,"brucelead.com")||d(h,"opt.ximad.com")||d(h,"mediamixad.com")||d(h,"amoad.com")||d(h,"exit\u002Dad.com")||d(h,"tapatalk.com")&&s(u,"*get_ad.php*")||d(h,"medibaad.com")||d(h,"sbs\u002Dad.com")||d(h,"fam\u002Dad.com")||d(h,"sprout\u002Dad.com")||d(h,"dotandad.com")||d(h,"bead\u002Dad.com"))return BLACK;}else if(z=="i"){if(d(h,"mgid.com")||s(u,"*watchcartoononline*")&&d(h,"algovid.com")||d(h,"innovid.com"))return BLACK;}else if(d(h,"adspeed.com")||d(h,"360yield.com")||d(h,"appflood.com")||d(h,"unityads.unity3d.com")||d(h,"untd.com"))return BLACK;}if(t=="g"){if(z=="n"){if(d(h,"bnserving.com")||d(h,"cold\u002Dcold\u002Dfreezing.com")||d(h,"billytesting.com")||d(h,"flashtalking.com")||d(h,"mobileapptracking.com")||d(h,"advertising.com")||d(h,"integral\u002Dmarketing.com"))return BLACK;}else if(d(h,"mathtag.com")||d(h,"trafmag.com"))return BLACK;}if(t=="i"){if(z=="b"){if(d(h,"zumobi.com")||d(h,"inmobi.com")||d(h,"bebi.com"))return BLACK;}else if(d(h,"insightexpressai.com")||d(h,"cdn.media.amp.avai.com")||d(h,"san\u002Dni\u002Dichi.com")||d(h,"dotomi.com")||d(h,"upsight\u002Dapi.com")||d(h,"mobusi.com"))return BLACK;}if(t=="h"){if(z=="c"){if(d(h,"scorecardresearch.com")||d(h,"clmbtech.com")||d(h,"adinch.com")||d(h,"aimatch.com")||d(h,"adnotch.com"))return BLACK;}else if(z=="s"){if(d(h,"europacash.com")||d(h,"airpush.com")||d(h,"adcash.com"))return BLACK;}else if(d(h,"adbooth.com")||d(h,"sharethrough.com"))return BLACK;}if(t=="k"){if(d(h,"iconpeak.com")||d(h,"ackak.com")||d(h,"exoclick.com")||d(h,"openclick.com")||d(h,"adapi.addealsnetwork.com")||d(h,"adzerk.com"))return BLACK;}if(t=="m"){if(z=="e"){if(d(h,"c.amazon\u002Dadsystem.com")||d(h,"s.amazon\u002Dadsystem.com")||d(h,"api.unthem.com")||d(h,"aax\u002Deu.amazon\u002Dadsystem.com")||d(h,"aax\u002Dus\u002Deast.amazon\u002Dadsystem.com")||d(h,"ir\u002Dna.amazon\u002Dadsystem.com")||d(h,"unthem.com")||d(h,"aax\u002Dus\u002Dpdx.amazon\u002Dadsystem.com")||d(h,"dra.amazon\u002Dadsystem.com")||d(h,"aax.amazon\u002Dadsystem.com"))return BLACK;}else if(d(h,"redtram.com")||d(h,"socdm.com")||d(h,"epom.com")||d(h,"sessionm.com")||d(h,"ad131m.com")||d(h,"ad120m.com")||d(h,"crittercism.com")||d(h,"ad132m.com")||d(h,"gumgum.com")||d(h,"adnium.com")||d(h,"mdotm.com")||d(h,"ad127m.com")||d(h,"adcel.vrvm.com")||d(h,"castplatform.com")||d(h,"adform.com"))return BLACK;}if(t=="l"){if(z=="a"){if(d(h,"ad.prismamediadigital.com")||d(h,"appodeal.com")||d(h,"exponential.com")||d(h,"adversal.com"))return BLACK;}else if(z=="l"){if(d(h,"btrll.com")||d(h,"adroll.com")||d(h,"misterbell.com")||d(h,"brightroll.com"))return BLACK;}else if(d(h,"mixpanel.com")||d(h,"padsdel.com")||d(h,"liverail.com")||d(h,"adwhirl.com")||d(h,"projectwonderful.com"))return BLACK;}if(t=="o"){if(z=="e"){if(d(h,"criteo.com")||d(h,"veeseo.com")||d(h,"wbdds.jeuxvideo.com"))return BLACK;}else if(z=="o"){if(d(h,"gemini.yahoo.com")||d(h,"adserver.yahoo.com")||d(h,"analytics.yahoo.com")||d(h,"ads.yahoo.com")||d(h,"beap\u002Dbc.yahoo.com")||d(h,"soundwave.mobile.yahoo.com"))return BLACK;}else if(d(h,"globaltraffico.com")||d(h,"sekindo.com")||d(h,"zedo.com")||d(h,"chango.com")||d(h,"yieldmo.com")||d(h,"smaato.com"))return BLACK;}if(t=="n"){if(z=="d"){if(d(h,"eacdn.com")||d(h,"c.jsrdn.com")||d(h,"akncdn.com")||d(h,"cb\u002Dcdn.com")||d(h,"online\u002Ddn.com")||d(h,"inmobicdn.com"))return BLACK;}else if(z=="o"){if(d(h,"adition.com")||d(h,"tribalfusion.com")||d(h,"trackimpression.com")||d(h,"nspmotion.com")||d(h,"adfalcon.com")||d(h,"clkmon.com")||d(h,"performancehorizon.com"))return BLACK;}else if(z=="s"){if(d(h,"advertising.jp.msn.com")||d(h,"ads1.jp.msn.com")||d(h,"utm.sankei.jp.msn.com")||d(h,"c.jp.msn.com"))return BLACK;}else if(z=="r"){if(d(h,"ziiporn.com")||d(h,"turn.com")||d(h,"mtburn.com"))return BLACK;}else if(d(h,"playhaven.com")||d(h,"applovin.com"))return BLACK;}if(t=="p"){if(z=="a"){if(d(h,"a.jumptap.com")||d(h,"heyzap.com")||d(h,"appserver\u002Dap.com"))return BLACK;}else if(z=="p"){if(d(h,"user\u002Dagent\u002Dtracker.herokuapp.com")||d(h,"startapp.com")||d(h,"testflightapp.com"))return BLACK;}else if(d(h,"inmobi\u002Djp.com")||d(h,"urbanairship.com")||d(h,"rtbpop.com")||d(h,"adtop.com"))return BLACK;}if(t=="s"){if(z=="c"){if(d(h,"medialytics.com")||d(h,"crashlytics.com")||d(h,"localytics.com")||!s(u,"*/analytics.js")&&!s(u,"*/ga.js")&&d(h,"google\u002Danalytics.com"))return BLACK;}else if(z=="d"){if(d(h,"marsads.com")||d(h,"buysellads.com")||d(h,"moatads.com")||d(h,"1phads.com")||d(h,"ketads.com")||d(h,"mng\u002Dads.com")||d(h,"zestads.com")||d(h,"onclkds.com")||d(h,"juicyads.com")||d(h,"bcfads.com")||d(h,"exoticads.com")||d(h,"mobile.aws.weather.com")&&s(u,"*/ads.json")||d(h,"hotwords.com")||d(h,"carbonads.com")||d(h,"openvideoads.com")||d(h,"pflexads.com")||d(h,"tapjoyads.com")||d(h,"appads.com")||d(h,"mads.com")||d(h,"propellerads.com")||d(h,"mellowads.com")||d(h,"medyanetads.com"))return BLACK;}else if(z=="k"){if(d(h,"keywordblocks.com")||d(h,"terraclicks.com")||d(h,"ecpmrocks.com")||d(h,"yumenetworks.com")||d(h,"infolinks.com")||d(h,"ox\u002Dd.majorgeeks.com")||d(h,"mobytrks.com")||d(h,"adtaxinetworks.com")||d(h,"hkg1.aastocks.com"))return BLACK;}else if(z=="t"){if(d(h,"adacts.com")||d(h,"medialets.com")||d(h,"bbelements.com"))return BLACK;}else if(d(h,"admeasures.com")||d(h,"addthis.com")&&!d(h,"s7.addthis.com")||d(h,"clkdeals.com")||d(h,"otherlevels.com")||d(h,"propellerpops.com")||d(h,"traffpartners.com")||!s(u,"*.gif*")&&d(h,"mpnrs.com")||d(h,"ligatus.com")||d(h,"traffichaus.com")||d(h,"amazonaws.com")&&s(u,"*/adversion*")||d(h,"ad\u002Dsys.com")||d(h,"serving\u002Dsys.com")||d(h,"adnxs.com")||d(h,"drnxs.com"))return BLACK;}if(t=="r"){if(z=="a"){if(d(h,"adgear.com")||d(h,"apsalar.com")||d(h,"cpmstar.com"))return BLACK;}else if(z=="e"){if(d(h,"tradedoubler.com")&&!s(u,"*/click*")&&!s(u,"*itunesredir*")||d(h,"kixer.com")||d(h,"yieldmanager.com")||d(h,"eyewonder.com")||d(h,"adkeeper.com")||d(h,"appsflyer.com")||d(h,"mob\u002Dserver.com")||d(h,"ad\u002Dcenter.com")||d(h,"fyber.com")||d(h,"statcounter.com")||d(h,"smartadserver.com")||d(h,"wwwpromoter.com")||d(h,"liveadexchanger.com")||d(h,"bidvertiser.com")||d(h,"applifier.com"))return BLACK;}else if(z=="o"){if(d(h,"image.click.livedoor.com")||d(h,"exelator.com")||d(h,"adtailor.com"))return BLACK;}else if(d(h,"ad\u002Dstir.com")||d(h,"clickmngr.com"))return BLACK;}if(t=="u"){if(!d(h,"media.sailthru.com")&&d(h,"sailthru.com")||d(h,"leadzu.com"))return BLACK;}if(t=="t"){if(z=="f"){if(d(h,"igpiphone.gameloft.com")||d(h,"ingameads.gameloft.com")||d(h,"201205igp.gameloft.com")||d(h,"igp06.gameloft.com")||d(h,"578756.gameloft.com")||d(h,"cdn.applift.com"))return BLACK;}else if(z=="n"){if(d(h,"adsinstant.com")||d(h,"revcontent.com")||d(h,"quantcount.com")||d(h,"liveintent.com"))return BLACK;}else if(d(h,"chartbeat.com")||d(h,"rubiconproject.com")||d(h,"adsmarket.com")||d(h,"questionmarket.com")||d(h,"appsdt.com")||d(h,"lijit.com")||d(h,"mobiright.com")||d(h,"atdmt.com")||d(h,"leadbolt.com")||d(h,"adtilt.com")&&!s(u,"*configure*")||d(h,"avocarrot.com")||d(h,"georiot.com")||d(h,"apprupt.com")||d(h,"admost.com")||d(h,"chartboost.com")||d(h,"reklamport.com")||d(h,"adexprt.com")||d(h,"scanscout.com")||d(h,"intellitxt.com")||d(h,"appnext.com"))return BLACK;}if(t=="w"){if(d(h,"adnow.com")||d(h,"bannerflow.com"))return BLACK;}if(t=="v"){if(d(h,"onclasrv.com")||d(h,"n208adserv.com")||d(h,"directrev.com")||d(h,"clkrev.com")||d(h,"tom.itv.com"))return BLACK;}if(t=="y"){if(z=="l"){if(d(h,"adsupply.com")||d(h,"4dsply.com")||d(h,"adtaily.com"))return BLACK;}else if(z=="r"){if(d(h,"mobiletheory.com")||d(h,"ads.flurry.com")||d(h,"flurry.com"))return BLACK;}else if(d(h,"sponsorpay.com")||d(h,"doubleverify.com")||d(h,"trafficjunky.com")||d(h,"tapjoy.com")||d(h,"adcolony.com"))return BLACK;}if(t=="x"){if(d(h,"atlassbx.com")||d(h,"mediaplex.com")||d(h,"adpdx.com")||d(h,"mobclix.com")||d(h,"mobfox.com")||d(h,"servedbyopenx.com")||d(h,"openx.com")||d(h,"adk2x.com")||d(h,"cdn.caprofitx.com"))return BLACK;}if(t=="z"){if(d(h,"adbuddiz.com")||d(h,"zestadz.com")||d(h,"altrooz.com"))return BLACK;}if(d(h,"movi11.com")||d(h,"wafmedia5.com")||d(h,"admtpmp127.com"))return BLACK;}else if(b=="jp"){if(t=="a"){if(z=="b"){if(d(h,"ad.pr.ameba.jp")||d(h,"spstaticimg.ameba.jp")||d(h,"mediba.jp"))return BLACK;}else if(d(h,"newzia.jp")||d(h,"yicha.jp"))return BLACK;}if(t=="e"){if(z=="n"){if(d(h,"ad.goo.ne.jp")||d(h,"d2c.ne.jp")||d(h,"doubleclick.ne.jp")||d(h,"owb101.goo.ne.jp")||d(h,"atech.ne.jp")||d(h,"adcdn.goo.ne.jp"))return BLACK;}else if(d(h,"app\u002Dadforce.jp")||d(h,"ad\u002Dmove.jp")||d(h,"imobile.jp")||d(h,"guile.jp")||d(h,"adinte.jp"))return BLACK;}if(t=="d"){if(z=="a"){if(d(h,"soraad.jp")||d(h,"trax\u002Dad.jp")||d(h,"impact\u002Dad.jp")||d(h,"aid\u002Dad.jp")||d(h,"smaad.jp")||d(h,"livead.jp")||d(h,"microad.jp")||d(h,"bnr.rssad.jp"))return BLACK;}else if(d(h,"ad\u002Dcloud.jp")||d(h,"adcloud.jp"))return BLACK;}if(t=="g"){if(z=="m"){if(d(h,"zimg.jp")||d(h,"im.c.yimg.jp")||d(h,"ah.yimg.jp")||d(h,"yads.c.yimg.jp"))return BLACK;}else if(d(h,"jlisting.jp")||d(h,"advg.jp"))return BLACK;}if(t=="o"){if(z=="c"){if(d(h,"glossom.co.jp")||d(h,"b92.yahoo.co.jp")||d(h,"ov.yahoo.co.jp")||d(h,"mixi.co.jp")||d(h,"yads.yjtag.yahoo.co.jp")||d(h,"feedback.promotionalads.yahoo.co.jp")||d(h,"listing.yahoo.co.jp")||d(h,"rd.ane.yahoo.co.jp")||d(h,"ard.yahoo.co.jp")||d(h,"yeas.yahoo.co.jp")||d(h,"yad.yahoo.co.jp")||d(h,"unitedblades.co.jp")||d(h,"zucks.co.jp")||d(h,"logly.co.jp")||d(h,"tb.itmedia.co.jp")||d(h,"dlv.itmedia.co.jp")||d(h,"yads.yahoo.co.jp")||d(h,"bc.geocities.yahoo.co.jp")||d(h,"i\u002Dmobile.co.jp")||d(h,"smartads.mobile.yahoo.co.jp")||d(h,"fc.itmedia.co.jp")||d(h,"b97.yahoo.co.jp"))return BLACK;}else if(d(h,"ads.nicovideo.jp"))return BLACK;}if(t=="p"){if(d(h,"gmossp\u002Dsp.jp")||d(h,"adresult\u002Dsp.jp")||d(h,"adjust\u002Dsp.jp"))return BLACK;}if(t=="s"){if(d(h,"adlantis.jp")||d(h,"doprads.jp")||d(h,"aag.yahooapis.jp")||d(h,"bypass.jp"))return BLACK;}if(t=="t"){if(z=="e"){if(d(h,"altnet.jp")||d(h,"openxmarket.jp")||d(h,"adjust\u002Dnet.jp"))return BLACK;}else if(z=="s"){if(d(h,"maist.jp")||d(h,"dynalyst.jp")||d(h,"ad.mist.jp"))return BLACK;}else if(d(h,"gsspat.jp")||d(h,"adresult.jp")||d(h,"gssprt.jp")||d(h,"fout.jp"))return BLACK;}if(t=="v"){if(d(h,"genieesspv.jp")||d(h,"ad\u002Dv.jp")||d(h,"adcv.jp"))return BLACK;}if(d(h,"smart\u002Dc.jp")||d(h,"media\u002Db.jp")||d(h,"mreco0.jp")||d(h,"i2i.jp")||d(h,"consearch.jp")||d(h,"mb\u002Dclick.jp")||d(h,"buzzurl.jp")||d(h,"webtracker.jp")||d(h,"fancrew.jp")||d(h,"openx.jp"))return BLACK;}else if(b=="net"){if(t=="a"){if(d(h,"adorika.net")||d(h,"chitika.net")||d(h,"clickterra.net"))return BLACK;}if(t=="c"){if(d(h,"app\u002Dc.net")||d(h,"adfonic.net"))return BLACK;}if(t=="e"){if(d(h,"redintelligence.net")||d(h,"accesstrade.net")||d(h,"mobilefuse.net")||d(h,"adglare.net")||d(h,"yen.appsfire.net")||d(h,"trafficgate.net")||d(h,"adverserve.net")||d(h,"api.pubnative.net"))return BLACK;}if(t=="d"){if(z=="a"){if(!d(h,"heise.nuggad.net")&&d(h,"nuggad.net")||d(h,"behaviad.net")||d(h,"microad.net")||d(h,"content\u002Dad.net"))return BLACK;}else if(d(h,"rnmd.net")||d(h,"nend.net"))return BLACK;}if(t=="g"){if(d(h,"e\u002Dplanning.net")||d(h,"adimg.net"))return BLACK;}if(t=="h"){if(d(h,"premium.2ch.net")||d(h,"adbooth.net"))return BLACK;}if(t=="k"){if(d(h,"fastclick.net")||d(h,"connect.decknetwork.net")||d(h,"astrsk.net")||d(h,"adzerk.net"))return BLACK;}if(t=="m"){if(d(h,"adverticum.net")||d(h,"alea.adam.daum.net")||d(h,"adform.net"))return BLACK;}if(t=="o"){if(d(h,"criteo.net")||d(h,"adsmogo.net")||d(h,"reporo.net")||d(h,"smaato.net"))return BLACK;}if(t=="n"){if(z=="d"){if(d(h,"mxcdn.net")||d(h,"cubecdn.net")&&s(u,"*/js/loader_*")||d(h,"inmobicdn.net")||d(h,"s1.2mdn.net")||d(h,"popadscdn.net"))return BLACK;}else if(d(h,"ichi\u002Dni\u002Dsan.net"))return BLACK;}if(t=="p"){if(d(h,"adformdsp.net")||d(h,"lduhtrp.net")||d(h,"smartclip.net"))return BLACK;}if(t=="s"){if(z=="d"){if(d(h,"popads.net")||d(h,"everestads.net")||d(h,"onclickads.net")||d(h,"carbonads.net")||d(h,"msads.net"))return BLACK;}else if(d(h,"playnomics.net")||d(h,"vaxadserver.azurewebsites.net")||d(h,"zucks.net")||d(h,"leadboltapps.net")||d(h,"intermarkets.net"))return BLACK;}if(t=="r"){if(z=="e"){if(d(h,"admixer.net")||d(h,"admaster.net")||d(h,"adjuggler.net")||d(h,"readserver.net"))return BLACK;}else if(d(h,"adadvisor.net")||d(h,"adsfactor.net"))return BLACK;}if(t=="t"){if(d(h,"adsrocket.net")||d(h,"kontagent.net")||d(h,"leadbolt.net"))return BLACK;}if(t=="y"){if(d(h,"buzzcity.net")||d(h,"trafficjunky.net"))return BLACK;}if(d(h,"2o7.net")||d(h,"nex8.net")||d(h,"yieldlab.net")||d(h,"revsci.net")||d(h,"crwdcntrl.net")||d(h,"uimserv.net")||d(h,"openx.net"))return BLACK;}else if(b=="org"){if(t=="s"){if(d(h,"4chan\u002Dads.org")||d(h,"openvideoads.org"))return BLACK;}if(t=="r"){if(d(h,"adsrvr.org")||d(h,"zwaar.org"))return BLACK;}if(d(h,"adtrace.org")||d(h,"ketchapp.org")||d(h,"info.a7.org")||d(h,"openx.org"))return BLACK;}else if(b=="de"){if(t=="l"){if(d(h,"damoh.spiegel.de")||d(h,"brightroll.de"))return BLACK;}if(d(h,"madvertise.de")||d(h,"movad.de")||d(h,"adtech.de")||d(h,"de.ioam.de")||d(h,"advolution.de")||d(h,"adspirit.de"))return BLACK;}else if(b=="kr"){if(t=="o"){if(z=="c"){if(d(h,"theprimead.co.kr")||d(h,"adapi.about.co.kr")||d(h,"tpmn.co.kr")||d(h,"cauly.co.kr")||d(h,"realssp.co.kr")||d(h,"ad.about.co.kr")||d(h,"imadrep.co.kr")||d(h,"ad4989.co.kr"))return BLACK;}}}else if(b=="mobi"){if(d(h,"yoc.mobi")||d(h,"inner\u002Dactive.mobi")||d(h,"adsmogo.mobi")||d(h,"mocean.mobi")||d(h,"mydas.mobi")||d(h,"adver.mobi")||d(h,"vserv.mobi"))return BLACK;}else if(b=="vn"){if(d(h,"vcmedia.vn")||d(h,"ad360.vn")||d(h,"eclick.vn")||d(h,"adtimaserver.vn")||d(h,"admicro.vn"))return BLACK;}else if(b=="pl"){if(d(h,"adtaily.pl")||d(h,"hit.gemius.pl")||d(h,"i\u002Dstream.pl")||d(h,"adidm.idmnet.pl")||d(h,"adocean.pl"))return BLACK;}else if(b=="info"){if(t=="k"){if(d(h,"appshelf.ttpsdk.info")||d(h,"houseads.ttpsdk.info"))return BLACK;}if(t=="d"){if(d(h,"print.theyeshivaworld.info")||d(h,"spotscenered.info"))return BLACK;}}else if(b=="se"){if(d(h,"adrotator.se")||d(h,"emediate.se")||d(h,"fusion.dn.se"))return BLACK;}else if(b=="tv"){if(d(h,"videoplaza.tv")||d(h,"adap.tv")||d(h,"teads.tv"))return BLACK;}else if(b=="uk"){if(d(h,"ad\u002Dx.co.uk"))return BLACK;}else if(b=="biz"){if(d(h,"trafficfactory.biz")||d(h,"rarenok.biz"))return BLACK;}else if(b=="asia"){if(d(h,"pixels.asia")||d(h,"snapmobile.asia"))return BLACK;}else if(b=="io"){if(d(h,"liftoff.io")||d(h,"firstimpression.io"))return BLACK;}else if(b=="es"){if(d(h,"kimia.es"))return BLACK;}else if(b=="eu"){if(d(h,"emediate.eu"))return BLACK;}else if(b=="space"){if(d(h,"dlski.space"))return BLACK;}else if(b=="gr"){if(d(h,"adman.gr"))return BLACK;}else if(b=="ad"){if(d(h,"content.ad"))return BLACK;}else if(b=="ua"){if(d(h,"holder.com.ua"))return BLACK;}else if(b=="li"){if(d(h,"kau.li"))return BLACK;}else if(b=="at"){if(d(h,"ad.adworx.at"))return BLACK;}else if(b=="si"){if(d(h,"interseek.si"))return BLACK;}else if(b=="fr"){if(d(h,"ad2play.ftv\u002Dpublicite.fr"))return BLACK;}else if(b=="dk"){if(d(h,"emediate.dk"))return BLACK;}else if(b=="ru"){if(d(h,"admobi.ru"))return BLACK;}else if(b=="cn"){if(d(h,"admaster.com.cn"))return BLACK;}else if(b=="me"){if(d(h,"kiip.me"))return BLACK;}else if(b=="tw"){if(d(h,"adspending01.bwnet.com.tw"))return BLACK;}else if(b=="co"){if(d(h,"adk2.co"))return BLACK;}else if(b=="il"){if(d(h,"fus.yad2.co.il"))return BLACK;}else if(b=="cz"){if(d(h,"imedia.cz"))return BLACK;}if((s(u,"*/banners/*")&&!d(h,"lightsource.ca"))||s(h,"media.net")||s(u,"*/interstitiel/interstitiel.xml*")||((d(h,"adingo.jp")&&!d(h,"cdn\u002Dfluct.sh.adingo.jp"))||d(h,"fluct.jp"))||s(h,"*.cj.com")||((d(h,"amazonaws.com")&&s(u,"*admarvel*"))||d(h,"admarvel.com"))||((!d(h,"foxnews.com")&&!d(h,"radioactive.sg")&&s(h,"ads.*"))||s(h,"*.ads.*"))||(s(h,"advert.*")||s(h,"*.advert.*"))||(s(u,"*/adview/*"))||(s(u,"*speednetwor*.com/*xbanner.*")||s(u,"*speednetwor*.com/*xpopup.*")||s(u,"*speednetwor*.com*adclickurl*")||s(u,"*speednetwor*.com*smart.js"))||((d(h,"flipboard.com")&&s(u,"*/flipmag/admanager.js"))||(d(h,"flipboard.com")&&s(u,"*/adcreative/*"))||(d(h,"flipboard.com")&&s(u,"*/*adname*"))||(d(h,"flipboard.com")&&s(u,"*/flare/*")))||(s(h,"*.adsrv.*")||s(h,"adsrv.*"))||(s(h,"*.adverts.*")||s(h,"adverts.*"))||(s(h,"ad\u002Dtraffic.*")||s(h,"*.ad\u002Dtraffic.*"))||s(u,"*/openx/www/images/*")||s(h,"m*.2mdn.net")||(s(u,"*/adasset/*"))||(s(h,"*.adz.*")||s(h,"adz.*"))||((d(h,"googleadservices.com")&&!s(u,"*/aclk*")&&!s(u,"*/pagead/conversion.js"))||(d(h,"pagead2.googlesyndication.com")||d(h,"pagead3.googlesyndication.com")||d(h,"pagead.googlesyndication.com")||d(h,"pagead1.googlesyndication.com"))||(d(h,"googletagservices.com")&&!s(u,"*/gpt.js")&&!s(u,"*/gpt_mobile.js")))||(s(u,"*/adserve/*"))||(s(u,"*/ad\u002Dtraffic/*"))||((d(h,"graph.facebook.com")&&s(u,"*/network_ads*"))||(d(h,"graph.facebook.com")&&s(u,"*advertise*"))||(d(h,"graph.facebook.com")&&s(u,"*/network_ads")))||s(h,"inmobisdk*.akamaihd.net")||(s(h,"*.advertorial.*")||s(h,"advertorial.*"))||(s(u,"*/adresult/*"))||((d(h,"supersonicads.com")&&s(u,"*/delivery/*"))||(d(h,"ultraadserver.com")&&s(u,"*/api*")))||(s(u,"*/ads/*")&&!d(h,"mzstatic.com")&&!d(h,"apple.com")&&!d(h,"gumtree.com")&&!d(h,"otomoto.pl")&&!d(h,"watchdisneyxd.go.com")&&!d(h,"fortune.com")&&!s(h,"olx.*")&&!s(h,"*.olx.*")&&!s(h,"*.kijiji.*")&&!d(h,"ads\u002Dtrk.vidible.tv"))||((d(h,"taboola.com")&&!s(u,"*goalmobileapp*"))||d(h,"taboolasyndication.com"))||s(u,"*/openx/www/delivery/*.php*")||(s(u,"*/viewad/*"))||(s(u,"*/adserv/*"))||((d(h,"pub.sapo.pt")&&s(u,"*mobile.php*"))||(d(h,"pub.sapo.pt")&&s(u,"*vast.php*")))||(s(u,"*/advertorial/*"))||(s(h,"*.adasset.*")||s(h,"adasset.*"))||(s(u,"*/adx/*"))||(s(h,"*.adresult.*")||s(h,"adresult.*"))||(s(h,"*.ad.*")||s(h,"ad.*"))||(s(h,"*.adx.*")||s(h,"adx.*"))||((d(h,"msn.com")&&s(u,"*/adsadclient*"))||d(h,"h2.msn.com")||d(h,"rad.msn.com")||d(h,"stjjp.msn.com")||d(h,"udc.msn.com"))||(s(u,"*/adz/*"))||((d(h,"assets.gunosy.com")&&s(u,"*/adnet/*"))||d(h,"ad.gunosy.com")||d(h,"adapi.gunosy.com")||d(h,"adntokyo.gunosy.com"))||(s(u,"*/adclick/*"))||(s(h,"*.manage.com")||s(h,"manage.com"))||s(u,"*/openx/www/api/v*/*.php*")||((d(h,"facebook.com")&&s(u,"*/plugins/ad.*"))||(d(h,"connect.facebook.net")&&s(u,"*/sdk/xfbml.ad.*")))||(!d(h,"autotrader.co.uk")&&s(u,"*/advert/*"))||(s(u,"*/adverts/*"))||(s(h,"adserv.*")||s(h,"*.adserv.*"))||(!d(h,"apple.com")&&!d(h,"mzstatic.com")&&s(u,"*/adserver/*"))||(s(h,"*.adserve.*")||s(h,"adserve.*"))||(s(h,"adclick.*")||s(h,"*.adclick.*"))||(s(h,"adview.*")||s(h,"*.adview.*"))||(s(h,"*.ad.*")||s(h,"ad.*"))||(s(u,"*/banner/*"))||s(h,"cj.com")||(s(h,"banner.*")||s(h,"*.banner.*"))||(s(u,"*/adv/*"))||(s(h,"*.adv.*")||s(h,"adv.*"))||(s(u,"*/viewad/*"))||((s(h,"adserver.*")&&!d(h,"adtechus.com"))||s(h,"*.adserver.*"))||((!d(h,"static.doubleclick.net")&&!s(u,"*ythome*")&&!d(h,"stats.g.doubleclick.net")&&d(h,"doubleclick.net"))||d(h,"doubleciick.net")||d(h,"doubleclick.net")||d(h,"pubads.g.doubleclick.net")||d(h,"googleads.g.doubleclick.net"))||(s(h,"banners.*")||s(h,"*.banners.*"))||(!d(h,"mzstatic.com")&&!d(h,"apple.com")&&!d(h,"economist.com")&&!d(h,"fwmrm.net")&&s(u,"*/ad/*"))||(n(h,"89.207.18.1","255.255.255.0"))||s(h,"*.media.net")||(s(h,"*.viewad.*")||s(h,"viewad.*")))return BLACK;if(d(h,"adtechus.com"))return"PROXY 216.58.209.78:80";if(d(h,"fwmrm.net"))return"PROXY 216.58.209.78:80";if(d(h,"adtechus.com"))return"PROXY 216.58.209.78:80";if(d(h,"fwmrm.net"))return"PROXY 216.58.209.78:80";return PROXY_DIRECT;}
