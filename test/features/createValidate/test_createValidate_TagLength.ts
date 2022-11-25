import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagLength = _test_validate(
    "TagLength",
    TagLength.generate,
    TSON.createValidate<TagLength>(),
    TagLength.SPOILERS,
);