import typia from "typia";
import { ObjectTuple } from "../../../../structures/ObjectTuple";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ObjectTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            code: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          required: ["id", "code", "name"],
        },
        "ObjectTuple.ICitizen": {
          $id: "#/components/schemas/ObjectTuple.ICitizen",
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            mobile: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          required: ["id", "mobile", "name"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
