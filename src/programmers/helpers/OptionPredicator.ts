import { ITransformOptions } from "../../transformers/ITransformOptions";

export namespace OptionPredicator {
  export const numeric = (options: ITransformOptions): boolean =>
    finite(options) || options.numeric === true;

  export const functional = (options: ITransformOptions): boolean =>
    options.functional === true;

  export const finite = (options: ITransformOptions): boolean =>
    options.finite === true;

  export const undefined = (options: ITransformOptions): boolean =>
    options.undefined !== false;
}
