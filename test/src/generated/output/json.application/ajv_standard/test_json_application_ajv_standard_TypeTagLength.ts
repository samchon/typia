import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagLength } from "../../../../structures/TypeTagLength";

export const test_json_application_ajv_standard_TypeTagLength =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagLength",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagLength",
      },
    ],
    components: {
      schemas: {
        TypeTagLength: {
          $id: "#/components/schemas/TypeTagLength",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/TypeTagLength.Type",
              },
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "TypeTagLength.Type": {
          $id: "#/components/schemas/TypeTagLength.Type",
          type: "object",
          properties: {
            fixed: {
              type: "string",
              maxLength: 5,
              minLength: 5,
            },
            minimum: {
              type: "string",
              minLength: 3,
            },
            maximum: {
              type: "string",
              maxLength: 7,
            },
            minimum_and_maximum: {
              type: "string",
              maxLength: 7,
              minLength: 3,
            },
            equal: {
              type: "string",
              maxLength: 19,
              minLength: 10,
            },
          },
          required: [
            "fixed",
            "minimum",
            "maximum",
            "minimum_and_maximum",
            "equal",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
