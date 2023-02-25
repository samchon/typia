import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagArray = _test_validateClone(
    "TagArray",
    TagArray.generate,
    typia.createValidateClone<TagArray>(),
    TagArray.SPOILERS,
);
