import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagArray = _test_assertClone(
    "TagArray",
    TagArray.generate,
    TSON.createAssertClone<TagArray>(),
    TagArray.SPOILERS,
);
