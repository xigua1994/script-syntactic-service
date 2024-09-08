import { minify } from "terser";

const minifyCode = async (code) => {
  const minifyCodeObject =  await minify(code);
  return minifyCodeObject.code;
}

export default minifyCode;