import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_validatePrune_ObjectSimple = _test_misc_validatePrune(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.misc.validatePrune<ObjectSimple>(input));
