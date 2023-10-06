import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_validatePrune_TypeTagTuple = _test_misc_validatePrune(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((input) => typia.misc.validatePrune<TypeTagTuple>(input));
