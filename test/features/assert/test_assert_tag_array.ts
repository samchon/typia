import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_array = _test_assert(
    "array tag",
    TagArray.generate,
    (input) => TSON.assert(input),
    TagArray.SPOILERS,
);
