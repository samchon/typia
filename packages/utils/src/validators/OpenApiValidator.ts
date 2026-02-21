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
 * - {@link create}: Create reusable validator function from schema
 * - {@link validate}: One-shot validation with inline schema
 *
 * Set `equals: true` to reject objects with extra properties (strict mode).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace OpenApiValidator {
  export const create =
    (props: {
      components: OpenApi.IComponents;
      schema: OpenApi.IJsonSchema;
      required: boolean;
      equals?: boolean;
    }) =>
    (value: unknown): IValidation<unknown> =>
      validate({ ...props, value });

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
    const reportable = (path: string): boolean => {
      if (array.length === 0) return true;
      const last: string = array[array.length - 1]!.path;
      return (
        path.length > last.length || last.substring(0, path.length) !== path
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
