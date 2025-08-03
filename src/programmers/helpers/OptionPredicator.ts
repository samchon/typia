import { ITransformOptions } from "../../transformers/ITransformOptions";
import { ITypiaContext } from "../../transformers/ITypiaContext";

export namespace OptionPredicator {
  export const numeric = (options: ITransformOptions): boolean =>
    finite(options) || options.numeric === true;

  export const functional = (options: ITransformOptions): boolean =>
    options.functional === true;

  export const finite = (options: ITransformOptions): boolean =>
    options.finite === true;

  export const undefined = (options: ITransformOptions): boolean =>
    options.undefined !== false;

  export const exactOptionalPropertyTypes = (
    options: ITransformOptions,
    context: ITypiaContext,
  ): boolean => {
    // If explicitly set in options, use that value
    if (typeof options.exactOptionalPropertyTypes === "boolean") {
      return options.exactOptionalPropertyTypes;
    }
    // Otherwise, read from TypeScript compiler options
    return context.compilerOptions.exactOptionalPropertyTypes === true;
  };
}
