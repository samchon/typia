import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagObjectUnion = _test_equals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.equals(input),
);
