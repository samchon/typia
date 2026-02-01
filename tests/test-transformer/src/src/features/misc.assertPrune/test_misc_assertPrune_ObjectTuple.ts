import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectTuple = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.misc.assertPrune<ObjectTuple>(input));
