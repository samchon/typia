import { ILlmSchema } from "@samchon/openapi";

import typia from "../../../../lib";
import { TestValidator } from "../../helpers/TestValidator";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_issue_1390_llm_config_argument = (): void => {
  TestValidator.equals("reference false")(
    keys(($defs) =>
      typia.llm.schema<ArrayRecursive, { reference: false }>($defs),
    ),
  )(["ArrayRecursive.ICategory"]);
  TestValidator.equals("reference true")(
    keys(($defs) =>
      typia.llm.schema<ArrayRecursive, { reference: true }>($defs),
    ),
  )(["ArrayRecursive.ICategory", "ArrayRecursive.ITimestamp"]);
};

const keys = (
  factory: ($defs: Record<string, any>) => ILlmSchema,
): string[] => {
  const $defs: Record<string, any> = {};
  const schema: ILlmSchema = factory($defs);
  TestValidator.equals("schema")(schema)({
    $ref: "#/$defs/ArrayRecursive.ICategory",
  });
  return Object.keys($defs);
};
