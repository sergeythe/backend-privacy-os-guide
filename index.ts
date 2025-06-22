import express, { Request, Response } from "express";
import { OS_LIST } from "./data/osList";
import { ARTICLES } from "./data/articlesList";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(OS_LIST);
});

app.get("/:slug", (req: Request, res: Response) => {
  const slug = req.params.slug;
  const article = ARTICLES.find((article) => article.slug === slug);

  article
    ? res.status(200).json(article)
    : res.status(404).send(`Article "${slug}" not found`);
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
