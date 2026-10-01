import { IValidation, OpenApi } from "@typia/interface";

import { OpenApiStationValidator } from "./internal/OpenApiStationValidator";

/**
 * OpenAPI JSON Schema validator.
 *
 * `OpenApiValidator` validates runtime data against {@link OpenApi.IJsonSchema}
 * definitions. Returns {@link IValidation} with detailed error paths and
 * expected types.
 *
 * Primary use case: Validating LLM-generated function call arguments. LLMs
 * frequently make type errors (e.g., `"123"` instead of `123`). Use the
 * validation errors to provide feedback and retry.
 *
 * Functions:
 *
 * - {@link create}: Create reusable validator function from schema
 * - {@link validate}: One-shot validation with inline schema
 *
 * Set `equals: true` to reject extra properties on a closed object (strict
 * mode). An object whose `additionalProperties` opens it — `true`, or a schema
 * constraining the extra values — declares undeclared keys to be legitimate
 * members, so `equals` does not close it.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation A value is validated against an emended schema by one recursive walk that reports every violation with its path, expected type name and value, instead of stopping at the first, which is what an LLM needs to correct several mistakes in one turn. `equals` closes only objects that declare no additional properties, so one document can mix open and closed objects.
 * @evidence contracts/common.md#clear-and-simple-design A thin namespace over the station validator, with a path-aware reporter; each schema kind has its own validator module and the namespace only collects the errors.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The validator reports data errors as values and does not throw for them, and it does not special-case any schema or consumer. It does not handle an invalid `pattern` string, which makes the regular expression constructor throw.
 * @evidence contracts/common.md#meaningful-documentation The comment states the purpose, the two functions and the meaning of `equals`.
 */
export namespace OpenApiValidator {
  /**
   * Create a reusable validator for one schema.
   *
   * @param props.components Components used to resolve references
   * @param props.schema Schema to validate against
   * @param props.required Whether `undefined` is rejected at the root
   * @param props.equals Whether superfluous properties of closed objects are
   *   rejected
   *
   * @returns Function that validates a value and returns its result
   *
   * @evidence contracts/common.md#principled-implementation The returned function closes over the components, schema and flags and validates each value through `validate`, so a validator built once gives the same answers as one-shot calls.
   * @evidence contracts/common.md#clear-and-simple-design A curried one-line wrapper with no cache of its own.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond validate.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameters and result.
   */
  export const create =
    (props: {
      components: OpenApi.IComponents;
      schema: OpenApi.IJsonSchema;
      required: boolean;
      equals?: boolean;
    }) =>
    (value: unknown): IValidation<unknown> =>
      validate({ ...props, value });

  /**
   * Validate one value against a schema.
   *
   * Every violation is collected, with its path, expected type and value, but
   * an error is not reported when its path is an ancestor or descendant of the
   * previously reported one, so one failing leaf does not also report its
   * parents.
   *
   * @param props.components Components used to resolve references
   * @param props.schema Schema to validate against
   * @param props.value Value to validate
   * @param props.required Whether `undefined` is rejected at the root
   * @param props.equals Whether superfluous properties of closed objects are
   *   rejected
   *
   * @returns Success with the value, or failure with the collected errors
   *
   * @evidence contracts/common.md#principled-implementation Errors are collected in a list through a reporter that keeps an error only when it is exceptionable and its path is neither an ancestor nor a descendant of the last kept one, so a failing leaf is not reported again as every enclosing value. The result is a success carrying the value or a failure carrying the value and errors, and an `undefined` value gets a default description telling the model to fill it.
   * @evidence contracts/common.md#clear-and-simple-design One function and a private reporter whose ancestor test is a small local predicate.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The suppression rule is path-based and general and not tuned to a document.
   * @evidence contracts/common.md#meaningful-documentation The doc states the collection, the suppression of related paths and the result.
   */
  export const validate = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    value: unknown;
    required: boolean;
    equals?: boolean;
  }): IValidation<unknown> => {
    const errors: IValidation.IError[] = [];
    OpenApiStationValidator.validate({
      ...props,
      path: "$input",
      exceptionable: true,
      report: createReporter(errors),
      equals: props.equals ?? false,
    });
    return errors.length === 0
      ? {
          success: true,
          data: props.value,
        }
      : {
          success: false,
          data: props.value,
          errors,
        };
  };

  const createReporter = (array: IValidation.IError[]) => {
    const isAncestor = (ancestor: string, descendant: string): boolean =>
      descendant === ancestor ||
      descendant.startsWith(`${ancestor}.`) ||
      descendant.startsWith(`${ancestor}[`);
    const reportable = (path: string): boolean => {
      if (array.length === 0) return true;
      const last: string = array[array.length - 1]!.path;
      return (
        isAncestor(path, last) === false && isAncestor(last, path) === false
      );
    };
    return (
      error: IValidation.IError & {
        exceptionable: boolean;
      },
    ): false => {
      if (error.exceptionable && reportable(error.path)) {
        const info: IValidation.IError = {
          path: error.path,
          expected: error.expected,
          value: error.value,
          description: error.description,
        };
        if (error.value === undefined)
          info.description ??= [
            "The value at this path is `undefined`.",
            "",
            `Please fill the \`${error.expected}\` typed value next time.`,
          ].join("\n");
        array.push(info);
      }
      return false;
    };
  };
}
