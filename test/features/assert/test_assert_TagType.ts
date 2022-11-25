import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagType = _test_assert(
    "TagType",
    TagType.generate,
    (input) => TSON.assert(input),
    TagType.SPOILERS,
);
