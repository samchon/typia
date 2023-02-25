import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_TagAtomicUnion = _test_random(
    "TagAtomicUnion",
    () => typia.random<TagAtomicUnion>(),
    typia.createAssert<typia.Primitive<TagAtomicUnion>>(),
);
