import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createValidateClone_TagMatrix = _test_validateClone(
    "TagMatrix",
    TagMatrix.generate,
    typia.createValidateClone<TagMatrix>(),
    TagMatrix.SPOILERS,
);
