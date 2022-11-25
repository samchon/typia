import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagObjectUnion = _test_assertStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => TSON.assertStringify(input),
    TagObjectUnion.SPOILERS,
);
