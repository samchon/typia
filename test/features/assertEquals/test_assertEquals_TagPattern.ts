import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagPattern = _test_assertEquals(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.assertEquals(input),
);
