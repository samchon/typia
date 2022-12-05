import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagArray = _test_validateClone(
    "TagArray",
    TagArray.generate,
    (input) => TSON.validateClone(input),
    TagArray.SPOILERS,
);
