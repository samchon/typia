import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_createEquals_DynamicTemplate = _test_equals(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(
    (input: any, _exceptionable: boolean = true): input is DynamicTemplate => {
        const $join = (typia.createEquals as any).join;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                    return "string" === typeof value;
                if (
                    "string" === typeof key &&
                    RegExp(/(.*)_postfix$/).test(key)
                )
                    return "string" === typeof value;
                if (
                    "string" === typeof key &&
                    RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                        key,
                    )
                )
                    return "number" === typeof value && Number.isFinite(value);
                if (
                    "string" === typeof key &&
                    RegExp(
                        /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
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
    },
);
