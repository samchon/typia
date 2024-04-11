import typia, { tags } from "typia";

import { TestValidator } from "../../../helpers/TestValidator";

export const test_issue_jsonSchema_plugin = () => {
  const app: typia.IJsonApplication = {
    version: "3.1",
    components: {
      schemas: {},
    },
    schemas: [
      {
        type: "string",
        "x-typia-easy-to-learn": true,
      },
    ],
  };
  TestValidator.equals("plugin")(app.schemas[0])({
    type: "string",
    "x-typia-easy-to-learn": true,
  } as any);
};
