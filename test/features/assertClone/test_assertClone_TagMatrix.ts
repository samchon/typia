import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagMatrix = _test_assertClone(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.assertClone(input),
    TagMatrix.SPOILERS,
);