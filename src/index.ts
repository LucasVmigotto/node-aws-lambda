import { createServer } from 'http'
import express from 'express'
import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventHeaders,
  APIGatewayProxyEventQueryStringParameters,
  Context
} from 'aws-lambda'
import {
  Request,
  Response,
  json,
  urlencoded
} from 'express'
import { handler } from './app'
import config from './confg'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

const awsProxy = async (req: Request, res: Response): Promise<Response> => {
  const event = {
    httpMethod: req.method,
    queryStringParameters: req.query as APIGatewayProxyEventQueryStringParameters,
    body: JSON.stringify({ ...req.body }),
    headers: req.headers as APIGatewayProxyEventHeaders,
    path: req.path,
    pathParameters: { ...req.params }
  } as APIGatewayProxyEvent

  const response = await handler(event, {} as Context)

  return res
    .status(response.statusCode)
    .set(response.headers)
    .send(response.body)
}

app.all('/', awsProxy)
app.use((_req, res) => res
  .status(404)
  .send({ message: 'Resource not found' }))

const server = createServer(app)

const close: any = async () => {
  if (close.closed) {
    return
  }
  close.closed = true
  console.log('Closing server...')
  await Promise.resolve((resolve: any) => server.close(resolve))
  console.log('Server closed')
  process.exit()
}

server.on('close', close)
server.listen(
  { host: config.API_HOST, port: config.API_PORT },
  () => { console.log(`Server ready at http://${config.API_HOST}:${config.API_PORT}`) }
)

process.on('SIGTERM', close)
process.on('SIGINT', close)
