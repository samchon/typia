import {
  DynamicStructuredTool,
  ToolInputParsingException,
  tool,
} from "@langchain/core/tools";
import type { JSONSchema } from "@langchain/core/utils/json_schema";
import {
  IHttpLlmController,
  IHttpLlmFunction,
  ILlmController,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@typia/interface";
import { HttpLlm, LlmJson } from "@typia/utils";

import { LangChainParameterConverter } from "./LangChainParameterConverter";

export namespace LangChainToolsRegistrar {
  export const convert = (props: {
    controllers: Array<ILlmController | IHttpLlmController>;
    prefix?: boolean | undefined;
  }): DynamicStructuredTool[] => {
    const prefix: boolean = props.prefix ?? false;
    const tools: DynamicStructuredTool[] = [];

    // check duplicate tool names
    if (props.controllers.length >= 2) {
      const names: Map<string, string> = new Map();
      const duplicates: string[] = [];
      for (const controller of props.controllers) {
        for (const func of controller.application.functions) {
          const toolName: string = getToolName(
            controller.name,
            func.name,
            prefix,
          );
          const existing: string | undefined = names.get(toolName);
          const origin: string = `${controller.protocol} controller "${controller.name}" function "${func.name}"`;
          if (existing !== undefined)
            duplicates.push(
              `"${toolName}" from ${origin} (conflicts with ${existing})`,
            );
          else names.set(toolName, origin);
        }
      }
      if (duplicates.length > 0)
        throw new Error(
          `Duplicate tool names found:\n  - ${duplicates.join("\n  - ")}`,
        );
    }

    // convert controllers to tools
    for (const controller of props.controllers) {
      if (controller.protocol === "class") {
        convertClassController(tools, controller, prefix);
      } else {
        convertHttpController(tools, controller, prefix);
      }
    }

    return tools;
  };

  const convertClassController = (
    tools: DynamicStructuredTool[],
    controller: ILlmController,
    prefix: boolean,
  ): void => {
    const execute: Record<string, unknown> = controller.execute;

    for (const func of controller.application.functions) {
      const toolName: string = getToolName(controller.name, func.name, prefix);

      const method: unknown = execute[func.name];
      if (typeof method !== "function") {
        throw new Error(
          `Method "${func.name}" not found on controller "${controller.name}"`,
        );
      }

      tools.push(
        createTool({
          name: toolName,
          function: func,
          config: controller.application.config,
          execute: async (args: unknown) => method.call(execute, args),
        }),
      );
    }
  };

  const convertHttpController = (
    tools: DynamicStructuredTool[],
    controller: IHttpLlmController,
    prefix: boolean,
  ): void => {
    const application = controller.application;
    const connection = controller.connection;

    for (const func of application.functions) {
      const toolName: string = getToolName(controller.name, func.name, prefix);

      tools.push(
        createTool({
          name: toolName,
          function: func,
          config: application.config,
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
        }),
      );
    }
  };

  const createTool = (entry: {
    name: string;
    function: ILlmFunction | IHttpLlmFunction;
    config: ILlmSchema.IConfig;
    execute: (args: unknown) => Promise<unknown>;
  }): DynamicStructuredTool => {
    // A declared return type is a promise to the model, so a result that breaks
    // it is reported rather than delivered. `@typia/mcp` and `@typia/vercel`
    // already refuse one; this tool consulted `output` for its existence alone,
    // so a method returning nothing was reported while a method returning the
    // wrong shape was not (#2302).
    //
    // The application's own config decides how the schema is read back: a
    // strict application carries its constraints as description tags instead of
    // keywords, and only that config tells the inverter to read them.
    const validateOutput:
      | ((output: unknown) => IValidation<unknown>)
      | undefined =
      entry.function.output === undefined
        ? undefined
        : LlmJson.validate(entry.function.output, true, entry.config);
    return tool(
      async (args: unknown): Promise<unknown> => {
        const valid: IValidation<unknown> = LlmJson.validateArguments(
          entry.function,
          args ?? {},
        );
        if (valid.success === false)
          throw new ToolInputParsingException(
            `Type errors in "${entry.name}" arguments:\n\n` +
              LlmJson.stringify(valid),
            JSON.stringify(args ?? {}),
          );
        try {
          const result: unknown = await entry.execute(valid.data);
          if (result === undefined) {
            return validateOutput === undefined
              ? ({ success: true } satisfies ITryResult)
              : ({
                  success: false,
                  error: `Function "${entry.name}" returned undefined despite declaring an output schema`,
                } satisfies ITryResult);
          }
          if (validateOutput !== undefined) {
            const output: IValidation<unknown> = validateOutput(result);
            if (output.success === false)
              return {
                success: false,
                error:
                  `Type errors in "${entry.name}" output:

` + LlmJson.stringify(output),
              } satisfies ITryResult;
            return { success: true, data: output.data } satisfies ITryResult;
          }
          return { success: true, data: result } satisfies ITryResult;
        } catch (error) {
          return {
            success: false,
            error:
              error instanceof Error
                ? `${error.name}: ${error.message}`
                : String(error),
          } satisfies ITryResult;
        }
      },
      {
        name: entry.name,
        description: entry.function.description ?? "",
        // Declares the model-facing schema without a validator, so the
        // coerce-and-validate step above is the only one that runs; see
        // `LangChainParameterConverter`. The cast is needed because `tool()`
        // still types `schema` as Zod-or-JSON-Schema, even though the
        // `toJsonSchema` it reads that schema back with accepts Standard JSON
        // Schema by its own public signature.
        schema: LangChainParameterConverter.convert(
          entry.function,
        ) as JSONSchema,
      },
    );
  };

  const getToolName = (
    controllerName: string,
    functionName: string,
    prefix: boolean,
  ): string => (prefix ? `${controllerName}_${functionName}` : functionName);
}

type ITryResult =
  | { success: true; data?: unknown | undefined }
  | { success: false; error: string };
