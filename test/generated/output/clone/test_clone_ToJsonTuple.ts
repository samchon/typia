import typia from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ToJsonTuple = _test_clone("ToJsonTuple", ToJsonTuple.generate, (input) => ((input: ToJsonTuple): typia.Primitive<ToJsonTuple> => {
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
})(input));
