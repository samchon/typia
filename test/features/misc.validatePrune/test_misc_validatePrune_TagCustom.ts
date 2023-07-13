import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_validatePrune_TagCustom = _test_misc_validatePrune(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.misc.validatePrune(input),
    TagCustom.SPOILERS,
);
