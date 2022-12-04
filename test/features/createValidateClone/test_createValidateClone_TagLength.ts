import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagLength = _test_validateClone(
    "TagLength",
    TagLength.generate,
    TSON.createValidateClone<TagLength>(),
    TagLength.SPOILERS,
);
