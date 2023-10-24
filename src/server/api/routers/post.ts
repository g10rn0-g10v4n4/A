import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ 
      name: z.string().min(1),
      desc: z.string().min(1)
    }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.task.create({
        data: {
          name: input.name,
          desc: input.desc
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.task.findFirst({
      orderBy: { created_at: "desc" },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.task.findMany();
  })
});
