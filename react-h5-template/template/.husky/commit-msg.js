const fs = require('fs')

const msgPath = process.argv[2] // 使用命令行参数获取提交信息文件路径
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(feat|update|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow|delete)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(`
    不合法的 commit 消息格式。
    请以 feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow|delete开头
    如 feat: xx新功能
  `)
  process.exit(1)
}
