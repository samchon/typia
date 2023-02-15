import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagMatrix = _test_equals(
    "TagMatrix",
    TagMatrix.generate,
    typia.createEquals<TagMatrix>(),
);
