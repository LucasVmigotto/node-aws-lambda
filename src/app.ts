import { APIGatewayProxyHandler } from 'aws-lambda'
import { inverse } from './utils'

export const handler: APIGatewayProxyHandler = (event, _context, callback) => {
  const name: string | null = event.body ? inverse(JSON.parse(event.body).name) : null
  callback(
    null,
    {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello World ${name}`.trim()
      })
    }
  )
}
