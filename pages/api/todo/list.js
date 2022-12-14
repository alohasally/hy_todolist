import prismaClient from "../../../libs/clients/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const todoList = await prismaClient.todo.findMany();

      return res.status(200).json({ ok: true, todoList });
    } catch (error) {
      return res.status(500).json({ ok: false, errMessage: "서버 내부 오류입니다." });
    }
  }

  return res.status(405).json({ ok: false, message: "올바르지 않은 메서드입니다." });
}
