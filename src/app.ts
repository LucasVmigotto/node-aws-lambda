import {
  APIGatewayEvent,
  APIGatewayProxyResult,
  Context
} from 'aws-lambda'
import { inverse } from './utils'

export const handler = (
  event: APIGatewayEvent,
  _context: Context
): Promise<APIGatewayProxyResult> => {
  const { body }: { body?: string | any } = event
  const name: string | null = body
    ? inverse(JSON.parse(body).name)
    : null
  return new Promise<APIGatewayProxyResult>(resolve => resolve({
    statusCode: 200,
    body: JSON.stringify({ message: `Hello World ${name}`.trim() })
  }))
}
