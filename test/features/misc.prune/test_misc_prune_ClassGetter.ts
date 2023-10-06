import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_prune_ClassGetter = _test_misc_prune(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.misc.prune<ClassGetter>(input));
