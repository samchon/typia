import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createAssertPrune_ObjectAlias = _test_misc_assertPrune(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.misc.createAssertPrune<ObjectAlias>());
