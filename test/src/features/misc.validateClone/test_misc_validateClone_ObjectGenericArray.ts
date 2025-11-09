import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_validateClone_ObjectGenericArray = (): void => _test_misc_validateClone(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.misc.validateClone<ObjectGenericArray>(input));
