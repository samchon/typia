import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagLength } from "../../structures/TagLength";

export const test_createAssertClone_TagLength = _test_assertClone(
    "TagLength",
    TagLength.generate,
    typia.createAssertClone<TagLength>(),
    TagLength.SPOILERS,
);
