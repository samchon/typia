import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ToJsonNull = _test_clone("ToJsonNull", ToJsonNull.generate, (input) => ((input: ToJsonNull): typia.Primitive<ToJsonNull> => {
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? input.toJSON() : input;
})(input));
