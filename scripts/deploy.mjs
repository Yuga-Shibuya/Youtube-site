import { copyFileSync } from 'node:fs'
import ghpages from 'gh-pages'

// GitHub Pages serves this file for direct visits to client-side routes.
copyFileSync('dist/index.html', 'dist/404.html')

await new Promise((resolve, reject) => {
  ghpages.publish('dist', {
    repo: 'https://github.com/Yuga-Shibuya/Youtube-site.git',
    branch: 'gh-pages',
    remove: ['**/*', '.gitignore', '.oxlintrc.json'],
    nojekyll: true,
    message: 'Deploy site to GitHub Pages',
  }, error => error ? reject(error) : resolve())
})

console.log('Published dist to gh-pages')
