import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_TagCustom = _test_validatePrune(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.validatePrune(input),
    TagCustom.SPOILERS,
);
