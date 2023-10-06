import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createIsPrune_ObjectPrimitive = _test_misc_isPrune(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)(typia.misc.createIsPrune<ObjectPrimitive>());
