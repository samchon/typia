import { OpenApi } from "../OpenApi";
import { IValidation } from "../structures/IValidation";
import { OpenApiStationValidator } from "./internal/OpenApiStationValidator";

export namespace OpenApiValidator {
  export const create =
    (prop: {
      components: OpenApi.IComponents;
      schema: OpenApi.IJsonSchema;
      required: boolean;
      equals?: boolean;
    }) =>
    (value: unknown): IValidation<unknown> =>
      validate({ ...prop, value });

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
