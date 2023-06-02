import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_createIsClone_DynamicUndefined = _test_isClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input: any): typia.Primitive<DynamicUndefined> | null => {
        const is: any = (input: any): input is DynamicUndefined => {
            const $join: any = (typia.createIsClone as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
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
        };
        const clone: any = (
            input: DynamicUndefined,
        ): typia.Primitive<DynamicUndefined> => {
            const $join: any = (typia.createIsClone as any).join;
            const $co0: any = (input: any): any => {
                const output: any = {} as any;
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
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    DynamicUndefined.SPOILERS,
);
