import { ITransformOptions } from "../../transformers/ITransformOptions";

export namespace OptionPredicator {
    export function functional(options: ITransformOptions): boolean {
        return options.functional !== false;
    }

    export function numeric(
        options: ITransformOptions,
        from: "checker" | "stringify",
    ): boolean {
        return (
            options.numeric === undefined ||
            options.numeric === true ||
            options.numeric === from
        );
    }
}
