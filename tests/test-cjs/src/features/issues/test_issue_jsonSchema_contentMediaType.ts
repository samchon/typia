import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_jsonSchema_contentMediaType = () => {
  const collection: typia.IJsonSchemaCollection =
    typia.json.schemas<[string & tags.ContentMediaType<"application/json">]>();
  TestValidator.equals("contentType")(collection.schemas[0])({
    type: "string",
    contentMediaType: "application/json",
  } as any);
};
