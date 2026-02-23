import { DynamicStructuredTool } from "@langchain/core/tools";
import {
  IHttpLlmController,
  IHttpLlmFunction,
  ILlmController,
  ILlmFunction,
  IValidation,
} from "@typia/interface";
import { HttpLlm, stringifyValidationFailure } from "@typia/utils";
import { z } from "zod";

export namespace LangChainToolsRegistrar {
  export const convert = (props: {
    controllers: Array<ILlmController | IHttpLlmController>;
    prefix?: boolean | undefined;
  }): DynamicStructuredTool[] => {
    const prefix: boolean = props.prefix ?? true;
    const tools: DynamicStructuredTool[] = [];

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
      const method: unknown = execute[func.name];
      if (typeof method !== "function") {
        throw new Error(
          `Method "${func.name}" not found on controller "${controller.name}"`,
        );
      }

      const toolName: string = prefix
        ? `${controller.name}_${func.name}`
        : func.name;

      tools.push(
        createTool({
          name: toolName,
          function: func,
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
      const toolName: string = prefix
        ? `${controller.name}_${func.name}`
        : func.name;

      tools.push(
        createTool({
          name: toolName,
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
        }),
      );
    }
  };

  // Schema that accepts any object - bypasses LangChain's validation
  // so typia can handle all validation with proper error messages.
  // LangChain validates JSON Schema using @cfworker/json-schema which
  // throws ToolInputParsingException before reaching our func.
  const passthroughSchema = z.record(z.unknown());

  const createTool = (entry: {
    name: string;
    function: ILlmFunction | IHttpLlmFunction;
    execute: (args: unknown) => Promise<unknown>;
  }): DynamicStructuredTool => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new DynamicStructuredTool<any>({
      name: entry.name,
      description: entry.function.description ?? "",
      schema: passthroughSchema,
      func: async (args: unknown): Promise<string> => {
        const validation: IValidation<unknown> =
          entry.function.validate(args);
        if (!validation.success) {
          return stringifyValidationFailure(validation);
        }

        try {
          const result: unknown = await entry.execute(validation.data);
          return result === undefined
            ? "Success"
            : JSON.stringify(result, null, 2);
        } catch (error) {
          return error instanceof Error
            ? `${error.name}: ${error.message}`
            : String(error);
        }
      },
    });
  };
}
