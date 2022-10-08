module.exports = {
  name: 'make:modules',
  alias: ['m:modules'],
  run: async (toolbox) => {
    const {
      parameters,
      modules,
      modulesRouter,
      prompt,
      template: { generate },
      print: { info },
    } = toolbox

    const { first } = parameters

    const result = await prompt.ask([
      {
        type: 'select',
        name: 'orm',
        message: 'What orm model you will use in this module?',
        choices: ['typeorm', 'mongoose', 'noone'],
      },
    ])

    modules(first, 'router', 'router')
    modulesRouter(first)
    modules(first, 'controller', 'controller')
    modules(first, 'dto', 'dto')
    modules(first, 'service', 'service')
    modules(first, 'validator', 'validator')
    if (result.orm !== 'noone') {
      // mongoose
      if (result.orm === 'mongoose') {
        modules(first, 'model.mongoose', 'model')
        modules(first, 'repository.mongoose', 'repository')
      }

      // typeorm
      if (result.orm === 'typeorm') {
        modules(first, 'model.typeorm', 'model')
        modules(first, 'repository.typeorm', 'repository')
      }
    }
  },
}
