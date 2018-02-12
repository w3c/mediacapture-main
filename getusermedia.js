// Working around  respec using WHATWG HTML links for EventHandler
// See also https://github.com/w3c/respec/issues/1372
function cleanHTMLRef() {
    [...document.querySelectorAll("a[href='https://html.spec.whatwg.org/multipage/#eventhandler']")].forEach(a => a.href = "https://www.w3.org/TR/html52/webappapis.html#event-handler");
    document.getElementById('bib-HTML').nextElementSibling.remove();
    document.getElementById('bib-HTML').remove();
}

var respecConfig = {
   // specification status (e.g. WD, LCWD, NOTE, etc.). If in doubt use ED.
   specStatus:           "ED",

   // the specification's short name, as in http://www.w3.org/TR/short-name/
   shortName:            "mediacapture-streams",
   // if your specification has a subtitle that goes below the main
   // formal title, define it here
   // subtitle   :  "an excellent document",

   // if you wish the publication date to be other than today, set this
   // publishDate:  "2009-08-06",

   // new ability to override the copyright completely
   overrideCopyright:  "<p class='copyright'>Initial Author of this Specification was Ian Hickson, Google Inc., with the following copyright statement:<br /> &#169; Copyright 2004-2011 Apple Computer, Inc., Mozilla Foundation, and Opera Software ASA. You are granted a license to use, reproduce and create derivative works of this document.<\/p> <p class='copyright'>All subsequent changes since 26 July 2011 done by the W3C WebRTC Working Group (and previously the Device APIs Working Group) are under the following <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright<\/a>:<br />&#169; 2011-2017 <a href='https://www.w3.org/'><abbr title='World Wide Web Consortium'>W3C<\/abbr><\/a><sup>&#174;<\/sup> (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT<\/abbr><\/a>, <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM<\/abbr><\/a>, <a href='https://www.keio.ac.jp/'>Keio<\/a>, <a href='http://ev.buaa.edu.cn/'>Beihang<\/a>). <a href='https://www.w3.org/Consortium/Legal/copyright-documents'>Document use<\/a>  rules apply.<\/p> <p class='copyright'>For the entire publication on the W3C site the <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability<\/a> and <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark<\/a> rules apply.<\/p>",

   // if the specification's copyright date is a range of years, specify
   // the start date here:
   // copyrightStart: "2005",

   // if there is a previously published draft, uncomment this and set its YYYY-MM-DD
   // prevED: "http://w3c.github.io/mediacapture-main/archives/20170605/getusermedia.html",

   // if there a publicly available Editor's Draft, this is the link
   edDraftURI: "https://w3c.github.io/mediacapture-main/",

   // if this is a LCWD, uncomment and set the end of its review period
   // lcEnd: "2009-08-05",

   // if you want to have extra CSS, append them to this list
   // it is recommended that the respec.css stylesheet be kept
   //extraCSS:             ["http://dev.w3.org/2009/dap/ReSpec.js/css/respec.css"],
   //extraCSS:           ["../../../2009/dap/ReSpec.js/css/respec.css"],

   // editors, add as many as you like
   // only "name" is required
   editors:  [
       // { name: "Your Name", url: "http://example.org/",
       // company: "Your Company", companyURL: "http://example.com/" },
       { w3cid: "85118", name: "Daniel C. Burnett", company: "Invited Expert" },
       { w3cid: "45507", name: "Adam Bergkvist", company: "Ericsson" },
       { w3cid: "25254", name: "Cullen Jennings", company: "Cisco" },
       { w3cid: "47326", name: "Anant Narayanan", company: "Mozilla", note: "until November 2012" },
       { w3cid: "65611", name: "Bernard Aboba", company: "Microsoft Corporation" },
       { w3cid: "79152", name: "Jan-Ivar Bruaroey", company: "Mozilla" }
   ],

   // authors, add as many as you like.
   // This is optional, uncomment if you have authors as well as editors.
   // only "name" is required. Same format as editors.

   //authors:  [
   //    { name: "Your Name", url: "http://example.org/",
   //      company: "Your Company", companyURL: "http://example.com/" },
   //],

   // name of the WG
   wg: ["Web Real-Time Communication Working Group"]          ,

   // URI of the public WG page
   wgURI:["https://www.w3.org/2011/04/webrtc/"],

   // name (without the @w3.org) of the public mailing to which comments are due
   wgPublicList: "public-media-capture",

   // URI of the patent status for this WG, for Rec-track documents
   // !!!! IMPORTANT !!!!
   // This is important for Rec-track documents, do not copy a patent URI from a random
   // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
   // Team Contact.
   wgPatentURI:   ["https://www.w3.org/2004/01/pp-impl/47318/status"],
   otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-media-capture/"
        },
        {
          value: "Browse open issues",
          href: "https://github.com/w3c/mediacapture-main/issues"
        },
        {
          value: "File a bug",
          href: "https://github.com/w3c/mediacapture-main/issues/new"
        }
      ]
    }
  ],
   localBiblio: {
     ES6: {
       title:  "ECMAScript 2015",
       href: "http://www.ecma-international.org/ecma-262/6.0/",
       authors: ["Allen Wirfs-Brock"],
       status: "Standard",
       publisher: "Ecma International"
     }
   },
    afterEnd: function markFingerprinting () {
        Array.prototype.forEach.call(
            document.querySelectorAll(".fingerprint"),
            function (el) {
                var img = new Image();
                img.src = "images/fingerprint.png";
                img.alt = "(This is a fingerprinting vector.)";
                img.width = 15;
                img.height = 21;
                el.appendChild(img);
            });
    },
    postProcess: [cleanHTMLRef]
};
