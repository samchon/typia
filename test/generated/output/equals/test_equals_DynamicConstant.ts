import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_equals_DynamicConstant = _test_equals(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is { a: number; b: number; c: number; d: number } => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.a &&
                Number.isFinite(input.a) &&
                "number" === typeof input.b &&
                Number.isFinite(input.b) &&
                "number" === typeof input.c &&
                Number.isFinite(input.c) &&
                "number" === typeof input.d &&
                Number.isFinite(input.d) &&
                (4 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["a", "b", "c", "d"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        })(input),
);
