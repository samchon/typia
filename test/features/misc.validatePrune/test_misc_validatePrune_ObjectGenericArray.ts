import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_validatePrune_ObjectGenericArray = _test_misc_validatePrune(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.misc.validatePrune<ObjectGenericArray>(input));
