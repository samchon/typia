import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_TagTuple = _test_assertStringify(
    "TagTuple",
    TagTuple.generate,
    typia.createAssertStringify<TagTuple>(),
    TagTuple.SPOILERS,
);
