import typia from "typia";

({
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "@format uuid",
    },
    name: {
      type: "string",
    },
    department: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "@format uuid",
          },
          name: {
            type: "string",
          },
          department: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                  description: "@format uuid",
                },
                name: {
                  type: "string",
                },
                department: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        description: "@format uuid",
                      },
                      name: {
                        type: "string",
                      },
                      department: {
                        type: "array",
                        items: {},
                        description: "@maxItems 0",
                      },
                    },
                    required: ["id", "name", "department"],
                    description: "Current Type: {@link IDepartment}",
                  },
                },
              },
              required: ["id", "name", "department"],
              description: "Current Type: {@link IDepartment}",
            },
          },
        },
        required: ["id", "name", "department"],
        description: "Current Type: {@link IDepartment}",
      },
    },
  },
  required: ["id", "name", "department"],
  description: "Current Type: {@link IDepartment}",
});
