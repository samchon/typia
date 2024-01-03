import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../../structures/ObjectLiteralProperty";

export const test_json_application_ajv_standard_ObjectLiteralProperty =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectLiteralProperty",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectLiteralProperty.ISomething",
      },
    ],
    components: {
      schemas: {
        "ObjectLiteralProperty.ISomething": {
          $id: "#/components/schemas/ObjectLiteralProperty.ISomething",
          type: "object",
          properties: {
            "something-interesting-do-you-want?": {
              type: "string",
            },
            "or-something-crazy-do-you-want?": {
              type: "string",
            },
          },
          required: [
            "something-interesting-do-you-want?",
            "or-something-crazy-do-you-want?",
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
