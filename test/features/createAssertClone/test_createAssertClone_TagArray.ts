import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagArray } from "../../structures/TagArray";

export const test_createAssertClone_TagArray = _test_assertClone(
    "TagArray",
    TagArray.generate,
    typia.createAssertClone<TagArray>(),
    TagArray.SPOILERS,
);
