import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_clone_AtomicIntersection = _test_clone(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) =>
        ((input: AtomicIntersection): typia.Primitive<AtomicIntersection> => {
            return Array.isArray(input) &&
                input.length === 3 &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                "string" === typeof input[2]
                ? ([input[0] as any, input[1] as any, input[2] as any] as any)
                : (input as any);
        })(input),
);
