import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../../structures/ObjectLiteralProperty";

export const test_json_application_swagger_ObjectLiteralProperty =
  _test_json_application("swagger")("ObjectLiteralProperty")({
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
  });
