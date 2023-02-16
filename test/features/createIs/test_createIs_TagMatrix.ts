import typia from "typia";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagMatrix = _test_is(
    "TagMatrix",
    TagMatrix.generate,
    typia.createIs<TagMatrix>(),
    TagMatrix.SPOILERS,
);
