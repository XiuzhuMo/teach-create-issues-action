
const github = require("@actions/github");
const core = require("@actions/core");
const dayjs = require("dayjs");
const setBody = require('./body')

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
      title: getTitle(),
      body: setBody(),
    });
  } catch (error) {
    console.log("[ error ] >", error);
  }
})();

function getTitle(){
  return `【每日计划】 ${getDate()}`;
}

function getDate(){
  return dayjs().add("8", "hour").format("YYYY-MM-DD");
}
