import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
export const test_createClone_ToJsonAtomicSimple = _test_clone("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input: ToJsonAtomicSimple): typia.Primitive<ToJsonAtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && true && true && true) ? [
        "object" === typeof input[0] && null !== input[0] && "function" === typeof input[0].toJSON ? input[0].toJSON() as any : input[0] as any,
        "object" === typeof input[1] && null !== input[1] && "function" === typeof input[1].toJSON ? input[1].toJSON() as any : input[1] as any,
        "object" === typeof input[2] && null !== input[2] && "function" === typeof input[2].toJSON ? input[2].toJSON() as any : input[2] as any
    ] as any : input as any;
});
