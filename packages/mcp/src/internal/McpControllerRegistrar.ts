import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  CallToolResult,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import {
  IHttpLlmController,
  IHttpLlmFunction,
  IHttpResponse,
  ILlmController,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@typia/interface";
import { HttpLlm, LlmJson } from "@typia/utils";

export namespace McpControllerRegistrar {
  export const register = (
    server: Server,
    controller: ILlmController | IHttpLlmController,
    textFallback: boolean,
  ): void => {
    // Build tool registry from the controller's functions
    const registry: Map<string, IToolEntry> = new Map();
    for (const func of controller.application.functions) {
      if (registry.has(func.name)) {
        throw new Error(
          `Duplicate function name "${func.name}" in controller "${controller.name}"`,
        );
      }
      registry.set(func.name, {
        function: func,
        execute: composeExecute(controller, func),
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
        // The MCP spec classifies an unknown tool as a protocol error (-32602),
        // not a tool-execution error — unlike a validation failure, the model
        // cannot self-correct a call to a tool that does not exist. The
        // low-level Server turns this throw into the JSON-RPC error response.
        throw new McpError(
          ErrorCode.InvalidParams,
          `Unknown tool: ${request.params.name}`,
        );
      }
      return handleToolCall(entry, request.params.arguments, textFallback);
    });
  };

  const composeExecute = (
    controller: ILlmController | IHttpLlmController,
    func: ILlmFunction,
  ): ((args: unknown) => Promise<unknown>) => {
    if (controller.protocol === "http") {
      const httpFunction: IHttpLlmFunction = func as IHttpLlmFunction;
      return async (args: unknown) => {
        if (controller.execute !== undefined) {
          const response: IHttpResponse = await controller.execute({
            connection: controller.connection,
            application: controller.application,
            function: httpFunction,
            arguments: args as object,
          });
          return response.body;
        }
        return HttpLlm.execute({
          application: controller.application,
          function: httpFunction,
          connection: controller.connection,
          input: args as object,
        });
      };
    }
    const execute: Record<string, unknown> = controller.execute;
    const method: unknown = execute[func.name];
    if (typeof method !== "function") {
      throw new Error(
        `Method "${func.name}" not found on controller "${controller.name}"`,
      );
    }
    return async (args: unknown) => method.call(execute, args);
  };

  const handleToolCall = async (
    entry: IToolEntry,
    args: unknown,
    textFallback: boolean,
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
      // When the reflected return type schema exists, ship the result as
      // structured output, once. The spec's duplicate text fallback for
      // clients that ignore `outputSchema` doubles the payload, so it is
      // opt-in through `textFallback: true`.
      //
      // A result that cannot ship as `structuredContent` keeps its text
      // block regardless — dropping it would leave the call empty.
      const structured: boolean =
        entry.function.output !== undefined &&
        typeof result === "object" &&
        result !== null &&
        !Array.isArray(result);
      return {
        content:
          structured && !textFallback
            ? []
            : [{ type: "text" as const, text: JSON.stringify(result) }],
        ...(structured
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
