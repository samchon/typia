import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAny } from "../../../../structures/ArrayAny";

export const test_json_application_swagger_surplus_ArrayAny =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayAny",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayAny",
      },
    ],
    components: {
      schemas: {
        ArrayAny: {
          type: "object",
          properties: {
            anys: {
              type: "array",
              items: {},
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            undefindable1: {
              type: "array",
              items: {},
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            undefindable2: {
              type: "array",
              items: {},
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            nullables1: {
              type: "array",
              items: {},
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullables2: {
              type: "array",
              items: {},
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            both1: {
              type: "array",
              items: {},
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            both2: {
              type: "array",
              items: {},
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            both3: {
              type: "array",
              items: {},
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": false,
            },
            union: {
              type: "array",
              items: {},
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["anys", "nullables1", "nullables2", "union"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
