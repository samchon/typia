import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_clone_ObjectUndefined = (): void => _test_misc_clone(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((input) => typia.misc.clone<ObjectUndefined>(input));
