import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";

export const test_json_application_swagger_surplus_ObjectTuple =
  _test_json_application({
    purpose: "swagger",
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
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectTuple.ISection",
              },
              {
                $ref: "#/components/schemas/ObjectTuple.ICitizen",
              },
            ],
          },
          minItems: 2,
          maxItems: 2,
          "x-typia-tuple": {
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
        },
        "ObjectTuple.ISection": {
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
          nullable: false,
          required: ["id", "code", "name"],
          "x-typia-jsDocTags": [],
        },
        "ObjectTuple.ICitizen": {
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
          nullable: false,
          required: ["id", "mobile", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
