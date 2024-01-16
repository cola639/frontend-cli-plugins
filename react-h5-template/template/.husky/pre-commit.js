const { execSync } = require('child_process')

try {
  // 获取所有计划删除的文件列表
  const deletedFiles = execSync('git diff --cached --name-only --diff-filter=D').toString().trim()

  // 检查是否包含lock文件
  if (/^(package-lock.json|yarn.lock)$/m.test(deletedFiles)) {
    console.error('Error! Trying to commit deletion of lock file')
    process.exit(1)
  }
} catch (error) {
  console.error('An error occurred while checking lock files:', error)
  process.exit(1)
}
