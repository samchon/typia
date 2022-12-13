import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagTuple = _test_assertEquals(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.assertEquals(input),
);