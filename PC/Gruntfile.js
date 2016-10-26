"use strict";
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            src: ["js/base.js"],
            dest:"js/base.min.js"
        },
        cssmin: {
            one: {
                options: {
                    banner: "/*制作时间：2016.4.29\n作者：王勇\n用途：芳芳工艺品有限公司pc网站首页样式\n*/"
                },
                src: ["css/index.css"],
                dest: "css/index.min.css"
            },
            two: {
                options: {
                    banner: "/*制作时间：2016.4.29\n作者：王勇\n用途：芳芳工艺品有限公司pc网站其他页面样式\n*/"
                },
                src: ["css/other.css"],
                dest: "css/other.min.css"
            },
            three: {
                options: {
                    banner: "/*制作时间：2016.4.29\n作者：王勇\n用途：芳芳工艺品有限公司pc网站其他页面样式\n*/"
                },
                src: ["css/list.css"],
                dest: "css/list.min.css"
            }
            
        },
        watch: {
            one:{
                files: ["css/index.css"],
                tasks: ["cssmin:one"]
            },
            two:{
                files: ["css/other.css"],
                tasks: ["cssmin:two"]
            },
            three: {
                files: ["js/base.js"],
                tasks: ["uglify"]
            },
            four: {
                files: ["css/list.css"],
                tasks: ["cssmin:three"]
            }
        }
    });
    //加载任务插件
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //执行任务
    grunt.registerTask("one", "这是压缩的css文件的任务", ["watch:one"]);
    grunt.registerTask("two", "这是压缩的css文件的任务", ["watch:two"]);
    grunt.registerTask("three", "这是压缩js文件的任务", ["watch:three"]);
    grunt.registerTask("four", "这是压缩css文件的任务", ["watch:four"]);
}