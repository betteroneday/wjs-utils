const jsdoc2md = require('jsdoc-to-markdown')
const FS = require('fs-extra')
const path = require('path')

jsdoc2md.render({ files: 'src/file/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/file.md'),v)
})

jsdoc2md.render({ files: 'src/reg/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/reg.md'),v)
})

jsdoc2md.render({ files: 'src/url/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/url.md'),v)
})

jsdoc2md.render({ files: 'src/time/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/time.md'),v)
})
