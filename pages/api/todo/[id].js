import prismaClient from "../../../libs/clients/prisma";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { id } = req.query;
    const { todo, done, isImportant } = req.body;

    if (!id) {
      return res.status(400).json({ ok: false, errMessage: "잘못된 요청입니다." });
    }

    try {
      const updatedTodo = await prismaClient.todo.update({
        where: {
          id: +id,
        },
        data: {
          todo,
          done,
          isImportant,
        },
      });

      return res.status(200).json({ ok: true, updatedTodo });
    } catch (error) {
      return res.status(500).json({ ok: false, errMessage: "서버 내부 오류입니다." });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ ok: false, errMessage: "잘못된 요청입니다." });
    }

    try {
      const deletedTodo = await prismaClient.todo.delete({
        where: {
          id: +id,
        },
      });

      return res.status(200).json({ ok: true, deletedTodo });
    } catch (error) {
      return res.status(500).json({ ok: false, errMessage: "서버 내부 오류입니다." });
    }
  }

  return res.status(405).json({ ok: false, message: "올바르지 않은 메서드입니다." });
}
