import { ILlmFunction } from "./ILlmFunction";
import { ILlmSchema } from "./ILlmSchema";
import { IValidation } from "./IValidation";

/**
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
   */
  __class?: Class | undefined;
}
export namespace ILlmApplication {
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
     */
    separate: null | ((schema: ILlmSchema) => boolean);

    /**
     * Custom validation functions per method name.
     *
     * Allows overriding the default type-based validation with custom business
     * logic. Useful for complex validation rules that cannot be expressed in
     * JSON Schema.
     *
     * @default null (use default type validation)
     */
    validate: null | Partial<ILlmApplication.IValidationHook<Class>>;
  }

  /**
   * Type-safe mapping of method names to custom validators.
   *
   * Maps each method name to a validation function that receives the raw input
   * and returns a validation result. The type inference ensures validators
   * match the expected argument types.
   *
   * @template Class - The source class type for type inference
   */
  export type IValidationHook<Class extends object> = {
    [K in keyof Class]?: Class[K] extends (args: infer Argument) => unknown
      ? (input: unknown) => IValidation<Argument>
      : never;
  };
}
