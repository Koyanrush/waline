const { Waline } = require('@waline/vercel');

module.exports = Waline({
  // 逻辑会自动读取 Vercel 的环境变量
});
