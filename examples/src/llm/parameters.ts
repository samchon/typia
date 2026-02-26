import typia, { ILlmSchema, tags } from "typia";

const parameters: ILlmSchema.IParameters = typia.llm.parameters<IMember>();
console.log(parameters);

interface IMember {
  email: string & tags.Format<"email">;
  name: string;
  age: number;
  hobbies: string[];
  joined_at: string & tags.Format<"date">;
}
