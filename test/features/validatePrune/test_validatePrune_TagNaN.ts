import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_validatePrune_TagNaN = _test_validatePrune(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.validatePrune<TagNaN>(input),
    TagNaN.SPOILERS,
);
