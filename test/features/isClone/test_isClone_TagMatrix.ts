import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_isClone_TagMatrix = _test_isClone(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.isClone<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
