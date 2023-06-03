import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_equals_DynamicUnion = _test_equals(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is DynamicUnion => {
            const $join = (typia.equals as any).join;
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/^-?\d+\.?\d*$/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return "string" === typeof value;
                    if (
                        RegExp(
                            /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                        ).test(key)
                    )
                        return (
                            "number" === typeof value && Number.isFinite(value)
                        );
                    return false;
                });
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input, true)
            );
        })(input),
);
