import typia from "../../../../src";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_isClone_DynamicTree = _test_isClone("DynamicTree", DynamicTree.generate, (input) => ((input: any): typia.Primitive<DynamicTree> | null => { const is = (input: any): input is DynamicTree => {
    const $join = (typia.isClone as any).join;
    const $io0 = (input: any): boolean => "string" === typeof input.id && ("number" === typeof input.sequence && Number.isFinite(input.sequence)) && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
    const $io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "object" === typeof value && null !== value && $io0(value);
        return true;
    });
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: DynamicTree): typia.Primitive<DynamicTree> => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && "number" === typeof input.sequence && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
    const $io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "object" === typeof value && null !== value && $io0(value);
        return true;
    });
    const $join = (typia.isClone as any).join;
    const $co0 = (input: any): any => ({
        id: input.id as any,
        sequence: input.sequence as any,
        children: "object" === typeof input.children && null !== input.children ? $co1(input.children) : input.children as any
    });
    const $co1 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = "object" === typeof value && null !== value ? $co0(value) : value as any;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), DynamicTree.SPOILERS);
