import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_equals_DynamicTemplate = _test_equals(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
    ((input: any, _exceptionable: boolean = true): input is DynamicTemplate => {
        const $join = (typia.equals as any).join;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/^(prefix_(.*))/).test(key))
                    return "string" === typeof value;
                if (RegExp(/((.*)_postfix)$/).test(key))
                    return "string" === typeof value;
                if (
                    RegExp(
                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                )
                    return "number" === typeof value && Number.isFinite(value);
                if (
                    RegExp(
                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                )
                    return "boolean" === typeof value;
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
