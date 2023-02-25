import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectGenericAlias = _test_isClone("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: any): typia.Primitive<Alias> | null => { const is = (input: any): input is Alias => {
    return "object" === typeof input && null !== input && "string" === typeof input.value;
}; const clone = (input: Alias): typia.Primitive<Alias> => {
    const $co0 = (input: any) => ({
        value: input.value
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectGenericAlias.SPOILERS);
