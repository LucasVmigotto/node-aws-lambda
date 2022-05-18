export default {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  LOG_LEVEL: process.env.LOG_LEVEL ?? 'debug',
  API_HOST: process.env.API_HOST ?? '0.0.0.0',
  API_PORT: process.env.API_PORT ?? 3000
}
