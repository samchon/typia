import { IChatGptSchema } from "@samchon/openapi";
import typia from "typia";

interface ICategory {
  id: string;
  code: string;
  name: string;
  children: ICategory[];
}

const $defs: Record<string, IChatGptSchema> = {};
const schema: IChatGptSchema = typia.llm.schema<ICategory, "chatgpt">($defs);
console.log(
  JSON.stringify(
    {
      $defs,
      schema,
    },
    null,
    2,
  ),
);
