import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagLength } from "../../structures/TagLength";

export const test_is_TagLength = _test_is(
    "TagLength",
    TagLength.generate,
    typia.createIs<TagLength>(),
    TagLength.SPOILERS,
);
