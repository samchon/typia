import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_createIs_DynamicUndefined = _test_is(
    "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)(
    (input: any): input is DynamicUndefined => {
        const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (true) return null !== value && undefined === value;
                return true;
            });
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
        );
    },
);
