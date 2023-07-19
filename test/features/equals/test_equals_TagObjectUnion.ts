import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_equals_TagObjectUnion = _test_equals<TagObjectUnion>(
    TagObjectUnion,
)((input) => typia.equals(input));
