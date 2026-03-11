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
    if (prefix === false && props.controllers.length >= 2) {
      const names: Map<string, string> = new Map();
      const duplicates: string[] = [];
      for (const controller of props.controllers) {
        for (const func of controller.application.functions) {
          const existing: string | undefined = names.get(func.name);
          if (existing !== undefined)
            duplicates.push(
              `"${func.name}" in "${controller.name}" (conflicts with "${existing}")`,
            );
          else names.set(func.name, controller.name);
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
      const toolName: string = prefix
        ? `${controller.name}_${func.name}`
        : func.name;

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
      const toolName: string = prefix
        ? `${controller.name}_${func.name}`
        : func.name;

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

    return tool({
      description: func.description ?? "",

      parameters: VercelParameterConverter.convert(func.parameters),

      execute: async (args: object) => {
        const coerced: unknown = LlmJson.coerce(args, func.parameters);
        const validation: IValidation<unknown> = func.validate(coerced);
        if (!validation.success)
          return {
            success: false,
            error:
              `Type errors in "${name}" arguments:\n\n` +
              `\`\`\`json\n${LlmJson.stringify(validation)}\n\`\`\``,
          };
        try {
          const result: unknown = await execute(validation.data);
          return result === undefined
            ? { success: true }
            : { success: true, data: result };
        } catch (error) {
          return {
            success: false,
            error:
              error instanceof Error
                ? `${error.name}: ${error.message}`
                : String(error),
          };
        }
      },
    });
  };
}
