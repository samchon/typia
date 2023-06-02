import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagArray } from "../../structures/TagArray";

export const test_validatePrune_TagArray = _test_validatePrune(
    "TagArray",
    TagArray.generate,
    (input) => typia.validatePrune(input),
    TagArray.SPOILERS,
);
