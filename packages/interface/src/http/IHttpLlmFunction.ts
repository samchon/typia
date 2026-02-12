import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IValidation } from "../schema/IValidation";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling schema from HTTP (OpenAPI) operation.
 *
 * `IHttpLlmFunction` is a data structure representing a function converted from
 * the {@link OpenApi.IOperation OpenAPI operation}, used for the LLM (Large
 * Language Model) function calling. It's a typical RPC (Remote Procedure Call)
 * structure containing the function {@link name}, {@link parameters}, and
 * {@link output return type}.
 *
 * If you provide this `IHttpLlmFunction` data to the LLM provider like
 * "OpenAI", the "OpenAI" will compose a function arguments by analyzing
 * conversations with the user. With the LLM composed arguments, you can execute
 * the function through {@link LlmFetcher.execute} and get the result.
 *
 * For reference, different between `IHttpLlmFunction` and its origin source
 * {@link OpenApi.IOperation} is, `IHttpLlmFunction` has converted every type
 * schema information from {@link OpenApi.IJsonSchema} to {@link ILlmSchema}.
 *
 * Additionally, the properties' rule is:
 *
 * - `pathParameters`: Path parameters of {@link OpenApi.IOperation.parameters}
 * - `query`: Query parameter of {@link IHttpMigrateRoute.query}
 * - `body`: Body parameter of {@link IHttpMigrateRoute.body}
 *
 * ```typescript
 * {
 *   ...pathParameters,
 *   query,
 *   body,
 * }
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @reference https://platform.openai.com/docs/guides/function-calling
 */
export interface IHttpLlmFunction {
  /** HTTP method of the endpoint. */
  method: "get" | "post" | "patch" | "put" | "delete";

  /** Path of the endpoint. */
  path: string;

  /**
   * Representative name of the function.
   *
   * The `name` is a representative name identifying the function in the
   * {@link IHttpLlmApplication}. The `name` value is just composed by joining
   * the {@link IHttpMigrateRoute.accessor} by underscore `_` character.
   *
   * Here is the composition rule of the {@link IHttpMigrateRoute.accessor}:
   *
   * > The `accessor` is composed with the following rules. At first, namespaces
   * > are composed by static directory names in the {@link path}. Parametric
   * > symbols represented by `:param` or `{param}` cannot be a part of the
   * > namespace.
   *
   * > Instead, they would be a part of the function name. The function name is
   * > composed with the {@link method HTTP method} and parametric symbols like
   * > `getByParam` or `postByParam`. If there are multiple path parameters, they
   * > would be concatenated by `And` like `getByParam1AndParam2`.
   *
   * > For reference, if the {@link operation}'s {@link method} is `delete`, the
   * > function name would be replaced to `erase` instead of `delete`. It is the
   * > reason why the `delete` is a reserved keyword in many programming
   * > languages.
   *
   * > - Example 1
   *
   * > - Path: `POST /shopping/sellers/sales`
   * > - Accessor: `shopping.sellers.sales.post`
   * > - Example 2
   *
   * > - Endpoint: `GET
   * >   /shoppings/sellers/sales/:saleId/reviews/:reviewId/comments/:id`
   * > - Accessor:
   * >   `shoppings.sellers.sales.reviews.getBySaleIdAndReviewIdAndCommentId`
   *
   * @maxLength 64
   */
  name: string;

  /**
   * List of parameter types.
   *
   * If you've configured {@link IHttpLlmApplication.IConfig.keyword} as `true`,
   * number of {@link IHttpLlmFunction.parameters} are always 1 and the first
   * parameter's type is always {@link ILlmSchema.IObject}. The properties' rule
   * is:
   *
   * - `pathParameters`: Path parameters of {@link IHttpMigrateRoute.parameters}
   * - `query`: Query parameter of {@link IHttpMigrateRoute.query}
   * - `body`: Body parameter of {@link IHttpMigrateRoute.body}
   *
   * ```typescript
   * {
   *   ...pathParameters,
   *   query,
   *   body,
   * }
   * ```
   *
   * Otherwise, the parameters would be multiple, and the sequence of the
   * parameters are following below rules:
   *
   * ```typescript
   * [
   *   ...pathParameters,
   *   ...(query ? [query] : []),
   *   ...(body ? [body] : []),
   * ];
   * ```
   */
  parameters: ILlmSchema.IParameters;

  /**
   * Collection of separated parameters.
   *
   * Filled only when {@link IHttpLlmApplication.IConfig.separate} is configured.
   */
  separated?: IHttpLlmFunction.ISeparated;

  /**
   * Expected return type.
   *
   * If the target operation returns nothing (`void`), the `output` would be
   * `undefined`.
   */
  output?: ILlmSchema | undefined;

  /**
   * Description of the function.
   *
   * `IHttpLlmFunction.description` is composed using the following rules:
   *
   * 1. Starts with the {@link OpenApi.IOperation.summary} paragraph
   * 2. The next paragraphs are filled with the
   *    {@link OpenApi.IOperation.description}. If the first paragraph of
   *    {@link OpenApi.IOperation.description} matches the
   *    {@link OpenApi.IOperation.summary}, it is not duplicated
   * 3. Parameter descriptions are added with `@param` tags
   * 4. {@link OpenApi.IOperation.security Security requirements} are added with
   *    `@security` tags
   * 5. Tag names are added with `@tag` tags
   * 6. If {@link OpenApi.IOperation.deprecated}, a `@deprecated` tag is added
   *
   * For reference, the `description` is a critical property for teaching the
   * purpose of the function to LLMs (Large Language Models). LLMs use this
   * description to determine which function to call.
   *
   * Also, when the LLM converses with users, the `description` explains the
   * function to the user. Therefore, the `description` property has the highest
   * priority and should be carefully considered.
   */
  description?: string | undefined;

  /**
   * Whether the function is deprecated or not.
   *
   * If the `deprecated` is `true`, the function is not recommended to use.
   *
   * LLM (Large Language Model) may not use the deprecated function.
   */
  deprecated?: boolean | undefined;

  /**
   * Category tags for the function.
   *
   * Same with {@link OpenApi.IOperation.tags} indicating the category of the
   * function.
   */
  tags?: string[];

  /**
   * Validate function for the arguments.
   *
   * You know what? LLMs (Large Language Models) like OpenAI frequently make
   * mistakes when composing arguments for function calling. Even with simple
   * types like `number` defined in the {@link parameters} schema, LLMs often
   * provide a `string` typed value instead.
   *
   * In such cases, you should provide validation feedback to the LLM using this
   * `validate` function. The `validate` function returns detailed information
   * about type errors in the arguments.
   *
   * Based on my experience, OpenAI's `gpt-4o-mini` model tends to construct
   * invalid function calling arguments about 50% of the time on the first
   * attempt. However, when corrected through this `validate` function, the
   * success rate jumps to 99% on the second attempt, and I've never seen a
   * failure on the third attempt.
   *
   * > If you have {@link separated} parameters, use the
   * > {@link IHttpLlmFunction.ISeparated.validate} function instead when
   * > validating LLM-composed arguments.
   *
   * > In that case, this `validate` function is meaningful only after you've
   * > merged the LLM and human composed arguments using the
   * > {@link HttpLlm.mergeParameters} function.
   *
   * @param args Arguments to validate
   * @returns Validation result
   */
  validate: (args: unknown) => IValidation<unknown>;

  /**
   * Get the Swagger operation metadata.
   *
   * Get the Swagger operation metadata, of the source.
   *
   * @returns Swagger operation metadata.
   */
  operation: () => OpenApi.IOperation;

  /**
   * Get the migration route metadata.
   *
   * Get the migration route metadata, of the source.
   *
   * @returns Migration route metadata.
   */
  route: () => IHttpMigrateRoute;
}
export namespace IHttpLlmFunction {
  /** Collection of separated parameters. */
  export interface ISeparated {
    /**
     * Parameters that would be composed by the LLM.
     *
     * Even though no property exists in the LLM side, the `llm` property would
     * have at least empty object type.
     */
    llm: ILlmSchema.IParameters;

    /** Parameters that would be composed by the human. */
    human: ILlmSchema.IParameters | null;

    /**
     * Validate function for separated arguments.
     *
     * If the LLM part of separated parameters has properties, this `validate`
     * function validates the {@link llm} type.
     *
     * > You know what? LLMs (Large Language Models) like OpenAI frequently make
     * > mistakes when composing arguments for function calling. Even with simple
     * > types like `number` defined in the {@link parameters} schema, LLMs often
     * > provide a `string` typed value instead.
     *
     * > In such cases, you should provide validation feedback to the LLM using
     * > this `validate` function. The `validate` function returns detailed
     * > information about type errors in the arguments.
     *
     * > Based on my experience, OpenAI's `gpt-4o-mini` model tends to construct
     * > invalid function calling arguments about 50% of the time on the first
     * > attempt. However, when corrected through this `validate` function, the
     * > success rate jumps to 99% on the second attempt, and I've never seen a
     * > failure on the third attempt.
     *
     * @param args Arguments to validate
     * @returns Validation result
     */
    validate?: ((args: unknown) => IValidation<unknown>) | undefined;
  }
}
