import typia from "typia";
import { ObjectTuple } from "../../../../structures/ObjectTuple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ObjectTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectTuple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectTuple",
      },
    ],
    components: {
      schemas: {
        ObjectTuple: {
          $id: "#/components/schemas/ObjectTuple",
          type: "array",
          items: [
            {
              $ref: "#/components/schemas/ObjectTuple.ISection",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/ObjectTuple.ICitizen",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 2,
          maxItems: 2,
        },
        "ObjectTuple.ISection": {
          $id: "#/components/schemas/ObjectTuple.ISection",
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            code: {
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
          required: ["id", "code", "name"],
          "x-typia-jsDocTags": [],
        },
        "ObjectTuple.ICitizen": {
          $id: "#/components/schemas/ObjectTuple.ICitizen",
          type: "object",
          properties: {
            id: {
              type: "string",
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
          required: ["id", "mobile", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
