import { jsonSchema, tool } from "ai";
import type { Tool } from "ai";
import type { JSONSchema7 } from "json-schema";
import {
  IHttpLlmController,
  IHttpLlmFunction,
  ILlmController,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@typia/interface";
import { HttpLlm, stringifyValidationFailure } from "@typia/utils";

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
    const tools: Record<string, Tool> = {};
    const prefix: boolean = props.prefix ?? true;

    for (const controller of props.controllers) {
      if (controller.protocol === "class") {
        registerClassController({
          tools,
          controller,
          prefix,
        });
      } else {
        registerHttpController({
          tools,
          controller,
          prefix,
        });
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

      if (tools[toolName] !== undefined) {
        throw new Error(
          `Duplicate tool name "${toolName}" from controller "${controller.name}"`,
        );
      }

      const method: unknown = execute[func.name];
      if (typeof method !== "function") {
        throw new Error(
          `Method "${func.name}" not found on controller "${controller.name}"`,
        );
      }

      tools[toolName] = createTool({
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

      if (tools[toolName] !== undefined) {
        throw new Error(
          `Duplicate tool name "${toolName}" from controller "${controller.name}"`,
        );
      }

      tools[toolName] = createTool({
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
    func: ILlmFunction | IHttpLlmFunction;
    execute: (args: unknown) => Promise<unknown>;
  }): Tool => {
    const { func, execute } = props;

    return tool({
      description: func.description,

      // Convert ILlmSchema.IParameters to Vercel jsonSchema
      parameters: jsonSchema<object>(
        convertParameters(func.parameters) as JSONSchema7,
      ),

      execute: async (args: object) => {
        // Validate using typia's built-in validator
        const validation: IValidation<unknown> = func.validate(args);
        if (!validation.success) {
          // Return validation error in LLM-friendly format
          return {
            error: true,
            message: stringifyValidationFailure(validation),
          };
        }

        try {
          const result: unknown = await execute(validation.data);
          return result === undefined ? { success: true } : result;
        } catch (error) {
          return {
            error: true,
            message:
              error instanceof Error
                ? `${error.name}: ${error.message}`
                : String(error),
          };
        }
      },
    });
  };

  const convertParameters = (params: ILlmSchema.IParameters): JSONSchema7 => {
    const schema: JSONSchema7 = {
      type: "object",
      properties: params.properties as JSONSchema7["properties"],
      required: params.required,
      additionalProperties: params.additionalProperties,
    };

    // Add $defs if present
    if (Object.keys(params.$defs).length > 0) {
      schema.$defs = params.$defs as JSONSchema7["$defs"];
    }

    return schema;
  };
}
