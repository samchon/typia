import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ToJsonNull = _test_isClone("ToJsonNull", ToJsonNull.generate, (input) => ((input: any): typia.Primitive<ToJsonNull> | null => { const is = (input: any): input is ToJsonNull => {
    const $io0 = (input: any) => true;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ToJsonNull): typia.Primitive<ToJsonNull> => {
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? input.toJSON() : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input));
