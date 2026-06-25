import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {

  // GET All Notices
  if (req.method === "GET") {

    try {

      const notices = await prisma.notice.findMany({
        orderBy: [
  {
    priority: "asc",
  },
  {
    publishDate: "desc",
  },
]
      });

      return res.status(200).json(notices);

    } catch (error) {

      return res.status(500).json({
        message: "Internal Server Error"
      });

    }

  }

  // POST Create Notice
  if (req.method === "POST") {

    try {

      const {
        title,
        body,
        category,
        priority,
        publishDate,
        image
      } = req.body;

      // Server Validation
      if (!title || !body) {

        return res.status(400).json({
          message: "Title and Body are required"
        });

      }

      if (isNaN(Date.parse(publishDate))) {

        return res.status(400).json({
          message: "Invalid Publish Date"
        });

      }

      const notice = await prisma.notice.create({
  data: {
    title,
    body,
    category: category.toUpperCase(),
    priority: priority.toUpperCase(),
    publishDate: new Date(publishDate),
    image,
  },
});

      return res.status(201).json(notice);

    } catch (error) {

      return res.status(500).json({
        message: "Internal Server Error"
      });

    }

  }

  return res.status(405).json({
    message: "Method Not Allowed"
  });

}