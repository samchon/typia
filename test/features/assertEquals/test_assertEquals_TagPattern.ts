import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagPattern } from "../../structures/TagPattern";

export const test_assertEquals_TagPattern = _test_assertEquals(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assertEquals(input),
);
