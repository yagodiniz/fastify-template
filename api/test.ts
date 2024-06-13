import { FastifyInstance } from 'fastify';
import { z } from 'zod';

export default async function testRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createTestBodySchema = z.object({
      name: z.string(),
    });

    const _body = createTestBodySchema.safeParse(request.body);

    if (_body.success == false) {
      const message = 'Invalid body';
      console.error(message, _body.error.format());
      return reply.status(400).send({ message });
    }

    const { name } = _body.data;

    await app.prisma.test.create({
      data: {
        name: name,
      },
    });

    reply.status(201).send();
  });

  app.get('/', async () => {
    const tests = await app.prisma.test.findMany();
    return tests;
  });
}
