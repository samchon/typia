import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createAssertClone_TagMatrix = _test_assertClone(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
