import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../../structures/ObjectUnionDouble";

export const test_json_application_v3_1_ObjectUnionDouble =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionDouble",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUnionDouble: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUnionDouble.Union",
          },
        },
        "ObjectUnionDouble.Union": {
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
        },
        "ObjectUnionDouble.IAB": {
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
            },
          },
          required: ["value"],
        },
        "ObjectUnionDouble.IAA": {
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
            },
          },
          required: ["value"],
        },
        "ObjectUnionDouble.IB": {
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
        },
        "ObjectUnionDouble.IBB": {
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
            },
          },
          required: ["value"],
        },
        "ObjectUnionDouble.IBA": {
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
            },
          },
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionDouble",
      },
    ],
  });
