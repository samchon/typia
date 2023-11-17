import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../../structures/ObjectLiteralProperty";

export const test_json_application_ajv_ObjectLiteralProperty =
  _test_json_application("ajv")("ObjectLiteralProperty")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            "or-something-crazy-do-you-want?": {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          required: [
            "something-interesting-do-you-want?",
            "or-something-crazy-do-you-want?",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
