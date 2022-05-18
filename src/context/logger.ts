import {
  Logger,
  createLogger,
  format,
  transports,
} from 'winston'

export default (config: { env: string, level: string }): Logger => {
  const formatLogger = config.env === 'production'
    ? format.combine(format.timestamp(), format.json())
    : format.combine(format.timestamp(), format.prettyPrint(), format.colorize())
  return createLogger({
    silent: config.env === 'test',
    level: config.level,
    format: formatLogger,
    transports: [new transports.Console()]
  })
}
