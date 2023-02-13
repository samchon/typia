import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagRange = _test_validatePrune(
    "TagRange",
    TagRange.generate,
    (input) => typia.validatePrune(input),
    TagRange.SPOILERS,
);