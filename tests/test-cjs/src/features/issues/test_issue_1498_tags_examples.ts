import { OpenApi } from "@samchon/openapi";
import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1498_tags_examples = (): void => {
  const schema: OpenApi.IJsonSchema = typia.json.schemas<
    [
      string &
        tags.Examples<{
          x: "x";
          y: "y";
        }>,
    ]
  >().schemas[0]!;
  TestValidator.equals("examples")({
    type: "string",
    examples: {
      x: "x",
      y: "y",
    },
  } satisfies OpenApi.IJsonSchema as OpenApi.IJsonSchema)(schema);
};
