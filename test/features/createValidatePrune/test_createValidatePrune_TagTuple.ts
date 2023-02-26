import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagTuple } from "../../structures/TagTuple";

export const test_createValidatePrune_TagTuple = _test_validatePrune(
    "TagTuple",
    TagTuple.generate,
    typia.createValidatePrune<TagTuple>(),
    TagTuple.SPOILERS,
);
