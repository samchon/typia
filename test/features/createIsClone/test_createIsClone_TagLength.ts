import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagLength } from "../../structures/TagLength";

export const test_createIsClone_TagLength = _test_isClone(
    "TagLength",
    TagLength.generate,
    typia.createIsClone<TagLength>(),
    TagLength.SPOILERS,
);
