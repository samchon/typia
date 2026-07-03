import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  CallToolResult,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import {
  ILlmController,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@typia/interface";
import { LlmJson } from "@typia/utils";

export namespace McpControllerRegistrar {
  export const register = (
    server: Server,
    controller: ILlmController,
  ): void => {
    // Build tool registry from the controller's functions
    const registry: Map<string, IToolEntry> = new Map();
    const execute: Record<string, unknown> = controller.execute;
    for (const func of controller.application.functions) {
      if (registry.has(func.name)) {
        throw new Error(
          `Duplicate function name "${func.name}" in controller "${controller.name}"`,
        );
      }
      const method: unknown = execute[func.name];
      if (typeof method !== "function") {
        throw new Error(
          `Method "${func.name}" not found on controller "${controller.name}"`,
        );
      }
      registry.set(func.name, {
        function: func,
        execute: async (args: unknown) => method.call(execute, args),
      });
    }

    // tools/list handler
    server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: Array.from(registry.values()).map(
        (entry: IToolEntry): Tool => ({
          name: entry.function.name,
          description: entry.function.description,
          inputSchema: composeObjectSchema(entry.function.parameters),
          ...(entry.function.output !== undefined
            ? { outputSchema: composeObjectSchema(entry.function.output) }
            : {}),
        }),
      ),
    }));

    // tools/call handler
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const entry: IToolEntry | undefined = registry.get(request.params.name);
      if (entry === undefined) {
        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: `Unknown tool: ${request.params.name}`,
            },
          ],
        };
      }
      return handleToolCall(entry, request.params.arguments);
    });
  };

  const handleToolCall = async (
    entry: IToolEntry,
    args: unknown,
  ): Promise<CallToolResult> => {
    // Validate an empty object when a client omits `arguments` — the MCP spec
    // allows the omission for zero-parameter tools, and validating `{}` also
    // returns field-level errors instead of one generic "expected object".
    const validation: IValidation<unknown> = LlmJson.validateArguments(
      entry.function,
      args ?? {},
    );
    if (!validation.success) {
      return {
        isError: true,
        content: [
          { type: "text" as const, text: LlmJson.stringify(validation) },
        ],
      };
    }

    try {
      const result: unknown = await entry.execute(validation.data);
      if (result === undefined) {
        return { content: [{ type: "text" as const, text: "Success" }] };
      }
      return {
        content: [{ type: "text" as const, text: JSON.stringify(result) }],
        // When the reflected return type schema exists, ship the result as
        // structured output too; the text block above stays as the
        // spec-recommended fallback for clients that ignore `outputSchema`.
        ...(entry.function.output !== undefined &&
        typeof result === "object" &&
        result !== null &&
        !Array.isArray(result)
          ? { structuredContent: result as Record<string, unknown> }
          : {}),
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

  const composeObjectSchema = (
    parameters: ILlmSchema.IParameters,
  ): Tool["inputSchema"] =>
    ({
      type: "object" as const,
      properties: parameters.properties,
      required: parameters.required,
      additionalProperties: false,
      $defs: parameters.$defs,
    }) as Tool["inputSchema"];
}

interface IToolEntry {
  function: ILlmFunction;
  execute: (args: unknown) => Promise<unknown>;
}
