import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagInfinite = _test_assertEquals(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.assertEquals(input),
);
