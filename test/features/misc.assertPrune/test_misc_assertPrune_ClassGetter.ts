import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_assertPrune_ClassGetter = _test_misc_assertPrune(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.misc.assertPrune<ClassGetter>(input));
