import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createValidateParse_TagMatrix = _test_validateParse(
    "TagMatrix",
    TagMatrix.generate,
    typia.createValidateParse<TagMatrix>(),
    TagMatrix.SPOILERS,
);
