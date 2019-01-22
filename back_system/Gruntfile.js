// 包装函数
module.exports = function(grunt) {
	//配置任务，所有插件的配置信息
	grunt.initConfig({
		//获取packgejson的信息
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
			' * Design by liuwz v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
			' * Copyright <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %>\n' +
			' */\n',
		'uglify': {
			options: {
				stripBanners: true,
				banner: '<%= banner %>'
			},
			build: {
				src: 'src/test.js',
				dest: 'build/<%=pkg.name%>-<%=pkg.version%>.min.js'
			}
		},
		'sass': {
			development: {
				options: {
//					banner: '<%= banner %>',
					sourceMap: false,
				},
				files: {
					"css-unmin/bootstrap.css": "Source_SASS_FILES/scss/bootstrap.scss",
					"css-unmin/smartadmin-production-plugins.css": "Source_SASS_FILES/scss/smartadmin-production-plugins.scss",
					"css-unmin/smartadmin-production.css": "Source_SASS_FILES/scss/smartadmin-production.scss",
					"css-unmin/font-awesome.css": "Source_SASS_FILES/scss/library/fontawesome/font-awesome.scss"
//					"css-unmin/smartadmin-skins.css": "Source_SASS_FILES/scss/smartadmin-skins.scss"
				}
			}
		},
		// MINIFY CSS
		'cssmin': {
			options: {
				sourceMap: false, //生成sourceMap文件
			},
			target: {
				files: [{
					expand: true, //展开下面*通配符匹配的文件
					cwd: 'css-unmin', //源文件根目录
					src: ['**/*.css', '!**/*.min.css'], //不要做 “!” 指定的文件
					dest: 'css', //压缩文件的输出目录
					ext: '.min.css', //压缩文件的后缀名

				}]
			}
		},
		'watch': {
			copy: {
				files: ['Source_LESS_FILES/smartadmin/top-menu.less', 'Source_UNMINIFIED_JS/app.js', 'Source_UNMINIFIED_JS/demo.js'],
				tasks: ['sass', 'cssmin']
			}
		}
	});

	//告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//告诉grunt当终端输入grunt的时候需要做什么，注意先后顺序。
	grunt.registerTask('dist-js', ['uglify']);
	grunt.registerTask('dist-sass', ['sass', 'cssmin']);
	grunt.registerTask('dist-watch', ['watch']);
};