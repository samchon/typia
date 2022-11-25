import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagArray = _test_equals(
    "TagArray",
    TagArray.generate,
    (input) => TSON.equals(input),
);