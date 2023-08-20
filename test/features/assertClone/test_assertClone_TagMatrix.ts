import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_assertClone_TagMatrix = _test_assertClone(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.assertClone<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
