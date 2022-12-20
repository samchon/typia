import { ITransformOptions } from "../../transformers/ITransformOptions";

export namespace OptionPredicator {
    export function functional(options: ITransformOptions): boolean {
        return options.functional === true;
    }

    export function numeric(options: ITransformOptions): boolean {
        return options.numeric !== false;
    }
}
