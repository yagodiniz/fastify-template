import 'dotenv/config';

import fastify, { FastifyInstance } from 'fastify';
import testRoutes from '../api/test';
import prismaPlugin from '../plugins/prisma';

const app: FastifyInstance = fastify({ logger: true });

const start = async () => {
  try {
    await app.register(prismaPlugin);
    app.register(testRoutes);

    app.listen({
      host: process.env.APP_HOST,
      port: Number(process.env.APP_PORT),
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
