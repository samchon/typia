import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_ajv_ObjectAlias = _test_json_application(
  "ajv",
)("ObjectAlias")({
  schemas: [
    {
      $ref: "#/components/schemas/ObjectAlias",
    },
  ],
  components: {
    schemas: {
      ObjectAlias: {
        $id: "#/components/schemas/ObjectAlias",
        type: "array",
        items: {
          $ref: "#/components/schemas/ObjectAlias.IMember",
        },
      },
      "ObjectAlias.IMember": {
        $id: "#/components/schemas/ObjectAlias.IMember",
        type: "object",
        properties: {
          id: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          email: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          sex: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
                enum: [2, 1],
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
                enum: ["male", "female"],
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          age: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          dead: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "boolean",
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
        required: ["id", "email", "name", "sex", "age", "dead"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
