import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_validatePrune_TagInfinite = _test_validatePrune(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.validatePrune<TagInfinite>(input),
    TagInfinite.SPOILERS,
);
