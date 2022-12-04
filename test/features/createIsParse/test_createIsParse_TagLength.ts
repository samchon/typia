import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagLength = _test_isParse(
    "TagLength",
    TagLength.generate,
    TSON.createIsParse<TagLength>(),
    TagLength.SPOILERS,
);
