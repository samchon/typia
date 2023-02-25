import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ToJsonDouble = _test_isClone("ToJsonDouble", ToJsonDouble.generate, (input: any): typia.Primitive<Parent> | null => { const is = (input: any): input is Parent => {
    return "object" === typeof input && null !== input && true;
}; const clone = (input: Parent): typia.Primitive<Parent> => {
    const $co0 = (input: any) => ({
        id: input.id,
        flag: input.flag
    });
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? "object" === typeof input.toJSON() && null !== input.toJSON() ? $co0(input.toJSON()) : input.toJSON() : input;
}; if (!is(input))
    return null; const output = clone(input); return output; });
