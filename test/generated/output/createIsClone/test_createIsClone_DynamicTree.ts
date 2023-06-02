import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_createIsClone_DynamicTree = _test_isClone(
    "DynamicTree",
    DynamicTree.generate,
    (input: any): typia.Primitive<DynamicTree> | null => {
        const is: any = (input: any): input is DynamicTree => {
            const $join: any = (typia.createIsClone as any).join;
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.sequence &&
                Number.isFinite(input.sequence) &&
                "object" === typeof input.children &&
                null !== input.children &&
                false === Array.isArray(input.children) &&
                $io1(input.children);
            const $io1: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io0(value)
                        );
                    return true;
                });
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone: any = (
            input: DynamicTree,
        ): typia.Primitive<DynamicTree> => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.sequence &&
                "object" === typeof input.children &&
                null !== input.children &&
                false === Array.isArray(input.children) &&
                $io1(input.children);
            const $io1: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io0(value)
                        );
                    return true;
                });
            const $join: any = (typia.createIsClone as any).join;
            const $co0: any = (input: any): any => ({
                id: input.id as any,
                sequence: input.sequence as any,
                children:
                    "object" === typeof input.children &&
                    null !== input.children
                        ? $co1(input.children)
                        : (input.children as any),
            });
            const $co1: any = (input: any): any => {
                const output: any = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $co0(value)
                                : (value as any);
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
    DynamicTree.SPOILERS,
);
