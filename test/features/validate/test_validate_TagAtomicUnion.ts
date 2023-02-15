import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagAtomicUnion = _test_validate(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validate(input),
    TagAtomicUnion.SPOILERS,
);
