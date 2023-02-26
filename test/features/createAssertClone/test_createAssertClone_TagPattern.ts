import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagPattern } from "../../structures/TagPattern";

export const test_createAssertClone_TagPattern = _test_assertClone(
    "TagPattern",
    TagPattern.generate,
    typia.createAssertClone<TagPattern>(),
    TagPattern.SPOILERS,
);
