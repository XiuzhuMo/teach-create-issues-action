
// token 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
const octokit = new Octokit({ auth: `personal-access-token123` });

octokit.rest.issues.create({
  owner: "XiuzhuMo",
  repo: "teach-create-issues-action",
  title: "Hello world from " + slug,
});