import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_isPrune_ObjectHttpArray = (): void => _test_misc_isPrune(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((input) => typia.misc.isPrune<ObjectHttpArray>(input));
