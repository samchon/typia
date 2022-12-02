import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagType = _test_assertEquals(
    "TagType",
    TagType.generate,
    (input) => TSON.assertEquals(input),
);
