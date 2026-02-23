import { ILlmSchema } from "./ILlmSchema";
import { IValidation } from "./IValidation";

/**
<<<<<<< HEAD
 * LLM function metadata.
 *
 * `ILlmFunction` is an interface representing a function metadata, which has
 * been used for the LLM (Language Large Model) function calling. Also, it's a
 * function structure containing the function {@link name}, {@link parameters} and
 * {@link output return type}.
 *
 * If you provide this `ILlmFunction` data to the LLM provider like "OpenAI",
 * the "OpenAI" will compose a function arguments by analyzing conversations
 * with the user. With the LLM composed arguments, you can execute the function
 * and get the result.
 *
 * By the way, do not ensure that LLM will always provide the correct arguments.
 * The LLM of present age is not perfect, so that you would better to validate
 * the arguments before executing the function. I recommend you to validate the
 * arguments before execution by using
 * [`typia`](https://github.com/samchon/typia) library.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @reference https://platform.openai.com/docs/guides/function-calling
 */
export interface ILlmFunction {
  /**
   * Representative name of the function.
=======
 * LLM function calling metadata.
 *
 * `ILlmFunction` describes a single callable function for LLM agents. Generated
 * as part of {@link ILlmApplication} by `typia.llm.application<App>()`.
 *
 * Contains the function {@link name} (max 64 chars for OpenAI),
 * {@link parameters} schema for input types, optional {@link output} schema for
 * return type, and {@link description} for LLM to understand the function's
 * purpose.
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
   * Function name for LLM invocation.
   *
   * The identifier used by the LLM to call this function. Must be unique within
   * the application. OpenAI limits function names to 64 characters.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @maxLength 64
   */
  name: string;

<<<<<<< HEAD
  /** List of parameter types. */
  parameters: ILlmSchema.IParameters;

  /**
   * Collection of separated parameters.
   *
   * Filled only when {@link ILlmApplication.IConfig.separate} is configured.
=======
  /**
   * Schema for function parameters.
   *
   * Defines the expected argument types as a JSON Schema object. Contains
   * `$defs` for shared type definitions and `properties` for each named
   * parameter.
   */
  parameters: ILlmSchema.IParameters;

  /**
   * Parameters split between LLM and human input.
   *
   * Present when {@link ILlmApplication.IConfig.separate} is configured. Allows
   * separating parameters that the LLM can fill from those requiring human
   * input (e.g., file uploads, passwords).
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  separated?: ILlmFunction.ISeparated;

  /**
<<<<<<< HEAD
   * Expected return type.
   *
   * If the function returns nothing (`void`), the `output` value would be
   * `undefined`.
=======
   * Schema for the return type.
   *
   * Defines the expected output type as a JSON Schema. `undefined` when the
   * function returns `void` or has no meaningful return value.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  output?: ILlmSchema | undefined;

  /**
<<<<<<< HEAD
   * Description of the function.
   *
   * For reference, the `description` is a critical property for teaching the
   * purpose of the function to LLMs (Large Language Models). LLMs use this
   * description to determine which function to call.
   *
   * Also, when the LLM converses with the user, the `description` explains the
   * function to the user. Therefore, the `description` property has the highest
   * priority and should be carefully considered.
=======
   * Human-readable function description.
   *
   * Explains what the function does, when to use it, and any important
   * considerations. This description is crucial for LLMs to understand when to
   * invoke this function. Extracted from JSDoc comments.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  description?: string | undefined;

  /**
<<<<<<< HEAD
   * Whether the function is deprecated or not.
   *
   * If the `deprecated` is `true`, the function is not recommended to use.
   *
   * LLM (Large Language Model) may not use the deprecated function.
=======
   * Whether this function is deprecated.
   *
   * When `true`, indicates the function should no longer be used. LLMs may
   * still invoke deprecated functions but should prefer non-deprecated
   * alternatives when available.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  deprecated?: boolean | undefined;

  /**
<<<<<<< HEAD
   * Category tags for the function.
   *
   * You can fill this property by the `@tag ${name}` comment tag.
=======
   * Category tags for function organization.
   *
   * Extracted from `@tag` JSDoc annotations. Useful for grouping related
   * functions and filtering the function list.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  tags?: string[] | undefined;

  /**
<<<<<<< HEAD
   * Validate function of the arguments.
   *
   * You know what? LLM (Large Language Model) like OpenAI takes a lot of
   * mistakes when composing arguments in function calling. Even though `number`
   * like simple type is defined in the {@link parameters} schema, LLM often
   * fills it just by a `string` typed value.
   *
   * In that case, you have to give a validation feedback to the LLM by using
   * this `validate` function. The `validate` function will return detailed
   * information about every type errors about the arguments.
   *
   * And in my experience, OpenAI's `gpt-4o-mini` model tends to construct an
   * invalid function calling arguments at the first trial about 50% of the
   * time. However, if correct it through this `validate` function, the success
   * rate soars to 99% at the second trial, and I've never failed at the third
   * trial.
   *
   * > If you've {@link separated} parameters, use the
   * > {@link ILlmFunction.ISeparated.validate} function instead when validating
   * > the LLM composed arguments.
   *
   * > In that case, This `validate` function would be meaningful only when you've
   * > merged the LLM and human composed arguments by
   * > {@link HttpLlm.mergeParameters} function.
   *
   * @param args Arguments to validate
   * @returns Validation result
=======
   * Validates LLM-generated arguments against the schema.
   *
   * LLMs frequently make type errors such as returning strings instead of
   * numbers or missing required properties. Use this validator to check
   * arguments before execution.
   *
   * When validation fails, use `stringifyValidationFailure()` from
   * `@typia/utils` to format the error for LLM feedback. The formatted output
   * shows the invalid JSON with inline error comments, helping the LLM
   * understand and correct its mistakes in the next turn.
   *
   * @param args The arguments generated by the LLM
   * @returns Validation result with success status and any errors
   * @see stringifyValidationFailure Format errors for LLM auto-correction
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  validate: (args: unknown) => IValidation<unknown>;
}
export namespace ILlmFunction {
<<<<<<< HEAD
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
     * Validate function of the separated arguments.
     *
     * If LLM part of separated parameters has some properties, this `validate`
     * function will be filled for the {@link llm} type validation.
     *
     * > You know what? LLM (Large Language Model) like OpenAI takes a lot of
     * > mistakes when composing arguments in function calling. Even though
     * > `number` like simple type is defined in the {@link parameters} schema, LLM
     * > often fills it just by a `string` typed value.
     *
     * > In that case, you have to give a validation feedback to the LLM by using
     * > this `validate` function. The `validate` function will return detailed
     * > information about every type errors about the arguments.
     *
     * > And in my experience, OpenAI's `gpt-4o-mini` model tends to construct an
     * > invalid function calling arguments at the first trial about 50% of the
     * > time. However, if correct it through this `validate` function, the
     * > success rate soars to 99% at the second trial, and I've never failed at
     * > the third trial.
     *
     * @param args Arguments to validate
     * @returns Validate result
=======
  /**
   * Separated parameter schemas for hybrid LLM/human input.
   *
   * When a function has parameters that cannot or should not be filled by the
   * LLM (e.g., file uploads, passwords, sensitive data), the parameters are
   * split into two schemas.
   */
  export interface ISeparated {
    /**
     * Parameters the LLM should fill.
     *
     * Contains only the parameters that are safe and appropriate for the LLM to
     * generate values for.
     */
    llm: ILlmSchema.IParameters;

    /**
     * Parameters requiring human input.
     *
     * Contains parameters that must be provided by the user directly, such as
     * file uploads, passwords, or other sensitive data. `null` when all
     * parameters can be filled by the LLM.
     */
    human: ILlmSchema.IParameters | null;

    /**
     * Validates the LLM portion of separated parameters.
     *
     * Validates only the LLM-fillable portion, allowing human parameters to be
     * validated separately with appropriate handling.
     *
     * When validation fails, use `stringifyValidationFailure()` from
     * `@typia/utils` to format the error for LLM feedback.
     *
     * @see stringifyValidationFailure Format errors for LLM auto-correction
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    validate?: ((args: unknown) => IValidation<unknown>) | undefined;
  }
}
