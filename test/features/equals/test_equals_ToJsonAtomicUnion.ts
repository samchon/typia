import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonAtomicUnion = _test_equals(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.equals(input),
);
