webpackJsonp([144],{1772:function(t,e){t.exports={content:["section",["p","\u6ed1\u52a8\u578b\u8f93\u5165\u5668\uff0c\u5c55\u793a\u5f53\u524d\u503c\u548c\u53ef\u9009\u8303\u56f4\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u5f53\u7528\u6237\u9700\u8981\u5728\u6570\u503c\u533a\u95f4/\u81ea\u5b9a\u4e49\u533a\u95f4\u5185\u8fdb\u884c\u9009\u62e9\u65f6\uff0c\u53ef\u4e3a\u8fde\u7eed\u6216\u79bb\u6563\u503c\u3002"]],meta:{category:"Components",subtitle:"\u6ed1\u52a8\u8f93\u5165\u6761",type:"Data Entry",title:"Slider",filename:"components/slider/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65b9\u6cd5",title:"\u65b9\u6cd5"},"\u65b9\u6cd5"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","allowClear"],["td","\u652f\u6301\u6e05\u9664, \u5355\u9009\u6a21\u5f0f\u6709\u6548"],["td","boolean"],["td","false"]],["tr",["td","defaultValue"],["td","\u8bbe\u7f6e\u521d\u59cb\u53d6\u503c\u3002\u5f53 ",["code","range"]," \u4e3a ",["code","false"]," \u65f6\uff0c\u4f7f\u7528 ",["code","number"],"\uff0c\u5426\u5219\u7528 ",["code","[number, number]"]],["td","number","|","number","[","]"],["td","0 or ",["span","0, 0"]]],["tr",["td","disabled"],["td","\u503c\u4e3a ",["code","true"]," \u65f6\uff0c\u6ed1\u5757\u4e3a\u7981\u7528\u72b6\u6001"],["td","boolean"],["td","false"]],["tr",["td","dots"],["td","\u662f\u5426\u53ea\u80fd\u62d6\u62fd\u5230\u523b\u5ea6\u4e0a"],["td","boolean"],["td","false"]],["tr",["td","included"],["td",["code","marks"]," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\u6709\u6548\uff0c\u503c\u4e3a true \u65f6\u8868\u793a\u503c\u4e3a\u5305\u542b\u5173\u7cfb\uff0cfalse \u8868\u793a\u5e76\u5217"],["td","boolean"],["td","true"]],["tr",["td","marks"],["td","\u523b\u5ea6\u6807\u8bb0\uff0ckey \u7684\u7c7b\u578b\u5fc5\u987b\u4e3a ",["code","number"]," \u4e14\u53d6\u503c\u5728\u95ed\u533a\u95f4 ",["span","min, max"]," \u5185\uff0c\u6bcf\u4e2a\u6807\u7b7e\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u6837\u5f0f"],["td","object"],["td","{ number: string","|","ReactNode } or { number: { style: object, label: string","|","ReactNode } }"]],["tr",["td","max"],["td","\u6700\u5927\u503c"],["td","number"],["td","100"]],["tr",["td","min"],["td","\u6700\u5c0f\u503c"],["td","number"],["td","0"]],["tr",["td","range"],["td","\u53cc\u6ed1\u5757\u6a21\u5f0f"],["td","boolean"],["td","false"]],["tr",["td","step"],["td","\u6b65\u957f\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5e76\u4e14\u53ef\u88ab (max - min) \u6574\u9664\u3002\u5f53 ",["code","marks"]," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",["code","step"]," \u4e3a ",["code","null"],"\uff0c\u6b64\u65f6 Slider \u7684\u53ef\u9009\u503c\u4ec5\u6709 marks \u6807\u51fa\u6765\u7684\u90e8\u5206\u3002"],["td","number","|","null"],["td","1"]],["tr",["td","tipFormatter"],["td","Slider \u4f1a\u628a\u5f53\u524d\u503c\u4f20\u7ed9 ",["code","tipFormatter"],"\uff0c\u5e76\u5728 Tooltip \u4e2d\u663e\u793a ",["code","tipFormatter"]," \u7684\u8fd4\u56de\u503c\uff0c\u82e5\u4e3a null\uff0c\u5219\u9690\u85cf Tooltip\u3002"],["td","Function","|","null"],["td","IDENTITY"]],["tr",["td","value"],["td","\u8bbe\u7f6e\u5f53\u524d\u53d6\u503c\u3002\u5f53 ",["code","range"]," \u4e3a ",["code","false"]," \u65f6\uff0c\u4f7f\u7528 ",["code","number"],"\uff0c\u5426\u5219\u7528 ",["code","[number, number]"]],["td","number","|","number","[","]"],["td"]],["tr",["td","vertical"],["td","\u503c\u4e3a ",["code","true"]," \u65f6\uff0cSlider \u4e3a\u5782\u76f4\u65b9\u5411"],["td","Boolean"],["td","false"]],["tr",["td","onAfterChange"],["td","\u4e0e ",["code","onmouseup"]," \u89e6\u53d1\u65f6\u673a\u4e00\u81f4\uff0c\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"],["td","Function(value)"],["td","NOOP"]],["tr",["td","onChange"],["td","\u5f53 Slider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1 onChange \u4e8b\u4ef6\uff0c\u5e76\u628a\u6539\u53d8\u540e\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"],["td","Function(value)"],["td","NOOP"]]]],["h2","\u65b9\u6cd5"],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td","blur()"],["td","\u79fb\u9664\u7126\u70b9"]],["tr",["td","focus()"],["td","\u83b7\u53d6\u7126\u70b9"]]]]]}}});