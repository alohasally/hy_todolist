import prismaClient from "../../libs/clients/prisma";

export default async function handler(req, res) {
  const data = await prismaClient.todo.findUnique({
    where: {
      id: 1,
    },
  });
  res.status(200).json({});
}
