import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagRange = _test_assertStringify(
    "TagRange",
    TagRange.generate,
    (input) => TSON.assertStringify(input),
    TagRange.SPOILERS,
);
