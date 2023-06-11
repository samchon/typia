import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagLength } from "../../structures/TagLength";

export const test_isClone_TagLength = _test_isClone(
    "TagLength",
    TagLength.generate,
    (input) => typia.isClone(input),
    TagLength.SPOILERS,
);
