import jsx from 'rollup-plugin-jsx'

export default {
  dest: 'dist/index.js',
  entry: 'index.jsx',
  plugins: [
    jsx({factory: 'React.createElement'})
  ]
}
