import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagAtomicUnion = _test_validateEquals(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validateEquals(input),
);
