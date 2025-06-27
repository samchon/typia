import { IChatGptSchema } from "@samchon/openapi";
import typia, { tags } from "typia";

const parameters: IChatGptSchema.IParameters = typia.llm.parameters<
  IMember,
  "chatgpt"
>();
console.log(parameters);

interface IMember {
  email: string & tags.Format<"email">;
  name: string;
  age: number;
  hobbies: string[];
  joined_at: string & tags.Format<"date">;
}
