import { IChatGptSchema } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_pr_1541_llm_schema_$defs = (): void => {
  const $defs: Record<string, IChatGptSchema> = {};
  const schema: IChatGptSchema = typia.llm.schema<IDepartment, "chatgpt">({
    $defs,
  });
  TestValidator.equals("$defs")(Object.keys($defs))(["IDepartment"]);
  TestValidator.equals("schema")(schema)({
    $ref: "#/$defs/IDepartment",
  });

  // just for checking none runtime error
  typia.llm.schema<IDepartment, "chatgpt">({});
};
interface IDepartment {
  id: string;
  children: IDepartment[];
}
