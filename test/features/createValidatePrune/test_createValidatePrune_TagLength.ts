import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagLength } from "../../structures/TagLength";

export const test_createValidatePrune_TagLength = _test_validatePrune(
    "TagLength",
    TagLength.generate,
    typia.createValidatePrune<TagLength>(),
    TagLength.SPOILERS,
);
