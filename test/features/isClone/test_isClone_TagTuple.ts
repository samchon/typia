import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagTuple } from "../../structures/TagTuple";

export const test_isClone_TagTuple = _test_isClone(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.isClone(input),
    TagTuple.SPOILERS,
);
