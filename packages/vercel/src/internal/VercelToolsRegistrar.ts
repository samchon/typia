import {
  IHttpLlmController,
  IHttpLlmFunction,
  ILlmController,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@typia/interface";
import { HttpLlm, LlmJson } from "@typia/utils";
import { Tool, tool } from "ai";

import { VercelParameterConverter } from "./VercelParameterConverter";

/**
 * Registers reflected class and HTTP functions as AI SDK tools.
 *
 * Tool names share one namespace across controllers. Each tool validates and
 * coerces arguments before dispatch, then represents successful data or a
 * correctable execution/output error using the adapter's result envelope.
 *
 * @evidence contracts/common.md#principled-implementation Protocol-specific dispatch preserves class receiver binding or HTTP connection data; common tool creation owns argument coercion, reflected output validation and the success/error envelope advertised to the SDK.
 * @evidence contracts/common.md#clear-and-simple-design Conversion owns the final name namespace, two private registration helpers own their execution protocols, and one private tool constructor owns validation and result framing.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The SDK's public tool/jsonSchema APIs leave validation to LlmJson without foreign mutation; application.config controls inversion instead of guessing strictness. The supported name contract retains #2435's prototype-name exclusion.
 * @evidence contracts/common.md#meaningful-documentation The namespace explains naming, dispatch and feedback, and convert documents collision failure and the application-level unique-name premise; private comments explain output-config ownership.
 */
export namespace VercelToolsRegistrar {
  /**
   * Convert typia controllers to Vercel AI SDK tools.
   *
   * Functions are unique within each reflected application. Multiple
   * controllers are checked against the final prefixed or unprefixed names
   * before registration, and a collision throws without returning partial
   * tools. Class methods retain their receiver. Argument and output validation
   * errors become correctable tool results rather than successful controller
   * data.
   *
   * @param props Conversion properties
   * @returns Record of Vercel AI SDK Tools
   * @evidence contracts/common.md#principled-implementation A shared final-name map detects cross-controller collisions before dispatch registration; class calls bind execute as receiver, HTTP calls preserve the connection, and common creation applies the function's argument validator and its application's output-schema config.
   * @evidence contracts/common.md#clear-and-simple-design The public conversion validates namespace ownership then delegates protocol-specific registration, while createTool keeps coercion, execution errors and output validation consistent for both protocols.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Duplicate checking assumes the public ILlmFunction contract's within-application uniqueness; supported ordinary names are stored in a record and the historical __proto__ exclusion remains. No known fixture, consumer or foreign SDK method is special-cased.
   * @evidence contracts/common.md#meaningful-documentation The comment states uniqueness, final-name collision failure, receiver binding and error representation, with props and return documentation; config-related private comments explain strict-schema inversion.
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
        config: controller.application.config,
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
      });
    }
  };

  const createTool = (props: {
    name: string;
    func: ILlmFunction | IHttpLlmFunction;
    config: ILlmSchema.IConfig;
    execute: (args: unknown) => Promise<unknown>;
  }): Tool => {
    const { name, func, execute } = props;
    const validateOutput:
      | ((output: unknown) => IValidation<unknown>)
      | undefined =
      func.output === undefined
        ? undefined
        : // Validate the output against the config that produced its schema. A
          // `strict` application carries its constraints as description tags
          // instead of keywords, and only that config tells the inverter to
          // read them back.
          //
          // Both application kinds report the config they were built with: an
          // HttpLlm application the one it was composed with, and a
          // typia.llm.application or .controller the one its `Config` generic
          // declared (issue #2293 — until that landed, a strict class
          // controller reported `strict: false` and every constraint vanished
          // from this check). Read that config; never guess one, because
          // guessing is what erased the non-strict constraints in the first
          // place.
          LlmJson.validate(func.output, true, props.config);

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
              LlmJson.stringify(validation),
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
                  LlmJson.stringify(output),
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
