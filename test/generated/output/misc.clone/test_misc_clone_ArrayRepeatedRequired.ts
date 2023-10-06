import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_misc_clone_ArrayRepeatedRequired = _test_misc_clone(
    "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
    ((input: ArrayRepeatedRequired): typia.Resolved<ArrayRepeatedRequired> => {
        const $ia0 = (input: any): any =>
            input.every(
                (elem: any) =>
                    null !== elem &&
                    undefined !== elem &&
                    ("string" === typeof elem ||
                        "number" === typeof elem ||
                        (Array.isArray(elem) && ($ia0(elem) || false))),
            );
        const $cp0 = (input: any) => $ca0(input);
        const $ca0 = (input: any): any =>
            input.map((elem: any) =>
                Array.isArray(elem) ? $cp0(elem) : (elem as any),
            );
        return Array.isArray(input) ? $cp0(input) : (input as any);
    })(input),
);
