import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagInfinite = _test_validatePrune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.validatePrune(input),
    TagInfinite.SPOILERS,
);