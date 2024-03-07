import typia from "typia";
import { ArraySimple } from "../../../../structures/ArraySimple";
import { _test_json_application } from "../../../../internal/_test_json_application";
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
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
