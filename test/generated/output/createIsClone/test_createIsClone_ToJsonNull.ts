import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ToJsonNull } from "../../../structures/ToJsonNull";
export const test_createIsClone_ToJsonNull = _test_isClone("ToJsonNull", ToJsonNull.generate, (input: any): typia.Primitive<ToJsonNull> | null => { const is = (input: any): input is ToJsonNull => {
    const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ToJsonNull): typia.Primitive<ToJsonNull> => {
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? input.toJSON() as any : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; });
