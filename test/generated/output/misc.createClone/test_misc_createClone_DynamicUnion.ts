import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_misc_createClone_DynamicUnion = _test_misc_clone(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(
    (input: DynamicUnion): typia.Resolved<DynamicUnion> => {
        const $co0 = (input: any): any => {
            const output = {} as any;
            for (const [key, value] of Object.entries(input)) {
                if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
                    output[key] = value as any;
                    continue;
                }
                if (RegExp(/^(prefix_(.*))/).test(key)) {
                    output[key] = value as any;
                    continue;
                }
                if (RegExp(/((.*)_postfix)$/).test(key)) {
                    output[key] = value as any;
                    continue;
                }
                if (
                    RegExp(
                        /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                ) {
                    output[key] = value as any;
                    continue;
                }
            }
            return output;
        };
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
