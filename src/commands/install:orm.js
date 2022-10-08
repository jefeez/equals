module.exports = {
  name: 'install:orm',
  alias: ['i:orm'],
  run: async (toolbox) => {
    const {
      parameters,
      ormPackage,
      // ormPrisma,
      ormPatching,
      ormTemplate,
      ormEnvTemplate,
      ormEnvPatching,
      prompt,
      template: { generate },
      print: { info },
    } = toolbox

    const { first, second } = parameters
    if (first === 'prisma') {
      // await ormPrisma()
    } else if (first === 'mongoose') {
      await ormPackage(first)
      await ormTemplate(first)
      await ormPatching(first)
      await ormEnvTemplate()
      await ormEnvPatching(first)
      // await ormEnv(first)
    } else if (!second) {
      print.warning('You need specify driver')
    } else {
      await ormPackage(first, second)
      await ormTemplate(first)
      await ormPatching(first)
      await ormEnvTemplate()
      await ormEnvPatching(first)
      // await ormEnv(first, second)
    }
  },
}
