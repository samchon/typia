import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagTuple } from "../../structures/TagTuple";

export const test_createAssertParse_TagTuple = _test_assertParse(
    "TagTuple",
    TagTuple.generate,
    typia.createAssertParse<TagTuple>(),
    TagTuple.SPOILERS,
);
