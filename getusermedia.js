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
  formerEditors: [
       { w3cid: "85118", name: "Daniel C. Burnett", company: "Invited Expert", retiredDate: "2018-06-01" },
       { w3cid: "45507", name: "Adam Bergkvist", company: "Ericsson", retiredDate: "2018-06-01" },
       { w3cid: "47326", name: "Anant Narayanan", company: "Mozilla", retiredDate: "2012-11-30" },
  ],
    editors:  [
       { w3cid: "25254", name: "Cullen Jennings", company: "Cisco" },
       { w3cid: "65611", name: "Bernard Aboba", company: "Microsoft Corporation" },
       { w3cid: "79152", name: "Jan-Ivar Bruaroey", company: "Mozilla" },
       { w3cid: "96936", name: "Henrik Bostr\xF6m", company: "Google" }
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
   wgPublicList: "public-webrtc",

   // URI of the patent status for this WG, for Rec-track documents
   // !!!! IMPORTANT !!!!
   // This is important for Rec-track documents, do not copy a patent URI from a random
   // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
   // Team Contact.
   wgPatentURI:   ["https://www.w3.org/2004/01/pp-impl/47318/status"],
   github: "https://github.com/w3c/mediacapture-main/",
  xref: ["dom", "html", "webidl", "permissions", "permissions-policy", "webaudio"],
   otherLinks: [
    {
      key: "Participate",
      data: [
        {
          value: "Mailing list",
          href: "https://lists.w3.org/Archives/Public/public-webrtc/"
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
};
