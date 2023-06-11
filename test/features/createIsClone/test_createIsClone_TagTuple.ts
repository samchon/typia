import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagTuple } from "../../structures/TagTuple";

export const test_createIsClone_TagTuple = _test_isClone(
    "TagTuple",
    TagTuple.generate,
    typia.createIsClone<TagTuple>(),
    TagTuple.SPOILERS,
);
