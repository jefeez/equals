// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox) => {
  toolbox.modulesRouter = async (name) => {
    await toolbox.patching.patch(`./src/app/modules/modules.ts`, {
      insert: `\nimport ${name} from '@modules/${name}/${name}.router';`,
      after: new RegExp(`// imports`),
    })

    await toolbox.patching.patch(`./src/app/modules/modules.ts`, {
      insert: `\nrouter.use('/${name}', ${name});`,
      after: new RegExp('// routers'),
    })

    toolbox.print.info(`Updated file at modules.ts`)
  }
}
