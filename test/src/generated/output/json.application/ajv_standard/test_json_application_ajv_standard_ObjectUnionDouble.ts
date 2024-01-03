import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../../structures/ObjectUnionDouble";

export const test_json_application_ajv_standard_ObjectUnionDouble =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionDouble",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionDouble",
      },
    ],
    components: {
      schemas: {
        ObjectUnionDouble: {
          $id: "#/components/schemas/ObjectUnionDouble",
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUnionDouble.Union",
          },
        },
        "ObjectUnionDouble.Union": {
          $id: "#/components/schemas/ObjectUnionDouble.Union",
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionDouble.IA",
            },
            {
              $ref: "#/components/schemas/ObjectUnionDouble.IB",
            },
          ],
        },
        "ObjectUnionDouble.IA": {
          $id: "#/components/schemas/ObjectUnionDouble.IA",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                x: {
                  type: "number",
                },
              },
              required: ["x"],
              "x-typia-jsDocTags": [],
            },
            child: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IAB",
                },
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IAA",
                },
              ],
            },
          },
          required: ["value", "child"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IAB": {
          $id: "#/components/schemas/ObjectUnionDouble.IAB",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "number",
                },
              },
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IAA": {
          $id: "#/components/schemas/ObjectUnionDouble.IAA",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "boolean",
                },
              },
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IB": {
          $id: "#/components/schemas/ObjectUnionDouble.IB",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                x: {
                  type: "string",
                },
              },
              required: ["x"],
              "x-typia-jsDocTags": [],
            },
            child: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IBB",
                },
                {
                  $ref: "#/components/schemas/ObjectUnionDouble.IBA",
                },
              ],
            },
          },
          required: ["value", "child"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IBB": {
          $id: "#/components/schemas/ObjectUnionDouble.IBB",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "array",
                  items: {
                    type: "number",
                  },
                },
              },
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionDouble.IBA": {
          $id: "#/components/schemas/ObjectUnionDouble.IBA",
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                y: {
                  type: "string",
                },
              },
              required: ["y"],
              "x-typia-jsDocTags": [],
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
