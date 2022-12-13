import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagTuple = _test_equals(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.equals(input),
);