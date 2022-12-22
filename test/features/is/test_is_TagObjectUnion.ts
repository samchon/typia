import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_TagObjectUnion = _test_is(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.is(input),
    TagObjectUnion.SPOILERS,
);
