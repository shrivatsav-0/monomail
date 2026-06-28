var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < arguments.length; i++)
        this.define(arguments[i]);
      this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          let ext = extensions[i];
          if (ext[0] !== "*") {
            if (!force && ext in this._types)
              throw new Error(
                'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
              );
            this._types[ext] = type;
          }
        }
        if (force || !this._extensions[type]) {
          let ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase(), ext = last.replace(/^.*\./, "").toLowerCase(), hasPath = last.length < path.length;
      return (ext.length < last.length - 1 || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      return type = /^\s*([^;\s]*)/.test(type) && RegExp.$1, type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/other.js
var require_other = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// ../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/index.js
var require_mime = __commonJS({
  "../../node_modules/.pnpm/mime@3.0.0/node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard(), require_other());
  }
});

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => (context, next) => {
  let index = -1;
  return dispatch(0);
  async function dispatch(i) {
    if (i <= index)
      throw new Error("next() called multiple times");
    index = i;
    let res, isError = !1, handler;
    if (middleware[i] ? (handler = middleware[i][0][0], context.req.routeIndex = i) : handler = i === middleware.length && next || void 0, handler)
      try {
        res = await handler(context, () => dispatch(i + 1));
      } catch (err) {
        if (err instanceof Error && onError)
          context.error = err, res = await onError(err, context), isError = !0;
        else
          throw err;
      }
    else
      context.finalized === !1 && onNotFound && (res = await onNotFound(context));
    return res && (context.finalized === !1 || isError) && (context.res = res), context;
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  res;
  status;
  /**
   * Creates an instance of `HTTPException`.
   * @param status - HTTP status code for the exception. Defaults to 500.
   * @param options - Additional options for the exception.
   */
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause }), this.res = options?.res, this.status = status;
  }
  /**
   * Returns the response object associated with the exception.
   * If a response object is not provided, a new response is created with the error message and status code.
   * @returns The response object.
   */
  getResponse() {
    return this.res ? new Response(this.res.body, {
      status: this.status,
      headers: this.res.headers
    }) : new Response(this.message, {
      status: this.status
    });
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  let { all = !1, dot = !1 } = options, contentType = (request instanceof HonoRequest ? request.raw.headers : request.headers).get("Content-Type");
  return contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded") ? parseFormData(request, { all, dot }) : {};
};
async function parseFormData(request, options) {
  let formData = await request.formData();
  return formData ? convertFormDataToBodyData(formData, options) : {};
}
function convertFormDataToBodyData(formData, options) {
  let form = /* @__PURE__ */ Object.create(null);
  return formData.forEach((value, key) => {
    options.all || key.endsWith("[]") ? handleParsingAllValues(form, key, value) : form[key] = value;
  }), options.dot && Object.entries(form).forEach(([key, value]) => {
    key.includes(".") && (handleParsingNestedValues(form, key, value), delete form[key]);
  }), form;
}
var handleParsingAllValues = (form, key, value) => {
  form[key] !== void 0 ? Array.isArray(form[key]) ? form[key].push(value) : form[key] = [form[key], value] : key.endsWith("[]") ? form[key] = [value] : form[key] = value;
}, handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form, keys = key.split(".");
  keys.forEach((key2, index) => {
    index === keys.length - 1 ? nestedForm[key2] = value : ((!nestedForm[key2] || typeof nestedForm[key2] != "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) && (nestedForm[key2] = /* @__PURE__ */ Object.create(null)), nestedForm = nestedForm[key2]);
  });
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/url.js
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, tryDecodeURI = (str) => tryDecode(str, decodeURI), getPath = (request) => {
  let url = request.url, start = url.indexOf("/", url.indexOf(":") + 4), i = start;
  for (; i < url.length; i++) {
    let charCode = url.charCodeAt(i);
    if (charCode === 37) {
      let queryIndex = url.indexOf("?", i), hashIndex = url.indexOf("#", i), end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex), path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35)
      break;
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  let result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, mergePath = (base, sub, ...rest) => (rest.length && (sub = mergePath(sub, ...rest)), `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`);
var _decodeURI = (value) => /[%+]/.test(value) ? (value.indexOf("+") !== -1 && (value = value.replace(/\+/g, " ")), value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value) : value, _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1)
      return;
    for (url.startsWith(key, keyIndex2 + 1) || (keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1)); keyIndex2 !== -1; ) {
      let trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        let valueIndex = keyIndex2 + key.length + 2, endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode))
        return "";
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    if (encoded = /[%+]/.test(url), !encoded)
      return;
  }
  let results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  for (; keyIndex !== -1; ) {
    let nextKeyIndex = url.indexOf("&", keyIndex + 1), valueIndex = url.indexOf("=", keyIndex);
    valueIndex > nextKeyIndex && nextKeyIndex !== -1 && (valueIndex = -1);
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded && (name = _decodeURI(name)), keyIndex = nextKeyIndex, name === "")
      continue;
    let value;
    valueIndex === -1 ? value = "" : (value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex), encoded && (value = _decodeURI(value))), multiple ? (results[name] && Array.isArray(results[name]) || (results[name] = []), results[name].push(value)) : results[name] ??= value;
  }
  return key ? results[key] : results;
}, getQueryParam = _getQueryParam, getQueryParams = (url, key) => _getQueryParam(url, key, !0), decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_), HonoRequest = class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request, this.path = path, this.#matchResult = matchResult, this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    let paramKey = this.#matchResult[0][this.routeIndex][1][key], param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    let decoded = {}, keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (let key of keys) {
      let value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      value !== void 0 && (decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value);
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name)
      return this.raw.headers.get(name) ?? void 0;
    let headerData = {};
    return this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    }), headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    let { bodyCache, raw: raw2 } = this, cachedBody = bodyCache[key];
    if (cachedBody)
      return cachedBody;
    let anyCachedKey = Object.keys(bodyCache)[0];
    return anyCachedKey ? bodyCache[anyCachedKey].then((body) => (anyCachedKey === "json" && (body = JSON.stringify(body)), new Response(body)[key]())) : bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
}, raw = (value, callbacks) => {
  let escapedString = new String(value);
  return escapedString.isEscaped = !0, escapedString.callbacks = callbacks, escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  typeof str == "object" && !(str instanceof String) && (str instanceof Promise || (str = str.toString()), str instanceof Promise && (str = await str));
  let callbacks = str.callbacks;
  if (!callbacks?.length)
    return Promise.resolve(str);
  buffer ? buffer[0] += str : buffer = [str];
  let resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, !1, context, buffer))
    ).then(() => buffer[0])
  );
  return preserveCallbacks ? raw(await resStr, callbacks) : resStr;
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8", setDefaultContentType = (contentType, headers) => ({
  "Content-Type": contentType,
  ...headers
}), createResponseInstance = (body, init) => new Response(body, init), Context = class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = !1;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req, options && (this.#executionCtx = options.executionCtx, this.env = options.env, this.#notFoundHandler = options.notFoundHandler, this.#path = options.path, this.#matchResult = options.matchResult);
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    return this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult), this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx)
      return this.#executionCtx;
    throw Error("This context has no FetchEvent");
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx)
      return this.#executionCtx;
    throw Error("This context has no ExecutionContext");
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (let [k, v] of this.#res.headers.entries())
        if (k !== "content-type")
          if (k === "set-cookie") {
            let cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (let cookie of cookies)
              _res.headers.append("set-cookie", cookie);
          } else
            _res.headers.set(k, v);
    }
    this.#res = _res, this.finalized = !0;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => (this.#renderer ??= (content) => this.html(content), this.#renderer(...args));
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    this.finalized && (this.#res = createResponseInstance(this.#res.body, this.#res));
    let headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    value === void 0 ? headers.delete(name) : options?.append ? headers.append(name, value) : headers.set(name, value);
  };
  status = (status) => {
    this.#status = status;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map(), this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => this.#var ? this.#var.get(key) : void 0;
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    return this.#var ? Object.fromEntries(this.#var) : {};
  }
  #newResponse(data, arg, headers) {
    let responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg == "object" && "headers" in arg) {
      let argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (let [key, value] of argHeaders)
        key.toLowerCase() === "set-cookie" ? responseHeaders.append(key, value) : responseHeaders.set(key, value);
    }
    if (headers)
      for (let [k, v] of Object.entries(headers))
        if (typeof v == "string")
          responseHeaders.set(k, v);
        else {
          responseHeaders.delete(k);
          for (let v2 of v)
            responseHeaders.append(k, v2);
        }
    let status = typeof arg == "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text, arg, headers) => !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
    text,
    arg,
    setDefaultContentType(TEXT_PLAIN, headers)
  );
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object, arg, headers) => this.#newResponse(
    JSON.stringify(object),
    arg,
    setDefaultContentType("application/json", headers)
  );
  html = (html, arg, headers) => {
    let res = (html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html == "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, !1, {}).then(res) : res(html);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status) => {
    let locationString = String(location);
    return this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      /[^\x00-\xFF]/.test(locationString) ? encodeURI(locationString) : locationString
    ), this.newResponse(null, status ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => (this.#notFoundHandler ??= () => createResponseInstance(), this.#notFoundHandler(this));
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL", METHOD_NAME_ALL_LOWERCASE = "all", METHODS = ["get", "post", "put", "delete", "options", "patch"];
var UnsupportedPathError = class extends Error {
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => c.text("404 Not Found", 404), errorHandler = (err, c) => {
  if ("getResponse" in err) {
    let res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  return console.error(err), c.text("Internal Server Error", 500);
}, Hono = class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    [...METHODS, METHOD_NAME_ALL_LOWERCASE].forEach((method) => {
      this[method] = (args1, ...args) => (typeof args1 == "string" ? this.#path = args1 : this.#addRoute(method, this.#path, args1), args.forEach((handler) => {
        this.#addRoute(method, this.#path, handler);
      }), this);
    }), this.on = (method, path, ...handlers) => {
      for (let p of [path].flat()) {
        this.#path = p;
        for (let m of [method].flat())
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
      }
      return this;
    }, this.use = (arg1, ...handlers) => (typeof arg1 == "string" ? this.#path = arg1 : (this.#path = "*", handlers.unshift(arg1)), handlers.forEach((handler) => {
      this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
    }), this);
    let { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict), this.getPath = strict ?? !0 ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    let clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    return clone.errorHandler = this.errorHandler, clone.#notFoundHandler = this.#notFoundHandler, clone.routes = this.routes, clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    let subApp = this.basePath(path);
    return app2.routes.map((r) => {
      let handler;
      app2.errorHandler === errorHandler ? handler = r.handler : (handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, handler[COMPOSED_HANDLER] = r.handler), subApp.#addRoute(r.method, r.path, handler);
    }), this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    let subApp = this.#clone();
    return subApp._basePath = mergePath(this._basePath, path), subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler) => (this.errorHandler = handler, this);
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler) => (this.#notFoundHandler = handler, this);
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest, optionHandler;
    options && (typeof options == "function" ? optionHandler = options : (optionHandler = options.optionHandler, options.replaceRequest === !1 ? replaceRequest = (request) => request : replaceRequest = options.replaceRequest));
    let getOptions = optionHandler ? (c) => {
      let options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      let mergedPath = mergePath(this._basePath, path), pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        let url = new URL(request.url);
        return url.pathname = url.pathname.slice(pathPrefixLength) || "/", new Request(url, request);
      };
    })();
    let handler = async (c, next) => {
      let res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res)
        return res;
      await next();
    };
    return this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler), this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase(), path = mergePath(this._basePath, path);
    let r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]), this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error)
      return this.errorHandler(err, c);
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD")
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    let path = this.getPath(request, { env: env2 }), matchResult = this.router.match(method, path), c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    let composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        let context = await composed(c);
        if (!context.finalized)
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => this.#dispatch(request, rest[1], rest[0], request.method);
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => input instanceof Request ? this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx) : (input = input.toString(), this.fetch(
    new Request(
      /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
      requestInit
    ),
    Env,
    executionCtx
  ));
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/router/pattern-router/router.js
var emptyParams = /* @__PURE__ */ Object.create(null), PatternRouter = class {
  name = "PatternRouter";
  #routes = [];
  add(method, path, handler) {
    let endsWithWildcard = path.at(-1) === "*";
    endsWithWildcard && (path = path.slice(0, -2)), path.at(-1) === "?" && (path = path.slice(0, -1), this.add(method, path.replace(/\/[^/]+$/, ""), handler));
    let parts = (path.match(/\/?(:\w+(?:{(?:(?:{[\d,]+})|[^}])+})?)|\/?[^\/\?]+/g) || []).map(
      (part) => {
        let match = part.match(/^\/:([^{]+)(?:{(.*)})?/);
        return match ? `/(?<${match[1]}>${match[2] || "[^/]+"})` : part === "/*" ? "/[^/]+" : part.replace(/[.\\+*[^\]$()]/g, "\\$&");
      }
    );
    try {
      this.#routes.push([
        new RegExp(`^${parts.join("")}${endsWithWildcard ? "" : "/?$"}`),
        method,
        handler
      ]);
    } catch {
      throw new UnsupportedPathError();
    }
  }
  match(method, path) {
    let handlers = [];
    for (let i = 0, len = this.#routes.length; i < len; i++) {
      let [pattern, routeMethod, handler] = this.#routes[i];
      if (routeMethod === method || routeMethod === METHOD_NAME_ALL) {
        let match = pattern.exec(path);
        match && handlers.push([handler, match.groups || emptyParams]);
      }
    }
    return [handlers];
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/preset/tiny.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options), this.router = new PatternRouter();
  }
};

// src/workers/local-explorer/explorer.worker.ts
var import_mime = __toESM(require_mime());

// src/workers/core/constants.ts
var CorePaths = {
  /** Magic proxy used by getPlatformProxy */
  PLATFORM_PROXY: "/cdn-cgi/platform-proxy",
  /** Trigger scheduled event handlers */
  SCHEDULED: "/cdn-cgi/handler/scheduled",
  /** Trigger email event handlers */
  EMAIL: "/cdn-cgi/handler/email",
  /** Handler path prefix for validation */
  HANDLER_PREFIX: "/cdn-cgi/handler/",
  /** Live reload WebSocket endpoint */
  LIVE_RELOAD: "/cdn-cgi/mf/reload",
  /** Local explorer UI and API */
  EXPLORER: "/cdn-cgi/explorer",
  /** Legacy way to trigger scheduled event handlers */
  LEGACY_SCHEDULED: "/cdn-cgi/mf/scheduled",
  /** Stream video serving endpoint */
  STREAM_VIDEO: "/cdn-cgi/mf/stream",
  /** Local image delivery endpoint for serving hosted images */
  IMAGE_DELIVERY: "/cdn-cgi/mf/imagedelivery",
  /** Public R2 bucket object serving endpoint */
  R2_PUBLIC: "/cdn-cgi/local/r2/public"
};

// src/workers/local-explorer/aggregation.ts
import { env } from "cloudflare:workers";
var EXPLORER_API_PATH = `${CorePaths.EXPLORER}/api`, NO_AGGREGATE_HEADER = "X-Miniflare-Explorer-No-Aggregate";
function getPeerDebugPortAddresses(registry, selfWorkerNames) {
  let selfSet = new Set(selfWorkerNames), addresses = Object.entries(registry).filter(([name]) => !selfSet.has(name)).map(([, def]) => def.debugPortAddress).filter((addr) => typeof addr == "string");
  return [...new Set(addresses)];
}
async function getPeerUrlsIfAggregating(c) {
  if (c.req.raw.headers.has(NO_AGGREGATE_HEADER))
    return [];
  let loopback = c.env.MINIFLARE_LOOPBACK, workerNames = c.env.LOCAL_EXPLORER_WORKER_NAMES, registry = await (await loopback.fetch("http://localhost/core/dev-registry")).json();
  return getPeerDebugPortAddresses(registry, workerNames);
}
async function fetchFromPeer(peerDebugPortAddress, apiPath, init) {
  try {
    let fetcher = env.DEV_REGISTRY_DEBUG_PORT.connect(
      peerDebugPortAddress
    ).getEntrypoint("core:entry"), url = new URL(`http://localhost${EXPLORER_API_PATH}${apiPath}`), response = await fetcher.fetch(url.toString(), {
      ...init,
      headers: {
        ...init?.headers,
        [NO_AGGREGATE_HEADER]: "true",
        Host: "localhost"
      }
    });
    return new Response(response.body, response);
  } catch {
    return null;
  }
}
async function aggregateListResults(c, localResults, apiPath, resultKey) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  if (peerUrls.length === 0)
    return localResults;
  let peerResults = await Promise.all(
    peerUrls.map(async (url) => {
      let response = await fetchFromPeer(url, apiPath);
      if (!response?.ok) return [];
      try {
        let data = await response.json();
        if (Array.isArray(data.result))
          return data.result;
        if (resultKey)
          return data.result[resultKey] ?? [];
        throw new Error("unreachable");
      } catch {
        return [];
      }
    })
  );
  return [...localResults, ...peerResults.flat()];
}

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/, validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/, parse = (cookie, name) => {
  if (name && cookie.indexOf(name) === -1)
    return {};
  let pairs = cookie.trim().split(";"), parsedCookie = {};
  for (let pairStr of pairs) {
    pairStr = pairStr.trim();
    let valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1)
      continue;
    let cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName))
      continue;
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"') && (cookieValue = cookieValue.slice(1, -1)), validCookieValueRegEx.test(cookieValue) && (parsedCookie[cookieName] = cookieValue.indexOf("%") !== -1 ? tryDecode(cookieValue, decodeURIComponent_) : cookieValue, name))
      break;
  }
  return parsedCookie;
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key, prefix) => {
  let cookie = c.req.raw.headers.get("Cookie");
  if (typeof key == "string") {
    if (!cookie)
      return;
    let finalKey = key;
    return prefix === "secure" ? finalKey = "__Secure-" + key : prefix === "host" && (finalKey = "__Host-" + key), parse(cookie, finalKey)[finalKey];
  }
  return cookie ? parse(cookie) : {};
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => new Response(arrayBuffer, {
  headers: {
    "Content-Type": contentType
  }
}).formData();

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/validator/validator.js
var jsonRegex = /^application\/([a-z-\.]+\+)?json(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/, multipartRegex = /^multipart\/form-data(;\s?boundary=[a-zA-Z0-9'"()+_,\-./:=?]+)?$/, urlencodedRegex = /^application\/x-www-form-urlencoded(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/, validator = (target, validationFunc) => async (c, next) => {
  let value = {}, contentType = c.req.header("Content-Type");
  switch (target) {
    case "json":
      if (!contentType || !jsonRegex.test(contentType))
        break;
      try {
        value = await c.req.json();
      } catch {
        let message = "Malformed JSON in request body";
        throw new HTTPException(400, { message });
      }
      break;
    case "form": {
      if (!contentType || !(multipartRegex.test(contentType) || urlencodedRegex.test(contentType)))
        break;
      let formData;
      if (c.req.bodyCache.formData)
        formData = await c.req.bodyCache.formData;
      else
        try {
          let arrayBuffer = await c.req.arrayBuffer();
          formData = await bufferToFormData(arrayBuffer, contentType), c.req.bodyCache.formData = formData;
        } catch (e) {
          let message = "Malformed FormData request.";
          throw message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`, new HTTPException(400, { message });
        }
      let form = /* @__PURE__ */ Object.create(null);
      formData.forEach((value2, key) => {
        key.endsWith("[]") ? (form[key] ??= []).push(value2) : Array.isArray(form[key]) ? form[key].push(value2) : Object.hasOwn(form, key) ? form[key] = [form[key], value2] : form[key] = value2;
      }), value = form;
      break;
    }
    case "query":
      value = Object.fromEntries(
        Object.entries(c.req.queries()).map(([k, v]) => v.length === 1 ? [k, v[0]] : [k, v])
      );
      break;
    case "param":
      value = c.req.param();
      break;
    case "header":
      value = c.req.header();
      break;
    case "cookie":
      value = getCookie(c);
      break;
  }
  let res = await validationFunc(value, c);
  return res instanceof Response ? res : (c.req.addValidatedData(target, res), await next());
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever, util2.arrayToEnum = (items) => {
    let obj = {};
    for (let item of items)
      obj[item] = item;
    return obj;
  }, util2.getValidEnumValues = (obj) => {
    let validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] != "number"), filtered = {};
    for (let k of validKeys)
      filtered[k] = obj[k];
    return util2.objectValues(filtered);
  }, util2.objectValues = (obj) => util2.objectKeys(obj).map(function(e) {
    return obj[e];
  }), util2.objectKeys = typeof Object.keys == "function" ? (obj) => Object.keys(obj) : (object) => {
    let keys = [];
    for (let key in object)
      Object.prototype.hasOwnProperty.call(object, key) && keys.push(key);
    return keys;
  }, util2.find = (arr, checker) => {
    for (let item of arr)
      if (checker(item))
        return item;
  }, util2.isInteger = typeof Number.isInteger == "function" ? (val) => Number.isInteger(val) : (val) => typeof val == "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val == "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues, util2.jsonStringifyReplacer = (_, value) => typeof value == "bigint" ? value.toString() : value;
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => ({
    ...first,
    ...second
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (data) => {
  switch (typeof data) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(data) ? ZodParsedType.array : data === null ? ZodParsedType.null : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && data instanceof Map ? ZodParsedType.map : typeof Set < "u" && data instanceof Set ? ZodParsedType.set : typeof Date < "u" && data instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), quotelessJson = (obj) => JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:"), ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super(), this.issues = [], this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    }, this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    let actualProto = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, actualProto) : this.__proto__ = actualProto, this.name = "ZodError", this.issues = issues;
  }
  format(_mapper) {
    let mapper = _mapper || function(issue) {
      return issue.message;
    }, fieldErrors = { _errors: [] }, processError = (error) => {
      for (let issue of error.issues)
        if (issue.code === "invalid_union")
          issue.unionErrors.map(processError);
        else if (issue.code === "invalid_return_type")
          processError(issue.returnTypeError);
        else if (issue.code === "invalid_arguments")
          processError(issue.argumentsError);
        else if (issue.path.length === 0)
          fieldErrors._errors.push(mapper(issue));
        else {
          let curr = fieldErrors, i = 0;
          for (; i < issue.path.length; ) {
            let el = issue.path[i];
            i === issue.path.length - 1 ? (curr[el] = curr[el] || { _errors: [] }, curr[el]._errors.push(mapper(issue))) : curr[el] = curr[el] || { _errors: [] }, curr = curr[el], i++;
          }
        }
    };
    return processError(this), fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError))
      throw new Error(`Not a ZodError: ${value}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    let fieldErrors = {}, formErrors = [];
    for (let sub of this.issues)
      if (sub.path.length > 0) {
        let firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [], fieldErrors[firstEl].push(mapper(sub));
      } else
        formErrors.push(mapper(sub));
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => new ZodError(issues);

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      issue.received === ZodParsedType.undefined ? message = "Required" : message = `Expected ${issue.expected}, received ${issue.received}`;
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      message = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      message = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof issue.validation == "object" ? "includes" in issue.validation ? (message = `Invalid input: must include "${issue.validation.includes}"`, typeof issue.validation.position == "number" && (message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`)) : "startsWith" in issue.validation ? message = `Invalid input: must start with "${issue.validation.startsWith}"` : "endsWith" in issue.validation ? message = `Invalid input: must end with "${issue.validation.endsWith}"` : util.assertNever(issue.validation) : issue.validation !== "regex" ? message = `Invalid ${issue.validation}` : message = "Invalid";
      break;
    case ZodIssueCode.too_small:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than"} ${issue.minimum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "over"} ${issue.minimum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${issue.minimum}` : issue.type === "bigint" ? message = `Number must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${issue.minimum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(issue.minimum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than"} ${issue.maximum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "under"} ${issue.maximum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "bigint" ? message = `BigInt must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(issue.maximum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError, util.assertNever(issue);
  }
  return { message };
}, en_default = errorMap;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  let { data, path, errorMaps, issueData } = params, fullPath = [...path, ...issueData.path || []], fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0)
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  let errorMessage = "", maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (let map of maps)
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  let overrideMap = getErrorMap(), issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(status, results) {
    let arrayValue = [];
    for (let s of results) {
      if (s.status === "aborted")
        return INVALID;
      s.status === "dirty" && status.dirty(), arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    let syncPairs = [];
    for (let pair of pairs) {
      let key = await pair.key, value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    let finalObject = {};
    for (let pair of pairs) {
      let { key, value } = pair;
      if (key.status === "aborted" || value.status === "aborted")
        return INVALID;
      key.status === "dirty" && status.dirty(), value.status === "dirty" && status.dirty(), key.value !== "__proto__" && (typeof value.value < "u" || pair.alwaysSet) && (finalObject[key.value] = value.value);
    }
    return { status: status.value, value: finalObject };
  }
}, INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (value) => ({ status: "dirty", value }), OK = (value) => ({ status: "valid", value }), isAborted = (x) => x.status === "aborted", isDirty = (x) => x.status === "dirty", isValid = (x) => x.status === "valid", isAsync = (x) => typeof Promise < "u" && x instanceof Promise;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message == "string" ? { message } : message || {}, errorUtil2.toString = (message) => typeof message == "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [], this.parent = parent, this.data = value, this._path = path, this._key = key;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}, handleResult = (ctx, result) => {
  if (isValid(result))
    return { success: !0, data: result.value };
  if (!ctx.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      let error = new ZodError(ctx.common.issues);
      return this._error = error, this._error;
    }
  };
};
function processCreateParams(params) {
  if (!params)
    return {};
  let { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return errorMap2 ? { errorMap: errorMap2, description } : { errorMap: (iss, ctx) => {
    let { message } = params;
    return iss.code === "invalid_enum_value" ? { message: message ?? ctx.defaultError } : typeof ctx.data > "u" ? { message: message ?? required_error ?? ctx.defaultError } : iss.code !== "invalid_type" ? { message: ctx.defaultError } : { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    let result = this._parse(input);
    if (isAsync(result))
      throw new Error("Synchronous parse encountered promise.");
    return result;
  }
  _parseAsync(input) {
    let result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    let result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    let ctx = {
      common: {
        issues: [],
        async: params?.async ?? !1,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    let ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async)
      try {
        let result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        err?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), ctx.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    let result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    let ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: !0
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx }), result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    let getIssueProperties = (val) => typeof message == "string" || typeof message > "u" ? { message } : typeof message == "function" ? message(val) : message;
    return this._refinement((val, ctx) => {
      let result = check(val), setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      return typeof Promise < "u" && result instanceof Promise ? result.then((data) => data ? !0 : (setError(), !1)) : result ? !0 : (setError(), !1);
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => check(val) ? !0 : (ctx.addIssue(typeof refinementData == "function" ? refinementData(val, ctx) : refinementData), !1));
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync, this._def = def, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    let defaultValueFunc = typeof def == "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    let catchValueFunc = typeof def == "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    let This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}, cuidRegex = /^c[^\s-]{8,}$/i, cuid2Regex = /^[0-9a-z]+$/, ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i, uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, nanoidRegex = /^[a-z0-9_-]{21}$/i, jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, _emojiRegex = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", emojiRegex, ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dateRegexSource = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = "[0-5]\\d";
  args.precision ? secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}` : args.precision == null && (secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`);
  let secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`, opts = [];
  return opts.push(args.local ? "Z?" : "Z"), args.offset && opts.push("([+-]\\d{2}:?\\d{2})"), regex = `${regex}(${opts.join("|")})`, new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  return !!((version === "v4" || !version) && ipv4Regex.test(ip) || (version === "v6" || !version) && ipv6Regex.test(ip));
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return !1;
  try {
    let [header] = jwt.split(".");
    if (!header)
      return !1;
    let base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "="), decoded = JSON.parse(atob(base64));
    return !(typeof decoded != "object" || decoded === null || "typ" in decoded && decoded?.typ !== "JWT" || !decoded.alg || alg && decoded.alg !== alg);
  } catch {
    return !1;
  }
}
function isValidCidr(ip, version) {
  return !!((version === "v4" || !version) && ipv4CidrRegex.test(ip) || (version === "v6" || !version) && ipv6CidrRegex.test(ip));
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = String(input.data)), this._getType(input) !== ZodParsedType.string) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      }), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      if (check.kind === "min")
        input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "max")
        input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "length") {
        let tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
        (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }) : tooSmall && addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }), status.dirty());
      } else if (check.kind === "email")
        emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "emoji")
        emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "uuid")
        uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "nanoid")
        nanoidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "nanoid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid")
        cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid2")
        cuid2Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "ulid")
        ulidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "url")
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          }), status.dirty();
        }
      else check.kind === "regex" ? (check.regex.lastIndex = 0, check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "regex",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty())) : check.kind === "trim" ? input.data = input.data.trim() : check.kind === "includes" ? input.data.includes(check.value, check.position) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { includes: check.value, position: check.position },
        message: check.message
      }), status.dirty()) : check.kind === "toLowerCase" ? input.data = input.data.toLowerCase() : check.kind === "toUpperCase" ? input.data = input.data.toUpperCase() : check.kind === "startsWith" ? input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { startsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "endsWith" ? input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { endsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "datetime" ? datetimeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "datetime",
        message: check.message
      }), status.dirty()) : check.kind === "date" ? dateRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "date",
        message: check.message
      }), status.dirty()) : check.kind === "time" ? timeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "time",
        message: check.message
      }), status.dirty()) : check.kind === "duration" ? durationRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "duration",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "ip" ? isValidIP(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "ip",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "jwt" ? isValidJWT(input.data, check.alg) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "jwt",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "cidr" ? isValidCidr(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "cidr",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64" ? base64Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64url" ? base64urlRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64url",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: options
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision > "u" ? null : options?.precision,
      offset: options?.offset ?? !1,
      local: options?.local ?? !1,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: options
    }) : this._addCheck({
      kind: "time",
      precision: typeof options?.precision > "u" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxLength() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodString.create = (params) => new ZodString({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodString,
  coerce: params?.coerce ?? !1,
  ...processCreateParams(params)
});
function floatSafeRemainder(val, step) {
  let valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = Number.parseInt(val.toFixed(decCount).replace(".", "")), stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = Number(input.data)), this._getType(input) !== ZodParsedType.number) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "int" ? util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: check.message
      }), status.dirty()) : check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? floatSafeRemainder(input.data, check.value) !== 0 && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : check.kind === "finite" ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_finite,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (let ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf")
        return !0;
      ch.kind === "min" ? (min === null || ch.value > min) && (min = ch.value) : ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: params?.coerce || !1,
  ...processCreateParams(params)
});
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce)
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    if (this._getType(input) !== ZodParsedType.bigint)
      return this._getInvalidInput(input);
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? input.data % check.value !== BigInt(0) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    let ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    }), INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodBigInt.create = (params) => new ZodBigInt({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodBigInt,
  coerce: params?.coerce ?? !1,
  ...processCreateParams(params)
});
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = !!input.data), this._getType(input) !== ZodParsedType.boolean) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: params?.coerce || !1,
  ...processCreateParams(params)
});
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = new Date(input.data)), this._getType(input) !== ZodParsedType.date) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      }), INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      check.kind === "min" ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        message: check.message,
        inclusive: !0,
        exact: !1,
        minimum: check.value,
        type: "date"
      }), status.dirty()) : check.kind === "max" ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        message: check.message,
        inclusive: !0,
        exact: !1,
        maximum: check.value,
        type: "date"
      }), status.dirty()) : util.assertNever(check);
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => new ZodDate({
  checks: [],
  coerce: params?.coerce || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(params)
});
var ZodSymbol = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.symbol) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(params)
});
var ZodUndefined = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(params)
});
var ZodNull = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.null) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(params)
});
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(params)
});
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(params)
});
var ZodNever = class extends ZodType {
  _parse(input) {
    let ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    }), INVALID;
  }
};
ZodNever.create = (params) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(params)
});
var ZodVoid = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(params)
});
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    let { ctx, status } = this._processInputParams(input), def = this._def;
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (def.exactLength !== null) {
      let tooBig = ctx.data.length > def.exactLength.value, tooSmall = ctx.data.length < def.exactLength.value;
      (tooBig || tooSmall) && (addIssueToContext(ctx, {
        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: tooSmall ? def.exactLength.value : void 0,
        maximum: tooBig ? def.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: def.exactLength.message
      }), status.dirty());
    }
    if (def.minLength !== null && ctx.data.length < def.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.minLength.message
    }), status.dirty()), def.maxLength !== null && ctx.data.length > def.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.maxLength.message
    }), status.dirty()), ctx.common.async)
      return Promise.all([...ctx.data].map((item, i) => def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i)))).then((result2) => ParseStatus.mergeArray(status, result2));
    let result = [...ctx.data].map((item, i) => def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => new ZodArray({
  type: schema,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(params)
});
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    let newShape = {};
    for (let key in schema.shape) {
      let fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else return schema instanceof ZodArray ? new ZodArray({
    ...schema._def,
    type: deepPartialify(schema.element)
  }) : schema instanceof ZodOptional ? ZodOptional.create(deepPartialify(schema.unwrap())) : schema instanceof ZodNullable ? ZodNullable.create(deepPartialify(schema.unwrap())) : schema instanceof ZodTuple ? ZodTuple.create(schema.items.map((item) => deepPartialify(item))) : schema;
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    let shape = this._def.shape(), keys = util.objectKeys(shape);
    return this._cached = { shape, keys }, this._cached;
  }
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.object) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      }), INVALID;
    }
    let { status, ctx } = this._processInputParams(input), { shape, keys: shapeKeys } = this._getCached(), extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (let key in ctx.data)
        shapeKeys.includes(key) || extraKeys.push(key);
    let pairs = [];
    for (let key of shapeKeys) {
      let keyValidator = shape[key], value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      let unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough")
        for (let key of extraKeys)
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
      else if (unknownKeys === "strict")
        extraKeys.length > 0 && (addIssueToContext(ctx, {
          code: ZodIssueCode.unrecognized_keys,
          keys: extraKeys
        }), status.dirty());
      else if (unknownKeys !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let catchall = this._def.catchall;
      for (let key of extraKeys) {
        let value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      let syncPairs = [];
      for (let pair of pairs) {
        let key = await pair.key, value = await pair.value;
        syncPairs.push({
          key,
          value,
          alwaysSet: pair.alwaysSet
        });
      }
      return syncPairs;
    }).then((syncPairs) => ParseStatus.mergeObjectSync(status, syncPairs)) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    return errorUtil.errToObj, new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          let defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          return issue.code === "unrecognized_keys" ? {
            message: errorUtil.errToObj(message).message ?? defaultError
          } : {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    return new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    let shape = {};
    for (let key of util.objectKeys(mask))
      mask[key] && this.shape[key] && (shape[key] = this.shape[key]);
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    let shape = {};
    for (let key of util.objectKeys(this.shape))
      mask[key] || (shape[key] = this.shape[key]);
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    let newShape = {};
    for (let key of util.objectKeys(this.shape)) {
      let fieldSchema = this.shape[key];
      mask && !mask[key] ? newShape[key] = fieldSchema : newShape[key] = fieldSchema.optional();
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    let newShape = {};
    for (let key of util.objectKeys(this.shape))
      if (mask && !mask[key])
        newShape[key] = this.shape[key];
      else {
        let newField = this.shape[key];
        for (; newField instanceof ZodOptional; )
          newField = newField._def.innerType;
        newShape[key] = newField;
      }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.strictCreate = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.lazycreate = (shape, params) => new ZodObject({
  shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
var ZodUnion = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), options = this._def.options;
    function handleResults(results) {
      for (let result of results)
        if (result.result.status === "valid")
          return result.result;
      for (let result of results)
        if (result.result.status === "dirty")
          return ctx.common.issues.push(...result.ctx.common.issues), result.result;
      let unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
    if (ctx.common.async)
      return Promise.all(options.map(async (option) => {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    {
      let dirty, issues = [];
      for (let option of options) {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        }, result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid")
          return result;
        result.status === "dirty" && !dirty && (dirty = { result, ctx: childCtx }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
      }
      if (dirty)
        return ctx.common.issues.push(...dirty.ctx.common.issues), dirty.result;
      let unionErrors = issues.map((issues2) => new ZodError(issues2));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => new ZodUnion({
  options: types,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(params)
});
var getDiscriminator = (type) => type instanceof ZodLazy ? getDiscriminator(type.schema) : type instanceof ZodEffects ? getDiscriminator(type.innerType()) : type instanceof ZodLiteral ? [type.value] : type instanceof ZodEnum ? type.options : type instanceof ZodNativeEnum ? util.objectValues(type.enum) : type instanceof ZodDefault ? getDiscriminator(type._def.innerType) : type instanceof ZodUndefined ? [void 0] : type instanceof ZodNull ? [null] : type instanceof ZodOptional ? [void 0, ...getDiscriminator(type.unwrap())] : type instanceof ZodNullable ? [null, ...getDiscriminator(type.unwrap())] : type instanceof ZodBranded || type instanceof ZodReadonly ? getDiscriminator(type.unwrap()) : type instanceof ZodCatch ? getDiscriminator(type._def.innerType) : [], ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let discriminator = this.discriminator, discriminatorValue = ctx.data[discriminator], option = this.optionsMap.get(discriminatorValue);
    return option ? ctx.common.async ? option._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : option._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [discriminator]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    let optionsMap = /* @__PURE__ */ new Map();
    for (let type of options) {
      let discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length)
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      for (let value of discriminatorValues) {
        if (optionsMap.has(value))
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  let aType = getParsedType(a), bType = getParsedType(b);
  if (a === b)
    return { valid: !0, data: a };
  if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    let bKeys = util.objectKeys(b), sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a, ...b };
    for (let key of sharedKeys) {
      let sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid)
        return { valid: !1 };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length)
      return { valid: !1 };
    let newArray = [];
    for (let index = 0; index < a.length; index++) {
      let itemA = a[index], itemB = b[index], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return { valid: !1 };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  } else return aType === ZodParsedType.date && bType === ZodParsedType.date && +a == +b ? { valid: !0, data: a } : { valid: !1 };
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight))
        return INVALID;
      let merged = mergeValues(parsedLeft.value, parsedRight.value);
      return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), { status: status.value, value: merged.data }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }),
      this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })
    ]).then(([left, right]) => handleParsed(left, right)) : handleParsed(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
};
ZodIntersection.create = (left, right, params) => new ZodIntersection({
  left,
  right,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(params)
});
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (ctx.data.length < this._def.items.length)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), INVALID;
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status.dirty());
    let items = [...ctx.data].map((item, itemIndex) => {
      let schema = this._def.items[itemIndex] || this._def.rest;
      return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
    }).filter((x) => !!x);
    return ctx.common.async ? Promise.all(items).then((results) => ParseStatus.mergeArray(status, results)) : ParseStatus.mergeArray(status, items);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let pairs = [], keyType = this._def.keyType, valueType = this._def.valueType;
    for (let key in ctx.data)
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    return ctx.common.async ? ParseStatus.mergeObjectAsync(status, pairs) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    return second instanceof ZodType ? new _ZodRecord({
      keyType: first,
      valueType: second,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(third)
    }) : new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}, ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      }), INVALID;
    let keyType = this._def.keyType, valueType = this._def.valueType, pairs = [...ctx.data.entries()].map(([key, value], index) => ({
      key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
      value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
    }));
    if (ctx.common.async) {
      let finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let pair of pairs) {
          let key = await pair.key, value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted")
            return INVALID;
          (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      let finalMap = /* @__PURE__ */ new Map();
      for (let pair of pairs) {
        let key = pair.key, value = pair.value;
        if (key.status === "aborted" || value.status === "aborted")
          return INVALID;
        (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => new ZodMap({
  valueType,
  keyType,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(params)
});
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      }), INVALID;
    let def = this._def;
    def.minSize !== null && ctx.data.size < def.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.minSize.message
    }), status.dirty()), def.maxSize !== null && ctx.data.size > def.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.maxSize.message
    }), status.dirty());
    let valueType = this._def.valueType;
    function finalizeSet(elements2) {
      let parsedSet = /* @__PURE__ */ new Set();
      for (let element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        element.status === "dirty" && status.dirty(), parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    let elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ctx.common.async ? Promise.all(elements).then((elements2) => finalizeSet(elements2)) : finalizeSet(elements);
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => new ZodSet({
  valueType,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(params)
});
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      }), INVALID;
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    let params = { errorMap: ctx.common.contextualErrorMap }, fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      let me = this;
      return OK(async function(...args) {
        let error = new ZodError([]), parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          throw error.addIssue(makeArgsIssue(args, e)), error;
        }), result = await Reflect.apply(fn, this, parsedArgs);
        return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          throw error.addIssue(makeReturnsIssue(result, e)), error;
        });
      });
    } else {
      let me = this;
      return OK(function(...args) {
        let parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success)
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        let result = Reflect.apply(fn, this, parsedArgs.data), parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success)
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    return this.parse(func);
  }
  strictImplement(func) {
    return this.parse(func);
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args || ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}, ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    return this._def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => new ZodLazy({
  getter,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(params)
});
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => new ZodLiteral({
  value,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(params)
});
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data != "string") {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(input.data)) {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Values() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    let nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(util.getValidEnumValues(this._def.values))), !this._cache.has(input.data)) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => new ZodNativeEnum({
  values,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(params)
});
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === !1)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      }), INVALID;
    let promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => this._def.type.parseAsync(data, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
};
ZodPromise.create = (schema, params) => new ZodPromise({
  type: schema,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(params)
});
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), effect = this._def.effect || null, checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), effect.type === "preprocess") {
      let processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async)
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          let result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          return result.status === "aborted" ? INVALID : result.status === "dirty" ? DIRTY(result.value) : status.value === "dirty" ? DIRTY(result.value) : result;
        });
      {
        if (status.value === "aborted")
          return INVALID;
        let result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        return result.status === "aborted" ? INVALID : result.status === "dirty" ? DIRTY(result.value) : status.value === "dirty" ? DIRTY(result.value) : result;
      }
    }
    if (effect.type === "refinement") {
      let executeRefinement = (acc) => {
        let result = effect.refinement(acc, checkCtx);
        if (ctx.common.async)
          return Promise.resolve(result);
        if (result instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return acc;
      };
      if (ctx.common.async === !1) {
        let inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value), { status: status.value, value: inner.value });
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value).then(() => ({ status: status.value, value: inner.value }))));
    }
    if (effect.type === "transform")
      if (ctx.common.async === !1) {
        let base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        let result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: status.value, value: result };
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
          status: status.value,
          value: result
        })) : INVALID);
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => new ZodEffects({
  schema,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect,
  ...processCreateParams(params)
});
ZodEffects.createWithPreprocess = (preprocess, schema, params) => new ZodEffects({
  schema,
  effect: { type: "preprocess", transform: preprocess },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(params)
});
var ZodOptional = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => new ZodOptional({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(params)
});
var ZodNullable = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => new ZodNullable({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(params)
});
var ZodDefault = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return ctx.parsedType === ZodParsedType.undefined && (data = this._def.defaultValue()), this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => new ZodDefault({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof params.default == "function" ? params.default : () => params.default,
  ...processCreateParams(params)
});
var ZodCatch = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    }, result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    return isAsync(result) ? result.then((result2) => ({
      status: "valid",
      value: result2.status === "valid" ? result2.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    })) : {
      status: "valid",
      value: result.status === "valid" ? result.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => new ZodCatch({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof params.catch == "function" ? params.catch : () => params.catch,
  ...processCreateParams(params)
});
var ZodNaN = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.nan) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(params)
});
var BRAND = /* @__PURE__ */ Symbol("zod_brand"), ZodBranded = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}, ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.common.async)
      return (async () => {
        let inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), DIRTY(inResult.value)) : this._def.out._parseAsync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      })();
    {
      let inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), {
        status: "dirty",
        value: inResult.value
      }) : this._def.out._parseSync({
        data: inResult.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}, ZodReadonly = class extends ZodType {
  _parse(input) {
    let result = this._def.innerType._parse(input), freeze = (data) => (isValid(data) && (data.value = Object.freeze(data.value)), data);
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => new ZodReadonly({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(params)
});
function cleanParams(params, data) {
  let p = typeof params == "function" ? params(data) : typeof params == "string" ? { message: params } : params;
  return typeof p == "string" ? { message: p } : p;
}
function custom(check, _params = {}, fatal) {
  return check ? ZodAny.create().superRefine((data, ctx) => {
    let r = check(data);
    if (r instanceof Promise)
      return r.then((r2) => {
        if (!r2) {
          let params = cleanParams(_params, data), _fatal = params.fatal ?? fatal ?? !0;
          ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
        }
      });
    if (!r) {
      let params = cleanParams(_params, data), _fatal = params.fatal ?? fatal ?? !0;
      ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
    }
  }) : ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
}, ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2.ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline", ZodFirstPartyTypeKind2.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, ostring = () => stringType().optional(), onumber = () => numberType().optional(), oboolean = () => booleanType().optional(), coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: !0 })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: !0 })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: !0
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: !0 })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: !0 }))
};
var NEVER = INVALID;

// src/workers/local-explorer/common.ts
function validateQuery(schema) {
  return validator("query", async (value, c) => {
    let result;
    try {
      let coerced = coerceValue(schema, value);
      result = await schema.safeParseAsync(coerced);
    } catch (error) {
      if (error instanceof external_exports.ZodError)
        return validationHook({ success: !1, error }, c);
      throw error;
    }
    return result.success ? result.data : validationHook(result, c);
  });
}
function validateRequestBody(schema) {
  return validator("json", async (value, c) => {
    let result = await schema.safeParseAsync(value);
    return result.success ? result.data : validationHook(result, c);
  });
}
function coerceValue(schema, value, path = []) {
  if (schema instanceof external_exports.ZodOptional || schema instanceof external_exports.ZodDefault)
    return value === void 0 ? value : coerceValue(schema._def.innerType, value, path);
  if (schema instanceof external_exports.ZodNumber && typeof value == "string") {
    let num = Number(value);
    if (isNaN(num))
      throw new external_exports.ZodError([
        {
          code: external_exports.ZodIssueCode.invalid_type,
          expected: "number",
          received: "string",
          path,
          message: `Expected query param to be number but received "${value}"`
        }
      ]);
    return num;
  }
  if (schema instanceof external_exports.ZodBoolean && typeof value == "string") {
    if (value === "true") return !0;
    if (value === "false") return !1;
    throw new external_exports.ZodError([
      {
        code: external_exports.ZodIssueCode.invalid_type,
        expected: "boolean",
        received: "string",
        path,
        message: `Expected query param to be 'true' or 'false' but received "${value}"`
      }
    ]);
  }
  if (schema instanceof external_exports.ZodArray && Array.isArray(value))
    return value.map(
      (item, index) => coerceValue(schema.element, item, [...path, index])
    );
  if (schema instanceof external_exports.ZodObject && typeof value == "object" && value !== null) {
    let result = {};
    for (let [key, propSchema] of Object.entries(schema.shape))
      key in value && (result[key] = coerceValue(
        propSchema,
        value[key],
        [...path, key]
      ));
    return result;
  }
  return value;
}
function validationHook(result, c) {
  let errors = result.error.errors.map((e) => ({
    code: 10001,
    message: e.path.length > 0 ? `${e.path.join(".")}: ${e.message}` : e.message
  }));
  return c.json({ success: !1, errors, messages: [], result: null }, 400);
}
function wrapResponse(result) {
  return {
    success: !0,
    errors: [],
    messages: [],
    result
  };
}
function errorResponse(status, code, message) {
  return Response.json(
    {
      success: !1,
      errors: [{ code, message }],
      messages: [],
      result: null
    },
    { status }
  );
}

// src/workers/local-explorer/generated/zod.gen.ts
var zR2Messages = external_exports.array(external_exports.string()), zR2Errors = external_exports.array(
  external_exports.object({
    code: external_exports.number().int().gte(1e3),
    message: external_exports.string()
  })
), zR2V4Response = external_exports.object({
  errors: zR2Errors,
  messages: zR2Messages,
  result: external_exports.record(external_exports.unknown()),
  success: external_exports.literal(!0)
}), zR2BucketName = external_exports.string().min(3).max(64).regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]/), zR2V4ResponseFailure = external_exports.object({
  errors: zR2Errors,
  messages: zR2Messages,
  result: external_exports.unknown().nullable(),
  success: external_exports.literal(!1)
}), zR2Bucket = external_exports.object({
  creation_date: external_exports.string().optional(),
  name: zR2BucketName.optional()
}), zR2ResultInfo = external_exports.record(external_exports.unknown()), zR2V4ResponseList = zR2V4Response.and(
  external_exports.object({
    result_info: zR2ResultInfo.optional()
  })
), zWorkersCursor = external_exports.string(), zWorkersObject = external_exports.object({
  hasStoredData: external_exports.boolean().readonly().optional(),
  id: external_exports.string().readonly().optional(),
  name: external_exports.string().readonly().optional()
}), zWorkersSchemasId = external_exports.string(), zWorkersMessages = external_exports.array(
  external_exports.object({
    code: external_exports.number().int().gte(1e3),
    documentation_url: external_exports.string().optional(),
    message: external_exports.string(),
    source: external_exports.object({
      pointer: external_exports.string().optional()
    }).optional()
  })
), zWorkersApiResponseCommonFailure = external_exports.object({
  errors: zWorkersMessages,
  messages: zWorkersMessages,
  result: external_exports.unknown().nullable(),
  success: external_exports.literal(!1)
}), zWorkersNamespace = external_exports.object({
  class: external_exports.string().optional(),
  id: external_exports.string().readonly().optional(),
  name: external_exports.string().optional(),
  script: external_exports.string().optional(),
  use_sqlite: external_exports.boolean().optional()
}), zWorkersApiResponseCommon = external_exports.object({
  errors: zWorkersMessages,
  messages: zWorkersMessages,
  success: external_exports.literal(!0)
}), zWorkersApiResponseCollection = zWorkersApiResponseCommon.and(
  external_exports.object({
    result_info: external_exports.object({
      count: external_exports.number().optional(),
      page: external_exports.number().optional(),
      per_page: external_exports.number().optional(),
      total_count: external_exports.number().optional(),
      total_pages: external_exports.number().optional()
    }).optional()
  })
), zD1QueryMeta = external_exports.object({
  changed_db: external_exports.boolean().optional(),
  changes: external_exports.number().optional(),
  duration: external_exports.number().optional(),
  last_row_id: external_exports.number().optional(),
  rows_read: external_exports.number().optional(),
  rows_written: external_exports.number().optional(),
  size_after: external_exports.number().optional(),
  timings: external_exports.object({
    sql_duration_ms: external_exports.number().optional()
  }).optional()
}), zD1RawResultResponse = external_exports.object({
  meta: zD1QueryMeta.optional(),
  results: external_exports.object({
    columns: external_exports.array(external_exports.string()).optional(),
    rows: external_exports.array(
      external_exports.array(external_exports.union([external_exports.number(), external_exports.string(), external_exports.record(external_exports.unknown())]))
    ).optional()
  }).optional(),
  success: external_exports.boolean().optional()
}), zD1Sql = external_exports.string(), zD1Params = external_exports.array(external_exports.string()), zD1SingleQuery = external_exports.object({
  params: zD1Params.optional(),
  sql: zD1Sql
}), zD1BatchQuery = external_exports.union([
  zD1SingleQuery,
  external_exports.object({
    batch: external_exports.array(zD1SingleQuery)
  })
]), zD1DatabaseIdentifier = external_exports.string().readonly(), zD1Messages = external_exports.array(
  external_exports.object({
    code: external_exports.number().int().gte(1e3),
    message: external_exports.string()
  })
), zD1ApiResponseCommonFailure = external_exports.object({
  errors: zD1Messages,
  messages: zD1Messages,
  result: external_exports.unknown().nullable(),
  success: external_exports.literal(!1)
}), zD1DatabaseVersion = external_exports.string().regex(/^(alpha|beta|production)$/), zD1DatabaseName = external_exports.string().regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/), zD1JurisdictionNullable = external_exports.enum(["eu", "fedramp"]), zD1DatabaseResponse = external_exports.object({
  jurisdiction: zD1JurisdictionNullable.optional(),
  name: zD1DatabaseName.optional(),
  uuid: zD1DatabaseIdentifier.optional(),
  version: zD1DatabaseVersion.optional()
}), zD1ApiResponseCommon = external_exports.object({
  errors: zD1Messages,
  messages: zD1Messages,
  success: external_exports.literal(!0)
}), zWorkersKvAny = external_exports.union([
  external_exports.string(),
  external_exports.number(),
  external_exports.number().int(),
  external_exports.boolean(),
  external_exports.record(external_exports.unknown()),
  external_exports.array(external_exports.lazy(() => zWorkersKvAny))
]).nullable(), zWorkersKvExpiration = external_exports.number(), zWorkersKvBulkGetResultWithMetadata = external_exports.object({
  values: external_exports.record(
    external_exports.object({
      expiration: zWorkersKvExpiration.optional(),
      metadata: zWorkersKvAny.and(external_exports.unknown()),
      value: zWorkersKvAny.and(external_exports.unknown())
    }).nullable()
  ).optional()
}), zWorkersKvBulkGetResult = external_exports.object({
  values: external_exports.record(
    external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean(), external_exports.record(external_exports.unknown())]).nullable()
  ).optional()
}), zWorkersKvKeyNameBulk = external_exports.string().max(512), zWorkersKvMessages = external_exports.array(
  external_exports.object({
    code: external_exports.number().int().gte(1e3),
    message: external_exports.string()
  })
), zWorkersKvApiResponseCommon = external_exports.object({
  errors: zWorkersKvMessages,
  messages: zWorkersKvMessages,
  success: external_exports.literal(!0)
}), zWorkersKvApiResponseCommonNoResult = zWorkersKvApiResponseCommon.and(
  external_exports.object({
    result: external_exports.record(external_exports.unknown()).nullish()
  })
), zWorkersKvMetadata = zWorkersKvAny.and(external_exports.unknown()), zWorkersKvValue = external_exports.union([external_exports.string(), external_exports.string()]), zWorkersKvKeyName = external_exports.string().max(512), zWorkersKvCursor = external_exports.string(), zWorkersKvCursorResultInfo = external_exports.object({
  count: external_exports.number().optional(),
  cursor: zWorkersKvCursor.optional()
}), zWorkersKvListMetadata = zWorkersKvAny.and(external_exports.unknown()), zWorkersKvKey = external_exports.object({
  expiration: external_exports.number().optional(),
  metadata: zWorkersKvListMetadata.optional(),
  name: zWorkersKvKeyName
}), zWorkersKvNamespaceIdentifier = external_exports.string().max(32).readonly(), zWorkersKvApiResponseCommonFailure = external_exports.object({
  errors: zWorkersKvMessages,
  messages: zWorkersKvMessages,
  result: external_exports.record(external_exports.unknown()).nullable(),
  success: external_exports.literal(!1)
}), zWorkersKvNamespaceTitle = external_exports.string().max(512), zWorkersKvNamespace = external_exports.object({
  id: zWorkersKvNamespaceIdentifier,
  title: zWorkersKvNamespaceTitle
}), zWorkersKvResultInfo = external_exports.object({
  count: external_exports.number().optional()
}), zWorkersKvApiResponseCollection = zWorkersKvApiResponseCommon.and(
  external_exports.object({
    result_info: zWorkersKvResultInfo.optional()
  })
), zR2Object = external_exports.object({
  key: external_exports.string().optional(),
  etag: external_exports.string().optional(),
  size: external_exports.number().int().optional(),
  last_modified: external_exports.string().datetime().optional(),
  http_metadata: external_exports.record(external_exports.string()).optional(),
  custom_metadata: external_exports.record(external_exports.string()).optional()
}), zR2ListObjectsResultInfo = external_exports.object({
  delimited: external_exports.array(external_exports.string()).optional(),
  cursor: external_exports.string().optional(),
  is_truncated: external_exports.string().optional()
}), zR2HeadObjectResult = external_exports.object({
  key: external_exports.string().optional(),
  etag: external_exports.string().optional(),
  last_modified: external_exports.string().optional(),
  size: external_exports.number().int().optional(),
  http_metadata: external_exports.record(external_exports.string()).optional(),
  custom_metadata: external_exports.record(external_exports.string()).optional()
}), zR2PutObjectResult = external_exports.object({
  key: external_exports.string().optional(),
  etag: external_exports.string().optional(),
  size: external_exports.number().int().optional(),
  version: external_exports.string().optional()
}), zDoSqlWithParams = external_exports.object({
  sql: external_exports.string().min(1),
  params: external_exports.array(external_exports.unknown()).optional()
}), zDoQueryById = external_exports.object({
  durable_object_id: external_exports.string().min(1),
  queries: external_exports.array(zDoSqlWithParams)
}), zDoQueryByName = external_exports.object({
  durable_object_name: external_exports.string().min(1),
  queries: external_exports.array(zDoSqlWithParams)
}), zDoRawQueryResult = external_exports.object({
  columns: external_exports.array(external_exports.string()).optional(),
  rows: external_exports.array(external_exports.array(external_exports.unknown())).optional(),
  meta: external_exports.object({
    rows_read: external_exports.number().optional(),
    rows_written: external_exports.number().optional()
  }).optional()
}), zLocalExplorerResourceBinding = external_exports.object({
  id: external_exports.string(),
  bindingName: external_exports.string()
}), zLocalExplorerDoBinding = external_exports.object({
  id: external_exports.string(),
  bindingName: external_exports.string(),
  className: external_exports.string(),
  scriptName: external_exports.string(),
  useSqlite: external_exports.boolean()
}), zLocalExplorerWorkflowBinding = external_exports.object({
  id: external_exports.string(),
  bindingName: external_exports.string(),
  className: external_exports.string(),
  scriptName: external_exports.string()
}), zLocalExplorerWorkerBindings = external_exports.object({
  kv: external_exports.array(zLocalExplorerResourceBinding).optional(),
  d1: external_exports.array(zLocalExplorerResourceBinding).optional(),
  r2: external_exports.array(zLocalExplorerResourceBinding).optional(),
  do: external_exports.array(zLocalExplorerDoBinding).optional(),
  workflows: external_exports.array(zLocalExplorerWorkflowBinding).optional()
}), zLocalExplorerWorker = external_exports.object({
  isSelf: external_exports.boolean(),
  name: external_exports.string(),
  bindings: zLocalExplorerWorkerBindings.optional()
}), zWorkflowsWorkflowName = external_exports.string(), zWorkflowsInstanceId = external_exports.string(), zWorkflowsWorkflow = external_exports.object({
  name: external_exports.string(),
  class_name: external_exports.string().optional(),
  script_name: external_exports.string().optional()
}), zWorkflowsWorkflowDetails = external_exports.object({
  name: external_exports.string(),
  class_name: external_exports.string(),
  script_name: external_exports.string(),
  instances: external_exports.object({
    complete: external_exports.number().optional(),
    errored: external_exports.number().optional(),
    paused: external_exports.number().optional(),
    queued: external_exports.number().optional(),
    running: external_exports.number().optional(),
    terminated: external_exports.number().optional(),
    waiting: external_exports.number().optional(),
    waitingForPause: external_exports.number().optional()
  })
}), zWorkflowsInstance = external_exports.object({
  id: external_exports.string(),
  status: external_exports.enum([
    "queued",
    "running",
    "paused",
    "errored",
    "terminated",
    "complete",
    "waitingForPause",
    "waiting",
    "unknown"
  ]).optional(),
  created_on: external_exports.string().optional()
}), zWorkflowsInstanceDetails = external_exports.object({
  id: external_exports.string(),
  status: external_exports.enum([
    "queued",
    "running",
    "paused",
    "errored",
    "terminated",
    "complete",
    "waitingForPause",
    "waiting",
    "unknown"
  ]),
  output: external_exports.unknown().optional(),
  error: external_exports.object({
    name: external_exports.string().optional(),
    message: external_exports.string().optional()
  }).optional()
}), zR2ResultInfoWritable = external_exports.record(external_exports.unknown()), zWorkersNamespaceWritable = external_exports.object({
  class: external_exports.string().optional(),
  name: external_exports.string().optional(),
  script: external_exports.string().optional(),
  use_sqlite: external_exports.boolean().optional()
}), zD1DatabaseResponseWritable = external_exports.object({
  jurisdiction: zD1JurisdictionNullable.optional(),
  name: zD1DatabaseName.optional(),
  version: zD1DatabaseVersion.optional()
}), zWorkersKvAnyWritable = external_exports.union([
  external_exports.string(),
  external_exports.number(),
  external_exports.number().int(),
  external_exports.boolean(),
  external_exports.record(external_exports.unknown()),
  external_exports.array(external_exports.lazy(() => zWorkersKvAnyWritable))
]).nullable(), zWorkersKvMetadataWritable = zWorkersKvAnyWritable.and(
  external_exports.unknown()
), zWorkersKvListMetadataWritable = zWorkersKvAnyWritable.and(
  external_exports.unknown()
), zWorkersKvNamespaceWritable = external_exports.object({
  title: zWorkersKvNamespaceTitle
}), zWorkersKvNamespaceListNamespacesData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.never().optional(),
  query: external_exports.object({
    order: external_exports.enum(["id", "title"]).optional(),
    direction: external_exports.enum(["asc", "desc"]).optional()
  }).optional()
}), zWorkersKvNamespaceListNamespacesResponse = zWorkersKvApiResponseCollection.and(
  external_exports.object({
    result: external_exports.array(zWorkersKvNamespace).optional()
  })
), zWorkersKvNamespaceListANamespaceSKeysData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: external_exports.object({
    limit: external_exports.number().gte(10).lte(1e3).optional().default(1e3),
    prefix: external_exports.string().optional(),
    cursor: external_exports.string().optional()
  }).optional()
}), zWorkersKvNamespaceListANamespaceSKeysResponse = zWorkersKvApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zWorkersKvKey).optional(),
    result_info: zWorkersKvCursorResultInfo.optional()
  })
), zWorkersKvNamespaceDeleteKeyValuePairData = external_exports.object({
  body: external_exports.unknown(),
  path: external_exports.object({
    key_name: zWorkersKvKeyName,
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: external_exports.never().optional()
});
var zWorkersKvNamespaceReadKeyValuePairData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    key_name: zWorkersKvKeyName,
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: external_exports.never().optional()
});
var zWorkersKvNamespaceWriteKeyValuePairWithMetadataData = external_exports.object({
  body: zWorkersKvValue,
  path: external_exports.object({
    key_name: zWorkersKvKeyName,
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: external_exports.never().optional()
});
var zWorkersKvNamespaceGetMultipleKeyValuePairsData = external_exports.object({
  body: external_exports.object({
    keys: external_exports.array(zWorkersKvKeyNameBulk).max(100)
  }),
  path: external_exports.object({
    namespace_id: zWorkersKvNamespaceIdentifier
  }),
  query: external_exports.never().optional()
}), zWorkersKvNamespaceGetMultipleKeyValuePairsResponse = zWorkersKvApiResponseCommonNoResult.and(
  external_exports.object({
    result: external_exports.union([zWorkersKvBulkGetResult, zWorkersKvBulkGetResultWithMetadata]).optional()
  })
), zD1ListDatabasesData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.never().optional(),
  query: external_exports.object({
    name: external_exports.string().optional()
  }).optional()
}), zD1ListDatabasesResponse = zD1ApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zD1DatabaseResponse).optional(),
    result_info: external_exports.object({
      count: external_exports.number().optional()
    }).optional()
  })
), zD1RawDatabaseQueryData = external_exports.object({
  body: zD1BatchQuery,
  path: external_exports.object({
    database_id: zD1DatabaseIdentifier
  }),
  query: external_exports.never().optional()
}), zD1RawDatabaseQueryResponse = zD1ApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zD1RawResultResponse).optional()
  })
), zDurableObjectsNamespaceListNamespacesData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.never().optional(),
  query: external_exports.never().optional()
}), zDurableObjectsNamespaceListNamespacesResponse = zWorkersApiResponseCollection.and(
  external_exports.object({
    result: external_exports.array(zWorkersNamespace).optional()
  })
), zDurableObjectsNamespaceListObjectsData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    id: zWorkersSchemasId
  }),
  query: external_exports.object({
    limit: external_exports.number().gte(10).lte(1e4).optional().default(1e3),
    cursor: external_exports.string().optional()
  }).optional()
}), zDurableObjectsNamespaceListObjectsResponse = zWorkersApiResponseCollection.and(
  external_exports.object({
    result: external_exports.array(zWorkersObject).optional(),
    result_info: external_exports.object({
      count: external_exports.number().optional(),
      cursor: zWorkersCursor.optional()
    }).optional()
  })
), zR2ListBucketsData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.never().optional(),
  query: external_exports.never().optional()
}), zR2ListBucketsResponse = zR2V4ResponseList.and(
  external_exports.object({
    result: external_exports.object({
      buckets: external_exports.array(zR2Bucket).optional()
    }).optional()
  })
), zR2GetBucketData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    bucket_name: zR2BucketName
  }),
  query: external_exports.never().optional()
}), zR2GetBucketResponse = zR2V4Response.and(
  external_exports.object({
    result: zR2Bucket.optional()
  })
), zR2BucketDeleteObjectsData = external_exports.object({
  body: external_exports.array(external_exports.string()),
  path: external_exports.object({
    bucket_name: external_exports.string()
  }),
  query: external_exports.never().optional()
}), zR2BucketDeleteObjectsResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(
      external_exports.object({
        key: external_exports.string().optional()
      })
    ).optional()
  })
), zR2BucketListObjectsData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    bucket_name: external_exports.string()
  }),
  query: external_exports.object({
    prefix: external_exports.string().optional(),
    delimiter: external_exports.string().optional(),
    cursor: external_exports.string().optional(),
    per_page: external_exports.number().int().optional().default(1e3)
  }).optional()
}), zR2BucketListObjectsResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zR2Object).optional(),
    result_info: zR2ListObjectsResultInfo.optional()
  })
), zR2BucketGetObjectData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    bucket_name: external_exports.string(),
    object_key: external_exports.string()
  }),
  query: external_exports.never().optional(),
  headers: external_exports.object({
    "cf-metadata-only": external_exports.string().optional()
  }).optional()
}), zR2BucketGetObjectResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: zR2HeadObjectResult.optional()
  })
), zR2BucketPutObjectData = external_exports.object({
  body: external_exports.string(),
  path: external_exports.object({
    bucket_name: external_exports.string(),
    object_key: external_exports.string()
  }),
  query: external_exports.never().optional(),
  headers: external_exports.object({
    "content-type": external_exports.string().optional(),
    "cf-r2-custom-metadata": external_exports.string().optional()
  }).optional()
}), zR2BucketPutObjectResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: zR2PutObjectResult.optional()
  })
), zDurableObjectsNamespaceQuerySqliteData = external_exports.object({
  body: external_exports.union([zDoQueryById, zDoQueryByName]),
  path: external_exports.object({
    namespace_id: zWorkersSchemasId
  }),
  query: external_exports.never().optional()
}), zDurableObjectsNamespaceQuerySqliteResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zDoRawQueryResult).optional()
  })
), zLocalExplorerListWorkersData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.never().optional(),
  query: external_exports.never().optional()
}), zLocalExplorerListWorkersResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zLocalExplorerWorker).optional()
  })
), zWorkflowsListWorkflowsData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.never().optional(),
  query: external_exports.never().optional()
}), zWorkflowsListWorkflowsResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zWorkflowsWorkflow).optional(),
    result_info: external_exports.object({
      count: external_exports.number().optional()
    }).optional()
  })
), zWorkflowsDeleteWorkflowData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: external_exports.never().optional()
}), zWorkflowsDeleteWorkflowResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.object({
      status: external_exports.string().optional(),
      success: external_exports.boolean().optional()
    }).optional()
  })
), zWorkflowsGetWorkflowDetailsData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: external_exports.never().optional()
}), zWorkflowsGetWorkflowDetailsResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: zWorkflowsWorkflowDetails.optional()
  })
), zWorkflowsListInstancesData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: external_exports.object({
    page: external_exports.number().gte(1).optional().default(1),
    per_page: external_exports.number().gte(1).lte(100).optional().default(25),
    status: external_exports.enum([
      "queued",
      "running",
      "paused",
      "errored",
      "terminated",
      "complete",
      "waitingForPause",
      "waiting"
    ]).optional()
  }).optional()
}), zWorkflowsListInstancesResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.array(zWorkflowsInstance).optional(),
    result_info: external_exports.object({
      page: external_exports.number().optional(),
      per_page: external_exports.number().optional(),
      total_count: external_exports.number().optional(),
      total_pages: external_exports.number().optional()
    }).optional()
  })
), zWorkflowsCreateInstanceData = external_exports.object({
  body: external_exports.object({
    id: external_exports.string().optional(),
    params: external_exports.unknown().optional()
  }).optional(),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName
  }),
  query: external_exports.never().optional()
}), zWorkflowsCreateInstanceResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.object({
      id: external_exports.string()
    }).optional()
  })
), zWorkflowsDeleteInstanceData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId
  }),
  query: external_exports.never().optional()
}), zWorkflowsDeleteInstanceResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.object({
      success: external_exports.boolean().optional()
    }).optional()
  })
), zWorkflowsGetInstanceDetailsData = external_exports.object({
  body: external_exports.never().optional(),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId
  }),
  query: external_exports.never().optional()
}), zWorkflowsGetInstanceDetailsResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: zWorkflowsInstanceDetails.optional()
  })
), zWorkflowsChangeInstanceStatusData = external_exports.object({
  body: external_exports.object({
    action: external_exports.enum(["pause", "resume", "restart", "terminate"]),
    from: external_exports.object({
      name: external_exports.string(),
      count: external_exports.number().int().gte(1).optional(),
      type: external_exports.enum(["do", "sleep", "waitForEvent"]).optional()
    }).optional()
  }),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId
  }),
  query: external_exports.never().optional()
}), zWorkflowsChangeInstanceStatusResponse = zWorkersApiResponseCommon.and(
  external_exports.object({
    result: external_exports.object({
      success: external_exports.boolean().optional()
    }).optional()
  })
), zWorkflowsSendInstanceEventData = external_exports.object({
  body: external_exports.unknown().optional(),
  path: external_exports.object({
    workflow_name: zWorkflowsWorkflowName,
    instance_id: zWorkflowsInstanceId,
    event_type: external_exports.string()
  }),
  query: external_exports.never().optional()
});

// src/workers/local-explorer/openapi.local.json
var openapi_local_default = {
  openapi: "3.0.3",
  info: {
    title: "Local Explorer API",
    description: "A local subset of the Cloudflare API for inspecting and modifying resource state during local development. Supports D1, R2, KV, Durable Objects and Workflows.",
    version: "0.0.1"
  },
  servers: [
    {
      description: "Local Explorer",
      url: "/cdn-cgi/explorer/api"
    }
  ],
  paths: {
    "/storage/kv/namespaces": {
      get: {
        description: "Returns the namespaces owned by an account.",
        operationId: "workers-kv-namespace-list-namespaces",
        parameters: [
          {
            in: "query",
            name: "order",
            schema: {
              description: "Field to order results by.",
              enum: ["id", "title"],
              example: "id",
              type: "string"
            }
          },
          {
            in: "query",
            name: "direction",
            schema: {
              description: "Direction to order namespaces.",
              enum: ["asc", "desc"],
              example: "asc",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_api-response-collection"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers-kv_namespace"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Namespaces response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "List Namespaces response failure."
          }
        },
        summary: "List Namespaces",
        tags: ["Workers KV Namespace"]
      }
    },
    "/storage/kv/namespaces/{namespace_id}/keys": {
      get: {
        description: "Lists a namespace's keys.",
        operationId: "workers-kv-namespace-list-a-namespace'-s-keys",
        parameters: [
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          },
          {
            in: "query",
            name: "limit",
            schema: {
              default: 1e3,
              description: "Limits the number of keys returned in the response. The cursor attribute may be used to iterate over the next batch of keys if there are more than the limit.",
              maximum: 1e3,
              minimum: 10,
              type: "number"
            }
          },
          {
            in: "query",
            name: "prefix",
            schema: {
              description: "Filters returned keys by a name prefix. Exact matches and any key names that begin with the prefix will be returned.",
              example: "My-Prefix",
              type: "string"
            }
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              description: "Opaque token indicating the position from which to continue when requesting the next set of records if the amount of list results was limited by the limit parameter. A valid value for the cursor can be obtained from the `cursors` object in the `result_info` structure.",
              example: "6Ck1la0VxJ0djhidm1MdX2FyDGxLKVeeHZZmORS_8XeSuhz9SjIJRaSa2lnsF01tQOHrfTGAP3R5X1Kv5iVUuMbNKhWNAXHOl6ePB0TUL8nw",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers-kv_key"
                          },
                          type: "array"
                        },
                        result_info: {
                          $ref: "#/components/schemas/workers-kv_cursor_result_info"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List a Namespace's Keys response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "List a Namespace's Keys response failure."
          }
        },
        summary: "List a Namespace's Keys",
        tags: ["Workers KV Namespace"]
      }
    },
    "/storage/kv/namespaces/{namespace_id}/values/{key_name}": {
      get: {
        description: "Returns the value associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. If the KV-pair is set to expire at some point, the expiration time as measured in seconds since the UNIX epoch will be returned in the `expiration` response header.",
        operationId: "workers-kv-namespace-read-key-value-pair",
        parameters: [
          {
            in: "path",
            name: "key_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_key_name"
            }
          },
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/octet-stream": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_value"
                }
              }
            },
            description: "Read key-value pair response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Read key-value pair response failure."
          }
        },
        summary: "Read key-value pair",
        tags: ["Workers KV Namespace"]
      },
      put: {
        description: "Write a value identified by a key. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. Body should be the value to be stored. If JSON metadata to be associated with the key/value pair is needed, use `multipart/form-data` content type for your PUT request (see dropdown below in `REQUEST BODY SCHEMA`). Existing values, expirations, and metadata will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.",
        operationId: "workers-kv-namespace-write-key-value-pair-with-metadata",
        parameters: [
          {
            in: "path",
            name: "key_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_key_name"
            }
          },
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/octet-stream": {
              schema: {
                $ref: "#/components/schemas/workers-kv_value"
              }
            },
            "multipart/form-data": {
              encoding: {
                metadata: {
                  contentType: "application/json"
                }
              },
              schema: {
                properties: {
                  metadata: {
                    $ref: "#/components/schemas/workers-kv_metadata"
                  },
                  value: {
                    $ref: "#/components/schemas/workers-kv_value"
                  }
                },
                required: ["value"],
                type: "object"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-no-result"
                }
              }
            },
            description: "Write key-value pair with metadata response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Write key-value pair with metadata response failure."
          }
        },
        summary: "Write key-value pair with optional metadata",
        tags: ["Workers KV Namespace"]
      },
      delete: {
        description: "Remove a KV pair from the namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name.",
        operationId: "workers-kv-namespace-delete-key-value-pair",
        parameters: [
          {
            in: "path",
            name: "key_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_key_name"
            }
          },
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {}
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-no-result"
                }
              }
            },
            description: "Delete key-value pair response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Delete key-value pair response failure."
          }
        },
        summary: "Delete key-value pair",
        tags: ["Workers KV Namespace"]
      }
    },
    "/storage/kv/namespaces/{namespace_id}/bulk/get": {
      post: {
        description: "Retrieve up to 100 KV pairs from the namespace. Keys must contain text-based values. JSON values can optionally be parsed instead of being returned as a string value. Metadata can be included if `withMetadata` is true.",
        operationId: "workers-kv-namespace-get-multiple-key-value-pairs",
        parameters: [
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers-kv_namespace_identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                properties: {
                  keys: {
                    description: "Array of keys to retrieve (maximum of 100).",
                    items: {
                      $ref: "#/components/schemas/workers-kv_key_name_bulk"
                    },
                    maxItems: 100,
                    type: "array"
                  }
                },
                required: ["keys"],
                type: "object"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_api-response-common-no-result"
                    },
                    {
                      properties: {
                        result: {
                          oneOf: [
                            {
                              $ref: "#/components/schemas/workers-kv_bulk-get-result"
                            },
                            {
                              $ref: "#/components/schemas/workers-kv_bulk-get-result-with-metadata"
                            }
                          ]
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get multiple key-value pairs response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers-kv_api-response-common-failure"
                }
              }
            },
            description: "Get multiple key-value pairs response failure."
          }
        },
        summary: "Get multiple key-value pairs",
        tags: ["Workers KV Namespace"]
      }
    },
    "/d1/database": {
      get: {
        description: "Returns a list of D1 databases.",
        operationId: "d1-list-databases",
        parameters: [
          {
            in: "query",
            name: "name",
            schema: {
              description: "a database name to search for.",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/d1_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/d1_database-response"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            count: {
                              description: "Total number of results for the requested service",
                              example: 1,
                              type: "number"
                            }
                          },
                          type: "object"
                        }
                      }
                    }
                  ]
                }
              }
            },
            description: "List D1 databases response"
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/d1_api-response-common-failure"
                }
              }
            },
            description: "List D1 databases response failure"
          }
        },
        summary: "List D1 Databases",
        tags: ["D1"]
      }
    },
    "/d1/database/{database_id}/raw": {
      post: {
        description: "Returns the query result rows as arrays rather than objects. This is a performance-optimized version of the /query endpoint.",
        operationId: "d1-raw-database-query",
        parameters: [
          {
            in: "path",
            name: "database_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/d1_database-identifier"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/d1_batch-query"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/d1_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/d1_raw-result-response"
                          },
                          type: "array"
                        }
                      }
                    }
                  ]
                }
              }
            },
            description: "Raw query response"
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/d1_api-response-common-failure"
                }
              }
            },
            description: "Query response failure"
          }
        },
        summary: "Raw D1 Database query",
        tags: ["D1"]
      }
    },
    "/workers/durable_objects/namespaces": {
      get: {
        description: "Returns the Durable Object namespaces owned by an account.",
        operationId: "durable-objects-namespace-list-namespaces",
        parameters: [],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-collection"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers_namespace"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Namespaces response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      allOf: [
                        {
                          $ref: "#/components/schemas/workers_api-response-collection"
                        },
                        {
                          properties: {
                            result: {
                              items: {
                                $ref: "#/components/schemas/workers_namespace"
                              },
                              type: "array"
                            }
                          },
                          type: "object"
                        }
                      ]
                    },
                    {
                      $ref: "#/components/schemas/workers_api-response-common-failure"
                    }
                  ]
                }
              }
            },
            description: "List Namespaces response failure."
          }
        },
        summary: "List Namespaces",
        tags: ["Durable Objects Namespace"]
      }
    },
    "/workers/durable_objects/namespaces/{id}/objects": {
      get: {
        description: "Returns the Durable Objects in a given namespace.",
        operationId: "durable-objects-namespace-list-objects",
        parameters: [
          {
            in: "path",
            name: "id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers_schemas-id"
            }
          },
          {
            in: "query",
            name: "limit",
            schema: {
              default: 1e3,
              description: "The number of objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.",
              maximum: 1e4,
              minimum: 10,
              type: "number"
            }
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              description: "Opaque token indicating the position from which to continue when requesting the next set of records. A valid value for the cursor can be obtained from the cursors object in the result_info structure.",
              example: "AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc",
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-collection"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workers_object"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            count: {
                              description: "Total results returned based on your list parameters.",
                              example: 1,
                              type: "number"
                            },
                            cursor: {
                              $ref: "#/components/schemas/workers_cursor"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Objects response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      allOf: [
                        {
                          $ref: "#/components/schemas/workers_api-response-collection"
                        },
                        {
                          properties: {
                            result: {
                              items: {
                                $ref: "#/components/schemas/workers_object"
                              },
                              type: "array"
                            },
                            result_info: {
                              properties: {
                                count: {
                                  description: "Total results returned based on your list parameters.",
                                  example: 1,
                                  type: "number"
                                },
                                cursor: {
                                  $ref: "#/components/schemas/workers_cursor"
                                }
                              },
                              type: "object"
                            }
                          },
                          type: "object"
                        }
                      ]
                    },
                    {
                      $ref: "#/components/schemas/workers_api-response-common-failure"
                    }
                  ]
                }
              }
            },
            description: "List Objects response failure."
          }
        },
        summary: "List Objects",
        tags: ["Durable Objects Namespace"]
      }
    },
    "/r2/buckets": {
      get: {
        description: "Lists all R2 buckets on your account.",
        operationId: "r2-list-buckets",
        parameters: [],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/r2_v4_response_list"
                    },
                    {
                      properties: {
                        result: {
                          properties: {
                            buckets: {
                              items: {
                                $ref: "#/components/schemas/r2_bucket"
                              },
                              type: "array"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Buckets response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/r2_v4_response_failure"
                }
              }
            },
            description: "List Buckets response failure."
          }
        },
        summary: "List Buckets",
        tags: ["R2 Bucket"]
      }
    },
    "/r2/buckets/{bucket_name}": {
      get: {
        description: "Gets properties of an existing R2 bucket.",
        operationId: "r2-get-bucket",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/r2_bucket_name"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/r2_v4_response"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/r2_bucket"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get Bucket response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/r2_v4_response_failure"
                }
              }
            },
            description: "Get Bucket response failure."
          }
        },
        summary: "Get Bucket",
        tags: ["R2 Bucket"]
      }
    },
    "/r2/buckets/{bucket_name}/objects": {
      get: {
        description: "List objects in an R2 bucket with optional prefix and delimiter.",
        operationId: "r2-bucket-list-objects",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "query",
            name: "prefix",
            schema: {
              type: "string"
            },
            description: "Filter objects by key prefix"
          },
          {
            in: "query",
            name: "delimiter",
            schema: {
              type: "string"
            },
            description: "Delimiter for directory-style listing (usually '/')"
          },
          {
            in: "query",
            name: "cursor",
            schema: {
              type: "string"
            },
            description: "Pagination cursor from previous response"
          },
          {
            in: "query",
            name: "per_page",
            schema: {
              type: "integer",
              default: 1e3
            },
            description: "Maximum number of objects to return"
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/r2_object"
                          }
                        },
                        result_info: {
                          $ref: "#/components/schemas/r2_list-objects-result-info"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List objects response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List objects failure."
          }
        },
        summary: "List Objects in R2 Bucket",
        tags: ["R2 Bucket"]
      },
      delete: {
        description: "Delete multiple objects from an R2 bucket.",
        operationId: "r2-bucket-delete-objects",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "string"
                },
                description: "Array of object keys to delete"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              key: {
                                type: "string"
                              }
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Delete objects response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Delete objects failure."
          }
        },
        summary: "Delete Multiple Objects from R2 Bucket",
        tags: ["R2 Bucket"]
      }
    },
    "/r2/buckets/{bucket_name}/objects/{object_key}": {
      get: {
        description: "Get an object from an R2 bucket. Use cf-metadata-only header for HEAD-like behavior.",
        operationId: "r2-bucket-get-object",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "path",
            name: "object_key",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "header",
            name: "cf-metadata-only",
            schema: {
              type: "string"
            },
            description: "Set to 'true' to return only metadata (HEAD-like behavior)"
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/r2_head-object-result"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              },
              "application/octet-stream": {
                schema: {
                  type: "string",
                  format: "binary"
                }
              }
            },
            description: "Object content or metadata."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Get object failure."
          }
        },
        summary: "Get Object from R2 Bucket",
        tags: ["R2 Bucket"]
      },
      put: {
        description: "Upload an object to an R2 bucket.",
        operationId: "r2-bucket-put-object",
        parameters: [
          {
            in: "path",
            name: "bucket_name",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "path",
            name: "object_key",
            required: !0,
            schema: {
              type: "string"
            }
          },
          {
            in: "header",
            name: "content-type",
            schema: {
              type: "string"
            },
            description: "Content type of the object"
          },
          {
            in: "header",
            name: "cf-r2-custom-metadata",
            schema: {
              type: "string"
            },
            description: "JSON-encoded custom metadata"
          }
        ],
        requestBody: {
          content: {
            "application/octet-stream": {
              schema: {
                type: "string",
                format: "binary"
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/r2_put-object-result"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Put object response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Put object failure."
          }
        },
        summary: "Upload Object to R2 Bucket",
        tags: ["R2 Bucket"]
      }
    },
    "/workers/durable_objects/namespaces/{namespace_id}/query": {
      post: {
        description: "Execute SQL queries against a Durable Object's SQLite storage.",
        operationId: "durable-objects-namespace-query-sqlite",
        parameters: [
          {
            in: "path",
            name: "namespace_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workers_schemas-id"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                oneOf: [
                  {
                    $ref: "#/components/schemas/do_query-by-id"
                  },
                  {
                    $ref: "#/components/schemas/do_query-by-name"
                  }
                ]
              }
            }
          },
          required: !0
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/do_raw-query-result"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Query response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Query response failure."
          }
        },
        summary: "Query Durable Object SQLite",
        tags: ["Durable Objects Namespace"]
      }
    },
    "/local/workers": {
      get: {
        description: "List all workers in the local dev registry.",
        operationId: "local-explorer-list-workers",
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/local-explorer_worker"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List workers response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List workers failure."
          }
        },
        summary: "List Workers in Dev Registry",
        tags: ["Local Explorer"]
      }
    },
    "/workflows": {
      get: {
        description: "Returns the workflows configured for local development.",
        operationId: "workflows-list-workflows",
        parameters: [],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workflows_workflow"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            count: {
                              type: "number"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Workflows response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List Workflows response failure."
          }
        },
        summary: "List Workflows",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}": {
      get: {
        description: "Returns details of a specific workflow including instance status counts.",
        operationId: "workflows-get-workflow-details",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/workflows_workflow-details"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get Workflow Details response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Get Workflow Details response failure."
          }
        },
        summary: "Get Workflow Details",
        tags: ["Workflows"]
      },
      delete: {
        description: "Deletes all instances of a workflow by removing their persistence files.",
        operationId: "workflows-delete-workflow",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            status: {
                              type: "string"
                            },
                            success: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Delete Workflow response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Delete Workflow response failure."
          }
        },
        summary: "Delete Workflow (all instances)",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances": {
      get: {
        description: "Returns the instances of a workflow.",
        operationId: "workflows-list-instances",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "query",
            name: "page",
            schema: {
              default: 1,
              description: "Page number (1-indexed).",
              minimum: 1,
              type: "number"
            }
          },
          {
            in: "query",
            name: "per_page",
            schema: {
              default: 25,
              description: "Number of instances per page.",
              maximum: 100,
              minimum: 1,
              type: "number"
            }
          },
          {
            in: "query",
            name: "status",
            schema: {
              type: "string",
              enum: [
                "queued",
                "running",
                "paused",
                "errored",
                "terminated",
                "complete",
                "waitingForPause",
                "waiting"
              ],
              description: "Filter instances by status."
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          items: {
                            $ref: "#/components/schemas/workflows_instance"
                          },
                          type: "array"
                        },
                        result_info: {
                          properties: {
                            page: {
                              type: "number"
                            },
                            per_page: {
                              type: "number"
                            },
                            total_count: {
                              type: "number"
                            },
                            total_pages: {
                              type: "number"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "List Workflow Instances response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "List Workflow Instances response failure."
          }
        },
        summary: "List Workflow Instances",
        tags: ["Workflows"]
      },
      post: {
        description: "Creates a new workflow instance.",
        operationId: "workflows-create-instance",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                    description: "Optional instance ID. If not provided, a UUID is generated."
                  },
                  params: {
                    description: "Optional JSON payload to pass to the workflow."
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string",
                              description: "The instance ID of the newly created workflow instance."
                            }
                          },
                          required: ["id"]
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Create Workflow Instance response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Create Workflow Instance response failure."
          }
        },
        summary: "Create Workflow Instance",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances/{instance_id}": {
      get: {
        description: "Returns the status details of a workflow instance.",
        operationId: "workflows-get-instance-details",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          $ref: "#/components/schemas/workflows_instance-details"
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Get Workflow Instance Details response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Get Workflow Instance Details response failure."
          }
        },
        summary: "Get Workflow Instance Details",
        tags: ["Workflows"]
      },
      delete: {
        description: "Deletes a workflow instance by removing its persistence files.",
        operationId: "workflows-delete-instance",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          }
        ],
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            success: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Delete Workflow Instance response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Delete Workflow Instance response failure."
          }
        },
        summary: "Delete Workflow Instance",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances/{instance_id}/status": {
      patch: {
        description: "Changes the status of a workflow instance (pause, resume, restart, terminate).",
        operationId: "workflows-change-instance-status",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          }
        ],
        requestBody: {
          required: !0,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["action"],
                properties: {
                  action: {
                    type: "string",
                    enum: ["pause", "resume", "restart", "terminate"],
                    description: "The action to perform on the workflow instance."
                  },
                  from: {
                    type: "object",
                    description: "The step to restart the instance from. Only valid when action is restart.",
                    required: ["name"],
                    properties: {
                      name: {
                        type: "string",
                        description: "The name of the step."
                      },
                      count: {
                        type: "integer",
                        minimum: 1,
                        description: "The 1-based index of the step when multiple steps share the same name and type. Defaults to 1."
                      },
                      type: {
                        type: "string",
                        enum: ["do", "sleep", "waitForEvent"],
                        description: "The step type. Defaults to do."
                      }
                    }
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers_api-response-common"
                    },
                    {
                      properties: {
                        result: {
                          type: "object",
                          properties: {
                            success: {
                              type: "boolean"
                            }
                          }
                        }
                      },
                      type: "object"
                    }
                  ]
                }
              }
            },
            description: "Change Workflow Instance Status response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Change Workflow Instance Status response failure."
          }
        },
        summary: "Change Workflow Instance Status",
        tags: ["Workflows"]
      }
    },
    "/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}": {
      post: {
        description: "Sends an event to a workflow instance.",
        operationId: "workflows-send-instance-event",
        parameters: [
          {
            in: "path",
            name: "workflow_name",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_workflow-name"
            }
          },
          {
            in: "path",
            name: "instance_id",
            required: !0,
            schema: {
              $ref: "#/components/schemas/workflows_instance-id"
            }
          },
          {
            in: "path",
            name: "event_type",
            required: !0,
            schema: {
              type: "string",
              description: "The event type to send."
            }
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                description: "Optional JSON payload for the event."
              }
            }
          }
        },
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common"
                }
              }
            },
            description: "Send Event response."
          },
          "4XX": {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/workers_api-response-common-failure"
                }
              }
            },
            description: "Send Event response failure."
          }
        },
        summary: "Send Event to Workflow Instance",
        tags: ["Workflows"]
      }
    }
  },
  components: {
    schemas: {
      r2_v4_response: {
        properties: {
          errors: {
            $ref: "#/components/schemas/r2_errors"
          },
          messages: {
            $ref: "#/components/schemas/r2_messages"
          },
          result: {
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!0],
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      r2_messages: {
        items: {
          type: "string"
        },
        type: "array"
      },
      r2_errors: {
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            message: {
              type: "string"
            }
          },
          required: ["code", "message"],
          type: "object",
          uniqueItems: !0
        },
        type: "array"
      },
      r2_bucket_name: {
        description: "Name of the bucket.",
        example: "example-bucket",
        maxLength: 64,
        minLength: 3,
        pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]",
        type: "string"
      },
      r2_v4_response_failure: {
        properties: {
          errors: {
            $ref: "#/components/schemas/r2_errors"
          },
          messages: {
            $ref: "#/components/schemas/r2_messages"
          },
          result: {
            enum: [null],
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      r2_bucket: {
        description: "A single R2 bucket.",
        properties: {
          creation_date: {
            description: "Creation timestamp.",
            type: "string"
          },
          name: {
            $ref: "#/components/schemas/r2_bucket_name"
          }
        },
        type: "object"
      },
      r2_v4_response_list: {
        allOf: [
          {
            $ref: "#/components/schemas/r2_v4_response"
          },
          {
            properties: {
              result_info: {
                $ref: "#/components/schemas/r2_result_info"
              }
            },
            type: "object"
          }
        ]
      },
      r2_result_info: {
        properties: {},
        type: "object"
      },
      workers_cursor: {
        description: "Opaque token indicating the position from which to continue when requesting the next set of records. A valid value for the cursor can be obtained from the cursors object in the result_info structure.",
        example: "AAAAANuhDN7SjacTnSVsDu3WW1Lvst6dxJGTjRY5BhxPXdf6L6uTcpd_NVtjhn11OUYRsVEykxoUwF-JQU4dn6QylZSKTOJuG0indrdn_MlHpMRtsxgXjs-RPdHYIVm3odE_uvEQ_dTQGFm8oikZMohns34DLBgrQpc",
        type: "string"
      },
      workers_object: {
        properties: {
          hasStoredData: {
            description: "Whether the Durable Object has stored data.",
            example: !0,
            readOnly: !0,
            type: "boolean"
          },
          id: {
            description: "ID of the Durable Object.",
            example: "fe7803fc55b964e09d94666545aab688d360c6bda69ba349ced1e5f28d2fc2c8",
            readOnly: !0,
            type: "string"
          },
          name: {
            type: "string",
            description: "Name of the Durable Object instance, if created via idFromName().",
            readOnly: !0
          }
        },
        type: "object"
      },
      "workers_schemas-id": {
        description: "ID of the namespace.",
        example: "5fd1cafff895419c8bcc647fc64ab8f0",
        type: "string"
      },
      "workers_api-response-common-failure": {
        properties: {
          errors: {
            allOf: [
              {
                $ref: "#/components/schemas/workers_messages"
              }
            ],
            example: [
              {
                code: 7003,
                message: "No route for the URI"
              }
            ],
            minLength: 1
          },
          messages: {
            allOf: [
              {
                $ref: "#/components/schemas/workers_messages"
              }
            ],
            example: []
          },
          result: {
            enum: [null],
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      workers_messages: {
        example: [],
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            documentation_url: {
              type: "string"
            },
            message: {
              type: "string"
            },
            source: {
              properties: {
                pointer: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          required: ["code", "message"],
          type: "object",
          uniqueItems: !0
        },
        type: "array"
      },
      workers_namespace: {
        properties: {
          class: {
            type: "string"
          },
          id: {
            readOnly: !0,
            type: "string"
          },
          name: {
            type: "string"
          },
          script: {
            type: "string"
          },
          use_sqlite: {
            type: "boolean"
          }
        },
        type: "object"
      },
      "workers_api-response-collection": {
        allOf: [
          {
            $ref: "#/components/schemas/workers_api-response-common"
          },
          {
            properties: {
              result_info: {
                properties: {
                  count: {
                    description: "Total number of results for the requested service.",
                    example: 1,
                    type: "number"
                  },
                  page: {
                    description: "Current page within paginated list of results.",
                    example: 1,
                    type: "number"
                  },
                  per_page: {
                    description: "Number of results per page of results.",
                    example: 20,
                    type: "number"
                  },
                  total_count: {
                    description: "Total results available without any search parameters.",
                    example: 2e3,
                    type: "number"
                  },
                  total_pages: {
                    description: "The number of total pages in the entire result set.",
                    example: 100,
                    type: "number"
                  }
                },
                type: "object"
              }
            },
            type: "object"
          }
        ],
        type: "object"
      },
      "workers_api-response-common": {
        properties: {
          errors: {
            $ref: "#/components/schemas/workers_messages"
          },
          messages: {
            $ref: "#/components/schemas/workers_messages"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!0],
            example: !0,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages"],
        type: "object"
      },
      "d1_raw-result-response": {
        properties: {
          meta: {
            $ref: "#/components/schemas/d1_query-meta"
          },
          results: {
            properties: {
              columns: {
                items: {
                  type: "string"
                },
                type: "array"
              },
              rows: {
                items: {
                  items: {
                    anyOf: [
                      {
                        type: "number"
                      },
                      {
                        type: "string"
                      },
                      {
                        type: "object"
                      }
                    ]
                  },
                  type: "array"
                },
                type: "array"
              }
            },
            type: "object"
          },
          success: {
            type: "boolean"
          }
        },
        type: "object"
      },
      "d1_query-meta": {
        properties: {
          changed_db: {
            description: "Denotes if the database has been altered in some way, like deleting rows.",
            type: "boolean"
          },
          changes: {
            description: "Rough indication of how many rows were modified by the query, as provided by SQLite's `sqlite3_total_changes()`.",
            type: "number"
          },
          duration: {
            description: "The duration of the SQL query execution inside the database. Does not include any network communication.",
            type: "number"
          },
          last_row_id: {
            description: "The row ID of the last inserted row in a table with an `INTEGER PRIMARY KEY` as provided by SQLite. Tables created with `WITHOUT ROWID` do not populate this.",
            type: "number"
          },
          rows_read: {
            description: "Number of rows read during the SQL query execution, including indices (not all rows are necessarily returned).",
            type: "number"
          },
          rows_written: {
            description: "Number of rows written during the SQL query execution, including indices.",
            type: "number"
          },
          size_after: {
            description: "Size of the database after the query committed, in bytes.",
            type: "number"
          },
          timings: {
            description: "Various durations for the query.",
            properties: {
              sql_duration_ms: {
                description: "The duration of the SQL query execution inside the database. Does not include any network communication.",
                type: "number"
              }
            },
            type: "object"
          }
        },
        type: "object"
      },
      "d1_batch-query": {
        description: "A single query object or a batch query object",
        oneOf: [
          {
            $ref: "#/components/schemas/d1_single-query"
          },
          {
            properties: {
              batch: {
                items: {
                  $ref: "#/components/schemas/d1_single-query"
                },
                type: "array"
              }
            },
            required: ["batch"],
            title: "multiple queries",
            type: "object"
          }
        ]
      },
      "d1_single-query": {
        description: "A single query with or without parameters",
        properties: {
          params: {
            $ref: "#/components/schemas/d1_params"
          },
          sql: {
            $ref: "#/components/schemas/d1_sql"
          }
        },
        required: ["sql"],
        title: "single query",
        type: "object"
      },
      d1_sql: {
        description: "Your SQL query. Supports multiple statements, joined by semicolons, which will be executed as a batch.",
        example: "SELECT * FROM myTable WHERE field = ? OR field = ?;",
        type: "string"
      },
      d1_params: {
        example: ["firstParam", "secondParam"],
        items: {
          type: "string"
        },
        type: "array"
      },
      "d1_database-identifier": {
        description: "D1 database identifier (UUID).",
        example: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        readOnly: !0,
        type: "string"
      },
      "d1_api-response-common-failure": {
        properties: {
          errors: {
            allOf: [
              {
                $ref: "#/components/schemas/d1_messages"
              }
            ],
            example: [
              {
                code: 7003,
                message: "No route for the URI"
              }
            ],
            minLength: 1
          },
          messages: {
            allOf: [
              {
                $ref: "#/components/schemas/d1_messages"
              }
            ],
            example: []
          },
          result: {
            enum: [null],
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      d1_messages: {
        example: [],
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            message: {
              type: "string"
            }
          },
          required: ["code", "message"],
          type: "object",
          uniqueItems: !0
        },
        type: "array"
      },
      "d1_database-response": {
        properties: {
          jurisdiction: {
            $ref: "#/components/schemas/d1_jurisdiction-nullable"
          },
          name: {
            $ref: "#/components/schemas/d1_database-name"
          },
          uuid: {
            $ref: "#/components/schemas/d1_database-identifier"
          },
          version: {
            $ref: "#/components/schemas/d1_database-version"
          }
        },
        type: "object"
      },
      "d1_database-version": {
        example: "production",
        pattern: "^(alpha|beta|production)$",
        type: "string"
      },
      "d1_database-name": {
        description: "D1 database name.",
        example: "my-database",
        pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]*$",
        type: "string"
      },
      "d1_jurisdiction-nullable": {
        description: "Specify the location to restrict the D1 database to run and store data. If this option is present, the location hint is ignored.",
        enum: ["eu", "fedramp"],
        example: "eu",
        nullable: !0,
        type: "string"
      },
      "d1_api-response-common": {
        properties: {
          errors: {
            $ref: "#/components/schemas/d1_messages"
          },
          messages: {
            $ref: "#/components/schemas/d1_messages"
          },
          result: {
            type: "object"
          },
          success: {
            description: "Whether the API call was successful",
            enum: [!0],
            example: !0,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      "workers-kv_bulk-get-result-with-metadata": {
        properties: {
          values: {
            additionalProperties: {
              nullable: !0,
              properties: {
                expiration: {
                  $ref: "#/components/schemas/workers-kv_expiration"
                },
                metadata: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_any"
                    },
                    {
                      description: "The metadata associated with the key."
                    }
                  ]
                },
                value: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/workers-kv_any"
                    },
                    {
                      description: "The value associated with the key."
                    }
                  ]
                }
              },
              required: ["value", "metadata"],
              type: "object"
            },
            description: "Requested keys are paired with their values and metadata in an object.",
            example: {
              key1: {
                expiration: 1577836800,
                metadata: {
                  someMetadataKey: "someMetadataValue"
                },
                value: "value1"
              },
              key2: {
                metadata: {
                  anotherKey: "anotherValue"
                },
                value: "value2"
              }
            },
            type: "object"
          }
        },
        type: "object"
      },
      "workers-kv_any": {
        anyOf: [
          {
            type: "string"
          },
          {
            type: "number"
          },
          {
            type: "integer"
          },
          {
            type: "boolean"
          },
          {
            additionalProperties: !0,
            nullable: !0,
            type: "object"
          },
          {
            items: {
              $ref: "#/components/schemas/workers-kv_any"
            },
            type: "array"
          }
        ]
      },
      "workers-kv_expiration": {
        description: "Expires the key at a certain time, measured in number of seconds since the UNIX epoch.",
        example: 1578435e3,
        type: "number"
      },
      "workers-kv_bulk-get-result": {
        properties: {
          values: {
            additionalProperties: {
              description: "The value associated with the key.",
              oneOf: [
                {
                  type: "string"
                },
                {
                  type: "number"
                },
                {
                  type: "boolean"
                },
                {
                  additionalProperties: !0,
                  type: "object"
                }
              ],
              nullable: !0
            },
            description: "Requested keys are paired with their values in an object.",
            example: {
              key1: "value1",
              key2: "value2"
            },
            type: "object"
          }
        },
        type: "object"
      },
      "workers-kv_key_name_bulk": {
        description: "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
        example: "My-Key",
        maxLength: 512,
        type: "string"
      },
      "workers-kv_api-response-common-no-result": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_api-response-common"
          },
          {
            properties: {
              result: {
                nullable: !0,
                type: "object"
              }
            },
            type: "object"
          }
        ]
      },
      "workers-kv_api-response-common": {
        properties: {
          errors: {
            $ref: "#/components/schemas/workers-kv_messages"
          },
          messages: {
            $ref: "#/components/schemas/workers-kv_messages"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!0],
            example: !0,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages"],
        type: "object"
      },
      "workers-kv_messages": {
        example: [],
        items: {
          properties: {
            code: {
              minimum: 1e3,
              type: "integer"
            },
            message: {
              type: "string"
            }
          },
          required: ["code", "message"],
          type: "object"
        },
        type: "array",
        uniqueItems: !0
      },
      "workers-kv_metadata": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_any"
          },
          {
            description: "Associates arbitrary JSON data with a key/value pair.",
            example: {
              someMetadataKey: "someMetadataValue"
            }
          }
        ]
      },
      "workers-kv_value": {
        anyOf: [
          {
            type: "string"
          },
          {
            format: "binary",
            type: "string"
          }
        ],
        description: "A byte sequence to be stored, up to 25 MiB in length.",
        example: "Some Value"
      },
      "workers-kv_key_name": {
        description: "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.",
        example: "My-Key",
        maxLength: 512,
        type: "string"
      },
      "workers-kv_cursor_result_info": {
        properties: {
          count: {
            description: "Total results returned based on your list parameters.",
            example: 1,
            type: "number"
          },
          cursor: {
            $ref: "#/components/schemas/workers-kv_cursor"
          }
        },
        type: "object"
      },
      "workers-kv_cursor": {
        description: "Opaque token indicating the position from which to continue when requesting the next set of records if the amount of list results was limited by the limit parameter. A valid value for the cursor can be obtained from the cursors object in the result_info structure.",
        example: "6Ck1la0VxJ0djhidm1MdX2FyDGxLKVeeHZZmORS_8XeSuhz9SjIJRaSa2lnsF01tQOHrfTGAP3R5X1Kv5iVUuMbNKhWNAXHOl6ePB0TUL8nw",
        type: "string"
      },
      "workers-kv_key": {
        description: "A name for a value. A value stored under a given key may be retrieved via the same key.",
        properties: {
          expiration: {
            description: "The time, measured in number of seconds since the UNIX epoch, at which the key will expire. This property is omitted for keys that will not expire.",
            example: 1577836800,
            type: "number"
          },
          metadata: {
            $ref: "#/components/schemas/workers-kv_list_metadata"
          },
          name: {
            $ref: "#/components/schemas/workers-kv_key_name"
          }
        },
        required: ["name"],
        type: "object"
      },
      "workers-kv_list_metadata": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_any"
          },
          {
            description: "Arbitrary JSON that is associated with a key.",
            example: {
              someMetadataKey: "someMetadataValue"
            }
          }
        ]
      },
      "workers-kv_namespace_identifier": {
        description: "Namespace identifier tag.",
        example: "0f2ac74b498b48028cb68387c421e279",
        maxLength: 32,
        readOnly: !0,
        type: "string"
      },
      "workers-kv_api-response-common-failure": {
        properties: {
          errors: {
            allOf: [
              {
                $ref: "#/components/schemas/workers-kv_messages"
              }
            ],
            example: [
              {
                code: 7003,
                message: "No route for the URI"
              }
            ],
            minLength: 1
          },
          messages: {
            allOf: [
              {
                $ref: "#/components/schemas/workers-kv_messages"
              }
            ],
            example: []
          },
          result: {
            nullable: !0,
            type: "object"
          },
          success: {
            description: "Whether the API call was successful.",
            enum: [!1],
            example: !1,
            type: "boolean"
          }
        },
        required: ["success", "errors", "messages", "result"],
        type: "object"
      },
      "workers-kv_namespace": {
        properties: {
          id: {
            $ref: "#/components/schemas/workers-kv_namespace_identifier"
          },
          title: {
            $ref: "#/components/schemas/workers-kv_namespace_title"
          }
        },
        required: ["id", "title"],
        type: "object"
      },
      "workers-kv_namespace_title": {
        description: "A human-readable string name for a Namespace.",
        example: "My Own Namespace",
        maxLength: 512,
        type: "string"
      },
      "workers-kv_api-response-collection": {
        allOf: [
          {
            $ref: "#/components/schemas/workers-kv_api-response-common"
          },
          {
            properties: {
              result_info: {
                $ref: "#/components/schemas/workers-kv_result_info"
              }
            },
            type: "object"
          }
        ],
        type: "object"
      },
      "workers-kv_result_info": {
        properties: {
          count: {
            description: "Total number of results for the requested service.",
            example: 1,
            type: "number"
          }
        },
        type: "object"
      },
      r2_object: {
        type: "object",
        properties: {
          key: {
            type: "string",
            description: "Object key (path)"
          },
          etag: {
            type: "string",
            description: "Object ETag"
          },
          size: {
            type: "integer",
            description: "Object size in bytes"
          },
          last_modified: {
            type: "string",
            format: "date-time",
            description: "Last modified timestamp"
          },
          http_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "HTTP metadata for the object"
          },
          custom_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "Custom user-defined metadata"
          }
        }
      },
      "r2_list-objects-result-info": {
        type: "object",
        properties: {
          delimited: {
            type: "array",
            items: {
              type: "string"
            },
            description: "Common prefixes when using delimiter (virtual directories)"
          },
          cursor: {
            type: "string",
            description: "Cursor for fetching next page of results"
          },
          is_truncated: {
            type: "string",
            description: "Whether there are more results to fetch"
          }
        }
      },
      "r2_head-object-result": {
        type: "object",
        properties: {
          key: {
            type: "string",
            description: "Object key (path)"
          },
          etag: {
            type: "string",
            description: "Object ETag"
          },
          last_modified: {
            type: "string",
            description: "Last modified timestamp"
          },
          size: {
            type: "integer",
            description: "Object size in bytes"
          },
          http_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "HTTP metadata for the object"
          },
          custom_metadata: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            description: "Custom user-defined metadata"
          }
        }
      },
      "r2_put-object-result": {
        type: "object",
        properties: {
          key: {
            type: "string",
            description: "Object key (path)"
          },
          etag: {
            type: "string",
            description: "Object ETag"
          },
          size: {
            type: "integer",
            description: "Object size in bytes"
          },
          version: {
            type: "string",
            description: "Object version ID"
          }
        }
      },
      "do_sql-with-params": {
        type: "object",
        required: ["sql"],
        properties: {
          sql: {
            type: "string",
            minLength: 1,
            description: "SQL query to execute"
          },
          params: {
            type: "array",
            items: {},
            description: "Optional parameters for the SQL query"
          }
        }
      },
      "do_query-by-id": {
        type: "object",
        required: ["durable_object_id", "queries"],
        properties: {
          durable_object_id: {
            type: "string",
            minLength: 1,
            description: "Hex string ID of the Durable Object"
          },
          queries: {
            type: "array",
            items: {
              $ref: "#/components/schemas/do_sql-with-params"
            },
            description: "Array of SQL queries to execute"
          }
        }
      },
      "do_query-by-name": {
        type: "object",
        required: ["durable_object_name", "queries"],
        properties: {
          durable_object_name: {
            type: "string",
            minLength: 1,
            description: "Name to derive DO ID via idFromName()"
          },
          queries: {
            type: "array",
            items: {
              $ref: "#/components/schemas/do_sql-with-params"
            },
            description: "Array of SQL queries to execute"
          }
        }
      },
      "do_raw-query-result": {
        type: "object",
        properties: {
          columns: {
            type: "array",
            items: {
              type: "string"
            },
            description: "Column names from the query result"
          },
          rows: {
            type: "array",
            items: {
              type: "array",
              items: {}
            },
            description: "Array of row arrays containing query results"
          },
          meta: {
            type: "object",
            properties: {
              rows_read: {
                type: "number",
                description: "Number of rows read during query execution"
              },
              rows_written: {
                type: "number",
                description: "Number of rows written during query execution"
              }
            }
          }
        }
      },
      "local-explorer_worker": {
        type: "object",
        required: ["isSelf", "name"],
        properties: {
          isSelf: {
            type: "boolean",
            description: "Whether this worker is the one hosting the explorer"
          },
          name: {
            type: "string",
            description: "Worker name from the dev registry"
          },
          bindings: {
            $ref: "#/components/schemas/local-explorer_worker-bindings",
            description: "Resource bindings for this worker"
          }
        }
      },
      "local-explorer_worker-bindings": {
        type: "object",
        description: "Resource bindings for a worker",
        properties: {
          kv: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_resource-binding"
            },
            description: "KV namespace bindings"
          },
          d1: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_resource-binding"
            },
            description: "D1 database bindings"
          },
          r2: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_resource-binding"
            },
            description: "R2 bucket bindings"
          },
          do: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_do-binding"
            },
            description: "Durable Object bindings"
          },
          workflows: {
            type: "array",
            items: {
              $ref: "#/components/schemas/local-explorer_workflow-binding"
            },
            description: "Workflow bindings"
          }
        }
      },
      "local-explorer_resource-binding": {
        type: "object",
        required: ["id", "bindingName"],
        properties: {
          id: {
            type: "string",
            description: "Unique identifier for the resource"
          },
          bindingName: {
            type: "string",
            description: "Name of the binding in the worker's env"
          }
        }
      },
      "local-explorer_do-binding": {
        type: "object",
        required: [
          "id",
          "bindingName",
          "className",
          "scriptName",
          "useSqlite"
        ],
        properties: {
          id: {
            type: "string",
            description: "Unique identifier (scriptName-className)"
          },
          bindingName: {
            type: "string",
            description: "Name of the binding in the worker's env"
          },
          className: {
            type: "string",
            description: "Durable Object class name"
          },
          scriptName: {
            type: "string",
            description: "Script containing the Durable Object"
          },
          useSqlite: {
            type: "boolean",
            description: "Whether the Durable Object uses SQLite storage"
          }
        }
      },
      "local-explorer_workflow-binding": {
        type: "object",
        required: ["id", "bindingName", "className", "scriptName"],
        properties: {
          id: {
            type: "string",
            description: "Workflow name"
          },
          bindingName: {
            type: "string",
            description: "Name of the binding in the worker's env"
          },
          className: {
            type: "string",
            description: "Workflow entrypoint class name"
          },
          scriptName: {
            type: "string",
            description: "Script containing the workflow"
          }
        }
      },
      "workflows_workflow-name": {
        description: "The name of the workflow.",
        example: "my-workflow",
        type: "string"
      },
      "workflows_instance-id": {
        description: "The unique identifier of a workflow instance.",
        example: "my-instance-id",
        type: "string"
      },
      workflows_workflow: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the workflow."
          },
          class_name: {
            type: "string",
            description: "The entrypoint class name of the workflow."
          },
          script_name: {
            type: "string",
            description: "The script name containing the workflow."
          }
        },
        required: ["name"]
      },
      "workflows_workflow-details": {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the workflow."
          },
          class_name: {
            type: "string",
            description: "The entrypoint class name."
          },
          script_name: {
            type: "string",
            description: "The script containing the workflow."
          },
          instances: {
            type: "object",
            description: "Instance counts by status.",
            properties: {
              complete: {
                type: "number"
              },
              errored: {
                type: "number"
              },
              paused: {
                type: "number"
              },
              queued: {
                type: "number"
              },
              running: {
                type: "number"
              },
              terminated: {
                type: "number"
              },
              waiting: {
                type: "number"
              },
              waitingForPause: {
                type: "number"
              }
            }
          }
        },
        required: ["name", "class_name", "script_name", "instances"]
      },
      workflows_instance: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The unique identifier of the workflow instance."
          },
          status: {
            type: "string",
            enum: [
              "queued",
              "running",
              "paused",
              "errored",
              "terminated",
              "complete",
              "waitingForPause",
              "waiting",
              "unknown"
            ],
            description: "The current status of the instance."
          },
          created_on: {
            type: "string",
            description: "ISO 8601 timestamp of when the instance was created."
          }
        },
        required: ["id"]
      },
      "workflows_instance-details": {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The unique identifier of the workflow instance."
          },
          status: {
            type: "string",
            enum: [
              "queued",
              "running",
              "paused",
              "errored",
              "terminated",
              "complete",
              "waitingForPause",
              "waiting",
              "unknown"
            ],
            description: "The current status of the instance."
          },
          output: {
            description: "Output value if the workflow completed successfully."
          },
          error: {
            type: "object",
            properties: {
              name: {
                type: "string"
              },
              message: {
                type: "string"
              }
            },
            description: "Error details if the workflow errored."
          }
        },
        required: ["id", "status"]
      }
    }
  }
};

// src/workers/local-explorer/resources/d1.ts
var D1_ERROR_DATABASE_NOT_FOUND = 7404;
function getD1Binding(env2, databaseId) {
  let bindingName = env2.LOCAL_EXPLORER_BINDING_MAP.d1[databaseId];
  return bindingName ? env2[bindingName] : null;
}
function getLocalD1Databases(env2) {
  let d1BindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.d1;
  return Object.entries(d1BindingMap).map(([id, bindingName]) => ({
    name: bindingName.split(":").pop() || bindingName,
    uuid: id,
    version: "production"
  }));
}
async function findD1DatabaseOwner(c, databaseId) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url) => {
      let response = await fetchFromPeer(url, "/d1/database");
      return response?.ok && (await response.json()).result?.some((db) => db.uuid === databaseId) ? url : null;
    })
  )).find((url) => url !== null) ?? null;
}
async function listD1Databases(c, query) {
  let { name } = query, localDatabases = getLocalD1Databases(c.env), aggregatedDatabases = await aggregateListResults(
    c,
    localDatabases,
    "/d1/database"
  ), localIds = new Set(localDatabases.map((db) => db.uuid)), allDatabases = aggregatedDatabases.filter(
    (db, index) => index < localDatabases.length || !localIds.has(db.uuid)
  );
  return name && (allDatabases = allDatabases.filter(
    (db) => db.name?.toLowerCase().includes(name.toLowerCase())
  )), c.json({
    ...wrapResponse(allDatabases),
    result_info: {
      count: allDatabases.length
    }
  });
}
async function rawD1Database(c, databaseId, body) {
  let db = getD1Binding(c.env, databaseId);
  if (db)
    return executeD1Query(c, db, body);
  let ownerMiniflare = await findD1DatabaseOwner(c, databaseId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/d1/database/${encodeURIComponent(databaseId)}/raw`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    D1_ERROR_DATABASE_NOT_FOUND,
    `The database ${databaseId} could not be found`
  );
}
async function executeD1Query(c, db, body) {
  let queries = "batch" in body && body.batch ? body.batch : [body], results = new Array();
  try {
    for (let query of queries) {
      let statement = db.prepare(query.sql);
      query.params && query.params.length > 0 && (statement = statement.bind(...query.params));
      let allResults = await statement.all(), columns = allResults.results.length > 0 ? Object.keys(allResults.results[0]) : [], rows = allResults.results.map(
        (row) => columns.map(
          (col) => row[col]
        )
      );
      results.push({
        meta: {
          changed_db: allResults.meta.changed_db,
          changes: allResults.meta.changes,
          duration: allResults.meta.duration,
          last_row_id: allResults.meta.last_row_id,
          rows_read: allResults.meta.rows_read,
          rows_written: allResults.meta.rows_written,
          size_after: allResults.meta.size_after,
          timings: allResults.meta.timings
        },
        results: {
          columns,
          rows
        },
        success: allResults.success
      });
    }
  } catch (error) {
    let message = error instanceof Error ? error.message : "Query failed";
    return errorResponse(500, 10001, message);
  }
  return c.json(wrapResponse(results));
}

// src/plugins/core/constants.ts
var CORE_PLUGIN_NAME = "core", SERVICE_ENTRY = `${CORE_PLUGIN_NAME}:entry`, SERVICE_LOCAL_EXPLORER = `${CORE_PLUGIN_NAME}:local-explorer`, LOCAL_EXPLORER_DISK = `${CORE_PLUGIN_NAME}:local-explorer-disk`, SERVICE_USER_PREFIX = `${CORE_PLUGIN_NAME}:user`, SERVICE_BUILTIN_PREFIX = `${CORE_PLUGIN_NAME}:builtin`, SERVICE_CUSTOM_FETCH_PREFIX = `${CORE_PLUGIN_NAME}:custom-fetch`, SERVICE_CUSTOM_NODE_PREFIX = `${CORE_PLUGIN_NAME}:custom-node`;
var INTROSPECT_SQLITE_METHOD = "__miniflare_introspectSqlite", GET_DO_NAME_METHOD = "__miniflare_getDOName";

// src/workers/local-explorer/resources/do.ts
var DO_ERROR_NAMESPACE_NOT_FOUND = 10066;
function getDOBinding(env2, namespaceId) {
  let info = env2.LOCAL_EXPLORER_BINDING_MAP.do[namespaceId];
  return info ? {
    binding: env2[info.binding],
    useSQLite: info.useSQLite
  } : null;
}
function getLocalDONamespaces(env2) {
  let doBindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.do;
  return Object.entries(doBindingMap).map(([id, info]) => ({
    id,
    // This is the unsafeUniqueKey - ${scriptName}-${className}
    name: `${info.scriptName}_${info.className}`,
    // This is what the API returns...
    script: info.scriptName,
    class: info.className,
    use_sqlite: info.useSQLite
  }));
}
async function findDONamespaceOwner(c, namespaceId) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url) => {
      let response = await fetchFromPeer(
        url,
        "/workers/durable_objects/namespaces"
      );
      return response?.ok && (await response.json()).result?.some((ns) => ns.id === namespaceId) ? url : null;
    })
  )).find((url) => url !== null) ?? null;
}
async function listDONamespaces(c) {
  let localNamespaces = getLocalDONamespaces(c.env), allNamespaces = await aggregateListResults(
    c,
    localNamespaces,
    "/workers/durable_objects/namespaces"
  );
  return c.json({
    ...wrapResponse(allNamespaces),
    result_info: {
      count: allNamespaces.length
    }
  });
}
async function listDOObjects(c, namespaceId, query) {
  let { limit, cursor } = query;
  if (c.env.LOCAL_EXPLORER_BINDING_MAP.do[namespaceId])
    return executeListDOObjects(c, namespaceId, { limit, cursor });
  let ownerMiniflare = await findDONamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    cursor && params.set("cursor", cursor), limit !== void 0 && params.set("limit", String(limit));
    let queryString = params.toString(), path = `/workers/durable_objects/namespaces/${encodeURIComponent(
      namespaceId
    )}/objects${queryString ? `?${queryString}` : ""}`, response = await fetchFromPeer(ownerMiniflare, path);
    if (response) return response;
  }
  return errorResponse(
    404,
    DO_ERROR_NAMESPACE_NOT_FOUND,
    `Durable Object namespace ID '${namespaceId}' not found.`
  );
}
async function executeListDOObjects(c, namespaceId, options) {
  let { limit, cursor } = options;
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let loopbackUrl = `http://localhost/core/do-storage/${encodeURIComponent(namespaceId)}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl);
  if (!response.ok)
    return response.status === 404 ? c.json({
      ...wrapResponse([]),
      result_info: {
        count: 0,
        cursor: ""
      }
    }) : errorResponse(
      500,
      10001,
      `Failed to read DO storage: ${response.statusText}`
    );
  let objectIds = (await response.json()).filter(
    (entry) => entry.type === "file" && entry.name.endsWith(".sqlite") && entry.name !== "metadata.sqlite"
  ).map((entry) => entry.name.replace(/\.sqlite$/, ""));
  if (objectIds.sort(), cursor) {
    let cursorIndex = objectIds.findIndex((id) => id > cursor);
    cursorIndex === -1 ? objectIds = [] : objectIds = objectIds.slice(cursorIndex);
  }
  let hasMore = objectIds.length > limit, paginatedIds = objectIds.slice(0, limit), ns = getDOBinding(c.env, namespaceId), objects = await Promise.all(
    paginatedIds.map(async (id) => {
      let name;
      if (ns && ns.useSQLite)
        try {
          let doId = ns.binding.idFromString(id);
          name = await ns.binding.get(doId)[GET_DO_NAME_METHOD]();
        } catch {
        }
      return {
        id,
        name,
        hasStoredData: !0
      };
    })
  ), nextCursor = hasMore ? paginatedIds[paginatedIds.length - 1] : "";
  return c.json({
    ...wrapResponse(objects),
    result_info: {
      count: objects.length,
      cursor: nextCursor
    }
  });
}
async function queryDOSqlite(c, namespaceId, body) {
  let ns = getDOBinding(c.env, namespaceId);
  if (ns)
    return executeQueryDOSqlite(c, ns, namespaceId, body);
  let ownerMiniflare = await findDONamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/workers/durable_objects/namespaces/${encodeURIComponent(
        namespaceId
      )}/query`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    DO_ERROR_NAMESPACE_NOT_FOUND,
    `Durable Object namespace ID '${namespaceId}' not found.`
  );
}
async function executeQueryDOSqlite(c, ns, namespaceId, body) {
  if (!ns.useSQLite)
    return errorResponse(
      400,
      10001,
      `Namespace does not use SQLite storage: ${namespaceId}`
    );
  let binding = ns.binding, doId;
  try {
    "durable_object_id" in body ? doId = binding.idFromString(body.durable_object_id) : doId = binding.idFromName(body.durable_object_name);
  } catch (error) {
    let message = error instanceof Error ? error.message : "Invalid Durable Object ID";
    return errorResponse(400, 10001, message);
  }
  if (body.queries.length === 0)
    return errorResponse(400, 10001, "No queries provided");
  let stub = binding.get(doId);
  try {
    let results = await stub[INTROSPECT_SQLITE_METHOD](body.queries);
    return c.json(wrapResponse(results));
  } catch (error) {
    let message = error instanceof Error ? error.message : "Query failed";
    return errorResponse(400, 10001, message);
  }
}

// src/workers/local-explorer/resources/kv.ts
var KV_ERROR_KEY_NOT_FOUND = 10009, KV_ERROR_NAMESPACE_NOT_FOUND = 10013;
function getKVBinding(env2, namespace_id) {
  let bindingName = env2.LOCAL_EXPLORER_BINDING_MAP.kv[namespace_id];
  return bindingName ? env2[bindingName] : null;
}
async function findKVNamespaceOwner(c, namespaceId) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url) => {
      let response = await fetchFromPeer(url, "/storage/kv/namespaces");
      return response?.ok && (await response.json()).result?.some((ns) => ns.id === namespaceId) ? url : null;
    })
  )).find((url) => url !== null) ?? null;
}
function getLocalKVNamespaces(env2) {
  let kvBindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.kv;
  return Object.entries(kvBindingMap).map(([id, bindingName]) => {
    let title = bindingName.split(":").pop() || bindingName;
    return {
      id,
      title
    };
  });
}
async function listKVNamespaces(c, query) {
  let direction = query.direction ?? "asc", order = query.order ?? "id", localNamespaces = getLocalKVNamespaces(c.env), aggregatedNamespaces = await aggregateListResults(
    c,
    localNamespaces,
    "/storage/kv/namespaces"
  ), localIds = new Set(localNamespaces.map((ns) => ns.id)), allNamespaces = aggregatedNamespaces.filter(
    (ns, index) => index < localNamespaces.length || !localIds.has(ns.id)
  );
  return allNamespaces.sort((a, b) => {
    let aVal = order === "id" ? a.id : a.title, bVal = order === "id" ? b.id : b.title, cmp = aVal.localeCompare(bVal);
    return direction === "asc" ? cmp : -cmp;
  }), c.json({
    ...wrapResponse(allNamespaces),
    result_info: {
      count: allNamespaces.length
    }
  });
}
async function listKVKeys(c, query) {
  let namespace_id = c.req.param("namespace_id");
  if (!namespace_id)
    return errorResponse(400, 1e4, "Missing namespace_id parameter");
  let cursor = query.cursor, limit = query.limit, prefix = query.prefix, kv = getKVBinding(c.env, namespace_id);
  if (kv)
    return executeListKeys(c, kv, { cursor, limit, prefix });
  let ownerMiniflare = await findKVNamespaceOwner(c, namespace_id);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    cursor && params.set("cursor", cursor), limit !== void 0 && params.set("limit", String(limit)), prefix && params.set("prefix", prefix);
    let queryString = params.toString(), path = `/storage/kv/namespaces/${encodeURIComponent(
      namespace_id
    )}/keys${queryString ? `?${queryString}` : ""}`, response = await fetchFromPeer(ownerMiniflare, path);
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "list keys: 'namespace not found'"
  );
}
async function executeListKeys(c, kv, options) {
  let listResult = await kv.list(options), resultCursor = "cursor" in listResult ? listResult.cursor ?? "" : "";
  return c.json({
    ...wrapResponse(
      listResult.keys.map((key) => ({
        name: key.name,
        expiration: key.expiration,
        metadata: key.metadata
      }))
    ),
    result_info: {
      count: listResult.keys.length,
      cursor: resultCursor
    }
  });
}
async function getKVValue(c, namespaceId, keyName) {
  let kv = getKVBinding(c.env, namespaceId);
  if (kv) {
    let value = await kv.get(keyName, { type: "arrayBuffer" });
    return value === null ? errorResponse(404, KV_ERROR_KEY_NOT_FOUND, "get: 'key not found'") : new Response(value);
  }
  let ownerMiniflare = await findKVNamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(
        namespaceId
      )}/values/${encodeURIComponent(keyName)}`
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "get: 'namespace not found'"
  );
}
async function putKVValue(c, namespaceId, keyName) {
  let kv = getKVBinding(c.env, namespaceId);
  if (kv)
    return executePutKVValue(c, kv, keyName);
  let ownerMiniflare = await findKVNamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let body = await c.req.arrayBuffer(), response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(
        namespaceId
      )}/values/${encodeURIComponent(keyName)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": c.req.header("content-type") || "application/octet-stream"
        },
        body
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "put: 'namespace not found'"
  );
}
async function executePutKVValue(c, kv, key_name) {
  let value, metadata;
  if ((c.req.header("content-type") || "").includes("multipart/form-data")) {
    let formData = await c.req.formData(), formValue = formData.get("value"), formMetadata = formData.get("metadata");
    if (formValue instanceof Blob)
      value = await formValue.arrayBuffer();
    else if (typeof formValue == "string")
      value = formValue;
    else return formValue === null ? errorResponse(400, 10001, "Missing value field") : errorResponse(400, 10001, "Unsupported value type in form data");
    if (formMetadata instanceof Blob) {
      let metadataText = await formMetadata.text();
      try {
        metadata = JSON.parse(metadataText);
      } catch {
        return errorResponse(400, 10001, "Invalid metadata JSON");
      }
    } else if (typeof formMetadata == "string")
      try {
        metadata = JSON.parse(formMetadata);
      } catch {
        return errorResponse(400, 10001, "Invalid metadata JSON");
      }
  } else
    value = await c.req.arrayBuffer();
  let options = {};
  return metadata && (options.metadata = metadata), await kv.put(key_name, value, options), c.json(wrapResponse({}));
}
async function deleteKVValue(c, namespaceId, keyName) {
  let kv = getKVBinding(c.env, namespaceId);
  if (kv)
    return await kv.delete(keyName), c.json(wrapResponse({}));
  let ownerMiniflare = await findKVNamespaceOwner(c, namespaceId);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(
        namespaceId
      )}/values/${encodeURIComponent(keyName)}`,
      { method: "DELETE" }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "remove key: 'namespace not found'"
  );
}
async function bulkGetKVValues(c, body) {
  let namespace_id = c.req.param("namespace_id");
  if (!namespace_id)
    return errorResponse(400, 1e4, "Missing namespace_id parameter");
  let { keys } = body, kv = getKVBinding(c.env, namespace_id);
  if (kv) {
    let results = await kv.get(keys), values = {};
    for (let key of keys)
      values[key] = results?.get(key) ?? null;
    return c.json(wrapResponse({ values }));
  }
  let ownerMiniflare = await findKVNamespaceOwner(c, namespace_id);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/storage/kv/namespaces/${encodeURIComponent(namespace_id)}/bulk/get`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    if (response) return response;
  }
  return errorResponse(
    404,
    KV_ERROR_NAMESPACE_NOT_FOUND,
    "bulk get keys: 'namespace not found'"
  );
}

// src/workers/local-explorer/resources/r2.ts
var R2_ERROR_BUCKET_NOT_FOUND = 10006, R2_ERROR_OBJECT_NOT_FOUND = 10007;
function getR2Binding(env2, bucket_name) {
  let bindingName = env2.LOCAL_EXPLORER_BINDING_MAP.r2[bucket_name];
  return bindingName ? env2[bindingName] : null;
}
async function findR2BucketOwner(c, bucketName) {
  let peerUrls = await getPeerUrlsIfAggregating(c);
  return peerUrls.length === 0 ? null : (await Promise.all(
    peerUrls.map(async (url) => {
      let response = await fetchFromPeer(url, "/r2/buckets");
      return response?.ok && (await response.json()).result?.buckets?.some((b) => b.name === bucketName) ? url : null;
    })
  )).find((url) => url !== null) ?? null;
}
function getLocalR2Buckets(env2) {
  let r2BindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.r2;
  return Object.entries(r2BindingMap).map(([bucketName]) => ({
    name: bucketName
  }));
}
async function listR2Buckets(c) {
  let localBuckets = getLocalR2Buckets(c.env), aggregatedBuckets = await aggregateListResults(c, localBuckets, "/r2/buckets", "buckets"), localNames = new Set(localBuckets.map((b) => b.name)), allBuckets = aggregatedBuckets.filter(
    (b, index) => index < localBuckets.length || !localNames.has(b.name)
  );
  return allBuckets.sort((a, b) => a.name.localeCompare(b.name)), c.json({
    ...wrapResponse({ buckets: allBuckets }),
    result_info: {
      count: allBuckets.length
    }
  });
}
async function listR2Objects(c, bucket_name, query) {
  let prefix = query.prefix, delimiter = query.delimiter, cursor = query.cursor, limit = query.per_page, r2 = getR2Binding(c.env, bucket_name);
  if (r2)
    return executeListObjects(r2, { prefix, delimiter, cursor, limit }, c);
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    prefix && params.set("prefix", prefix), delimiter && params.set("delimiter", delimiter), cursor && params.set("cursor", cursor), limit !== void 0 && params.set("per_page", String(limit));
    let queryString = params.toString(), path = `/r2/buckets/${encodeURIComponent(bucket_name)}/objects${queryString ? `?${queryString}` : ""}`, response = await fetchFromPeer(ownerMiniflare, path);
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "list objects: 'bucket not found'"
  );
}
async function executeListObjects(r2, options, c) {
  let listResult = await r2.list(options), objects = listResult.objects.map((obj) => ({
    key: obj.key,
    etag: obj.etag,
    size: obj.size,
    last_modified: obj.uploaded.toISOString(),
    http_metadata: obj.httpMetadata ? {
      contentType: obj.httpMetadata.contentType,
      contentLanguage: obj.httpMetadata.contentLanguage,
      contentDisposition: obj.httpMetadata.contentDisposition,
      contentEncoding: obj.httpMetadata.contentEncoding,
      cacheControl: obj.httpMetadata.cacheControl,
      cacheExpiry: obj.httpMetadata.cacheExpiry?.toISOString()
    } : void 0,
    custom_metadata: obj.customMetadata
  }));
  return c.json({
    ...wrapResponse(objects),
    result_info: {
      delimited: listResult.delimitedPrefixes,
      cursor: listResult.truncated ? listResult.cursor : void 0,
      is_truncated: listResult.truncated ? "true" : "false"
    }
  });
}
async function getR2Object(c, bucket_name, object_key, headers) {
  let metadataOnly = headers["cf-metadata-only"] === "true", r2 = getR2Binding(c.env, bucket_name);
  if (r2) {
    if (metadataOnly) {
      let obj2 = await r2.head(object_key);
      return obj2 === null ? errorResponse(
        404,
        R2_ERROR_OBJECT_NOT_FOUND,
        "head: 'object not found'"
      ) : c.json(
        wrapResponse({
          key: obj2.key,
          etag: obj2.etag,
          last_modified: obj2.uploaded.toISOString(),
          size: obj2.size,
          http_metadata: obj2.httpMetadata ? {
            contentType: obj2.httpMetadata.contentType,
            contentLanguage: obj2.httpMetadata.contentLanguage,
            contentDisposition: obj2.httpMetadata.contentDisposition,
            contentEncoding: obj2.httpMetadata.contentEncoding,
            cacheControl: obj2.httpMetadata.cacheControl,
            cacheExpiry: obj2.httpMetadata.cacheExpiry?.toISOString()
          } : void 0,
          custom_metadata: obj2.customMetadata
        })
      );
    }
    let obj = await r2.get(object_key);
    if (obj === null)
      return errorResponse(
        404,
        R2_ERROR_OBJECT_NOT_FOUND,
        "get: 'object not found'"
      );
    let responseHeaders = new Headers();
    if (obj.httpMetadata?.contentType && responseHeaders.set("Content-Type", obj.httpMetadata.contentType), responseHeaders.set("Content-Length", String(obj.size)), responseHeaders.set("ETag", obj.etag), responseHeaders.set("Last-Modified", obj.uploaded.toUTCString()), obj.customMetadata)
      for (let [key, value] of Object.entries(obj.customMetadata))
        responseHeaders.set(`X-R2-Custom-Metadata-${key}`, value);
    return new Response(obj.body, { headers: responseHeaders });
  }
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let route = `/r2/buckets/${encodeURIComponent(
      bucket_name
    )}/objects/${encodeURIComponent(object_key)}`, response = await fetchFromPeer(ownerMiniflare, route, {
      headers: metadataOnly ? { "cf-metadata-only": "true" } : void 0
    });
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "get: 'bucket not found'"
  );
}
async function putR2Object(c, bucket_name, object_key, headers) {
  let r2 = getR2Binding(c.env, bucket_name);
  if (r2) {
    let body = await c.req.arrayBuffer(), contentType = headers["content-type"], customMetadataHeader = headers["cf-r2-custom-metadata"], options = {};
    if (contentType && (options.httpMetadata = { contentType }), customMetadataHeader)
      try {
        options.customMetadata = JSON.parse(customMetadataHeader);
      } catch {
        return errorResponse(400, 10001, "Invalid custom metadata JSON");
      }
    let obj = await r2.put(object_key, body, options);
    return c.json(
      wrapResponse({
        key: obj.key,
        etag: obj.etag,
        size: obj.size,
        version: obj.version
      })
    );
  }
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let body = await c.req.arrayBuffer(), fetchHeaders = {};
    headers["content-type"] && (fetchHeaders["content-type"] = headers["content-type"]), headers["cf-r2-custom-metadata"] && (fetchHeaders["cf-r2-custom-metadata"] = headers["cf-r2-custom-metadata"]);
    let path = `/r2/buckets/${encodeURIComponent(
      bucket_name
    )}/objects/${encodeURIComponent(object_key)}`, response = await fetchFromPeer(ownerMiniflare, path, {
      method: "PUT",
      headers: fetchHeaders,
      body
    });
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "put: 'bucket not found'"
  );
}
async function deleteR2Objects(c, bucket_name, body) {
  let keys = body;
  if (keys.length === 0)
    return errorResponse(
      400,
      10001,
      "Request body must be a non-empty array of keys"
    );
  let r2 = getR2Binding(c.env, bucket_name);
  if (r2)
    return await r2.delete(keys), c.json(wrapResponse(keys.map((key) => ({ key }))));
  let ownerMiniflare = await findR2BucketOwner(c, bucket_name);
  if (ownerMiniflare) {
    let path = `/r2/buckets/${encodeURIComponent(bucket_name)}/objects`, response = await fetchFromPeer(ownerMiniflare, path, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(keys)
    });
    if (response) return response;
  }
  return errorResponse(
    404,
    R2_ERROR_BUCKET_NOT_FOUND,
    "delete: 'bucket not found'"
  );
}

// src/workers/local-explorer/resources/workflows.ts
var WORKFLOW_ERROR_NOT_FOUND = 10501, EVT = {
  WORKFLOW_QUEUED: 0,
  WORKFLOW_START: 1,
  WORKFLOW_SUCCESS: 2,
  WORKFLOW_FAILURE: 3,
  WORKFLOW_TERMINATED: 4,
  STEP_START: 5,
  STEP_SUCCESS: 6,
  STEP_FAILURE: 7,
  SLEEP_START: 8,
  SLEEP_COMPLETE: 9,
  ATTEMPT_START: 10,
  ATTEMPT_SUCCESS: 11,
  ATTEMPT_FAILURE: 12,
  WAIT_START: 14,
  WAIT_COMPLETE: 15,
  WAIT_TIMED_OUT: 16
}, STATUS_COUNTS_TTL_MS = 3e4, statusCountsCache = /* @__PURE__ */ new Map();
async function getStatusCounts(workflowName, sqliteFiles, engineNamespace) {
  let cached = statusCountsCache.get(workflowName), now = Date.now();
  if (cached && cached.fileCount === sqliteFiles.length && now - cached.timestamp < STATUS_COUNTS_TTL_MS)
    return cached.counts;
  let counts = {};
  if (engineNamespace) {
    let results = await Promise.allSettled(
      sqliteFiles.map(async (entry) => {
        let hexId = entry.name.replace(/\.sqlite$/, ""), stubId = engineNamespace.idFromString(hexId), metadata = await engineNamespace.get(stubId).getInstanceMetadata();
        return STATUS_NAMES[metadata.status] ?? "unknown";
      })
    );
    for (let result of results) {
      let statusName = result.status === "fulfilled" ? result.value : "unknown";
      counts[statusName] = (counts[statusName] ?? 0) + 1;
    }
  }
  return statusCountsCache.set(workflowName, {
    counts,
    fileCount: sqliteFiles.length,
    timestamp: now
  }), counts;
}
var STATUS_NAMES = {
  0: "queued",
  1: "running",
  2: "paused",
  3: "errored",
  4: "terminated",
  5: "complete",
  6: "waitingForPause",
  7: "waiting"
};
function getEngineNamespace(env2, workflowName) {
  let info = env2.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName];
  return info ? env2[info.engineBinding] : null;
}
function getWorkflowBinding(env2, workflowName) {
  let info = env2.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName];
  return info ? env2[info.binding] : null;
}
function getLocalWorkflows(env2) {
  let workflowBindingMap = env2.LOCAL_EXPLORER_BINDING_MAP.workflows;
  return Object.values(workflowBindingMap).map((info) => ({
    name: info.name,
    class_name: info.className,
    script_name: info.scriptName
  }));
}
var workflowOwnerCache = /* @__PURE__ */ new Map(), OWNER_CACHE_TTL_MS = 3e4;
async function findWorkflowOwner(c, workflowName) {
  let cached = workflowOwnerCache.get(workflowName);
  if (cached && Date.now() - cached.timestamp < OWNER_CACHE_TTL_MS)
    return cached.url;
  let peerUrls = await getPeerUrlsIfAggregating(c);
  if (peerUrls.length === 0)
    return null;
  let owner = (await Promise.all(
    peerUrls.map(async (url) => {
      let response = await fetchFromPeer(url, "/workflows");
      return response?.ok && (await response.json()).result?.some((wf) => wf.name === workflowName) ? url : null;
    })
  )).find((url) => url !== null) ?? null;
  return workflowOwnerCache.set(workflowName, { url: owner, timestamp: Date.now() }), owner;
}
async function listWorkflows(c) {
  let localWorkflows = getLocalWorkflows(c.env), aggregatedWorkflows = await aggregateListResults(
    c,
    localWorkflows,
    "/workflows"
  ), seen = /* @__PURE__ */ new Set(), allWorkflows = aggregatedWorkflows.filter((wf) => seen.has(wf.name) ? !1 : (seen.add(wf.name), !0));
  return c.json({
    ...wrapResponse(allWorkflows),
    result_info: { count: allWorkflows.length }
  });
}
async function getWorkflowDetails(c, workflowName) {
  let info = c.env.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName];
  if (!info) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}`
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  let statusCounts = {
    complete: 0,
    errored: 0,
    paused: 0,
    queued: 0,
    running: 0,
    terminated: 0,
    waiting: 0,
    waitingForPause: 0
  };
  if (c.env.MINIFLARE_LOOPBACK !== void 0) {
    let loopbackUrl = `http://localhost/core/workflow-storage/${encodeURIComponent(workflowName)}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl);
    if (response.ok) {
      let sqliteFiles = (await response.json()).filter(
        (entry) => entry.type === "file" && entry.name.endsWith(".sqlite") && entry.name !== "metadata.sqlite"
      ), engineNamespace = getEngineNamespace(c.env, workflowName), counts = await getStatusCounts(
        workflowName,
        sqliteFiles,
        engineNamespace
      );
      statusCounts = { ...statusCounts, ...counts };
    }
  }
  return c.json(
    wrapResponse({
      name: info.name,
      class_name: info.className,
      script_name: info.scriptName,
      instances: statusCounts
    })
  );
}
async function deleteWorkflow(c, workflowName) {
  if (!c.env.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName])
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let loopbackUrl = `http://localhost/core/workflow-storage/${encodeURIComponent(workflowName)}`;
  return await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl, { method: "DELETE" }), statusCountsCache.delete(workflowName), c.json(wrapResponse({ status: "ok", success: !0 }));
}
async function listWorkflowInstances(c, workflowName, query) {
  let { page = 1, per_page: perPage = 25, status: statusFilter } = query;
  if (c.env.LOCAL_EXPLORER_BINDING_MAP.workflows[workflowName])
    return executeListWorkflowInstances(c, workflowName, {
      page,
      perPage,
      statusFilter
    });
  let ownerMiniflare = await findWorkflowOwner(c, workflowName);
  if (ownerMiniflare) {
    let params = new URLSearchParams();
    params.set("page", String(page)), params.set("per_page", String(perPage)), statusFilter && params.set("status", statusFilter);
    let peerPath = `/workflows/${encodeURIComponent(workflowName)}/instances?${params.toString()}`, response = await fetchFromPeer(ownerMiniflare, peerPath);
    if (response)
      return response;
  }
  return errorResponse(
    404,
    WORKFLOW_ERROR_NOT_FOUND,
    `Workflow '${workflowName}' not found.`
  );
}
async function executeListWorkflowInstances(c, workflowName, options) {
  let { page, perPage, statusFilter } = options;
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let loopbackUrl = `http://localhost/core/workflow-storage/${encodeURIComponent(workflowName)}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl);
  if (!response.ok)
    return response.status === 404 ? c.json({
      ...wrapResponse([]),
      result_info: {
        page: 1,
        per_page: perPage,
        total_count: 0,
        total_pages: 0
      }
    }) : errorResponse(
      500,
      10001,
      `Failed to read workflow storage: ${response.statusText}`
    );
  let sqliteFiles = (await response.json()).filter(
    (entry) => entry.type === "file" && entry.name.endsWith(".sqlite") && entry.name !== "metadata.sqlite"
  ).sort((a, b) => b.birthtimeMs - a.birthtimeMs), engineNamespace = getEngineNamespace(c.env, workflowName), statusCounts = await getStatusCounts(
    workflowName,
    sqliteFiles,
    engineNamespace
  );
  async function resolveInstance(entry) {
    let hexId = entry.name.replace(/\.sqlite$/, "");
    if (!engineNamespace)
      return {
        id: hexId,
        status: void 0,
        created_on: void 0
      };
    try {
      let stubId = engineNamespace.idFromString(hexId), metadata = await engineNamespace.get(stubId).getInstanceMetadata();
      return {
        id: metadata.instanceId || hexId,
        status: STATUS_NAMES[metadata.status] ?? "unknown",
        created_on: metadata.createdOn || void 0
      };
    } catch {
      return { id: hexId, status: void 0, created_on: void 0 };
    }
  }
  let instances, totalCount;
  if (statusFilter) {
    let filtered = (await Promise.all(sqliteFiles.map(resolveInstance))).filter((inst) => inst.status === statusFilter);
    totalCount = filtered.length;
    let offset = (page - 1) * perPage;
    instances = filtered.slice(offset, offset + perPage);
  } else {
    totalCount = sqliteFiles.length;
    let offset = (page - 1) * perPage, pageFiles = sqliteFiles.slice(offset, offset + perPage);
    instances = await Promise.all(pageFiles.map(resolveInstance));
  }
  let totalPages = Math.max(1, Math.ceil(totalCount / perPage)), cleanInstances = instances.map(({ id, status, created_on }) => ({
    id,
    ...status !== void 0 ? { status } : {},
    ...created_on ? { created_on } : {}
  }));
  return c.json({
    ...wrapResponse(cleanInstances),
    result_info: {
      page,
      per_page: perPage,
      total_count: totalCount,
      total_pages: totalPages,
      status_counts: statusCounts
    }
  });
}
async function getWorkflowInstanceDetails(c, workflowName, instanceId) {
  let engineNamespace = getEngineNamespace(c.env, workflowName);
  if (engineNamespace)
    return executeGetInstanceDetails(engineNamespace, instanceId, c);
  let ownerMiniflare = await findWorkflowOwner(c, workflowName);
  if (ownerMiniflare) {
    let response = await fetchFromPeer(
      ownerMiniflare,
      `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}`
    );
    if (response)
      return response;
  }
  return errorResponse(
    404,
    WORKFLOW_ERROR_NOT_FOUND,
    `Workflow '${workflowName}' not found.`
  );
}
async function executeGetInstanceDetails(engineNamespace, instanceId, c) {
  try {
    let stubId = /^[0-9a-f]{64}$/i.test(instanceId) ? engineNamespace.idFromString(instanceId) : engineNamespace.idFromName(instanceId), stub = engineNamespace.get(stubId), metadata = await stub.getInstanceMetadata();
    if (!metadata.instanceId)
      return errorResponse(
        404,
        WORKFLOW_ERROR_NOT_FOUND,
        `Workflow instance '${instanceId}' not found.`
      );
    let logs = await stub.readDetailedLogs(), queuedLog = logs.find((l) => l.event === EVT.WORKFLOW_QUEUED), startLog = logs.find((l) => l.event === EVT.WORKFLOW_START), successLog = logs.find((l) => l.event === EVT.WORKFLOW_SUCCESS), failureLog = logs.find((l) => l.event === EVT.WORKFLOW_FAILURE), terminatedLog = logs.find((l) => l.event === EVT.WORKFLOW_TERMINATED), endLog = successLog ?? failureLog ?? terminatedLog, stepGroups = /* @__PURE__ */ new Map();
    for (let log of logs)
      if (log.group) {
        let group = stepGroups.get(log.group) ?? [];
        group.push(log), stepGroups.set(log.group, group);
      }
    let steps = [];
    for (let [, groupLogs] of stepGroups) {
      let name = groupLogs[0].target ?? "", stepStart = groupLogs.find((l) => l.event === EVT.STEP_START), stepSuccess = groupLogs.find((l) => l.event === EVT.STEP_SUCCESS), stepFailure = groupLogs.find((l) => l.event === EVT.STEP_FAILURE), sleepStart = groupLogs.find((l) => l.event === EVT.SLEEP_START), sleepComplete = groupLogs.find(
        (l) => l.event === EVT.SLEEP_COMPLETE
      ), waitStart = groupLogs.find((l) => l.event === EVT.WAIT_START), waitComplete = groupLogs.find((l) => l.event === EVT.WAIT_COMPLETE), waitTimedOut = groupLogs.find(
        (l) => l.event === EVT.WAIT_TIMED_OUT
      );
      if (sleepStart)
        steps.push({
          name,
          start: sleepStart.timestamp,
          end: sleepComplete?.timestamp ?? null,
          finished: !!sleepComplete,
          type: "sleep",
          error: null
        });
      else if (waitStart) {
        let waitEnd = waitComplete ?? waitTimedOut, waitError = waitTimedOut?.metadata, waitMeta = waitComplete?.metadata;
        steps.push({
          name,
          start: waitStart.timestamp,
          end: waitEnd?.timestamp ?? null,
          finished: !!waitEnd,
          type: "waitForEvent",
          error: waitError ? {
            name: waitError.name ?? "Error",
            message: waitError.message ?? ""
          } : null,
          output: waitComplete ? {
            type: waitMeta?.type ?? "",
            payload: waitMeta?.payload ?? {},
            timestamp: waitMeta?.timestamp ?? null
          } : null
        });
      } else if (stepStart) {
        let attempts = [], attemptStarts = groupLogs.filter(
          (l) => l.event === EVT.ATTEMPT_START
        ), attemptSuccesses = groupLogs.filter(
          (l) => l.event === EVT.ATTEMPT_SUCCESS
        ), attemptFailures = groupLogs.filter(
          (l) => l.event === EVT.ATTEMPT_FAILURE
        );
        for (let aStart of attemptStarts) {
          let attemptNum = aStart.metadata.attempt, aSuccess = attemptSuccesses.find(
            (l) => l.metadata.attempt === attemptNum
          ), aFailure = attemptFailures.find(
            (l) => l.metadata.attempt === attemptNum
          ), aEnd = aSuccess ?? aFailure;
          attempts.push({
            start: aStart.timestamp,
            end: aEnd?.timestamp ?? null,
            success: aSuccess ? !0 : aFailure ? !1 : null,
            error: aFailure ? aFailure.metadata.error ?? null : null
          });
        }
        let stepEnd = stepSuccess ?? stepFailure;
        steps.push({
          name,
          start: stepStart.timestamp,
          end: stepEnd?.timestamp ?? null,
          success: stepSuccess ? !0 : stepFailure ? !1 : null,
          type: "step",
          output: stepSuccess?.metadata?.result ?? void 0,
          config: stepStart.metadata?.config ?? null,
          attempts
        });
      }
    }
    return c.json(
      wrapResponse({
        status: STATUS_NAMES[metadata.status] ?? "unknown",
        params: queuedLog?.metadata?.params ?? null,
        queued: queuedLog?.timestamp ?? null,
        start: startLog?.timestamp ?? null,
        end: endLog?.timestamp ?? null,
        output: successLog?.metadata?.result ?? null,
        error: failureLog ? failureLog.metadata.error ?? null : null,
        steps,
        step_count: steps.length
      })
    );
  } catch (error) {
    let message = error instanceof Error ? error.message : "Instance not found";
    return message === "instance.not_found" || message === "Engine was never started" ? errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow instance '${instanceId}' not found.`
    ) : errorResponse(500, 10001, message);
  }
}
async function createWorkflowInstance(c, workflowName) {
  let workflow = getWorkflowBinding(c.env, workflowName);
  if (!workflow) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await c.req.text()
        }
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  try {
    let body = {};
    try {
      body = await c.req.json();
    } catch {
    }
    let result = await workflow.create({
      id: body.id,
      params: body.params
    });
    return statusCountsCache.delete(workflowName), c.json(wrapResponse({ id: result.id }));
  } catch (error) {
    let message = error instanceof Error ? error.message : "Failed to create instance";
    return errorResponse(500, 10001, message);
  }
}
async function changeWorkflowInstanceStatus(c, workflowName, instanceId, body) {
  let workflow = getWorkflowBinding(c.env, workflowName);
  if (!workflow) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  try {
    let { action } = body;
    if (!["pause", "resume", "restart", "terminate"].includes(action))
      return errorResponse(
        400,
        10001,
        `Invalid action '${action}'. Must be one of: pause, resume, restart, terminate.`
      );
    let handle = await workflow.get(instanceId);
    switch (action) {
      case "pause":
        await handle.pause();
        break;
      case "resume":
        await handle.resume();
        break;
      case "restart": {
        if (body.from && !body.from.name)
          return errorResponse(
            400,
            10001,
            "'from.name' is required when restarting from a specific step."
          );
        let opts = body.from ? { from: body.from } : void 0;
        await handle.restart(opts);
        break;
      }
      case "terminate":
        await handle.terminate();
        break;
    }
    return statusCountsCache.delete(workflowName), c.json(wrapResponse({ success: !0 }));
  } catch (error) {
    let message = error instanceof Error ? error.message : "Failed to change status";
    return message === "instance.not_found" ? errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow instance '${instanceId}' not found.`
    ) : errorResponse(500, 10001, message);
  }
}
async function deleteWorkflowInstance(c, workflowName, instanceId) {
  let engineNamespace = getEngineNamespace(c.env, workflowName);
  if (!engineNamespace) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response2 = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}`,
        { method: "DELETE" }
      );
      if (response2)
        return response2;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  if (c.env.MINIFLARE_LOOPBACK === void 0)
    return errorResponse(500, 10001, "Loopback service not available");
  let hexId = /^[0-9a-f]{64}$/i.test(instanceId) ? instanceId : engineNamespace.idFromName(instanceId).toString(), encodedName = encodeURIComponent(workflowName), encodedHexId = encodeURIComponent(hexId), loopbackUrl = `http://localhost/core/workflow-storage/${encodedName}/${encodedHexId}`, response = await c.env.MINIFLARE_LOOPBACK.fetch(loopbackUrl, {
    method: "DELETE"
  });
  return response.ok ? (statusCountsCache.delete(workflowName), c.json(wrapResponse({ success: !0 }))) : response.status === 404 ? errorResponse(
    404,
    WORKFLOW_ERROR_NOT_FOUND,
    `Workflow instance '${instanceId}' not found.`
  ) : errorResponse(500, 10001, "Failed to delete instance");
}
async function sendWorkflowInstanceEvent(c, workflowName, instanceId, eventType) {
  let workflow = getWorkflowBinding(c.env, workflowName);
  if (!workflow) {
    let ownerMiniflare = await findWorkflowOwner(c, workflowName);
    if (ownerMiniflare) {
      let response = await fetchFromPeer(
        ownerMiniflare,
        `/workflows/${encodeURIComponent(workflowName)}/instances/${encodeURIComponent(instanceId)}/events/${encodeURIComponent(eventType)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await c.req.text()
        }
      );
      if (response)
        return response;
    }
    return errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow '${workflowName}' not found.`
    );
  }
  try {
    let payload;
    try {
      payload = await c.req.json();
    } catch {
    }
    return await (await workflow.get(
      instanceId
    )).sendEvent({ payload, type: eventType }), c.json(wrapResponse({ success: !0 }));
  } catch (error) {
    let message = error instanceof Error ? error.message : "Failed to send event";
    return message === "instance.not_found" ? errorResponse(
      404,
      WORKFLOW_ERROR_NOT_FOUND,
      `Workflow instance '${instanceId}' not found.`
    ) : errorResponse(500, 10001, message);
  }
}

// src/workers/local-explorer/route-names.ts
var ROUTE_PATTERNS = [
  [/^\/storage\/kv\/namespaces\/[^/]+\/bulk\/get$/, "kv.bulk_get"],
  [/^\/storage\/kv\/namespaces\/[^/]+\/values\/[^/]+$/, "kv.value"],
  [/^\/storage\/kv\/namespaces\/[^/]+\/keys$/, "kv.keys"],
  [/^\/storage\/kv\/namespaces$/, "kv.namespaces"],
  [/^\/d1\/database\/[^/]+\/raw$/, "d1.query"],
  [/^\/d1\/database$/, "d1.databases"],
  [/^\/workers\/durable_objects\/namespaces\/[^/]+\/query$/, "do.query"],
  [/^\/workers\/durable_objects\/namespaces\/[^/]+\/objects$/, "do.objects"],
  [/^\/workers\/durable_objects\/namespaces$/, "do.namespaces"],
  [/^\/r2\/buckets\/[^/]+\/objects\/[^/]+$/, "r2.object"],
  [/^\/r2\/buckets\/[^/]+\/objects$/, "r2.objects"],
  [/^\/r2\/buckets\/[^/]+$/, "r2.bucket"],
  [/^\/r2\/buckets$/, "r2.buckets"],
  [
    /^\/workflows\/[^/]+\/instances\/[^/]+\/events\/[^/]+$/,
    "workflows.instance.event"
  ],
  [
    /^\/workflows\/[^/]+\/instances\/[^/]+\/status$/,
    "workflows.instance.status"
  ],
  [/^\/workflows\/[^/]+\/instances\/[^/]+$/, "workflows.instance"],
  [/^\/workflows\/[^/]+\/instances$/, "workflows.instances"],
  [/^\/workflows\/[^/]+$/, "workflows.details"],
  [/^\/workflows$/, "workflows.list"],
  [/^\/local\/workers$/, "local.workers"]
];
function getRouteName(path) {
  let apiPath = path.replace(/^\/cdn-cgi\/explorer\/api/, "");
  for (let [pattern, name] of ROUTE_PATTERNS)
    if (pattern.test(apiPath))
      return name;
  return "unknown";
}

// src/workers/local-explorer/telemetry.ts
var SPARROW_URL = "https://sparrow.cloudflare.com";
function sendTelemetryEvent(deviceId, event, properties) {
  let body = {
    event,
    deviceId,
    timestamp: Date.now(),
    properties
  };
  return fetch(`${SPARROW_URL}/api/v1/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Sparrow-Source-Key": "50598e014ed44c739ec8074fdc16057c"
    },
    body: JSON.stringify(body)
  }).then(
    () => {
    },
    // fail silently
    () => {
    }
  );
}
async function telemetryMiddleware(c, next) {
  if (await next(), !c.res.ok || !c.env.MINIFLARE_TELEMETRY_CONFIG.enabled || // Skip telemetry for aggregation calls between instances
  c.req.raw.headers.has(NO_AGGREGATE_HEADER) || !c.env.MINIFLARE_TELEMETRY_CONFIG.deviceId)
    return;
  let route = `${getRouteName(c.req.path)}.${c.req.method.toLowerCase()}`, properties = {
    userAgent: c.req.header("User-Agent") ?? "unknown"
  };
  if (route === "local.workers.get")
    try {
      let workers = (await c.res.clone().json()).result ?? [], kvCount = 0, d1Count = 0, r2Count = 0, doCount = 0, workflowsCount = 0;
      for (let worker of workers)
        worker.bindings && (kvCount += worker.bindings.kv?.length ?? 0, d1Count += worker.bindings.d1?.length ?? 0, r2Count += worker.bindings.r2?.length ?? 0, doCount += worker.bindings.do?.length ?? 0, workflowsCount += worker.bindings.workflows?.length ?? 0);
      properties.workerCount = workers.length, properties.kvCount = kvCount, properties.d1Count = d1Count, properties.r2Count = r2Count, properties.doCount = doCount, properties.workflowsCount = workflowsCount;
    } catch {
    }
  let telemetryPromise = sendTelemetryEvent(
    c.env.MINIFLARE_TELEMETRY_CONFIG.deviceId,
    `localapi.${route}`,
    properties
  );
  c.executionCtx.waitUntil(telemetryPromise);
}

// src/workers/local-explorer/explorer.worker.ts
var EXPLORER_API_PATH2 = `${CorePaths.EXPLORER}/api`, app = new Hono2().basePath(CorePaths.EXPLORER);
app.onError((err) => errorResponse(500, 1e4, err.message));
app.use("/api/*", async (c, next) => {
  let origin = c.req.header("Origin");
  if (c.req.method === "OPTIONS")
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin ?? "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, cf-metadata-only, cf-r2-custom-metadata",
        "Access-Control-Max-Age": "86400"
      }
    });
  await next(), origin && c.res.headers.set("Access-Control-Allow-Origin", origin);
});
app.use("/api/*", telemetryMiddleware);
function getContentType(filePath) {
  let contentType = import_mime.default.getType(filePath);
  return contentType?.startsWith("text/") && !contentType.includes("charset") && (contentType = `${contentType}; charset=utf-8`), contentType || "application/octet-stream";
}
app.get("/*", async (c, next) => {
  if (c.req.path.startsWith(EXPLORER_API_PATH2))
    return next();
  let assetPath = c.req.path.replace(CorePaths.EXPLORER, "") || "/index.html";
  assetPath === "/" && (assetPath = "/index.html");
  let response = await c.env.MINIFLARE_EXPLORER_DISK.fetch(
    new URL(assetPath, "http://placeholder")
  );
  if (response.ok) {
    let contentType = getContentType(assetPath);
    return new Response(response.body, {
      headers: { "Content-Type": contentType }
    });
  }
  let indexResponse = await c.env.MINIFLARE_EXPLORER_DISK.fetch(
    new URL("index.html", "http://placeholder")
  );
  return indexResponse.ok ? new Response(indexResponse.body, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  }) : c.notFound();
});
app.get("/api", (c) => c.json(openapi_local_default));
app.get(
  "/api/storage/kv/namespaces",
  // The query params are optional, so the whole schema is wrapped in an optional,
  // but hono's validator will always receive an object.
  // This just unwraps it so we can validate the inner schema.
  // The inner schema has all the individual params as optional
  validateQuery(zWorkersKvNamespaceListNamespacesData.shape.query.unwrap()),
  (c) => listKVNamespaces(c, c.req.valid("query"))
);
app.get(
  "/api/storage/kv/namespaces/:namespace_id/keys",
  validateQuery(
    zWorkersKvNamespaceListANamespaceSKeysData.shape.query.unwrap()
  ),
  (c) => listKVKeys(c, c.req.valid("query"))
);
app.get(
  "/api/storage/kv/namespaces/:namespace_id/values/:key_name",
  (c) => getKVValue(c, c.req.param("namespace_id"), c.req.param("key_name"))
);
app.put(
  "/api/storage/kv/namespaces/:namespace_id/values/:key_name",
  (c) => putKVValue(c, c.req.param("namespace_id"), c.req.param("key_name"))
);
app.delete(
  "/api/storage/kv/namespaces/:namespace_id/values/:key_name",
  (c) => deleteKVValue(c, c.req.param("namespace_id"), c.req.param("key_name"))
);
app.post(
  "/api/storage/kv/namespaces/:namespace_id/bulk/get",
  validateRequestBody(
    zWorkersKvNamespaceGetMultipleKeyValuePairsData.shape.body
  ),
  (c) => bulkGetKVValues(c, c.req.valid("json"))
);
app.get(
  "/api/d1/database",
  validateQuery(zD1ListDatabasesData.shape.query.unwrap()),
  (c) => listD1Databases(c, c.req.valid("query"))
);
app.post(
  "/api/d1/database/:database_id/raw",
  validateRequestBody(zD1RawDatabaseQueryData.shape.body),
  (c) => rawD1Database(c, c.req.param("database_id"), c.req.valid("json"))
);
app.get("/api/workers/durable_objects/namespaces", (c) => listDONamespaces(c));
app.get(
  "/api/workers/durable_objects/namespaces/:namespace_id/objects",
  validateQuery(zDurableObjectsNamespaceListObjectsData.shape.query.unwrap()),
  (c) => listDOObjects(c, c.req.param("namespace_id"), c.req.valid("query"))
);
app.post(
  "/api/workers/durable_objects/namespaces/:namespace_id/query",
  validateRequestBody(zDurableObjectsNamespaceQuerySqliteData.shape.body),
  (c) => queryDOSqlite(c, c.req.param("namespace_id"), c.req.valid("json"))
);
app.get("/api/r2/buckets", listR2Buckets);
app.get(
  "/api/r2/buckets/:bucket_name/objects",
  validateQuery(zR2BucketListObjectsData.shape.query.unwrap()),
  (c) => listR2Objects(c, c.req.param("bucket_name"), c.req.valid("query"))
);
app.get(
  "/api/r2/buckets/:bucket_name/objects/:object_key",
  (c) => getR2Object(c, c.req.param("bucket_name"), c.req.param("object_key"), {
    "cf-metadata-only": c.req.header("cf-metadata-only")
  })
);
app.put(
  "/api/r2/buckets/:bucket_name/objects/:object_key",
  (c) => putR2Object(c, c.req.param("bucket_name"), c.req.param("object_key"), {
    "content-type": c.req.header("content-type"),
    "cf-r2-custom-metadata": c.req.header("cf-r2-custom-metadata")
  })
);
app.delete(
  "/api/r2/buckets/:bucket_name/objects",
  validateRequestBody(zR2BucketDeleteObjectsData.shape.body),
  (c) => deleteR2Objects(c, c.req.param("bucket_name"), c.req.valid("json"))
);
app.get("/api/workflows", (c) => listWorkflows(c));
app.get(
  "/api/workflows/:workflow_name",
  (c) => getWorkflowDetails(c, c.req.param("workflow_name"))
);
app.delete(
  "/api/workflows/:workflow_name",
  (c) => deleteWorkflow(c, c.req.param("workflow_name"))
);
app.get(
  "/api/workflows/:workflow_name/instances",
  validateQuery(zWorkflowsListInstancesData.shape.query.unwrap()),
  (c) => listWorkflowInstances(c, c.req.param("workflow_name"), c.req.valid("query"))
);
app.post(
  "/api/workflows/:workflow_name/instances",
  (c) => createWorkflowInstance(c, c.req.param("workflow_name"))
);
app.get(
  "/api/workflows/:workflow_name/instances/:instance_id",
  (c) => getWorkflowInstanceDetails(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id")
  )
);
app.patch(
  "/api/workflows/:workflow_name/instances/:instance_id/status",
  validateRequestBody(zWorkflowsChangeInstanceStatusData.shape.body),
  (c) => changeWorkflowInstanceStatus(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id"),
    c.req.valid("json")
  )
);
app.post(
  "/api/workflows/:workflow_name/instances/:instance_id/events/:event_type",
  (c) => sendWorkflowInstanceEvent(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id"),
    c.req.param("event_type")
  )
);
app.delete(
  "/api/workflows/:workflow_name/instances/:instance_id",
  (c) => deleteWorkflowInstance(
    c,
    c.req.param("workflow_name"),
    c.req.param("instance_id")
  )
);
app.get("/api/local/workers", async (c) => {
  let loopback = c.env.MINIFLARE_LOOPBACK, selfWorkerNames = c.env.LOCAL_EXPLORER_WORKER_NAMES, explorerWorkerOpts = c.env.MINIFLARE_EXPLORER_WORKER_OPTS;
  try {
    let registry = await (await loopback.fetch("http://localhost/core/dev-registry")).json(), localWorkers = selfWorkerNames.filter((name) => registry[name]).map((name) => ({
      isSelf: !0,
      name,
      bindings: explorerWorkerOpts[name]
    })), peerUrls = await getPeerUrlsIfAggregating(c), peerResults = await Promise.all(
      peerUrls.map(async (url) => {
        let peerResponse = await fetchFromPeer(url, "/local/workers");
        if (!peerResponse?.ok) return [];
        try {
          return ((await peerResponse.json()).result ?? []).map((w) => ({ ...w, isSelf: !1 }));
        } catch {
          return [];
        }
      })
    ), allWorkers = [...localWorkers, ...peerResults.flat()];
    return c.json(wrapResponse(allWorkers));
  } catch (err) {
    let message = err instanceof Error ? err.message : "Failed to fetch dev registry";
    return errorResponse(500, 1e4, message);
  }
});
var explorer_worker_default = app;
export {
  explorer_worker_default as default
};
//# sourceMappingURL=explorer.worker.js.map
