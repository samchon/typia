import typia, { tags } from "typia";

import { TestValidator } from "../../../helpers/TestValidator";

export const test_issue_jsonSchema_contentMediaType = () => {
  const app: typia.IJsonApplication = {
    version: "3.1",
    components: {
      schemas: {},
    },
    schemas: [
      {
        type: "string",
        contentMediaType: "application/json",
      },
    ],
  };
  TestValidator.equals("contentType")(app.schemas[0])({
    type: "string",
    contentMediaType: "application/json",
  } as any);
};
