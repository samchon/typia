import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagTuple = _test_assertParse(
    "TagTuple",
    TagTuple.generate,
    TSON.createAssertParse<TagTuple>(),
    TagTuple.SPOILERS,
);
