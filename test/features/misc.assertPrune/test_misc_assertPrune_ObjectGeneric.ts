import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_assertPrune_ObjectGeneric = _test_misc_assertPrune(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)((input) => typia.misc.assertPrune<ObjectGeneric>(input));
