# syntax=docker/dockerfile:1
FROM public.ecr.aws/lambda/nodejs:16

COPY ./dist ./package.json ${LAMBDA_TASK_ROOT}

RUN npm install

CMD [ "app.handler" ]
