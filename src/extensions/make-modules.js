// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox) => {
  toolbox.modules = (first, template, target) => {
    const upper = toolbox.strings.upperFirst(toolbox.strings.singular(first))
    toolbox.template.generate({
      template: `modules/${template}.ts.ejs`,
      target: `./src/app/modules/${first}/${first}.${target}.ts`,
      props: { first, upper },
    })
  }
}
