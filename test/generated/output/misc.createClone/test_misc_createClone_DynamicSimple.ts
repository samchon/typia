import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_misc_clone_DynamicSimple = _test_misc_clone<DynamicSimple>(
    DynamicSimple,
)((input: DynamicSimple): typia.Primitive<DynamicSimple> => {
    const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (RegExp(/(.*)/).test(key)) return "number" === typeof value;
            return true;
        });
    const $join = (typia.misc.createClone as any).join;
    const $co0 = (input: any): any => ({
        value:
            "object" === typeof input.value && null !== input.value
                ? $co1(input.value)
                : (input.value as any),
    });
    const $co1 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
            if (RegExp(/(.*)/).test(key)) {
                output[key] = value as any;
                continue;
            }
        }
        return output;
    };
    return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
});
