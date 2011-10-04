// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2011 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
//var mySettings = {
//	onShiftEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
//	onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
//	onTab:    		{keepDefault:false, replaceWith:'    '},
//	markupSet:  [ 	
//		{name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
//		{name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'  },
//		{name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>' },
//		{separator:'---------------' },
//		{name:'Bulleted List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>'},
//		{name:'Numeric List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>'},
//		{separator:'---------------' },
//		{name:'Picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />' },
//		{name:'Link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
//		{separator:'---------------' },
//		{name:'Clean', className:'clean', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },		
//		{name:'Preview', className:'preview',  call:'preview'}
//	]
//}

// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
myMarkdownSettings = {
    nameSpace:          'markdown', // Useful to prevent multi-instances CSS conflict
    previewParserPath:  '~/sets/markdown/preview.php',
    onShiftEnter:       {keepDefault:false, openWith:'\n\n'},
    markupSet: [
        {name:'First Level Heading', key:"1", placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '=') } },
        {name:'Second Level Heading', key:"2", placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '-') } },
        {name:'Heading 3', key:"3", openWith:'### ', placeHolder:'Your title here...' },
        {name:'Heading 4', key:"4", openWith:'#### ', placeHolder:'Your title here...' },
        {name:'Heading 5', key:"5", openWith:'##### ', placeHolder:'Your title here...' },
        {name:'Heading 6', key:"6", openWith:'###### ', placeHolder:'Your title here...' },
        {separator:'---------------' },        
        {name:'Bold', key:"B", openWith:'**', closeWith:'**'},
        {name:'Italic', key:"I", openWith:'_', closeWith:'_'},
        {separator:'---------------' },
        {name:'Bulleted List', openWith:'- ' },
        {name:'Numeric List', openWith:function(markItUp) {
            return markItUp.line+'. ';
        }},
        {separator:'---------------' },
        {name:'Picture', key:"P", replaceWith:'![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")'},
        {name:'Link', key:"L", openWith:'[', closeWith:']([![Url:!:http://]!] "[![Title]!]")', placeHolder:'Your text to link here...' },
        {separator:'---------------'},    
        {name:'Quotes', openWith:'> '},
        {name:'Code Block / Code', openWith:'(!(\t|!|`)!)', closeWith:'(!(`)!)'},
        {separator:'---------------'},
        {name:'Preview', call:'preview', className:"preview"}
    ]
}

// mIu nameSpace to avoid conflict.
miu = {
    markdownTitle: function(markItUp, char) {
        heading = '';
        n = $.trim(markItUp.selection||markItUp.placeHolder).length;
        for(i = 0; i < n; i++) {
            heading += char;
        }
        return '\n'+heading+'\n';
    }
}
