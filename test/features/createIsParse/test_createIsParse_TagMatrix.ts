import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagMatrix = _test_isParse(
    "TagMatrix",
    TagMatrix.generate,
    TSON.createIsParse<TagMatrix>(),
    TagMatrix.SPOILERS,
);
