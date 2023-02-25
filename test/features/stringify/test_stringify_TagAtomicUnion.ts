import typia from "../../../src";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagAtomicUnion = _test_stringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.stringify(input),
);
