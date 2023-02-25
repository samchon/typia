import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ToJsonAtomicSimple = _test_clone("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input: ToJsonAtomicSimple): typia.Primitive<ToJsonAtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && true && true && true) ? [
        "object" === typeof input[0] && null !== input[0] && "function" === typeof input[0].toJSON ? input[0].toJSON() : input[0],
        "object" === typeof input[1] && null !== input[1] && "function" === typeof input[1].toJSON ? input[1].toJSON() : input[1],
        "object" === typeof input[2] && null !== input[2] && "function" === typeof input[2].toJSON ? input[2].toJSON() : input[2]
    ] : input;
});
