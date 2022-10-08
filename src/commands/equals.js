const command = {
  name: 'equals',
  run: async (toolbox) => {
    const { print } = toolbox
    print.info('Welcome to Equals.ts CLI')
  },
}

module.exports = command
