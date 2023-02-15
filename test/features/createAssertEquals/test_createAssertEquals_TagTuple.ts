import typia from "typia";

import { TagTuple } from "../../structures/TagTuple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagTuple = _test_assertEquals(
    "TagTuple",
    TagTuple.generate,
    typia.createAssertEquals<TagTuple>(),
);
