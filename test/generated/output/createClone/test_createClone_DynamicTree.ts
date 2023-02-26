import typia from "../../../../src";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicTree = _test_clone(
    "DynamicTree",
    DynamicTree.generate,
    (input: DynamicTree): typia.Primitive<DynamicTree> => {
        const $join = (typia.createClone as any).join;
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "number" === typeof input.sequence &&
            "object" === typeof input.children &&
            null !== input.children &&
            false === Array.isArray(input.children) &&
            $io1(input.children);
        const $io1 = (input: any): boolean =>
            Object.keys(input).every((key) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/(.*)/).test(key))
                    return (
                        "object" === typeof value &&
                        null !== value &&
                        $io0(value)
                    );
                return true;
            });
        const $co0 = (input: any): any => ({
            id: input.id as any,
            sequence: input.sequence as any,
            children:
                "object" === typeof input.children && null !== input.children
                    ? $co1(input.children)
                    : (input.children as any),
        });
        const $co1 = (input: any): any => {
            const output = {} as any;
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
    },
);
