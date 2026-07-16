import {
  IHttpLlmController,
  IHttpLlmFunction,
  ILlmController,
  ILlmFunction,
  IValidation,
} from "@typia/interface";
import { HttpLlm, LlmJson } from "@typia/utils";
import { Tool, tool } from "ai";

import { VercelParameterConverter } from "./VercelParameterConverter";

export namespace VercelToolsRegistrar {
  /**
   * Convert typia controllers to Vercel AI SDK tools.
   *
   * @param props Conversion properties
   * @returns Record of Vercel AI SDK Tools
   */
  export const convert = (props: {
    controllers: Array<ILlmController | IHttpLlmController>;
    prefix?: boolean | undefined;
  }): Record<string, Tool> => {
    const prefix: boolean = props.prefix ?? false;
    const tools: Record<string, Tool> = {};

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
        registerClassController({ tools, controller, prefix });
      } else {
        registerHttpController({ tools, controller, prefix });
      }
    }

    return tools;
  };

  const registerClassController = (props: {
    tools: Record<string, Tool>;
    controller: ILlmController;
    prefix: boolean;
  }): void => {
    const { tools, controller, prefix } = props;
    const execute: Record<string, unknown> = controller.execute;

    for (const func of controller.application.functions) {
      const toolName: string = getToolName(controller.name, func.name, prefix);

      const method: unknown = execute[func.name];
      if (typeof method !== "function") {
        throw new Error(
          `Method "${func.name}" not found on controller "${controller.name}"`,
        );
      }

      tools[toolName] = createTool({
        name: toolName,
        func,
        execute: async (args: unknown) => method.call(execute, args),
      });
    }
  };

  const registerHttpController = (props: {
    tools: Record<string, Tool>;
    controller: IHttpLlmController;
    prefix: boolean;
  }): void => {
    const { tools, controller, prefix } = props;
    const application = controller.application;
    const connection = controller.connection;

    for (const func of application.functions) {
      const toolName: string = getToolName(controller.name, func.name, prefix);

      tools[toolName] = createTool({
        name: toolName,
        func,
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

  const createTool = (props: {
    name: string;
    func: ILlmFunction | IHttpLlmFunction;
    execute: (args: unknown) => Promise<unknown>;
  }): Tool => {
    const { name, func, execute } = props;
    const validateOutput:
      | ((output: unknown) => IValidation<unknown>)
      | undefined =
      func.output === undefined
        ? undefined
        : LlmJson.validate(func.output, true);

    return tool({
      description: func.description ?? "",
      inputSchema: VercelParameterConverter.convert(func.parameters),
      ...(func.output !== undefined
        ? {
            outputSchema: VercelParameterConverter.convertToolOutput(
              func.output,
            ),
          }
        : {}),
      execute: async (args: unknown): Promise<ITryResult> => {
        const validation: IValidation<unknown> = LlmJson.validateArguments(
          func,
          args ?? {},
        );
        if (!validation.success)
          return {
            success: false,
            error:
              `Type errors in "${name}" arguments:\n\n` +
              `\`\`\`json\n${LlmJson.stringify(validation)}\n\`\`\``,
          } satisfies ITryResult;
        try {
          const result: unknown = await execute(validation.data);
          if (validateOutput === undefined)
            return result === undefined
              ? ({ success: true } satisfies ITryResult)
              : ({ success: true, data: result } satisfies ITryResult);
          const output: IValidation<unknown> = validateOutput(result);
          return output.success
            ? ({ success: true, data: output.data } satisfies ITryResult)
            : ({
                success: false,
                error:
                  `Type errors in "${name}" output:\n\n` +
                  `\`\`\`json\n${LlmJson.stringify(output)}\n\`\`\``,
              } satisfies ITryResult);
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
    });
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
