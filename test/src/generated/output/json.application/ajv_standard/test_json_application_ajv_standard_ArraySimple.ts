import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArraySimple } from "../../../../structures/ArraySimple";

export const test_json_application_ajv_standard_ArraySimple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArraySimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArraySimple",
      },
    ],
    components: {
      schemas: {
        ArraySimple: {
          $id: "#/components/schemas/ArraySimple",
          type: "array",
          items: {
            $ref: "#/components/schemas/ArraySimple.IPerson",
          },
        },
        "ArraySimple.IPerson": {
          $id: "#/components/schemas/ArraySimple.IPerson",
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            email: {
              type: "string",
            },
            hobbies: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArraySimple.IHobby",
              },
            },
          },
          required: ["name", "email", "hobbies"],
          "x-typia-jsDocTags": [],
        },
        "ArraySimple.IHobby": {
          $id: "#/components/schemas/ArraySimple.IHobby",
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            body: {
              type: "string",
            },
            rank: {
              type: "number",
            },
          },
          required: ["name", "body", "rank"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
