import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagTuple = _test_isParse(
    "TagTuple",
    TagTuple.generate,
    TSON.createIsParse<TagTuple>(),
    TagTuple.SPOILERS,
);
