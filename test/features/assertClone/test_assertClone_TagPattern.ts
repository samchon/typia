import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagPattern } from "../../structures/TagPattern";

export const test_assertClone_TagPattern = _test_assertClone(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assertClone(input),
    TagPattern.SPOILERS,
);
