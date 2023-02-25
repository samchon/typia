import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagFormat = _test_validatePrune(
    "TagFormat",
    TagFormat.generate,
    typia.createValidatePrune<TagFormat>(),
    TagFormat.SPOILERS,
);
