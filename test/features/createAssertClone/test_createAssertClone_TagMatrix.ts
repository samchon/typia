import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagMatrix = _test_assertClone(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
