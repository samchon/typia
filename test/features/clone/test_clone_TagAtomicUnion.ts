import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TagAtomicUnion = _test_clone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.clone(input),
);
