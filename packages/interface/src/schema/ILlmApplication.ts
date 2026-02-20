import { ILlmFunction } from "./ILlmFunction";
import { ILlmSchema } from "./ILlmSchema";
import { IValidation } from "./IValidation";

/**
 * LLM function calling application.
 *
 * `ILlmApplication` is a collection of {@link ILlmFunction} schemas generated
 * from a TypeScript class/interface by `typia.llm.application<App>()`.
 *
 * @template Class Source class/interface type
 */
export interface ILlmApplication<Class extends object = any> {
  /** Function schemas. */
  functions: ILlmFunction[];

  /** Application configuration. */
  config: ILlmApplication.IConfig<Class>;

  /** @internal Class type marker. */
  __class?: Class | undefined;
}
export namespace ILlmApplication {
  /** Application configuration. */
  export interface IConfig<Class extends object = any>
    extends ILlmSchema.IConfig {
    /**
     * Parameter separator function.
     *
     * Splits parameters into LLM-fillable and human-required
     * (e.g., file uploads, passwords). Return `true` for human, `false` for LLM.
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
