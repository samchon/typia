import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ObjectGenericAlias = (): void => _test_misc_assertClone(TypeGuardError)(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.misc.assertClone<ObjectGenericAlias>(input));
