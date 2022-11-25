import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagArray = _test_assertStringify(
    "TagArray",
    TagArray.generate,
    (input) => TSON.assertStringify(input),
    TagArray.SPOILERS,
);