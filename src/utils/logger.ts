import logger from "pino";

const log = logger({
  level: "trace",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: true,
    },
  },
});

export default log;
