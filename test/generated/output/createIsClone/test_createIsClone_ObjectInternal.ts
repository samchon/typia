import typia from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_createIsClone_ObjectInternal = _test_isClone("ObjectInternal", ObjectInternal.generate, (input: any): typia.Primitive<ObjectInternal> | null => { const is = (input: any): input is ObjectInternal => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name);
}; const clone = (input: ObjectInternal): typia.Primitive<ObjectInternal> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectInternal.SPOILERS);
