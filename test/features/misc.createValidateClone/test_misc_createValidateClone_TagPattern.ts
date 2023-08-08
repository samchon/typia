import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_validateClone_TagPattern = _test_misc_validateClone(
    "TagPattern",
    TagPattern.generate,
    typia.misc.createValidateClone<TagPattern>(),
    TagPattern.SPOILERS,
);
