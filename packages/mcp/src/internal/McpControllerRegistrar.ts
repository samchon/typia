import { Server } from "@modelcontextprotocol/sdk/server";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  CallToolRequestSchema,
  CallToolResult,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import {
  IHttpLlmController,
  IHttpLlmFunction,
  ILlmController,
  ILlmFunction,
  IValidation,
} from "@typia/interface";
import { HttpLlm, stringifyValidationFailure } from "@typia/utils";

export namespace McpControllerRegistrar {
  export const register = (props: {
    server: McpServer | Server;
    controllers: Array<ILlmController | IHttpLlmController>;
  }): void => {
    // McpServer wraps raw Server - we need raw Server for JSON Schema support
    const server: Server =
      "server" in props.server
        ? (props.server as McpServer).server
        : (props.server as Server);

    // Build tool registry from controllers
    const registry: Map<string, IToolEntry> = new Map();

    for (const controller of props.controllers) {
      if (controller.protocol === "class") {
        registerClassController(registry, controller);
      } else {
        registerHttpController(registry, controller);
      }
    }

    // Get McpServer reference for coexistence with McpServer.registerTool()
    const mcpServer: McpServer | null =
      "server" in props.server ? (props.server as McpServer) : null;

    // Helper to get existing tools dynamically (supports tools registered after this call)
    const getExistingTools = (): Record<string, any> =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mcpServer ? ((mcpServer as any)._registeredTools ?? {}) : {};

    // Check for conflicts with existing McpServer tools at registration time
    for (const pair of Object.entries(getExistingTools())) {
      if (pair[1].enabled && registry.has(pair[0])) {
        throw new Error(
          `Duplicate function name "${pair[0]}" between McpServer.registerTool() and controller "${registry.get(pair[0])!.controller}"`,
        );
      }
    }

    // tools/list handler - includes both typia controllers and existing McpServer tools
    server.setRequestHandler(ListToolsRequestSchema, async () => {
      const existingTools: Record<string, any> = getExistingTools();
      return {
        tools: [
          // Typia controller tools with proper JSON Schema
          ...Array.from(registry.values()).map((entry: IToolEntry) => {
            return {
              name: entry.function.name,
              description: entry.function.description,
              inputSchema: {
                type: "object" as const,
                properties: entry.function.parameters.properties,
                required: entry.function.parameters.required,
                additionalProperties: false,
                $defs: entry.function.parameters.$defs,
              },
            } satisfies Tool;
          }),
          // Existing McpServer tools (dynamically fetched)
          ...Object.entries(existingTools)
            .filter(
              (pair: [string, any]) =>
                !registry.has(pair[0]) && pair[1].enabled,
            )
            .map((pair: [string, any]) => {
              return {
                name: pair[0],
                description: pair[1].description,
                inputSchema: pair[1].inputSchema
                  ? convertZodToJsonSchema(pair[1].inputSchema)
                  : { type: "object" as const, properties: {} },
              } satisfies Tool;
            }),
        ],
      };
    });

    // tools/call handler
    server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
      const name: string = request.params.name;
      const args: Record<string, unknown> | undefined =
        request.params.arguments;

      // Check typia registry first
      const entry: IToolEntry | undefined = registry.get(name);
      if (entry !== undefined) {
        return handleToolCall(entry, args);
      }

      // Fall back to existing McpServer tools (fetched dynamically)
      const existingTools: Record<string, any> = getExistingTools();
      const existingTool: any = existingTools[name];
      if (existingTool && existingTool.enabled) {
        return existingTool.handler(args, extra);
      }

      return {
        isError: true,
        content: [{ type: "text" as const, text: `Unknown tool: ${name}` }],
      };
    });

    // Mark handlers as initialized to prevent McpServer from overwriting
    if (mcpServer) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mcpServer as any)._toolHandlersInitialized = true;
    }
  };

  const registerClassController = (
    registry: Map<string, IToolEntry>,
    controller: ILlmController,
  ): void => {
    const execute: Record<string, unknown> = controller.execute;
    for (const func of controller.application.functions) {
      const existing: IToolEntry | undefined = registry.get(func.name);
      if (existing !== undefined) {
        throw new Error(
          `Duplicate function name "${func.name}" between controllers "${existing.controller}" and "${controller.name}"`,
        );
      }

      const method: unknown = execute[func.name];
      if (typeof method !== "function") {
        throw new Error(
          `Method "${func.name}" not found on controller "${controller.name}"`,
        );
      }

      registry.set(func.name, {
        controller: controller.name,
        function: func,
        execute: async (args: unknown) => method.call(execute, args),
      });
    }
  };

  const registerHttpController = (
    registry: Map<string, IToolEntry>,
    controller: IHttpLlmController,
  ): void => {
    const application: IHttpLlmController["application"] =
      controller.application;
    const connection: IHttpLlmController["connection"] = controller.connection;

    for (const func of application.functions) {
      const existing: IToolEntry | undefined = registry.get(func.name);
      if (existing !== undefined) {
        throw new Error(
          `Duplicate function name "${func.name}" between controllers "${existing.controller}" and "${controller.name}"`,
        );
      }
      registry.set(func.name, {
        controller: controller.name,
        function: func,
        execute: async (args: unknown) => {
          if (controller.execute !== undefined) {
            const response = await controller.execute({
              connection,
              application,
              function: func,
              arguments: args as object,
            });
            return response.body;
          }
          return HttpLlm.execute({
            application,
            function: func,
            connection,
            input: args as object,
          });
        },
      });
    }
  };

  const handleToolCall = async (
    entry: IToolEntry,
    args: unknown,
  ): Promise<CallToolResult> => {
    const validation: IValidation<unknown> = entry.function.validate(args);
    if (!validation.success) {
      return {
        isError: true,
        content: [
          {
            type: "text" as const,
            text: stringifyValidationFailure(validation),
          },
        ],
      };
    }

    try {
      const result: unknown = await entry.execute(validation.data);
      return {
        content: [
          {
            type: "text" as const,
            text:
              result === undefined
                ? "Success"
                : JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: "text" as const,
            text:
              error instanceof Error
                ? `${error.name}: ${error.message}`
                : String(error),
          },
        ],
      };
    }
  };

  // Convert Zod schema to JSON Schema (simplified)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const convertZodToJsonSchema = (zodSchema: any): Tool["inputSchema"] => {
    // If it already looks like JSON Schema, return as-is
    if (zodSchema.type && zodSchema.properties) {
      return zodSchema;
    }
    // Fallback for Zod schemas - MCP SDK would have converted them
    return { type: "object", properties: {} };
  };
}

interface IToolEntry {
  controller: string;
  function: ILlmFunction | IHttpLlmFunction;
  execute: (args: unknown) => Promise<unknown>;
}
