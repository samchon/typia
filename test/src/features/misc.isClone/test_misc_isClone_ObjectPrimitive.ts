import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_isClone_ObjectPrimitive = (): void => _test_misc_isClone(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)((input) => typia.misc.isClone<ObjectPrimitive>(input));
