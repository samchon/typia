import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_createIsClone_DynamicNever = _test_isClone(
    "DynamicNever",
    DynamicNever.generate,
    (input: any): typia.Primitive<DynamicNever> | null => {
        const is: any = (input: any): input is DynamicNever => {
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
            input: DynamicNever,
        ): typia.Primitive<DynamicNever> => {
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
    DynamicNever.SPOILERS,
);
