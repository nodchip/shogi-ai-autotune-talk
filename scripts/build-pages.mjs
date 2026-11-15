import { spawnSync } from 'node:child_process'

const repository = process.env.GITHUB_REPOSITORY
const base = repository ? `/${repository.split('/')[1]}/` : '/'
const executable = process.platform === 'win32' ? 'slidev.cmd' : 'slidev'
const result = spawnSync(executable, ['build', '--base', base], { stdio: 'inherit', shell: process.platform === 'win32' })
process.exit(result.status ?? 1)
