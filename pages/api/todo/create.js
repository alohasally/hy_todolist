import prismaClient from "../../../libs/clients/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { todo, isImportant } = req.body;

    try {
      if (!todo) {
        return res.status(400).json({ ok: false, message: "잘못된 요청입니다." });
      }
      const createdTodo = await prismaClient.todo.create({
        data: {
          todo,
          isImportant,
        },
      });

      return res.status(200).json({ ok: true, createdTodo });
    } catch (error) {
      return res.status(500).json({ ok: false, message: "서버 내부 오류입니다." });
    }
  }

  return res.status(405).json({ ok: false, message: "올바르지 않은 메서드입니다." });
}
