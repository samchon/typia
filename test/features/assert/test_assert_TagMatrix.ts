import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagMatrix = _test_assert(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.assert(input),
    TagMatrix.SPOILERS,
);