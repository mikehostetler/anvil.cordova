/*
	anvil.cordova - Anvil plugin to integrate the Cordova command line tools
	version: 0.0.1
	author: Mike Hostetler <mike.hostetler@gmail.com> (http://mike-hostetler.com)
	copyright: 2012
	license: Dual licensed 
			 MIT (http://www.opensource.org/licenses/mit-license)
			 GPL (http://www.opensource.org/licenses/gpl-license)
*/
/*
	anvil.cordova - Anvil plugin to integrate the Cordova command line tools
	version: 0.0.1
	author: Mike Hostetler <mike.hostetler@gmail.com> (http://mike-hostetler.com)
	copyright: 2012
	license: Dual licensed 
			 MIT (http://www.opensource.org/licenses/mit-license)
			 GPL (http://www.opensource.org/licenses/gpl-license)
*/
var path = require( "path" );

module.exports = function( _, anvil ) {
	// use this to build referneces to any resources local to this package
	var root = path.resolve( __dirname, "../" );

	anvil.scaffold( {
		type: "cordova",
		description: "Cordova Starter Scaffold",
		prompt: [
			// this is a simple template to use when creating prompts
			{
				name: "id",
				description: "ID your Cordova Project",
				default: "io.cordova.hellocordova",
				required: true
			},{
				name: "package",
				description: "Name your Cordova Project",
				default: "HelloCordova",
				required: true
			}
		],
		output: {
			// enter your folder/file structure here using object literal syntax
			"src": {
				".cordova": {
					"config.json": '{"id":"{{{id}}}","name":"{{{package}}}"}',
					"hooks": {
						"after_build": {},
						"after_platform_ls": {},
						"after_plugin_rm": {},
						"before_platform_add": {},
						"before_plugin_ls": {},
						"after_docs": {},
						"after_platform_rm": {},
						"before_build": {},
						"before_platform_ls": {},
						"before_plugin_rm": {},
						"after_emulate": {},
						"after_plugin_add": {},
						"before_docs": {},
						"before_platform_rm": {},
						"after_platform_add": {},
						"after_plugin_ls": {},
						"before_emulate": {},
						"before_plugin_add": {}
					}
				},
				"plugins": {},
				"platforms": {},
				"www": {
					"config.xml": anvil.scaffold.file( root + "/templates/www/config.xml" ),
					"css": {
						"index.css": anvil.scaffold.file( root + "/templates/www/css/index.css"),
					},
					"img": {
						"cordova.png": anvil.scaffold.file( root + "/templates/www/img/cordova.png"),
					},
					"index.html": anvil.scaffold.file( root + "/templates/index.html" ),
					"js": {
						"index.js": anvil.scaffold.file( root + "/templates/js/index.js" )
					},
					"res": {
						"icon": {
							"cordova_128.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_128.png"),
							"cordova_16.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_16.png"),
							"cordova_24.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_24.png"),
							"cordova_256.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_256.png"),
							"cordova_32.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_32.png"),
							"cordova_48.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_48.png"),
							"cordova_512.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_512.png"),
							"cordova_64.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_64.png"),
							"cordova_android_36.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_android_36.png"),
							"cordova_android_48.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_android_48.png"),
							"cordova_android_72.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_android_72.png"),
							"cordova_android_96.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_android_96.png"),
							"cordova_bb_80.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_bb_80.png"),
							"cordova_ios_114.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_ios_114.png"),
							"cordova_ios_144.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_ios_144.png"),
							"cordova_ios_57.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_ios_57.png"),
							"cordova_ios_72.png": anvil.scaffold.file( root + "/templates/www/res/icon/cordova_ios_72.png")
						},
						"screen": {
							"android_hdpi_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_hdpi_landscape.png"),
							"android_hdpi_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_hdpi_portrait.png"),
							"android_ldpi_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_ldpi_landscape.png"),
							"android_ldpi_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_ldpi_portrait.png"),
							"android_mdpi_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_mdpi_landscape.png"),
							"android_mdpi_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_mdpi_portrait.png"),
							"android_xhdpi_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_xhdpi_landscape.png"),
							"android_xhdpi_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/android_xhdpi_portrait.png"),
							"blackberry_transparent_300.png": anvil.scaffold.file( root + "/templates/www/res/screen/blackberry_transparent_300.png"),
							"blackberry_transparent_400.png": anvil.scaffold.file( root + "/templates/www/res/screen/blackberry_transparent_400.png"),
							"ipad_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/ipad_landscape.png"),
							"ipad_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/ipad_portrait.png"),
							"ipad_retina_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/ipad_retina_landscape.png"),
							"ipad_retina_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/ipad_retina_portrait.png"),
							"iphone_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/iphone_landscape.png"),
							"iphone_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/iphone_portrait.png"),
							"iphone_retina_landscape.png": anvil.scaffold.file( root + "/templates/www/res/screen/iphone_retina_landscape.png"),
							"iphone_retina_portrait.png": anvil.scaffold.file( root + "/templates/www/res/screen/iphone_retina_portrait.png"),
							"windows_phone_portrait.jpg": anvil.scaffold.file( root + "/templates/www/res/screen/windows_phone_portrait.jpg")
						}
					},
					"spec": {
						"lib": {
							"jasmine-1.2.0": {
								"MIT.LICENSE": anvil.scaffold.file( root + "/templates/www/spec/lib/jasmine-1.2.0/MIT.LICENSE" ),
								"jasmine.js": anvil.scaffold.file( root + "/templates/www/spec/lib/jasmine-1.2.0/jasmine.js" ),
								"jasmine.css": anvil.scaffold.file( root + "/templates/www/spec/lib/jasmine-1.2.0/jasmine.css" ),
								"jasmine-html.js": anvil.scaffold.file( root + "/templates/www/spec/lib/jasmine-1.2.0/jasmine-html.js" ),
							}
						},
						"helper.js": anvil.scaffold.file( root + "/templates/www/spec/helper.js" ),
						"index.js": anvil.scaffold.file( root + "/templates/www/spec/index.js" )
					},
					"spec.html": anvil.scaffold.file( root + "/templates/www/spec.html")
				}
			}
		},
		render: function ( data ) {
			if ( data.mode === "file" && /\.(jpe?g|png)$/.test( data.filename ) ) {
				// no processing
				return data.template;
			} else {
				var template = require( "handlebars" ).compile( data.template );
				return template( data.data );
			}
		}
	} );
};
