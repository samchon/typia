import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_createIs_DynamicTemplate = _test_is(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input: any): input is DynamicTemplate => {
        const $join = (typia.createIs as any).join;
        const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/^(prefix_(.*))/).test(key))
                    return "string" === typeof value;
                if (RegExp(/((.*)_postfix)$/).test(key))
                    return "string" === typeof value;
                if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                    return "number" === typeof value && Number.isFinite(value);
                if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                    return "boolean" === typeof value;
                return true;
            });
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
        );
    },
    DynamicTemplate.SPOILERS,
);
