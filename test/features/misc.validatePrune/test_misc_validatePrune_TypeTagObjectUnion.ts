import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_validatePrune_TypeTagObjectUnion = _test_misc_validatePrune(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)((input) => typia.misc.validatePrune<TypeTagObjectUnion>(input));
