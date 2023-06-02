import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagRange } from "../../structures/TagRange";

export const test_assertClone_TagRange = _test_assertClone(
    "TagRange",
    TagRange.generate,
    (input) => typia.assertClone(input),
    TagRange.SPOILERS,
);
