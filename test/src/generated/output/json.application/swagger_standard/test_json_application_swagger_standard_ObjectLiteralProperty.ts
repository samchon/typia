import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../../structures/ObjectLiteralProperty";

export const test_json_application_swagger_standard_ObjectLiteralProperty =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            "something-interesting-do-you-want?": {
              type: "string",
            },
            "or-something-crazy-do-you-want?": {
              type: "string",
            },
          },
          nullable: false,
          required: [
            "something-interesting-do-you-want?",
            "or-something-crazy-do-you-want?",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
