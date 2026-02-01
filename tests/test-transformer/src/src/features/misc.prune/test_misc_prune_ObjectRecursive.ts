import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_prune_ObjectRecursive = (): void => _test_misc_prune(
    "ObjectRecursive",
)<ObjectRecursive>(
    ObjectRecursive
)((input) => typia.misc.prune<ObjectRecursive>(input));
