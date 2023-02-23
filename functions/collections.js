const { TOKEN } = process.env;

exports.handler = async (event, context) => {
    console.debug(event)
    console.debug(context)
    console.log("Authentication with token", TOKEN)
    return {
        statusCode: 200,
        body: JSON.stringify({results: `Hello, world! with token: ${TOKEN}`})
    }
}