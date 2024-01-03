import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";

export const test_json_application_swagger_standard_TupleHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
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
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
                nullable: true,
              },
              {
                type: "number",
                nullable: true,
              },
              {
                type: "array",
                items: {
                  oneOf: [
                    {
                      type: "boolean",
                      nullable: true,
                    },
                    {
                      type: "array",
                      items: {
                        oneOf: [
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            items: {
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                            },
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                              minItems: 2,
                              maxItems: 2,
                            },
                          },
                        ],
                      },
                      minItems: 2,
                      maxItems: 2,
                      "x-typia-tuple": {
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
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                          },
                        ],
                        minItems: 2,
                        maxItems: 2,
                      },
                      nullable: true,
                    },
                  ],
                },
                minItems: 3,
                maxItems: 3,
                "x-typia-tuple": {
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
                      items: {
                        oneOf: [
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            items: {
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                          },
                        ],
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                      },
                      "x-typia-rest": false,
                      "x-typia-required": true,
                      "x-typia-optional": false,
                      minItems: 2,
                      maxItems: 2,
                      "x-typia-tuple": {
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
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                          },
                        ],
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        minItems: 2,
                        maxItems: 2,
                      },
                    },
                  ],
                  minItems: 3,
                  maxItems: 3,
                },
                nullable: true,
              },
              {
                type: "array",
                items: {
                  oneOf: [
                    {
                      type: "number",
                    },
                    {
                      type: "array",
                      items: {
                        type: "array",
                        items: {
                          oneOf: [
                            {
                              type: "string",
                            },
                            {
                              type: "boolean",
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                            },
                          ],
                        },
                        minItems: 3,
                        maxItems: 3,
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
                              type: "boolean",
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                          ],
                          minItems: 3,
                          maxItems: 3,
                        },
                      },
                    },
                  ],
                },
                minItems: 2,
                maxItems: 2,
                "x-typia-tuple": {
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
                        items: {
                          oneOf: [
                            {
                              type: "string",
                            },
                            {
                              type: "boolean",
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                            },
                          ],
                        },
                        minItems: 3,
                        maxItems: 3,
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
                              type: "boolean",
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                          ],
                          minItems: 3,
                          maxItems: 3,
                        },
                      },
                      "x-typia-rest": false,
                      "x-typia-required": true,
                      "x-typia-optional": false,
                    },
                  ],
                  minItems: 2,
                  maxItems: 2,
                },
                nullable: true,
              },
            ],
          },
          minItems: 5,
          maxItems: 5,
          "x-typia-tuple": {
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
                items: {
                  oneOf: [
                    {
                      type: "boolean",
                      nullable: true,
                    },
                    {
                      type: "array",
                      items: {
                        oneOf: [
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            items: {
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                          },
                        ],
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                      },
                      "x-typia-rest": false,
                      "x-typia-required": true,
                      "x-typia-optional": false,
                      minItems: 2,
                      maxItems: 2,
                      "x-typia-tuple": {
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
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                          },
                        ],
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        minItems: 2,
                        maxItems: 2,
                      },
                      nullable: true,
                    },
                  ],
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                minItems: 3,
                maxItems: 3,
                "x-typia-tuple": {
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
                      items: {
                        oneOf: [
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            items: {
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                          },
                        ],
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                      },
                      "x-typia-rest": false,
                      "x-typia-required": true,
                      "x-typia-optional": false,
                      minItems: 2,
                      maxItems: 2,
                      "x-typia-tuple": {
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
                              oneOf: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 2,
                            maxItems: 2,
                            "x-typia-tuple": {
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
                          },
                        ],
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        minItems: 2,
                        maxItems: 2,
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
              {
                type: "array",
                items: {
                  oneOf: [
                    {
                      type: "number",
                    },
                    {
                      type: "array",
                      items: {
                        type: "array",
                        items: {
                          oneOf: [
                            {
                              type: "string",
                            },
                            {
                              type: "boolean",
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                            },
                          ],
                        },
                        minItems: 3,
                        maxItems: 3,
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
                              type: "boolean",
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                          ],
                          minItems: 3,
                          maxItems: 3,
                        },
                      },
                    },
                  ],
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                minItems: 2,
                maxItems: 2,
                "x-typia-tuple": {
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
                        items: {
                          oneOf: [
                            {
                              type: "string",
                            },
                            {
                              type: "boolean",
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                            },
                          ],
                        },
                        minItems: 3,
                        maxItems: 3,
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
                              type: "boolean",
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                            {
                              type: "array",
                              items: {
                                type: "array",
                                items: {
                                  oneOf: [
                                    {
                                      type: "number",
                                    },
                                    {
                                      type: "array",
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                      },
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                    },
                                  ],
                                },
                                minItems: 3,
                                maxItems: 3,
                                "x-typia-tuple": {
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
                                      items: {
                                        oneOf: [
                                          {
                                            type: "boolean",
                                          },
                                          {
                                            type: "string",
                                          },
                                        ],
                                        "x-typia-rest": false,
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                      },
                                      "x-typia-rest": false,
                                      "x-typia-required": true,
                                      "x-typia-optional": false,
                                      minItems: 2,
                                      maxItems: 2,
                                      "x-typia-tuple": {
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
                                    },
                                  ],
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              },
                              "x-typia-rest": false,
                              "x-typia-required": true,
                              "x-typia-optional": false,
                            },
                          ],
                          minItems: 3,
                          maxItems: 3,
                        },
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
              },
            ],
            minItems: 5,
            maxItems: 5,
          },
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
