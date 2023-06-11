import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagArray } from "../../structures/TagArray";

export const test_createIs_TagArray = _test_is(
    "TagArray",
    TagArray.generate,
    typia.createIs<TagArray>(),
    TagArray.SPOILERS,
);
