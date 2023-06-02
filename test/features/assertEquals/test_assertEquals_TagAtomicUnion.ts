import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_TagAtomicUnion = _test_assertEquals(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.assertEquals(input),
);
