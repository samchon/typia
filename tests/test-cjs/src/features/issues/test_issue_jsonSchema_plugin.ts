import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_jsonSchema_plugin = () => {
  const collection: typia.IJsonSchemaCollection = typia.json.schemas<
    [
      string &
        tags.JsonSchemaPlugin<{
          "x-typia-easy-to-learn": true;
        }>,
    ]
  >();
  TestValidator.equals("plugin")(collection.schemas[0])({
    type: "string",
    "x-typia-easy-to-learn": true,
  } as any);
};
