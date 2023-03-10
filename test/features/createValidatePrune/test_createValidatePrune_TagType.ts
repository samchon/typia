import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagType } from "../../structures/TagType";

export const test_createValidatePrune_TagType = _test_validatePrune(
    "TagType",
    TagType.generate,
    typia.createValidatePrune<TagType>(),
    TagType.SPOILERS,
);
