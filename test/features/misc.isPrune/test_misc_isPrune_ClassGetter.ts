import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_isPrune_ClassGetter = _test_misc_isPrune(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.misc.isPrune<ClassGetter>(input));
