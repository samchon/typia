import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";

export const test_json_application_ajv_TupleHierarchical =
  _test_json_application("ajv")("TupleHierarchical")({
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
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
            {
              type: "null",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            {
              type: "array",
              items: [
                {
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "boolean",
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
                      "x-typia-rest": false,
                      "x-typia-required": true,
                      "x-typia-optional": false,
                      type: "number",
                    },
                    {
                      type: "array",
                      items: [
                        {
                          "x-typia-rest": false,
                          "x-typia-required": true,
                          "x-typia-optional": false,
                          type: "boolean",
                        },
                        {
                          "x-typia-rest": false,
                          "x-typia-required": true,
                          "x-typia-optional": false,
                          type: "string",
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
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "number",
                },
                {
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "array",
                  items: {
                    type: "array",
                    items: [
                      {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                      },
                      {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                      },
                      {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                          type: "array",
                          items: [
                            {
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                              type: "number",
                            },
                            {
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                              type: "number",
                            },
                            {
                              type: "array",
                              items: [
                                {
                                  "x-typia-rest": false,
                                  "x-typia-required": true,
                                  "x-typia-optional": false,
                                  type: "boolean",
                                },
                                {
                                  "x-typia-rest": false,
                                  "x-typia-required": true,
                                  "x-typia-optional": false,
                                  type: "string",
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
                      },
                    ],
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    minItems: 3,
                    maxItems: 3,
                  },
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
  });
