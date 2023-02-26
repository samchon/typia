import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_createValidatePrune_TagFormat = _test_validatePrune(
    "TagFormat",
    TagFormat.generate,
    typia.createValidatePrune<TagFormat>(),
    TagFormat.SPOILERS,
);
