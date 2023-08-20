import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagPattern } from "../../structures/TagPattern";

export const test_validateClone_TagPattern = _test_validateClone(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.validateClone<TagPattern>(input),
    TagPattern.SPOILERS,
);
