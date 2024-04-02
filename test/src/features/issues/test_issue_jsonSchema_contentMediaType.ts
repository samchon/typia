import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_jsonSchema_contentMediaType = () => {
  const app: typia.IJsonApplication =
    typia.json.application<
      [string & tags.ContentMediaType<"application/json">]
    >();
  TestValidator.equals("contentType")(app.schemas[0])({
    type: "string",
    contentMediaType: "application/json",
  } as any);
};
