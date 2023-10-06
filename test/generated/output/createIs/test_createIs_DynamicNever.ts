import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_createIs_DynamicNever = _test_is(
    "DynamicNever",
)<DynamicNever>(DynamicNever)((input: any): input is DynamicNever => {
    const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (RegExp(/(.*)/).test(key))
                return null !== value && undefined === value;
            return true;
        });
    return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
    );
});
