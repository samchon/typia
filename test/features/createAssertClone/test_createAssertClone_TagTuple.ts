import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagTuple } from "../../structures/TagTuple";

export const test_createAssertClone_TagTuple = _test_assertClone(
    "TagTuple",
    TagTuple.generate,
    typia.createAssertClone<TagTuple>(),
    TagTuple.SPOILERS,
);
