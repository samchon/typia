import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ObjectDynamic = _test_isClone("ObjectDynamic", ObjectDynamic.generate, (input: any): typia.Primitive<ObjectDynamic> | null => { const is = (input: any): input is ObjectDynamic => {
    const $join = (typia.createIsClone as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "string" === typeof value || "number" === typeof value || "boolean" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const clone = (input: ObjectDynamic): typia.Primitive<ObjectDynamic> => {
    const $join = (typia.createIsClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectDynamic.SPOILERS);
