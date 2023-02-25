import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_DynamicSimple = _test_isClone("DynamicSimple", DynamicSimple.generate, (input: any): typia.Primitive<DynamicSimple> | null => { const is = (input: any): input is DynamicSimple => {
    const $join = (typia.createIsClone as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "number" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const clone = (input: DynamicSimple): typia.Primitive<DynamicSimple> => {
    const $join = (typia.createIsClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, DynamicSimple.SPOILERS);
