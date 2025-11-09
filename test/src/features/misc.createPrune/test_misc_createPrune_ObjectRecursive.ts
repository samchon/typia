import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_createPrune_ObjectRecursive = (): void => _test_misc_prune(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)(typia.misc.createPrune<ObjectRecursive>());
