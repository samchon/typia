import { IValidation, OpenApi } from "@typia/interface";

/**
 * State shared by the schema validators while one value is checked.
 *
 * The context carries the schema being checked, the value and its path, the
 * type name used in messages, and the reporter. A validator spreads the context
 * into a copy to descend into a child or to change the expected name.
 *
 * @evidence contracts/common.md#principled-implementation A validator needs the components for references, the schema, value and path being checked, the type name for messages, the reporter and the flags `equals` and `required`; a copy is spread to change one of them, so descent never mutates the parent's context.
 * @evidence contracts/common.md#clear-and-simple-design One record shared by every validator module, with the schema type as a parameter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
 * @evidence contracts/common.md#meaningful-documentation The doc states the role of the context and the copy-on-descent rule, and the reporter was documented.
 */
export interface IOpenApiValidatorContext<Schema extends OpenApi.IJsonSchema> {
  /** Local component schemas used to resolve references. */
  components: OpenApi.IComponents;

  /** Schema for this step of the validation walk. */
  schema: Schema;

  /** Caller value being checked without coercion. */
  value: unknown;

  /** Root-relative value path for error reporting. */
  path: string;

  /**
   * Report a violation.
   *
   * The reporter keeps the error only when it is exceptionable and its path is
   * not related to the last kept path. It always returns `false`, so a
   * validator can return it directly.
   *
   * @evidence contracts/common.md#principled-implementation The reporter takes an error with an `exceptionable` flag and always returns false, so a validator can write `check || ctx.report(...)`; the flag lets one-sided probes, such as union branch discrimination, run without producing errors.
   * @evidence contracts/common.md#clear-and-simple-design A function-valued member of the context.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The always-false result is the contract, not a hack around a missing exception path.
   * @evidence contracts/common.md#meaningful-documentation The doc states the keep rule and the false result.
   */
  report: (
    error: IValidation.IError & {
      exceptionable: boolean;
    },
  ) => false;

  /** Whether this step may retain reported errors, rather than only probe. */
  exceptionable: boolean;

  /** Schema-derived type description to include in an error. */
  expected: string;

  /** Whether undeclared keys on a closed object are rejected. */
  equals: boolean;

  /** Whether undefined is rejected at the current value position. */
  required: boolean;
}
