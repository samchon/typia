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
 * - {@link ILlmApplication.IConfig.validate}: Custom validation per method
 * - {@link ILlmSchema.IConfig.strict}: OpenAI structured output mode
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template Class Source class/interface type
 *
 * @evidence contracts/common.md#principled-implementation The record holds the callable function schemas, the configuration used, an optional application description and an optional phantom `__class` that preserves the Class generic so tools can recover the source class type. The phantom member is optional and always undefined at runtime.
 * @evidence contracts/common.md#clear-and-simple-design Four members; the configuration and hook types are in the namespace, and the type parameter exists only for the phantom and the validation hook mapping.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The phantom member is declared type-level metadata and no runtime object is mutated to carry it.
 * @evidence contracts/common.md#meaningful-documentation The comment relates the application to ILlmFunction and the configuration, and the members explain the description's role and the phantom pattern.
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
   * strict mode and any custom validation hooks.
   */
  config: ILlmApplication.IConfig<Class>;

  /**
   * Human-readable description of the application.
   *
   * Explains the overall purpose of the application and the collection of
   * {@link functions} it exposes. Extracted from the JSDoc comment written on
   * the source class or interface.
   *
   * As this describes the whole toolset rather than a single function, agent
   * frameworks can surface it as a system instruction (e.g. an MCP server's
   * `instructions`), while other consumers may treat it as a plain
   * description.
   *
   * `undefined` when the source class or interface has no JSDoc comment.
   */
  description?: string | undefined;

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
   * custom validation. These settings control how the application schema is
   * generated from the source class.
   *
   * @evidence contracts/common.md#principled-implementation It extends the schema configuration with an optional per-method custom validation map, null meaning use the default validators, and keeps the Class parameter so hook keys are checked against the class.
   * @evidence contracts/common.md#clear-and-simple-design One added field on top of ILlmSchema.IConfig rather than an independent options type.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Custom validators are supplied through a declared configuration member, not injected into generated code by patching.
   * @evidence contracts/common.md#meaningful-documentation The comment explains the purpose and default and says that it is for rules JSON Schema cannot express.
   */
  export interface IConfig<Class extends object = any>
    extends ILlmSchema.IConfig {
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
   *
   * @evidence contracts/common.md#principled-implementation A mapped type over the class keys yields, for a method taking a single argument object, a validator from unknown to IValidation of that argument type, and `never` for other members, so a hook can only be written for a method it fits. Hooks are optional per method.
   * @evidence contracts/common.md#clear-and-simple-design A single mapped conditional with the argument type inferred from the method.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds type safety to hook registration without any runtime component or cast.
   * @evidence contracts/common.md#meaningful-documentation The comment explains the mapping from method name to validator and the inference of the argument type.
   */
  export type IValidationHook<Class extends object> = {
    [K in keyof Class]?: Class[K] extends (args: infer Argument) => unknown
      ? (input: unknown) => IValidation<Argument>
      : never;
  };

  /**
   * Internal type for typia transformer.
   *
   * @ignore
   */
  export interface __IPrimitive<Class extends object = any> extends Omit<
    ILlmApplication<Class>,
    "config" | "functions"
  > {
    /**
     * Schema configuration the call site declared.
     *
     * The transform resolves it from the `Config` generic and emits it here,
     * because it is the only place that knows it. The runtime finalizer widens
     * it into {@link ILlmApplication.config} by adding the `validate` hook, so a
     * consumer reading `application.config.strict` sees what the schemas were
     * actually built with.
     */
    config: ILlmSchema.IConfig;
    functions: Omit<ILlmFunction, "parse" | "coerce">[];
  }
}
