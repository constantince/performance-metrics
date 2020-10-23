import typescript from 'rollup-plugin-typescript2';
// import { uglify } from 'rollup-plugin-uglify';;
export default {
  input: "src/index.ts",
  output: [{
     file: 'dist/performance.min.js',
     format: 'cjs'
  }, {
     file: 'dist/umd.min.js',
     format: 'umd',
     name: '__PerformanceMetrics'  // 用于输出时将函数定义绑定到该全局变量上，参见下面输出文件内容
  }],
  plugins: [
      typescript(),
      // uglify({
      //    compress: false,
      //    sourcemap: true
      // }),
  ]
}
