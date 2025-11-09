import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ObjectGenericArray = (): void => _test_misc_assertClone(TypeGuardError)(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.misc.assertClone<ObjectGenericArray>(input));
