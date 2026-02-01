import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_prune_ObjectUndefined = (): void => _test_misc_prune(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((input) => typia.misc.prune<ObjectUndefined>(input));
