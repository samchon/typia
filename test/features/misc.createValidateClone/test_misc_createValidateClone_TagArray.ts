import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagArray } from "../../structures/TagArray";

export const test_misc_validateClone_TagArray = _test_misc_validateClone(
    "TagArray",
    TagArray.generate,
    typia.misc.createValidateClone<TagArray>(),
    TagArray.SPOILERS,
);
