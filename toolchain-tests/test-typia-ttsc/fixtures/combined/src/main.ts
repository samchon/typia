import typia, { tags } from "typia";

type Status = "pending" | "active" | "archived";

interface Tag {
  key: string & tags.MinLength<1> & tags.MaxLength<20>;
  weight: number & tags.Minimum<0> & tags.Maximum<100>;
}

interface Article {
  id: string & tags.Format<"uuid">;
  title: string & tags.MinLength<1>;
  status: Status;
  tags: Tag[];
  createdAt: Date;
  score: number & tags.Type<"int32">;
  authorEmail: string & tags.Format<"email">;
  draft?: boolean;
}

// is<Article>
export const isArticle = (input: unknown): boolean =>
  typia.is<Article>(input);

// assert<Article>
export const assertArticle = (input: unknown): Article =>
  typia.assert<Article>(input);

// validate<Article>
export const validateArticle = (input: unknown) =>
  typia.validate<Article>(input);

// createValidate with Standard Schema
export const validator = typia.createValidate<Article>();

// json.stringify fast path
export const stringify = (input: Article): string =>
  typia.json.stringify<Article>(input);

// json.schema OpenAPI
export const schema = typia.json.schema<Article>();

// misc.literals for the status union
export const statuses = typia.misc.literals<Status>();

// misc.prune on article shape
export const prune = (input: Record<string, unknown>) =>
  typia.misc.prune<Article>(input);
