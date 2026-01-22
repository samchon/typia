import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_pr_1541_llm_schema_$defs = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<IDepartment>($defs);
  TestValidator.equals("$defs")(Object.keys($defs))(["IDepartment"]);
  TestValidator.equals("schema")(schema)({
    $ref: "#/$defs/IDepartment",
  });

  // just for checking none runtime error
  typia.llm.schema<IDepartment>({});
};
interface IDepartment {
  id: string;
  children: IDepartment[];
}
