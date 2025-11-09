import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_clone_ObjectPrimitive = (): void => _test_misc_clone(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)((input) => typia.misc.clone<ObjectPrimitive>(input));
