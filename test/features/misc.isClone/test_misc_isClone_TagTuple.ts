import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_isClone_TagTuple = _test_misc_isClone(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.misc.isClone(input),
    TagTuple.SPOILERS,
);
