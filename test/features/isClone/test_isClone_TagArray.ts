import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TagArray = _test_isClone(
    "TagArray",
    TagArray.generate,
    (input) => TSON.isClone(input),
    TagArray.SPOILERS,
);
