import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagLength = _test_validateStringify(
    "TagLength",
    TagLength.generate,
    TSON.createValidateStringify<TagLength>(),
    TagLength.SPOILERS,
);
