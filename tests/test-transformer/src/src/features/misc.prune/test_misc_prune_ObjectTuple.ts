import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_prune_ObjectTuple = (): void => _test_misc_prune(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.misc.prune<ObjectTuple>(input));
