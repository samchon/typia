import { ITransformOptions } from "../../transformers/ITransformOptions";

export namespace OptionPredicator {
    export function numeric(options: ITransformOptions): boolean {
        return finite(options) || options.numeric === true;
    }

    export function functional(options: ITransformOptions): boolean {
        return options.functional === true;
    }

    export function finite(options: ITransformOptions): boolean {
        return options.finite === true;
    }

    export function undefined(options: ITransformOptions): boolean {
        return options.undefined !== false;
    }
}
