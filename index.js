
const github = require("@actions/github");
const core = require("@actions/core");

// 接收输入参数
const token = core.getInput("token");

// 获取octokit对象进行后续操作
// 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
const octokit = github.getOctokit(token);

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
