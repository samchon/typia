import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagLength } from "../../structures/TagLength";

export const test_createIsParse_TagLength = _test_isParse(
    "TagLength",
    TagLength.generate,
    typia.createIsParse<TagLength>(),
    TagLength.SPOILERS,
);
