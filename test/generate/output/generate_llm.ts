import { LlmTypeCheckerV3_1 } from "@samchon/openapi";
import typia, { tags } from "typia";
import * as __typia_transform__llmApplicationFinalize from "typia/lib/internal/_llmApplicationFinalize.js";

export const schema = ((
  $defs: Record<string, import("@samchon/openapi").ILlmSchema<"chatgpt">>,
) => {
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
          },
        },
      },
      required: ["id", "code", "sales", "created_at", "children", "employees"],
    },
  } as Record<string, import("@samchon/openapi").ILlmSchema<"chatgpt">>);
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
  } as import("@samchon/openapi").ILlmSchema<"chatgpt">;
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
      required: ["id", "code", "sales", "created_at", "children", "employees"],
    },
  },
} as import("@samchon/openapi").ILlmSchema.IParameters<"claude">;
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
      },
      {
        name: "createDepartment",
        parameters: {
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
      },
      {
        name: "hire",
        parameters: {
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
      },
      {
        name: "erase",
        parameters: {
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
      },
    ],
  } as import("@samchon/openapi").ILlmApplication<"llama">;
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
