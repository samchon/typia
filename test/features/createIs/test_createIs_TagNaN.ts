import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagNaN } from "../../structures/TagNaN";

export const test_createIs_TagNaN = _test_is(
    "TagNaN",
    TagNaN.generate,
    typia.createIs<TagNaN>(),
    TagNaN.SPOILERS,
);
