import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_isClone_ObjectGenericArray = (): void => _test_misc_isClone(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.misc.isClone<ObjectGenericArray>(input));
