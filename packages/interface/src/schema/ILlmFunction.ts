import { ILlmSchema } from "./ILlmSchema";
import { IValidation } from "./IValidation";

/**
 * LLM function calling metadata.
 *
 * `ILlmFunction` describes a single callable function for LLM agents. Generated
 * as part of {@link ILlmApplication} by `typia.llm.application<App>()`.
 *
 * Contains the function {@link name} (max 64 chars for OpenAI), {@link parameters}
 * schema for input types, optional {@link output} schema for return type, and
 * {@link description} for LLM to understand the function's purpose.
 *
 * The built-in {@link validate} function checks LLM-generated arguments against
 * the schema, enabling auto-correction when the LLM makes type errors (e.g.,
 * returning `"123"` instead of `123`).
 *
 * Use {@link separated} when some parameters require human input (files,
 * passwords) via {@link ILlmApplication.IConfig.separate}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ILlmFunction {
  /**
   * Function name.
   *
   * @maxLength 64
   */
  name: string;

  /** Parameter types schema. */
  parameters: ILlmSchema.IParameters;

  /** Separated parameters (when {@link ILlmApplication.IConfig.separate} is set). */
  separated?: ILlmFunction.ISeparated;

  /** Return type schema (`undefined` if void). */
  output?: ILlmSchema | undefined;

  /** Function description for LLM to understand its purpose. */
  description?: string | undefined;

  /** Whether deprecated. */
  deprecated?: boolean | undefined;

  /** Category tags (from `@tag` JSDoc). */
  tags?: string[] | undefined;

  /**
   * Validates LLM-generated arguments.
   *
   * LLMs often make type errors (e.g., string instead of number). Use this to
   * provide validation feedback for auto-correction.
   */
  validate: (args: unknown) => IValidation<unknown>;
}
export namespace ILlmFunction {
  /** Separated parameters for LLM and human input. */
  export interface ISeparated {
    /** LLM-fillable parameters. */
    llm: ILlmSchema.IParameters;

    /** Human-required parameters (e.g., file uploads). */
    human: ILlmSchema.IParameters | null;

    /** Validates LLM portion of separated parameters. */
    validate?: ((args: unknown) => IValidation<unknown>) | undefined;
  }
}
