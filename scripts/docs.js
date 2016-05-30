var md = require('markdown-it')(),
	h = require('./helper.js')

module.exports.docs = function(config, files) {
	return docs(config, files)
}
 //https://bussgelderfahrenderverkehr.herokuapp.com/
function docs(config, files) {
	var css = '.markdown-body hr:after,.markdown-body hr:before{display:table;content:""}.markdown-body ol,.markdown-body td,.markdown-body th,.markdown-body ul{}.markdown-body .octicon,.markdown-body a,.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}@font-face{font-family:octicons-anchor;src:url(data:font/woff;charset=utf-8;base64,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) format("woff")}body{background:#fcfcfc}.markdown-body{-webkit-text-size-adjust:100%;text-size-adjust:100%;color:#333;max-width:750px;font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:16px;line-height:1.6;word-wrap:break-word;margin:0 auto}.markdown-body strong{font-weight:700}.markdown-body h1{margin:.67em 0}.markdown-body img{border:0}.markdown-body hr{box-sizing:content-box}.markdown-body input{color:inherit;margin:0;line-height:normal;font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"}.markdown-body html input[disabled]{cursor:default}.markdown-body input[type=checkbox]{box-sizing:border-box;padding:0}.markdown-body *{box-sizing:border-box}.markdown-body a{background-color:transparent;background-position:center 20px;background-image:linear-gradient(to top,transparent,transparent 2px,#e9450b 2px,#e9450b 4px,transparent 4px);color:#333;cursor:pointer}.markdown-body a:active,.markdown-body a:hover{outline:0;background-color:rgba(233,69,11,.1);cursor:pointer}.markdown-body hr:after{clear:both}.markdown-body blockquote{margin:0}.markdown-body h1,.markdown-body h2{padding-bottom:.3em;border-bottom:1px solid rgba(233,69,11,.2)}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code{font-family:Consolas,"Liberation Mono",Menlo,Courier,monospace;background:rgba(233,69,11,.1)}.markdown-body pre{font:12px Consolas,"Liberation Mono",Menlo,Courier,monospace;word-wrap:normal}.markdown-body .select::-ms-expand{opacity:0}.markdown-body .octicon{font:normal normal normal 16px/1 octicons-anchor;display:inline-block;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-body .octicon-link:before{content:\'\f05c\'}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .anchor{display:inline-block;padding-right:2px;margin-left:-18px}.markdown-body .anchor:focus{outline:0}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:1em;margin-bottom:15px;font-weight:700;line-height:1.4}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:#000;vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1{font-size:1.8em;line-height:1.2}.markdown-body h1 .anchor{line-height:1}.markdown-body h2{font-size:1.4em;line-height:1.225}.markdown-body h2 .anchor{line-height:1}.markdown-body h3{font-size:1.2em;line-height:1.43}.markdown-body h3 .anchor,.markdown-body h4 .anchor{line-height:1.2}.markdown-body h4{font-size:1.2em;font-weight:400}.markdown-body h5 .anchor,.markdown-body h6 .anchor{line-height:1.1}.markdown-body h5{font-size:1em}.markdown-body h6{font-size:1em;color:#777}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body hr{overflow:hidden;background:#e7e7e7;height:4px;padding:0;margin:16px 0;border:0}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:16px}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body blockquote{padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body table{border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.markdown-body table th{font-weight:700}.markdown-body table td,.markdown-body table th{padding:6px 13px}.markdown-body table tr{text-align:left;border-bottom:1px solid rgba(233,69,11,.2)}.markdown-body img{max-width:100%;box-sizing:content-box;background-color:#fcfcfc}.markdown-body code{padding:.2em 0;margin:0;line-height:1.9;font-size:85%;border:1px solid rgba(233,69,11,.2);background-color:rgba(233,69,11,.05);border-radius:3px}.markdown-body code:after,.markdown-body code:before{letter-spacing:-.2em;content:"\00a0"}.markdown-body pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:0 0;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre,.markdown-body pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body pre code{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body pre code:after,.markdown-body pre code:before{content:normal}.markdown-body .pl-c{color:#969896}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#0086b3}.markdown-body .pl-e,.markdown-body .pl-en{color:#795da3}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:#333}.markdown-body .pl-ent{color:#63a35c}.markdown-body .pl-k{color:#a71d5d}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:#183691}.markdown-body .pl-v{color:#ed6a43}.markdown-body .pl-id{color:#b52a1d}.markdown-body .pl-ii{background-color:#b52a1d;color:#f8f8f8}.markdown-body .pl-sr .pl-cce{color:#63a35c;font-weight:700}.markdown-body .pl-ml{color:#693a17}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{color:#1d3e81;font-weight:700}.markdown-body .pl-mq{color:teal}.markdown-body .pl-mi{color:#333;font-style:italic}.markdown-body .pl-mb{color:#333;font-weight:700}.markdown-body .pl-md{background-color:#ffecec;color:#bd2c00}.markdown-body .pl-mi1{background-color:#eaffea;color:#55a532}.markdown-body .pl-mdr{color:#795da3;font-weight:700}.markdown-body .pl-mo{color:#1d3e81}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px Consolas,"Liberation Mono",Menlo,Courier,monospace;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-bottom-color:#bbb;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.markdown-body:after,.markdown-body:before{display:table;content:""}.markdown-body:after{clear:both}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item input{margin:0 .35em .25em -1.6em;vertical-align:middle}.markdown-body :checked+.radio-label{z-index:1;position:relative;border-color:#4078c0}'
	css = '@font-face {\n  font-family: octicons-anchor;\n  src: url(data:font/woff;charset=utf-8;base64,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) format(\'woff\');\n}\nbody{\n  background: #fcfcfc;\n}\n.markdown-body {\n  -webkit-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  color: #333;\n  max-width: 750px;\n  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  word-wrap: break-word;\n  margin: 0 auto;\n}\n.markdown-body a {\n  background-color: transparent;\n  background-position: center 20px;\n  color: #333;\n  background-image: linear-gradient(to top, transparent, transparent 2px, rgb(233,69,11) 2px, rgb(233,69,11) 4px, transparent 4px);\n}\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline: 0;\n}\n.markdown-body strong {\n  font-weight: bold;\n}\n.markdown-body h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n.markdown-body img {\n  border: 0;\n}\n.markdown-body hr {\n  box-sizing: content-box;\n  height: 0;\n}\n.markdown-body pre {\n  overflow: auto;\n}\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n.markdown-body input {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n.markdown-body html input[disabled] {\n  cursor: default;\n}\n.markdown-body input {\n  line-height: normal;\n}\n.markdown-body input[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.markdown-body td,\n.markdown-body th {\n  padding: 0;\n}\n.markdown-body * {\n  box-sizing: border-box;\n}\n.markdown-body input {\n  font: 13px/1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";\n}\n.markdown-body a {\n  color: #333;\n  text-decoration: none;\n  cursor: pointer;\n}\n.markdown-body a:hover,\n.markdown-body a:active {\n  background-color: rgba(233,69,11,.1);\n  cursor: pointer;\n}\n.markdown-body hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #ddd;\n}\n.markdown-body hr:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  line-height: 1.1;\n}\n.markdown-body h1 {\n  font-size: 24px;\n}\n.markdown-body h2 {\n  font-size: 21px;\n}\n.markdown-body h3 {\n  font-size: 16px;\n}\n.markdown-body h4 {\n  font-size: 14px;\n}\n.markdown-body h5 {\n  font-size: 12px;\n}\n.markdown-body h6 {\n  font-size: 11px;\n}\n.markdown-body blockquote {\n  margin: 0;\n}\n.markdown-body ul,\n.markdown-body ol {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n.markdown-body ul ul ol,\n.markdown-body ul ol ol,\n.markdown-body ol ul ol,\n.markdown-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd {\n  margin-left: 0;\n}\n.markdown-body code {\n  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  font-size: 12px;\n}\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font: 12px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n}\n.markdown-body .select::-ms-expand {\n  opacity: 0;\n}\n.markdown-body .octicon {\n  font: normal normal normal 16px/1 octicons-anchor;\n  display: inline-block;\n  text-decoration: none;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.markdown-body .octicon-link:before {\n  content: \'\f05c\';\n}\n.markdown-body>*:first-child {\n  margin-top: 0 !important;\n}\n.markdown-body>*:last-child {\n  margin-bottom: 0 !important;\n}\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body .anchor {\n  display: inline-block;\n  padding-right: 2px;\n  margin-left: -18px;\n}\n.markdown-body .anchor:focus {\n  outline: none;\n}\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-top: 1em;\n  margin-bottom: 15px;\n  font-weight: bold;\n  line-height: 1.4;\n}\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  color: #000;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n.markdown-body h1 {\n  padding-bottom: 0.3em;\n  font-size: 1.8em;\n  line-height: 1.2;\n  border-bottom: 1px solid rgba(233,69,11,.2);\n}\n.markdown-body h1 .anchor {\n  line-height: 1;\n}\n.markdown-body h2 {\n  padding-bottom: 0.3em;\n  font-size: 1.4em;\n  line-height: 1.225;\n  border-bottom: 1px solid rgba(233,69,11,.2);\n}\n.markdown-body h2 .anchor {\n  line-height: 1;\n}\n.markdown-body h3 {\n  font-size: 1.2em;\n  line-height: 1.43;\n}\n.markdown-body h3 .anchor {\n  line-height: 1.2;\n}\n.markdown-body h4 {\n  font-size: 1.2em;\n  font-weight: normal;\n}\n.markdown-body h4 .anchor {\n  line-height: 1.2;\n}\n.markdown-body h5 {\n  font-size: 1em;\n}\n.markdown-body h5 .anchor {\n  line-height: 1.1;\n}\n.markdown-body h6 {\n  font-size: 1em;\n  color: #777;\n}\n.markdown-body h6 .anchor {\n  line-height: 1.1;\n}\n.markdown-body p,\n.markdown-body blockquote,\n.markdown-body ul,\n.markdown-body ol,\n.markdown-body dl,\n.markdown-body table,\n.markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr {\n  height: 4px;\n  padding: 0;\n  margin: 16px 0;\n  background-color: #e7e7e7;\n  border: 0 none;\n}\n.markdown-body ul,\n.markdown-body ol {\n  padding-left: 2em;\n}\n.markdown-body ul ul,\n.markdown-body ul ol,\n.markdown-body ol ol,\n.markdown-body ol ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li>p {\n  margin-top: 16px;\n}\n.markdown-body dl {\n  padding: 0;\n}\n.markdown-body dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: bold;\n}\n.markdown-body dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body blockquote {\n  padding: 0 15px;\n  color: #777;\n  border-left: 4px solid #ddd;\n}\n.markdown-body blockquote>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n  word-break: normal;\n  word-break: keep-all;\n}\n.markdown-body table th {\n  font-weight: bold;\n}\n.markdown-body table th,\n.markdown-body table td {\n  padding: 6px 13px;\n  /*border: 1px solid #ddd;*/\n}\n.markdown-body table tr {\n  /*background-color: #fff;*/\n  text-align: left;\n  border-bottom: 1px solid rgba(233,69,11,.2);\n}\n.markdown-body table tr:nth-child(2n) {\n  /*background-color: #f8f8f8;*/\n}\n.markdown-body img {\n  max-width: 100%;\n  box-sizing: content-box;\n  background-color: #fcfcfc;\n}\n.markdown-body code {\n  padding: 0;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0;\n  line-height: 1.9;\n  font-size: 85%;\n  border: 1px solid rgba(233,69,11,.2);\n  background-color: rgba(233,69,11,.05);\n  border-radius: 3px;\n}\n.markdown-body code:before,\n.markdown-body code:after {\n  letter-spacing: -0.2em;\n  content: "\\00a0";\n}\n.markdown-body pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre,\n.markdown-body pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f7f7f7;\n  border-radius: 3px;\n}\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body pre {\n  word-wrap: normal;\n}\n.markdown-body pre code {\n  display: inline;\n  max-width: initial;\n  padding: 0;\n  margin: 0;\n  overflow: initial;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  border: 0;\n}\n.markdown-body pre code:before,\n.markdown-body pre code:after {\n  content: normal;\n}\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font-size: 11px;\n  line-height: 10px;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #ccc;\n  border-bottom-color: #bbb;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #bbb;\n}\n.markdown-body .pl-c {\n  color: #969896;\n}\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n  color: #0086b3;\n}\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n  color: #795da3;\n}\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n  color: #333;\n}\n.markdown-body .pl-ent {\n  color: #63a35c;\n}\n.markdown-body .pl-k {\n  color: #a71d5d;\n}\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n  color: #183691;\n}\n.markdown-body .pl-v {\n  color: #ed6a43;\n}\n.markdown-body .pl-id {\n  color: #b52a1d;\n}\n.markdown-body .pl-ii {\n  background-color: #b52a1d;\n  color: #f8f8f8;\n}\n.markdown-body .pl-sr .pl-cce {\n  color: #63a35c;\n  font-weight: bold;\n}\n.markdown-body .pl-ml {\n  color: #693a17;\n}\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n  color: #1d3e81;\n  font-weight: bold;\n}\n.markdown-body .pl-mq {\n  color: #008080;\n}\n.markdown-body .pl-mi {\n  color: #333;\n  font-style: italic;\n}\n.markdown-body .pl-mb {\n  color: #333;\n  font-weight: bold;\n}\n.markdown-body .pl-md {\n  background-color: #ffecec;\n  color: #bd2c00;\n}\n.markdown-body .pl-mi1 {\n  background-color: #eaffea;\n  color: #55a532;\n}\n.markdown-body .pl-mdr {\n  color: #795da3;\n  font-weight: bold;\n}\n.markdown-body .pl-mo {\n  color: #1d3e81;\n}\n.markdown-body kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  line-height: 10px;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fcfcfc;\n  border: solid 1px #ccc;\n  border-bottom-color: #bbb;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #bbb;\n}\n.markdown-body:before {\n  display: table;\n  content: "";\n}\n.markdown-body:after {\n  display: table;\n  clear: both;\n  content: "";\n}\n.markdown-body .task-list-item {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input {\n  margin: 0 0.35em 0.25em -1.6em;\n  vertical-align: middle;\n}\n.markdown-body :checked+.radio-label {\n  z-index: 1;\n  position: relative;\n  border-color: #4078c0;\n}'
	var header = '<head><meta charset="UTF-8"><title>' + config.title + '</title><style>' + css + '</style></head>'

	var body = '<body><div class="markdown-body">'
	body += md.render('# ' + config.title)
	body += md.render(config.description)
	body += md.render('## Einführung')
	body += md.render('Um ortsbezogene Abfragen zu bilden oder eine bestimmte Eigenschaft abzufragen, nutzen Sie bitte das Schema der folgenden URL : `' + config.hostname + "/[filename]/[spatial query]/[property query]/[options]`. Abgesehen vom [filename] ist jeder Parameter optional und kann mithilfe eines Leerzeichens übersprungen werden.")
	body += md.render('## Verfügbare Daten')
	Object.keys(config.files).forEach(function(filename) {
		body += md.render('- ' + filename)
	})
	body += md.render('## Beispiele für Abfragen')
	config.examples.forEach(function(example) {
		body += md.render('- [' + config.hostname + "/q/" + example.url + "](" + (config.hostname + "/q/" + example.url).replace(/ /g, "%20") + ")" + "\n\n  " + example.description)
	})
	body += md.render('## Ortsbezogene Abfrage')
	body += md.render('Der [spatial query]-Parameter nimmt folgende Eigenschaftstypen entgegen. Punkte: `lng,lat`, Linien: `lng-1,lat-1;lng-2,lat-2` und Polygone: `lng-1,lat-1;lng-2,lat-2; … lng-n,lat-n`.\n|Eigenschaftsyp|Punkt-Abfrage|Linien-Abfrage|Polygon-Abfrage|\n|--|--|--|--|\n|**Punkt**|Punkte sind gleich|-|Punkt gehört zu Polygon|\n|**Linie**|-|Linien schneiden sich gegenseitig|Linie ist in oder schneidet Polygon|\n|**Polygon**|Polygon umschließt Punkt|Polygon umschließt or schneidet Linie|Polygone schneiden sich gegenseitig|\n')
	body += md.render('Wenn Sie `!` vor den Koordinaten einsetzen, fragen Sie nur die Punkte, Linien oder Polygone ab, die dem entsprechenden Wert nicht entsprechen, nicht darüber liegen oder diesen schneiden.')
	body += md.render('Weitere komplexe Abfragen können erstellt werden, wenn der UND-Operator `&`, der ODER-Operator `|` oder der Gruppierungs-Operator `( … )` eingesetzt wird.\n\n Eine Abfrage wie `(0,0;7,0;7,5;0,5&!1,1;6,0;6,4;1,4)|2,2;2,3;3,3;3,2|4,2;4,3;5,3;5,2` würde auch die Einträge zurückgeben, welche im orangen Schatten liegen oder ihn schneiden:')
	body += '<svg width="175px" height="125px" viewBox="0 0 175 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><path d="M0,0 L175,0 L175,125 L0,125 L0,0 Z M25,25 L150,25 L150,100 L25,100 L25,25 Z M50,50 L75,50 L75,75 L50,75 L50,50 Z M100,50 L125,50 L125,75 L100,75 L100,50 Z" id="Rectangle-1" stroke="none" fill-opacity="0.2" fill="#E9450B" sketch:type="MSShapeGroup"></path></g></svg>'

	body += md.render('## Eigenschaft-basierte Abfrage')
	body += md.render('Der [property query]-Parameter nimmt den Eigenschaftsnamen entgegen, gefolgt vom Vergleichsparameter und einem Wert. Alle Parameter aus der originalen GeoJSON-Datei können abgefragt werden. Um jedoch mehrere Parameter abfragen zu können, muss der UND-Operator `&`, der ODER-Operator `|` oder der Gruppierungs-Operator `( … )` genutzt werden. Wenn Sie auf verschachtelte Objekte zugreifen möchten, nutzen Sie die Punkt-Notation: `object.property`')
	body += md.render('### Vergleichsparameter')
	body += md.render('|Operator|Beschreibung|\n|--|--|\n|`=`|a **gleich** b (schreibungsunabhängig)|\n|`==`|a **gleich** b (schreibungsabhängig)|\n|`!=`|a **ungleich** b (schreibungsunabhängig)|\n|`!==`|a **ungleich** b (schreibungsabhängig)|\n|`<`|a **ist weniger als** b|\n|`>`|a **ist größer als** b|\n|`<=`|a **ist weniger oder gleich wie** b|\n|`>=`|a **ist größer oder gleich wie** b|\n|`$`|a **beinhaltet** b (schreibungsunabhängig)|\n|`$$`|a **beinhaltet** b (schreibungsabhängig)|\n|`!$`|a **beinhaltet nicht** b (schreibungsunabhängig)|\n|`!$$`|a **beinhaltet nicht** b (schreibungsabhängig)|\n|`$=`|a **startet mit** b (schreibungsunabhängig)|\n|`$$=`|a **startet mit** b (schreibungsabhängig)|\n|`!$=`|a **startet nicht mit** b (schreibungsunabhängig)|\n|`!$$=`|a **startet nicht mit** b (schreibungsabhängig)|\n|`=$`|a **endet mit** b (schreibungsunabhängig)|\n|`=$$`|a **endet mit** b (schreibungsabhängig)|\n|`=!$`|a **endet nicht mit** b (schreibungsunabhängig)|\n|`=!$$`|a **endet nicht mit** b (schreibungsabhängig)|')

	body += md.render('## Optionen')
	body += md.render('Der [options]-Parameter nimmt den Optionsnamen entgegen, gefolgt von einem Gleichheitszeichen`=` und einem Wert. Mit dem UND-Operator `&` können Sie auf mehrere Parameter gleichzeitig zugreifen. Standardgemäße Optionen könnten zwischen verfügbaren Datensätzen variieren.')
	body += md.render('|Option|Werte|Beschreibung|Standard|\n|-|-|-|-|\n|limit|`[int]`|Limitiert Ergebnisse| `' + config.options.limit + '`, (max: `' + config.options.maxlimit + '`)|\n|page|`[int]`|Setzt Seite mit den Abfrageergebnissen (startet bei 0)|`' + config.options.page + '`|\n|sortby|`[parameter]`|Sortiert die Ergebnisse nach einer speziellen Eigenschaft (`-1` deaktiviert Sortierung)|`' + config.options.sortby + '`|\n|desc|`false`/`true`|Gibt die Werte in absteigender Reihenfolge zurück (sortby erforderlich)|`' + config.options.desc + '`|\n|properties|`[feature property]`|Gibt nur bestimmte Parameter zurück (mehrere Werte getrennt durch `|`, `-1` gibt alle Eigenschaften zurück)|`' + config.options.properties + '`|\n|dist|`[lng],[lat]`|Gibt die Distanz der gegebenen Koordinaten in km zurück (nur für Punkt-Eigenschaft verfügbar, mit `sortby=dist` sortieren Sie die Ergebnisse nach Distanz)|-|')

	body += md.render("## Datensätze")

	Object.keys(config.files).forEach(function(key) {
		body += md.render("### " + key)
		
		// body += md.render(files[key].description)
		var optionsTable = ""
		Object.keys(config.files[key].options).forEach(function(option) {
			optionsTable += "\n|" + option + "|`" + config.files[key].options[option] + "`|"
		})
		if (optionsTable) {
			optionsTable = "|Option|Standard|\n|--|--|" + optionsTable
			body += md.render("#### Datensatzspezifische Optionen")
			body += md.render(optionsTable)
		}
		body += md.render("#### Verfügbare Eigenschaften")
		var paramsTable = "|Parameter|Beispiel|\n|--|--|"
		var tableStructure = h.flattenObject(h.getDeepObj(files, key + "." + (config.files[key].level||config.level))[0].properties, "append")
		Object.keys(tableStructure).forEach(function(param) {
			paramsTable += "\n|`" + param + "`|`" + (tableStructure[param]||"-") + "`|"
		})
		body += md.render(paramsTable)
	})


	body += '</body></div>'
	return header + body
}