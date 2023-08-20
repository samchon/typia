import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assertClone_ToJsonAtomicUnion = _test_assertClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.assertClone<ToJsonAtomicUnion>(input),
);
