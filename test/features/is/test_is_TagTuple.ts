import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagTuple } from "../../structures/TagTuple";

export const test_is_TagTuple = _test_is(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.is(input),
    TagTuple.SPOILERS,
);
