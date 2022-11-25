import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagTuple = _test_is(
    "TagTuple",
    TagTuple.generate,
    TSON.createIs<TagTuple>(),
    TagTuple.SPOILERS,
);
