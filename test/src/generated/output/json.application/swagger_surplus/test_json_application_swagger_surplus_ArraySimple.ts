import typia from "typia";
import { ArraySimple } from "../../../../structures/ArraySimple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ArraySimple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
          type: "array",
          items: {
            $ref: "#/components/schemas/ArraySimple.IPerson",
          },
        },
        "ArraySimple.IPerson": {
          type: "object",
          properties: {
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            email: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            hobbies: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArraySimple.IHobby",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["name", "email", "hobbies"],
          "x-typia-jsDocTags": [],
        },
        "ArraySimple.IHobby": {
          type: "object",
          properties: {
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            body: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            rank: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["name", "body", "rank"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
