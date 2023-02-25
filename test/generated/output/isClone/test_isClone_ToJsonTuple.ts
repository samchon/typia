import typia from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ToJsonTuple = _test_isClone("ToJsonTuple", ToJsonTuple.generate, (input) => ((input: any): typia.Primitive<ToJsonTuple> | null => { const is = (input: any): input is ToJsonTuple => {
    const $io0 = (input: any) => true;
    const $io1 = (input: any) => true;
    const $io2 = (input: any) => true;
    const $io3 = (input: any) => true;
    return Array.isArray(input) && (input.length === 4 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])) && ("object" === typeof input[3] && null !== input[3] && $io3(input[3])));
}; const clone = (input: ToJsonTuple): typia.Primitive<ToJsonTuple> => {
    const $co0 = (input: any) => ({
        code: input.code,
        name: input.name
    });
    return Array.isArray(input) && (input.length === 4 && true && true && true && true) ? [
        "object" === typeof input[0] && null !== input[0] && "function" === typeof input[0].toJSON ? input[0].toJSON() : input[0],
        "object" === typeof input[1] && null !== input[1] && "function" === typeof input[1].toJSON ? input[1].toJSON() : input[1],
        "object" === typeof input[2] && null !== input[2] && "function" === typeof input[2].toJSON ? input[2].toJSON() : input[2],
        "object" === typeof input[3] && null !== input[3] && "function" === typeof input[3].toJSON ? "object" === typeof input[3].toJSON() && null !== input[3].toJSON() ? $co0(input[3].toJSON()) : input[3].toJSON() : input[3]
    ] : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input));
