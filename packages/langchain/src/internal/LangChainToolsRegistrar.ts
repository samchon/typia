import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import {
  IHttpLlmController,
  IHttpLlmFunction,
  IJsonParseResult,
  ILlmController,
  ILlmFunction,
  IValidation,
} from "@typia/interface";
import { HttpLlm, LlmJson, dedent } from "@typia/utils";

export namespace LangChainToolsRegistrar {
  export const convert = (props: {
    controllers: Array<ILlmController | IHttpLlmController>;
    prefix?: boolean | undefined;
  }): DynamicStructuredTool[] => {
    const prefix: boolean = props.prefix ?? false;
    const tools: DynamicStructuredTool[] = [];

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
      const toolName: string = prefix
        ? `${controller.name}_${func.name}`
        : func.name;

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

  const createTool = (entry: {
    name: string;
    function: ILlmFunction | IHttpLlmFunction;
    execute: (args: unknown) => Promise<unknown>;
  }): DynamicStructuredTool => {
    // executor function with diagnoses
    const process = async (args: unknown): Promise<string> => {
      const coerced: unknown = LlmJson.coerce(args, entry.function.parameters);
      const valid: IValidation<unknown> = entry.function.validate(coerced);
      if (valid.success === false) {
        throw new ToolInputParsingException(
          "Received tool input did not match expected schema",
          LlmJson.stringify(valid),
        );
      }
      try {
        const result: unknown = await entry.execute(valid.data);
        return result === undefined
          ? "Success"
          : JSON.stringify(result, null, 2);
      } catch (error) {
        return error instanceof Error
          ? `${error.name}: ${error.message}`
          : String(error);
      }
    };

    // make tool definition and its executor function
    const tool = new DynamicStructuredTool<any>({
      name: entry.name,
      description: entry.function.description ?? "",
      schema: entry.function.parameters,
      func: process,
    });

    // hook invoke function
    const originalInvoke = tool.invoke.bind(tool);
    tool.invoke = async (...args: Parameters<typeof tool.invoke>) => {
      try {
        return await originalInvoke(...args);
      } catch (error) {
        if (error instanceof ToolInputParsingException) {
          let input: unknown;
          if (typeof args[0] === "string") {
            // fix json parsing error
            const parsed: IJsonParseResult = entry.function.parse(args[0]);
            if (parsed.success === false)
              throw new ToolInputParsingException(
                dedent`
                  Failed to parse JSON input:

                  \`\`\`json
                  ${JSON.stringify(parsed.errors)}
                  \`\`\`
                `,
                parsed.input,
              );
            input = parsed.data;
          } else {
            input = args[0];
          }
          // just go on original process
          return process(input);
        }
        throw error;
      }
    };

    return tool;
  };
}
