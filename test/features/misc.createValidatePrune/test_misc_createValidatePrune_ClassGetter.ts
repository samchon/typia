import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_createValidatePrune_ClassGetter = _test_misc_validatePrune(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.misc.createValidatePrune<ClassGetter>());
