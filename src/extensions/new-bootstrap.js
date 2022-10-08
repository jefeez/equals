// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox) => {
  toolbox.bootstrap = (first, template, target) => {
    const files = [
      'tsconfig.json',
      'package.json',
      '.prettierrc',
      '.gitignore',
      '.eslintrc.json',
      '.env',
      '.editorconfig',
      './src/server.ts',
      './src/app.ts',
      './src/app/modules/modules.ts',
    ]

    const alls = files.map(async (value) =>
      toolbox.template.generate({
        template: `./bootstrap/${value}.ejs`,
        target: `./${first}/${value}`,
        props: { first },
      })
    )

    Promise.all(alls)
  }
}
