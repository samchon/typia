import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_misc_createValidatePrune_ObjectHttpUndefindable = (): void => _test_misc_validatePrune(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.misc.createValidatePrune<ObjectHttpUndefindable>());
