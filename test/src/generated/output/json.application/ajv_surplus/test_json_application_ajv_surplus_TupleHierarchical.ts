import typia from "typia";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_TupleHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TupleHierarchical",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TupleHierarchical",
      },
    ],
    components: {
      schemas: {
        TupleHierarchical: {
          $id: "#/components/schemas/TupleHierarchical",
          type: "array",
          items: [
            {
              type: "boolean",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "null",
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
              type: "array",
              items: [
                {
                  type: "boolean",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "null",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "array",
                  items: [
                    {
                      type: "number",
                      "x-typia-rest": false,
                      "x-typia-required": true,
                      "x-typia-optional": false,
                    },
                    {
                      type: "array",
                      items: [
                        {
                          type: "boolean",
                          "x-typia-rest": false,
                          "x-typia-required": true,
                          "x-typia-optional": false,
                        },
                        {
                          type: "string",
                          "x-typia-rest": false,
                          "x-typia-required": true,
                          "x-typia-optional": false,
                        },
                      ],
                      "x-typia-rest": false,
                      "x-typia-required": true,
                      "x-typia-optional": false,
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  minItems: 2,
                  maxItems: 2,
                },
              ],
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              minItems: 3,
              maxItems: 3,
            },
            {
              type: "array",
              items: [
                {
                  type: "number",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "array",
                  items: {
                    type: "array",
                    items: [
                      {
                        type: "string",
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
                        type: "array",
                        items: {
                          type: "array",
                          items: [
                            {
                              type: "number",
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
                              type: "array",
                              items: [
                                {
                                  type: "boolean",
                                  "x-typia-rest": false,
                                  "x-typia-required": true,
                                  "x-typia-optional": false,
                                },
                                {
                                  type: "string",
                                  "x-typia-rest": false,
                                  "x-typia-required": true,
                                  "x-typia-optional": false,
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                              minItems: 2,
                              maxItems: 2,
                            },
                          ],
                          minItems: 3,
                          maxItems: 3,
                        },
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                      },
                    ],
                    minItems: 3,
                    maxItems: 3,
                  },
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              ],
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              minItems: 2,
              maxItems: 2,
            },
          ],
          minItems: 5,
          maxItems: 5,
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
