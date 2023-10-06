import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_assertPrune_ObjectRequired = _test_misc_assertPrune(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.misc.assertPrune<ObjectRequired>(input));
