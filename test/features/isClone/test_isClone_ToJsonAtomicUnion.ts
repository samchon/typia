import typia from "../../../src";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ToJsonAtomicUnion = _test_isClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.isClone(input),
);
