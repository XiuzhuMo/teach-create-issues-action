
const github = require("@actions/github");

// 获取octokit对象进行后续操作
const octokit = github.getOctokit('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');

// 执行函数
(async () => {
  try {
    await octokit.rest.issues.create({
      owner: "XiuzhuMo",
      repo: "teach-create-issues-action",
      title: "Hahahaaa ",
      body: "Bhhkk ",
    });
  } catch (error) {
    console.log("[ error ] >", error);
  }
})();
