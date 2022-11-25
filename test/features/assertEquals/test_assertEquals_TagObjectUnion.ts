import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagObjectUnion = _test_assertEquals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => TSON.assertEquals(input),
);