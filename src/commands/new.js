module.exports = {
  name: 'new',
  run: async (toolbox) => {
    const {
      parameters,
      bootstrap,
      template: { generate },
      print: { info },
    } = toolbox

    const { first } = parameters
    bootstrap(first)
  },
}
