import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";

export const test_json_application_v3_1_TupleHierarchical =
  _test_json_application({
    version: "3.1",
    name: "TupleHierarchical",
  })({
    version: "3.1",
    components: {
      schemas: {
        TupleHierarchical: {
          type: "array",
          prefixItems: [
            {
              type: "boolean",
            },
            {
              type: "null",
            },
            {
              type: "number",
            },
            {
              type: "array",
              prefixItems: [
                {
                  type: "boolean",
                },
                {
                  type: "null",
                },
                {
                  type: "array",
                  prefixItems: [
                    {
                      type: "number",
                    },
                    {
                      type: "array",
                      prefixItems: [
                        {
                          type: "boolean",
                        },
                        {
                          type: "string",
                        },
                      ],
                      additionalItems: {
                        type: "string",
                      },
                    },
                  ],
                  additionalItems: {
                    type: "array",
                    prefixItems: [
                      {
                        type: "boolean",
                      },
                      {
                        type: "string",
                      },
                    ],
                    additionalItems: {
                      type: "string",
                    },
                  },
                },
              ],
              additionalItems: {
                type: "array",
                prefixItems: [
                  {
                    type: "number",
                  },
                  {
                    type: "array",
                    prefixItems: [
                      {
                        type: "boolean",
                      },
                      {
                        type: "string",
                      },
                    ],
                    additionalItems: {
                      type: "string",
                    },
                  },
                ],
                additionalItems: {
                  type: "array",
                  prefixItems: [
                    {
                      type: "boolean",
                    },
                    {
                      type: "string",
                    },
                  ],
                  additionalItems: {
                    type: "string",
                  },
                },
              },
            },
            {
              type: "array",
              prefixItems: [
                {
                  type: "number",
                },
                {
                  type: "array",
                  items: {
                    type: "array",
                    prefixItems: [
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
                          prefixItems: [
                            {
                              type: "number",
                            },
                            {
                              type: "number",
                            },
                            {
                              type: "array",
                              prefixItems: [
                                {
                                  type: "boolean",
                                },
                                {
                                  type: "string",
                                },
                              ],
                              additionalItems: {
                                type: "string",
                              },
                            },
                          ],
                          additionalItems: {
                            type: "array",
                            prefixItems: [
                              {
                                type: "boolean",
                              },
                              {
                                type: "string",
                              },
                            ],
                            additionalItems: {
                              type: "string",
                            },
                          },
                        },
                      },
                    ],
                    additionalItems: {
                      type: "array",
                      items: {
                        type: "array",
                        prefixItems: [
                          {
                            type: "number",
                          },
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            prefixItems: [
                              {
                                type: "boolean",
                              },
                              {
                                type: "string",
                              },
                            ],
                            additionalItems: {
                              type: "string",
                            },
                          },
                        ],
                        additionalItems: {
                          type: "array",
                          prefixItems: [
                            {
                              type: "boolean",
                            },
                            {
                              type: "string",
                            },
                          ],
                          additionalItems: {
                            type: "string",
                          },
                        },
                      },
                    },
                  },
                },
              ],
              additionalItems: {
                type: "array",
                items: {
                  type: "array",
                  prefixItems: [
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
                        prefixItems: [
                          {
                            type: "number",
                          },
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            prefixItems: [
                              {
                                type: "boolean",
                              },
                              {
                                type: "string",
                              },
                            ],
                            additionalItems: {
                              type: "string",
                            },
                          },
                        ],
                        additionalItems: {
                          type: "array",
                          prefixItems: [
                            {
                              type: "boolean",
                            },
                            {
                              type: "string",
                            },
                          ],
                          additionalItems: {
                            type: "string",
                          },
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: "array",
                    items: {
                      type: "array",
                      prefixItems: [
                        {
                          type: "number",
                        },
                        {
                          type: "number",
                        },
                        {
                          type: "array",
                          prefixItems: [
                            {
                              type: "boolean",
                            },
                            {
                              type: "string",
                            },
                          ],
                          additionalItems: {
                            type: "string",
                          },
                        },
                      ],
                      additionalItems: {
                        type: "array",
                        prefixItems: [
                          {
                            type: "boolean",
                          },
                          {
                            type: "string",
                          },
                        ],
                        additionalItems: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
          additionalItems: {
            type: "array",
            prefixItems: [
              {
                type: "number",
              },
              {
                type: "array",
                items: {
                  type: "array",
                  prefixItems: [
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
                        prefixItems: [
                          {
                            type: "number",
                          },
                          {
                            type: "number",
                          },
                          {
                            type: "array",
                            prefixItems: [
                              {
                                type: "boolean",
                              },
                              {
                                type: "string",
                              },
                            ],
                            additionalItems: {
                              type: "string",
                            },
                          },
                        ],
                        additionalItems: {
                          type: "array",
                          prefixItems: [
                            {
                              type: "boolean",
                            },
                            {
                              type: "string",
                            },
                          ],
                          additionalItems: {
                            type: "string",
                          },
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: "array",
                    items: {
                      type: "array",
                      prefixItems: [
                        {
                          type: "number",
                        },
                        {
                          type: "number",
                        },
                        {
                          type: "array",
                          prefixItems: [
                            {
                              type: "boolean",
                            },
                            {
                              type: "string",
                            },
                          ],
                          additionalItems: {
                            type: "string",
                          },
                        },
                      ],
                      additionalItems: {
                        type: "array",
                        prefixItems: [
                          {
                            type: "boolean",
                          },
                          {
                            type: "string",
                          },
                        ],
                        additionalItems: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            ],
            additionalItems: {
              type: "array",
              items: {
                type: "array",
                prefixItems: [
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
                      prefixItems: [
                        {
                          type: "number",
                        },
                        {
                          type: "number",
                        },
                        {
                          type: "array",
                          prefixItems: [
                            {
                              type: "boolean",
                            },
                            {
                              type: "string",
                            },
                          ],
                          additionalItems: {
                            type: "string",
                          },
                        },
                      ],
                      additionalItems: {
                        type: "array",
                        prefixItems: [
                          {
                            type: "boolean",
                          },
                          {
                            type: "string",
                          },
                        ],
                        additionalItems: {
                          type: "string",
                        },
                      },
                    },
                  },
                ],
                additionalItems: {
                  type: "array",
                  items: {
                    type: "array",
                    prefixItems: [
                      {
                        type: "number",
                      },
                      {
                        type: "number",
                      },
                      {
                        type: "array",
                        prefixItems: [
                          {
                            type: "boolean",
                          },
                          {
                            type: "string",
                          },
                        ],
                        additionalItems: {
                          type: "string",
                        },
                      },
                    ],
                    additionalItems: {
                      type: "array",
                      prefixItems: [
                        {
                          type: "boolean",
                        },
                        {
                          type: "string",
                        },
                      ],
                      additionalItems: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/TupleHierarchical",
      },
    ],
  });
