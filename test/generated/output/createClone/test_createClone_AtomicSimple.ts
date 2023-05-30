import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_createClone_AtomicSimple = _test_clone("AtomicSimple", AtomicSimple.generate, (input: AtomicSimple): typia.Primitive<AtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && "boolean" === typeof input[0] && "number" === typeof input[1] && "string" === typeof input[2]) ? [
        input[0] as any,
        input[1] as any,
        input[2] as any
    ] as any : input as any;
});
