import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ToJsonAtomicUnion = _test_clone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.clone(input),
);