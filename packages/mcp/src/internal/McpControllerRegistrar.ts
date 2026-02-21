import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Server } from "@modelcontextprotocol/sdk/server";
import {
  CallToolRequestSchema,
  CallToolResult,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import {
  IHttpLlmController,
  IHttpLlmFunction,
  ILlmController,
  ILlmFunction,
  IValidation,
} from "@typia/interface";
import { HttpLlm, stringifyValidationFailure } from "@typia/utils";

interface IToolEntry {
  func: ILlmFunction | IHttpLlmFunction;
  call: (args: unknown) => Promise<unknown>;
}

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
    const registry = new Map<string, IToolEntry>();

    for (const controller of props.controllers) {
      if (controller.protocol === "class") {
        registerClassController(registry, controller);
      } else {
        registerHttpController(registry, controller);
      }
    }

    // Get existing tools from McpServer if available
    const mcpServer =
      "server" in props.server ? (props.server as McpServer) : null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const existingTools: Record<string, any> = mcpServer
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mcpServer as any)._registeredTools ?? {}
      : {};

    // tools/list handler - includes both typia controllers and existing McpServer tools
    server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        // Typia controller tools with proper JSON Schema
        ...Array.from(registry.values()).map(({ func }) => ({
          name: func.name,
          description: func.description,
          inputSchema: {
            type: "object" as const,
            properties: func.parameters.properties,
            required: func.parameters.required,
          },
        })),
        // Existing McpServer tools (already converted to JSON Schema by MCP SDK)
        ...Object.entries(existingTools)
          .filter(([name, tool]) => !registry.has(name) && tool.enabled)
          .map(([name, tool]) => ({
            name,
            description: tool.description,
            inputSchema: tool.inputSchema
              ? convertZodToJsonSchema(tool.inputSchema)
              : { type: "object" as const, properties: {} },
          })),
      ],
    }));

    // tools/call handler
    server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
      const { name, arguments: args } = request.params;

      // Check typia registry first
      const entry = registry.get(name);
      if (entry !== undefined) {
        return handleToolCall(entry, args);
      }

      // Fall back to existing McpServer tools
      const existingTool = existingTools[name];
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
    const execute = controller.execute;

    for (const func of controller.application.functions) {
      if (registry.has(func.name)) {
        throw new Error(`Duplicate function name: "${func.name}"`);
      }

      const method: unknown = (execute as Record<string, unknown>)[func.name];
      if (typeof method !== "function") {
        throw new Error(
          `Method "${func.name}" not found on controller "${controller.name}"`,
        );
      }

      registry.set(func.name, {
        func,
        call: async (args: unknown) => method.call(execute, args),
      });
    }
  };

  const registerHttpController = (
    registry: Map<string, IToolEntry>,
    controller: IHttpLlmController,
  ): void => {
    const { application, connection } = controller;

    for (const func of application.functions) {
      if (registry.has(func.name)) {
        throw new Error(`Duplicate function name: "${func.name}"`);
      }
      registry.set(func.name, {
        func,
        call: async (args: unknown) => {
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
    const { func, call } = entry;

    const validation: IValidation<unknown> = func.validate(args);
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
      const result: unknown = await call(validation.data);
      return {
        content: [
          {
            type: "text" as const,
            text:
              result === undefined ? "Success" : JSON.stringify(result, null, 2),
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
  const convertZodToJsonSchema = (zodSchema: any): object => {
    // If it already looks like JSON Schema, return as-is
    if (zodSchema.type && zodSchema.properties) {
      return zodSchema;
    }
    // Fallback for Zod schemas - MCP SDK would have converted them
    return { type: "object", properties: {} };
  };
}
