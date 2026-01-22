import { OpenApi } from "./OpenApi";
import { LlmSchemaComposer } from "./composers/LlmSchemaComposer";
import { OpenApiV3_1Emender } from "./converters/OpenApiV3_1Emender";
import { ILlmSchema } from "./structures/ILlmSchema";
import { IMcpLlmApplication } from "./structures/IMcpLlmApplication";
import { IMcpLlmFunction } from "./structures/IMcpLlmFunction";
import { IMcpTool } from "./structures/IMcpTool";
import { IOpenApiSchemaError } from "./structures/IOpenApiSchemaError";
import { IResult } from "./structures/IResult";
import { OpenApiTypeChecker } from "./utils/OpenApiTypeChecker";
import { OpenApiValidator } from "./utils/OpenApiValidator";

/**
 * Application of LLM function calling from MCP document.
 *
 * `McpLlm` is a module for composing LLM (Large Language Model) function
 * calling application from MCP (Model Context Protocol) document.
 *
 * The reasons why `@samchon/openapi` recommends to use the function calling
 * feature instead of directly using the
 * [`mcp_servers`](https://openai.github.io/openai-agents-python/mcp/#using-mcp-servers)
 * property of LLM API are:
 *
 * - Model Specification: {@link ILlmSchema}
 * - Validation Feedback: {@link IMcpLlmFunction.validate}
 * - Selector agent for reducing context: [Agentica > Orchestration
 *   Strategy](https://wrtnlabs.io/agentica/docs/concepts/function-calling/#orchestration-strategy)
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace McpLlm {
  /** Properties for the LLM function calling application composer. */
  export interface IApplicationProps {
    /**
     * List of tools.
     *
     * A list of tools defined in the MCP (Model Context Protocol) document.
     *
     * It is better to validate the tools using the
     * [`typia.assert<T>()`](https://typia.io/docs/validate/assert) function for
     * type safety.
     */
    tools: Array<IMcpTool>;

    /** Configuration for the LLM function calling schema conversion. */
    config?: Partial<IMcpLlmApplication.IConfig>;
  }

  /**
   * Convert MCP document to LLM function calling application.
   *
   * Converts MCP (Model Context Protocol) to LLM (Large Language Model)
   * function calling application.
   *
   * The reasons why `@samchon/openapi` recommends using the function calling
   * feature instead of directly using the
   * [`mcp_servers`](https://openai.github.io/openai-agents-python/mcp/#using-mcp-servers)
   * property of LLM API are:
   *
   * - **Model Specification**: {@link ILlmSchema}
   * - **Validation Feedback**: {@link IMcpLlmFunction.validate}
   * - **Selector agent for reducing context**: [Agentica > Orchestration
   *   Strategy](https://wrtnlabs.io/agentica/docs/concepts/function-calling/#orchestration-strategy)
   *
   * @param props Properties for composition
   * @returns LLM function calling application
   */
  export const application = (props: IApplicationProps): IMcpLlmApplication => {
    const config: IMcpLlmApplication.IConfig = {
      reference: props.config?.reference ?? true,
      strict: props.config?.strict ?? false,
      maxLength: props.config?.maxLength ?? 64,
      equals: props.config?.equals ?? false,
    };
    const functions: IMcpLlmFunction[] = [];
    const errors: IMcpLlmApplication.IError[] = [];

    props.tools.forEach((tool, i) => {
      // CONVERT TO EMENDED OPENAPI V3.1 SPECIFICATION
      const components: OpenApi.IComponents =
        OpenApiV3_1Emender.convertComponents({
          schemas: tool.inputSchema.$defs,
        });
      const schema: OpenApi.IJsonSchema = OpenApiV3_1Emender.convertSchema({
        schemas: tool.inputSchema.$defs,
      })(tool.inputSchema);
      if (components.schemas) {
        const visited: Set<string> = new Set<string>();
        OpenApiTypeChecker.visit({
          closure: (schema: any) => {
            if (typeof schema.$ref === "string")
              visited.add(schema.$ref.split("/").pop()!);
          },
          components,
          schema,
        });
        components.schemas = Object.fromEntries(
          Object.entries(components.schemas).filter(([key]) =>
            visited.has(key),
          ),
        );
      }

      // CONVERT TO LLM PARAMETERS
      const parameters: IResult<ILlmSchema.IParameters, IOpenApiSchemaError> =
        LlmSchemaComposer.parameters({
          config,
          components,
          schema: schema as
            | OpenApi.IJsonSchema.IObject
            | OpenApi.IJsonSchema.IReference,
          accessor: `$input.tools[${i}].inputSchema`,
        });
      if (parameters.success)
        functions.push({
          name: tool.name,
          parameters: parameters.value,
          description: tool.description,
          validate: OpenApiValidator.create({
            components,
            schema,
            required: true,
            equals: config.equals,
          }),
        });
      else
        errors.push({
          name: tool.name,
          parameters: tool.inputSchema,
          description: tool.description,
          messages: parameters.error.reasons.map((r) => {
            const accessor: string = `$input.tools[${i}].inputSchema`;
            return `${accessor}: ${r.message}`;
          }),
        });
    });
    return {
      functions,
      config,
      errors,
    };
  };
}
