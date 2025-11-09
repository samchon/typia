import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_misc_validatePrune_ObjectHttpConstant = (): void => _test_misc_validatePrune(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.misc.validatePrune<ObjectHttpConstant>(input));
