import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_isPrune_ObjectTuple = (): void => _test_misc_isPrune(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.misc.isPrune<ObjectTuple>(input));
