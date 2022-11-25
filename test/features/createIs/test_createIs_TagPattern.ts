import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagPattern = _test_is(
    "TagPattern",
    TagPattern.generate,
    TSON.createIs<TagPattern>(),
    TagPattern.SPOILERS,
);
