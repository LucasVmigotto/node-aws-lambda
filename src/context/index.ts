import createLogger from './logger'

export default (config: any) => {
  const logger = createLogger(config)

  return { logger }
}
