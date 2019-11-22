import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('pull_request.reopened', async (context) => {
    const targetName = context.payload.pull_request.head

    const params = Object.assign({}, context.issue(), { labels: [targetName] })
    await context.github.issues.addLabels(params)
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
