import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagType = _test_validateClone(
    "TagType",
    TagType.generate,
    TSON.createValidateClone<TagType>(),
    TagType.SPOILERS,
);
