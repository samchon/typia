import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagType = _test_assertParse(
    "TagType",
    TagType.generate,
    (input) => TSON.assertParse<TagType>(input),
    TagType.SPOILERS,
);
