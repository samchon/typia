import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagMatrix = _test_validateClone(
    "TagMatrix",
    TagMatrix.generate,
    TSON.createValidateClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
