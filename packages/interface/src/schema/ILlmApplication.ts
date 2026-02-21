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
 * - {@link ILlmApplication.IConfig.separate}: Split parameters into LLM-fillable
 *   vs human-required (e.g., file uploads, passwords)
 * - {@link ILlmApplication.IConfig.validate}: Custom validation per method
 * - {@link ILlmSchema.IConfig.strict}: OpenAI structured output mode
 * - {@link ILlmSchema.IConfig.reference}: Control `$ref` inlining behavior
 *
 * @template Class Source class/interface type
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ILlmApplication<Class extends object = any> {
  /** Function schemas. */
  functions: ILlmFunction[];

  /** Application configuration. */
  config: ILlmApplication.IConfig<Class>;

  /**
   * Phantom property for TypeScript generic type preservation.
   *
   * This property exists only in the type system to preserve the `Class`
   * generic parameter. It is always `undefined` at runtime and should not
   * be accessed or used in application code.
   */
  __class?: Class | undefined;
}
export namespace ILlmApplication {
  /** Application configuration. */
  export interface IConfig<Class extends object = any>
    extends ILlmSchema.IConfig {
    /**
     * Parameter separator function.
     *
     * Splits parameters into LLM-fillable and human-required (e.g., file
     * uploads, passwords). Return `true` for human, `false` for LLM.
     *
     * @default null
     */
    separate: null | ((schema: ILlmSchema) => boolean);

    /**
     * Custom validation functions per method.
     *
     * Overrides default type validation with custom logic.
     *
     * @default null
     */
    validate: null | Partial<ILlmApplication.IValidationHook<Class>>;
  }

  /** Custom validation hooks mapped by method name. */
  export type IValidationHook<Class extends object> = {
    [K in keyof Class]?: Class[K] extends (args: infer Argument) => unknown
      ? (input: unknown) => IValidation<Argument>
      : never;
  };
}
