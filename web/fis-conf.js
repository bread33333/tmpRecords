fis.match('(*.html)',{
	release:'/views/$1'
});

fis.match('*.less',{
	parser:fis.plugin('less'),
	rExt:'.css',
	release:'/statics/$0',
	url:'$0'
})

fis.match('{*.js,*.css}',{
	release:'/statics/$0',
	url:'$0'
})

fis.match('**/img/*',{
	release:'/statics/$0',
	url:'$0'
})
