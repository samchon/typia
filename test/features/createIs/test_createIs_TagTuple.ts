import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagTuple = _test_is(
    "TagTuple",
    TagTuple.generate,
    typia.createIs<TagTuple>(),
    TagTuple.SPOILERS,
);