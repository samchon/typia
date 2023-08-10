import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagStep } from "../../structures/TagStep";

export const test_misc_assertPrune_TagStep = _test_misc_assertPrune<TagStep>(
    TagStep,
)((input) => typia.misc.assertPrune<TagStep>(input));
