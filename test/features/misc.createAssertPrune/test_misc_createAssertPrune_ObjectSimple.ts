import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_createAssertPrune_ObjectSimple = _test_misc_assertPrune(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.misc.createAssertPrune<ObjectSimple>());
