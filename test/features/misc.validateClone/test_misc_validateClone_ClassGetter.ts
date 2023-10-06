import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_validateClone_ClassGetter = _test_misc_validateClone(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.misc.validateClone<ClassGetter>(input));
