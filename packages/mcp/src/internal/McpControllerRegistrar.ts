import { Server } from "@modelcontextprotocol/sdk/server/index.js";
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
import { ZodObject, ZodType } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export namespace McpControllerRegistrar {
  export const register = (props: {
    server: McpServer | Server;
    controllers: Array<ILlmController | IHttpLlmController>;
    preserve?: boolean | undefined;
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

    // Determine preserve mode (default: false)
    const preserve: boolean = props.preserve ?? false;

    if (preserve) {
      // PRESERVE MODE: Coexist with McpServer.registerTool()
      // Uses MCP SDK internal API (_registeredTools, _toolHandlersInitialized)
      registerWithPreserve(server, registry, props.server);
    } else {
      // STANDALONE MODE: Typia tools only, no private API dependency
      registerStandalone(server, registry);
    }
  };

  /**
   * Standalone registration without private API. Typia tools completely replace
   * any existing tool handlers.
   */
  const registerStandalone = (
    server: Server,
    registry: Map<string, IToolEntry>,
  ): void => {
    // tools/list handler
    server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: Array.from(registry.values()).map((entry: IToolEntry) => ({
        name: entry.function.name,
        description: entry.function.description,
        inputSchema: {
          type: "object" as const,
          properties: entry.function.parameters.properties,
          required: entry.function.parameters.required,
          additionalProperties: false,
          $defs: entry.function.parameters.$defs,
        },
      })),
    }));

    // tools/call handler
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const name: string = request.params.name;
      const args: Record<string, unknown> | undefined =
        request.params.arguments;

      const entry: IToolEntry | undefined = registry.get(name);
      if (entry !== undefined) {
        return handleToolCall(entry, args);
      }

      return {
        isError: true,
        content: [{ type: "text" as const, text: `Unknown tool: ${name}` }],
      };
    });
  };

  /**
   * Preserve mode registration with private API. Coexists with tools registered
   * via McpServer.registerTool().
   */
  const registerWithPreserve = (
    server: Server,
    registry: Map<string, IToolEntry>,
    originalServer: McpServer | Server,
  ): void => {
    // Get McpServer reference for coexistence with McpServer.registerTool()
    const mcpServer: McpServer | null =
      "server" in originalServer ? (originalServer as McpServer) : null;

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

    // tools/list handler
    server.setRequestHandler(ListToolsRequestSchema, async () => {
      const existingTools: Record<string, any> = getExistingTools();
      return {
        tools: [
          // Typia controller tools
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
          // Existing McpServer tools
          ...Object.entries(existingTools)
            .filter(
              (pair: [string, any]) =>
                !registry.has(pair[0]) && pair[1].enabled,
            )
            .map((pair: [string, any]) => {
              return {
                name: pair[0],
                description: pair[1].description,
                inputSchema: convertZodToJsonSchema(pair[1].inputSchema),
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

      // Fall back to existing McpServer tools
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

  const convertZodToJsonSchema = (
    zodSchema: ZodType | ZodObject<any> | undefined,
  ): Tool["inputSchema"] => {
    if (zodSchema === undefined) {
      return { type: "object", properties: {} };
    }

    // @todo: error TS2589: Type instantiation is excessively deep and possibly infinite.
    const converted: object = (zodToJsonSchema as any)(zodSchema);
    if (
      typeof converted === "object" &&
      "type" in converted &&
      converted.type === "object"
    ) {
      return converted as Tool["inputSchema"];
    }
    return { type: "object", properties: {} };
  };
}

interface IToolEntry {
  controller: string;
  function: ILlmFunction | IHttpLlmFunction;
  execute: (args: unknown) => Promise<unknown>;
}
