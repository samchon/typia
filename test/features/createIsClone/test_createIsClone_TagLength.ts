import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagLength = _test_isClone(
    "TagLength",
    TagLength.generate,
    TSON.createIsClone<TagLength>(),
    TagLength.SPOILERS,
);