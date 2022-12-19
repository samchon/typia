import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagRange = _test_equals(
    "TagRange",
    TagRange.generate,
    (input) => typia.equals(input),
);