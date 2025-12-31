const Application = require('@waline/vercel');
module.exports = Application({
  async postSave(comment) {
    // do whatever you want to do after saving the comment
  },
  lang: 'zh-CN'
});
