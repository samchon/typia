import typia from "typia";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ConstantAtomicUnion = _test_clone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.clone(input),
);
