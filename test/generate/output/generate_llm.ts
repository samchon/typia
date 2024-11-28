import {
  type ILlmApplication as __ILlmApplication,
  type ILlmSchema as __ILlmSchema,
} from "@samchon/openapi";
import { LlmTypeCheckerV3_1 } from "@samchon/openapi";
import typia, { tags } from "typia";
import * as __typia_transform__llmApplicationFinalize from "typia/lib/internal/_llmApplicationFinalize.js";

export const schema = (($defs: Record<string, __ILlmSchema<"chatgpt">>) => {
  Object.assign($defs, {
    IDepartment: {
      type: "object",
      properties: {
        id: {
          description: "@format uuid",
          type: "string",
        },
        code: {
          type: "string",
        },
        sales: {
          type: "number",
        },
        created_at: {
          description: "@format date-time",
          type: "string",
        },
        children: {
          type: "array",
          items: {
            $ref: "#/$defs/IDepartment",
          },
        },
        employees: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              name: {
                type: "string",
              },
              age: {
                type: "number",
              },
              grade: {
                type: "number",
              },
              employeed_at: {
                description: "@format date-time",
                type: "string",
              },
            },
            required: ["id", "name", "age", "grade", "employeed_at"],
            additionalProperties: false,
          },
        },
      },
      required: ["id", "code", "sales", "created_at", "children", "employees"],
      additionalProperties: false,
    },
  } as Record<string, __ILlmSchema<"chatgpt">>);
  return {
    type: "object",
    properties: {
      id: {
        description: "@format uuid",
        type: "string",
      },
      serial: {
        type: "number",
      },
      name: {
        type: "string",
      },
      established_at: {
        description: "@format date-time",
        type: "string",
      },
      departments: {
        type: "array",
        items: {
          $ref: "#/$defs/IDepartment",
        },
      },
    },
    required: ["id", "serial", "name", "established_at", "departments"],
    additionalProperties: false,
  } as __ILlmSchema<"chatgpt">;
})({});
export const parameters = {
  type: "object",
  properties: {
    company: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
        },
        serial: {
          type: "number",
        },
        name: {
          type: "string",
        },
        established_at: {
          type: "string",
          format: "date-time",
        },
        departments: {
          type: "array",
          items: {
            $ref: "#/$defs/IDepartment",
          },
        },
      },
      required: ["id", "serial", "name", "established_at", "departments"],
    },
    department: {
      $ref: "#/$defs/IDepartment",
    },
    employee: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
        },
        name: {
          type: "string",
        },
        age: {
          type: "number",
        },
        grade: {
          type: "number",
        },
        employeed_at: {
          type: "string",
          format: "date-time",
        },
      },
      required: ["id", "name", "age", "grade", "employeed_at"],
    },
  },
  required: ["company", "department", "employee"],
  $defs: {
    IDepartment: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
        },
        code: {
          type: "string",
        },
        sales: {
          type: "number",
        },
        created_at: {
          type: "string",
          format: "date-time",
        },
        children: {
          type: "array",
          items: {
            $ref: "#/$defs/IDepartment",
          },
        },
        employees: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string",
                format: "uuid",
              },
              name: {
                type: "string",
              },
              age: {
                type: "number",
              },
              grade: {
                type: "number",
              },
              employeed_at: {
                type: "string",
                format: "date-time",
              },
            },
            required: ["id", "name", "age", "grade", "employeed_at"],
          },
        },
      },
      required: ["id", "code", "sales", "created_at", "children", "employees"],
    },
  },
} as __ILlmSchema.IParameters<"claude">;
export const application = (() => {
  const app = {
    model: "llama",
    options: {
      reference: false,
      separate: null,
    },
    functions: [
      {
        name: "establishCompany",
        parameters: {
          type: "object",
          properties: {
            props: {
              type: "object",
              properties: {
                company: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      format: "uuid",
                    },
                    serial: {
                      type: "number",
                    },
                    name: {
                      type: "string",
                    },
                    established_at: {
                      type: "string",
                      format: "date-time",
                    },
                    departments: {
                      type: "array",
                      items: {
                        $ref: "#/$defs/IDepartment",
                      },
                    },
                  },
                  required: [
                    "id",
                    "serial",
                    "name",
                    "established_at",
                    "departments",
                  ],
                },
              },
              required: ["company"],
            },
          },
          required: ["props"],
          additionalProperties: false,
          $defs: {
            IDepartment: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                  format: "uuid",
                },
                code: {
                  type: "string",
                },
                sales: {
                  type: "number",
                },
                created_at: {
                  type: "string",
                  format: "date-time",
                },
                children: {
                  type: "array",
                  items: {
                    $ref: "#/$defs/IDepartment",
                  },
                },
                employees: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        format: "uuid",
                      },
                      name: {
                        type: "string",
                      },
                      age: {
                        type: "number",
                      },
                      grade: {
                        type: "number",
                      },
                      employeed_at: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                    required: ["id", "name", "age", "grade", "employeed_at"],
                  },
                },
              },
              required: [
                "id",
                "code",
                "sales",
                "created_at",
                "children",
                "employees",
              ],
            },
          },
        },
        output: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
            },
            serial: {
              type: "number",
            },
            name: {
              type: "string",
            },
            established_at: {
              type: "string",
              format: "date-time",
            },
            departments: {
              type: "array",
              items: {
                $ref: "#/$defs/IDepartment",
              },
            },
          },
          required: ["id", "serial", "name", "established_at", "departments"],
        },
        strict: true,
      },
      {
        name: "createDepartment",
        parameters: {
          type: "object",
          properties: {
            props: {
              type: "object",
              properties: {
                company: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      format: "uuid",
                    },
                    serial: {
                      type: "number",
                    },
                    name: {
                      type: "string",
                    },
                    established_at: {
                      type: "string",
                      format: "date-time",
                    },
                    departments: {
                      type: "array",
                      items: {
                        $ref: "#/$defs/IDepartment",
                      },
                    },
                  },
                  required: [
                    "id",
                    "serial",
                    "name",
                    "established_at",
                    "departments",
                  ],
                },
                department: {
                  $ref: "#/$defs/IDepartment",
                },
              },
              required: ["company", "department"],
            },
          },
          required: ["props"],
          additionalProperties: false,
          $defs: {
            IDepartment: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                  format: "uuid",
                },
                code: {
                  type: "string",
                },
                sales: {
                  type: "number",
                },
                created_at: {
                  type: "string",
                  format: "date-time",
                },
                children: {
                  type: "array",
                  items: {
                    $ref: "#/$defs/IDepartment",
                  },
                },
                employees: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        format: "uuid",
                      },
                      name: {
                        type: "string",
                      },
                      age: {
                        type: "number",
                      },
                      grade: {
                        type: "number",
                      },
                      employeed_at: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                    required: ["id", "name", "age", "grade", "employeed_at"],
                  },
                },
              },
              required: [
                "id",
                "code",
                "sales",
                "created_at",
                "children",
                "employees",
              ],
            },
          },
        },
        output: {
          $ref: "#/$defs/IDepartment",
        },
        strict: true,
      },
      {
        name: "hire",
        parameters: {
          type: "object",
          properties: {
            props: {
              type: "object",
              properties: {
                company: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      format: "uuid",
                    },
                    serial: {
                      type: "number",
                    },
                    name: {
                      type: "string",
                    },
                    established_at: {
                      type: "string",
                      format: "date-time",
                    },
                    departments: {
                      type: "array",
                      items: {
                        $ref: "#/$defs/IDepartment",
                      },
                    },
                  },
                  required: [
                    "id",
                    "serial",
                    "name",
                    "established_at",
                    "departments",
                  ],
                },
                department: {
                  $ref: "#/$defs/IDepartment",
                },
                employee: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      format: "uuid",
                    },
                    name: {
                      type: "string",
                    },
                    age: {
                      type: "number",
                    },
                    grade: {
                      type: "number",
                    },
                    employeed_at: {
                      type: "string",
                      format: "date-time",
                    },
                  },
                  required: ["id", "name", "age", "grade", "employeed_at"],
                },
              },
              required: ["company", "department", "employee"],
            },
          },
          required: ["props"],
          additionalProperties: false,
          $defs: {
            IDepartment: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                  format: "uuid",
                },
                code: {
                  type: "string",
                },
                sales: {
                  type: "number",
                },
                created_at: {
                  type: "string",
                  format: "date-time",
                },
                children: {
                  type: "array",
                  items: {
                    $ref: "#/$defs/IDepartment",
                  },
                },
                employees: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        format: "uuid",
                      },
                      name: {
                        type: "string",
                      },
                      age: {
                        type: "number",
                      },
                      grade: {
                        type: "number",
                      },
                      employeed_at: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                    required: ["id", "name", "age", "grade", "employeed_at"],
                  },
                },
              },
              required: [
                "id",
                "code",
                "sales",
                "created_at",
                "children",
                "employees",
              ],
            },
          },
        },
        output: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
            },
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
            grade: {
              type: "number",
            },
            employeed_at: {
              type: "string",
              format: "date-time",
            },
          },
          required: ["id", "name", "age", "grade", "employeed_at"],
        },
        strict: true,
      },
      {
        name: "erase",
        parameters: {
          type: "object",
          properties: {
            props: {
              type: "object",
              properties: {
                entity: {
                  oneOf: [
                    {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          format: "uuid",
                        },
                        serial: {
                          type: "number",
                        },
                        name: {
                          type: "string",
                        },
                        established_at: {
                          type: "string",
                          format: "date-time",
                        },
                        departments: {
                          type: "array",
                          items: {
                            $ref: "#/$defs/IDepartment",
                          },
                        },
                      },
                      required: [
                        "id",
                        "serial",
                        "name",
                        "established_at",
                        "departments",
                      ],
                    },
                    {
                      $ref: "#/$defs/IDepartment",
                    },
                    {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          format: "uuid",
                        },
                        name: {
                          type: "string",
                        },
                        age: {
                          type: "number",
                        },
                        grade: {
                          type: "number",
                        },
                        employeed_at: {
                          type: "string",
                          format: "date-time",
                        },
                      },
                      required: ["id", "name", "age", "grade", "employeed_at"],
                    },
                  ],
                },
              },
              required: ["entity"],
            },
          },
          required: ["props"],
          additionalProperties: false,
          $defs: {
            IDepartment: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                  format: "uuid",
                },
                code: {
                  type: "string",
                },
                sales: {
                  type: "number",
                },
                created_at: {
                  type: "string",
                  format: "date-time",
                },
                children: {
                  type: "array",
                  items: {
                    $ref: "#/$defs/IDepartment",
                  },
                },
                employees: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        format: "uuid",
                      },
                      name: {
                        type: "string",
                      },
                      age: {
                        type: "number",
                      },
                      grade: {
                        type: "number",
                      },
                      employeed_at: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                    required: ["id", "name", "age", "grade", "employeed_at"],
                  },
                },
              },
              required: [
                "id",
                "code",
                "sales",
                "created_at",
                "children",
                "employees",
              ],
            },
          },
        },
        output: {
          type: "string",
          format: "uuid",
        },
        strict: true,
      },
    ],
  } as __ILlmApplication<"llama">;
  __typia_transform__llmApplicationFinalize._llmApplicationFinalize(app, {
    separate: (schema) =>
      LlmTypeCheckerV3_1.isString(schema) && schema.format === "date-time",
  });
  return app;
})();
export interface ICompany {
  id: string & tags.Format<"uuid">;
  serial: number;
  name: string;
  established_at: string & tags.Format<"date-time">;
  departments: IDepartment[];
}
export interface IDepartment {
  id: string & tags.Format<"uuid">;
  code: string;
  sales: number;
  created_at: string & tags.Format<"date-time">;
  children: IDepartment[];
  employees: IEmployee[];
}
export interface IEmployee {
  id: string & tags.Format<"uuid">;
  name: string;
  age: number;
  grade: number;
  employeed_at: string & tags.Format<"date-time">;
}
