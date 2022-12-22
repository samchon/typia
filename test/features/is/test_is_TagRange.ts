import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is } from "../internal/_test_is";

export const test_is_TagRange = _test_is(
    "TagRange",
    TagRange.generate,
    (input) => typia.is(input),
    TagRange.SPOILERS,
);
