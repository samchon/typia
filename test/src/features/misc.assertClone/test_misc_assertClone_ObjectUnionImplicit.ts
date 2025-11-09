import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ObjectUnionImplicit = (): void => _test_misc_assertClone(TypeGuardError)(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((input) => typia.misc.assertClone<ObjectUnionImplicit>(input));
