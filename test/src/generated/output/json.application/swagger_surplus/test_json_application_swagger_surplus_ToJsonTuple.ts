import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonTuple } from "../../../../structures/ToJsonTuple";

export const test_json_application_swagger_surplus_ToJsonTuple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonTuple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonTuple",
      },
    ],
    components: {
      schemas: {
        ToJsonTuple: {
          type: "array",
          items: {
            oneOf: [
              {
                type: "string",
              },
              {
                type: "number",
              },
              {
                type: "boolean",
              },
              {
                $ref: "#/components/schemas/ToJsonTuple.IObject",
              },
            ],
          },
          minItems: 4,
          maxItems: 4,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                type: "string",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "number",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                type: "boolean",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ToJsonTuple.IObject",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 4,
            maxItems: 4,
          },
        },
        "ToJsonTuple.IObject": {
          $ref: "#/components/schemas/ToJsonTuple.IHobby",
        },
        "ToJsonTuple.IHobby": {
          type: "object",
          properties: {
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
          required: ["code", "name"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
