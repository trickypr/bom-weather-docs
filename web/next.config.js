const isProd = process.env.NODE_ENV === 'production'
const prodRootPath = 'https://cdn.statically.io/gh/trickypr/bom-weather-docs/gh-pages/'

module.exports = {
	assetPrefix: isProd ? prodRootPath : '/',
	basePath: isProd ? '/bom-weather-docs' : '',
	webpack: (config) => {
		return Object.assign({}, config, {
			module: Object.assign({}, config.module, {
				rules: config.module.rules.concat([
					{
						test: /\.md$/,
						loader: 'emit-file-loader',
						options: {
							name: 'dist/[path][name].[ext]',
						},
					},
					{
						test: /\.md$/,
						loader: 'raw-loader',
					}
				]),
			}),
		});
	}
}