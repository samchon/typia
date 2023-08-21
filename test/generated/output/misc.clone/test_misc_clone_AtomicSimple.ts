import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_misc_clone_AtomicSimple = _test_misc_clone(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
    ((input: AtomicSimple): typia.Primitive<AtomicSimple> => {
        return Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            "string" === typeof input[2]
            ? ([input[0] as any, input[1] as any, input[2] as any] as any)
            : (input as any);
    })(input),
);
