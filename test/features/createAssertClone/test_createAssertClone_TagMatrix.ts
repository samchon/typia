import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagMatrix = _test_assertClone(
    "TagMatrix",
    TagMatrix.generate,
    TSON.createAssertClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
