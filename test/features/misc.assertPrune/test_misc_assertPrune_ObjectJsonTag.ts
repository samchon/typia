import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_assertPrune_ObjectJsonTag = _test_misc_assertPrune(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)((input) => typia.misc.assertPrune<ObjectJsonTag>(input));
