import typia from "typia";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ToJsonUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonUnion",
      },
    ],
    components: {
      schemas: {
        ToJsonUnion: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                $ref: "#/components/schemas/ToJsonUnion.ICitizen",
              },
              {
                $ref: "#/components/schemas/ToJsonUnion.IProduct",
              },
              {
                type: "string",
              },
              {
                type: "number",
              },
              {
                $ref: "#/components/schemas/ToJsonUnion.ICitizen",
              },
            ],
          },
        },
        "ToJsonUnion.ICitizen": {
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            mobile: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "mobile", "name"],
          "x-typia-jsDocTags": [],
        },
        "ToJsonUnion.IProduct": {
          type: "object",
          properties: {
            manufacturer: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            brand: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["manufacturer", "brand", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
