import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagPattern } from "../../structures/TagPattern";

export const test_createIs_TagPattern = _test_is(
    "TagPattern",
    TagPattern.generate,
    typia.createIs<TagPattern>(),
    TagPattern.SPOILERS,
);
