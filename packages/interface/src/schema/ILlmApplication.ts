import { ILlmFunction } from "./ILlmFunction";
import { ILlmSchema } from "./ILlmSchema";
import { IValidation } from "./IValidation";

/**
<<<<<<< HEAD
 * Application of LLM function calling.
 *
 * `ILlmApplication` is a data structure representing a collection of
 * {@link ILlmFunction LLM function calling schemas}, composed from a native
 * TypeScript class (or interface) type by the `typia.llm.application<App>()`
 * function.
 *
 * Also, there can be some parameters (or their nested properties) which must be
 * composed by Human, not by LLM. File uploading feature or some sensitive
 * information like secret key (password) are the examples. In that case, you
 * can separate the function parameters to both LLM and human sides by
 * configuring the {@link ILlmApplication.IConfig.separate} property. The
 * separated parameters are assigned to the {@link ILlmFunction.separated}
 * property.
 *
 * For reference, when both LLM and Human filled parameter values to call, you
 * can merge them by calling the {@link HttpLlm.mergeParameters} function. In
 * other words, if you've configured the {@link ILlmApplication.IConfig.separate}
 * property, you have to merge the separated parameters before the function call
 * execution.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @reference https://platform.openai.com/docs/guides/function-calling
 */
export interface ILlmApplication<Class extends object = any> {
  /**
   * List of function metadata.
   *
   * List of function metadata that can be used for the LLM function call.
   */
  functions: ILlmFunction[];

  /** Configuration for the application. */
  config: ILlmApplication.IConfig<Class>;

  /**
   * Class type, the source of the LLM application.
   *
   * This property is just for the generic type inference, and its value is
   * always `undefined`.
=======
 * LLM function calling application.
 *
 * `ILlmApplication` is a collection of {@link ILlmFunction} schemas generated
 * from a TypeScript class or interface by `typia.llm.application<App>()`. Each
 * public method becomes an {@link ILlmFunction} that LLM agents can invoke.
 *
 * Configure behavior via {@link ILlmApplication.IConfig}:
 *
 * - {@link ILlmApplication.IConfig.separate}: Split parameters into LLM-fillable
 *   vs human-required (e.g., file uploads, passwords)
 * - {@link ILlmApplication.IConfig.validate}: Custom validation per method
 * - {@link ILlmSchema.IConfig.strict}: OpenAI structured output mode
 * - {@link ILlmSchema.IConfig.reference}: Control `$ref` inlining behavior
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Source class/interface type
 */
export interface ILlmApplication<Class extends object = any> {
  /**
   * Array of callable function schemas.
   *
   * Each function represents a method from the source class that the LLM can
   * invoke. Functions include parameter schemas, descriptions, and validation
   * logic for type-safe function calling.
   */
  functions: ILlmFunction[];

  /**
   * Configuration used to generate this application.
   *
   * Contains the settings that were applied during schema generation, including
   * reference handling, strict mode, and parameter separation.
   */
  config: ILlmApplication.IConfig<Class>;

  /**
   * Phantom property for TypeScript generic type preservation.
   *
   * This property exists only in the type system to preserve the `Class`
   * generic parameter at compile time. It is always `undefined` at runtime and
   * should not be accessed or used in application code.
   *
   * This pattern enables type inference to recover the original class type from
   * an `ILlmApplication` instance, useful for type-safe function routing.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  __class?: Class | undefined;
}
export namespace ILlmApplication {
<<<<<<< HEAD
  /** Configuration for application composition. */
  export interface IConfig<Class extends object = any>
    extends ILlmSchema.IConfig {
    /**
     * Separator function for the parameters.
     *
     * When composing parameter arguments through LLM function call, there can
     * be a case that some parameters must be composed by human, or LLM cannot
     * understand the parameter.
     *
     * For example, if the parameter type has configured
     * {@link ILlmSchema.IString.contentMediaType} which indicates file
     * uploading, it must be composed by human, not by LLM (Large Language
     * Model).
     *
     * In that case, if you configure this property with a function that
     * predicating whether the schema value must be composed by human or not,
     * the parameters would be separated into two parts.
     *
     * - {@link ILlmFunction.separated.llm}
     * - {@link ILlmFunction.separated.human}
     *
     * When writing the function, note that returning value `true` means to be a
     * human composing the value, and `false` means to LLM composing the value.
     * Also, when predicating the schema, it would better to utilize the
     * {@link LlmTypeChecker} like features.
     *
     * @default null
     * @param schema Schema to be separated.
     * @returns Whether the schema value must be composed by human or not.
=======
  /**
   * Configuration for LLM application generation.
   *
   * Extends {@link ILlmSchema.IConfig} with application-specific options for
   * parameter separation and custom validation. These settings control how the
   * application schema is generated from the source class.
   */
  export interface IConfig<Class extends object = any>
    extends ILlmSchema.IConfig {
    /**
     * Function to separate LLM-fillable from human-required parameters.
     *
     * When provided, this function is called for each parameter schema to
     * determine if it should be filled by the LLM (`false`) or require human
     * input (`true`). Use this for sensitive data like passwords, file uploads,
     * or data the LLM cannot generate.
     *
     * @default null (no separation)
     * @param schema - The parameter schema to evaluate
     * @returns `true` if human input required, `false` if LLM can fill
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    separate: null | ((schema: ILlmSchema) => boolean);

    /**
<<<<<<< HEAD
     * Custom validation functions for specific class methods.
     *
     * The `validate` property allows you to provide custom validation functions
     * that will replace the default validation behavior for specific methods
     * within the application class. When specified, these custom validators
     * take precedence over the standard type validation generated by
     * `typia.llm.application()`.
     *
     * This feature is particularly useful when you need to:
     *
     * - Implement business logic validation beyond type checking
     * - Add custom constraints that cannot be expressed through type annotations
     * - Provide more specific error messages for AI agents
     * - Validate dynamic conditions based on runtime state
     *
     * Each validation function receives the same arguments as its corresponding
     * method and must return an {@link IValidation} result. On validation
     * success, it should return `{ success: true, data }`. On failure, it
     * should return `{ success: false, data, errors }` with detailed error
     * information that helps AI agents understand and correct their mistakes.
     *
     * @default null
=======
     * Custom validation functions per method name.
     *
     * Allows overriding the default type-based validation with custom business
     * logic. Useful for complex validation rules that cannot be expressed in
     * JSON Schema.
     *
     * @default null (use default type validation)
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    validate: null | Partial<ILlmApplication.IValidationHook<Class>>;
  }

  /**
<<<<<<< HEAD
   * Type for custom validation function hooks.
   *
   * `IValidationHook` defines the structure for custom validation functions
   * that can be provided for each method in the application class. It creates a
   * mapped type where each property corresponds to a method in the class, and
   * the value is a validation function for that method's parameters.
   *
   * The validation hook functions:
   *
   * - Receive the same argument type as the original method
   * - Must return an {@link IValidation} result indicating success or failure
   * - Replace the default type validation when specified
   * - Enable custom business logic and runtime validation
   *
   * Type constraints:
   *
   * - Only methods (functions) from the class can have validation hooks
   * - Non-function properties are typed as `never` and cannot be validated
   * - The validation function must match the method's parameter signature
   *
   * @template Class The application class type containing methods to validate
=======
   * Type-safe mapping of method names to custom validators.
   *
   * Maps each method name to a validation function that receives the raw input
   * and returns a validation result. The type inference ensures validators
   * match the expected argument types.
   *
   * @template Class - The source class type for type inference
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  export type IValidationHook<Class extends object> = {
    [K in keyof Class]?: Class[K] extends (args: infer Argument) => unknown
      ? (input: unknown) => IValidation<Argument>
      : never;
  };
}
