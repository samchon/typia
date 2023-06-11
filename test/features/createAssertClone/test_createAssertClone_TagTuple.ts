import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_TagTuple = _test_assertClone(
    "TagTuple",
    TagTuple.generate,
    typia.createAssertClone<TagTuple>(),
    TagTuple.SPOILERS,
);
