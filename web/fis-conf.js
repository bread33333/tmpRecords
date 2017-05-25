//开发配置
fis.match('*.less',{
	parser:fis.plugin('less'),
	rExt:'.css',
})


//生产配置
fis.media('pro').match('(*.html)',{
	release:'/views/$1'
});

fis.media('pro').match('*.less',{
	parser:fis.plugin('less'),
	rExt:'.css',
	release:'/statics/$0',
	url:'$0'
})

fis.media('pro').match('{*.js,*.css}',{
	release:'/statics/$0',
	url:'$0'
})

fis.media('pro').match('**/img/*',{
	release:'/statics/$0',
	url:'$0'
})
