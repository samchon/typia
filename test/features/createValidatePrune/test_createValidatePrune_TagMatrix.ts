import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagMatrix = _test_validatePrune(
    "TagMatrix",
    TagMatrix.generate,
    typia.createValidatePrune<TagMatrix>(),
    TagMatrix.SPOILERS,
);
