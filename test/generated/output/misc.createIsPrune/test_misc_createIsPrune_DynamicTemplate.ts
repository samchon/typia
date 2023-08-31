import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_isPrune_DynamicTemplate = _test_misc_isPrune(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input: any): input is DynamicTemplate => {
    const is = (input: any): input is DynamicTemplate => {
        const $io0 = (input: any): boolean =>
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
                return true;
            });
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
        );
    };
    const prune = (input: DynamicTemplate): void => {
        const $po0 = (input: any): any => {
            Object.entries(input).forEach(([key, value]: any) => {
                if (undefined === value) return;
                if (RegExp(/^(prefix_(.*))/).test(key)) {
                }
                if (RegExp(/((.*)_postfix)$/).test(key)) {
                }
                if (
                    RegExp(
                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                ) {
                }
                if (
                    RegExp(
                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                ) {
                }
            });
            for (const key of Object.keys(input)) {
                if (
                    RegExp(/^(prefix_(.*))/).test(key) ||
                    RegExp(/((.*)_postfix)$/).test(key) ||
                    RegExp(
                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key) ||
                    RegExp(
                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});
