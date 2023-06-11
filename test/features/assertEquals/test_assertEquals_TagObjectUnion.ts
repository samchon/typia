import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_assertEquals_TagObjectUnion = _test_assertEquals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.assertEquals(input),
);
